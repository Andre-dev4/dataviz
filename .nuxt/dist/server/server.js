module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/app-footer","2":"components/app-header","3":"components/box-select-page-head","4":"components/highcharts-compo","5":"components/mobile-classement","6":"components/mobile-classement-reverse","7":"components/module-pdc-count","8":"components/module-vehicule-count","9":"components/nuxt-logo","10":"components/quintiles-graph","11":"components/quintiles-graph-reversepdc","12":"components/quintiles-graph2axis","13":"components/quintiles-graph2axis-reverse","14":"components/selector-radio","15":"components/selector-select-epci-cat","16":"components/selector-select-location","17":"components/tutorial","18":"pages/gaz","19":"pages/gaz/_territoireType","20":"pages/gaz/_territoireType/_locationSlug","21":"pages/gaz/_territoireType/_locationSlug/index","22":"pages/index","23":"pages/index/vehicules-electriques-et-hybrides-rechargeables/_territoireType","24":"pages/index/vehicules-electriques-et-hybrides-rechargeables/_territoireType/_locationSlug","25":"pages/index/vehicules-electriques-et-hybrides-rechargeables/_territoireType/_locationSlug/index","26":"pages/index123","27":"pages/test","28":"pages/updater"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getCommunes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCommunesStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDepartements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getDepartementsStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getRegions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getRegionsStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getEPCI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getEPCIStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getINFOSStatic; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);



const slugify = __webpack_require__(12);
const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  httpsAgent: new (__webpack_require__(25).Agent)({
    rejectUnauthorized: false
  })
});
/// DISABLE AS FACET REQUEST LIMITED TO 5
/*
function getLocationsElec (store) {
  console.log(getODSRequest('&facet=libelle_reg&facet=code_reg'))
  const facets = ['libelle_reg','code_reg']
  let facetsRequest = ''
  for (facet in facets) {
    facetsRequest += '&facet=' + face
  }
  return axios.get(getODSRequest(facetsRequest))
    .then(response => {
       // DEPARTEMENTS
       const groupDpt = _.find(response.data.facet_groups, function (fGroup) { return fGroup.name === 'libelle_dpt'})
       const groupDptCodes = _.find(response.data.facet_groups, function (fGroup) { return fGroup.name === 'code_dpt'})
       // console.log('groupDptCodes', groupDptCodes)
       const departements = _.map(groupDpt.facets, function (fDpt, fDptIndex) { 
        return {
          label: fDpt.name,
          code: parseInt(groupDptCodes.facets[fDptIndex].name)
        }
      })

      // REGIONS
       const groupRegions = _.find(response.data.facet_groups, function (fGroup) { return fGroup.name === 'libelle_reg'})
       const groupRegionsCodes = _.find(response.data.facet_groups, function (fGroup) { return fGroup.name === 'code_reg'})
       console.log('groupRegions', groupRegions)
       const regions = _.map(groupRegions.facets, function (fRegion, fRegionsIndex) { 
        return {
          label: fRegion.name,
          code: parseInt(groupRegionsCodes.facets[fRegionsIndex].name)
        }
      })

      // EPCI
       console.log('response.data.facet_groups', response.data.facet_groups)
       const groupEPCI = _.find(response.data.facet_groups, function (fGroup) { return fGroup.name === 'libelle_epci'})
       const groupEPCICodes = _.find(response.data.facet_groups, function (fGroup) { return fGroup.name === 'code_epci'})
       console.log('groupEPCICodes', groupEPCICodes)
       const EPCI = _.map(groupEPCI.facets, function (fEPCI, fEPCIIndex) { 
        return {
          label: fEPCI.name,
          code: parseInt(groupEPCICodes.facets[fEPCIIndex].name)
        }
      })

      store.commit('set_departements', departements)
      store.commit('set_regions', regions)
      store.commit('set_EPCI', EPCI)

      return {
        departements,
        regions,
        EPCI
      }
    })
}
*/

function getCommunes(store) {
  // console.log('getCommunes')
  const type = 'commune';
  let facetsRequest = 'exports/json?group_by=';
  facetsRequest += 'code_' + type + '_5' + ' as code,libelle_' + type + ' as label, code_epci as code_epci, code_reg as code_reg, pdc_epci';

  // console.log("getCommunes getODSRequestV2Export(facetsRequest)", getODSRequestV2Export(facetsRequest))
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(Object(_api_config__WEBPACK_IMPORTED_MODULE_2__[/* getODSRequestV2Export */ "c"])(facetsRequest)).then(response => {
    // COMMUNES
    // console.log('getCommunes response.data', response.data)
    const items = lodash__WEBPACK_IMPORTED_MODULE_0__["map"](response.data, function (fEntry) {
      return {
        ...fEntry,
        type
      };
    });
    return lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"](lodash__WEBPACK_IMPORTED_MODULE_0__["uniqBy"](items, function (fEntry) {
      return fEntry.code;
    }), function (fEntry2) {
      return slugify(fEntry2.label);
    });
  });
}
function getCommunesStatic(store) {
  // console.log('getCommunesStatic', process.env.API_URL + '/datas/communes.json')
  const type = 'commune';
  const API_URL = store.getters.get_full_host;
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(API_URL + '/datas/communes.json').then(response => {
    // COMMUNES
    // console.log('getCommunes response.data', response.data)
    const items = lodash__WEBPACK_IMPORTED_MODULE_0__["map"](response.data, function (fEntry) {
      return {
        ...fEntry,
        type
      };
    });
    return lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"](lodash__WEBPACK_IMPORTED_MODULE_0__["uniqBy"](items, function (fEntry) {
      return fEntry.code;
    }), function (fEntry2) {
      return slugify(fEntry2.label);
    });
  });
}

/*
function getCommunesOld(store) {
  const type = 'commune'
  let facetsRequest = 'records?group_by='
  facetsRequest +=
    'code_' +
    type +
    '_5' +
    ' as code,libelle_' +
    type +
    ' as label, code_epci as code_epci, code_reg as code_reg, pdc_epci'
  console.log("getCommunes getODSRequestV2(facetsRequest)", getODSRequestV2(facetsRequest))
  return axios.get(getODSRequestV2(facetsRequest)).then((response) => {
    // COMMUNES
    // console.log('response.data.records', response.data.records)
    const items = _.map(response.data.records, function (fEntry) {
      return {
        ...fEntry.record.fields,
        type,
      }
    })
    return _.sortBy(
      _.uniqBy(items, function (fEntry) {
        return fEntry.code
      }),
      function (fEntry2) {
        return slugify(fEntry2.label)
      }
    )
  })
}
*/
/*function getDepartements(store) {
  // console.log('getDepartements')
  const type = 'dpt'
  let facetsRequest = 'records?group_by='
  facetsRequest +=
    'code_' +
    type +
    ' as code,libelle_' +
    type +
    ' as label, code_epci as code_epci, code_reg as code_reg'
    // console.log("getDepartements getODSRequestV2(facetsRequest)", getODSRequestV2(facetsRequest))
  return axios.get(getODSRequestV2(facetsRequest)).then((response) => {
    // DEPARTEMENTS
    const items = _.map(response.data.records, function (fEntry) {
      return {
        ...fEntry.record.fields,
        type: 'dpt',
      }
    })
    return _.sortBy(
      _.uniqBy(items, function (fEntry) {
        return fEntry.code
      }),
      function (fEntry2) {
        return slugify(fEntry2.label)
      }
    )
  })
}*/

function getDepartements(store) {
  // console.log('getDepartements')
  const type = 'dpt';
  let facetsRequest = 'records?group_by=';
  facetsRequest += 'code_' + type + ' as code,libelle_' + type + ' as label, code_epci as code_epci, code_reg as code_reg';
  // console.log("getDepartements getODSRequestV2(facetsRequest)", getODSRequestV2(facetsRequest))
  return axiosInstance.get(Object(_api_config__WEBPACK_IMPORTED_MODULE_2__[/* getODSRequestV2 */ "b"])(facetsRequest)).then(response => {
    // DEPARTEMENTS
    const items = lodash__WEBPACK_IMPORTED_MODULE_0__["map"](response.data.records, function (fEntry) {
      return {
        ...fEntry.record.fields,
        type: 'dpt'
      };
    });
    return lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"](lodash__WEBPACK_IMPORTED_MODULE_0__["uniqBy"](items, function (fEntry) {
      return fEntry.code;
    }), function (fEntry2) {
      return slugify(fEntry2.label);
    });
  });
}
function getDepartementsStatic(store) {
  // console.log('getDepartementsStatic')
  const type = 'dpt';
  const API_URL = store.getters.get_full_host;
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(API_URL + '/datas/departements.json').then(response => {
    // DEPARTEMENTS
    const items = lodash__WEBPACK_IMPORTED_MODULE_0__["map"](response.data.records, function (fEntry) {
      return {
        ...fEntry.record.fields,
        type
      };
    });
    return lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"](lodash__WEBPACK_IMPORTED_MODULE_0__["uniqBy"](items, function (fEntry) {
      return fEntry.code;
    }), function (fEntry2) {
      return slugify(fEntry2.label);
    });
  });
}

/*function getRegions(store) {
  // console.log('getRegions')
  const type = 'reg'
  let facetsRequest = 'records?group_by='
  facetsRequest +=
    'code_' +
    type +
    ' as code,libelle_' +
    type +
    ' as label, code_epci as code_epci, stations_gnv_reg'
  // console.log("getRegions getODSRequestV2(facetsRequest)", getODSRequestV2(facetsRequest))
  return axios.get(getODSRequestV2(facetsRequest)).then((response) => {
    // DEPARTEMENTS
    const items = _.map(response.data.records, function (fEntry) {
      return {
        ...fEntry.record.fields,
        type: 'reg',
      }
    })
    return _.sortBy(
      _.uniqBy(items, function (fEntry) {
        return fEntry.code
      }),
      function (fEntry2) {
        return slugify(fEntry2.label)
      }
    )
  })
}*/

function getRegions(store) {
  const type = 'reg';
  let facetsRequest = 'records?group_by=';
  facetsRequest += 'code_' + type + ' as code,libelle_' + type + ' as label, code_epci as code_epci, stations_gnv_reg';
  return axiosInstance.get(Object(_api_config__WEBPACK_IMPORTED_MODULE_2__[/* getODSRequestV2 */ "b"])(facetsRequest)).then(response => {
    const items = lodash__WEBPACK_IMPORTED_MODULE_0__["map"](response.data.records, function (fEntry) {
      return {
        ...fEntry.record.fields,
        type: 'reg'
      };
    });
    return lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"](lodash__WEBPACK_IMPORTED_MODULE_0__["uniqBy"](items, function (fEntry) {
      return fEntry.code;
    }), function (fEntry2) {
      return slugify(fEntry2.label);
    });
  });
}
function getRegionsStatic(store) {
  // console.log('getRegions')
  const type = 'reg';
  const API_URL = store.getters.get_full_host;
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(API_URL + '/datas/regions.json').then(response => {
    // DEPARTEMENTS
    const items = lodash__WEBPACK_IMPORTED_MODULE_0__["map"](response.data.records, function (fEntry) {
      return {
        ...fEntry.record.fields,
        type
      };
    });
    return lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"](lodash__WEBPACK_IMPORTED_MODULE_0__["uniqBy"](items, function (fEntry) {
      return fEntry.code;
    }), function (fEntry2) {
      return slugify(fEntry2.label);
    });
  });
}

