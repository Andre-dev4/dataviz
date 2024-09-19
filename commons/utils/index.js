import axios from 'axios'

async function exportGTAB(containerID, exportParams) {
  const dlElement = document.querySelector('#' + containerID)

  const HTMLOuter = dlElement.outerHTML
  let datasHTML = ''

  if (exportParams.title !== undefined && exportParams.title !== '') {
    datasHTML += "<div class='export_title'>" + exportParams.title + '</div>'
  }

  const componentStyles = document.querySelectorAll('head > style')
  let styles = ''
  componentStyles.forEach(function (currentValue, currentIndex, listObj) {
    styles += currentValue.outerHTML
  })
  datasHTML =
    '<html>' +
    '<head><meta data-n-head="1" charset="utf-8">' +
    styles +
    '</head>' +
    "<body id='bodySite' size='A4' layout='landscape'>" +
    "<div class='export_page'><div class='export_content'>" +
    // += datasHTML
    HTMLOuter +
    '</div></div>' +
    '</body></html>'

  let exportTitle = 'parlonsclimat.pdf'
  if (exportParams.exportTitle !== undefined)
    exportTitle = exportParams.exportTitle

  let apiUrl = $nuxt.$store.state.appSettings.htmlToPdfUrl // eslint-disable-line
  let accessToken = $nuxt.$store.state.appSettings.htmlToPdfToken // eslint-disable-line

  const result = await axios
    .post(
      apiUrl,
      {
        datas: datasHTML,
        title: exportTitle,
        source: 'https://' + $nuxt.$store.state.SERVICE_HOST, // eslint-disable-line
        landscape: false,
        displayHeaderFooter: false,
        headerTemplate: false,
        footerTemplate: false,
        viewPort: {
          width: 1280,
        },
      },
      {
        responseType: 'blob',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then((response) => {
      if (process.browser) console.log('response', response)
      const file = new Blob([response.data], { type: 'application/pdf' })
      const fileURL = URL.createObjectURL(file)
      window.open(fileURL)
      const a = document.createElement('a')
      a.href = fileURL
      a.target = '_blank'
      a.download = exportTitle
      document.querySelector('body').setAttribute('data-downloading', 'false')
      document.body.appendChild(a)
      a.click()
      return response
    })
  return result
}

export { exportGTAB }
