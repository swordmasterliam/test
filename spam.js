var num = prompt('how many?')
function openInNewTab(href) {
  Object.assign(document.createElement('a'), {
    target: '_blank',
    rel: 'noopener noreferrer',
    href: href,
  }).click();
}
const times = x => f => {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}

times (num) (() => openInNewTab("https://google.com"))