/*function getEPCI(store) {
  // console.log('getEPCI')
  const type = 'epci'
  let facetsRequest = 'records?group_by='
  facetsRequest +=
    'code_' +
    type +
    ' as code,libelle_' +
    type +
    ' as label, classe_epci as classe, code_reg as code_reg, code_dpt as code_dpt, pdc_epci'
    // console.log("getEPCI getODSRequestV2(facetsRequest)", getODSRequestV2(facetsRequest))
  return axios.get(getODSRequestV2(facetsRequest)).then((response) => {
    // DEPARTEMENTS
    const items = _.map(response.data.records, function (fEntry) {
      return {
        ...fEntry.record.fields,
        type: 'epci',
      }
    })
    return _.sortBy(
      _.uniqBy(items, function (fEntry) {
        return fEntry.code
      }),
      function (fEntry2) {
        return slugify(fEntry2.label)
      }
    )
  })
}*/

function getEPCI(store) {
  // console.log('getEPCI')
  const type = 'epci';
  let facetsRequest = 'records?group_by=';
  facetsRequest += 'code_' + type + ' as code,libelle_' + type + ' as label, classe_epci as classe, code_reg as code_reg, code_dpt as code_dpt, pdc_epci';
  // console.log("getEPCI getODSRequestV2(facetsRequest)", getODSRequestV2(facetsRequest))
  return axiosInstance.get(Object(_api_config__WEBPACK_IMPORTED_MODULE_2__[/* getODSRequestV2 */ "b"])(facetsRequest)).then(response => {
    // DEPARTEMENTS
    const items = lodash__WEBPACK_IMPORTED_MODULE_0__["map"](response.data.records, function (fEntry) {
      return {
        ...fEntry.record.fields,
        type: 'epci'
      };
    });
    return lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"](lodash__WEBPACK_IMPORTED_MODULE_0__["uniqBy"](items, function (fEntry) {
      return fEntry.code;
    }), function (fEntry2) {
      return slugify(fEntry2.label);
    });
  });
}
function getEPCIStatic(store) {
  // console.log('getEPCIStatic', process.env.API_URL + '/datas/EPCI.json')
  const type = 'epci';
  const API_URL = store.getters.get_full_host;
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(API_URL + '/datas/EPCI.json').then(response => {
    // console.log('response.data.records', response.data.records)
    // DEPARTEMENTS
    const items = lodash__WEBPACK_IMPORTED_MODULE_0__["map"](response.data.records, function (fEntry) {
      return {
        ...fEntry.record.fields,
        type
      };
    });
    return lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"](lodash__WEBPACK_IMPORTED_MODULE_0__["uniqBy"](items, function (fEntry) {
      return fEntry.code;
    }), function (fEntry2) {
      return slugify(fEntry2.label);
    });
  });
}
function getINFOSStatic(store) {
  // console.log('getINFOSStatic', process.env.API_URL + '/datas/infos.json')
  // const type = 'infos'
  const API_URL = store.getters.get_full_host;
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(API_URL + '/datas/infos.json').then(response => {
    // DEPARTEMENTS
    return response.data;
  });
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getODSRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getODSRequestV2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getODSRequestV2Export; });
const ODS_ORE_SETTINGS = {
  dataset: 'jdd-prive-vehicules-stations-electricite-gaz-par-territoires-classes',
  apiurl: 'https://opendata.agenceore.fr/',
  entrypoint: 'api/records/1.0/search',
  apiKey: '87683e64cdf02de7458bb5c1c5ab23259ca25affd3f95b9ca47f7e19'
};
const getODSRequest = function (fReq, fApiType = 'search') {
  const entrypoint = 'api/records/1.0/' + fApiType;
  const uriConstruct = ODS_ORE_SETTINGS.apiurl + entrypoint + '/?dataset=' + ODS_ORE_SETTINGS.dataset + fReq + '&apikey=' + ODS_ORE_SETTINGS.apiKey;
  return encodeURI(uriConstruct);
};
const getODSRequestV2 = function (fReq) {
  const entrypoint = 'api/v2/catalog';
  const uriConstruct = ODS_ORE_SETTINGS.apiurl + entrypoint + '/datasets/' + ODS_ORE_SETTINGS.dataset + '/' + fReq + '&apikey=' + ODS_ORE_SETTINGS.apiKey;
  return encodeURI(uriConstruct);
};
const getODSRequestV2Export = function (fReq) {
  const entrypoint = 'api/explore/v2.1/catalog';
  const uriConstruct = ODS_ORE_SETTINGS.apiurl + entrypoint + '/datasets/' + ODS_ORE_SETTINGS.dataset + '/' + fReq + '&apikey=' + ODS_ORE_SETTINGS.apiKey;
  return encodeURI(uriConstruct);
};


/*
/api/records/1.0/search/?dataset=jdd-prive-vehicules-stations-electricite-gaz-par-territoires-classes&q=&facet=libelle_reg

https://opendata.agenceore.fr/api/records/1.0/search/?dataset=jdd-prive-vehicules-stations-electricite-gaz-par-territoires-classes&q=&rows=4&facet=libelle_reg
*/

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("underscore.string/slugify");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("vue-in-viewport-directive");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("20fe578f", content, true, context)
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("709683a2", content, true, context)
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("node-fetch-native");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 20 */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"MobiliteElectrique\",\"meta\":[{\"hid\":\"charset\",\"charset\":\"utf-8\"},{\"hid\":\"viewport\",\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1\"},{\"hid\":\"mobile-web-app-capable\",\"name\":\"mobile-web-app-capable\",\"content\":\"yes\"},{\"hid\":\"apple-mobile-web-app-title\",\"name\":\"apple-mobile-web-app-title\",\"content\":\"MobiliteElectrique\"},{\"hid\":\"og:type\",\"name\":\"og:type\",\"property\":\"og:type\",\"content\":\"website\"},{\"hid\":\"og:title\",\"name\":\"og:title\",\"property\":\"og:title\",\"content\":\"MobiliteElectrique\"},{\"hid\":\"og:site_name\",\"name\":\"og:site_name\",\"property\":\"og:site_name\",\"content\":\"MobiliteElectrique\"}],\"link\":[{\"hid\":\"shortcut-icon\",\"rel\":\"shortcut icon\",\"href\":\"/_nuxt/icons/icon_64x64.a1500e.png\"},{\"hid\":\"apple-touch-icon\",\"rel\":\"apple-touch-icon\",\"href\":\"/_nuxt/icons/icon_512x512.a1500e.png\",\"sizes\":\"512x512\"},{\"rel\":\"manifest\",\"href\":\"/_nuxt/manifest.c10d2c7b.json\",\"hid\":\"manifest\"}],\"htmlAttrs\":{\"lang\":\"en\"}}");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(23);
module.exports = __webpack_require__(34);


