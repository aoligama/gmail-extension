const appid = 'sdk_aplechallenge_287a2244e4'
const endpoint = 'https://dev.to/mikeeus/building-gmailchrome-extension-with-vuejs-and-inboxsdk-20ah'
let template

// styles
const modalStyles = `
  width: 300px;
  padding: 24px
`
const iframeStyles = `
  border: 1px solid #F2F2F2;
  border-radius: 7px;
`
const titleStyles = `
  font-weight: 700;
`

window.addEventListener('message', event => {
  if (event.origin !== src && !event.data?.template) return
  template = event.data.template;
}, false)

InboxSDK.load(2, appid).then(sdk => {
  sdk.Compose.registerComposeViewHandler(composeView => {
    const modalView = `
      <div style="${modalStyles}">
        <h1 style="${titleStyles}"> 
          Awesome Templates
        </h1>
        <iframe 
          src=${endpoint}/templates 
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
