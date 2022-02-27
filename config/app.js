const appid = 'sdk_aplechallenge_287a2244e4'
const endpoint = 'http://localhost:3000'
let template

// styles
const modalStyles = `
  width: 400px;
  height: 600px;
`
const iframeStyles = `
  width: 100%;
  height: 100%;
  border: none;
`
const titleStyles = `
  font-weight: 700;
`

window.addEventListener('message', event => {
  if (event.origin !== endpoint && !event.data?.template) return
  template = event.data.template;
}, false)

InboxSDK.load(2, appid).then(sdk => {
  sdk.Compose.registerComposeViewHandler(composeView => {
    const modalView = `
      <div style="${modalStyles}">
        <iframe 
          src=${endpoint} 
          title="Some awesome templates"
          style="${iframeStyles}"
        ></iframe>
      </div>
    `
    
    composeView.addButton({
      iconUrl: chrome.extension.getURL('icon.png'),
      title: 'Awesome Templates',
      onClick: event => {
        const modal = sdk.Widgets.showModalView({
          el: modalView,
          chrome: false,
          buttons: [
            {
              type: "PRIMARY_ACTION",
              text: "Confirm",
              onClick: () => {
                event.composeView.setBodyHTML(template)
                modal.close();
              },
            },
            {
              text: "Cancel",
              onClick: () => {
                modal.close()
              },
            },
          ],
        })
      },
    })
  })
})