/***/ }),
/* 23 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);

// import axios from 'axios'

const slugify = __webpack_require__(12);

// const fsp = require('fs').promises
/* const getCSV = async (path) => {
  const config = {
    crossdomain: true,
    debug: true
  }
  // console.log('LOAD XLSX ', path)
  await axios.get(path, config)
    .then(response => {
      
      return response.data
      
    })
    .catch(function (error) {
      console.log('error', error)
      if (error.response) {
      
      } else if (error.request) {
      
      } else {
      
      }
      // console.log(error.config)
    })
} */
/* harmony default export */ __webpack_exports__["default"] = (async function ({
  store,
  route,
  $config
}) {
  /* console.log('start getCSV')
  const allCSV = await getCSV('https://opendata.agenceore.fr/api/explore/v2.1/catalog/datasets/jdd-prive-vehicules-stations-electricite-gaz-par-territoires-classes/exports/json?group_by=code_commune_5%20as%20code,libelle_commune%20as%20label,%20code_epci%20as%20code_epci,%20code_reg%20as%20code_reg,%20pdc_epci&apikey=c435a9e0645bf232bfc747da6fca78edd3a3b805d95ddd09d6f515f4')
  console.log('allCSV', allCSV)
  console.log('end getCSV') */

  if (route.params.territoireType) {
    const targetTerritoireType = lodash__WEBPACK_IMPORTED_MODULE_0__["find"](store.getters.get_type_territoires, function (fEntry) {
      return slugify(fEntry.label) === route.params.territoireType;
    });
    store.commit('set_current_type_territoire', targetTerritoireType);
  }
  const storeINFOS = store.getters.get_INFOS_v2;
  const INFOS = storeINFOS.length > 0 ? storeINFOS : await Object(_api__WEBPACK_IMPORTED_MODULE_1__[/* getINFOSStatic */ "f"])(store);
  const storeEPCI = store.getters.get_EPCI;
  const EPCI = storeEPCI.length > 0 ? storeEPCI : await Object(_api__WEBPACK_IMPORTED_MODULE_1__[/* getEPCIStatic */ "e"])(store);
  if (route.path !== "/") {
    const storeCommunes = store.getters.get_communes;
    const communes = storeCommunes.length > 0 ? storeCommunes : await Object(_api__WEBPACK_IMPORTED_MODULE_1__[/* getCommunesStatic */ "a"])(store);
    store.commit('set_communes', communes);
  }
  const communes = store.getters.get_communes;
  const storeDepartements = store.getters.get_departements;
  const departements = storeDepartements.length > 0 ? storeDepartements : await Object(_api__WEBPACK_IMPORTED_MODULE_1__[/* getDepartementsStatic */ "c"])(store);
  store.commit('set_departements', departements);
  const storeRegions = store.getters.get_regions;
  let regions = storeRegions.length > 0 ? storeRegions : await Object(_api__WEBPACK_IMPORTED_MODULE_1__[/* getRegionsStatic */ "h"])(store);
  regions = lodash__WEBPACK_IMPORTED_MODULE_0__["map"](regions, function (fRegion) {
    const regUniqEPCI = lodash__WEBPACK_IMPORTED_MODULE_0__["uniq"](lodash__WEBPACK_IMPORTED_MODULE_0__["map"](lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](communes, function (fDepartement) {
      return fDepartement.code_reg === fRegion.code;
    }), 'code_epci'));
    // console.log('regUniqEPCI', regUniqEPCI)
    return {
      ...fRegion,
      sum_pdc: lodash__WEBPACK_IMPORTED_MODULE_0__["sumBy"](lodash__WEBPACK_IMPORTED_MODULE_0__["map"](regUniqEPCI, function (fEPCICode) {
        return lodash__WEBPACK_IMPORTED_MODULE_0__["find"](EPCI, function (fEPCI) {
          return fEPCICode === fEPCI.code;
        });
      }), 'pdc_epci')
    };
  });
  // console.log('regions', regions)
  store.commit('set_regions', regions);
  store.commit('set_EPCI', EPCI);
  store.commit('set_INFOS', INFOS);
  return {
    communes,
    departements,
    regions,
    EPCI
  };
});

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{align-items:center;background:#f7f8fb;color:#47494e;display:flex;flex-direction:column;font-family:sans-serif;font-weight:100!important;justify-content:center;padding:1rem;text-align:center;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;bottom:0;left:0;position:absolute;right:0;top:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{color:#47494e;font-size:1.5rem;margin-bottom:8px;margin-top:15px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;-webkit-text-decoration:none;text-decoration:none}.__nuxt-error-page .logo{bottom:12px;left:12px;position:fixed}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{background-color:#000;height:2px;left:0;opacity:1;position:fixed;right:0;top:0;transition:width .1s,opacity .4s;width:0;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(11).default("2c6794ac", content, true)

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:italic;font-weight:600;src:url(https://fonts.gstatic.com/s/opensans/v35/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0RkxhjWV0ewJER.woff2) format(\"woff2\");unicode-range:u+0460-052f,u+1c80-1c88,u+20b4,u+2de0-2dff,u+a640-a69f,u+fe2e-fe2f}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:italic;font-weight:600;src:url(https://fonts.gstatic.com/s/opensans/v35/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0RkxhjWVQewJER.woff2) format(\"woff2\");unicode-range:u+0301,u+0400-045f,u+0490-0491,u+04b0-04b1,u+2116}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:italic;font-weight:600;src:url(https://fonts.gstatic.com/s/opensans/v35/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0RkxhjWVwewJER.woff2) format(\"woff2\");unicode-range:u+1f??}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:italic;font-weight:600;src:url(https://fonts.gstatic.com/s/opensans/v35/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0RkxhjWVMewJER.woff2) format(\"woff2\");unicode-range:u+0370-03ff}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:italic;font-weight:600;src:url(https://fonts.gstatic.com/s/opensans/v35/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0RkxhjWVIewJER.woff2) format(\"woff2\");unicode-range:u+0590-05ff,u+200c-2010,u+20aa,u+25cc,u+fb1d-fb4f}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:italic;font-weight:600;src:url(https://fonts.gstatic.com/s/opensans/v35/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0RkxhjWV8ewJER.woff2) format(\"woff2\");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+0300-0301,u+0303-0304,u+0308-0309,u+0323,u+0329,u+1ea0-1ef9,u+20ab}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:italic;font-weight:600;src:url(https://fonts.gstatic.com/s/opensans/v35/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0RkxhjWV4ewJER.woff2) format(\"woff2\");unicode-range:u+0100-02af,u+0304,u+0308,u+0329,u+1e00-1e9f,u+1ef2-1eff,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:italic;font-weight:600;src:url(https://fonts.gstatic.com/s/opensans/v35/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0RkxhjWVAewA.woff2) format(\"woff2\");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+0304,u+0308,u+0329,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSKmu1aB.woff2) format(\"woff2\");unicode-range:u+0460-052f,u+1c80-1c88,u+20b4,u+2de0-2dff,u+a640-a69f,u+fe2e-fe2f}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSumu1aB.woff2) format(\"woff2\");unicode-range:u+0301,u+0400-045f,u+0490-0491,u+04b0-04b1,u+2116}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSOmu1aB.woff2) format(\"woff2\");unicode-range:u+1f??}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSymu1aB.woff2) format(\"woff2\");unicode-range:u+0370-03ff}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS2mu1aB.woff2) format(\"woff2\");unicode-range:u+0590-05ff,u+200c-2010,u+20aa,u+25cc,u+fb1d-fb4f}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSCmu1aB.woff2) format(\"woff2\");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+0300-0301,u+0303-0304,u+0308-0309,u+0323,u+0329,u+1ea0-1ef9,u+20ab}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSGmu1aB.woff2) format(\"woff2\");unicode-range:u+0100-02af,u+0304,u+0308,u+0329,u+1e00-1e9f,u+1ef2-1eff,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2) format(\"woff2\");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+0304,u+0308,u+0329,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:normal;font-weight:600;src:url(https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSKmu1aB.woff2) format(\"woff2\");unicode-range:u+0460-052f,u+1c80-1c88,u+20b4,u+2de0-2dff,u+a640-a69f,u+fe2e-fe2f}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:normal;font-weight:600;src:url(https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSumu1aB.woff2) format(\"woff2\");unicode-range:u+0301,u+0400-045f,u+0490-0491,u+04b0-04b1,u+2116}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:normal;font-weight:600;src:url(https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSOmu1aB.woff2) format(\"woff2\");unicode-range:u+1f??}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:normal;font-weight:600;src:url(https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSymu1aB.woff2) format(\"woff2\");unicode-range:u+0370-03ff}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:normal;font-weight:600;src:url(https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS2mu1aB.woff2) format(\"woff2\");unicode-range:u+0590-05ff,u+200c-2010,u+20aa,u+25cc,u+fb1d-fb4f}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:normal;font-weight:600;src:url(https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSCmu1aB.woff2) format(\"woff2\");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+0300-0301,u+0303-0304,u+0308-0309,u+0323,u+0329,u+1ea0-1ef9,u+20ab}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:normal;font-weight:600;src:url(https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSGmu1aB.woff2) format(\"woff2\");unicode-range:u+0100-02af,u+0304,u+0308,u+0329,u+1e00-1e9f,u+1ef2-1eff,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:normal;font-weight:600;src:url(https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2) format(\"woff2\");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+0304,u+0308,u+0329,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:normal;font-weight:800;src:url(https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSKmu1aB.woff2) format(\"woff2\");unicode-range:u+0460-052f,u+1c80-1c88,u+20b4,u+2de0-2dff,u+a640-a69f,u+fe2e-fe2f}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:normal;font-weight:800;src:url(https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSumu1aB.woff2) format(\"woff2\");unicode-range:u+0301,u+0400-045f,u+0490-0491,u+04b0-04b1,u+2116}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:normal;font-weight:800;src:url(https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSOmu1aB.woff2) format(\"woff2\");unicode-range:u+1f??}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:normal;font-weight:800;src:url(https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSymu1aB.woff2) format(\"woff2\");unicode-range:u+0370-03ff}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:normal;font-weight:800;src:url(https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS2mu1aB.woff2) format(\"woff2\");unicode-range:u+0590-05ff,u+200c-2010,u+20aa,u+25cc,u+fb1d-fb4f}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:normal;font-weight:800;src:url(https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSCmu1aB.woff2) format(\"woff2\");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+0300-0301,u+0303-0304,u+0308-0309,u+0323,u+0329,u+1ea0-1ef9,u+20ab}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:normal;font-weight:800;src:url(https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSGmu1aB.woff2) format(\"woff2\");unicode-range:u+0100-02af,u+0304,u+0308,u+0329,u+1e00-1e9f,u+1ef2-1eff,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:\"Open Sans\";font-stretch:100%;font-style:normal;font-weight:800;src:url(https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2) format(\"woff2\");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+0304,u+0308,u+0329,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}#app,#index{--primary-100:#ec81a6;--header-gradient:linear-gradient(180deg,#ec81a6,#141446);--mobility-100:#ec81a6;--secondary-F-25:#fabbae}#app.enedis{--primary-100:#1423dc;--header-gradient:linear-gradient(180deg,#1423dc,#141446);--mobility-100:#93c90e;--secondary-F-25:#c3e869}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font-size:100%;font:inherit;margin:0;padding:0;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:\"\";content:none}table{border-collapse:collapse;border-spacing:0}a{-webkit-text-decoration:none;text-decoration:none}*{box-sizing:border-box}.nouserselect{-moz-user-select:none;-webkit-user-select:none;user-select:none}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:0;font-size:60%;left:.1em}body{font-family:\"DM Sans Regular\";font-size:18px}.mobile-head-only,.mobile-only,.tablette-only{display:none!important}@media screen and (max-width:1190px){.no-mobile-head{display:none!important}.flex.mobile-head-only,.mobile-head-only{display:flex!important}span.mobile-head-only{display:inline-block!important}}@media screen and (max-width:639px){.no-mobile{display:none!important}.flex.mobile-only,.mobile-only{display:flex!important}span.mobile-only{display:inline-block!important}}@media screen and (max-width:1279px){.no-tablette{display:none!important}.flex.tablette-only,.tablette-only{display:flex!important}span.tablette-only{display:inline-block!important}}button:focus,input:focus,select:focus,textarea:focus{outline:none!important}.page-enter-active,.page-leave-active{transition:opacity .5s}.page-enter,.page-enter-active .page-header-selectors,.page-leave-active .page-header-selectors,.page-leave-to{opacity:0}body{font-family:\"Open Sans\",sans-serif;font-size:16px}sup{top:-.4em}.source{color:#323274;color:var(--primary-B-75,#323274);font-size:12px;font-style:italic;font-weight:400;line-height:140%;padding:7px 0;position:relative;text-align:center;z-index:2}@media print{.source{padding-right:10px}.graph.twoaxis .source{padding-right:0}}.graph .source{position:absolute;right:0;top:5px}.graph.twoaxis .source{bottom:-8px;left:0;text-align:center;top:auto;width:100%}.hideExport{display:none!important}.highcharts-tooltip-container{z-index:10!important}.highcharts-axis-labels.highcharts-yaxis-labels span{color:#141446!important;font-size:12px!important;font-weight:400!important;line-height:24px!important}.ore-tooltip{font-family:\"Open Sans\",sans-serif;font-size:12px;font-style:normal;line-height:120%}.ore-tooltip .title{font-weight:800}.ore-tooltip .data{font-size:12px;font-weight:600;line-height:15px}.square{flex:1 0 calc(25% - 10px);margin:5px}.square:after{content:\"\";display:block;padding-bottom:100%}.bt-download{align-items:center;background-color:#141446;border-radius:20px;color:#fff;cursor:pointer;display:flex;flex-direction:row;font-size:14px;font-weight:600;gap:8px;line-height:19px;padding:10px 16px 10px 20px;position:relative;transition-delay:0s;transition-duration:.3s;transition-property:background-color;transition-timing-function:ease-out}.bt-download:hover{background-color:#436eb1}.bt-download .ico{border-radius:10px;height:20px;position:relative;width:20px}.bt-download .ico svg path{fill:#fff}.bt-ore{background:linear-gradient(180deg,#fcfbf8 70%,#eeecdc);border:1px solid #141446;border-radius:20px;color:#141446;cursor:pointer;display:flex;font-size:14px;font-weight:400;line-height:19px;overflow:hidden;padding:8px 20px 7px;position:relative}.bt-ore .ico,.bt-ore .label{position:relative;z-index:1}.bt-ore:after{background:linear-gradient(180deg,#eeecdc 70%,#ccc9b4);content:\"\";height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transition-delay:0s;transition-duration:.3s;transition-property:opacity;transition-timing-function:ease-out;width:100%}.bt-ore:hover:after{opacity:1}.bt-ore .ico{margin-left:16px}@keyframes rotating{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.rotating{animation:rotating 2s linear infinite;height:24px;left:50%;margin-left:-12px;margin-top:-12px;position:absolute;top:50%;width:24px}.vb.vb-invisible .popin-item{width:100%}.vb-content:before{background:linear-gradient(0deg,#141446,rgba(20,20,70,0));bottom:0;content:\"\";height:60px;left:0;pointer-events:none;position:absolute;width:100%;z-index:999}.vb:not(.vb-invisible) .vb-dragger{background-color:#fff!important;border:2px solid #323274;border-radius:6px;box-sizing:border-box;cursor:pointer;right:10px;width:10px!important;z-index:1000}.vb:not(.vb-invisible) .vb-dragger:after{background-color:#fff;border-radius:6px}.vb:not(.vb-invisible) .vb-dragger:after,.vb:not(.vb-invisible) .vb-dragger:before{content:\"\";height:7px;left:50%;margin-left:-3px;margin-top:-3px;position:absolute;top:50%;width:6px}.vb:not(.vb-invisible):after{background-color:#323274;border-radius:12px;right:9px;width:12px;z-index:999}.vb:not(.vb-invisible):after,.vb:not(.vb-invisible):before{bottom:0;content:\"\";overflow:hidden;position:absolute;top:0}.vb:not(.vb-invisible):before{background-color:#141446;right:7px;width:23px;z-index:998}.vb.vb-visible.geography_items:before{display:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony import */ var _api_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
// import * as _ from 'lodash'

const actions = {
  nuxtServerInit(store, context) {
    store.commit('set_host_state', context.req.headers.host);
  },
  async fetchRegions({
    commit
  }) {
    try {
      const regions = await Object(_api_index_js__WEBPACK_IMPORTED_MODULE_0__[/* getRegions */ "g"])();
      commit('set_regions', regions);
      return regions; // Retournez les régions récupérées
    } catch (error) {
      console.error('Failed to fetch regions:', error);
      throw error; // Rejeter l'erreur pour pouvoir la traiter dans nuxtServerInit
    }
  },
  async fetchEPCI({
    commit
  }) {
    try {
      const epci = await Object(_api_index_js__WEBPACK_IMPORTED_MODULE_0__[/* getEPCI */ "d"])();
      commit('set_EPCI', epci);
      return epci; // Retournez les epci récupérées
    } catch (error) {
      console.error('Failed to fetch epci:', error);
      throw error; // Rejeter l'erreur pour pouvoir la traiter dans nuxtServerInit
    }
  },
  async fetchDepartements({
    commit
  }) {
    try {
      const departements = await Object(_api_index_js__WEBPACK_IMPORTED_MODULE_0__[/* getDepartements */ "b"])();
      commit('set_departements', departements);
      return departements; // Retournez les departements récupérées
    } catch (error) {
      console.error('Failed to fetch departements:', error);
      throw error; // Rejeter l'erreur pour pouvoir la traiter dans nuxtServerInit
    }
  },
  async nuxtServerInit({
    commit,
    dispatch
  }) {
    try {
      const regions = await dispatch('fetchRegions'); // Charger les régions lors de l'initialisation du serveur
      const departements = await dispatch('fetchDepartements'); // Charger les fetchDepartements lors de l'initialisation du serveur
      const epci = await dispatch('fetchEPCI'); // Charger les EPCI lors de l'initialisation du serveur
      console.log('Régions récupérées:', regions);
      console.log('Départements récupérées:', departements);
      console.log('EPCI récupérées:', epci);
    } catch (error) {
      console.error('Failed to initialize regions:', error);
    }
  }
};
const state = () => ({
  windowWidth: 1024,
  versionEnedis: false,
  appSlugID: 'ore-vehicules-propres',
  host: '',
  communes: [],
  departements: [],
  regions: [],
  epci: [],
  infos: null,
  type_territoires: [{
    id: 'regions',
    label: 'Régions',
    short: 'Régions'
  }, {
    id: 'departements',
    label: 'Départements',
    short: 'Départ.'
  }, {
    id: 'epci',
    label: 'EPCI*',
    short: 'EPCI*'
  }],
  current_type_territoire: {
    id: 'regions',
    label: 'Régions'
  },
  type_vehicules: [{
    id: 'total_ve_vhr',
    idAutre: 'total_autre',
    label: 'Tous types',
    labelPlaceholder: 'Véhicules<br>(tous types)',
    slug: 'tous-type'
  }, {
    id: 'bus_ve_vhr',
    idAutre: 'bus_autre',
    label: 'Bus',
    slug: 'autobus'
  }, {
    id: 'pl_ve_vhr',
    idAutre: 'pl_autre',
    label: 'Poids lourds',
    slug: 'poids-lourds'
  }, {
    id: 'vul_ve_vhr',
    idAutre: 'vul_autre',
    label: 'Véhicules utilitaires',
    slug: 'utilitaires'
  }, {
    id: 'vp_ve_vhr',
    idAutre: 'vp_autre',
    label: 'Véhicules particuliers',
    slug: 'particuliers'
  }],
  current_type_vehicule: {
    id: 'total_ve_vhr',
    idAutre: 'total_autre',
    label: 'Tous types',
    labelPlaceholder: 'Véhicules<br>(tous types)',
    slug: 'tous-type'
  }
});
const mutations = {
  set_host_state(state, host) {
    if (host.includes('enedis')) state.versionEnedis = true;
    state.host = host;
  },
  set_communes(state, fCommunes) {
    // console.log('set_communes', fCommunes)
    state.communes = fCommunes;
  },
  set_departements(state, fDepartements) {
    state.departements = fDepartements;
  },
  set_regions(state, fRegions) {
    state.regions = fRegions;
  },
  set_EPCI(state, fEPCI) {
    state.epci = fEPCI;
  },
  set_INFOS(state, fINFOS) {
    state.infos = fINFOS;
  },
  set_current_type_territoire(state, fCurrentTypeTerritoire) {
    state.current_type_territoire = fCurrentTypeTerritoire;
  },
  set_current_type_vehicule(state, fCurrentTypeVehicule) {
    state.current_type_vehicule = fCurrentTypeVehicule;
  },
  set_windowWidth(state, width) {
    state.windowWidth = width;
  }
};
function toEnDate(fDateStr) {
  const splitDate = fDateStr.split('/');
  return splitDate[1] + '/' + splitDate[0] + '/' + splitDate[2];
}
const getters = {
  get_windowWidth(state) {
    return state.windowWidth;
  },
  get_host(state) {
    return state.host;
  },
  get_full_host(state) {
    return state.host.includes('localhost') ? 'http://' + state.host : 'https://' + state.host;
  },
  get_communes(state) {
    return state.communes;
  },
  get_departements(state) {
    return state.departements;
  },
  get_regions(state) {
    return state.regions;
  },
  get_EPCI(state) {
    return state.epci;
  },
  get_INFOS(state) {
    if (!state.infos) return '';
    const infosDates = new Date(state.infos);
    return 'au ' + (infosDates.getDate() === 1 ? '1er' : infosDates.getDate()) + ' ' + infosDates.toLocaleString('default', {
      month: 'long'
    }) + ' ' + infosDates.getFullYear();
  },
  get_INFOS_v2(state) {
    if (!state.infos) return {};
    const returnedObj = {};
    const objEntries = ['pdcelec', 'nbelec', 'pdcgaz', 'nbgaz'];
    objEntries.forEach(function (fEntry) {
      if (state.infos[fEntry]) {
        const infosDates = new Date(toEnDate(state.infos[fEntry]));
        returnedObj[fEntry] = 'au ' + (infosDates.getDate() === 1 ? '1er' : infosDates.getDate()) + ' ' + infosDates.toLocaleString('default', {
          month: 'long'
        }) + ' ' + infosDates.getFullYear();
      } else {
        console.log('missing', state.infos, fEntry);
        returnedObj[fEntry] = '-';
      }
    });
    return returnedObj; // 'au ' + (infosDates.getDate() === 1 ? '1er' : infosDates.getDate()) + ' ' + infosDates.toLocaleString('default', { month: 'long' }) + ' ' + infosDates.getFullYear()
  },
  get_current_type_territoire(state) {
    return state.current_type_territoire;
  },
  get_type_territoires(state) {
    return state.type_territoires;
  },
  get_current_type_vehicule(state) {
    return state.current_type_vehicule;
  },
  get_type_vehicules(state) {
    return state.type_vehicules;
  }
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"width":"230","height":"60","viewBox":"0 0 230 60","fill":"none","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('g',{attrs:{"clip-path":"url(#clip0_220_18036)"}},[_c('path',{attrs:{"d":"M36 30C36 13.4315 49.4315 0 66 0C82.5685 0 96 13.4315 96 30C96 46.5685 82.5685 60 66 60C49.4315 60 36 46.5685 36 30Z","fill":"#141446"}}),_c('g',{attrs:{"clip-path":"url(#clip1_220_18036)"}},[_c('path',{attrs:{"d":"M77.394 37.225H19.0106C17.1112 37.2268 15.29 37.9838 13.9469 39.3299C12.6038 40.676 11.8484 42.5012 11.8466 44.405H15.0009C15.0018 43.3394 15.4246 42.3178 16.1763 41.5643C16.9281 40.8109 17.9474 40.3872 19.0106 40.3863V42.2127H22.3596C22.7882 42.8633 23.0168 43.6254 23.0169 44.405H26.1711C26.1701 43.6605 26.0528 42.9208 25.8234 42.2127H77.3906L77.394 37.225Z","fill":"#1A5270"}}),_c('path',{attrs:{"d":"M69.4267 49.9993C72.5113 49.9993 75.0119 47.4931 75.0119 44.4016C75.0119 41.3101 72.5113 38.8039 69.4267 38.8039C66.3421 38.8039 63.8416 41.3101 63.8416 44.4016C63.8416 47.4931 66.3421 49.9993 69.4267 49.9993Z","fill":"#303048"}}),_c('path',{attrs:{"d":"M69.4266 47.1935C70.9651 47.1935 72.2122 45.9435 72.2122 44.4016C72.2122 42.8597 70.9651 41.6097 69.4266 41.6097C67.8882 41.6097 66.641 42.8597 66.641 44.4016C66.641 45.9435 67.8882 47.1935 69.4266 47.1935Z","fill":"#9FCBE9"}}),_c('path',{attrs:{"d":"M53.4832 39.9997H41.1839C40.5302 39.9997 40.0002 40.4987 40.0002 41.1144V43.5517C40.0002 44.1673 40.5302 44.6664 41.1839 44.6664H53.4832C54.137 44.6664 54.6669 44.1673 54.6669 43.5517V41.1144C54.6669 40.4987 54.137 39.9997 53.4832 39.9997Z","fill":"#2D7EAA"}}),_c('path',{attrs:{"d":"M57.6668 44.6664C58.9555 44.6664 60.0002 43.6217 60.0002 42.333C60.0002 41.0444 58.9555 39.9997 57.6668 39.9997C56.3782 39.9997 55.3335 41.0444 55.3335 42.333C55.3335 43.6217 56.3782 44.6664 57.6668 44.6664Z","fill":"#2D7EAA"}}),_c('path',{attrs:{"d":"M63.3335 39.9997H61.3335V47.333H63.3335V39.9997Z","fill":"#1A5270"}}),_c('path',{attrs:{"d":"M61.6669 37.2074V18.581C61.6669 18.2473 62.033 17.9272 62.2685 17.6912C62.5039 17.4552 62.8233 17.3228 63.1562 17.3228H81.1775C81.5005 17.3232 81.8128 17.4384 82.0592 17.6476C82.3055 17.8569 82.47 18.1467 82.5234 18.4659L84.3041 28.9782V45.109L82.7252 46.8867C82.7252 46.8867 76.2218 47.0191 76.2218 46.8867V40.4594C76.2218 39.5976 75.8805 38.771 75.2728 38.1612C74.665 37.5514 73.8406 37.2084 72.9807 37.2074H61.6669Z","fill":"#2D7EAA"}}),_c('path',{attrs:{"d":"M69.6641 19.3334H65.003C64.8174 19.3334 64.6669 19.4693 64.6669 19.637V25.0298C64.6669 25.1975 64.8174 25.3334 65.003 25.3334H69.6641C69.8497 25.3334 70.0002 25.1975 70.0002 25.0298V19.637C70.0002 19.4693 69.8497 19.3334 69.6641 19.3334Z","fill":"#9FCBE9"}}),_c('path',{attrs:{"d":"M63.1565 17.3228V14.3079C63.1565 13.9557 63.296 13.6178 63.5445 13.3687C63.793 13.1197 64.1301 12.9799 64.4815 12.9799H76.8377C77.3014 12.9795 77.7568 13.1035 78.1567 13.3388C78.5566 13.5741 78.8864 13.9122 79.1121 14.3182L80.7779 17.3228","fill":"#439CCC"}}),_c('path',{attrs:{"d":"M81.3336 28H74.0002V20C74.0002 19.6319 74.2987 19.3334 74.6669 19.3334H79.1732C79.4945 19.3334 79.7702 19.5626 79.8287 19.8786L81.3336 28Z","fill":"#9FCBE9"}}),_c('path',{attrs:{"d":"M82.7114 28.56H84.2207C84.5168 28.56 84.8008 28.6779 85.0101 28.8877C85.2195 29.0975 85.3371 29.3821 85.3371 29.6788V35.416C85.3371 35.6398 85.2931 35.8614 85.2076 36.0682C85.1222 36.275 84.9969 36.4629 84.839 36.6212C84.6811 36.7794 84.4936 36.905 84.2873 36.9906C84.081 37.0763 83.8598 37.1204 83.6365 37.1204H82.7114V28.56Z","fill":"#439CCC"}}),_c('path',{attrs:{"d":"M60.6667 29.152C60.6667 28.5158 61.241 28 61.9493 28H84.0509C84.7593 28 85.3335 28.5158 85.3335 29.152V31.3333H60.6667V29.152Z","fill":"#439CCC"}}),_c('path',{attrs:{"d":"M30.5742 49.9993C33.6588 49.9993 36.1593 47.4931 36.1593 44.4016C36.1593 41.3101 33.6588 38.8039 30.5742 38.8039C27.4896 38.8039 24.989 41.3101 24.989 44.4016C24.989 47.4931 27.4896 49.9993 30.5742 49.9993Z","fill":"#141446"}}),_c('path',{attrs:{"d":"M84.4884 43.802L82.7043 44.405V41.397H84.471C84.6048 41.397 84.7331 41.4503 84.8276 41.5451C84.9222 41.6399 84.9754 41.7685 84.9754 41.9025V43.1258C84.9778 43.2761 84.9317 43.4232 84.8439 43.545C84.7562 43.6669 84.6314 43.7569 84.4884 43.802Z","fill":"#FDCC44"}}),_c('path',{attrs:{"d":"M8.99421 10.6702H57.6721C58.2895 10.6702 58.8815 10.9525 59.3181 11.4549C59.7546 11.9574 59.9998 12.6388 59.9998 13.3494V35.9875C59.9998 36.6981 59.7546 37.3795 59.3181 37.882C58.8815 38.3844 58.2895 38.6667 57.6721 38.6667H6.6665V13.3459C6.6665 12.6353 6.91174 11.9539 7.34827 11.4514C7.7848 10.949 8.37686 10.6667 8.99421 10.6667V10.6702Z","fill":"#439CCC"}})])]),_c('g',{attrs:{"clip-path":"url(#clip2_220_18036)"}},[_c('path',{attrs:{"d":"M85 30C85 13.4315 98.4315 0 115 0C131.569 0 145 13.4315 145 30C145 46.5685 131.569 60 115 60C98.4315 60 85 46.5685 85 30Z","fill":"#141446"}}),_c('path',{attrs:{"d":"M130 18.7962H36C34.5273 18.7962 33.3334 19.9901 33.3334 21.4629V40.8438C33.3334 42.7371 34.6608 44.3711 36.5139 44.759L44.5475 46.4404H130.667C132.508 46.4404 134 44.948 134 43.1071V22.7962C134 20.5871 132.209 18.7962 130 18.7962Z","fill":"#439CCC"}}),_c('path',{attrs:{"d":"M104.27 43.4284C104.27 40.4828 106.657 38.095 109.603 38.095H112.498C115.443 38.095 117.831 40.4828 117.831 43.4284V46.4405H104.27V43.4284Z","fill":"#1A5270"}}),_c('rect',{attrs:{"x":"98.0105","y":"17.2314","width":"11.9965","height":"1.56477","fill":"#1A5270"}}),_c('path',{attrs:{"d":"M120.96 21.9258H134V40.1811C129.912 40.1811 124.999 36.7755 122.293 34.2223C121.386 33.3656 120.96 32.1446 120.96 30.8964V21.9258Z","fill":"#9FCBE9"}}),_c('path',{attrs:{"d":"M39.071 21.9258H116.266V33.4007H39.071V21.9258Z","fill":"#1A5270"}}),_c('path',{attrs:{"d":"M84.449 21.9258H98.5319V33.4007H84.449V21.9258Z","fill":"#9FCBE9"}}),_c('path',{attrs:{"d":"M99.5752 21.9258H113.658V33.4007H99.5752V21.9258Z","fill":"#9FCBE9"}}),_c('path',{attrs:{"d":"M131.914 41.2245H134V43.5717C133.166 43.5717 132.262 43.224 131.914 43.0501V41.2245Z","fill":"#FDCC44"}}),_c('path',{attrs:{"d":"M111.05 50.0915C114.219 50.0915 116.788 47.5228 116.788 44.3541C116.788 41.1853 114.219 38.6166 111.05 38.6166C107.882 38.6166 105.313 41.1853 105.313 44.3541C105.313 47.5228 107.882 50.0915 111.05 50.0915Z","fill":"#303048"}}),_c('path',{attrs:{"d":"M111.049 47.2154C112.63 47.2154 113.911 45.9342 113.911 44.3538C113.911 42.7734 112.63 41.4922 111.049 41.4922C109.469 41.4922 108.188 42.7734 108.188 44.3538C108.188 45.9342 109.469 47.2154 111.049 47.2154Z","fill":"#9FCBE9"}})]),_c('g',{attrs:{"clip-path":"url(#clip3_220_18036)"}},[_c('path',{attrs:{"d":"M134 30C134 13.4315 147.431 0 164 0C180.569 0 194 13.4315 194 30C194 46.5685 180.569 60 164 60C147.431 60 134 46.5685 134 30Z","fill":"#141446"}}),_c('path',{attrs:{"d":"M124.732 45.8605C124.732 46.3343 124.92 46.7887 125.255 47.1237C125.59 47.4588 126.044 47.647 126.518 47.647H174.207V36.3994H124.732V45.8605Z","fill":"#1A5270"}}),_c('path',{attrs:{"d":"M178.98 40.7217C178.862 39.2847 177.861 37.2884 176.871 36.2484C175.158 34.473 172.099 32.5467 166.247 32.5467C160.594 32.5467 157.041 23.1639 141.225 23.1639C129.256 23.1639 120.656 30.6931 120.656 39.9808C120.654 41.1037 120.881 42.2151 121.321 43.2478C121.762 44.2806 122.408 45.2132 123.219 45.9891C123.425 46.1975 123.691 46.3362 123.979 46.3857C124.267 46.4351 124.564 46.3927 124.827 46.2646C125.09 46.1364 125.307 45.9289 125.445 45.6713C125.584 45.4137 125.639 45.1191 125.601 44.8288C125.472 43.7924 125.582 42.7402 125.921 41.7525C126.26 40.7648 126.821 39.8676 127.56 39.1294C128.299 38.3912 129.196 37.8316 130.184 37.4931C131.172 37.1546 132.225 37.0462 133.261 37.1762C134.297 37.3063 135.29 37.6713 136.164 38.2434C137.038 38.8155 137.769 39.5796 138.303 40.4774C138.836 41.3752 139.158 42.3831 139.243 43.424C139.327 44.465 139.173 45.5116 138.792 46.4839C138.71 46.6874 138.68 46.9079 138.703 47.126C138.727 47.344 138.805 47.5529 138.929 47.7338C139.052 47.9148 139.219 48.0623 139.414 48.1632C139.609 48.2642 139.825 48.3154 140.045 48.3124H158.645C158.931 48.3139 159.212 48.2487 159.468 48.1221C159.723 47.9954 159.946 47.8108 160.118 47.583C160.289 47.3552 160.405 47.0904 160.456 46.8098C160.508 46.5292 160.493 46.2405 160.412 45.9667C160.097 44.9204 160.037 43.8138 160.236 42.7393C160.435 41.6648 160.888 40.6534 161.557 39.7894C162.226 38.9254 163.092 38.2338 164.082 37.7722C165.073 37.3106 166.159 37.0924 167.251 37.1358C168.343 37.1791 169.409 37.4828 170.36 38.0215C171.311 38.5601 172.119 39.3182 172.717 40.2326C173.316 41.1469 173.687 42.191 173.8 43.2779C173.914 44.3648 173.765 45.4631 173.368 46.4811C173.296 46.6632 173.279 46.8623 173.318 47.054C173.358 47.2457 173.452 47.4218 173.59 47.5607C173.728 47.6995 173.904 47.7951 174.095 47.8358C174.287 47.8765 174.486 47.8604 174.668 47.7896C176.046 47.2244 177.207 46.234 177.983 44.9626C178.758 43.6913 179.108 42.2054 178.98 40.7217Z","fill":"#439CCC"}}),_c('path',{attrs:{"d":"M132.417 49.8361C135.655 49.8361 138.28 47.2112 138.28 43.9733C138.28 40.7353 135.655 38.1104 132.417 38.1104C129.179 38.1104 126.555 40.7353 126.555 43.9733C126.555 47.2112 129.179 49.8361 132.417 49.8361Z","fill":"#141446"}}),_c('path',{attrs:{"d":"M132.417 46.8977C134.033 46.8977 135.342 45.5884 135.342 43.9733C135.342 42.3581 134.033 41.0488 132.417 41.0488C130.802 41.0488 129.493 42.3581 129.493 43.9733C129.493 45.5884 130.802 46.8977 132.417 46.8977Z","fill":"#9FCBE9"}}),_c('path',{attrs:{"d":"M166.977 49.8361C170.215 49.8361 172.839 47.2112 172.839 43.9733C172.839 40.7353 170.215 38.1104 166.977 38.1104C163.739 38.1104 161.114 40.7353 161.114 43.9733C161.114 47.2112 163.739 49.8361 166.977 49.8361Z","fill":"#303048"}}),_c('path',{attrs:{"d":"M166.977 46.8977C168.592 46.8977 169.901 45.5884 169.901 43.9733C169.901 42.3581 168.592 41.0488 166.977 41.0488C165.362 41.0488 164.052 42.3581 164.052 43.9733C164.052 45.5884 165.362 46.8977 166.977 46.8977Z","fill":"#9FCBE9"}}),_c('path',{attrs:{"d":"M174.691 39.575C174.561 39.5756 174.434 39.5394 174.323 39.4706C174.213 39.4017 174.125 39.3031 174.068 39.1861C174.012 39.0691 173.99 38.9384 174.004 38.8093C174.019 38.6802 174.07 38.558 174.151 38.4566C174.315 38.2614 174.52 38.1045 174.751 37.9968C174.982 37.8892 175.234 37.8334 175.489 37.8334C175.744 37.8334 175.996 37.8892 176.227 37.9968C176.458 38.1045 176.663 38.2614 176.827 38.4566C176.908 38.558 176.959 38.6802 176.974 38.8093C176.989 38.9384 176.967 39.0691 176.91 39.1861C176.854 39.3031 176.765 39.4017 176.655 39.4706C176.545 39.5394 176.417 39.5756 176.287 39.575H174.691Z","fill":"#FDCC44"}}),_c('path',{attrs:{"d":"M128.758 33.391H139.248C139.871 33.391 140.468 33.1436 140.908 32.7032C141.349 32.2628 141.596 31.6654 141.596 31.0425V27.3632C141.597 27.0294 141.527 26.6991 141.39 26.3945C141.254 26.09 141.053 25.8182 140.803 25.5974C140.552 25.3766 140.258 25.2119 139.938 25.1143C139.619 25.0167 139.282 24.9885 138.951 25.0315C133.885 25.7193 130.033 28.2719 127.628 30.3771C127.365 30.6073 127.178 30.9123 127.093 31.2514C127.007 31.5905 127.027 31.9476 127.15 32.275C127.273 32.6025 127.492 32.8847 127.78 33.0841C128.067 33.2835 128.408 33.3906 128.758 33.391Z","fill":"#9FCBE9"}}),_c('path',{attrs:{"d":"M146.562 25.2189C151.245 25.9346 156.291 28.3865 158.304 31.065C158.464 31.2833 158.56 31.5417 158.582 31.8115C158.604 32.0812 158.55 32.3517 158.427 32.5928C158.304 32.8339 158.117 33.0362 157.886 33.1771C157.655 33.3181 157.389 33.3922 157.119 33.3911H145.58C145.15 33.3911 144.736 33.22 144.432 32.9153C144.127 32.6107 143.956 32.1975 143.956 31.7667V27.2095C143.942 25.8172 145.186 25.0092 146.562 25.2189Z","fill":"#9FCBE9"}}),_c('path',{attrs:{"d":"M157.155 31.4424C157.155 31.3742 157.17 31.3069 157.2 31.2458C157.23 31.1846 157.274 31.1313 157.329 31.0901C157.383 31.0489 157.446 31.0208 157.513 31.0082C157.58 30.9956 157.649 30.9987 157.714 31.0174C158.598 31.2578 159.901 31.9456 159.901 32.7592C159.901 33.5728 158.598 34.2634 157.714 34.5038C157.649 34.5225 157.58 34.5256 157.513 34.513C157.446 34.5004 157.383 34.4723 157.329 34.4311C157.274 34.3899 157.23 34.3366 157.2 34.2754C157.17 34.2143 157.155 34.147 157.155 34.0788V31.4424Z","fill":"#1A5270"}})]),_c('defs',[_c('clipPath',{attrs:{"id":"clip0_220_18036"}},[_c('path',{attrs:{"d":"M36 30C36 13.4315 49.4315 0 66 0C82.5685 0 96 13.4315 96 30C96 46.5685 82.5685 60 66 60C49.4315 60 36 46.5685 36 30Z","fill":"white"}})]),_c('clipPath',{attrs:{"id":"clip1_220_18036"}},[_c('rect',{attrs:{"width":"78.6667","height":"40","fill":"white","transform":"translate(7 10)"}})]),_c('clipPath',{attrs:{"id":"clip2_220_18036"}},[_c('path',{attrs:{"d":"M85 30C85 13.4315 98.4315 0 115 0C131.569 0 145 13.4315 145 30C145 46.5685 131.569 60 115 60C98.4315 60 85 46.5685 85 30Z","fill":"white"}})]),_c('clipPath',{attrs:{"id":"clip3_220_18036"}},[_c('path',{attrs:{"d":"M134 30C134 13.4315 147.431 0 164 0C180.569 0 194 13.4315 194 30C194 46.5685 180.569 60 164 60C147.431 60 134 46.5685 134 30Z","fill":"white"}})])])])
          )
        }
      }
    

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "NuxtLogo", function() { return NuxtLogo; });
__webpack_require__.d(components_namespaceObject, "Tutorial", function() { return Tutorial; });
__webpack_require__.d(components_namespaceObject, "AppFooter", function() { return AppFooter; });
__webpack_require__.d(components_namespaceObject, "AppHeader", function() { return AppHeader; });
__webpack_require__.d(components_namespaceObject, "BoxSelectPageHead", function() { return BoxSelectPageHead; });
__webpack_require__.d(components_namespaceObject, "HighchartsCompo", function() { return HighchartsCompo; });
__webpack_require__.d(components_namespaceObject, "MobileClassementReverse", function() { return MobileClassementReverse; });
__webpack_require__.d(components_namespaceObject, "MobileClassement", function() { return MobileClassement; });
__webpack_require__.d(components_namespaceObject, "ModulePdcCount", function() { return ModulePdcCount; });
__webpack_require__.d(components_namespaceObject, "ModuleVehiculeCount", function() { return ModuleVehiculeCount; });
__webpack_require__.d(components_namespaceObject, "QuintilesGraph2axisReverse", function() { return QuintilesGraph2axisReverse; });
__webpack_require__.d(components_namespaceObject, "QuintilesGraph2axis", function() { return QuintilesGraph2axis; });
__webpack_require__.d(components_namespaceObject, "QuintilesGraphReversepdc", function() { return QuintilesGraphReversepdc; });
__webpack_require__.d(components_namespaceObject, "QuintilesGraph", function() { return QuintilesGraph; });
__webpack_require__.d(components_namespaceObject, "SelectorRadio", function() { return SelectorRadio; });
__webpack_require__.d(components_namespaceObject, "SelectorSelectEpciCat", function() { return SelectorSelectEpciCat; });
__webpack_require__.d(components_namespaceObject, "SelectorSelectLocation", function() { return SelectorSelectLocation; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "node-fetch-native"
var external_node_fetch_native_ = __webpack_require__(18);
var external_node_fetch_native_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_native_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
middleware['fetchRegions'] = __webpack_require__(24);
middleware['fetchRegions'] = middleware['fetchRegions'].default || middleware['fetchRegions'];
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js



// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (false) {}
function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }
  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);
    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }
    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];
  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
    }
    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }
  return instances;
}
function applyAsyncData(Component, asyncData) {
  if (
  // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }
  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };
  Component.options._originDataFn = ComponentData;
  Component.options.data = function () {
    const data = ComponentData.call(this, this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return {
      ...data,
      ...asyncData
    };
  };
  Component.options.__hasNuxtData = true;
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // If no component name defined, set file path as name, (also fixes #5703)
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }
      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          try {
            const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload'));
            // check for previous reload time not to reload infinitely
            if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
              window.sessionStorage.setItem('nuxt-reload', timeNow);
              window.location.reload(true /* skip cache */);
            }
          } catch {
            // don't throw an error if we have issues reading sessionStorage
          }
        }
        throw error;
      }
    }
    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  }
  // Make sure the components are resolved (code-splitting)
  await resolveRouteComponents(route);
  // Send back a copy of route with meta based on Component definition
  return {
    ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return {
        ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {
        "SERVICE_HOST": "192.168.1.17:3333",
        "API_URL": ""
      }
    };
    // Only set once

    if (context.req) {
      app.context.req = context.req;
    }
    if (context.res) {
      app.context.res = context.res;
    }
    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }
      app.context._redirected = true;
      // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
      let pathType = typeof path;
      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }
      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      }
      // "/absolute/route", "./relative/route" or "../relative/route"
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);
        if (true) {
          app.context.next({
            path,
            status
          });
        }
        if (false) {}
      }
    };
    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
      app.context.beforeSerialize = fn => context.beforeSerializeFns.push(fn);
    }
    if (false) {}
  }

  // Dynamic keys
  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);
  if (context.route) {
    app.context.route = currentRouteData;
  }
  if (context.from) {
    app.context.from = fromRouteData;
  }
  if (context.error) {
    app.context.error = context.error;
  }
  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext, renderState) {
  if (!promises.length || appContext._redirected || appContext._errored || renderState && renderState.aborted) {
    return Promise.resolve();
  }
  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext, renderState);
  });
}
function promisify(fn, context) {
  let promise;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }
  return Promise.resolve(promise);
}

