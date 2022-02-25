const appid = 'sdk_aplechallenge_287a2244e4'
const endpoint = 'https://dev.to/mikeeus/building-gmailchrome-extension-with-vuejs-and-inboxsdk-20ah'

const modalStyles = `
  width: 300px;
  padding: 24px
`

const iframeStyles = `
  border: 1px solid #F2F2F2;
  border-radius: 7px;
`

let template

window.addEventListener('message', event => {
    if (event.origin !== src && !event.data?.template) {
      return
    }
    template = event.data.template
}, false)

InboxSDK.load('1.0', appid).then(sdk => {
  sdk.Compose.registerComposeViewHandler(composeView => {
    const html = `
      <div style="${modalStyles}">
          <h1>Awesome Templates</h1>
      </div>
    `
    composeView.addButton({
      title: 'Awesome Templates',
      iconUrl: chrome.extension.getURL('icon.png'),
      chrome: false,
      onClick: function(event) {
        sdk.Widgets.showModalView({
          'el': `${html}`,
        })
      },
    })
  })
})