import Vue from 'vue'
const DOMParser = process.browser
  ? window.DOMParser
  : require('xmldom').DOMParser
const parser = new DOMParser()

Vue.component('SvgInline', {
  props: {
    src: {
      type: String,
      required: true,
    },
    width: {
      type: String,
    },
    height: {
      type: String,
    },
    fill: {
      type: String,
    },
  },
  render(h) {
    // deb
    const document = parser.parseFromString(this.src, 'text/xml')
    const svg = document.getElementsByTagName('svg')[0]
    const attrs = {}
    console.log('svg', document)
    Array.prototype.forEach.call(svg.attributes, (attribute) => {
      attrs[attribute.nodeName] = attribute.nodeValue
    })
    if (this.width) {
      attrs.width = this.width
    }
    if (this.height) {
      attrs.height = this.height
    }
    if (this.fill) {
      attrs.fill = this.fill
    }
    return h('svg', {
      ...this.data,
      attrs,
      domProps: {
        innerHTML: svg.innerHTML,
      },
    })
  },
})