// Imported from vue-router
function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }
  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash
  let path = decodeURI(window.location.pathname);
  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = {
    ...toQuery,
    ...fromQuery
  };
  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }
  return diff;
}
function normalizeError(err) {
  let message;
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }
  return {
    ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
const PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }
    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }
    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }
  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }
  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (typeof token === 'string') {
        path += token;
        continue;
      }
      const value = data[token.name || 'pathMatch'];
      let segment;
      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js


async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  }

  // Call and await on $fetch
  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}
    this.$fetchState.error = normalizeError(err);
  }
  this.$fetchState.pending = false;

  // Define an ssrKey for hydration
  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++;

  // Add data-fetch-key on parent element of Component
  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey;

  // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}
/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }
    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }
    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);
    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    }

    // Added for remove vue undefined warning while ssr
    this.$fetch = () => {}; // issue #8043
    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }
});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(19);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(13);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(9);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(14);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js

if (false) {}
function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);
  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }
  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}
/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from;

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }
  const nuxt = window.$nuxt;
  if (
  // Initial load (vuejs/vue-router#3199)
  !isRouteChanged ||
  // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }
  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash;
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }
        try {
          const el = document.querySelector(hash);
          if (el) {
            var _getComputedStyle$scr;
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
            // Respect any scroll-margin-top set in CSS when scrolling to anchor
            const y = Number((_getComputedStyle$scr = getComputedStyle(el)['scroll-margin-top']) === null || _getComputedStyle$scr === void 0 ? void 0 : _getComputedStyle$scr.replace('px', ''));
            if (y) {
              position.offset = {
                y
              };
            }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }
      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _8521df64 = () => interopDefault(__webpack_require__.e(/* import() | pages/gaz */ 18).then(__webpack_require__.bind(null, 154)));
const _da5766be = () => interopDefault(__webpack_require__.e(/* import() | pages/gaz/_territoireType */ 19).then(__webpack_require__.bind(null, 161)));
const _f6c0ea1e = () => interopDefault(__webpack_require__.e(/* import() | pages/gaz/_territoireType/_locationSlug */ 20).then(__webpack_require__.bind(null, 162)));
const _4dda58b4 = () => interopDefault(__webpack_require__.e(/* import() | pages/gaz/_territoireType/_locationSlug/index */ 21).then(__webpack_require__.bind(null, 163)));
const _0c7245a2 = () => interopDefault(__webpack_require__.e(/* import() | pages/index123 */ 26).then(__webpack_require__.bind(null, 155)));
const _0242fa14 = () => interopDefault(__webpack_require__.e(/* import() | pages/test */ 27).then(__webpack_require__.bind(null, 164)));
const _382feab7 = () => interopDefault(__webpack_require__.e(/* import() | pages/updater */ 28).then(__webpack_require__.bind(null, 156)));
const _5ef203c0 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 22).then(__webpack_require__.bind(null, 157)));
const _0f56b1c7 = () => interopDefault(__webpack_require__.e(/* import() | pages/index/vehicules-electriques-et-hybrides-rechargeables/_territoireType */ 23).then(__webpack_require__.bind(null, 165)));
const _45c214d2 = () => interopDefault(__webpack_require__.e(/* import() | pages/index/vehicules-electriques-et-hybrides-rechargeables/_territoireType/_locationSlug */ 24).then(__webpack_require__.bind(null, 166)));
const _a626a24c = () => interopDefault(__webpack_require__.e(/* import() | pages/index/vehicules-electriques-et-hybrides-rechargeables/_territoireType/_locationSlug/index */ 25).then(__webpack_require__.bind(null, 167)));
const emptyFn = () => {};
external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/gaz",
    component: _8521df64,
    name: "gaz",
    children: [{
      path: ":territoireType?",
      component: _da5766be,
      name: "gaz-territoireType",
      children: [{
        path: ":locationSlug?",
        component: _f6c0ea1e,
        children: [{
          path: "",
          component: _4dda58b4,
          name: "gaz-territoireType-locationSlug"
        }]
      }]
    }]
  }, {
    path: "/index123",
    component: _0c7245a2,
    name: "index123"
  }, {
    path: "/test",
    component: _0242fa14,
    name: "test"
  }, {
    path: "/updater",
    component: _382feab7,
    name: "updater"
  }, {
    path: "/",
    component: _5ef203c0,
    name: "index",
    children: [{
      path: "vehicules-electriques-et-hybrides-rechargeables/:territoireType?",
      component: _0f56b1c7,
      name: "index-vehicules-electriques-et-hybrides-rechargeables-territoireType",
      children: [{
        path: ":locationSlug?",
        component: _45c214d2,
        children: [{
          path: "",
          component: _a626a24c,
          name: "index-vehicules-electriques-et-hybrides-rechargeables-territoireType-locationSlug"
        }]
      }]
    }]
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({
    ...routerOptions,
    base
  });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };
  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }
    return resolve(to, current, append);
  };
  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },
  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    if (false) {}

    // make sure that leave is called asynchronous (fix #5703)
    if (transition.css === false) {
      const leave = listeners.leave;

      // only add leave listener when user didnt provide one
      // or when it misses the done argument
      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }
          _parent.$nextTick(done);
        };
      }
    }
    let routerView = h('routerView', data);
    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }
});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "__nuxt-error-page"
  }, [_vm._ssrNode("<div class=\"error\">", "</div>", [_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">" + _vm._ssrEscape(_vm._s(_vm.message)) + "</div> "), _vm.statusCode === 404 ? _vm._ssrNode("<p class=\"description\">", "</p>", [typeof _vm.$route === 'undefined' ? _vm._ssrNode("<a href=\"/\" class=\"error-link\">", "</a>") : _c('NuxtLink', {
    staticClass: "error-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back to the home page")])], 1) : _vm._e(), _vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js
/* harmony default export */ var nuxt_errorvue_type_script_lang_js = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },
    message() {
      return this.error.message || 'Error';
    }
  },
  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js = (nuxt_errorvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(26)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "55fff19d"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },
  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },
  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }
      const [matchedRoute] = this.$route.matched;
      if (!matchedRoute) {
        return this.$route.path;
      }
      const Component = matchedRoute.components.default;
      if (Component && Component.options) {
        const {
          options
        } = Component;
        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }
      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }
  },
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },
  render(h) {
    // if there is no error or
    // error page has not been loaded yet on client
    if (!this.nuxt.err ||  false && false) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    }

    // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping
    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    }

    // track if we are showing the NuxtError component
    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js = ({
  name: 'NuxtLoading',
  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },
  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }
      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      clearTimeout(this._hide);
      this._timer = null;
    },
    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;
      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }
      return this;
    },
    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get() {
      return this.percent;
    },
    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause() {
      clearInterval(this._timer);
      return this;
    },
    resume() {
      this.startTimer();
      return this;
    },
    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },
    hide() {
      this.clear();
      this._hide = setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },
    fail(error) {
      this.canSucceed = false;
      return this;
    },
    startTimer() {
      if (!this.show) {
        this.show = true;
      }
      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }
      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }
        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }
        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }
  },
  render(h) {
    let el = h(false);
    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }
    return el;
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js = (nuxt_loadingvue_type_script_lang_js); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(28)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "4c20fb91"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./assets/scss/main.scss
var main = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/layouts/default.vue?vue&type=template&id=0040005c
var defaultvue_type_template_id_0040005c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('Nuxt');
};
var defaultvue_type_template_id_0040005c_staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/layouts/default.vue?vue&type=template&id=0040005c

