import Vue from 'vue'
// import * as _ from 'lodash'
const slugify = require('underscore.string/slugify')
// const DOMParser = process.browser ? window.DOMParser : require('xmldom').DOMParser
// const parser = new DOMParser()
Vue.mixin({
  methods: {
    slugify(fTitle) {
      return slugify(fTitle)
    },
    debugLog(fTimer, fLog) {
      /*
      console.log('//////////////////')
      console.timeLog(fTimer)
      console.log('fLog', fLog)
      console.log('//////////////////')
      */
    },
    svgPath(id) {
      return require('~/assets/_svg/_icos/types-vehicules/tous-type.svg?inline')
    },
    numberWithSpaces(x) {
      if (x === 0) return '0'
      if (!x) return x
      if (parseFloat(x) < 1000) return x
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    },
  },
})