// CONCATENATED MODULE: ./.nuxt/layouts/default.vue

var script = {}


/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_0040005c_render,
  defaultvue_type_template_id_0040005c_staticRenderFns,
  false,
  null,
  null,
  "3dbf3b81"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js







const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }
      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;
    if (false) {}
    // Add $nuxt.error()
    this.error = this.nuxt.error;
    // Add $nuxt.context
    this.context = this.$options.context;
  },
  async mounted() {
    this.$loading = this.$refs.loading;
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },
    isFetching() {
      return this.nbFetching > 0;
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },
    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);
      if (!pages.length) {
        return;
      }
      this.$loading.start();
      const promises = pages.map(async page => {
        let p = [];

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }
        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        // Wait for asyncData & old fetch to finish
        await Promise.all(p);
        // Cleanup refs
        p = [];
        if (page.$fetch) {
          p.push(page.$fetch());
        }
        // Get all component instance to call $fetch
        for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
          p.push(component.$fetch());
        }
        return Promise.all(p);
      });
      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }
      this.$loading.finish();
    },
    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }
          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }
        let errorLayout = (nuxt_error.options || nuxt_error).layout;
        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }
        this.nuxt.errPageReady = true;
        this.setLayout(errorLayout);
      }
    },
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      return Promise.resolve(layouts['_' + layout]);
    }
  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
let store_store = {};
(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(32), 'store/index.js');

  // If store is an exported method = classic mode (deprecated)

  // Enforce store modules
  store_store.modules = store_store.modules || {};

  // If the environment supports hot reloading...
})();

// createStore
const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};
function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;
  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }
  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }
  return normalizeModule(moduleData, filePath);
}
function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state);
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }
  return moduleData;
}
// CONCATENATED MODULE: ./.nuxt/components/index.js
const NuxtLogo = () => __webpack_require__.e(/* import() | components/nuxt-logo */ 9).then(__webpack_require__.bind(null, 168)).then(c => wrapFunctional(c.default || c));
const Tutorial = () => __webpack_require__.e(/* import() | components/tutorial */ 17).then(__webpack_require__.bind(null, 141)).then(c => wrapFunctional(c.default || c));
const AppFooter = () => __webpack_require__.e(/* import() | components/app-footer */ 1).then(__webpack_require__.bind(null, 117)).then(c => wrapFunctional(c.default || c));
const AppHeader = () => __webpack_require__.e(/* import() | components/app-header */ 2).then(__webpack_require__.bind(null, 114)).then(c => wrapFunctional(c.default || c));
const BoxSelectPageHead = () => __webpack_require__.e(/* import() | components/box-select-page-head */ 3).then(__webpack_require__.bind(null, 119)).then(c => wrapFunctional(c.default || c));
const HighchartsCompo = () => __webpack_require__.e(/* import() | components/highcharts-compo */ 4).then(__webpack_require__.bind(null, 43)).then(c => wrapFunctional(c.default || c));
const MobileClassementReverse = () => __webpack_require__.e(/* import() | components/mobile-classement-reverse */ 6).then(__webpack_require__.bind(null, 90)).then(c => wrapFunctional(c.default || c));
const MobileClassement = () => __webpack_require__.e(/* import() | components/mobile-classement */ 5).then(__webpack_require__.bind(null, 89)).then(c => wrapFunctional(c.default || c));
const ModulePdcCount = () => __webpack_require__.e(/* import() | components/module-pdc-count */ 7).then(__webpack_require__.bind(null, 121)).then(c => wrapFunctional(c.default || c));
const ModuleVehiculeCount = () => __webpack_require__.e(/* import() | components/module-vehicule-count */ 8).then(__webpack_require__.bind(null, 120)).then(c => wrapFunctional(c.default || c));
const QuintilesGraph2axisReverse = () => __webpack_require__.e(/* import() | components/quintiles-graph2axis-reverse */ 13).then(__webpack_require__.bind(null, 158)).then(c => wrapFunctional(c.default || c));
const QuintilesGraph2axis = () => __webpack_require__.e(/* import() | components/quintiles-graph2axis */ 12).then(__webpack_require__.bind(null, 159)).then(c => wrapFunctional(c.default || c));
const QuintilesGraphReversepdc = () => __webpack_require__.e(/* import() | components/quintiles-graph-reversepdc */ 11).then(__webpack_require__.bind(null, 123)).then(c => wrapFunctional(c.default || c));
const QuintilesGraph = () => __webpack_require__.e(/* import() | components/quintiles-graph */ 10).then(__webpack_require__.bind(null, 122)).then(c => wrapFunctional(c.default || c));
const SelectorRadio = () => __webpack_require__.e(/* import() | components/selector-radio */ 14).then(__webpack_require__.bind(null, 88)).then(c => wrapFunctional(c.default || c));
const SelectorSelectEpciCat = () => __webpack_require__.e(/* import() | components/selector-select-epci-cat */ 15).then(__webpack_require__.bind(null, 160)).then(c => wrapFunctional(c.default || c));
const SelectorSelectLocation = () => __webpack_require__.e(/* import() | components/selector-select-location */ 16).then(__webpack_require__.bind(null, 55)).then(c => wrapFunctional(c.default || c));

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }
  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};
      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }
      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }
  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(8);

// CONCATENATED MODULE: ./.nuxt/pwa/meta.utils.js
function mergeMeta(to, from) {
  if (typeof to === 'function') {
    // eslint-disable-next-line no-console
    console.warn('Cannot merge meta. Avoid using head as a function!');
    return;
  }
  for (const key in from) {
    const value = from[key];
    if (Array.isArray(value)) {
      to[key] = to[key] || [];
      for (const item of value) {
        // Avoid duplicates
        if (item.hid && hasMeta(to[key], 'hid', item.hid) || item.name && hasMeta(to[key], 'name', item.name)) {
          continue;
        }
        // Add meta
        to[key].push(item);
      }
    } else if (typeof value === 'object') {
      to[key] = to[key] || {};
      for (const attr in value) {
        to[key][attr] = value[attr];
      }
    } else if (to[key] === undefined) {
      to[key] = value;
    }
  }
}
function hasMeta(arr, key, val) {
  return arr.find(obj => val ? obj[key] === val : obj[key]);
}
// EXTERNAL MODULE: ./.nuxt/pwa/meta.json
var meta = __webpack_require__(20);

// CONCATENATED MODULE: ./.nuxt/pwa/meta.plugin.js


/* harmony default export */ var meta_plugin = (function ({
  app
}) {
  mergeMeta(app.head, meta);
});
// CONCATENATED MODULE: ./.nuxt/pwa/icon.plugin.js
/* harmony default export */ var icon_plugin = (async function (ctx, inject) {
  const icons = {
    "64x64": "/_nuxt/icons/icon_64x64.a1500e.png",
    "120x120": "/_nuxt/icons/icon_120x120.a1500e.png",
    "144x144": "/_nuxt/icons/icon_144x144.a1500e.png",
    "152x152": "/_nuxt/icons/icon_152x152.a1500e.png",
    "192x192": "/_nuxt/icons/icon_192x192.a1500e.png",
    "384x384": "/_nuxt/icons/icon_384x384.a1500e.png",
    "512x512": "/_nuxt/icons/icon_512x512.a1500e.png",
    "ipad_1536x2048": "/_nuxt/icons/splash_ipad_1536x2048.a1500e.png",
    "ipadpro9_1536x2048": "/_nuxt/icons/splash_ipadpro9_1536x2048.a1500e.png",
    "ipadpro10_1668x2224": "/_nuxt/icons/splash_ipadpro10_1668x2224.a1500e.png",
    "ipadpro12_2048x2732": "/_nuxt/icons/splash_ipadpro12_2048x2732.a1500e.png",
    "iphonese_640x1136": "/_nuxt/icons/splash_iphonese_640x1136.a1500e.png",
    "iphone6_50x1334": "/_nuxt/icons/splash_iphone6_50x1334.a1500e.png",
    "iphoneplus_1080x1920": "/_nuxt/icons/splash_iphoneplus_1080x1920.a1500e.png",
    "iphonex_1125x2436": "/_nuxt/icons/splash_iphonex_1125x2436.a1500e.png",
    "iphonexr_828x1792": "/_nuxt/icons/splash_iphonexr_828x1792.a1500e.png",
    "iphonexsmax_1242x2688": "/_nuxt/icons/splash_iphonexsmax_1242x2688.a1500e.png"
  };
  const getIcon = size => icons[size + 'x' + size] || '';
  inject('icon', getIcon);
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(21);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js



// Axios.prototype cannot be modified
const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },
  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }
      this.defaults.headers[scope][name] = value;
    }
  },
  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },
  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },
  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },
  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },
  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },
  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },
  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }
};

// Request helpers ($get, $post, ...)
for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}
const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};
const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel;

  // Extend axios proto
  extendAxiosInstance(axios);

  // Intercept to apply default headers
  axios.onRequest(config => {
    config.headers = {
      ...axios.defaults.headers.common,
      ...config.headers
    };
  });

  // Setup interceptors

  setupProgress(axios);
  return axios;
};
const setupProgress = axios => {
  if (true) {
    return;
  }

  // A noop loading inteterface for when $nuxt is not yet ready
  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };
  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };
  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }
    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }
    currentRequests--;
    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }
    currentRequests--;
    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }
      return;
    }
    $loading().fail();
    $loading().finish();
  });
  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }
    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };
  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};
/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {};
  // baseURL
  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || '/';

  // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js
  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  };

  // Proxy SSR request headers headers
  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = {
      ...ctx.req.headers
    };
    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }
    axiosOptions.headers.common = {
      ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }
  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }
  const axios = createAxiosInstance(axiosOptions);

  // Inject axios to the context as $axios
  ctx.$axios = axios;
  inject('axios', axios);
});
// CONCATENATED MODULE: ./plugins/mixinCommonMethods.js

// import * as _ from 'lodash'
const slugify = __webpack_require__(12);
// const DOMParser = process.browser ? window.DOMParser : require('xmldom').DOMParser
// const parser = new DOMParser()
external_vue_default.a.mixin({
  methods: {
    slugify(fTitle) {
      return slugify(fTitle);
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
      return __webpack_require__(33);
    },
    numberWithSpaces(x) {
      if (x === 0) return '0';
      if (!x) return x;
      if (parseFloat(x) < 1000) return x;
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
  }
});
// EXTERNAL MODULE: external "vue-in-viewport-directive"
var external_vue_in_viewport_directive_ = __webpack_require__(15);
var external_vue_in_viewport_directive_default = /*#__PURE__*/__webpack_require__.n(external_vue_in_viewport_directive_);

// CONCATENATED MODULE: ./plugins/directives.js


external_vue_default.a.directive('in-viewport', external_vue_in_viewport_directive_default.a);
// CONCATENATED MODULE: ./.nuxt/index.js













/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')
 // Source: ./workbox.js (mode: 'client')
 // Source: ./pwa/meta.plugin.js (mode: 'all')
 // Source: ./pwa/icon.plugin.js (mode: 'all')
 // Source: ./axios.js (mode: 'all')
 // Source: ../plugins/vue-touch (mode: 'client')
 // Source: ../plugins/mixinCommonMethods.js (mode: 'all')
 // Source: ../plugins/directives.js (mode: 'all')
 // Source: ../plugins/vue-highchartsfull.js (mode: 'client')
 // Source: ../plugins/vue-observe-visibility.js (mode: 'client')

// Component: <ClientOnly>
external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a);

// TODO: Remove in Nuxt 3: <NoSsr>
external_vue_default.a.component(external_vue_no_ssr_default.a.name, {
  ...external_vue_no_ssr_default.a,
  render(h, ctx) {
    if (false) {}
    return external_vue_no_ssr_default.a.render(h, ctx);
  }
});

// Component: <NuxtChild>
external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child);

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null;
    if (false) {}
    return globalNuxt;
  },
  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;
function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}
async function createApp(ssrContext, config = {}) {
  const store = createStore(ssrContext);
  const router = await createRouter(ssrContext, config, {
    store
  });

  // Add this.$router into store actions/mutations
  store.$router = router;

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule;

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {
      "title": "Agence ORE | Mobilités propres",
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }, {
        "name": "format-detection",
        "content": "telephone=no"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "style": [],
      "script": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }
        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }
          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },
      err: null,
      errPageReady: false,
      dateErr: null,
      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }
        nuxt.dateErr = Date.now();
        nuxt.err = err;
        nuxt.errPageReady = false;
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }
        return err;
      }
    },
    ...App
  };

  // Make app available into store via this.app
  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location);
  // Resolve route
  let route;
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  });
  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }
    key = '$' + key;
    // Add into app
    app[key] = value;
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value;
    }

    // Add into store
    store[key] = app[key];

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__';
    if (external_vue_default.a[installKey]) {
      return;
    }
    external_vue_default.a[installKey] = true;
    // Call Vue.use() to install the plugin into vm
    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }
        });
      }
    });
  }

  // Inject runtime config as $config
  inject('config', config);
  if (false) {}

  // Add enablePreview(previewData = {}) in context for plugins
  if (false) {}
  // Plugin execution

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (false) {}
  if (typeof meta_plugin === 'function') {
    await meta_plugin(app.context, inject);
  }
  if (typeof icon_plugin === 'function') {
    await icon_plugin(app.context, inject);
  }
  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }
  if (false) {}
  if (typeof /* Cannot get final name for export "default" in "./plugins/mixinCommonMethods.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/mixinCommonMethods.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./plugins/directives.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/directives.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (false) {}
  if (false) {}

  // Lock enablePreview in context
  if (false) {}

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}
    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve();

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }
        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}

// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js

// Update serverPrefetch strategy
external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created;

// Fetch mixin
if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
}

// Component: <NuxtLink>
external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);
if (!global.fetch) {
  global.fetch = external_node_fetch_native_default.a;
}
const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});
const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;
  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }
  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.nuxt.config || {};
  const routerBase = $config._app && $config._app.basePath || '/';
  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  }
  // Avoid loop redirect
  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }
  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
};

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext);
  // Used for beforeNuxtRender({ Components, nuxtState })
  ssrContext.beforeRenderFns = [];
  // for beforeSerialize(nuxtState)
  ssrContext.beforeSerializeFns = [];
  // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)
  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {};

  // Remove query from url is static target

  // Public runtime config
  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  }
  // Create the app definition and the instance (created for each request)
  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
  const _app = new external_vue_default.a(app);
  // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr
  ssrContext.nuxt.routePath = app.context.route.path;

  // Add meta infos (used in renderer.js)
  ssrContext.meta = _app.$meta();

  // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)
  ssrContext.asyncData = {};
  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
    ssrContext.rendered = () => {
      // Call beforeSerialize() hooks
      ssrContext.beforeSerializeFns.forEach(fn => fn(ssrContext.nuxt));

      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };
  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    }

    // Load layout for error page
    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);
    _app.setLayout(errLayout);
    await beforeRender();
    return _app;
  };
  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  };

  // Components are already resolved by setContext -> getRouteData (app/utils.js)
  const Components = getMatchedComponents(app.context.route);

  /*
  ** Dispatch store nuxtServerInit
  */
  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  }
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call global middleware (nuxt.config.js)
  */
  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Set layout
  */
  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;
  if (typeof layout === 'function') {
    layout = layout(app.context);
  }
  await _app.loadLayout(layout);
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;

  /*
  ** Call middleware (layout + pages)
  */
  midd = [];
  layout = sanitizeComponent(layout);
  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }
  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call .validate()
  */
  let isValid = true;
  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }
      isValid = await Component.options.validate(app.context);
      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  }

  // ...If .validate() returned false
  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  }

  // If no Components found, returns 404
  if (!Components.length) {
    return render404Page();
  }

  // Call asyncData & fetch hooks on components matched by the route.
  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = [];

    // Call asyncData(context)
    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context).then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    }

    // Call fetch(context)
    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }
    return Promise.all(promises);
  }));

  // datas are the first row of each
  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {});

  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  // Call beforeNuxtRender methods & add store state
  await beforeRender();
  return _app;
});

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("highcharts");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("highcharts-border-radius");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("vuebar");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("vue-scrollto");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map