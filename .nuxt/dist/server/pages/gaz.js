exports.ids = [18,1,2,3,4,5,6,7,8,10,11,14,16];
exports.modules = Array(40).concat([
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("e7f886e6", content, true, context)
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"11\" height=\"19\" viewBox=\"0 0 11 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M1.75 18.25C1.39844 18.25 1.08594 18.1328 0.851562 17.8984C0.34375 17.4297 0.34375 16.6094 0.851562 16.1406L7.45312 9.5L0.851562 2.89844C0.34375 2.42969 0.34375 1.60938 0.851562 1.14062C1.32031 0.632812 2.14062 0.632812 2.60938 1.14062L10.1094 8.64062C10.6172 9.10938 10.6172 9.92969 10.1094 10.3984L2.60938 17.8984C2.375 18.1328 2.0625 18.25 1.75 18.25Z\" fill=\"#141446\"/>\n</svg>\n";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("d195611c", content, true, context)
};

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/highcharts-compo.vue?vue&type=template&id=46615fd6&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('client-only', [_c('highcharts', {
    ref: _vm.graphRef,
    staticClass: "commonGraph",
    class: _vm.graphRef,
    style: {
      width: '100%',
      height: _vm.chartHeight + 'px'
    },
    attrs: {
      "id": _vm.graphRef,
      "options": _vm.options,
      "highcharts": _vm.highcharts
    }
  })], 1), _vm._ssrNode(" " + (_vm.bgImage ? "<img" + _vm._ssrAttr("src", __webpack_require__(47)) + " class=\"gradient-mediane\"" + _vm._ssrStyle(null, {
    width: 'calc(' + (100 - _vm.medianeXPerc) + '% + -20px',
    height: 'calc(' + (100 - _vm.medianeYPerc) + '% + 0px'
  }, null) + " data-v-46615fd6>" : "<!---->") + " " + (_vm.bgImage ? "<img" + _vm._ssrAttr("src", __webpack_require__(48)) + " class=\"gradient-bg\" data-v-46615fd6>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/highcharts-compo.vue?vue&type=template&id=46615fd6&scoped=true

// EXTERNAL MODULE: external "highcharts"
var external_highcharts_ = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/highcharts-compo.vue?vue&type=script&lang=js

const borderRadius = __webpack_require__(36);
if (false) {}
/* harmony default export */ var highcharts_compovue_type_script_lang_js = ({
  props: {
    id: {
      type: String,
      default: function () {
        return 'undefined';
      }
    },
    graphRef: {
      type: String,
      default: function () {
        return 'undefined';
      }
    },
    options: {
      type: Object,
      default: function () {
        return {};
      }
    },
    chartHeight: {
      type: String,
      default: function () {
        return '440px';
      }
    },
    bgImage: {
      type: Boolean,
      default: function () {
        return false;
      }
    },
    medianeXPerc: {
      type: Number,
      default: function () {
        return 0;
      }
    },
    medianeYPerc: {
      type: Number,
      default: function () {
        return 0;
      }
    }
  },
  data: function () {
    return {
      highcharts:  false ? undefined : null
    };
  },
  watch: {
    'options.series': function () {
      window.dispatchEvent(new Event('resize'));
    }
  }
});
// CONCATENATED MODULE: ./components/highcharts-compo.vue?vue&type=script&lang=js
 /* harmony default export */ var components_highcharts_compovue_type_script_lang_js = (highcharts_compovue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/highcharts-compo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(49)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_highcharts_compovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "46615fd6",
  "484bfe32"
  
)

/* harmony default export */ var highcharts_compo = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 23.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Calque_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 20 20\" style=\"enable-background:new 0 0 20 20;\" xml:space=\"preserve\">\n<path style=\"fill:#FFFFFF;\" d=\"M10,0C4.5,0,0,4.5,0,10c0,5.5,4.5,10,10,10c5.5,0,10-4.5,10-10C20,4.5,15.5,0,10,0z M14.9,11.8l-4,4\n\tc-0.4,0.4-0.7,0.4-0.9,0.4c-0.2,0-0.6,0-0.9-0.4L5,11.8c-0.5-0.5-0.5-1.3,0-1.8c0.5-0.5,1.3-0.5,1.8,0l2,1.9V5\n\tc0-0.7,0.5-1.3,1.3-1.3c0.7,0,1.3,0.6,1.3,1.3v7l1.9-1.9c0.5-0.5,1.3-0.5,1.8,0C15.4,10.5,15.4,11.4,14.9,11.8z\"/>\n</svg>\n";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/chart-background-vehicules.5f9af3a.svg";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/chart-background-pdc.30afaaf.svg";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gradient-green.5e83ff8.png";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gradient-mapping.d62adfe.png";

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_highcharts_compo_vue_vue_type_style_index_0_id_46615fd6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_highcharts_compo_vue_vue_type_style_index_0_id_46615fd6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_highcharts_compo_vue_vue_type_style_index_0_id_46615fd6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_highcharts_compo_vue_vue_type_style_index_0_id_46615fd6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_highcharts_compo_vue_vue_type_style_index_0_id_46615fd6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".commonGraph[data-v-46615fd6],.wrapper[data-v-46615fd6]{display:block;overflow:hidden;position:relative}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"320\" height=\"80\" viewBox=\"0 0 320 80\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n<rect width=\"320\" height=\"80\" fill=\"url(#paint0_linear_435_16619)\"/>\n<defs>\n<linearGradient id=\"paint0_linear_435_16619\" x1=\"160\" y1=\"0\" x2=\"160\" y2=\"80\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"white\"/>\n<stop offset=\"1\" stop-color=\"white\" stop-opacity=\"0\"/>\n</linearGradient>\n</defs>\n</svg>\n";

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 23.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Calque_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 20 20\" style=\"enable-background:new 0 0 20 20;\" xml:space=\"preserve\">\n<path style=\"fill:#FFFFFF;\" d=\"M0,10C0,4.5,4.5,0,10,0c5.5,0,10,4.5,10,10c0,5.5-4.5,10-10,10C4.5,20,0,15.5,0,10z M10,14.4\n\tc0.5,0,0.9-0.4,0.9-0.9v-2.5h2.5c0.5,0,0.9-0.4,0.9-0.9c0-0.5-0.4-0.9-0.9-0.9h-2.5V6.6c0-0.5-0.4-0.9-0.9-0.9\n\tc-0.5,0-0.9,0.4-0.9,0.9v2.5H6.6C6,9.1,5.6,9.5,5.6,10c0,0.5,0.4,0.9,0.9,0.9h2.5v2.5C9.1,14,9.5,14.4,10,14.4z\"/>\n</svg>\n";

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 23.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Calque_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 20 20\" style=\"enable-background:new 0 0 20 20;\" xml:space=\"preserve\">\n<path style=\"fill:#FFFFFF;\" d=\"M0,10C0,4.5,4.5,0,10,0c5.5,0,10,4.5,10,10c0,5.5-4.5,10-10,10C4.5,20,0,15.5,0,10z M6.6,9.1\n\tC6,9.1,5.6,9.5,5.6,10c0,0.5,0.4,0.9,0.9,0.9h6.9c0.5,0,0.9-0.4,0.9-0.9c0-0.5-0.4-0.9-0.9-0.9H6.6z\"/>\n</svg>\n";

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"320\" height=\"80\" viewBox=\"0 0 320 80\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\">\n<rect width=\"320\" height=\"80\" fill=\"url(#paint0_linear_435_12201)\"/>\n<defs>\n<linearGradient id=\"paint0_linear_435_12201\" x1=\"160\" y1=\"0\" x2=\"160\" y2=\"80\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"white\" stop-opacity=\"0\"/>\n<stop offset=\"1\" stop-color=\"white\"/>\n</linearGradient>\n</defs>\n</svg>\n";

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/selector-select-location.vue?vue&type=template&id=2fbe44dd&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "selector",
    class: {
      opened: _vm.panelOpen,
      withsearch: _vm.searchEnabled
    },
    attrs: {
      "data-type": "select"
    }
  }, [_vm._ssrNode("<div class=\"placeholder\" data-v-2fbe44dd>" + (_vm.useAnchorDown ? "<span class=\"ico anchor-down\" data-v-2fbe44dd>" + _vm._s(__webpack_require__(56)) + "</span>" : "<span class=\"ico anchor-right\" data-v-2fbe44dd>" + _vm._s(__webpack_require__(41)) + "</span>") + " " + (_vm.internalTerritoire ? "<span class=\"label\" data-v-2fbe44dd>" + _vm._ssrEscape("\n      " + _vm._s(_vm.internalTerritoire.label) + "\n    ") + "</span>" : "<span class=\"label\" data-v-2fbe44dd>" + _vm._ssrEscape("\n      Sélectionner " + _vm._s(_vm.territoireTypeString) + "\n    ") + "</span>") + "</div> "), _vm._ssrNode("<div class=\"selector-list-panel\" data-v-2fbe44dd>", "</div>", [_vm._ssrNode("<div class=\"selector-label box-padding\" data-v-2fbe44dd>" + _vm._ssrEscape("\n      Choisissez " + _vm._s(_vm.territoireTypeString) + "\n    ") + "</div> "), _vm._ssrNode("<div class=\"selector-close\" data-v-2fbe44dd>", "</div>", [_c('panelClose')], 1), _vm._ssrNode(" " + (_vm.searchEnabled ? "<div" + _vm._ssrClass("selector-searchbox", {
    searchOn: _vm.searchOn
  }) + " data-v-2fbe44dd><div class=\"search-label\" data-v-2fbe44dd>" + _vm._ssrEscape("\n        Rechercher " + _vm._s(_vm.territoireTypeString) + "\n      ") + "</div> <span class=\"search\" data-v-2fbe44dd>" + _vm._s(__webpack_require__(57)) + "</span> <span class=\"close\" data-v-2fbe44dd>" + _vm._s(__webpack_require__(58)) + "</span> <input type=\"text\"" + _vm._ssrAttr("value", _vm.searchString) + " data-v-2fbe44dd></div>" : "<!---->") + " "), _vm.vBarEnabled ? _c('div', {
    directives: [{
      name: "bar",
      rawName: "v-bar",
      value: {
        preventParentScroll: true
      },
      expression: "{ preventParentScroll: true }"
    }],
    staticClass: "select-list-wrapper vb"
  }, [_vm._ssrNode("<div class=\"select-list\" data-v-2fbe44dd>", "</div>", _vm._l(_vm.filteredItems, function (item, itemIndex) {
    return _vm._ssrNode("<div" + _vm._ssrClass("select-item", {
      current: _vm.internalTerritoire && _vm.internalTerritoire.code && _vm.internalTerritoire.code === item.code || _vm.internalTerritoire && _vm.internalTerritoire.id && _vm.internalTerritoire.id === item.id
    }) + " data-v-2fbe44dd>", "</div>", [_vm._ssrNode("<div class=\"label\" data-v-2fbe44dd><span class=\"no-mobile\" data-v-2fbe44dd>" + _vm._ssrEscape(_vm._s(item.label)) + (item.label === 'CC des Deux Vallées' || item.label === 'CC des Quatre Rivières' ? "<span data-v-2fbe44dd>" + _vm._ssrEscape(_vm._s(_vm.labelReg(item.code_reg))) + "</span>" : "<!---->") + "</span> <span class=\"mobile-only\" data-v-2fbe44dd>" + _vm._ssrEscape(_vm._s(item.short || item.label)) + (item.label === 'CC des Deux Vallées' || item.label === 'CC des Quatre Rivières' ? "<span data-v-2fbe44dd>" + _vm._ssrEscape(_vm._s(_vm.labelReg(item.code_reg))) + "</span>" : "<!---->") + "</span></div> "), _vm._ssrNode("<div class=\"ico\" data-v-2fbe44dd>", "</div>", [_c('arrowList')], 1)], 2);
  }), 0)]) : _vm._ssrNode("<div class=\"select-list-wrapper\" data-v-2fbe44dd>", "</div>", [_vm._ssrNode("<div class=\"select-list\" data-v-2fbe44dd>", "</div>", _vm._l(_vm.filteredItems, function (item, itemIndex) {
    return _vm._ssrNode("<div" + _vm._ssrClass("select-item", {
      current: _vm.internalTerritoire && _vm.internalTerritoire.code && _vm.internalTerritoire.code === item.code || _vm.internalTerritoire && _vm.internalTerritoire.id && _vm.internalTerritoire.id === item.id
    }) + " data-v-2fbe44dd>", "</div>", [_vm._ssrNode("<div class=\"label\" data-v-2fbe44dd><span class=\"no-mobile\" data-v-2fbe44dd>" + _vm._ssrEscape(_vm._s(item.label)) + (item.label === 'CC des Deux Vallées' || item.label === 'CC des Quatre Rivières' ? "<span data-v-2fbe44dd>" + _vm._ssrEscape(_vm._s(_vm.labelReg(item.code_reg))) + "</span>" : "<!---->") + "</span> <span class=\"mobile-only\" data-v-2fbe44dd>" + _vm._ssrEscape(_vm._s(item.short || item.label)) + (item.label === 'CC des Deux Vallées' || item.label === 'CC des Quatre Rivières' ? "<span data-v-2fbe44dd>" + _vm._ssrEscape(_vm._s(_vm.labelReg(item.code_reg))) + "</span>" : "<!---->") + "</span></div> "), _vm._ssrNode("<div class=\"ico\" data-v-2fbe44dd>", "</div>", [_c('arrowList')], 1)], 2);
  }), 0)])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/selector-select-location.vue?vue&type=template&id=2fbe44dd&scoped=true

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(1);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "vuebar"
var external_vuebar_ = __webpack_require__(37);
var external_vuebar_default = /*#__PURE__*/__webpack_require__.n(external_vuebar_);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// EXTERNAL MODULE: ./assets/_svg/close-panel.svg?inline
var close_panelinline = __webpack_require__(59);
var close_panelinline_default = /*#__PURE__*/__webpack_require__.n(close_panelinline);

// EXTERNAL MODULE: ./assets/_svg/arrow-list.svg?inline
var arrow_listinline = __webpack_require__(60);
var arrow_listinline_default = /*#__PURE__*/__webpack_require__.n(arrow_listinline);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/selector-select-location.vue?vue&type=script&lang=js






external_vue_default.a.use(external_vuebar_default.a);
/* harmony default export */ var selector_select_locationvue_type_script_lang_js = ({
  components: {
    panelClose: close_panelinline_default.a,
    arrowList: arrow_listinline_default.a
  },
  props: {
    vBarEnabled: {
      type: Boolean,
      default: function () {
        return true;
      }
    },
    useAnchorDown: {
      type: Boolean,
      default: function () {
        return false;
      }
    },
    searchEnabled: {
      type: Boolean,
      default: function () {
        return false;
      }
    },
    internalTypeTerritoire: {
      type: Object,
      default: function () {
        return null;
      }
    },
    items: {
      type: Array,
      default: function () {
        return [];
      }
    },
    current: {
      type: Object,
      default: function () {
        return null;
      }
    },
    panelOpen: {
      type: Boolean,
      default: function () {
        return false;
      }
    },
    useInternalTerritoire: {
      type: Boolean,
      default: function () {
        return true;
      }
    }
  },
  data() {
    return {
      searchOn: false,
      searchString: ''
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      departements: 'get_departements',
      regions: 'get_regions',
      epci: 'get_EPCI',
      current_type_territoire: 'get_current_type_territoire'
    }),
    filteredItems() {
      const _self = this;
      if (!this.searchOn || this.searchString.length < 3) return this.items;
      return external_lodash_["filter"](this.items, function (fItem) {
        return _self.slugify(fItem.label.toLowerCase()).includes(_self.slugify(_self.searchString.toLowerCase()));
      });
    },
    territoireTypeString() {
      if (!this.internalTypeTerritoire) return null;
      if (this.internalTypeTerritoire.id === 'regions') return 'une région';else if (this.internalTypeTerritoire.id === 'departements') return 'un département';else if (this.internalTypeTerritoire.id === 'epci') return 'une epci';
      return null;
    },
    internalTerritoire() {
      const _self = this;
      if (this.useInternalTerritoire) {
        if (!_self.$route.params.locationSlug || !this.internalTypeTerritoire) {
          return null;
        }
        return external_lodash_["find"](this[this.internalTypeTerritoire.id], function (fEntry) {
          return _self.slugify(fEntry.label) === _self.$route.params.locationSlug;
        });
      } else {
        return this.current;
      }
    }
  },
  methods: {
    labelReg(fCode) {
      const reg = external_lodash_["find"](this.$store.state.regions, function (fRegion) {
        return fRegion.code === fCode;
      });
      return reg ? ' (' + reg.label + ')' : '';
    },
    openSearch() {
      this.searchOn = true;
      this.$refs.searchInput.focus();
    },
    closeSearch() {
      this.searchString = '';
      this.searchOn = false;
    },
    openPanel() {
      this.$emit('openPanel', true);
    },
    closePanel() {
      this.searchOn = false;
      this.$emit('closePanel', false);
    },
    selectItem(fItem) {
      this.searchOn = false;
      this.searchString = '';
      this.$emit('selectItem', fItem);
    }
  } /*
    ,
    watch: {
    '$route.params.territoireType': function () {
     }
    }
    */
});
// CONCATENATED MODULE: ./components/selector-select-location.vue?vue&type=script&lang=js
 /* harmony default export */ var components_selector_select_locationvue_type_script_lang_js = (selector_select_locationvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/selector-select-location.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(67)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_selector_select_locationvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2fbe44dd",
  "159ba1f5"
  
)

/* harmony default export */ var selector_select_location = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"10\" height=\"6\" viewBox=\"0 0 10 6\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M9.47656 1.50391L6.00391 5.00391C5.8125 5.16797 5.59375 5.25 5.375 5.25C5.12891 5.25 4.91016 5.16797 4.74609 5.00391L1.27344 1.50391C1 1.25781 0.917969 0.875 1.05469 0.546875C1.19141 0.21875 1.51953 0 1.875 0H8.84766C9.20312 0 9.50391 0.21875 9.64062 0.546875C9.77734 0.875 9.72266 1.25781 9.47656 1.50391Z\" fill=\"white\"/>\n</svg>\n";

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"22\" height=\"40\" viewBox=\"0 0 22 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M20.5312 27.8438L15.8438 23.1562C16.8984 21.5938 17.4453 19.6406 17.1719 17.5312C16.6641 13.9375 13.7344 11.0469 10.1797 10.5781C4.86719 9.91406 0.375 14.4062 1.03906 19.7188C1.50781 23.2734 4.39844 26.2031 7.99219 26.7109C10.1016 26.9844 12.0547 26.4375 13.6562 25.3828L18.3047 30.0703C18.9297 30.6562 19.9062 30.6562 20.5312 30.0703C21.1172 29.4453 21.1172 28.4688 20.5312 27.8438ZM4.08594 18.625C4.08594 15.8906 6.3125 13.625 9.08594 13.625C11.8203 13.625 14.0859 15.8906 14.0859 18.625C14.0859 21.3984 11.8203 23.625 9.08594 23.625C6.3125 23.625 4.08594 21.3984 4.08594 18.625Z\" fill=\"white\"/>\n</svg>\n";

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"9\" height=\"9\" viewBox=\"0 0 9 9\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8.26562 6.98438C8.57031 7.26562 8.57031 7.75781 8.26562 8.03906C8.125 8.17969 7.9375 8.25 7.75 8.25C7.53906 8.25 7.35156 8.17969 7.21094 8.03906L4.75 5.57812L2.26562 8.03906C2.125 8.17969 1.9375 8.25 1.75 8.25C1.53906 8.25 1.35156 8.17969 1.21094 8.03906C0.90625 7.75781 0.90625 7.26562 1.21094 6.98438L3.67188 4.5L1.21094 2.03906C0.90625 1.75781 0.90625 1.26562 1.21094 0.984375C1.49219 0.679688 1.98438 0.679688 2.26562 0.984375L4.75 3.44531L7.21094 0.984375C7.49219 0.679688 7.98438 0.679688 8.26562 0.984375C8.57031 1.26562 8.57031 1.75781 8.26562 2.03906L5.80469 4.52344L8.26562 6.98438Z\" fill=\"#EB674C\"/>\n</svg>\n";

/***/ }),
/* 59 */
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
              attrs: Object.assign({"width":"13","height":"12","viewBox":"0 0 13 12","fill":"none","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M11.8984 9.47656C12.3555 9.89844 12.3555 10.6367 11.8984 11.0586C11.6875 11.2695 11.4062 11.375 11.125 11.375C10.8086 11.375 10.5273 11.2695 10.3164 11.0586L6.625 7.36719L2.89844 11.0586C2.6875 11.2695 2.40625 11.375 2.125 11.375C1.80859 11.375 1.52734 11.2695 1.31641 11.0586C0.859375 10.6367 0.859375 9.89844 1.31641 9.47656L5.00781 5.75L1.31641 2.05859C0.859375 1.63672 0.859375 0.898438 1.31641 0.476562C1.73828 0.0195312 2.47656 0.0195312 2.89844 0.476562L6.625 4.16797L10.3164 0.476562C10.7383 0.0195312 11.4766 0.0195312 11.8984 0.476562C12.3555 0.898438 12.3555 1.63672 11.8984 2.05859L8.20703 5.78516L11.8984 9.47656Z","fill":"white"}})])
          )
        }
      }
    

/***/ }),
/* 60 */
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
              attrs: Object.assign({"width":"18","height":"16","viewBox":"0 0 18 16","fill":"none","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M17.1094 9.39844L10.8594 15.6484C10.625 15.8828 10.3125 16 10 16C9.64844 16 9.33594 15.8828 9.10156 15.6484C8.59375 15.1797 8.59375 14.3594 9.10156 13.8906L13.2031 9.75H1.25C0.546875 9.75 0 9.20312 0 8.5C0 7.83594 0.546875 7.25 1.25 7.25H13.2031L9.10156 3.14844C8.59375 2.67969 8.59375 1.85938 9.10156 1.39062C9.57031 0.882812 10.3906 0.882812 10.8594 1.39062L17.1094 7.64062C17.6172 8.10938 17.6172 8.92969 17.1094 9.39844Z","fill":"white"}})])
          )
        }
      }
    

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("2723f6c8", content, true, context)
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("02a85310", content, true, context)
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("e169b866", content, true, context)
};

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 65 */
/***/ (function(module, exports) {



/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M13.5 5.5C13.5 6.34375 12.8125 7 12 7C11.1562 7 10.5 6.34375 10.5 5.5C10.5 4.6875 11.1562 4 12 4C12.8125 4 13.5 4.6875 13.5 5.5ZM13.5 18.5C13.5 19.3438 12.8125 20 12 20C11.1562 20 10.5 19.3438 10.5 18.5C10.5 17.6875 11.1562 17 12 17C12.8125 17 13.5 17.6875 13.5 18.5ZM4 12C4 11.1875 4.65625 10.5 5.5 10.5C6.3125 10.5 7 11.1875 7 12C7 12.8438 6.3125 13.5 5.5 13.5C4.65625 13.5 4 12.8438 4 12ZM20 12C20 12.8438 19.3125 13.5 18.5 13.5C17.6562 13.5 17 12.8438 17 12C17 11.1875 17.6562 10.5 18.5 10.5C19.3125 10.5 20 11.1875 20 12ZM6.3125 17.6562C5.75 17.0938 5.75 16.125 6.3125 15.5625C6.90625 14.9688 7.875 14.9688 8.4375 15.5625C9.03125 16.125 9.03125 17.0938 8.4375 17.6562C7.875 18.25 6.90625 18.25 6.3125 17.6562ZM8.4375 8.46875C7.875 9.0625 6.90625 9.0625 6.3125 8.46875C5.75 7.90625 5.75 6.9375 6.3125 6.34375C6.90625 5.78125 7.875 5.78125 8.4375 6.34375C9.03125 6.9375 9.03125 7.90625 8.4375 8.46875ZM15.5312 15.5625C16.0938 14.9688 17.0625 14.9688 17.6562 15.5625C18.2188 16.125 18.2188 17.0938 17.6562 17.6562C17.0625 18.25 16.0938 18.25 15.5312 17.6562C14.9375 17.0938 14.9375 16.125 15.5312 15.5625Z\" fill=\"#01091D\"/>\n</svg>\n";

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selector_select_location_vue_vue_type_style_index_0_id_2fbe44dd_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selector_select_location_vue_vue_type_style_index_0_id_2fbe44dd_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selector_select_location_vue_vue_type_style_index_0_id_2fbe44dd_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selector_select_location_vue_vue_type_style_index_0_id_2fbe44dd_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selector_select_location_vue_vue_type_style_index_0_id_2fbe44dd_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#app[data-v-2fbe44dd],#index[data-v-2fbe44dd]{--primary-100:#ec81a6;--header-gradient:linear-gradient(180deg,#ec81a6,#141446);--mobility-100:#ec81a6;--secondary-F-25:#fabbae}#app.enedis[data-v-2fbe44dd]{--primary-100:#1423dc;--header-gradient:linear-gradient(180deg,#1423dc,#141446);--mobility-100:#93c90e;--secondary-F-25:#c3e869}.box-padding[data-v-2fbe44dd]{padding:0 40px}.selector[data-v-2fbe44dd]{background:linear-gradient(180deg,#fcfbf8 70%,#eeecdc);border:1px solid #141446;border-radius:20px;padding:10px 20px}.selector[data-v-2fbe44dd]:after{background:linear-gradient(180deg,#eeecdc 70%,#ccc9b4);content:\"\";height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transition-delay:0s;transition-duration:.3s;transition-property:opacity;transition-timing-function:ease-out;width:100%}.selector .placeholder[data-v-2fbe44dd]{color:#141446;cursor:pointer;font-size:14px;font-weight:400;line-height:19px;position:relative}.selector .placeholder .anchor-right[data-v-2fbe44dd]{position:absolute;right:0;top:1px}.selector .placeholder .anchor-down[data-v-2fbe44dd]{position:absolute;right:0;top:0}.selector.opened .selector-list-panel[data-v-2fbe44dd]{display:block}.selector.withsearch .select-list-wrapper[data-v-2fbe44dd]{height:calc(100% - 133px)}.selector.withsearch .select-list-wrapper .select-list .select-item[data-v-2fbe44dd]:first-child{border-top-color:transparent}.selector-close[data-v-2fbe44dd]{cursor:pointer;position:absolute;right:33px;top:24px;transition-delay:0s;transition-duration:.3s;transition-property:opacity;transition-timing-function:ease-out}.selector-close[data-v-2fbe44dd]:hover{opacity:.7}.select-list[data-v-2fbe44dd]{box-sizing:border-box!important;padding-right:7px!important}.selector-searchbox[data-v-2fbe44dd]{background-color:#323274;cursor:pointer;margin-bottom:10px;margin-top:18px;position:relative}.selector-searchbox .search-label[data-v-2fbe44dd]{color:#fff;font-size:14px;font-weight:600;line-height:19px;padding:9px 68px 8px 40px;position:absolute;text-transform:uppercase;width:100%}.selector-searchbox .search[data-v-2fbe44dd]{position:absolute;right:27px}.selector-searchbox .close[data-v-2fbe44dd]{opacity:0;pointer-events:none;position:absolute;right:30px;top:9px;transition-delay:0s;transition-duration:.3s;transition-property:opacity;transition-timing-function:ease-out}.selector-searchbox .close[data-v-2fbe44dd] svg{height:20px;width:13px}.selector-searchbox input[data-v-2fbe44dd]{border:0;font-size:14px;font-weight:600;line-height:19px;opacity:0;padding:9px 68px 8px 40px;pointer-events:none;transition-delay:0s;transition-duration:.3s;transition-property:opacity;transition-timing-function:ease-out;width:100%}.selector-searchbox.searchOn .search[data-v-2fbe44dd],.selector-searchbox.searchOn .search-label[data-v-2fbe44dd]{display:none}.selector-searchbox.searchOn .close[data-v-2fbe44dd],.selector-searchbox.searchOn input[data-v-2fbe44dd]{opacity:1;pointer-events:auto}.selector-list-panel[data-v-2fbe44dd]{background-color:#141446;color:#fff;display:none;height:100%;left:0;position:absolute;top:0;width:100%}.selector-list-panel .select-list-wrapper[data-v-2fbe44dd]{height:calc(100% - 87px);padding-left:40px;padding-right:12px;position:relative}.selector-list-panel .select-list-wrapper .select-list .select-item[data-v-2fbe44dd]{transition-delay:0s;transition-duration:.3s;transition-property:color;transition-timing-function:ease-out}.selector-list-panel .select-list-wrapper .select-list .select-item .ico svg[data-v-2fbe44dd] path{transition-delay:0s;transition-duration:.3s;transition-property:fill;transition-timing-function:ease-out}.selector-list-panel .select-list-wrapper .select-list .select-item[data-v-2fbe44dd]:last-child{margin-bottom:30px}.selector-list-panel .select-list-wrapper .select-list .select-item.current[data-v-2fbe44dd]{color:#98b5e1}.selector-list-panel .select-list-wrapper .select-list .select-item.current .ico svg[data-v-2fbe44dd] path{fill:#98b5e1}.selector-list-panel .select-list-wrapper .select-list .select-item[data-v-2fbe44dd]:hover{color:#f89fbe}.selector-list-panel .select-list-wrapper .select-list .select-item:hover .ico svg[data-v-2fbe44dd] path{fill:#f89fbe}.selector-list-panel .selector-label[data-v-2fbe44dd]{font-size:18px;font-weight:400;line-height:140%;margin:18px 0}.selector-list-panel .select-item[data-v-2fbe44dd]{border-top:1px solid #323274;box-sizing:border-box;cursor:pointer;font-size:14px;font-weight:600;line-height:19px;padding:11px 0 10px;position:relative}.selector-list-panel .select-item .label[data-v-2fbe44dd]{padding-right:18px}.selector-list-panel .select-item .ico[data-v-2fbe44dd]{margin-top:-8px;position:absolute;right:0;top:50%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 69 */
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
              attrs: Object.assign({"width":"172","height":"80","viewBox":"0 0 172 80","fill":"none","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M14.0913 66.7444C14.0913 68.0981 14.6291 69.3965 15.5864 70.3537C16.5436 71.311 17.8419 71.8487 19.1957 71.8487H155.449V39.7126H14.0913V66.7444Z","fill":"#1A5270"}}),_c('path',{attrs:{"d":"M169.084 52.0622C168.749 47.9564 165.889 42.2529 163.061 39.2813C158.164 34.2088 149.425 28.705 132.706 28.705C116.554 28.705 106.401 1.89697 61.2128 1.89697C27.0157 1.89697 2.44435 23.4089 2.44435 49.9454C2.44039 53.1535 3.08753 56.329 4.34662 59.2797C5.60571 62.2304 7.45056 64.8949 9.76944 67.1118C10.3564 67.7074 11.1154 68.1037 11.9396 68.2449C12.7637 68.3861 13.6114 68.2651 14.3631 67.899C15.1149 67.5328 15.7327 66.9399 16.1296 66.204C16.5265 65.468 16.6824 64.626 16.5753 63.7968C16.2064 60.8356 16.5188 57.8294 17.4884 55.0073C18.4581 52.1852 20.0595 49.6219 22.1704 47.5128C24.2814 45.4037 26.8462 43.8047 29.6691 42.8375C32.4921 41.8704 35.4986 41.5608 38.4594 41.9323C41.4202 42.3038 44.257 43.3466 46.7535 44.9812C49.25 46.6158 51.3402 48.799 52.8646 51.3642C54.3891 53.9294 55.3075 56.809 55.5499 59.7831C55.7923 62.7573 55.3521 65.7475 54.2631 68.5257C54.0287 69.1069 53.9416 69.7371 54.0095 70.3601C54.0775 70.9832 54.2984 71.5798 54.6525 72.0968C55.0067 72.6138 55.4832 73.0353 56.0396 73.3237C56.5961 73.6122 57.2152 73.7586 57.8418 73.7499H110.987C111.802 73.7541 112.606 73.5679 113.337 73.2061C114.067 72.8442 114.702 72.3168 115.193 71.6659C115.683 71.0149 116.015 70.2584 116.161 69.4567C116.307 68.6549 116.264 67.8301 116.035 67.0479C115.135 64.0583 114.961 60.8969 115.53 57.8268C116.099 54.7568 117.393 51.8671 119.305 49.3985C121.216 46.9299 123.69 44.9539 126.52 43.6351C129.35 42.3163 132.455 41.6928 135.575 41.8167C138.694 41.9406 141.739 42.8082 144.456 44.3473C147.173 45.8863 149.482 48.0523 151.192 50.6646C152.902 53.277 153.963 56.2602 154.286 59.3657C154.61 62.4712 154.187 65.609 153.052 68.5177C152.846 69.0378 152.797 69.6066 152.909 70.1544C153.022 70.7023 153.292 71.2053 153.686 71.6021C154.08 71.9988 154.582 72.272 155.129 72.3882C155.676 72.5043 156.245 72.4585 156.766 72.2562C160.703 70.6414 164.021 67.8116 166.237 64.1791C168.452 60.5466 169.45 56.3014 169.084 52.0622Z","fill":"#439CCC"}}),_c('path',{attrs:{"d":"M73.9916 52.0579H78.6544C79.1956 52.0579 79.6952 52.4374 79.8617 52.9434C80.0698 53.4915 79.945 54.0817 79.5286 54.4612L68.8709 63.9056C68.3713 64.2851 67.7052 64.3272 67.2056 63.9478C66.7061 63.6105 66.4979 62.9359 66.7477 62.3456L69.9533 54.7563H65.2906C64.7494 54.7563 64.2498 54.419 64.0833 53.9131C63.8751 53.365 64 52.7747 64.4163 52.3952L75.074 42.9508C75.5736 42.5714 76.2397 42.5292 76.7393 42.9087C77.2389 43.246 77.447 43.9206 77.1973 44.5109L73.9916 52.0579Z","fill":"white"}}),_c('path',{attrs:{"d":"M86.1019 44.5414C86.1019 43.0671 87.2814 41.8455 88.7979 41.8455H95.5378C97.0122 41.8455 98.2338 43.0671 98.2338 44.5414V52.6294H98.5708C100.593 52.6294 102.278 54.3144 102.278 56.3364V57.6844C102.278 58.2741 102.699 58.6954 103.289 58.6954C103.836 58.6954 104.3 58.2741 104.3 57.6844V51.1972C103.12 50.9023 102.278 49.8492 102.278 48.5854V45.8894L100.93 44.5414C100.551 44.2044 100.551 43.5726 100.93 43.1935C101.267 42.8565 101.899 42.8565 102.278 43.1935L105.521 46.4792C106.027 46.9847 106.322 47.6587 106.322 48.3748V57.6844C106.322 59.3693 104.932 60.7173 103.289 60.7173C101.604 60.7173 100.256 59.3693 100.256 57.6844V56.3364C100.256 55.4096 99.4976 54.6514 98.5708 54.6514H98.2338V60.7173C98.9499 60.7173 99.5818 61.3492 99.5818 62.0653C99.5818 62.8236 98.9499 63.4133 98.2338 63.4133H86.1019C85.3437 63.4133 84.7539 62.8236 84.7539 62.0653C84.7539 61.3492 85.3437 60.7173 86.1019 60.7173V44.5414ZM88.7979 49.2594C88.7979 49.6385 89.0928 49.9334 89.4719 49.9334H94.8638C95.2008 49.9334 95.5378 49.6385 95.5378 49.2594V45.2154C95.5378 44.8784 95.2008 44.5414 94.8638 44.5414H89.4719C89.0928 44.5414 88.7979 44.8784 88.7979 45.2154V49.2594Z","fill":"white"}}),_c('path',{attrs:{"d":"M36.0499 78.1034C45.3012 78.1034 52.8009 70.6037 52.8009 61.3524C52.8009 52.101 45.3012 44.6013 36.0499 44.6013C26.7985 44.6013 19.2988 52.101 19.2988 61.3524C19.2988 70.6037 26.7985 78.1034 36.0499 78.1034Z","fill":"#141446"}}),_c('path',{attrs:{"d":"M36.0499 69.7082C40.6645 69.7082 44.4054 65.9673 44.4054 61.3526C44.4054 56.738 40.6645 52.9971 36.0499 52.9971C31.4352 52.9971 27.6943 56.738 27.6943 61.3526C27.6943 65.9673 31.4352 69.7082 36.0499 69.7082Z","fill":"#9FCBE9"}}),_c('path',{attrs:{"d":"M134.791 78.1034C144.042 78.1034 151.542 70.6037 151.542 61.3524C151.542 52.101 144.042 44.6013 134.791 44.6013C125.539 44.6013 118.04 52.101 118.04 61.3524C118.04 70.6037 125.539 78.1034 134.791 78.1034Z","fill":"#141446"}}),_c('path',{attrs:{"d":"M134.791 69.7082C139.405 69.7082 143.146 65.9673 143.146 61.3526C143.146 56.738 139.405 52.9971 134.791 52.9971C130.176 52.9971 126.435 56.738 126.435 61.3526C126.435 65.9673 130.176 69.7082 134.791 69.7082Z","fill":"#9FCBE9"}}),_c('path',{attrs:{"d":"M7.02175 44.6972C6.87346 44.6962 6.72708 44.6637 6.59231 44.6018C6.45754 44.54 6.33746 44.4502 6.24002 44.3384C6.14259 44.2266 6.07002 44.0954 6.02713 43.9534C5.98425 43.8114 5.97203 43.662 5.99127 43.515C6.27086 41.3342 7.30133 39.7126 8.5315 39.7126C9.76166 39.7126 10.7921 41.3102 11.0717 43.515C11.091 43.662 11.0787 43.8114 11.0358 43.9534C10.993 44.0954 10.9204 44.2266 10.823 44.3384C10.7255 44.4502 10.6055 44.54 10.4707 44.6018C10.3359 44.6637 10.1895 44.6962 10.0412 44.6972H7.02175Z","fill":"#EB674C"}}),_c('path',{attrs:{"d":"M156.831 48.7856C156.46 48.7873 156.096 48.6839 155.781 48.4872C155.466 48.2906 155.214 48.0088 155.052 47.6744C154.891 47.3401 154.828 46.9669 154.87 46.598C154.912 46.2292 155.057 45.8798 155.29 45.5903C155.758 45.0326 156.343 44.5842 157.004 44.2766C157.664 43.969 158.384 43.8096 159.112 43.8096C159.84 43.8096 160.56 43.969 161.22 44.2766C161.881 44.5842 162.466 45.0326 162.934 45.5903C163.167 45.8798 163.312 46.2292 163.354 46.598C163.396 46.9669 163.333 47.3401 163.172 47.6744C163.01 48.0088 162.758 48.2906 162.443 48.4872C162.128 48.6839 161.764 48.7873 161.393 48.7856H156.831Z","fill":"#FDCC44"}}),_c('path',{attrs:{"d":"M25.5939 31.1172H55.5652C57.3448 31.1172 59.0515 30.4103 60.3099 29.1519C61.5683 27.8936 62.2752 26.1869 62.2752 24.4072V13.8949C62.2786 12.941 62.0781 11.9973 61.6871 11.1272C61.2961 10.2571 60.7236 9.48059 60.008 8.84974C59.2925 8.21889 58.4503 7.74826 57.5381 7.4694C56.6258 7.19054 55.6645 7.10989 54.7185 7.23284C40.244 9.19791 29.2364 16.491 22.3667 22.5061C21.6145 23.1637 21.0807 24.0351 20.8365 25.0039C20.5923 25.9727 20.6493 26.993 20.9999 27.9286C21.3506 28.8642 21.9781 29.6706 22.7989 30.2403C23.6197 30.81 24.5947 31.116 25.5939 31.1172Z","fill":"#9FCBE9"}}),_c('path',{attrs:{"d":"M76.4623 7.76805C89.8424 9.81301 104.261 16.8186 110.012 24.4712C110.469 25.095 110.744 25.8334 110.806 26.6041C110.868 27.3748 110.715 28.1476 110.364 28.8365C110.013 29.5254 109.478 30.1033 108.818 30.506C108.157 30.9087 107.399 31.1203 106.625 31.1173H73.6585C72.4276 31.1173 71.2471 30.6283 70.3768 29.7579C69.5064 28.8876 69.0174 27.7071 69.0174 26.4762V13.4556C68.9775 9.4775 72.5322 7.16895 76.4623 7.76805Z","fill":"#9FCBE9"}}),_c('path',{attrs:{"d":"M106.729 25.5498C106.728 25.3551 106.772 25.1627 106.858 24.988C106.944 24.8133 107.069 24.6611 107.224 24.5432C107.379 24.4254 107.56 24.3453 107.751 24.3093C107.942 24.2732 108.139 24.2822 108.327 24.3356C110.851 25.0226 114.573 26.9876 114.573 29.3121C114.573 31.6367 110.851 33.6097 108.327 34.2967C108.139 34.35 107.942 34.3591 107.751 34.323C107.56 34.287 107.379 34.2068 107.224 34.089C107.069 33.9712 106.944 33.8189 106.858 33.6442C106.772 33.4695 106.728 33.2772 106.729 33.0825V25.5498Z","fill":"#1A5270"}})])
          )
        }
      }
    

/***/ }),
/* 70 */
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
              attrs: Object.assign({"width":"172","height":"80","viewBox":"0 0 172 80","fill":"none","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M14.0916 66.7444C14.0916 68.0981 14.6293 69.3965 15.5866 70.3537C16.5439 71.311 17.8422 71.8487 19.196 71.8487H155.449V39.7126H14.0916V66.7444Z","fill":"#1A5270"}}),_c('path',{attrs:{"d":"M169.084 52.0622C168.749 47.9564 165.889 42.2529 163.061 39.2813C158.164 34.2088 149.425 28.705 132.706 28.705C116.554 28.705 106.402 1.89697 61.2129 1.89697C27.0159 1.89697 2.44448 23.4089 2.44448 49.9454C2.44051 53.1535 3.08765 56.329 4.34674 59.2797C5.60584 62.2304 7.45068 64.8949 9.76956 67.1118C10.3565 67.7074 11.1155 68.1037 11.9397 68.2449C12.7638 68.3861 13.6115 68.2651 14.3633 67.899C15.115 67.5328 15.7328 66.9399 16.1297 66.204C16.5266 65.468 16.6825 64.626 16.5754 63.7968C16.2066 60.8356 16.5189 57.8294 17.4885 55.0073C18.4582 52.1852 20.0596 49.6219 22.1705 47.5128C24.2815 45.4037 26.8463 43.8047 29.6692 42.8375C32.4922 41.8704 35.4987 41.5608 38.4595 41.9323C41.4203 42.3038 44.2571 43.3466 46.7536 44.9812C49.2501 46.6158 51.3403 48.799 52.8648 51.3642C54.3892 53.9294 55.3077 56.809 55.55 59.7831C55.7924 62.7573 55.3523 65.7475 54.2633 68.5257C54.0288 69.1069 53.9417 69.7371 54.0097 70.3601C54.0776 70.9832 54.2985 71.5798 54.6527 72.0968C55.0069 72.6138 55.4833 73.0353 56.0398 73.3237C56.5962 73.6122 57.2153 73.7586 57.8419 73.7499H110.987C111.802 73.7541 112.606 73.5679 113.337 73.2061C114.067 72.8442 114.703 72.3168 115.193 71.6659C115.683 71.0149 116.015 70.2584 116.161 69.4567C116.307 68.6549 116.264 67.8301 116.035 67.0479C115.135 64.0583 114.962 60.8969 115.53 57.8268C116.099 54.7568 117.393 51.8671 119.305 49.3985C121.217 46.9299 123.69 44.9539 126.521 43.6351C129.351 42.3163 132.455 41.6928 135.575 41.8167C138.694 41.9406 141.74 42.8082 144.456 44.3473C147.173 45.8863 149.482 48.0523 151.192 50.6646C152.902 53.277 153.963 56.2602 154.287 59.3657C154.61 62.4712 154.187 65.609 153.052 68.5177C152.846 69.0378 152.797 69.6066 152.91 70.1544C153.022 70.7023 153.292 71.2053 153.686 71.6021C154.081 71.9988 154.582 72.272 155.129 72.3882C155.676 72.5043 156.245 72.4585 156.767 72.2562C160.703 70.6414 164.021 67.8116 166.237 64.1791C168.453 60.5466 169.45 56.3014 169.084 52.0622Z","fill":"#439CCC"}}),_c('path',{attrs:{"d":"M84.9265 40.2346C84.5793 39.9218 84.1328 39.9218 83.7856 40.2346C78.5277 45.448 74.8571 52.2255 74.8571 56.2398C74.8571 62.8087 78.7757 66.6667 84.3809 66.6667C89.986 66.6667 93.9047 62.8087 93.9047 56.2398C93.9047 52.1733 90.1844 45.448 84.9265 40.2346ZM84.3809 64.4007C81.5535 64.4007 79.619 62.4717 79.619 59.6565C79.619 58.9787 79.8174 56.737 83.736 52.2013C84.0832 51.8363 84.6289 51.8363 84.9761 52.2013C88.8948 56.737 89.1428 58.9787 89.1428 59.6565C89.1428 62.4717 87.1586 64.4007 84.3809 64.4007Z","fill":"white"}}),_c('path',{attrs:{"d":"M36.0502 78.1034C45.3016 78.1034 52.8013 70.6037 52.8013 61.3524C52.8013 52.101 45.3016 44.6013 36.0502 44.6013C26.7989 44.6013 19.2992 52.101 19.2992 61.3524C19.2992 70.6037 26.7989 78.1034 36.0502 78.1034Z","fill":"#141446"}}),_c('path',{attrs:{"d":"M36.0504 69.7082C40.665 69.7082 44.4059 65.9673 44.4059 61.3526C44.4059 56.738 40.665 52.9971 36.0504 52.9971C31.4357 52.9971 27.6948 56.738 27.6948 61.3526C27.6948 65.9673 31.4357 69.7082 36.0504 69.7082Z","fill":"#9FCBE9"}}),_c('path',{attrs:{"d":"M134.791 78.1034C144.042 78.1034 151.542 70.6037 151.542 61.3524C151.542 52.101 144.042 44.6013 134.791 44.6013C125.539 44.6013 118.04 52.101 118.04 61.3524C118.04 70.6037 125.539 78.1034 134.791 78.1034Z","fill":"#141446"}}),_c('path',{attrs:{"d":"M134.791 69.7082C139.406 69.7082 143.147 65.9673 143.147 61.3526C143.147 56.738 139.406 52.9971 134.791 52.9971C130.176 52.9971 126.436 56.738 126.436 61.3526C126.436 65.9673 130.176 69.7082 134.791 69.7082Z","fill":"#9FCBE9"}}),_c('path',{attrs:{"d":"M7.02175 44.6972C6.87346 44.6962 6.72708 44.6637 6.59231 44.6018C6.45754 44.54 6.33746 44.4502 6.24002 44.3384C6.14259 44.2266 6.07002 44.0954 6.02713 43.9534C5.98425 43.8114 5.97203 43.662 5.99127 43.515C6.27086 41.3342 7.30133 39.7126 8.5315 39.7126C9.76166 39.7126 10.7921 41.3102 11.0717 43.515C11.091 43.662 11.0787 43.8114 11.0358 43.9534C10.993 44.0954 10.9204 44.2266 10.823 44.3384C10.7255 44.4502 10.6055 44.54 10.4707 44.6018C10.3359 44.6637 10.1895 44.6962 10.0412 44.6972H7.02175Z","fill":"#EB674C"}}),_c('path',{attrs:{"d":"M156.831 48.7856C156.46 48.7873 156.096 48.6839 155.781 48.4872C155.466 48.2906 155.214 48.0088 155.052 47.6744C154.891 47.3401 154.828 46.9669 154.87 46.598C154.912 46.2292 155.057 45.8798 155.29 45.5903C155.758 45.0326 156.343 44.5842 157.004 44.2766C157.664 43.969 158.384 43.8096 159.112 43.8096C159.84 43.8096 160.56 43.969 161.22 44.2766C161.881 44.5842 162.466 45.0326 162.934 45.5903C163.167 45.8798 163.312 46.2292 163.354 46.598C163.396 46.9669 163.333 47.3401 163.172 47.6744C163.01 48.0088 162.758 48.2906 162.443 48.4872C162.128 48.6839 161.764 48.7873 161.393 48.7856H156.831Z","fill":"#FDCC44"}}),_c('path',{attrs:{"d":"M25.594 31.1172H55.5653C57.3449 31.1172 59.0517 30.4103 60.31 29.1519C61.5684 27.8936 62.2753 26.1869 62.2753 24.4072V13.8949C62.2787 12.941 62.0782 11.9973 61.6872 11.1272C61.2962 10.2571 60.7237 9.48059 60.0082 8.84974C59.2926 8.21889 58.4504 7.74826 57.5382 7.4694C56.6259 7.19054 55.6646 7.10989 54.7186 7.23284C40.2442 9.19791 29.2366 16.491 22.3668 22.5061C21.6146 23.1637 21.0808 24.0351 20.8366 25.0039C20.5924 25.9727 20.6494 26.993 21.0001 27.9286C21.3507 28.8642 21.9783 29.6706 22.7991 30.2403C23.6198 30.81 24.5948 31.116 25.594 31.1172Z","fill":"#9FCBE9"}}),_c('path',{attrs:{"d":"M76.4625 7.76805C89.8425 9.81301 104.261 16.8186 110.012 24.4712C110.469 25.095 110.744 25.8334 110.806 26.6041C110.868 27.3748 110.715 28.1476 110.364 28.8365C110.013 29.5254 109.478 30.1033 108.818 30.506C108.158 30.9087 107.399 31.1203 106.625 31.1173H73.6586C72.4277 31.1173 71.2473 30.6283 70.3769 29.7579C69.5065 28.8876 69.0175 27.7071 69.0175 26.4762V13.4556C68.9776 9.4775 72.5323 7.16895 76.4625 7.76805Z","fill":"#9FCBE9"}}),_c('path',{attrs:{"d":"M106.729 25.5498C106.728 25.3551 106.772 25.1627 106.858 24.988C106.944 24.8133 107.07 24.6611 107.225 24.5432C107.38 24.4254 107.56 24.3453 107.751 24.3093C107.943 24.2732 108.14 24.2822 108.327 24.3356C110.851 25.0226 114.574 26.9876 114.574 29.3121C114.574 31.6367 110.851 33.6097 108.327 34.2967C108.14 34.35 107.943 34.3591 107.751 34.323C107.56 34.287 107.38 34.2068 107.225 34.089C107.07 33.9712 106.944 33.8189 106.858 33.6442C106.772 33.4695 106.728 33.2772 106.729 33.0825V25.5498Z","fill":"#1A5270"}})])
          )
        }
      }
    

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/chart-background-vehicules-gaz.3f5df95.svg";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/chart-background-pdc-gaz.9556dc1.svg";

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 23.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\"width=\"77.9\" height=\"62\"  id=\"Calque_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 77.9 62\" style=\"enable-background:new 0 0 77.9 62;\" xml:space=\"preserve\">\n<g>\n\t<path style=\"fill:#FFFFFF;\" d=\"M23.5,13.5h2.9v-2.9h-2.9V13.5z M6.7,25.2c0-4.7,3.8-8.5,8.5-8.5c4.7,0,8.5,3.8,8.5,8.5\n\t\tc0,4.7-3.8,8.5-8.5,8.5C10.5,33.8,6.7,30,6.7,25.2C6.7,25.3,6.7,25.2,6.7,25.2 M38.8,15.9h2.6c5,0,6.7,1.1,6.7,3.8\n\t\tc0,2.8-2.1,3.8-5.9,3.8h-3.4L38.8,15.9L38.8,15.9z M29.2,10v3.5h-2.9v2.9h-2.8v-2.9h-4.3v-3C11.1,8.3,2.8,13.1,0.5,21.2\n\t\tc-2.2,8.1,2.6,16.5,10.7,18.7c8.1,2.2,16.5-2.6,18.7-10.7c0.9-3.3,0.7-6.9-0.7-10h1.5v-2.9h-1.4v-2.9h2.9v26.9h6.7v-12h3l7.7,12\n\t\th7.7l-8.6-12.9c4-1.3,6.1-4.5,6.1-8.4c0-7.3-6.2-9.2-13.1-9.2L29.2,10L29.2,10z M58.8,10v30.4h19v-5.8H65.5v-7.2h10.4v-5.5H65.5v-6\n\t\th12.3V10H58.8z M20.4,9.4h3.5V5.9h-3.5V9.4z M26.8,7.6h2.9V4.8h-2.9C26.8,4.8,26.8,7.6,26.8,7.6z M30.5,3.7h1.9V1.9h-1.9V3.7z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M5.2,51.7H2.1v-5.3h3.1v0.7H3v1.4h2.1v0.7H3v1.7h2.2C5.2,50.9,5.2,51.7,5.2,51.7z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M9.9,51.7H9v-2.5c0-0.2,0-0.5-0.2-0.7c-0.2-0.2-0.4-0.3-0.6-0.2c-0.3,0-0.6,0.1-0.8,0.3\n\t\tc-0.2,0.3-0.3,0.7-0.3,1.1v2H6.2v-4h0.7L7,48.2h0c0.1-0.2,0.3-0.3,0.5-0.4c0.2-0.1,0.5-0.2,0.7-0.2c1,0,1.5,0.5,1.5,1.5L9.9,51.7\n\t\tL9.9,51.7z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M13.7,50.5c0,0.4-0.2,0.7-0.4,0.9c-0.4,0.2-0.8,0.3-1.3,0.3c-0.5,0-0.9-0.1-1.3-0.2v-0.7\n\t\tc0.4,0.2,0.9,0.3,1.4,0.3c0.5,0,0.8-0.2,0.8-0.5c0-0.1,0-0.2-0.1-0.3c-0.1-0.1-0.2-0.2-0.3-0.2c-0.2-0.1-0.4-0.2-0.6-0.2\n\t\tc-0.4-0.1-0.7-0.3-1-0.5c-0.2-0.2-0.3-0.4-0.3-0.7c0-0.3,0.2-0.6,0.4-0.8c0.4-0.2,0.8-0.3,1.2-0.3c0.5,0,0.9,0.1,1.4,0.3l-0.3,0.7\n\t\tc-0.4-0.2-0.7-0.2-1.1-0.3c-0.5,0-0.7,0.1-0.7,0.4c0,0.1,0.1,0.3,0.2,0.3c0.2,0.2,0.5,0.3,0.8,0.4c0.3,0.1,0.5,0.2,0.7,0.4\n\t\tC13.6,49.9,13.8,50.2,13.7,50.5C13.8,50.5,13.7,50.5,13.7,50.5z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M16.4,51.8c-1,0.1-2-0.7-2.1-1.7c0-0.1,0-0.2,0-0.3c0-0.6,0.1-1.1,0.5-1.5c0.4-0.4,0.9-0.6,1.4-0.6\n\t\tc0.5,0,1,0.1,1.3,0.5c0.3,0.4,0.5,0.8,0.5,1.3v0.5h-2.8c0,0.3,0.1,0.7,0.3,0.9c0.2,0.2,0.5,0.3,0.9,0.3c0.2,0,0.5,0,0.7-0.1\n\t\tc0.2-0.1,0.5-0.1,0.7-0.2v0.7c-0.2,0.1-0.4,0.2-0.7,0.2C16.9,51.7,16.6,51.8,16.4,51.8L16.4,51.8z M16.2,48.2\n\t\tc-0.2,0-0.5,0.1-0.7,0.3c-0.2,0.2-0.3,0.5-0.3,0.7h1.9c0-0.3-0.1-0.5-0.2-0.7C16.7,48.3,16.5,48.2,16.2,48.2z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M22.4,51.7h-0.9v-2.5c0-0.2,0-0.5-0.2-0.7c-0.1-0.2-0.3-0.2-0.6-0.2c-0.3,0-0.6,0.1-0.7,0.3\n\t\tc-0.2,0.3-0.3,0.7-0.2,1.1v2h-0.9v-4h0.7l0.1,0.5h0c0.1-0.2,0.3-0.3,0.5-0.4c0.2-0.1,0.5-0.2,0.7-0.2c0.6,0,1.1,0.2,1.3,0.6h0.1\n\t\tc0.1-0.2,0.3-0.4,0.5-0.5c0.2-0.1,0.5-0.2,0.8-0.2c0.4,0,0.8,0.1,1.1,0.4c0.3,0.3,0.4,0.7,0.3,1.1v2.6h-0.9v-2.5\n\t\tc0-0.2,0-0.5-0.2-0.7c-0.1-0.2-0.4-0.2-0.6-0.2c-0.3,0-0.6,0.1-0.7,0.3c-0.2,0.3-0.3,0.6-0.2,1L22.4,51.7L22.4,51.7z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M28.2,47.6c0.5,0,0.9,0.2,1.2,0.5c0.6,0.9,0.6,2.1,0,3.1c-0.6,0.7-1.6,0.7-2.3,0.1\n\t\tc0,0-0.1-0.1-0.1-0.1h-0.1l-0.2,0.5h-0.7V46H27v1.8c0,0.2,0,0.3,0,0.4h0C27.3,47.8,27.7,47.6,28.2,47.6L28.2,47.6z M28,48.3\n\t\tc-0.3,0-0.6,0.1-0.8,0.3c-0.2,0.3-0.3,0.7-0.2,1v0.1c0,0.4,0.1,0.7,0.2,1.1c0.2,0.2,0.5,0.4,0.8,0.3c0.3,0,0.6-0.1,0.7-0.4\n\t\tc0.2-0.3,0.3-0.7,0.2-1C29,48.7,28.6,48.3,28,48.3L28,48.3L28,48.3z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M31.6,51.7h-0.9V46h0.9V51.7z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M34.6,51.8c-1,0.1-2-0.7-2.1-1.7c0-0.1,0-0.2,0-0.3c0-0.6,0.1-1.1,0.5-1.5c0.4-0.4,0.9-0.6,1.4-0.6\n\t\tc0.5,0,0.9,0.1,1.3,0.5c0.3,0.4,0.5,0.8,0.5,1.3v0.5h-2.8c0,0.3,0.1,0.7,0.3,0.9c0.2,0.2,0.5,0.3,0.9,0.3c0.2,0,0.5,0,0.7-0.1\n\t\tc0.2-0.1,0.5-0.1,0.7-0.2v0.7c-0.2,0.1-0.4,0.2-0.7,0.2C35.1,51.7,34.8,51.8,34.6,51.8L34.6,51.8z M34.4,48.2\n\t\tc-0.2,0-0.5,0.1-0.7,0.3c-0.2,0.2-0.3,0.5-0.3,0.7h1.9c0-0.3-0.1-0.5-0.2-0.7C34.9,48.3,34.7,48.2,34.4,48.2L34.4,48.2z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M38,50.9c-0.2,0.6-0.4,1.2-0.7,1.7h-0.6c0.2-0.6,0.3-1.2,0.4-1.8L38,50.9L38,50.9L38,50.9z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M44,51.7h-0.9v-2.5c0-0.2,0-0.5-0.2-0.7c-0.1-0.2-0.3-0.2-0.6-0.2c-0.3,0-0.6,0.1-0.7,0.3\n\t\tc-0.2,0.3-0.3,0.7-0.2,1.1v2h-0.9v-4h0.7l0.1,0.5h0c0.1-0.2,0.3-0.3,0.5-0.4c0.2-0.1,0.5-0.2,0.7-0.2c0.6,0,1.1,0.2,1.3,0.6h0.1\n\t\tc0.1-0.2,0.3-0.4,0.5-0.5c0.2-0.1,0.5-0.2,0.8-0.2c0.4,0,0.8,0.1,1.1,0.4c0.3,0.3,0.4,0.7,0.3,1.1v2.6h-0.9v-2.5\n\t\tc0-0.2,0-0.5-0.2-0.7c-0.1-0.2-0.3-0.2-0.6-0.2c-0.3,0-0.6,0.1-0.7,0.3c-0.2,0.3-0.3,0.6-0.2,1L44,51.7L44,51.7z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M50.3,51.7l-0.2-0.6h0c-0.2,0.2-0.4,0.4-0.6,0.5c-0.2,0.1-0.5,0.1-0.8,0.1c-0.3,0-0.7-0.1-1-0.3\n\t\tc-0.2-0.2-0.4-0.6-0.3-0.9c0-0.4,0.2-0.7,0.5-0.9c0.4-0.2,0.9-0.4,1.4-0.3l0.7,0V49c0-0.2,0-0.4-0.2-0.6c-0.2-0.1-0.4-0.2-0.6-0.2\n\t\tc-0.2,0-0.4,0-0.6,0.1c-0.2,0.1-0.4,0.1-0.6,0.2l-0.3-0.6c0.2-0.1,0.5-0.2,0.7-0.3c0.2-0.1,0.5-0.1,0.7-0.1c0.4,0,0.8,0.1,1.2,0.3\n\t\tc0.3,0.3,0.4,0.7,0.4,1v2.7L50.3,51.7L50.3,51.7z M49,51.1c0.3,0,0.6-0.1,0.8-0.3c0.2-0.2,0.3-0.5,0.3-0.7v-0.3l-0.5,0\n\t\tc-0.3,0-0.6,0.1-0.9,0.2c-0.2,0.1-0.3,0.3-0.3,0.5c0,0.2,0.1,0.3,0.2,0.4C48.6,51.1,48.8,51.1,49,51.1L49,51.1L49,51.1z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M53.3,47.2c-0.3-0.2-0.6-0.4-0.9-0.7c-0.3,0.2-0.5,0.5-0.8,0.7H51v-0.1c0.4-0.3,0.7-0.7,1-1.1h1\n\t\tc0.3,0.4,0.6,0.8,1,1.1v0.1H53.3z M52.9,51.7H52v-4h0.9V51.7z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M55.6,51.1c0.2,0,0.4,0,0.6-0.1v0.6c-0.1,0-0.2,0.1-0.4,0.1c-0.2,0-0.3,0-0.5,0\n\t\tc-0.8,0-1.3-0.4-1.3-1.3v-2.2h-0.6v-0.4l0.6-0.3l0.3-0.9H55v0.9h1.2v0.6H55v2.1c0,0.3,0.2,0.6,0.5,0.6\n\t\tC55.5,51.1,55.6,51.1,55.6,51.1L55.6,51.1L55.6,51.1z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M59.1,47.6c0.1,0,0.3,0,0.4,0l-0.1,0.8c-0.1,0-0.2,0-0.4,0c-0.3,0-0.6,0.1-0.9,0.3\n\t\tc-0.2,0.2-0.3,0.5-0.3,0.9v2.1H57v-4h0.7l0.1,0.7h0c0.1-0.2,0.3-0.4,0.5-0.6C58.6,47.7,58.8,47.6,59.1,47.6L59.1,47.6z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M60.1,46.6c0-0.1,0-0.3,0.1-0.3c0.2-0.2,0.5-0.2,0.7,0c0.1,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.3-0.1,0.3\n\t\tc-0.2,0.2-0.5,0.2-0.7,0C60.1,46.9,60.1,46.7,60.1,46.6z M61,51.7h-0.9v-4H61V51.7z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M65,50.5c0,0.4-0.2,0.7-0.4,0.9c-0.4,0.2-0.8,0.3-1.3,0.3c-0.5,0-0.9-0.1-1.3-0.2v-0.7\n\t\tc0.4,0.2,0.9,0.3,1.4,0.3c0.5,0,0.8-0.2,0.8-0.5c0-0.1,0-0.2-0.1-0.3c-0.1-0.1-0.2-0.2-0.3-0.2c-0.2-0.1-0.4-0.2-0.6-0.2\n\t\tc-0.4-0.1-0.7-0.3-1-0.5c-0.2-0.2-0.3-0.4-0.3-0.7c0-0.3,0.2-0.6,0.4-0.8c0.4-0.2,0.8-0.3,1.2-0.3c0.5,0,0.9,0.1,1.4,0.3l-0.3,0.6\n\t\tc-0.4-0.2-0.7-0.2-1.1-0.3c-0.5,0-0.7,0.1-0.7,0.4c0,0.1,0.1,0.3,0.2,0.3c0.2,0.2,0.5,0.3,0.8,0.4c0.3,0.1,0.5,0.2,0.7,0.4\n\t\tc0.1,0.1,0.3,0.2,0.3,0.4C64.9,50.2,65,50.4,65,50.5z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M69.5,49.7c0,0.6-0.2,1.1-0.5,1.5c-0.4,0.4-0.9,0.6-1.4,0.5c-0.4,0-0.7-0.1-1-0.3\n\t\tc-0.3-0.2-0.5-0.4-0.7-0.7c-0.2-0.3-0.3-0.7-0.2-1.1c0-0.6,0.2-1.1,0.5-1.5c0.4-0.4,0.9-0.6,1.5-0.5c0.5,0,1.1,0.2,1.4,0.6\n\t\tC69.3,48.6,69.5,49.1,69.5,49.7L69.5,49.7z M66.4,49.7c0,0.9,0.4,1.4,1.1,1.4s1.1-0.5,1-1.4c0-0.9-0.3-1.4-1.1-1.4\n\t\tc-0.3,0-0.6,0.1-0.8,0.4C66.5,49,66.4,49.3,66.4,49.7L66.4,49.7z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M74,51.7h-0.9v-2.5c0-0.2,0-0.5-0.2-0.7c-0.2-0.2-0.4-0.3-0.6-0.2c-0.3,0-0.6,0.1-0.8,0.3\n\t\tc-0.2,0.3-0.3,0.7-0.3,1.1v2h-0.9v-4H71l0.1,0.5h0c0.1-0.2,0.3-0.3,0.5-0.4c0.2-0.1,0.5-0.2,0.8-0.2c1,0,1.5,0.5,1.5,1.5L74,51.7\n\t\tL74,51.7z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M77.9,50.5c0,0.4-0.1,0.7-0.4,0.9c-0.4,0.2-0.8,0.3-1.3,0.3c-0.5,0-0.9-0.1-1.3-0.2v-0.7\n\t\tc0.4,0.2,0.9,0.3,1.4,0.3c0.5,0,0.8-0.2,0.8-0.5c0-0.1,0-0.2-0.1-0.3c-0.1-0.1-0.2-0.2-0.3-0.2c-0.2-0.1-0.4-0.2-0.6-0.2\n\t\tc-0.4-0.1-0.7-0.3-1-0.5c-0.2-0.2-0.3-0.4-0.3-0.7c0-0.3,0.2-0.6,0.4-0.8c0.4-0.2,0.8-0.3,1.2-0.3c0.5,0,0.9,0.1,1.4,0.3l-0.3,0.6\n\t\tc-0.4-0.2-0.7-0.2-1.1-0.3c-0.5,0-0.7,0.1-0.7,0.4c0,0.1,0.1,0.3,0.2,0.3c0.2,0.2,0.5,0.3,0.8,0.4c0.3,0.1,0.5,0.2,0.7,0.4\n\t\tc0.1,0.1,0.3,0.2,0.3,0.4C77.9,50.2,77.9,50.4,77.9,50.5z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M9.1,60.2H8.2v-5.6h0.9V60.2z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M12.8,60.2l-0.2-0.5h0c-0.2,0.2-0.4,0.4-0.6,0.5c-0.2,0.1-0.5,0.1-0.8,0.1c-0.3,0-0.7-0.1-1-0.3\n\t\tc-0.2-0.2-0.4-0.6-0.3-0.9c0-0.4,0.2-0.7,0.5-0.9c0.4-0.2,0.9-0.4,1.4-0.3l0.7,0v-0.2c0-0.2-0.1-0.4-0.2-0.6\n\t\tc-0.2-0.1-0.4-0.2-0.6-0.2c-0.2,0-0.4,0-0.6,0.1c-0.2,0.1-0.4,0.1-0.6,0.2l-0.3-0.6c0.2-0.1,0.5-0.2,0.7-0.3\n\t\tc0.2-0.1,0.5-0.1,0.7-0.1c0.4,0,0.8,0.1,1.2,0.3c0.3,0.3,0.4,0.7,0.4,1v2.7L12.8,60.2L12.8,60.2z M11.5,59.6c0.3,0,0.6-0.1,0.8-0.3\n\t\tc0.2-0.2,0.3-0.5,0.3-0.7v-0.3l-0.5,0c-0.3,0-0.6,0.1-0.9,0.2c-0.2,0.1-0.3,0.3-0.3,0.5c0,0.2,0.1,0.3,0.2,0.4\n\t\tC11.2,59.6,11.3,59.7,11.5,59.6L11.5,59.6L11.5,59.6z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M17.8,60.3c-0.5,0-0.9-0.2-1.2-0.5c-0.6-0.9-0.6-2.1,0-3.1c0.3-0.4,0.7-0.6,1.2-0.5\n\t\tc0.5,0,1,0.2,1.2,0.6h0c0-0.2-0.1-0.5-0.1-0.7v-1.5H20v5.6h-0.7l-0.2-0.5h0C18.8,60.1,18.3,60.3,17.8,60.3z M18.1,59.6\n\t\tc0.3,0,0.6-0.1,0.8-0.3c0.2-0.3,0.3-0.6,0.3-1v-0.1c0-0.4-0.1-0.8-0.3-1.1c-0.2-0.2-0.5-0.3-0.8-0.3c-0.3,0-0.6,0.1-0.7,0.4\n\t\tc-0.2,0.3-0.3,0.7-0.3,1c0,0.4,0.1,0.7,0.2,1C17.5,59.5,17.8,59.6,18.1,59.6L18.1,59.6z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M24.8,58.2c0,0.6-0.2,1.1-0.5,1.5c-0.4,0.4-0.9,0.6-1.4,0.5c-0.4,0-0.7-0.1-1-0.3\n\t\tc-0.3-0.2-0.5-0.4-0.7-0.7c-0.2-0.3-0.3-0.7-0.2-1.1c0-0.6,0.2-1.1,0.5-1.5c0.4-0.4,0.9-0.6,1.5-0.5c0.5,0,1.1,0.2,1.4,0.6\n\t\tC24.6,57.1,24.8,57.7,24.8,58.2z M21.8,58.2c0,0.9,0.4,1.4,1.1,1.4s1.1-0.5,1.1-1.4c0-0.9-0.4-1.4-1.1-1.4c-0.3,0-0.6,0.1-0.8,0.4\n\t\tC21.8,57.5,21.8,57.9,21.8,58.2z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M29.3,60.2h-0.9v-2.5c0-0.2,0-0.5-0.2-0.7c-0.2-0.2-0.4-0.3-0.6-0.2c-0.3,0-0.6,0.1-0.8,0.3\n\t\tc-0.2,0.3-0.3,0.7-0.3,1.1v2h-0.9v-4h0.7l0.1,0.5h0c0.1-0.2,0.3-0.3,0.5-0.4c0.2-0.1,0.5-0.2,0.7-0.2c1,0,1.5,0.5,1.5,1.5\n\t\tL29.3,60.2L29.3,60.2z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M34.1,60.2h-0.9v-2.5c0-0.2,0-0.5-0.2-0.7c-0.2-0.2-0.4-0.2-0.6-0.2c-0.3,0-0.6,0.1-0.8,0.3\n\t\tc-0.2,0.3-0.3,0.7-0.3,1.1v2h-0.9v-4h0.7l0.1,0.5h0c0.1-0.2,0.3-0.3,0.5-0.4c0.2-0.1,0.5-0.2,0.7-0.2c1,0,1.5,0.5,1.5,1.5\n\t\tL34.1,60.2L34.1,60.2z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M37,60.3c-1,0.1-2-0.7-2.1-1.7c0-0.1,0-0.2,0-0.3c0-0.6,0.1-1.1,0.5-1.5c0.4-0.4,0.9-0.6,1.4-0.6\n\t\tc0.5,0,1,0.1,1.3,0.5c0.3,0.4,0.5,0.8,0.5,1.3v0.5h-2.8c0,0.3,0.1,0.6,0.3,0.9c0.2,0.2,0.5,0.3,0.9,0.3c0.2,0,0.5,0,0.7-0.1\n\t\tc0.2-0.1,0.5-0.1,0.7-0.2V60c-0.2,0.1-0.4,0.2-0.7,0.2C37.5,60.3,37.2,60.3,37,60.3L37,60.3z M36.8,56.8c-0.2,0-0.5,0.1-0.7,0.3\n\t\tc-0.2,0.2-0.3,0.5-0.3,0.7h1.9c0-0.3-0.1-0.5-0.2-0.7C37.3,56.9,37.1,56.8,36.8,56.8L36.8,56.8z M36.3,55.7L36.3,55.7\n\t\tc0.1-0.3,0.3-0.5,0.4-0.7c0.2-0.2,0.3-0.4,0.4-0.5h1v0.1c-0.2,0.2-0.4,0.4-0.6,0.6c-0.3,0.2-0.5,0.4-0.7,0.5H36.3z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M41.3,60.3c-1,0.1-2-0.7-2.1-1.7c0-0.1,0-0.2,0-0.3c0-0.6,0.1-1.1,0.5-1.5c0.4-0.4,0.9-0.6,1.4-0.6\n\t\tc0.5,0,1,0.1,1.3,0.5c0.3,0.4,0.5,0.8,0.5,1.3v0.5h-2.8c0,0.3,0.1,0.7,0.3,0.9c0.2,0.2,0.5,0.3,0.9,0.3c0.2,0,0.5,0,0.7-0.1\n\t\tc0.2-0.1,0.5-0.1,0.7-0.2V60c-0.2,0.1-0.4,0.2-0.7,0.2C41.8,60.3,41.6,60.3,41.3,60.3L41.3,60.3z M41.1,56.8\n\t\tc-0.2,0-0.5,0.1-0.7,0.3c-0.2,0.2-0.3,0.5-0.3,0.7H42c0-0.3-0.1-0.5-0.2-0.7C41.6,56.9,41.4,56.8,41.1,56.8L41.1,56.8z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M47.1,60.3c-0.5,0-0.9-0.2-1.2-0.5c-0.6-0.9-0.6-2.1,0-3.1c0.3-0.4,0.7-0.6,1.2-0.5\n\t\tc0.5,0,1,0.2,1.2,0.6h0c0-0.2-0.1-0.5-0.1-0.7v-1.5h0.9v5.6h-0.7l-0.2-0.5h0C48,60.1,47.6,60.3,47.1,60.3z M47.3,59.6\n\t\tc0.3,0,0.6-0.1,0.8-0.3c0.2-0.3,0.3-0.6,0.3-1v-0.1c0-0.4-0.1-0.8-0.3-1.1c-0.2-0.2-0.5-0.3-0.8-0.3c-0.3,0-0.6,0.1-0.7,0.4\n\t\tc-0.3,0.6-0.3,1.4,0,2.1C46.7,59.5,47,59.6,47.3,59.6L47.3,59.6z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M51,54.9L51,54.9c-0.1,0.7-0.3,1.3-0.6,1.8h-0.6c0.2-0.7,0.3-1.3,0.4-1.8H51L51,54.9z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M53.5,60.3c-1,0.1-2-0.7-2.1-1.7c0-0.1,0-0.2,0-0.3c0-0.6,0.1-1.1,0.5-1.5c0.4-0.4,0.9-0.6,1.4-0.6\n\t\tc0.5,0,1,0.1,1.3,0.5c0.3,0.4,0.5,0.8,0.5,1.3v0.5h-2.8c0,0.3,0.1,0.7,0.3,0.9c0.2,0.2,0.5,0.3,0.9,0.3c0.2,0,0.5,0,0.7-0.1\n\t\tc0.2-0.1,0.5-0.1,0.7-0.2V60c-0.2,0.1-0.4,0.2-0.7,0.2C54,60.3,53.8,60.3,53.5,60.3L53.5,60.3z M53.3,56.8c-0.2,0-0.5,0.1-0.7,0.3\n\t\tc-0.2,0.2-0.3,0.5-0.3,0.7h1.9c0-0.3-0.1-0.5-0.2-0.7C53.8,56.9,53.6,56.8,53.3,56.8L53.3,56.8z M52.8,55.7L52.8,55.7\n\t\tc0.1-0.3,0.3-0.5,0.4-0.7c0.1-0.2,0.3-0.3,0.4-0.5h1v0.1c-0.2,0.2-0.4,0.4-0.6,0.6c-0.3,0.2-0.5,0.4-0.7,0.5H52.8z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M59.6,60.2h-0.9v-2.5c0-0.2,0-0.5-0.2-0.7c-0.2-0.2-0.4-0.3-0.6-0.2c-0.3,0-0.6,0.1-0.8,0.3\n\t\tc-0.2,0.3-0.3,0.7-0.3,1.1v2H56v-4h0.7l0.1,0.5h0c0.1-0.2,0.3-0.3,0.5-0.4c0.2-0.1,0.5-0.2,0.8-0.2c1,0,1.5,0.5,1.5,1.5L59.6,60.2\n\t\tL59.6,60.2z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M62.6,60.3c-1,0.1-2-0.7-2.1-1.7c0-0.1,0-0.2,0-0.3c0-0.6,0.1-1.1,0.5-1.5c0.4-0.4,0.9-0.6,1.4-0.6\n\t\tc0.5,0,1,0.1,1.3,0.5c0.3,0.4,0.5,0.8,0.5,1.3v0.5h-2.7c0,0.3,0.1,0.7,0.3,0.9c0.2,0.2,0.5,0.3,0.9,0.3c0.2,0,0.5,0,0.7-0.1\n\t\tc0.2-0.1,0.5-0.1,0.7-0.2V60c-0.2,0.1-0.4,0.2-0.7,0.2C63.1,60.3,62.8,60.3,62.6,60.3L62.6,60.3z M62.4,56.8\n\t\tc-0.2,0-0.5,0.1-0.7,0.3c-0.2,0.2-0.3,0.5-0.3,0.7h1.9c0-0.3-0.1-0.5-0.2-0.7C62.9,56.9,62.6,56.8,62.4,56.8z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M67.2,56.1c0.1,0,0.3,0,0.4,0L67.5,57c-0.1,0-0.2,0-0.4,0c-0.3,0-0.6,0.1-0.9,0.3\n\t\tc-0.2,0.2-0.3,0.5-0.3,0.9v2.1h-0.9v-4h0.7l0.1,0.7h0c0.1-0.2,0.3-0.4,0.5-0.6C66.7,56.2,66.9,56.1,67.2,56.1z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M71.7,56.2v0.5L71,56.8c0.1,0.1,0.1,0.2,0.2,0.3c0,0.1,0.1,0.2,0.1,0.4c0,0.4-0.1,0.7-0.4,1\n\t\tc-0.4,0.3-0.8,0.4-1.2,0.4c-0.1,0-0.2,0-0.4,0C69.1,58.9,69,59,69,59.2c0,0.1,0.1,0.2,0.1,0.2c0.2,0.1,0.3,0.1,0.5,0.1h0.7\n\t\tc0.4,0,0.7,0.1,1,0.3c0.2,0.2,0.4,0.5,0.4,0.8c0,0.4-0.2,0.8-0.6,1.1C70.6,61.9,70,62,69.4,62c-0.4,0-0.9-0.1-1.3-0.3\n\t\tc-0.3-0.2-0.5-0.5-0.4-0.8c0-0.2,0.1-0.5,0.2-0.6c0.2-0.2,0.4-0.3,0.7-0.3c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1-0.1-0.1-0.2-0.1-0.3\n\t\tc0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.2,0.4-0.3c-0.2-0.1-0.4-0.2-0.5-0.4c-0.3-0.6-0.2-1.3,0.2-1.7c0.3-0.3,0.8-0.4,1.2-0.4\n\t\tc0.1,0,0.2,0,0.4,0c0.1,0,0.2,0,0.3,0L71.7,56.2L71.7,56.2z M68.5,60.9c0,0.2,0.1,0.3,0.3,0.4c0.2,0.1,0.5,0.2,0.7,0.1\n\t\tc0.4,0,0.7,0,1.1-0.2c0.2-0.1,0.3-0.3,0.3-0.5c0-0.2-0.1-0.3-0.2-0.4c-0.2-0.1-0.5-0.1-0.7-0.1h-0.7c-0.2,0-0.4,0-0.6,0.2\n\t\tC68.6,60.5,68.5,60.7,68.5,60.9L68.5,60.9z M68.9,57.5c0,0.2,0.1,0.4,0.2,0.6c0.2,0.1,0.4,0.2,0.6,0.2c0.5,0,0.8-0.3,0.8-0.8\n\t\tc0-0.2-0.1-0.4-0.2-0.6c-0.1-0.2-0.4-0.2-0.6-0.2c-0.2,0-0.4,0.1-0.6,0.2C68.9,57.1,68.8,57.3,68.9,57.5L68.9,57.5L68.9,57.5z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M72.4,55.1c0-0.1,0-0.3,0.1-0.3c0.1-0.1,0.2-0.1,0.4-0.1c0.1,0,0.3,0,0.4,0.1\n\t\tc0.1,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.3-0.1,0.3c-0.1,0.1-0.2,0.1-0.4,0.1c-0.1,0-0.3,0-0.4-0.1C72.4,55.4,72.3,55.3,72.4,55.1z\n\t\t M73.3,60.2h-0.9v-4h0.9V60.2z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M76.2,60.3c-1,0.1-2-0.7-2.1-1.7c0-0.1,0-0.2,0-0.3c0-0.6,0.1-1.1,0.5-1.5c0.4-0.4,0.9-0.6,1.4-0.6\n\t\tc0.5,0,0.9,0.1,1.3,0.5c0.3,0.4,0.5,0.8,0.5,1.3v0.5h-2.8c0,0.3,0.1,0.7,0.3,0.9c0.2,0.2,0.5,0.3,0.9,0.3c0.2,0,0.5,0,0.7-0.1\n\t\tc0.2-0.1,0.5-0.1,0.7-0.2V60c-0.2,0.1-0.4,0.2-0.7,0.2C76.7,60.3,76.5,60.3,76.2,60.3L76.2,60.3z M76.1,56.8\n\t\tc-0.2,0-0.5,0.1-0.7,0.3c-0.2,0.2-0.3,0.5-0.3,0.7H77c0-0.3-0.1-0.5-0.2-0.7C76.6,56.9,76.3,56.8,76.1,56.8z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M41.3,0.1L38.5,7h1.5l0.5-1.4h2.8L44,7h1.6l-2.8-6.9H41.3z M41.1,4.4l0.3-0.7\n\t\tC41.6,3,41.8,2.3,42,1.8h0c0.2,0.5,0.4,1.2,0.6,1.8L43,4.3C43,4.3,41.1,4.4,41.1,4.4z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M49.4,4.6h1.2v1c-0.3,0.1-0.6,0.2-0.8,0.2c-1.2,0-2.2-0.9-2.3-2.1c0-1.2,0.9-2.2,2.1-2.3\n\t\tc0.1,0,0.1,0,0.2,0c0.7,0,1.5,0.3,2.1,0.7V0.5C51.2,0.2,50.4,0,49.7,0c-2.2,0-3.8,1.5-3.8,3.6s1.6,3.5,3.8,3.5\n\t\tc0.8,0,1.6-0.2,2.3-0.6V3.3h-2.7L49.4,4.6L49.4,4.6z\"/>\n\t<polygon style=\"fill:#FFFFFF;\" points=\"54.9,4 57.3,4 57.3,2.8 54.9,2.8 54.9,1.4 57.6,1.4 57.6,0.1 53.4,0.1 53.4,7 57.8,7 \n\t\t57.8,5.7 54.9,5.7 \t\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M64,2.7v2l0,0c-0.4-0.6-0.8-1.2-1.3-1.8l-2.1-2.8h-1.4V7h1.5V4.4c0-0.7,0-1.3,0-2h0\n\t\tC61.1,3,61.6,3.6,62,4.2L64.1,7h1.4V0.1h-1.5L64,2.7z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M68,3.5c0-1.2,0.9-2.2,2.1-2.2c0,0,0.1,0,0.1,0c0.7,0,1.4,0.2,1.9,0.6V0.4C71.6,0.1,71,0,70.3,0\n\t\tc-2.2,0-3.7,1.6-3.7,3.6s1.5,3.5,3.7,3.5c0.7,0,1.4-0.1,2-0.5V5.1c-0.6,0.4-1.3,0.6-2,0.6C68.9,5.7,68,4.8,68,3.5\"/>\n\t<polygon style=\"fill:#FFFFFF;\" points=\"75,5.7 75,4 77.4,4 77.4,2.8 75,2.8 75,1.4 77.7,1.4 77.7,0.1 73.5,0.1 73.5,7 77.8,7 \n\t\t77.8,5.7 \t\"/>\n</g>\n</svg>\n";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("20513e36", content, true, context)
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(102);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("72705605", content, true, context)
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(106);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("1bca6769", content, true, context)
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(108);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("de7d11fa", content, true, context)
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(110);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("24af269a", content, true, context)
};

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_374_5123)\">\n<path d=\"M9.00573 5.26495L6.89057 0.639658C6.86267 0.569353 6.80688 0.569353 6.78046 0.639658L4.76182 5.26495L3.00708 0.818752H0.366699L4.30524 10.4049C4.34855 10.5015 4.43003 10.5015 4.47261 10.4049L6.79368 5.31897L9.14263 10.4049C9.19842 10.52 9.26669 10.52 9.30963 10.4049L13.1957 0.818752H10.6783L9.00573 5.26495Z\" fill=\"white\"/>\n<path d=\"M15.8672 6.67643H19.1759V4.82631H15.8672V2.94955H19.853V0.818954H13.3516V10.2956H20.0472V8.16281H15.8672V6.67643Z\" fill=\"white\"/>\n<path d=\"M3.63355 21.9102H0V31.3869H3.63355C6.34292 31.3869 8.38909 29.5882 8.38909 26.6488C8.38909 23.7093 6.34292 21.9102 3.63355 21.9102ZM3.35755 29.2411H2.51338V24.059H3.35755C4.87777 24.059 5.81661 25.0717 5.81661 26.6491C5.81661 28.2265 4.8774 29.2411 3.35755 29.2411Z\" fill=\"white\"/>\n<path d=\"M24.1901 21.847H15.7485V24.0671H18.6847V31.4676H21.2539V24.0671H24.1901V21.847Z\" fill=\"white\"/>\n<path d=\"M12.5646 21.7401L7.99072 31.387H10.3397L10.7801 30.3579H14.3502L14.8049 31.387H17.29L12.7305 21.7401C12.6886 21.6413 12.6057 21.6413 12.5646 21.7401ZM11.5722 28.5075L12.5374 26.2533L13.5332 28.5075H11.5722Z\" fill=\"white\"/>\n<path d=\"M29.4358 31.3867H31.9216L27.3621 21.7398C27.3199 21.6414 27.2365 21.6414 27.1954 21.7398L22.6216 31.3867H24.9705L25.411 30.3577H28.981L29.4358 31.3867ZM26.203 28.5076L27.1683 26.2534L28.1637 28.5076H26.203Z\" fill=\"white\"/>\n<path d=\"M24.1931 11.259C21.8412 11.259 19.7712 12.7657 19.2677 15.0332C18.8272 12.7358 16.9726 11.37 14.6116 11.37H10.978V20.8467H14.6116C16.9723 20.8467 18.8283 19.4806 19.2677 17.1835C19.7708 19.4554 21.8412 20.9703 24.1935 20.9703C26.904 20.9703 29.2394 18.9651 29.2394 16.1067C29.2394 13.2483 26.9036 11.259 24.1931 11.259ZM14.3345 18.7024H13.4925V13.5202H14.3345C15.8562 13.5202 16.7957 14.533 16.7957 16.1104C16.7957 17.6878 15.8558 18.7024 14.3345 18.7024ZM24.1931 18.7727C22.6193 18.7727 21.7205 17.6034 21.7205 16.1085C21.7205 14.6136 22.6193 13.461 24.1931 13.461C25.7669 13.461 26.6691 14.6173 26.6691 16.1085C26.6691 17.5997 25.7706 18.7727 24.1931 18.7727Z\" fill=\"white\"/>\n</g>\n<defs>\n<clipPath id=\"clip0_374_5123\">\n<rect width=\"32\" height=\"30.9895\" fill=\"white\" transform=\"translate(0 0.505264)\"/>\n</clipPath>\n</defs>\n</svg>\n";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(113);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("7e1f7686", content, true, context)
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(116);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("8903c066", content, true, context)
};

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selector_radio_vue_vue_type_style_index_0_id_59388802_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selector_radio_vue_vue_type_style_index_0_id_59388802_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selector_radio_vue_vue_type_style_index_0_id_59388802_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selector_radio_vue_vue_type_style_index_0_id_59388802_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selector_radio_vue_vue_type_style_index_0_id_59388802_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#app[data-v-59388802],#index[data-v-59388802]{--primary-100:#ec81a6;--header-gradient:linear-gradient(180deg,#ec81a6,#141446);--mobility-100:#ec81a6;--secondary-F-25:#fabbae}#app.enedis[data-v-59388802]{--primary-100:#1423dc;--header-gradient:linear-gradient(180deg,#1423dc,#141446);--mobility-100:#93c90e;--secondary-F-25:#c3e869}.selector[data-v-59388802]{align-items:flex-start;padding:0}.select-item[data-v-59388802],.selector[data-v-59388802]{display:flex;flex-direction:row;gap:5px}.select-item[data-v-59388802]{align-items:center;background:#eeecdc;border-radius:20px;cursor:pointer;flex:none;flex-grow:1;order:1;padding:7px 17px 7px 9px;transition-delay:0s;transition-duration:.3s;transition-property:background-color;transition-timing-function:ease-out}.select-item[data-v-59388802]:hover{background-color:#fff}.select-item:hover .ico[data-v-59388802]{background-color:#141446}.select-item .ico[data-v-59388802]{background-color:#bfbb96;border-radius:7px;flex:none;flex-grow:0;height:14px;order:0;transition-delay:0s;transition-duration:.3s;transition-property:background-color;transition-timing-function:ease-out;width:14px}.select-item .label[data-v-59388802]{color:#323274;flex:none;flex-grow:0;font-size:12px;font-weight:600;line-height:16px;order:0}.select-item.current[data-v-59388802]{background-color:#141446}.select-item.current .label[data-v-59388802]{color:#fff}.select-item.current .ico[data-v-59388802]{background-color:#fff}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_classement_vue_vue_type_style_index_0_id_3149cbbc_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_classement_vue_vue_type_style_index_0_id_3149cbbc_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_classement_vue_vue_type_style_index_0_id_3149cbbc_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_classement_vue_vue_type_style_index_0_id_3149cbbc_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_classement_vue_vue_type_style_index_0_id_3149cbbc_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#app[data-v-3149cbbc],#index[data-v-3149cbbc]{--primary-100:#ec81a6;--header-gradient:linear-gradient(180deg,#ec81a6,#141446);--mobility-100:#ec81a6;--secondary-F-25:#fabbae}#app.enedis[data-v-3149cbbc]{--primary-100:#1423dc;--header-gradient:linear-gradient(180deg,#1423dc,#141446);--mobility-100:#93c90e;--secondary-F-25:#c3e869}.volume-data[data-v-3149cbbc]{display:block;font-size:16px;font-style:italic;font-weight:600;line-height:120%;margin-top:8px}.bt-wrapper[data-v-3149cbbc]{justify-content:center;margin-top:24px;position:relative;z-index:2}.bt-wrapper[data-v-3149cbbc],.close-expand[data-v-3149cbbc]{align-items:center;display:flex}.close-expand[data-v-3149cbbc]{background:#141446;border-radius:20px 0 0 20px;box-shadow:0 0 20px rgba(20,20,70,.5);flex-direction:row;height:40px;margin-right:-50px;padding:0 8px;position:fixed;right:0;top:80px;width:36px;z-index:11}.close-expand[data-v-3149cbbc] svg{width:20px}.mobile-classement[data-v-3149cbbc]{border-bottom:2px solid #141446;display:flex;flex-direction:column;gap:4px;padding-bottom:24px;position:relative}.mobile-classement.in-viewport .close-expand.enabled[data-v-3149cbbc]{margin-right:0}.mobile-classement .gradient-top[data-v-3149cbbc]{left:0;opacity:0;position:absolute;top:0;width:100%;z-index:1}.mobile-classement .gradient-top.enabled[data-v-3149cbbc]{opacity:1}.mobile-classement .gradient-top[data-v-3149cbbc] svg{width:100%}.mobile-classement .gradient-bottom[data-v-3149cbbc]{bottom:90px;left:0;opacity:0;position:absolute;width:100%;z-index:1}.mobile-classement .gradient-bottom.enabled[data-v-3149cbbc]{opacity:1}.mobile-classement .gradient-bottom[data-v-3149cbbc] svg{width:100%}.mobile-classement .classement-item[data-v-3149cbbc]{background:#436eb1;border-radius:8px;display:flex;flex-direction:column;padding:4px 8px}.mobile-classement .classement-item.current .item-head[data-v-3149cbbc]{display:none}.mobile-classement .classement-item.current .item-content[data-v-3149cbbc]{display:flex}.mobile-classement .classement-item[data-quintile=\"1\"][data-v-3149cbbc]{background-color:#436eb1;color:#fff}.mobile-classement .classement-item[data-quintile=\"1\"] .item-content-head .item-rank[data-v-3149cbbc],.mobile-classement .classement-item[data-quintile=\"1\"] .item-txt .value[data-v-3149cbbc]{color:#141446}.mobile-classement .classement-item[data-quintile=\"2\"][data-v-3149cbbc]{background-color:#00b4a0;color:#fff}.mobile-classement .classement-item[data-quintile=\"2\"] .item-content-head .item-rank[data-v-3149cbbc],.mobile-classement .classement-item[data-quintile=\"2\"] .item-txt .value[data-v-3149cbbc]{color:#141446}.mobile-classement .classement-item[data-quintile=\"3\"][data-v-3149cbbc]{background-color:#8ad279}.mobile-classement .classement-item[data-quintile=\"4\"][data-v-3149cbbc]{background-color:#f09429}.mobile-classement .classement-item[data-quintile=\"5\"][data-v-3149cbbc]{background-color:#eb674c}.mobile-classement .item-head[data-v-3149cbbc]{display:flex}.mobile-classement .item-head .item-rank[data-v-3149cbbc]{align-items:center;display:flex;flex-basis:28px;font-size:12px;font-weight:400;line-height:16px}.mobile-classement .item-head .item-label[data-v-3149cbbc]{align-items:center;display:flex;flex-grow:1;font-size:12px;font-weight:800;line-height:16px}.mobile-classement .item-head .item-value[data-v-3149cbbc]{align-items:center;display:flex;flex-basis:27px;font-size:12px;font-weight:400;line-height:16px;text-align:right}.mobile-classement .item-content[data-v-3149cbbc]{display:none;padding:16px 20px}.mobile-classement .item-content-head[data-v-3149cbbc]{font-size:16px;font-weight:400;line-height:22px}.mobile-classement .item-content-head .item-rank[data-v-3149cbbc]{background-color:#fff;border-radius:11px;display:inline-block;gap:8px;padding:0 8px}.mobile-classement .item-content-head .item-label[data-v-3149cbbc]{color:#fff;font-size:16px;font-weight:800;line-height:22px;margin-top:4px}.mobile-classement .item-txt[data-v-3149cbbc]{font-size:16px;line-height:120%;margin-top:4px}.mobile-classement .item-txt .value[data-v-3149cbbc]{background-color:#fff;border-radius:4px;font-weight:800;padding:0 4px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_classement_reverse_vue_vue_type_style_index_0_id_7df11af6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_classement_reverse_vue_vue_type_style_index_0_id_7df11af6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_classement_reverse_vue_vue_type_style_index_0_id_7df11af6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_classement_reverse_vue_vue_type_style_index_0_id_7df11af6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_classement_reverse_vue_vue_type_style_index_0_id_7df11af6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#app[data-v-7df11af6],#index[data-v-7df11af6]{--primary-100:#ec81a6;--header-gradient:linear-gradient(180deg,#ec81a6,#141446);--mobility-100:#ec81a6;--secondary-F-25:#fabbae}#app.enedis[data-v-7df11af6]{--primary-100:#1423dc;--header-gradient:linear-gradient(180deg,#1423dc,#141446);--mobility-100:#93c90e;--secondary-F-25:#c3e869}.volume-data[data-v-7df11af6]{display:block;font-size:16px;font-style:italic;font-weight:600;line-height:120%;margin-top:8px}.bt-wrapper[data-v-7df11af6]{justify-content:center;margin-top:24px;position:relative;z-index:2}.bt-wrapper[data-v-7df11af6],.close-expand[data-v-7df11af6]{align-items:center;display:flex}.close-expand[data-v-7df11af6]{background:#141446;border-radius:20px 0 0 20px;box-shadow:0 0 20px rgba(20,20,70,.5);flex-direction:row;height:40px;margin-right:-50px;padding:0 8px;position:fixed;right:0;top:80px;width:36px;z-index:11}.close-expand[data-v-7df11af6] svg{width:20px}.mobile-classement[data-v-7df11af6]{border-bottom:2px solid #141446;display:flex;flex-direction:column;gap:4px;padding-bottom:24px;position:relative}.mobile-classement.in-viewport .close-expand.enabled[data-v-7df11af6]{margin-right:0}.mobile-classement .gradient-top[data-v-7df11af6]{left:0;opacity:0;position:absolute;top:0;width:100%;z-index:1}.mobile-classement .gradient-top.enabled[data-v-7df11af6]{opacity:1}.mobile-classement .gradient-top[data-v-7df11af6] svg{width:100%}.mobile-classement .gradient-bottom[data-v-7df11af6]{bottom:90px;left:0;opacity:0;position:absolute;width:100%;z-index:1}.mobile-classement .gradient-bottom.enabled[data-v-7df11af6]{opacity:1}.mobile-classement .gradient-bottom[data-v-7df11af6] svg{width:100%}.mobile-classement .classement-item[data-v-7df11af6]{background:#436eb1;border-radius:8px;display:flex;flex-direction:column;padding:4px 8px}.mobile-classement .classement-item.current .item-head[data-v-7df11af6]{display:none}.mobile-classement .classement-item.current .item-content[data-v-7df11af6]{display:flex}.mobile-classement .classement-item[data-quintile=\"1\"][data-v-7df11af6]{background-color:#436eb1;color:#fff}.mobile-classement .classement-item[data-quintile=\"1\"] .item-content-head .item-rank[data-v-7df11af6],.mobile-classement .classement-item[data-quintile=\"1\"] .item-txt .value[data-v-7df11af6]{color:#141446}.mobile-classement .classement-item[data-quintile=\"2\"][data-v-7df11af6]{background-color:#00b4a0;color:#fff}.mobile-classement .classement-item[data-quintile=\"2\"] .item-content-head .item-rank[data-v-7df11af6],.mobile-classement .classement-item[data-quintile=\"2\"] .item-txt .value[data-v-7df11af6]{color:#141446}.mobile-classement .classement-item[data-quintile=\"3\"][data-v-7df11af6]{background-color:#8ad279}.mobile-classement .classement-item[data-quintile=\"4\"][data-v-7df11af6]{background-color:#f09429}.mobile-classement .classement-item[data-quintile=\"5\"][data-v-7df11af6]{background-color:#eb674c}.mobile-classement .item-head[data-v-7df11af6]{display:flex}.mobile-classement .item-head .item-rank[data-v-7df11af6]{align-items:center;display:flex;flex-basis:28px;font-size:12px;font-weight:400;line-height:16px}.mobile-classement .item-head .item-label[data-v-7df11af6]{align-items:center;display:flex;flex-grow:1;font-size:12px;font-weight:800;line-height:16px}.mobile-classement .item-head .item-value[data-v-7df11af6]{align-items:center;display:flex;flex-basis:27px;font-size:12px;font-weight:400;line-height:16px;text-align:right}.mobile-classement .item-content[data-v-7df11af6]{display:none;padding:16px 20px}.mobile-classement .item-content-head[data-v-7df11af6]{font-size:16px;font-weight:400;line-height:22px}.mobile-classement .item-content-head .item-rank[data-v-7df11af6]{background-color:#fff;border-radius:11px;display:inline-block;gap:8px;padding:0 8px}.mobile-classement .item-content-head .item-label[data-v-7df11af6]{color:#fff;font-size:16px;font-weight:800;line-height:22px;margin-top:4px}.mobile-classement .item-txt[data-v-7df11af6]{font-size:16px;line-height:120%;margin-top:4px}.mobile-classement .item-txt .value[data-v-7df11af6]{background-color:#fff;border-radius:4px;font-weight:800;padding:0 4px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/selector-radio.vue?vue&type=template&id=59388802&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "selector",
    attrs: {
      "data-type": "radio"
    }
  }, [_vm._ssrNode(_vm._ssrList(_vm.items, function (item, itemIndex) {
    return "<div" + _vm._ssrClass("select-item", {
      current: _vm.internalTypeTerritoire === null && itemIndex === 0 || _vm.internalTypeTerritoire && _vm.internalTypeTerritoire.id === item.id
    }) + " data-v-59388802><div class=\"ico\" data-v-59388802></div> <div class=\"label\" data-v-59388802><span class=\"no-tablette\" data-v-59388802>" + _vm._ssrEscape(_vm._s(item.label)) + "</span> <span class=\"tablette-only\" data-v-59388802>" + _vm._ssrEscape(_vm._s(item.short)) + "</span></div></div>";
  }))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/selector-radio.vue?vue&type=template&id=59388802&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/selector-radio.vue?vue&type=script&lang=js
/* harmony default export */ var selector_radiovue_type_script_lang_js = ({
  props: {
    internalTypeTerritoire: {
      type: Object,
      default: function () {
        return null;
      }
    },
    items: {
      type: Array,
      default: function () {
        return [];
      }
    },
    current: {
      type: Object,
      default: function () {
        return null;
      }
    }
  },
  methods: {
    selectRadio(fItem) {
      this.$emit('selectRadio', fItem);
    }
  }
});
// CONCATENATED MODULE: ./components/selector-radio.vue?vue&type=script&lang=js
 /* harmony default export */ var components_selector_radiovue_type_script_lang_js = (selector_radiovue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/selector-radio.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(82)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_selector_radiovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "59388802",
  "111212ca"
  
)

/* harmony default export */ var selector_radio = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/mobile-classement.vue?vue&type=template&id=3149cbbc&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    directives: [{
      name: "in-viewport",
      rawName: "v-in-viewport"
    }],
    staticClass: "mobile-classement"
  }, [_vm._ssrNode("<div" + _vm._ssrClass("gradient-top", {
    enabled: !_vm.isExpanded && _vm.currentIndex > 2
  }) + " data-v-3149cbbc><span data-v-3149cbbc>" + _vm._s(__webpack_require__(51)) + "</span></div> " + _vm._ssrList(_vm.displayedDatas, function (item, itemIndex) {
    return "<div" + _vm._ssrAttr("data-quintile", item.quintile) + _vm._ssrClass("classement-item", {
      current: _vm.currentTerritoire.label === item.label
    }) + " data-v-3149cbbc><div class=\"item-head\" data-v-3149cbbc><div class=\"item-rank\" data-v-3149cbbc>" + _vm._s(_vm.rankTxt(item.ranking)) + "</div> <div class=\"item-label\" data-v-3149cbbc>" + _vm._ssrEscape(_vm._s(item.label)) + "</div> <div class=\"item-value\" data-v-3149cbbc>" + _vm._s(_vm.valueTxt(item.y) === Infinity ? '-' : _vm.valueTxt(item.y)) + "</div></div> <div class=\"item-content\" data-v-3149cbbc><div class=\"item-content-head\" data-v-3149cbbc><div class=\"item-rank\" data-v-3149cbbc>" + _vm._s(_vm.rankTxt(item.ranking) + ' sur ' + _vm.graphDatas.series.length + ' ' + _vm.typeTxt()) + "</div> <div class=\"item-label\" data-v-3149cbbc>" + _vm._ssrEscape(_vm._s(item.label)) + "</div> <div class=\"item-txt\" data-v-3149cbbc><span class=\"value\" data-v-3149cbbc>" + _vm._s(_vm.valueTxt(item.y)) + "</span> de " + (_vm.currCatVehic === 'gaz' ? "<span data-v-3149cbbc>véhicules au gaz</span>" : "<span data-v-3149cbbc>véhicules immatriculés et hybrides rechargeables</span>") + " par rapport au total de véhicules immatriculés\n          \n          <span class=\"volume-data\" data-v-3149cbbc>" + _vm._ssrEscape("soit " + _vm._s(item.vol) + " véhicule(s) ") + (_vm.currCatVehic === 'gaz' ? "<span data-v-3149cbbc> au gaz</span>" : "<span data-v-3149cbbc>électriques et hybrides rechargeables</span>") + "<br data-v-3149cbbc>" + _vm._ssrEscape("pour " + _vm._s(item.nb) + " véhicules immatriculés") + "</span></div></div></div></div>";
  }) + " " + (_vm.classementType === 'nbVehic' ? "<div class=\"source\" data-v-3149cbbc>" + _vm._ssrEscape("source : " + _vm._s(_vm.currCatVehic === 'elec' ? 'AAAdata' : 'AFGNV')) + "</div>" : "<div class=\"source\" data-v-3149cbbc>" + _vm._ssrEscape("source : " + _vm._s(_vm.currCatVehic === 'elec' ? 'GIREVE' : 'AFGNV')) + "</div>") + " " + (!_vm.isExpanded ? "<div class=\"bt-wrapper\" data-v-3149cbbc><span class=\"bt-download\" data-v-3149cbbc>\n      Afficher tout le classement\n      <div class=\"ico\" data-v-3149cbbc>" + _vm._s(__webpack_require__(52)) + "</div></span></div>" : "<!---->") + " <div" + _vm._ssrClass("close-expand", {
    enabled: _vm.isExpanded
  }) + " data-v-3149cbbc>" + _vm._s(__webpack_require__(53)) + "</div> <div" + _vm._ssrClass("gradient-bottom", {
    enabled: !_vm.isExpanded && _vm.currentIndex < _vm.graphDatas.series.length - 3
  }) + " data-v-3149cbbc><span data-v-3149cbbc>" + _vm._s(__webpack_require__(54)) + "</span></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/mobile-classement.vue?vue&type=template&id=3149cbbc&scoped=true

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(1);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "vue-in-viewport-directive"
var external_vue_in_viewport_directive_ = __webpack_require__(15);
var external_vue_in_viewport_directive_default = /*#__PURE__*/__webpack_require__.n(external_vue_in_viewport_directive_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/mobile-classement.vue?vue&type=script&lang=js



external_vue_default.a.directive('in-viewport', external_vue_in_viewport_directive_default.a);
/* harmony default export */ var mobile_classementvue_type_script_lang_js = ({
  props: {
    graphDatas: {
      type: Object,
      default: function () {
        return {};
      }
    },
    currentTerritoire: {
      type: Object,
      default: function () {
        return null;
      }
    },
    epciCat: {
      type: Object,
      default: function () {
        return null;
      }
    },
    regions: {
      type: Array,
      default: function () {
        return null;
      }
    },
    classementType: {
      type: String,
      default: function () {
        return null;
      }
    }
  },
  data() {
    return {
      isExpanded: false
    };
  },
  computed: {
    currCatVehic() {
      return this.$route.name.indexOf('gaz') === 0 ? 'gaz' : 'elec';
    },
    current_reg() {
      const _self = this;
      if (!_self.$route.params.locationSlug) return null;
      const region = external_lodash_["find"](this.regions, function (fRegion) {
        return fRegion.code === _self.currentTerritoire.code_reg;
      });
      return region;
    },
    currentIndex() {
      const _self = this;
      return external_lodash_["findIndex"](this.graphDatas.series, function (fSerie, fSerieIndex) {
        return fSerie.label === _self.currentTerritoire.label;
      });
    },
    displayedDatas() {
      // console.log('isExpanded', this.isExpanded)
      if (this.isExpanded) return this.graphDatas.series;
      const maxAvailableIndex = this.graphDatas.series.length - 1;
      let minIndex = this.currentIndex - 3;
      let maxIndex = this.currentIndex + 3;
      if (minIndex < 0) {
        const diff = -minIndex;
        minIndex = 0;
        maxIndex += diff;
      }
      if (maxIndex > maxAvailableIndex) {
        const diff = maxIndex - maxAvailableIndex;
        maxIndex = maxAvailableIndex;
        minIndex = minIndex - diff;
      }
      return external_lodash_["filter"](this.graphDatas.series, function (fSerie, fSerieIndex) {
        return fSerieIndex >= minIndex && fSerieIndex <= maxIndex;
      });
    }
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
    rankTxt(fRank) {
      return fRank === 1 ? fRank + '<sup>er</sup>' : fRank + '<sup>e</sup>';
    },
    typeTxt() {
      if (this.currentTerritoire.type === 'dpt') {
        return 'départements';
      } else if (this.currentTerritoire.type === 'reg') {
        return 'régions';
      } else if (this.currentTerritoire.type === 'epci') {
        if (this.epciCat.id === 'classe') {
          return 'EPCI de même classe (' + this.currentTerritoire.classe.replace('CLASSE ', '') + ')';
        } else {
          return 'EPCI de la même région (' + this.current_reg.label + ')';
        }
      }
    },
    valueTxt(fValue) {
      return fValue + '%';
    }
  }
});
// CONCATENATED MODULE: ./components/mobile-classement.vue?vue&type=script&lang=js
 /* harmony default export */ var components_mobile_classementvue_type_script_lang_js = (mobile_classementvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/mobile-classement.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(84)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_mobile_classementvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3149cbbc",
  "a1c65bae"
  
)

/* harmony default export */ var mobile_classement = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/mobile-classement-reverse.vue?vue&type=template&id=7df11af6&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    directives: [{
      name: "in-viewport",
      rawName: "v-in-viewport"
    }],
    staticClass: "mobile-classement"
  }, [_vm._ssrNode("<div" + _vm._ssrClass("gradient-top", {
    enabled: !_vm.isExpanded && _vm.currentIndex > 2
  }) + " data-v-7df11af6><span data-v-7df11af6>" + _vm._s(__webpack_require__(51)) + "</span></div> " + _vm._ssrList(_vm.displayedDatas, function (item, itemIndex) {
    return "<div" + _vm._ssrAttr("data-quintile", item.quintile) + _vm._ssrClass("classement-item", {
      current: _vm.currentTerritoire.label === item.label
    }) + " data-v-7df11af6><div class=\"item-head\" data-v-7df11af6><div class=\"item-rank\" data-v-7df11af6>" + _vm._s(_vm.rankTxt(item.ranking)) + "</div> <div class=\"item-label\" data-v-7df11af6>" + _vm._ssrEscape(_vm._s(item.label)) + "</div> <div class=\"item-value\" data-v-7df11af6>" + _vm._s(_vm.valueTxt(item.y) === Infinity ? '-' : _vm.valueTxt(item.y)) + "</div></div> <div class=\"item-content\" data-v-7df11af6><div class=\"item-content-head\" data-v-7df11af6><div class=\"item-rank\" data-v-7df11af6>" + _vm._s(_vm.rankTxt(item.ranking) + ' sur ' + _vm.graphDatas.series.length + ' ' + _vm.typeTxt()) + "</div> <div class=\"item-label\" data-v-7df11af6>" + _vm._ssrEscape(_vm._s(item.label)) + "</div> <div class=\"item-txt\" data-v-7df11af6><span class=\"value\" data-v-7df11af6>" + _vm._s(_vm.valueTxt(item.y)) + "</span> " + (_vm.currCatVehic === 'gaz' ? "<span data-v-7df11af6>véhicules au gaz</span>" : "<span data-v-7df11af6>véhicules électriques et hybrides rechargeables</span>") + " par " + (_vm.currCatVehic === 'gaz' ? "<span data-v-7df11af6>station GNV</span>" : "<span data-v-7df11af6>point de charge</span>") + "<span class=\"volume-data\" data-v-7df11af6>" + _vm._ssrEscape("soit " + _vm._s(item.vol) + " ") + (_vm.currCatVehic === 'gaz' ? "<span data-v-7df11af6>stations GNV</span>" : "<span data-v-7df11af6>points de charge</span>") + _vm._ssrEscape(" pour " + _vm._s(item.nb) + " ") + (_vm.currCatVehic === 'gaz' ? "<span data-v-7df11af6>véhicules au gaz</span>" : "<span data-v-7df11af6>véhicules électriques et hybrides rechargeables</span>") + "</span></div></div></div></div>";
  }) + " " + (_vm.classementType === 'nbVehic' ? "<div class=\"source\" data-v-7df11af6>" + _vm._ssrEscape("source : " + _vm._s(_vm.currCatVehic === 'elec' ? 'AAAdata' : 'AFGNV')) + "</div>" : "<div class=\"source\" data-v-7df11af6>" + _vm._ssrEscape("source : " + _vm._s(_vm.currCatVehic === 'elec' ? 'GIREVE' : 'AFGNV')) + "</div>") + " " + (!_vm.isExpanded ? "<div class=\"bt-wrapper\" data-v-7df11af6><span class=\"bt-download\" data-v-7df11af6>\n      Afficher tout le classement\n      <div class=\"ico\" data-v-7df11af6>" + _vm._s(__webpack_require__(52)) + "</div></span></div>" : "<!---->") + " <div" + _vm._ssrClass("close-expand", {
    enabled: _vm.isExpanded
  }) + " data-v-7df11af6>" + _vm._s(__webpack_require__(53)) + "</div> <div" + _vm._ssrClass("gradient-bottom", {
    enabled: !_vm.isExpanded && _vm.currentIndex < _vm.graphDatas.series.length - 3
  }) + " data-v-7df11af6><span data-v-7df11af6>" + _vm._s(__webpack_require__(54)) + "</span></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/mobile-classement-reverse.vue?vue&type=template&id=7df11af6&scoped=true

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(1);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "vue-in-viewport-directive"
var external_vue_in_viewport_directive_ = __webpack_require__(15);
var external_vue_in_viewport_directive_default = /*#__PURE__*/__webpack_require__.n(external_vue_in_viewport_directive_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/mobile-classement-reverse.vue?vue&type=script&lang=js



external_vue_default.a.directive('in-viewport', external_vue_in_viewport_directive_default.a);
/* harmony default export */ var mobile_classement_reversevue_type_script_lang_js = ({
  props: {
    graphDatas: {
      type: Object,
      default: function () {
        return {};
      }
    },
    currentTerritoire: {
      type: Object,
      default: function () {
        return null;
      }
    },
    epciCat: {
      type: Object,
      default: function () {
        return null;
      }
    },
    regions: {
      type: Array,
      default: function () {
        return null;
      }
    }
  },
  data() {
    return {
      isExpanded: false
    };
  },
  computed: {
    currCatVehic() {
      return this.$route.name.indexOf('gaz') === 0 ? 'gaz' : 'elec';
    },
    current_reg() {
      const _self = this;
      if (!_self.$route.params.locationSlug) return null;
      const region = external_lodash_["find"](this.regions, function (fRegion) {
        return fRegion.code === _self.currentTerritoire.code_reg;
      });
      return region;
    },
    currentIndex() {
      const _self = this;
      return external_lodash_["findIndex"](this.graphDatas.series, function (fSerie, fSerieIndex) {
        return fSerie.label === _self.currentTerritoire.label;
      });
    },
    displayedDatas() {
      // console.log('isExpanded', this.isExpanded)
      if (this.isExpanded) return this.graphDatas.series;
      const maxAvailableIndex = this.graphDatas.series.length - 1;
      let minIndex = this.currentIndex - 3;
      let maxIndex = this.currentIndex + 3;
      if (minIndex < 0) {
        const diff = -minIndex;
        minIndex = 0;
        maxIndex += diff;
      }
      if (maxIndex > maxAvailableIndex) {
        const diff = maxIndex - maxAvailableIndex;
        maxIndex = maxAvailableIndex;
        minIndex = minIndex - diff;
      }
      return external_lodash_["filter"](this.graphDatas.series, function (fSerie, fSerieIndex) {
        return fSerieIndex >= minIndex && fSerieIndex <= maxIndex;
      });
    }
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
    rankTxt(fRank) {
      return fRank === 1 ? fRank + '<sup>er</sup>' : fRank + '<sup>e</sup>';
    },
    typeTxt() {
      if (this.currentTerritoire.type === 'dpt') {
        return 'départements';
      } else if (this.currentTerritoire.type === 'reg') {
        return 'régions';
      } else if (this.currentTerritoire.type === 'epci') {
        if (this.epciCat.id === 'classe') {
          return 'EPCI de même classe (' + this.currentTerritoire.classe.replace('CLASSE ', '') + ')';
        } else {
          return 'EPCI de la même région (' + this.current_reg.label + ')';
        }
      }
    },
    valueTxt(fValue) {
      return fValue; // + '%'
    }
  }
});
// CONCATENATED MODULE: ./components/mobile-classement-reverse.vue?vue&type=script&lang=js
 /* harmony default export */ var components_mobile_classement_reversevue_type_script_lang_js = (mobile_classement_reversevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/mobile-classement-reverse.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(86)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_mobile_classement_reversevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7df11af6",
  "4210d4be"
  
)

/* harmony default export */ var mobile_classement_reverse = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"17\" height=\"19\" viewBox=\"0 0 17 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15.6094 9.14844C15.375 9.38281 15.0625 9.5 14.75 9.5C14.3984 9.5 14.0859 9.38281 13.8516 9.14844L9.75 5.04688V17C9.75 17.7031 9.16406 18.25 8.5 18.25C7.875 18.25 7.25 17.7031 7.25 17V5.04688L3.10938 9.14844C2.64062 9.65625 1.82031 9.65625 1.35156 9.14844C0.84375 8.67969 0.84375 7.85938 1.35156 7.39062L7.60156 1.14062C8.07031 0.632812 8.89062 0.632812 9.35938 1.14062L15.6094 7.39062C16.1172 7.85938 16.1172 8.67969 15.6094 9.14844Z\" fill=\"#141446\"/>\n</svg>\n";

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(127);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("65934109", content, true, context)
};

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_box_select_page_head_vue_vue_type_style_index_0_id_2151ac15_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_box_select_page_head_vue_vue_type_style_index_0_id_2151ac15_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_box_select_page_head_vue_vue_type_style_index_0_id_2151ac15_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_box_select_page_head_vue_vue_type_style_index_0_id_2151ac15_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_box_select_page_head_vue_vue_type_style_index_0_id_2151ac15_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#app[data-v-2151ac15],#index[data-v-2151ac15]{--primary-100:#ec81a6;--header-gradient:linear-gradient(180deg,#ec81a6,#141446);--mobility-100:#ec81a6;--secondary-F-25:#fabbae}#app.enedis[data-v-2151ac15]{--primary-100:#1423dc;--header-gradient:linear-gradient(180deg,#1423dc,#141446);--mobility-100:#93c90e;--secondary-F-25:#c3e869}.box-padding[data-v-2151ac15],.box-padding.selector[data-v-2151ac15]{padding:0 40px}.page-header .page-header-selectors[data-v-2151ac15]{width:calc(200vw + 10px)}.selector-box[data-v-2151ac15]{align-items:center;background:#fff;border-radius:40px 40px 40px 40px;color:#141446;display:flex;flex-basis:480px;flex-direction:column;max-width:480px;min-height:489px;overflow:hidden;padding:40px 0;position:relative}.selector-box.reduced[data-v-2151ac15]{background-color:var(--mobility-100);min-height:256px}.selector-box.reduced .selector-legend[data-v-2151ac15]{color:#141446}.selector-box .title[data-v-2151ac15]{align-items:center;color:#141446;display:flex;font-size:22px;font-weight:800;line-height:140%;margin-top:19px;text-align:center}.selector-box .description[data-v-2151ac15]{color:#323274;font-size:14px;font-weight:400;line-height:140%;margin-top:16px;max-width:403px;text-align:center}.selector-box .description.gaz[data-v-2151ac15]{margin-bottom:46px}.selector-box .select-label[data-v-2151ac15]{color:#141446;font-size:12px;font-weight:400;letter-spacing:.2em;line-height:16px;margin-bottom:14px;margin-top:23px;text-align:center;text-transform:uppercase}.selector-box .selector.territoire[data-v-2151ac15] .select-item{min-width:130px}.selector-box .selector.list[data-v-2151ac15]{margin-top:16px;min-width:400px;transition-delay:0s;transition-duration:.3s;transition-property:background;transition-timing-function:ease-out}.selector-box .selector.list.gaz[data-v-2151ac15]{margin-top:0}.selector-box .selector.list[data-v-2151ac15]:hover{background:#141446}.selector-box .selector.list[data-v-2151ac15]:hover .placeholder{color:#fff}.selector-box .selector.list[data-v-2151ac15]:hover .ico svg path{fill:#fff}.selector-box .selector-legend[data-v-2151ac15]{color:#436eb1;font-size:12px;font-weight:400;line-height:16px;margin-top:14px;text-align:center}@media screen and (max-width:1279px){.selector-box .selector.list[data-v-2151ac15]{min-width:280px}.selector-box .selector.territoire[data-v-2151ac15] .select-item{min-width:90px}.selector-box .selector-legend[data-v-2151ac15]{font-size:10px;line-height:14px}.selector-box .title[data-v-2151ac15]{font-size:18px;line-height:140%}.selector-box .description[data-v-2151ac15]{font-size:14px;line-height:140%}.selector-box .select-label[data-v-2151ac15]{font-size:10px;line-height:14px}}@media screen and (max-width:639px){.selector-box .selector.list[data-v-2151ac15]{min-width:0;min-width:auto;width:calc(100% - 20px)}.box-padding[data-v-2151ac15]{padding:0 20px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./autobus.svg": 96,
	"./particuliers.svg": 97,
	"./poids-lourds.svg": 98,
	"./tous-type.svg": 99,
	"./utilitaires.svg": 100
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 95;

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"230\" height=\"60\" viewBox=\"0 0 230 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M184.5 8.69427H43.5C41.2909 8.69427 39.5 10.4851 39.5 12.6943V41.7657C39.5 44.6056 41.4911 47.0566 44.2708 47.6384L56.3212 50.1606H185.5C188.261 50.1606 190.5 47.922 190.5 45.1606V14.6943C190.5 11.3806 187.814 8.69427 184.5 8.69427Z\" fill=\"#439CCC\"/>\n<path d=\"M111.764 39.1105H114.682C115.021 39.1105 115.334 39.3568 115.438 39.6853C115.568 40.0411 115.49 40.4242 115.23 40.6705L108.559 46.801C108.246 47.0473 107.829 47.0747 107.516 46.8284C107.204 46.6094 107.073 46.1715 107.23 45.7884L109.236 40.8621H106.318C105.979 40.8621 105.666 40.6432 105.562 40.3147C105.432 39.9589 105.51 39.5758 105.77 39.3295L112.441 33.199C112.754 32.9527 113.171 32.9253 113.484 33.1716C113.796 33.3906 113.927 33.8285 113.77 34.2116L111.764 39.1105Z\" fill=\"white\"/>\n<path d=\"M119.375 34.75C119.375 33.793 120.141 33 121.125 33H125.5C126.457 33 127.25 33.793 127.25 34.75V40H127.469C128.781 40 129.875 41.0938 129.875 42.4062V43.2812C129.875 43.6641 130.148 43.9375 130.531 43.9375C130.887 43.9375 131.188 43.6641 131.188 43.2812V39.0703C130.422 38.8789 129.875 38.1953 129.875 37.375V35.625L129 34.75C128.754 34.5312 128.754 34.1211 129 33.875C129.219 33.6562 129.629 33.6562 129.875 33.875L131.98 36.0078C132.309 36.3359 132.5 36.7734 132.5 37.2383V43.2812C132.5 44.375 131.598 45.25 130.531 45.25C129.438 45.25 128.562 44.375 128.562 43.2812V42.4062C128.562 41.8047 128.07 41.3125 127.469 41.3125H127.25V45.25C127.715 45.25 128.125 45.6602 128.125 46.125C128.125 46.6172 127.715 47 127.25 47H119.375C118.883 47 118.5 46.6172 118.5 46.125C118.5 45.6602 118.883 45.25 119.375 45.25V34.75ZM121.125 37.8125C121.125 38.0586 121.316 38.25 121.562 38.25H125.062C125.281 38.25 125.5 38.0586 125.5 37.8125V35.1875C125.5 34.9688 125.281 34.75 125.062 34.75H121.562C121.316 34.75 121.125 34.9688 121.125 35.1875V37.8125Z\" fill=\"white\"/>\n<path d=\"M57.4949 45.6425C57.4949 41.2242 61.0766 37.6425 65.4949 37.6425H85.4845C89.9028 37.6425 93.4845 41.2242 93.4845 45.6425V50.1606H57.4949V45.6425Z\" fill=\"#1A5270\"/>\n<path d=\"M145.904 45.6425C145.904 41.2242 149.486 37.6425 153.904 37.6425H158.246C162.664 37.6425 166.246 41.2242 166.246 45.6425V50.1606H145.904V45.6425Z\" fill=\"#1A5270\"/>\n<path d=\"M42.6296 7V8.6943H62.1892L60.1685 6C59.2242 4.74097 57.7423 4 56.1685 4H45.6296C43.9728 4 42.6296 5.34315 42.6296 7Z\" fill=\"#1A5270\"/>\n<rect x=\"69.2305\" y=\"6.34717\" width=\"17.9948\" height=\"2.34715\" fill=\"#1A5270\"/>\n<rect x=\"136.516\" y=\"6.34717\" width=\"17.9948\" height=\"2.34715\" fill=\"#1A5270\"/>\n<path d=\"M170.94 13.3886H190.5V40.7717C184.367 40.7717 176.999 35.6632 172.94 31.8333C171.578 30.5483 170.94 28.7169 170.94 26.8445V13.3886Z\" fill=\"#9FCBE9\"/>\n<path d=\"M48.1062 13.3886H163.899V30.601H48.1062V13.3886Z\" fill=\"#1A5270\"/>\n<path d=\"M48.1062 13.3886H69.2306V30.601H48.1062V13.3886Z\" fill=\"#9FCBE9\"/>\n<path d=\"M70.7954 13.3886H91.9198V30.601H70.7954V13.3886Z\" fill=\"#9FCBE9\"/>\n<path d=\"M93.4844 13.3886H114.609V30.601H93.4844V13.3886Z\" fill=\"#9FCBE9\"/>\n<path d=\"M116.174 13.3886H137.298V30.601H116.174V13.3886Z\" fill=\"#9FCBE9\"/>\n<path d=\"M138.863 13.3886H159.987V30.601H138.863V13.3886Z\" fill=\"#9FCBE9\"/>\n<path d=\"M187.37 42.3368H190.5V45.8575C189.248 45.8575 187.892 45.3359 187.37 45.0751V42.3368Z\" fill=\"#FDCC44\"/>\n<path d=\"M39.5 33.7306H42.6295V39.9897C42.6295 41.7181 41.2284 43.1192 39.5 43.1192V33.7306Z\" fill=\"#EB674C\"/>\n<path d=\"M67.6648 55.6372C72.4179 55.6372 76.271 51.7841 76.271 47.031C76.271 42.2779 72.4179 38.4248 67.6648 38.4248C62.9117 38.4248 59.0586 42.2779 59.0586 47.031C59.0586 51.7841 62.9117 55.6372 67.6648 55.6372Z\" fill=\"#141446\"/>\n<path d=\"M67.6632 51.323C70.0339 51.323 71.9556 49.4012 71.9556 47.0306C71.9556 44.66 70.0339 42.7382 67.6632 42.7382C65.2926 42.7382 63.3708 44.66 63.3708 47.0306C63.3708 49.4012 65.2926 51.323 67.6632 51.323Z\" fill=\"#9FCBE9\"/>\n<path d=\"M83.3135 55.6373C88.0666 55.6373 91.9197 51.7842 91.9197 47.0311C91.9197 42.278 88.0666 38.4249 83.3135 38.4249C78.5604 38.4249 74.7073 42.278 74.7073 47.0311C74.7073 51.7842 78.5604 55.6373 83.3135 55.6373Z\" fill=\"#141446\"/>\n<path d=\"M83.3122 51.3231C85.6828 51.3231 87.6046 49.4013 87.6046 47.0307C87.6046 44.6601 85.6828 42.7383 83.3122 42.7383C80.9415 42.7383 79.0198 44.6601 79.0198 47.0307C79.0198 49.4013 80.9415 51.3231 83.3122 51.3231Z\" fill=\"#9FCBE9\"/>\n<path d=\"M156.075 55.6373C160.828 55.6373 164.681 51.7842 164.681 47.0311C164.681 42.278 160.828 38.4249 156.075 38.4249C151.322 38.4249 147.469 42.278 147.469 47.0311C147.469 51.7842 151.322 55.6373 156.075 55.6373Z\" fill=\"#141446\"/>\n<path d=\"M156.074 51.3231C158.445 51.3231 160.366 49.4013 160.366 47.0307C160.366 44.6601 158.445 42.7383 156.074 42.7383C153.703 42.7383 151.781 44.6601 151.781 47.0307C151.781 49.4013 153.703 51.3231 156.074 51.3231Z\" fill=\"#9FCBE9\"/>\n</svg>\n";

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"230\" height=\"60\" viewBox=\"0 0 230 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M77.0977 44.0407C77.0977 44.7514 77.38 45.433 77.8826 45.9356C78.3851 46.4381 79.0667 46.7205 79.7775 46.7205H151.31V29.849H77.0977V44.0407Z\" fill=\"#1A5270\"/>\n<path d=\"M158.469 36.3326C158.293 34.177 156.792 31.1826 155.307 29.6226C152.736 26.9595 148.148 24.07 139.371 24.07C130.891 24.07 125.561 9.99579 101.837 9.99579C83.8831 9.99579 70.9832 21.2896 70.9832 35.2212C70.9811 36.9055 71.3208 38.5726 71.9819 40.1217C72.6429 41.6709 73.6114 43.0697 74.8288 44.2336C75.137 44.5462 75.5355 44.7543 75.9682 44.8284C76.4008 44.9026 76.8459 44.8391 77.2405 44.6468C77.6352 44.4546 77.9596 44.1433 78.1679 43.757C78.3763 43.3706 78.4581 42.9286 78.4019 42.4932C78.2083 40.9386 78.3722 39.3603 78.8813 37.8787C79.3904 36.3971 80.2311 35.0514 81.3393 33.9441C82.4476 32.8368 83.7941 31.9973 85.2762 31.4896C86.7582 30.9818 88.3366 30.8193 89.8911 31.0143C91.4455 31.2094 92.9348 31.7569 94.2455 32.615C95.5561 33.4732 96.6535 34.6193 97.4538 35.9661C98.2541 37.3128 98.7363 38.8246 98.8636 40.386C98.9908 41.9474 98.7598 43.5173 98.188 44.9759C98.065 45.281 98.0192 45.6119 98.0549 45.9389C98.0906 46.266 98.2065 46.5792 98.3925 46.8507C98.5784 47.1221 98.8286 47.3434 99.1207 47.4948C99.4128 47.6463 99.7378 47.7231 100.067 47.7186H127.968C128.396 47.7208 128.818 47.623 129.202 47.4331C129.585 47.2431 129.919 46.9662 130.176 46.6245C130.434 46.2827 130.608 45.8855 130.684 45.4646C130.761 45.0437 130.738 44.6107 130.618 44.2C130.145 42.6305 130.055 40.9707 130.353 39.359C130.652 37.7472 131.331 36.2301 132.335 34.9341C133.338 33.6381 134.637 32.6007 136.123 31.9083C137.609 31.2159 139.239 30.8886 140.877 30.9537C142.514 31.0187 144.113 31.4742 145.539 32.2822C146.965 33.0902 148.178 34.2273 149.076 35.5988C149.973 36.9703 150.53 38.5365 150.7 40.1669C150.87 41.7972 150.648 43.4446 150.052 44.9717C149.944 45.2447 149.918 45.5433 149.977 45.831C150.036 46.1186 150.178 46.3827 150.385 46.591C150.592 46.7992 150.855 46.9427 151.143 47.0037C151.43 47.0647 151.729 47.0406 152.002 46.9344C154.069 46.0866 155.811 44.601 156.974 42.6939C158.137 40.7869 158.661 38.5581 158.469 36.3326Z\" fill=\"#439CCC\"/>\n<path d=\"M108.546 36.3303H110.993C111.278 36.3303 111.54 36.5295 111.627 36.7951C111.737 37.0829 111.671 37.3928 111.452 37.592L105.857 42.5503C105.595 42.7495 105.245 42.7717 104.983 42.5724C104.721 42.3954 104.611 42.0412 104.742 41.7313L106.425 37.7469H103.978C103.693 37.7469 103.431 37.5699 103.344 37.3042C103.234 37.0165 103.3 36.7066 103.519 36.5074L109.114 31.5491C109.376 31.3498 109.726 31.3277 109.988 31.5269C110.25 31.704 110.36 32.0582 110.229 32.3681L108.546 36.3303Z\" fill=\"white\"/>\n<path d=\"M114.903 32.3841C114.903 31.61 115.522 30.9687 116.319 30.9687H119.857C120.631 30.9687 121.273 31.61 121.273 32.3841V36.6303H121.449C122.511 36.6303 123.396 37.5149 123.396 38.5764V39.2841C123.396 39.5937 123.617 39.8149 123.926 39.8149C124.214 39.8149 124.457 39.5937 124.457 39.2841V35.8783C123.838 35.7235 123.396 35.1706 123.396 34.5072V33.0918L122.688 32.3841C122.489 32.2072 122.489 31.8754 122.688 31.6764C122.865 31.4995 123.197 31.4995 123.396 31.6764L125.098 33.4014C125.364 33.6668 125.519 34.0206 125.519 34.3966V39.2841C125.519 40.1687 124.789 40.8764 123.926 40.8764C123.042 40.8764 122.334 40.1687 122.334 39.2841V38.5764C122.334 38.0899 121.936 37.6918 121.449 37.6918H121.273V40.8764C121.648 40.8764 121.98 41.2082 121.98 41.5841C121.98 41.9822 121.648 42.2918 121.273 42.2918H114.903C114.505 42.2918 114.196 41.9822 114.196 41.5841C114.196 41.2082 114.505 40.8764 114.903 40.8764V32.3841ZM116.319 34.861C116.319 35.0601 116.473 35.2149 116.672 35.2149H119.503C119.68 35.2149 119.857 35.0601 119.857 34.861V32.7379C119.857 32.561 119.68 32.3841 119.503 32.3841H116.672C116.473 32.3841 116.319 32.561 116.319 32.7379V34.861Z\" fill=\"white\"/>\n<path d=\"M88.6263 50.0042C93.4833 50.0042 97.4206 46.0668 97.4206 41.2099C97.4206 36.3529 93.4833 32.4156 88.6263 32.4156C83.7694 32.4156 79.832 36.3529 79.832 41.2099C79.832 46.0668 83.7694 50.0042 88.6263 50.0042Z\" fill=\"#141446\"/>\n<path d=\"M88.6262 45.5966C91.0489 45.5966 93.0128 43.6326 93.0128 41.2099C93.0128 38.7872 91.0489 36.8232 88.6262 36.8232C86.2035 36.8232 84.2395 38.7872 84.2395 41.2099C84.2395 43.6326 86.2035 45.5966 88.6262 45.5966Z\" fill=\"#9FCBE9\"/>\n<path d=\"M140.465 50.0042C145.322 50.0042 149.259 46.0668 149.259 41.2099C149.259 36.3529 145.322 32.4156 140.465 32.4156C135.608 32.4156 131.671 36.3529 131.671 41.2099C131.671 46.0668 135.608 50.0042 140.465 50.0042Z\" fill=\"#141446\"/>\n<path d=\"M140.465 45.5966C142.888 45.5966 144.852 43.6326 144.852 41.2099C144.852 38.7872 142.888 36.8232 140.465 36.8232C138.043 36.8232 136.079 38.7872 136.079 41.2099C136.079 43.6326 138.043 45.5966 140.465 45.5966Z\" fill=\"#9FCBE9\"/>\n<path d=\"M73.3862 32.4659C73.3084 32.4654 73.2315 32.4483 73.1608 32.4158C73.09 32.3833 73.027 32.3362 72.9758 32.2775C72.9247 32.2188 72.8866 32.1499 72.864 32.0754C72.8415 32.0009 72.8351 31.9224 72.8452 31.8452C72.992 30.7003 73.533 29.849 74.1788 29.849C74.8247 29.849 75.3657 30.6877 75.5124 31.8452C75.5226 31.9224 75.5161 32.0009 75.4936 32.0754C75.4711 32.1499 75.433 32.2188 75.3819 32.2775C75.3307 32.3362 75.2677 32.3833 75.1969 32.4158C75.1262 32.4483 75.0493 32.4654 74.9715 32.4659H73.3862Z\" fill=\"#EB674C\"/>\n<path d=\"M152.036 34.6124C151.841 34.6133 151.65 34.559 151.485 34.4558C151.32 34.3525 151.187 34.2046 151.102 34.0291C151.018 33.8535 150.984 33.6576 151.006 33.4639C151.028 33.2703 151.105 33.0869 151.227 32.9349C151.473 32.6421 151.78 32.4067 152.127 32.2452C152.473 32.0837 152.851 32 153.234 32C153.616 32 153.994 32.0837 154.341 32.2452C154.687 32.4067 154.994 32.6421 155.24 32.9349C155.362 33.0869 155.439 33.2703 155.461 33.4639C155.483 33.6576 155.45 33.8535 155.365 34.0291C155.28 34.2046 155.148 34.3525 154.982 34.4558C154.817 34.559 154.626 34.6133 154.431 34.6124H152.036Z\" fill=\"#FDCC44\"/>\n<path d=\"M83.1366 25.3366H98.8716C99.8059 25.3366 100.702 24.9654 101.363 24.3048C102.023 23.6441 102.394 22.7481 102.394 21.8138V16.2948C102.396 15.794 102.291 15.2986 102.086 14.8418C101.88 14.385 101.58 13.9773 101.204 13.6461C100.828 13.3149 100.386 13.0679 99.9073 12.9215C99.4284 12.775 98.9237 12.7327 98.4271 12.7973C90.828 13.8289 85.049 17.6578 81.4424 20.8157C81.0474 21.161 80.7672 21.6184 80.639 22.1271C80.5108 22.6357 80.5407 23.1713 80.7248 23.6625C80.9089 24.1537 81.2384 24.5771 81.6693 24.8762C82.1002 25.1753 82.6121 25.3359 83.1366 25.3366Z\" fill=\"#9FCBE9\"/>\n<path d=\"M109.842 13.0782C116.867 14.1518 124.437 17.8297 127.456 21.8473C127.696 22.1748 127.84 22.5625 127.873 22.9671C127.905 23.3717 127.825 23.7775 127.641 24.1391C127.456 24.5008 127.175 24.8042 126.829 25.0156C126.482 25.227 126.084 25.3381 125.678 25.3365H108.37C107.724 25.3365 107.104 25.0798 106.647 24.6229C106.19 24.1659 105.934 23.5462 105.934 22.9V16.0642C105.913 13.9757 107.779 12.7637 109.842 13.0782Z\" fill=\"#9FCBE9\"/>\n<path d=\"M125.733 22.4135C125.732 22.3113 125.755 22.2103 125.8 22.1186C125.845 22.0269 125.911 21.9469 125.993 21.8851C126.074 21.8232 126.169 21.7812 126.269 21.7622C126.37 21.7433 126.473 21.748 126.571 21.776C127.897 22.1367 129.851 23.1684 129.851 24.3887C129.851 25.6091 127.897 26.645 126.571 27.0056C126.473 27.0336 126.37 27.0384 126.269 27.0194C126.169 27.0005 126.074 26.9585 125.993 26.8966C125.911 26.8348 125.845 26.7548 125.8 26.6631C125.755 26.5714 125.732 26.4704 125.733 26.3682V22.4135Z\" fill=\"#1A5270\"/>\n</svg>\n";

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"230\" height=\"60\" viewBox=\"0 0 230 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_220_17600)\">\n<path d=\"M162.091 40.8375H74.5156C71.6664 40.8403 68.9348 41.9757 66.9201 43.9949C64.9054 46.0141 63.7723 48.7519 63.7695 51.6075H68.5011C68.5025 50.0092 69.1365 48.4767 70.2642 47.3465C71.3919 46.2163 72.9209 45.5808 74.5156 45.5795V48.3192H79.5391C80.1819 49.295 80.5248 50.4382 80.5251 51.6075H85.2564C85.2549 50.4907 85.0789 49.3813 84.7347 48.3192H162.086L162.091 40.8375Z\" fill=\"#1A5270\"/>\n<rect x=\"64\" y=\"44.0001\" width=\"2\" height=\"4\" rx=\"1\" fill=\"#EB674C\"/>\n<path d=\"M150.14 59.9989C154.767 59.9989 158.517 56.2397 158.517 51.6024C158.517 46.9651 154.767 43.2058 150.14 43.2058C145.513 43.2058 141.762 46.9651 141.762 51.6024C141.762 56.2397 145.513 59.9989 150.14 59.9989Z\" fill=\"#141446\"/>\n<path d=\"M150.14 55.7902C152.447 55.7902 154.318 53.9152 154.318 51.6024C154.318 49.2895 152.447 47.4146 150.14 47.4146C147.832 47.4146 145.961 49.2895 145.961 51.6024C145.961 53.9152 147.832 55.7902 150.14 55.7902Z\" fill=\"#9FCBE9\"/>\n<path d=\"M126.224 44.9996H107.776C106.795 44.9996 106 45.7482 106 46.6716V50.3276C106 51.251 106.795 51.9996 107.776 51.9996H126.224C127.205 51.9996 128 51.251 128 50.3276V46.6716C128 45.7482 127.205 44.9996 126.224 44.9996Z\" fill=\"#2D7EAA\"/>\n<path d=\"M132.5 51.9996C134.433 51.9996 136 50.4326 136 48.4996C136 46.5666 134.433 44.9996 132.5 44.9996C130.567 44.9996 129 46.5666 129 48.4996C129 50.4326 130.567 51.9996 132.5 51.9996Z\" fill=\"#2D7EAA\"/>\n<path d=\"M141 44.9996H138V55.9996H141V44.9996Z\" fill=\"#1A5270\"/>\n<path d=\"M138.5 40.8112V12.8715C138.5 12.3709 139.049 11.8908 139.402 11.5368C139.756 11.1829 140.235 10.9841 140.734 10.9841H167.766C168.25 10.9849 168.719 11.1576 169.088 11.4715C169.458 11.7854 169.705 12.2201 169.785 12.6989L172.456 28.4674V52.6636L170.087 55.33C170.087 55.33 160.332 55.5287 160.332 55.33V45.6892C160.332 44.3964 159.82 43.1564 158.909 42.2418C157.997 41.3271 156.761 40.8126 155.471 40.8112H138.5Z\" fill=\"#2D7EAA\"/>\n<path d=\"M150.496 14.0001H143.504C143.226 14.0001 143 14.2039 143 14.4555V22.5447C143 22.7962 143.226 23.0001 143.504 23.0001H150.496C150.774 23.0001 151 22.7962 151 22.5447V14.4555C151 14.2039 150.774 14.0001 150.496 14.0001Z\" fill=\"#9FCBE9\"/>\n<path d=\"M140.734 10.9842V6.46178C140.734 5.93348 140.943 5.42668 141.316 5.05312C141.689 4.67955 142.195 4.46979 142.722 4.46979H161.256C161.951 4.46928 162.635 4.6552 163.234 5.00819C163.834 5.36117 164.329 5.86832 164.667 6.47735L167.166 10.9842\" fill=\"#439CCC\"/>\n<path d=\"M168 27.0001H157V15.0001C157 14.4478 157.448 14.0001 158 14.0001H164.759C165.241 14.0001 165.655 14.3439 165.743 14.8179L168 27.0001Z\" fill=\"#9FCBE9\"/>\n<path d=\"M170.067 27.84H172.331C172.775 27.84 173.201 28.0168 173.515 28.3315C173.829 28.6463 174.005 29.0731 174.005 29.5182V38.1239C174.005 38.4597 173.939 38.7921 173.811 39.1023C173.683 39.4125 173.495 39.6943 173.258 39.9317C173.021 40.1691 172.74 40.3574 172.43 40.4859C172.121 40.6144 171.789 40.6805 171.454 40.6805H170.067V27.84Z\" fill=\"#439CCC\"/>\n<path d=\"M137 28.728C137 27.7736 137.861 27 138.924 27H172.076C173.139 27 174 27.7736 174 28.728V32H137V28.728Z\" fill=\"#439CCC\"/>\n<path d=\"M91.8607 59.9989C96.4876 59.9989 100.238 56.2397 100.238 51.6024C100.238 46.9651 96.4876 43.2058 91.8607 43.2058C87.2338 43.2058 83.4829 46.9651 83.4829 51.6024C83.4829 56.2397 87.2338 59.9989 91.8607 59.9989Z\" fill=\"#141446\"/>\n<path d=\"M91.8606 55.7902C94.1683 55.7902 96.039 53.9152 96.039 51.6024C96.039 49.2895 94.1683 47.4146 91.8606 47.4146C89.5529 47.4146 87.6821 49.2895 87.6821 51.6024C87.6821 53.9152 89.5529 55.7902 91.8606 55.7902Z\" fill=\"#9FCBE9\"/>\n<path d=\"M74.5157 59.9989C79.1426 59.9989 82.8934 56.2397 82.8934 51.6024C82.8934 46.9651 79.1426 43.2058 74.5157 43.2058C69.8888 43.2058 66.1379 46.9651 66.1379 51.6024C66.1379 56.2397 69.8888 59.9989 74.5157 59.9989Z\" fill=\"#141446\"/>\n<path d=\"M74.5156 55.7902C76.8233 55.7902 78.694 53.9152 78.694 51.6024C78.694 49.2895 76.8233 47.4146 74.5156 47.4146C72.2079 47.4146 70.3372 49.2895 70.3372 51.6024C70.3372 53.9152 72.2079 55.7902 74.5156 55.7902Z\" fill=\"#9FCBE9\"/>\n<path d=\"M172.732 50.703L170.056 51.6075V47.0956H172.706C172.907 47.0956 173.099 47.1755 173.241 47.3177C173.383 47.4598 173.463 47.6527 173.463 47.8538V49.6888C173.466 49.9141 173.397 50.1348 173.266 50.3175C173.134 50.5003 172.947 50.6354 172.732 50.703Z\" fill=\"#FDCC44\"/>\n<path d=\"M59.4911 1.00527H132.508C133.434 1.00527 134.322 1.42868 134.977 2.18235C135.632 2.93602 136 3.95822 136 5.02408V38.9812C136 40.047 135.632 41.0692 134.977 41.8229C134.322 42.5766 133.434 43 132.508 43H55.9995V5.01881C55.9995 3.95296 56.3674 2.93076 57.0222 2.17708C57.677 1.42341 58.5651 1 59.4911 1V1.00527Z\" fill=\"#439CCC\"/>\n<path d=\"M117.455 25.75C117.455 24.793 118.221 24 119.205 24H123.58C124.537 24 125.33 24.793 125.33 25.75V31H125.549C126.861 31 127.955 32.0938 127.955 33.4062V34.2812C127.955 34.6641 128.229 34.9375 128.611 34.9375C128.967 34.9375 129.268 34.6641 129.268 34.2812V30.0703C128.502 29.8789 127.955 29.1953 127.955 28.375V26.625L127.08 25.75C126.834 25.5312 126.834 25.1211 127.08 24.875C127.299 24.6562 127.709 24.6562 127.955 24.875L130.061 27.0078C130.389 27.3359 130.58 27.7734 130.58 28.2383V34.2812C130.58 35.375 129.678 36.25 128.611 36.25C127.518 36.25 126.643 35.375 126.643 34.2812V33.4062C126.643 32.8047 126.15 32.3125 125.549 32.3125H125.33V36.25C125.795 36.25 126.205 36.6602 126.205 37.125C126.205 37.6172 125.795 38 125.33 38H117.455C116.963 38 116.58 37.6172 116.58 37.125C116.58 36.6602 116.963 36.25 117.455 36.25V25.75ZM119.205 28.8125C119.205 29.0586 119.396 29.25 119.643 29.25H123.143C123.361 29.25 123.58 29.0586 123.58 28.8125V26.1875C123.58 25.9688 123.361 25.75 123.143 25.75H119.643C119.396 25.75 119.205 25.9688 119.205 26.1875V28.8125Z\" fill=\"white\"/>\n<path d=\"M111.305 30.1528H114.242C114.583 30.1528 114.898 30.3889 115.003 30.7037C115.134 31.0448 115.055 31.412 114.793 31.6482L108.079 37.5247C107.764 37.7608 107.344 37.787 107.029 37.5509C106.715 37.341 106.584 36.9213 106.741 36.554L108.76 31.8318H105.823C105.482 31.8318 105.167 31.6219 105.062 31.3071C104.931 30.9661 105.01 30.5988 105.272 30.3627L111.986 24.4862C112.301 24.25 112.721 24.2238 113.036 24.4599C113.35 24.6698 113.481 25.0895 113.324 25.4568L111.305 30.1528Z\" fill=\"white\"/>\n</g>\n<defs>\n<clipPath id=\"clip0_220_17600\">\n<rect width=\"118\" height=\"60\" fill=\"white\" transform=\"translate(56)\"/>\n</clipPath>\n</defs>\n</svg>\n";

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"230\" height=\"60\" viewBox=\"0 0 230 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_220_18036)\">\n<path d=\"M36 30C36 13.4315 49.4315 0 66 0C82.5685 0 96 13.4315 96 30C96 46.5685 82.5685 60 66 60C49.4315 60 36 46.5685 36 30Z\" fill=\"#141446\"/>\n<g clip-path=\"url(#clip1_220_18036)\">\n<path d=\"M77.394 37.225H19.0106C17.1112 37.2268 15.29 37.9838 13.9469 39.3299C12.6038 40.676 11.8484 42.5012 11.8466 44.405H15.0009C15.0018 43.3394 15.4246 42.3178 16.1763 41.5643C16.9281 40.8109 17.9474 40.3872 19.0106 40.3863V42.2127H22.3596C22.7882 42.8633 23.0168 43.6254 23.0169 44.405H26.1711C26.1701 43.6605 26.0528 42.9208 25.8234 42.2127H77.3906L77.394 37.225Z\" fill=\"#1A5270\"/>\n<path d=\"M69.4267 49.9993C72.5113 49.9993 75.0119 47.4931 75.0119 44.4016C75.0119 41.3101 72.5113 38.8039 69.4267 38.8039C66.3421 38.8039 63.8416 41.3101 63.8416 44.4016C63.8416 47.4931 66.3421 49.9993 69.4267 49.9993Z\" fill=\"#303048\"/>\n<path d=\"M69.4266 47.1935C70.9651 47.1935 72.2122 45.9435 72.2122 44.4016C72.2122 42.8597 70.9651 41.6097 69.4266 41.6097C67.8882 41.6097 66.641 42.8597 66.641 44.4016C66.641 45.9435 67.8882 47.1935 69.4266 47.1935Z\" fill=\"#9FCBE9\"/>\n<path d=\"M53.4832 39.9997H41.1839C40.5302 39.9997 40.0002 40.4987 40.0002 41.1144V43.5517C40.0002 44.1673 40.5302 44.6664 41.1839 44.6664H53.4832C54.137 44.6664 54.6669 44.1673 54.6669 43.5517V41.1144C54.6669 40.4987 54.137 39.9997 53.4832 39.9997Z\" fill=\"#2D7EAA\"/>\n<path d=\"M57.6668 44.6664C58.9555 44.6664 60.0002 43.6217 60.0002 42.333C60.0002 41.0444 58.9555 39.9997 57.6668 39.9997C56.3782 39.9997 55.3335 41.0444 55.3335 42.333C55.3335 43.6217 56.3782 44.6664 57.6668 44.6664Z\" fill=\"#2D7EAA\"/>\n<path d=\"M63.3335 39.9997H61.3335V47.333H63.3335V39.9997Z\" fill=\"#1A5270\"/>\n<path d=\"M61.6669 37.2074V18.581C61.6669 18.2473 62.033 17.9272 62.2685 17.6912C62.5039 17.4552 62.8233 17.3228 63.1562 17.3228H81.1775C81.5005 17.3232 81.8128 17.4384 82.0592 17.6476C82.3055 17.8569 82.47 18.1467 82.5234 18.4659L84.3041 28.9782V45.109L82.7252 46.8867C82.7252 46.8867 76.2218 47.0191 76.2218 46.8867V40.4594C76.2218 39.5976 75.8805 38.771 75.2728 38.1612C74.665 37.5514 73.8406 37.2084 72.9807 37.2074H61.6669Z\" fill=\"#2D7EAA\"/>\n<path d=\"M69.6641 19.3334H65.003C64.8174 19.3334 64.6669 19.4693 64.6669 19.637V25.0298C64.6669 25.1975 64.8174 25.3334 65.003 25.3334H69.6641C69.8497 25.3334 70.0002 25.1975 70.0002 25.0298V19.637C70.0002 19.4693 69.8497 19.3334 69.6641 19.3334Z\" fill=\"#9FCBE9\"/>\n<path d=\"M63.1565 17.3228V14.3079C63.1565 13.9557 63.296 13.6178 63.5445 13.3687C63.793 13.1197 64.1301 12.9799 64.4815 12.9799H76.8377C77.3014 12.9795 77.7568 13.1035 78.1567 13.3388C78.5566 13.5741 78.8864 13.9122 79.1121 14.3182L80.7779 17.3228\" fill=\"#439CCC\"/>\n<path d=\"M81.3336 28H74.0002V20C74.0002 19.6319 74.2987 19.3334 74.6669 19.3334H79.1732C79.4945 19.3334 79.7702 19.5626 79.8287 19.8786L81.3336 28Z\" fill=\"#9FCBE9\"/>\n<path d=\"M82.7114 28.56H84.2207C84.5168 28.56 84.8008 28.6779 85.0101 28.8877C85.2195 29.0975 85.3371 29.3821 85.3371 29.6788V35.416C85.3371 35.6398 85.2931 35.8614 85.2076 36.0682C85.1222 36.275 84.9969 36.4629 84.839 36.6212C84.6811 36.7794 84.4936 36.905 84.2873 36.9906C84.081 37.0763 83.8598 37.1204 83.6365 37.1204H82.7114V28.56Z\" fill=\"#439CCC\"/>\n<path d=\"M60.6667 29.152C60.6667 28.5158 61.241 28 61.9493 28H84.0509C84.7593 28 85.3335 28.5158 85.3335 29.152V31.3333H60.6667V29.152Z\" fill=\"#439CCC\"/>\n<path d=\"M30.5742 49.9993C33.6588 49.9993 36.1593 47.4931 36.1593 44.4016C36.1593 41.3101 33.6588 38.8039 30.5742 38.8039C27.4896 38.8039 24.989 41.3101 24.989 44.4016C24.989 47.4931 27.4896 49.9993 30.5742 49.9993Z\" fill=\"#141446\"/>\n<path d=\"M84.4884 43.802L82.7043 44.405V41.397H84.471C84.6048 41.397 84.7331 41.4503 84.8276 41.5451C84.9222 41.6399 84.9754 41.7685 84.9754 41.9025V43.1258C84.9778 43.2761 84.9317 43.4232 84.8439 43.545C84.7562 43.6669 84.6314 43.7569 84.4884 43.802Z\" fill=\"#FDCC44\"/>\n<path d=\"M8.99421 10.6702H57.6721C58.2895 10.6702 58.8815 10.9525 59.3181 11.4549C59.7546 11.9574 59.9998 12.6388 59.9998 13.3494V35.9875C59.9998 36.6981 59.7546 37.3795 59.3181 37.882C58.8815 38.3844 58.2895 38.6667 57.6721 38.6667H6.6665V13.3459C6.6665 12.6353 6.91174 11.9539 7.34827 11.4514C7.7848 10.949 8.37686 10.6667 8.99421 10.6667V10.6702Z\" fill=\"#439CCC\"/>\n</g>\n</g>\n<g clip-path=\"url(#clip2_220_18036)\">\n<path d=\"M85 30C85 13.4315 98.4315 0 115 0C131.569 0 145 13.4315 145 30C145 46.5685 131.569 60 115 60C98.4315 60 85 46.5685 85 30Z\" fill=\"#141446\"/>\n<path d=\"M130 18.7962H36C34.5273 18.7962 33.3334 19.9901 33.3334 21.4629V40.8438C33.3334 42.7371 34.6608 44.3711 36.5139 44.759L44.5475 46.4404H130.667C132.508 46.4404 134 44.948 134 43.1071V22.7962C134 20.5871 132.209 18.7962 130 18.7962Z\" fill=\"#439CCC\"/>\n<path d=\"M104.27 43.4284C104.27 40.4828 106.657 38.095 109.603 38.095H112.498C115.443 38.095 117.831 40.4828 117.831 43.4284V46.4405H104.27V43.4284Z\" fill=\"#1A5270\"/>\n<rect x=\"98.0105\" y=\"17.2314\" width=\"11.9965\" height=\"1.56477\" fill=\"#1A5270\"/>\n<path d=\"M120.96 21.9258H134V40.1811C129.912 40.1811 124.999 36.7755 122.293 34.2223C121.386 33.3656 120.96 32.1446 120.96 30.8964V21.9258Z\" fill=\"#9FCBE9\"/>\n<path d=\"M39.071 21.9258H116.266V33.4007H39.071V21.9258Z\" fill=\"#1A5270\"/>\n<path d=\"M84.449 21.9258H98.5319V33.4007H84.449V21.9258Z\" fill=\"#9FCBE9\"/>\n<path d=\"M99.5752 21.9258H113.658V33.4007H99.5752V21.9258Z\" fill=\"#9FCBE9\"/>\n<path d=\"M131.914 41.2245H134V43.5717C133.166 43.5717 132.262 43.224 131.914 43.0501V41.2245Z\" fill=\"#FDCC44\"/>\n<path d=\"M111.05 50.0915C114.219 50.0915 116.788 47.5228 116.788 44.3541C116.788 41.1853 114.219 38.6166 111.05 38.6166C107.882 38.6166 105.313 41.1853 105.313 44.3541C105.313 47.5228 107.882 50.0915 111.05 50.0915Z\" fill=\"#303048\"/>\n<path d=\"M111.049 47.2154C112.63 47.2154 113.911 45.9342 113.911 44.3538C113.911 42.7734 112.63 41.4922 111.049 41.4922C109.469 41.4922 108.188 42.7734 108.188 44.3538C108.188 45.9342 109.469 47.2154 111.049 47.2154Z\" fill=\"#9FCBE9\"/>\n</g>\n<g clip-path=\"url(#clip3_220_18036)\">\n<path d=\"M134 30C134 13.4315 147.431 0 164 0C180.569 0 194 13.4315 194 30C194 46.5685 180.569 60 164 60C147.431 60 134 46.5685 134 30Z\" fill=\"#141446\"/>\n<path d=\"M124.732 45.8605C124.732 46.3343 124.92 46.7887 125.255 47.1237C125.59 47.4588 126.044 47.647 126.518 47.647H174.207V36.3994H124.732V45.8605Z\" fill=\"#1A5270\"/>\n<path d=\"M178.98 40.7217C178.862 39.2847 177.861 37.2884 176.871 36.2484C175.158 34.473 172.099 32.5467 166.247 32.5467C160.594 32.5467 157.041 23.1639 141.225 23.1639C129.256 23.1639 120.656 30.6931 120.656 39.9808C120.654 41.1037 120.881 42.2151 121.321 43.2478C121.762 44.2806 122.408 45.2132 123.219 45.9891C123.425 46.1975 123.691 46.3362 123.979 46.3857C124.267 46.4351 124.564 46.3927 124.827 46.2646C125.09 46.1364 125.307 45.9289 125.445 45.6713C125.584 45.4137 125.639 45.1191 125.601 44.8288C125.472 43.7924 125.582 42.7402 125.921 41.7525C126.26 40.7648 126.821 39.8676 127.56 39.1294C128.299 38.3912 129.196 37.8316 130.184 37.4931C131.172 37.1546 132.225 37.0462 133.261 37.1762C134.297 37.3063 135.29 37.6713 136.164 38.2434C137.038 38.8155 137.769 39.5796 138.303 40.4774C138.836 41.3752 139.158 42.3831 139.243 43.424C139.327 44.465 139.173 45.5116 138.792 46.4839C138.71 46.6874 138.68 46.9079 138.703 47.126C138.727 47.344 138.805 47.5529 138.929 47.7338C139.052 47.9148 139.219 48.0623 139.414 48.1632C139.609 48.2642 139.825 48.3154 140.045 48.3124H158.645C158.931 48.3139 159.212 48.2487 159.468 48.1221C159.723 47.9954 159.946 47.8108 160.118 47.583C160.289 47.3552 160.405 47.0904 160.456 46.8098C160.508 46.5292 160.493 46.2405 160.412 45.9667C160.097 44.9204 160.037 43.8138 160.236 42.7393C160.435 41.6648 160.888 40.6534 161.557 39.7894C162.226 38.9254 163.092 38.2338 164.082 37.7722C165.073 37.3106 166.159 37.0924 167.251 37.1358C168.343 37.1791 169.409 37.4828 170.36 38.0215C171.311 38.5601 172.119 39.3182 172.717 40.2326C173.316 41.1469 173.687 42.191 173.8 43.2779C173.914 44.3648 173.765 45.4631 173.368 46.4811C173.296 46.6632 173.279 46.8623 173.318 47.054C173.358 47.2457 173.452 47.4218 173.59 47.5607C173.728 47.6995 173.904 47.7951 174.095 47.8358C174.287 47.8765 174.486 47.8604 174.668 47.7896C176.046 47.2244 177.207 46.234 177.983 44.9626C178.758 43.6913 179.108 42.2054 178.98 40.7217Z\" fill=\"#439CCC\"/>\n<path d=\"M132.417 49.8361C135.655 49.8361 138.28 47.2112 138.28 43.9733C138.28 40.7353 135.655 38.1104 132.417 38.1104C129.179 38.1104 126.555 40.7353 126.555 43.9733C126.555 47.2112 129.179 49.8361 132.417 49.8361Z\" fill=\"#141446\"/>\n<path d=\"M132.417 46.8977C134.033 46.8977 135.342 45.5884 135.342 43.9733C135.342 42.3581 134.033 41.0488 132.417 41.0488C130.802 41.0488 129.493 42.3581 129.493 43.9733C129.493 45.5884 130.802 46.8977 132.417 46.8977Z\" fill=\"#9FCBE9\"/>\n<path d=\"M166.977 49.8361C170.215 49.8361 172.839 47.2112 172.839 43.9733C172.839 40.7353 170.215 38.1104 166.977 38.1104C163.739 38.1104 161.114 40.7353 161.114 43.9733C161.114 47.2112 163.739 49.8361 166.977 49.8361Z\" fill=\"#303048\"/>\n<path d=\"M166.977 46.8977C168.592 46.8977 169.901 45.5884 169.901 43.9733C169.901 42.3581 168.592 41.0488 166.977 41.0488C165.362 41.0488 164.052 42.3581 164.052 43.9733C164.052 45.5884 165.362 46.8977 166.977 46.8977Z\" fill=\"#9FCBE9\"/>\n<path d=\"M174.691 39.575C174.561 39.5756 174.434 39.5394 174.323 39.4706C174.213 39.4017 174.125 39.3031 174.068 39.1861C174.012 39.0691 173.99 38.9384 174.004 38.8093C174.019 38.6802 174.07 38.558 174.151 38.4566C174.315 38.2614 174.52 38.1045 174.751 37.9968C174.982 37.8892 175.234 37.8334 175.489 37.8334C175.744 37.8334 175.996 37.8892 176.227 37.9968C176.458 38.1045 176.663 38.2614 176.827 38.4566C176.908 38.558 176.959 38.6802 176.974 38.8093C176.989 38.9384 176.967 39.0691 176.91 39.1861C176.854 39.3031 176.765 39.4017 176.655 39.4706C176.545 39.5394 176.417 39.5756 176.287 39.575H174.691Z\" fill=\"#FDCC44\"/>\n<path d=\"M128.758 33.391H139.248C139.871 33.391 140.468 33.1436 140.908 32.7032C141.349 32.2628 141.596 31.6654 141.596 31.0425V27.3632C141.597 27.0294 141.527 26.6991 141.39 26.3945C141.254 26.09 141.053 25.8182 140.803 25.5974C140.552 25.3766 140.258 25.2119 139.938 25.1143C139.619 25.0167 139.282 24.9885 138.951 25.0315C133.885 25.7193 130.033 28.2719 127.628 30.3771C127.365 30.6073 127.178 30.9123 127.093 31.2514C127.007 31.5905 127.027 31.9476 127.15 32.275C127.273 32.6025 127.492 32.8847 127.78 33.0841C128.067 33.2835 128.408 33.3906 128.758 33.391Z\" fill=\"#9FCBE9\"/>\n<path d=\"M146.562 25.2189C151.245 25.9346 156.291 28.3865 158.304 31.065C158.464 31.2833 158.56 31.5417 158.582 31.8115C158.604 32.0812 158.55 32.3517 158.427 32.5928C158.304 32.8339 158.117 33.0362 157.886 33.1771C157.655 33.3181 157.389 33.3922 157.119 33.3911H145.58C145.15 33.3911 144.736 33.22 144.432 32.9153C144.127 32.6107 143.956 32.1975 143.956 31.7667V27.2095C143.942 25.8172 145.186 25.0092 146.562 25.2189Z\" fill=\"#9FCBE9\"/>\n<path d=\"M157.155 31.4424C157.155 31.3742 157.17 31.3069 157.2 31.2458C157.23 31.1846 157.274 31.1313 157.329 31.0901C157.383 31.0489 157.446 31.0208 157.513 31.0082C157.58 30.9956 157.649 30.9987 157.714 31.0174C158.598 31.2578 159.901 31.9456 159.901 32.7592C159.901 33.5728 158.598 34.2634 157.714 34.5038C157.649 34.5225 157.58 34.5256 157.513 34.513C157.446 34.5004 157.383 34.4723 157.329 34.4311C157.274 34.3899 157.23 34.3366 157.2 34.2754C157.17 34.2143 157.155 34.147 157.155 34.0788V31.4424Z\" fill=\"#1A5270\"/>\n</g>\n<defs>\n<clipPath id=\"clip0_220_18036\">\n<path d=\"M36 30C36 13.4315 49.4315 0 66 0C82.5685 0 96 13.4315 96 30C96 46.5685 82.5685 60 66 60C49.4315 60 36 46.5685 36 30Z\" fill=\"white\"/>\n</clipPath>\n<clipPath id=\"clip1_220_18036\">\n<rect width=\"78.6667\" height=\"40\" fill=\"white\" transform=\"translate(7 10)\"/>\n</clipPath>\n<clipPath id=\"clip2_220_18036\">\n<path d=\"M85 30C85 13.4315 98.4315 0 115 0C131.569 0 145 13.4315 145 30C145 46.5685 131.569 60 115 60C98.4315 60 85 46.5685 85 30Z\" fill=\"white\"/>\n</clipPath>\n<clipPath id=\"clip3_220_18036\">\n<path d=\"M134 30C134 13.4315 147.431 0 164 0C180.569 0 194 13.4315 194 30C194 46.5685 180.569 60 164 60C147.431 60 134 46.5685 134 30Z\" fill=\"white\"/>\n</clipPath>\n</defs>\n</svg>\n";

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"230\" height=\"60\" viewBox=\"0 0 230 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M73.1934 44.0447C73.1934 44.7554 73.4757 45.437 73.9783 45.9396C74.4808 46.4421 75.1624 46.7245 75.8732 46.7245H155.406V29.853H73.1934V44.0447Z\" fill=\"#1A5270\"/>\n<path d=\"M159.402 29.6268C160.887 31.1868 162.388 34.1812 162.564 36.3368C162.756 38.5623 162.233 40.7911 161.069 42.6981C159.906 44.6052 158.164 46.0908 156.098 46.9386C155.824 47.0448 155.525 47.0689 155.238 47.0079C154.951 46.9469 154.687 46.8035 154.48 46.5952C154.274 46.3869 154.132 46.1228 154.073 45.8352C154.014 45.5476 154.04 45.249 154.147 44.9759C154.743 43.4488 154.965 41.8014 154.796 40.1711C154.626 38.5407 154.069 36.9745 153.171 35.603C152.273 34.2315 151.061 33.0944 149.635 32.2864C148.208 31.4784 146.61 31.0229 144.972 30.9579C143.334 30.8928 141.704 31.2201 140.218 31.9125C138.733 32.6049 137.434 33.6423 136.43 34.9383C135.427 36.2343 134.747 37.7514 134.449 39.3632C134.15 40.9749 134.241 42.6347 134.714 44.2042C134.834 44.6149 134.856 45.0479 134.78 45.4688C134.703 45.8898 134.529 46.2869 134.271 46.6287C134.014 46.9704 133.68 47.2473 133.297 47.4373C132.913 47.6272 132.491 47.725 132.063 47.7228L96.0837 47.8009C95.7547 47.8055 95.4296 47.7286 95.1375 47.5772C94.8454 47.4258 94.5952 47.2045 94.4093 46.933C94.2234 46.6616 94.1074 46.3484 94.0717 46.0213C94.0361 45.6942 94.0818 45.3634 94.2049 45.0582C94.7766 43.5997 95.0077 42.0298 94.8804 40.4684C94.7532 38.9069 94.271 37.3952 93.4706 36.0484C92.6703 34.7017 91.573 33.5555 90.2623 32.6974C88.9516 31.8392 87.4623 31.2917 85.9079 31.0967C84.3535 30.9016 82.775 31.0642 81.293 31.5719C79.811 32.0797 78.4644 32.9192 77.3562 34.0264C76.2479 35.1337 75.4072 36.4795 74.8981 37.9611C74.3891 39.4426 74.2251 41.0209 74.4187 42.5755C74.475 43.0109 74.3931 43.4529 74.1848 43.8393C73.9764 44.2257 73.652 44.5369 73.2574 44.7292C72.8627 44.9214 72.4177 44.9849 71.985 44.9108C71.5523 44.8367 71.1538 44.6286 70.8457 44.3159C69.6283 43.152 68.6597 41.7532 67.9987 40.2041C67.3377 38.655 66.9979 36.9878 67 35.3036V13.0721C67 11.4176 68.3395 10.0754 69.994 10.0721L105.932 10C129.656 10 134.986 24.0742 143.466 24.0742C152.244 24.0742 156.831 26.9637 159.402 29.6268Z\" fill=\"#439CCC\"/>\n<path d=\"M114.455 30.75C114.455 29.793 115.221 29 116.205 29H120.58C121.537 29 122.33 29.793 122.33 30.75V36H122.549C123.861 36 124.955 37.0938 124.955 38.4062V39.2812C124.955 39.6641 125.229 39.9375 125.611 39.9375C125.967 39.9375 126.268 39.6641 126.268 39.2812V35.0703C125.502 34.8789 124.955 34.1953 124.955 33.375V31.625L124.08 30.75C123.834 30.5312 123.834 30.1211 124.08 29.875C124.299 29.6562 124.709 29.6562 124.955 29.875L127.061 32.0078C127.389 32.3359 127.58 32.7734 127.58 33.2383V39.2812C127.58 40.375 126.678 41.25 125.611 41.25C124.518 41.25 123.643 40.375 123.643 39.2812V38.4062C123.643 37.8047 123.15 37.3125 122.549 37.3125H122.33V41.25C122.795 41.25 123.205 41.6602 123.205 42.125C123.205 42.6172 122.795 43 122.33 43H114.455C113.963 43 113.58 42.6172 113.58 42.125C113.58 41.6602 113.963 41.25 114.455 41.25V30.75ZM116.205 33.8125C116.205 34.0586 116.396 34.25 116.643 34.25H120.143C120.361 34.25 120.58 34.0586 120.58 33.8125V31.1875C120.58 30.9688 120.361 30.75 120.143 30.75H116.643C116.396 30.75 116.205 30.9688 116.205 31.1875V33.8125Z\" fill=\"white\"/>\n<path d=\"M108.305 35.1528H111.242C111.583 35.1528 111.898 35.3889 112.003 35.7037C112.134 36.0448 112.055 36.412 111.793 36.6482L105.079 42.5247C104.764 42.7608 104.344 42.787 104.029 42.5509C103.715 42.341 103.584 41.9213 103.741 41.554L105.76 36.8318H102.823C102.482 36.8318 102.167 36.6219 102.062 36.3071C101.931 35.9661 102.01 35.5988 102.272 35.3627L108.986 29.4862C109.301 29.25 109.721 29.2238 110.036 29.4599C110.35 29.6698 110.481 30.0895 110.324 30.4568L108.305 35.1528Z\" fill=\"white\"/>\n<path d=\"M84.722 50.0085C89.579 50.0085 93.5163 46.0712 93.5163 41.2142C93.5163 36.3573 89.579 32.4199 84.722 32.4199C79.8651 32.4199 75.9277 36.3573 75.9277 41.2142C75.9277 46.0712 79.8651 50.0085 84.722 50.0085Z\" fill=\"#141446\"/>\n<path d=\"M84.7219 45.6009C87.1446 45.6009 89.1085 43.6369 89.1085 41.2142C89.1085 38.7916 87.1446 36.8276 84.7219 36.8276C82.2992 36.8276 80.3352 38.7916 80.3352 41.2142C80.3352 43.6369 82.2992 45.6009 84.7219 45.6009Z\" fill=\"#9FCBE9\"/>\n<path d=\"M144.56 50.0085C149.417 50.0085 153.354 46.0712 153.354 41.2142C153.354 36.3573 149.417 32.4199 144.56 32.4199C139.703 32.4199 135.766 36.3573 135.766 41.2142C135.766 46.0712 139.703 50.0085 144.56 50.0085Z\" fill=\"#141446\"/>\n<path d=\"M144.56 45.6009C146.983 45.6009 148.947 43.6369 148.947 41.2142C148.947 38.7916 146.983 36.8276 144.56 36.8276C142.137 36.8276 140.173 38.7916 140.173 41.2142C140.173 43.6369 142.137 45.6009 144.56 45.6009Z\" fill=\"#9FCBE9\"/>\n<path d=\"M69.4812 33.4699C69.4033 33.4694 69.3265 33.4523 69.2557 33.4198C69.185 33.3874 69.1219 33.3402 69.0708 33.2815C69.0196 33.2228 68.9815 33.1539 68.959 33.0794C68.9365 33.0049 68.9301 32.9264 68.9402 32.8492C69.087 31.7044 69.628 30.853 70.2738 30.853C70.9196 30.853 71.4606 31.6918 71.6074 32.8492C71.6175 32.9264 71.6111 33.0049 71.5886 33.0794C71.5661 33.1539 71.528 33.2228 71.4768 33.2815C71.4257 33.3402 71.3626 33.3874 71.2919 33.4198C71.2211 33.4523 71.1443 33.4694 71.0664 33.4699H69.4812Z\" fill=\"#EB674C\"/>\n<path d=\"M156.037 34.6124C155.842 34.6133 155.651 34.559 155.485 34.4558C155.32 34.3525 155.187 34.2046 155.103 34.0291C155.018 33.8535 154.985 33.6576 155.007 33.4639C155.029 33.2703 155.105 33.0869 155.227 32.9349C155.473 32.6421 155.78 32.4067 156.127 32.2452C156.474 32.0837 156.851 32 157.234 32C157.616 32 157.994 32.0837 158.341 32.2452C158.687 32.4067 158.995 32.6421 159.241 32.9349C159.363 33.0869 159.439 33.2703 159.461 33.4639C159.483 33.6576 159.45 33.8535 159.365 34.0291C159.281 34.2046 159.148 34.3525 158.983 34.4558C158.817 34.559 158.626 34.6133 158.431 34.6124H156.037Z\" fill=\"#FDCC44\"/>\n<path d=\"M113.938 13.0825C120.963 14.1561 128.532 17.8341 131.552 21.8517C131.792 22.1792 131.936 22.5668 131.968 22.9714C132.001 23.3761 131.921 23.7818 131.736 24.1435C131.552 24.5051 131.271 24.8086 130.925 25.02C130.578 25.2314 130.18 25.3425 129.774 25.3409H112.466C111.82 25.3409 111.2 25.0842 110.743 24.6272C110.286 24.1703 110.029 23.5505 110.029 22.9043V16.0685C110.009 13.98 111.875 12.768 113.938 13.0825Z\" fill=\"#9FCBE9\"/>\n<path d=\"M129.828 22.4175C129.827 22.3153 129.851 22.2143 129.896 22.1226C129.941 22.0309 130.007 21.951 130.088 21.8891C130.17 21.8272 130.264 21.7852 130.365 21.7663C130.465 21.7473 130.569 21.7521 130.667 21.7801C131.992 22.1407 133.946 23.1724 133.946 24.3928C133.946 25.6132 131.992 26.649 130.667 27.0097C130.569 27.0377 130.465 27.0424 130.365 27.0235C130.264 27.0046 130.17 26.9625 130.088 26.9006C130.007 26.8388 129.941 26.7588 129.896 26.6671C129.851 26.5754 129.827 26.4744 129.828 26.3722V22.4175Z\" fill=\"#1A5270\"/>\n<path d=\"M67 13.0044H70C71.6569 13.0044 73 14.3475 73 16.0044V23.0044C73 24.6612 71.6569 26.0044 70 26.0044H67V13.0044Z\" fill=\"#9FCBE9\"/>\n<path d=\"M77.4 16.0044C77.4 14.5685 78.5641 13.4044 80 13.4044H102C103.436 13.4044 104.6 14.5685 104.6 16.0044V23.0044C104.6 24.4403 103.436 25.6044 102 25.6044H80C78.5641 25.6044 77.4 24.4403 77.4 23.0044V16.0044Z\" stroke=\"#9FCBE9\" stroke-width=\"0.8\"/>\n</svg>\n";

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vehicule_count_vue_vue_type_style_index_0_id_454b0375_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vehicule_count_vue_vue_type_style_index_0_id_454b0375_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vehicule_count_vue_vue_type_style_index_0_id_454b0375_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vehicule_count_vue_vue_type_style_index_0_id_454b0375_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vehicule_count_vue_vue_type_style_index_0_id_454b0375_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#app[data-v-454b0375],#index[data-v-454b0375]{--primary-100:#ec81a6;--header-gradient:linear-gradient(180deg,#ec81a6,#141446);--mobility-100:#ec81a6;--secondary-F-25:#fabbae}#app.enedis[data-v-454b0375]{--primary-100:#1423dc;--header-gradient:linear-gradient(180deg,#1423dc,#141446);--mobility-100:#93c90e;--secondary-F-25:#c3e869}.card[data-v-454b0375]{align-items:center;background:#fff;border-radius:40px 40px 0 0;display:flex;flex-direction:column;height:256px;overflow:hidden;padding:24px 0;position:relative;width:230px}.count[data-v-454b0375]{font-size:32px;line-height:130%}.count[data-v-454b0375],.type[data-v-454b0375]{align-items:center;color:#141446;display:flex;font-weight:800;text-align:center}.date[data-v-454b0375],.type[data-v-454b0375]{font-size:14px;line-height:140%}.date[data-v-454b0375]{color:#323274;font-weight:400;text-align:center}.selector.list[data-v-454b0375]{background:#141446;margin-top:8px;min-width:198px;padding:7px 16px;transition-delay:0s;transition-duration:.3s;transition-property:background;transition-timing-function:ease-out}.selector.list[data-v-454b0375] .placeholder{color:#fff;font-size:12px;font-weight:600;line-height:16px}.selector.list[data-v-454b0375]:hover{background:#436eb1}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M37 32.5906C38.077 32.5906 38.95 33.4636 38.95 34.5406V39.4156C38.95 43.1849 42.0057 46.2406 45.775 46.2406C49.5443 46.2406 52.6 43.1849 52.6 39.4156V19.6997H47.4V39.4156C47.4 40.313 46.6725 41.0406 45.775 41.0406C44.8775 41.0406 44.15 40.313 44.15 39.4156V34.5406C44.15 30.5917 40.9488 27.3906 37 27.3906V32.5906Z\" fill=\"#141446\"/>\n<path d=\"M7 10C7 5.58172 10.5817 2 15 2H29C33.4183 2 37 5.58172 37 10V50H7V10Z\" fill=\"#FDCC44\"/>\n<path d=\"M22.8724 25.1672C22.6354 24.9443 22.3307 24.9443 22.0938 25.1672C18.5052 28.8817 16 33.7107 16 36.5709C16 41.2512 18.6745 44 22.5 44C26.3255 44 29 41.2512 29 36.5709C29 33.6735 26.4609 28.8817 22.8724 25.1672ZM22.5 42.3855C20.5703 42.3855 19.25 41.0111 19.25 39.0052C19.25 38.5223 19.3854 36.9251 22.0599 33.6934C22.2969 33.4334 22.6693 33.4334 22.9063 33.6934C25.5807 36.9251 25.75 38.5223 25.75 39.0052C25.75 41.0111 24.3958 42.3855 22.5 42.3855Z\" fill=\"white\"/>\n<path d=\"M15.625 20.5C14.7109 20.5 14 19.7891 14 18.875V9.125C14 8.3125 14.7109 7.5 15.625 7.5H28.625C29.4375 7.5 30.25 8.3125 30.25 9.125V18.875C30.25 19.7891 29.4375 20.5 28.625 20.5H15.625Z\" fill=\"#8A6D1C\"/>\n<rect x=\"3\" y=\"50\" width=\"38\" height=\"8\" rx=\"4\" fill=\"#8A6D1C\"/>\n<path d=\"M54 6.86486C54 6.38721 53.6418 6 53.2 6C52.7582 6 52.4 6.38721 52.4 6.86486V12H54V6.86486Z\" fill=\"#8A6D1C\"/>\n<path d=\"M47.6 6.86486C47.6 6.38721 47.2418 6 46.8 6C46.3582 6 46 6.38721 46 6.86486V12H47.6V6.86486Z\" fill=\"#8A6D1C\"/>\n<path d=\"M44 12H56V17C56 20.3137 53.3137 23 50 23C46.6863 23 44 20.3137 44 17V12Z\" fill=\"#FDCC44\"/>\n</svg>\n";

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"150\" height=\"60\" viewBox=\"0 0 150 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M82 32.5906C83.077 32.5906 83.95 33.4636 83.95 34.5406V39.4156C83.95 43.1849 87.0057 46.2406 90.775 46.2406C94.5443 46.2406 97.6 43.1849 97.6 39.4156V19.6997H92.4V39.4156C92.4 40.313 91.6725 41.0406 90.775 41.0406C89.8775 41.0406 89.15 40.313 89.15 39.4156V34.5406C89.15 30.5917 85.9488 27.3906 82 27.3906V32.5906Z\" fill=\"#141446\"/>\n<path d=\"M52 10C52 5.58172 55.5817 2 60 2H74C78.4183 2 82 5.58172 82 10V50H52V10Z\" fill=\"#FDCC44\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M73.7201 33.8192H69.1671L72.2973 26.5408C72.5412 25.9716 72.3379 25.321 71.8501 24.9957C71.3623 24.6297 70.7119 24.6704 70.224 25.0364L59.8173 34.1445C59.4108 34.5105 59.2888 35.0797 59.4921 35.6083C59.6547 36.0963 60.1425 36.4216 60.671 36.4216H65.2239L62.0938 43.7406C61.8498 44.3099 62.0531 44.9605 62.5409 45.2857C63.0287 45.6517 63.6792 45.611 64.167 45.2451L74.5737 36.1369C74.9803 35.771 75.1022 35.2017 74.899 34.6731C74.7363 34.1852 74.2485 33.8192 73.7201 33.8192Z\" fill=\"white\"/>\n<path d=\"M60.625 20.5C59.7109 20.5 59 19.7891 59 18.875V9.125C59 8.3125 59.7109 7.5 60.625 7.5H73.625C74.4375 7.5 75.25 8.3125 75.25 9.125V18.875C75.25 19.7891 74.4375 20.5 73.625 20.5H60.625Z\" fill=\"#8A6D1C\"/>\n<rect x=\"48\" y=\"50\" width=\"38\" height=\"8\" rx=\"4\" fill=\"#8A6D1C\"/>\n<path d=\"M99 6.86486C99 6.38721 98.6418 6 98.2 6C97.7582 6 97.4 6.38721 97.4 6.86486V12H99V6.86486Z\" fill=\"#8A6D1C\"/>\n<path d=\"M92.6 6.86486C92.6 6.38721 92.2418 6 91.8 6C91.3582 6 91 6.38721 91 6.86486V12H92.6V6.86486Z\" fill=\"#8A6D1C\"/>\n<path d=\"M89 12H101V17C101 20.3137 98.3137 23 95 23C91.6863 23 89 20.3137 89 17V12Z\" fill=\"#FDCC44\"/>\n</svg>\n";

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_module_pdc_count_vue_vue_type_style_index_0_id_7468c3de_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_module_pdc_count_vue_vue_type_style_index_0_id_7468c3de_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_module_pdc_count_vue_vue_type_style_index_0_id_7468c3de_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_module_pdc_count_vue_vue_type_style_index_0_id_7468c3de_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_module_pdc_count_vue_vue_type_style_index_0_id_7468c3de_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#app[data-v-7468c3de],#index[data-v-7468c3de]{--primary-100:#ec81a6;--header-gradient:linear-gradient(180deg,#ec81a6,#141446);--mobility-100:#ec81a6;--secondary-F-25:#fabbae}#app.enedis[data-v-7468c3de]{--primary-100:#1423dc;--header-gradient:linear-gradient(180deg,#1423dc,#141446);--mobility-100:#93c90e;--secondary-F-25:#c3e869}.card[data-v-7468c3de]{align-items:center;background:#fff;border-radius:40px 40px 0 0;display:flex;flex-direction:column;height:256px;overflow:hidden;padding:24px 0;position:relative;width:230px}.count[data-v-7468c3de]{font-size:32px;line-height:130%}.count[data-v-7468c3de],.type[data-v-7468c3de]{align-items:center;color:#141446;display:flex;font-weight:800;text-align:center}.date[data-v-7468c3de],.type[data-v-7468c3de]{font-size:14px;line-height:140%}.date[data-v-7468c3de]{color:#323274;font-weight:400;text-align:center}.source[data-v-7468c3de]{padding:23px 0 8px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_quintiles_graph_vue_vue_type_style_index_0_id_7c572b1a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_quintiles_graph_vue_vue_type_style_index_0_id_7c572b1a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_quintiles_graph_vue_vue_type_style_index_0_id_7c572b1a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_quintiles_graph_vue_vue_type_style_index_0_id_7c572b1a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_quintiles_graph_vue_vue_type_style_index_0_id_7c572b1a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#app[data-v-7c572b1a],#index[data-v-7c572b1a]{--primary-100:#ec81a6;--header-gradient:linear-gradient(180deg,#ec81a6,#141446);--mobility-100:#ec81a6;--secondary-F-25:#fabbae}#app.enedis[data-v-7c572b1a]{--primary-100:#1423dc;--header-gradient:linear-gradient(180deg,#1423dc,#141446);--mobility-100:#93c90e;--secondary-F-25:#c3e869}.info-boxes[data-v-7c572b1a]{align-items:flex-start;box-sizing:border-box;display:flex;flex-direction:row;gap:35px;margin-top:6px;padding:0}.info-box[data-v-7c572b1a]{background:#00b4a0;border:2px solid #141446;border-radius:10px;flex:50%;transition-delay:0s;transition-duration:.3s;transition-property:all;transition-timing-function:ease-out}.info-box.legend .info-box-content[data-v-7c572b1a]{padding:0}.info-box.legend .info-box-content img[data-v-7c572b1a]{max-width:506px;width:100%}.info-box .info-box-content[data-v-7c572b1a]{align-items:flex-start;display:flex;flex-direction:column;gap:8px;justify-content:flex-end;padding:16px 20px}.info-box .result[data-v-7c572b1a]{background-color:#fff;padding:0 4px}.info-box:not(.first)[data-quintile=\"1\"][data-v-7c572b1a]{background-color:#436eb1!important;border-color:#436eb1!important;color:#fff}.info-box:not(.first)[data-quintile=\"1\"] .desc .result[data-v-7c572b1a]{color:#141446}.info-box:not(.first)[data-quintile=\"2\"][data-v-7c572b1a]{background-color:#00b4a0!important;border-color:#00b4a0!important}.info-box:not(.first)[data-quintile=\"3\"][data-v-7c572b1a]{background-color:#8ad279!important;border-color:#8ad279!important}.info-box:not(.first)[data-quintile=\"4\"][data-v-7c572b1a]{background-color:#f09429!important;border-color:#f09429!important}.info-box:not(.first)[data-quintile=\"5\"][data-v-7c572b1a]{background-color:#eb674c!important;border-color:#eb674c!important}.info-box.first[data-v-7c572b1a]{background-color:#e9e9f1;border:2px solid #e9e9f1}.info-box.first .result[data-v-7c572b1a]{background-color:#141446;color:#fff}.info-box .ranking[data-v-7c572b1a]{font-size:12px;font-weight:600;line-height:15px}.info-box .name[data-v-7c572b1a]{font-size:16px;font-weight:800;line-height:15px}.info-box .desc[data-v-7c572b1a]{font-size:16px;font-weight:600;line-height:120%}@media screen and (max-width:639px){.info-boxes[data-v-7c572b1a]{gap:20px}.info-box .name[data-v-7c572b1a]{font-size:16px;line-height:120%}.info-box .desc[data-v-7c572b1a],.info-box .desc .result[data-v-7c572b1a],.info-box.current.tooltip .result.res1[data-v-7c572b1a],.info-box.current.tooltip .result.res2[data-v-7c572b1a]{font-size:12px;line-height:15px}}.fade-enter-active[data-v-7c572b1a],.fade-leave-active[data-v-7c572b1a]{transition:all .5s ease}.fade-enter-from[data-v-7c572b1a],.fade-leave-to[data-v-7c572b1a]{opacity:0}.desc .volume-data[data-v-7c572b1a]{display:block;font-size:16px;font-style:italic;font-weight:600;line-height:120%;margin-top:8px}.wrapper[data-v-7c572b1a],[data-v-7c572b1a] .commonGraph{overflow:visible!important;overflow:initial!important}.graph[data-v-7c572b1a]{display:block;position:relative}.graph[data-v-7c572b1a] .highcharts-container{overflow:visible!important;overflow:initial!important}.graph[data-v-7c572b1a] .col-rd-current{height:0;position:relative;width:16px}.graph[data-v-7c572b1a] .col-rd-current:after{border-color:#141446 transparent transparent;border-style:solid;border-width:10px 8px 0;content:\"\";height:0;position:absolute;width:0;z-index:999}.graph[data-v-7c572b1a] .highcharts-axis-labels.highcharts-yaxis-labels span{background-color:#fff;padding-right:6px}.graph .graph-background[data-v-7c572b1a]{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%;z-index:-1}.graph .graph-background img[data-v-7c572b1a]{max-width:941px}.graph[data-cat=vehic][data-v-7c572b1a] .highcharts-tick{display:none}.graph[data-cat=pdc][data-v-7c572b1a] .highcharts-tick{display:none}.graph[data-cat=pdc] .graph-background img[data-v-7c572b1a]{max-width:860px}.graph[data-cat=mapping] .graph-container[data-v-7c572b1a]{margin:auto;max-width:768px;position:relative}.graph[data-cat=mapping] .graph-background[data-v-7c572b1a]{left:50%;margin:auto;max-width:768px;position:absolute;top:50%;transform:translate(-50%,-50%)}.graph[data-cat=mapping] .graph-background img[data-v-7c572b1a]{bottom:0;left:0;position:absolute;right:0;top:0}.graph[data-cat=mapping][data-v-7c572b1a] .commonGraph{height:100%;left:0;position:absolute;top:0;width:100%}.graph .chart-container[data-v-7c572b1a]{position:relative}.ranking-type[data-v-7c572b1a]{align-items:center;display:flex;font-size:14px;font-weight:400;justify-content:right;letter-spacing:.1em;line-height:24px;text-align:right}@media screen and (max-width:1040px){.graph .graph-background img[data-v-7c572b1a]{max-width:95%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_quintiles_graph_reversepdc_vue_vue_type_style_index_0_id_6dbd4fdb_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_quintiles_graph_reversepdc_vue_vue_type_style_index_0_id_6dbd4fdb_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_quintiles_graph_reversepdc_vue_vue_type_style_index_0_id_6dbd4fdb_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_quintiles_graph_reversepdc_vue_vue_type_style_index_0_id_6dbd4fdb_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_quintiles_graph_reversepdc_vue_vue_type_style_index_0_id_6dbd4fdb_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#app[data-v-6dbd4fdb],#index[data-v-6dbd4fdb]{--primary-100:#ec81a6;--header-gradient:linear-gradient(180deg,#ec81a6,#141446);--mobility-100:#ec81a6;--secondary-F-25:#fabbae}#app.enedis[data-v-6dbd4fdb]{--primary-100:#1423dc;--header-gradient:linear-gradient(180deg,#1423dc,#141446);--mobility-100:#93c90e;--secondary-F-25:#c3e869}.info-boxes[data-v-6dbd4fdb]{align-items:flex-start;box-sizing:border-box;display:flex;flex-direction:row;gap:35px;margin-top:6px;padding:0}.info-box[data-v-6dbd4fdb]{background:#00b4a0;border:2px solid #141446;border-radius:10px;flex:50%;transition-delay:0s;transition-duration:.3s;transition-property:all;transition-timing-function:ease-out}.info-box.legend .info-box-content[data-v-6dbd4fdb]{padding:0}.info-box.legend .info-box-content img[data-v-6dbd4fdb]{max-width:506px;width:100%}.info-box .info-box-content[data-v-6dbd4fdb]{align-items:flex-start;display:flex;flex-direction:column;gap:8px;justify-content:flex-end;padding:16px 20px}.info-box .result[data-v-6dbd4fdb]{background-color:#fff;padding:0 4px}.info-box:not(.first)[data-quintile=\"1\"][data-v-6dbd4fdb]{background-color:#436eb1!important;border-color:#436eb1!important;color:#fff}.info-box:not(.first)[data-quintile=\"1\"] .desc .result[data-v-6dbd4fdb]{color:#141446}.info-box:not(.first)[data-quintile=\"2\"][data-v-6dbd4fdb]{background-color:#00b4a0!important;border-color:#00b4a0!important}.info-box:not(.first)[data-quintile=\"3\"][data-v-6dbd4fdb]{background-color:#8ad279!important;border-color:#8ad279!important}.info-box:not(.first)[data-quintile=\"4\"][data-v-6dbd4fdb]{background-color:#f09429!important;border-color:#f09429!important}.info-box:not(.first)[data-quintile=\"5\"][data-v-6dbd4fdb]{background-color:#eb674c!important;border-color:#eb674c!important}.info-box.first[data-v-6dbd4fdb]{background-color:#e9e9f1;border:2px solid #e9e9f1}.info-box.first .result[data-v-6dbd4fdb]{background-color:#141446;color:#fff}.info-box .ranking[data-v-6dbd4fdb]{font-size:12px;font-weight:600;line-height:15px}.info-box .name[data-v-6dbd4fdb]{font-size:16px;font-weight:800;line-height:15px}.info-box .desc[data-v-6dbd4fdb]{font-size:16px;font-weight:600;line-height:120%}@media screen and (max-width:639px){.info-boxes[data-v-6dbd4fdb]{gap:20px}.info-box .name[data-v-6dbd4fdb]{font-size:16px;line-height:120%}.info-box .desc[data-v-6dbd4fdb],.info-box .desc .result[data-v-6dbd4fdb],.info-box.current.tooltip .result.res1[data-v-6dbd4fdb],.info-box.current.tooltip .result.res2[data-v-6dbd4fdb]{font-size:12px;line-height:15px}}.fade-enter-active[data-v-6dbd4fdb],.fade-leave-active[data-v-6dbd4fdb]{transition:all .5s ease}.fade-enter-from[data-v-6dbd4fdb],.fade-leave-to[data-v-6dbd4fdb]{opacity:0}.desc .volume-data[data-v-6dbd4fdb]{display:block;font-size:16px;font-style:italic;font-weight:600;line-height:120%;margin-top:8px}.wrapper[data-v-6dbd4fdb],[data-v-6dbd4fdb] .commonGraph{overflow:visible!important;overflow:initial!important}.graph[data-v-6dbd4fdb]{display:block;position:relative}.graph[data-v-6dbd4fdb] .highcharts-container{overflow:visible!important;overflow:initial!important}.graph[data-v-6dbd4fdb] .col-rd-current{height:0;position:relative;width:16px}.graph[data-v-6dbd4fdb] .col-rd-current:after{border-color:#141446 transparent transparent;border-style:solid;border-width:10px 8px 0;content:\"\";height:0;position:absolute;width:0;z-index:999}.graph[data-v-6dbd4fdb] .highcharts-axis-labels.highcharts-yaxis-labels span{background-color:#fff;padding-right:6px}.graph .graph-background[data-v-6dbd4fdb]{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%;z-index:-1}.graph .graph-background img[data-v-6dbd4fdb]{max-width:941px}.graph[data-cat=vehic][data-v-6dbd4fdb] .highcharts-tick{display:none}.graph[data-cat=pdc][data-v-6dbd4fdb] .highcharts-tick{display:none}.graph[data-cat=pdc] .graph-background img[data-v-6dbd4fdb]{max-width:860px}.graph[data-cat=mapping] .graph-container[data-v-6dbd4fdb]{margin:auto;max-width:768px;position:relative}.graph[data-cat=mapping] .graph-background[data-v-6dbd4fdb]{left:50%;margin:auto;max-width:768px;position:absolute;top:50%;transform:translate(-50%,-50%)}.graph[data-cat=mapping] .graph-background img[data-v-6dbd4fdb]{bottom:0;left:0;position:absolute;right:0;top:0}.graph[data-cat=mapping][data-v-6dbd4fdb] .commonGraph{height:100%;left:0;position:absolute;top:0;width:100%}.graph .chart-container[data-v-6dbd4fdb]{position:relative}.ranking-type[data-v-6dbd4fdb]{align-items:center;display:flex;font-size:14px;font-weight:400;justify-content:right;letter-spacing:.1em;line-height:24px;text-align:right}@media screen and (max-width:1040px){.graph .graph-background img[data-v-6dbd4fdb]{max-width:95%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"150\" height=\"62\" viewBox=\"0 0 150 62\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_374_5118)\">\n<path d=\"M42.5889 22.9489C45.6578 22.9489 48.2257 25.3288 48.2257 28.1472V46.3727C48.2257 46.9363 48.7267 47.3747 49.2904 47.3121H53.1109C53.6745 47.3121 54.1756 46.9363 54.1756 46.3727V28.1472C54.113 22.2599 48.9773 17.5 42.5889 17.5H30.3134C29.7497 17.5 29.3113 18.001 29.3739 18.5647V46.31C29.3739 46.8737 29.7497 47.3747 30.3134 47.3747H34.3844C34.948 47.3747 35.3864 46.8737 35.3238 46.31V22.9489H42.5889ZM9.2069 22.9489H24.8645C25.4282 22.9489 25.8666 22.5731 25.9292 22.0094V18.4395C25.9292 17.8758 25.4282 17.5 24.9272 17.5H9.08164C4.69751 17.5 1.06494 20.7568 1.06494 24.8278V39.9843C1.06494 44.0553 4.63488 47.3747 9.08164 47.3747H24.8645C25.4282 47.3747 25.8666 46.999 25.9292 46.4353V42.8653C25.9292 42.3017 25.4282 41.9259 24.8645 41.9259H9.2069C8.07956 41.9259 7.1401 41.0491 7.07747 39.9217V35.7255H16.472C17.0357 35.7255 17.4741 35.3497 17.5368 34.786V31.2787C17.5368 30.715 17.0357 30.3392 16.472 30.3392H7.07747V24.8278C7.07747 23.8257 8.07956 22.9489 9.2069 22.9489ZM148.873 37.0407V36.1639C148.56 32.8445 145.115 30.3392 141.545 30.3392H132.401C130.898 30.2766 129.708 29.024 129.771 27.5209V25.5167C129.833 24.0136 131.086 22.8236 132.589 22.8862H145.052C145.491 22.8862 145.867 22.6357 146.055 22.2599C146.117 22.1347 146.117 22.072 146.117 21.9468V18.4395C146.117 17.8758 145.616 17.4374 145.052 17.5H131.148C127.077 17.5 123.758 20.5689 123.758 24.3267V28.5856C123.758 32.6566 126.827 35.9134 130.585 35.9134H140.292C141.796 35.976 142.923 37.2286 142.86 38.7317V39.4207C142.798 40.9238 141.545 42.1138 140.042 42.0511H124.823C124.384 42.0511 124.009 42.3017 123.821 42.7401C123.758 42.8653 123.758 42.928 123.758 43.0532V46.5605C123.758 47.1242 124.259 47.5626 124.823 47.5H141.545C145.616 47.5 148.873 44.4311 148.873 40.6733V37.0407ZM100.209 17.5H87.2445C86.6808 17.5626 86.2424 18.001 86.305 18.5647V36.1013C86.305 36.6649 86.6808 37.166 87.2445 37.166H91.3155C91.8791 37.166 92.3176 36.6649 92.2549 36.1013V22.9489H99.5827C102.652 22.9489 105.219 25.2662 105.219 28.1472V37.7296C105.219 40.6106 102.714 41.9259 99.5827 41.9259H86.3677V47.3747H99.5827C105.971 47.3747 111.107 43.6169 111.107 37.7923V28.0846C110.981 22.1973 106.159 17.4374 100.209 17.5Z\" fill=\"white\"/>\n<path d=\"M69.0188 41.9259C65.95 41.9259 63.3821 39.6086 63.3821 36.7276V35.7881H75.3445C79.4781 35.7881 82.8602 32.6566 82.8602 28.8361V24.3894C82.8602 20.6315 79.5408 17.5 75.4072 17.5H65.0105C64.4468 17.5 63.8205 17.5 63.2568 17.6253C59.9374 18.2516 57.5575 21.1326 57.4948 24.452V27.0825C57.4948 27.6461 57.8706 28.1472 58.4343 28.1472H62.5053C63.069 28.0846 63.5074 27.6461 63.4447 27.0825V25.4541C63.5074 24.0762 64.6973 22.9489 66.0752 23.0115H74.2798C75.6577 22.9489 76.8477 24.0136 76.9103 25.4541V28.0846C76.8477 29.4624 75.6577 30.5898 74.2798 30.5271H54.1128V35.976H57.5575V36.9154C57.5575 42.8027 62.7558 47.5 69.0815 47.5H86.3049V42.0511L69.0188 41.9259Z\" fill=\"white\"/>\n<path d=\"M120.438 36.2891V26.3309C120.438 25.7672 120.063 25.2662 119.499 25.2662H115.428C114.864 25.2662 114.426 25.7672 114.488 26.3309V46.31C114.488 46.8737 114.864 47.3747 115.428 47.3747H119.499C120.063 47.3747 120.501 46.8737 120.438 46.31V36.2891ZM120.438 19.7547V18.5647C120.438 18.001 120.063 17.5 119.499 17.5H115.428C114.864 17.5 114.426 18.001 114.488 18.5647V21.8841C114.488 22.4478 114.864 22.9489 115.428 22.9489H119.499C120.063 22.9489 120.501 22.4478 120.438 21.8841V19.7547Z\" fill=\"white\"/>\n</g>\n<defs>\n<clipPath id=\"clip0_374_5118\">\n<rect width=\"149\" height=\"30\" fill=\"white\" transform=\"translate(0.5 17.5)\"/>\n</clipPath>\n</defs>\n</svg>\n";

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_footer_vue_vue_type_style_index_0_id_404adc68_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_footer_vue_vue_type_style_index_0_id_404adc68_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_footer_vue_vue_type_style_index_0_id_404adc68_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_footer_vue_vue_type_style_index_0_id_404adc68_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_footer_vue_vue_type_style_index_0_id_404adc68_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#app[data-v-404adc68],#index[data-v-404adc68]{--primary-100:#ec81a6;--header-gradient:linear-gradient(180deg,#ec81a6,#141446);--mobility-100:#ec81a6;--secondary-F-25:#fabbae}#app.enedis[data-v-404adc68]{--primary-100:#1423dc;--header-gradient:linear-gradient(180deg,#1423dc,#141446);--mobility-100:#93c90e;--secondary-F-25:#c3e869}.footer[data-v-404adc68]{background:linear-gradient(180deg,#ec81a6,#141446);background:var(--header-gradient);display:flex;flex-direction:column;justify-content:flex-end;min-height:156px;padding:44px 60px 30px;position:relative;--primary-100:#ec81a6;--header-gradient:linear-gradient(180deg,#ec81a6,#141446);--mobility-100:#ec81a6;--secondary-F-25:#fabbae}.card[data-v-404adc68]{justify-content:center}.box-switch-type[data-v-404adc68],.card[data-v-404adc68]{align-items:center;display:flex}.box-switch-type[data-v-404adc68]{background:#fff;border-radius:40px;flex-direction:column;gap:24px;max-width:480px;padding:40px}.box-switch-type .ico[data-v-404adc68]{flex:none;flex-grow:0;order:0}.box-switch-type .title[data-v-404adc68]{align-items:center;color:#141446;display:flex;font-size:22px;font-weight:800;line-height:140%;text-align:center}.logos[data-v-404adc68]{margin-top:20px}.logos[data-v-404adc68],.logos .logos-left[data-v-404adc68]{display:flex}.logos .logos-left .logo-enedis[data-v-404adc68]{margin-left:38px}.logos .logos-right[data-v-404adc68]{align-items:center;display:flex;flex:1;justify-content:flex-end}.switch-territory[data-v-404adc68]{align-items:center;background:linear-gradient(180deg,#fcfbf8 70%,#eeecdc);border:1px solid #141446;border-radius:20px;cursor:pointer;display:flex;flex-direction:row;font-size:14px;font-weight:400;gap:16px;height:40px;line-height:19px;padding:0 20px;position:relative;width:400px}.anchor-right[data-v-404adc68]{position:absolute;right:20px;top:10px}@media screen and (max-width:639px){.footer[data-v-404adc68]{flex-direction:column;padding:40px 28px}.logos[data-v-404adc68],.logos-right[data-v-404adc68]{justify-content:center;margin-top:40px}.logos-right[data-v-404adc68]{align-items:center}.box-switch-type[data-v-404adc68]{max-width:100%}.box-switch-type svg[data-v-404adc68]{width:167px}.box-switch-type .title[data-v-404adc68]{font-size:22px;line-height:140%}.box-switch-type .switch-territory[data-v-404adc68]{line-height:14px;max-width:100%;padding-right:45px}.logo-ore[data-v-404adc68]{width:98px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_header_vue_vue_type_template_id_49867178_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);
/* harmony import */ var _app_header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _app_header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _app_header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);



function injectStyles (context) {
  
  var style0 = __webpack_require__(115)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _app_header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_header_vue_vue_type_template_id_49867178_scoped_true__WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _app_header_vue_vue_type_template_id_49867178_scoped_true__WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "49867178",
  "9c654b14"
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_header_vue_vue_type_style_index_0_id_49867178_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_header_vue_vue_type_style_index_0_id_49867178_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_header_vue_vue_type_style_index_0_id_49867178_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_header_vue_vue_type_style_index_0_id_49867178_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_header_vue_vue_type_style_index_0_id_49867178_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#app[data-v-49867178],#index[data-v-49867178]{--primary-100:#ec81a6;--header-gradient:linear-gradient(180deg,#ec81a6,#141446);--mobility-100:#ec81a6;--secondary-F-25:#fabbae}#app.enedis[data-v-49867178]{--primary-100:#1423dc;--header-gradient:linear-gradient(180deg,#1423dc,#141446);--mobility-100:#93c90e;--secondary-F-25:#c3e869}.header[data-v-49867178]{height:100px;position:absolute;width:100%;z-index:10}.header .header-container[data-v-49867178]{position:relative;width:100%}.header .burger-bt[data-v-49867178]{background-color:#141446;border-radius:24px;height:48px;left:48px;position:absolute;top:18px;width:48px}.header .hamb-bar[data-v-49867178]{background-color:#fff;height:2px;left:50%;margin-left:-9px;position:absolute;top:18px;width:18px}.header .hamb-bar[data-v-49867178]:nth-child(2){top:24px}.header .hamb-bar[data-v-49867178]:nth-child(3){top:30px}.header .logo-ore[data-v-49867178]{left:110px;position:absolute;top:10px;width:56px}.header .logo-ore[data-v-49867178] svg{width:100%}.header .header-right[data-v-49867178]{position:absolute;right:20px;top:20px}.header .bt-view-more[data-v-49867178]{color:#141446;font-size:14px;height:32px;line-height:32px;padding-right:48px;-webkit-text-decoration:underline;text-decoration:underline;text-transform:uppercase;width:118px}.header .bt-view-more[data-v-49867178]:before{background-color:#fff;border-radius:16px;content:\"\";height:32px;position:absolute;right:0;top:0;width:32px}.header .bt-view-more[data-v-49867178]:after{border-color:#141446 transparent transparent;border-style:solid;border-width:7px 5px 0;content:\"\";height:0;position:absolute;right:11px;top:14px;width:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/app-footer.vue?vue&type=template&id=404adc68&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "footer"
  }, [_vm.currCatVehic === 'gaz' || _vm.currCatVehic === 'elec' && _vm.current_territoire && _vm.current_type_territoire && _vm.current_type_territoire.id === 'regions' ? _vm._ssrNode("<div class=\"card\" data-v-404adc68>", "</div>", [!_vm.$store.state.versionEnedis ? _vm._ssrNode("<div class=\"box-switch-type\" data-v-404adc68>", "</div>", [_vm._ssrNode("<div class=\"ico box-padding\" data-v-404adc68>", "</div>", [_vm.currCatVehic === 'gaz' ? _c('vehiculesSVG') : _c('vehiculesGazSVG')], 1), _vm._ssrNode(" <div class=\"title box-padding\" data-v-404adc68>" + (_vm.currCatVehic === 'gaz' ? "<span data-v-404adc68>Découvrez les données pour les véhicules électriques et hybrides\n          rechargeables</span>" : "<span data-v-404adc68>Découvrez les données pour les véhicules au gaz naturel</span>") + "</div> <div class=\"switch-territory\" data-v-404adc68>\n        Voir les données pour ce territoire\n        <span class=\"anchor-right\" data-v-404adc68>" + _vm._s(__webpack_require__(41)) + "</span></div>")], 2) : _vm._e()]) : _vm._e(), _vm._ssrNode(" <div class=\"logos\" data-v-404adc68><div class=\"logos-left\" data-v-404adc68><div class=\"logo-ore\" data-v-404adc68><a href=\"http://www.agenceore.fr/\" target=\"_blank\" data-v-404adc68><span data-v-404adc68>" + _vm._s(__webpack_require__(73)) + "</span></a></div> <div class=\"logo-enedis\" data-v-404adc68><a href=\"https://www.enedis.fr/\" target=\"_blank\" data-v-404adc68><span data-v-404adc68>" + _vm._s(__webpack_require__(111)) + "</span></a></div></div> <div class=\"logos-right no-mobile\" data-v-404adc68><div class=\"logo-wdd\" data-v-404adc68><a href=\"https://wedodata.fr/\" target=\"_blank\" data-v-404adc68><span data-v-404adc68>" + _vm._s(__webpack_require__(79)) + "</span></a></div></div></div> <div class=\"logos-right mobile-only\" data-v-404adc68><div class=\"logo-wdd\" data-v-404adc68><a href=\"https://wedodata.fr/\" target=\"_blank\" data-v-404adc68><span data-v-404adc68>" + _vm._s(__webpack_require__(79)) + "</span></a></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/app-footer.vue?vue&type=template&id=404adc68&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(1);

// EXTERNAL MODULE: ./assets/_svg/vehicules.svg?inline
var vehiculesinline = __webpack_require__(69);
var vehiculesinline_default = /*#__PURE__*/__webpack_require__.n(vehiculesinline);

// EXTERNAL MODULE: ./assets/_svg/vehicules-gaz.svg?inline
var vehicules_gazinline = __webpack_require__(70);
var vehicules_gazinline_default = /*#__PURE__*/__webpack_require__.n(vehicules_gazinline);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/app-footer.vue?vue&type=script&lang=js




/* harmony default export */ var app_footervue_type_script_lang_js = ({
  components: {
    vehiculesSVG: vehiculesinline_default.a,
    vehiculesGazSVG: vehicules_gazinline_default.a
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      current_type_territoire: 'get_current_type_territoire',
      regions: 'get_regions'
    }),
    currCatVehic() {
      // console.log('this.$route.name', this.$route.name)
      if (!this.$route.name) return 'elec';
      return this.$route.name.indexOf('gaz') === 0 ? 'gaz' : 'elec';
    },
    current_territoire() {
      const _self = this;
      if (!_self.$route.params.locationSlug) return null;
      return external_lodash_["find"](this[this.current_type_territoire.id], function (fEntry) {
        return _self.slugify(fEntry.label) === _self.$route.params.locationSlug;
      });
    }
  },
  methods: {
    switchCat() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      if (this.currCatVehic === 'elec') {
        this.$store.commit('set_current_type_vehicule', {
          id: 'total_ve_vhr',
          idAutre: 'total_autre',
          label: 'Tous types',
          labelPlaceholder: 'Véhicules<br>(tous types)',
          slug: 'tous-type'
        });
      }
      const _self = this;
      const pathName = this.currCatVehic === 'gaz' ? 'index-vehicules-electriques-et-hybrides-rechargeables-territoireType-locationSlug' : 'gaz-territoireType-locationSlug';
      this.$router.push({
        name: pathName,
        params: _self.$route.params
      });
    }
  }
});
// CONCATENATED MODULE: ./components/app-footer.vue?vue&type=script&lang=js
 /* harmony default export */ var components_app_footervue_type_script_lang_js = (app_footervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/app-footer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(112)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_app_footervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "404adc68",
  "deca12f8"
  
)

/* harmony default export */ var app_footer = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ render; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ staticRenderFns; });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/app-header.vue?vue&type=template&id=49867178&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "header"
  }, [_vm._ssrNode("<div class=\"header-container\" data-v-49867178>", "</div>", [_vm._ssrNode("<div class=\"burger-bt\" data-v-49867178><div class=\"hamb-bar\" data-v-49867178></div> <div class=\"hamb-bar\" data-v-49867178></div> <div class=\"hamb-bar\" data-v-49867178></div></div> "), _vm._ssrNode("<div class=\"logo-ore\" data-v-49867178>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('span', {
    domProps: {
      "innerHTML": _vm._s(__webpack_require__(73))
    }
  })])], 1), _vm._ssrNode(" <div class=\"header-right\" data-v-49867178><div class=\"bt-view-more\" data-v-49867178>\n        Voir plus\n        <div class=\"view-more-ico\" data-v-49867178></div></div></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/app-header.vue?vue&type=template&id=49867178&scoped=true


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/box-select-page-head.vue?vue&type=template&id=2151ac15&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "selector-box selector-location-electric",
    class: {
      reduced: _vm.reduced
    }
  }, [!_vm.reduced ? _vm._ssrNode("<div class=\"ico box-padding\" data-v-2151ac15>", "</div>", [_vm.catVehic === 'gaz' ? _c('vehiculesGazSVG') : _c('vehiculesSVG')], 1) : _vm._e(), _vm._ssrNode(" " + (!_vm.reduced ? "<div class=\"title box-padding\" data-v-2151ac15>" + (_vm.catVehic === 'gaz' ? "<span data-v-2151ac15>Véhicules particuliers<br data-v-2151ac15>au gaz naturel</span>" : "<span data-v-2151ac15>Véhicules électriques<br data-v-2151ac15>et hybrides rechargeables</span>") + "</div>" : "<!---->") + " " + (!_vm.reduced ? "<div" + _vm._ssrClass("description box-padding", _vm.catVehic) + " data-v-2151ac15></div>" : "<!---->") + " <div id=\"choose-territory\" class=\"select-label box-padding\" data-v-2151ac15>" + (_vm.catVehic === 'gaz' || _vm.currCatVehic === 'gaz' ? "<span data-v-2151ac15>Choisissez une région*</span>" : "<span data-v-2151ac15>Choisissez un type de territoire</span>") + "</div> "), _vm.catVehic === 'elec' && _vm.currCatVehic !== 'gaz' ? _c('selector-radio', {
    staticClass: "selector territoire box-padding",
    class: _vm.catVehic,
    attrs: {
      "items": _vm.$store.getters.get_type_territoires,
      "current": _vm.computed_current_type_territoire,
      "internal-type-territoire": _vm.internalTypeTerritoire
    },
    on: {
      "selectRadio": _vm.setTypeTerritoire
    }
  }) : _vm._e(), _vm._ssrNode(" "), _c('selector-select-location', {
    staticClass: "selector list",
    class: _vm.catVehic,
    attrs: {
      "items": _vm.location_items,
      "panel-open": _vm.panelOpen,
      "current": _vm.current_territoire,
      "internal-type-territoire": _vm.internalTypeTerritoire,
      "search-enabled": _vm.internalTypeTerritoire.id !== 'regions'
    },
    on: {
      "openPanel": function ($event) {
        _vm.panelOpen = true;
      },
      "closePanel": function ($event) {
        _vm.panelOpen = false;
      },
      "selectItem": _vm.selectItem
    }
  }), _vm._ssrNode(" <div class=\"selector-legend\" data-v-2151ac15>" + (_vm.catVehic === 'elec' && _vm.currCatVehic !== 'gaz' ? "<span data-v-2151ac15>*Établissement public de coopération intercommunale</span>" : "<span data-v-2151ac15>*Données disponibles uniquement au niveau régional</span>") + "</div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/box-select-page-head.vue?vue&type=template&id=2151ac15&scoped=true

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(1);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// EXTERNAL MODULE: ./assets/_svg/vehicules.svg?inline
var vehiculesinline = __webpack_require__(69);
var vehiculesinline_default = /*#__PURE__*/__webpack_require__.n(vehiculesinline);

// EXTERNAL MODULE: ./assets/_svg/vehicules-gaz.svg?inline
var vehicules_gazinline = __webpack_require__(70);
var vehicules_gazinline_default = /*#__PURE__*/__webpack_require__.n(vehicules_gazinline);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/box-select-page-head.vue?vue&type=script&lang=js




/* harmony default export */ var box_select_page_headvue_type_script_lang_js = ({
  components: {
    vehiculesSVG: vehiculesinline_default.a,
    vehiculesGazSVG: vehicules_gazinline_default.a
  },
  props: {
    reduced: {
      type: Boolean,
      default: function () {
        return false;
      }
    },
    catVehic: {
      type: String,
      default: function () {
        return 'elec';
      }
    }
  },
  data() {
    return {
      internalTerritoire: 'regions',
      internalTypeTerritoire: null,
      panelOpen: false
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      departements: 'get_departements',
      regions: 'get_regions',
      epci: 'get_EPCI',
      types_territoires: 'get_type_territoires',
      current_type_territoire: 'get_current_type_territoire'
    }),
    computed_current_type_territoire() {
      return this.currCatVehic === 'gaz' || this.catVehic === 'gaz' ? external_lodash_["find"](this.types_territoires, function (fEntry) {
        return fEntry.id === 'regions';
      }) : this.current_type_territoire;
    },
    currCatVehic() {
      return this.$route.name.indexOf('gaz') === 0 ? 'gaz' : 'elec';
    },
    current_territoire() {
      const _self = this;
      if (!_self.$route.params.locationSlug) return null;
      return external_lodash_["find"](this[this.computed_current_type_territoire.id], function (fEntry) {
        return _self.slugify(fEntry.label) === _self.$route.params.locationSlug;
      });
    },
    location_items() {
      const _self = this;
      return _self[_self.internalTypeTerritoire.id];
    }
  },
  watch: {
    '$route.params.locationSlug': function () {
      this.internalTypeTerritoire = this.computed_current_type_territoire;
    },
    '$route.params.territoireType': function () {
      this.internalTypeTerritoire = this.computed_current_type_territoire;
    }
  },
  created() {
    this.internalTypeTerritoire = this.computed_current_type_territoire;
  },
  methods: {
    setTypeTerritoire(fTerritoireType) {
      const _self = this;
      this.internalTypeTerritoire = fTerritoireType;
      this.$store.commit('set_current_type_territoire', fTerritoireType);
      this.$router.push({
        name: 'index-vehicules-electriques-et-hybrides-rechargeables-territoireType-locationSlug',
        params: {
          territoireType: _self.slugify(_self.current_type_territoire.label)
        }
      });
    },
    selectItem(fItem) {
      const _self = this;
      this.panelOpen = false;
      const pathByType = this.currCatVehic === 'gaz' || this.catVehic === 'gaz' ? 'gaz-territoireType-locationSlug' : 'index-vehicules-electriques-et-hybrides-rechargeables-territoireType-locationSlug';
      this.$router.push({
        name: pathByType,
        params: {
          territoireType: _self.slugify(_self.internalTypeTerritoire.label),
          locationSlug: _self.slugify(fItem.label)
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./components/box-select-page-head.vue?vue&type=script&lang=js
 /* harmony default export */ var components_box_select_page_headvue_type_script_lang_js = (box_select_page_headvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/box-select-page-head.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(93)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_box_select_page_headvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2151ac15",
  "70aa2c0c"
  
)

/* harmony default export */ var box_select_page_head = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SelectorRadio: __webpack_require__(88).default,SelectorSelectLocation: __webpack_require__(55).default})


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/module-vehicule-count.vue?vue&type=template&id=454b0375&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card"
  }, [_vm._ssrNode("<div class=\"ico\" data-v-454b0375><div data-v-454b0375>" + _vm._s(__webpack_require__(95)(`./${_vm.current_type_vehicule.slug}.svg`)) + "</div></div> <div class=\"count\" data-v-454b0375>" + _vm._ssrEscape(_vm._s(_vm.numberWithSpaces(_vm.countDatas) || ' ')) + "</div> " + (_vm.currCatVehic !== 'gaz' ? "<div class=\"type\" data-v-454b0375>" + _vm._s(_vm.current_type_vehicule.labelPlaceholder || _vm.current_type_vehicule.label) + "</div>" : "<div class=\"type\" data-v-454b0375>Nombre de véhicules au gaz</div>") + " <div class=\"date\" data-v-454b0375>" + _vm._ssrEscape(_vm._s(_vm.infos['nb' + _vm.currCatVehic])) + "</div> "), _vm.currCatVehic !== 'gaz' ? _c('selector-select-location', {
    staticClass: "selector list",
    attrs: {
      "items": _vm.type_vehicules,
      "panel-open": _vm.panelOpen,
      "current": _vm.current_type_vehicule,
      "use-internal-territoire": false,
      "use-anchor-down": true
    },
    on: {
      "openPanel": function ($event) {
        _vm.panelOpen = true;
      },
      "closePanel": function ($event) {
        _vm.panelOpen = false;
      },
      "selectItem": _vm.selectItem
    }
  }) : _vm._e(), _vm._ssrNode(" <div class=\"source\" data-v-454b0375>" + _vm._ssrEscape("source : " + _vm._s(_vm.currCatVehic === 'elec' ? 'AAAdata' : 'AFGNV')) + "</div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/module-vehicule-count.vue?vue&type=template&id=454b0375&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/module-vehicule-count.vue?vue&type=script&lang=js

/* harmony default export */ var module_vehicule_countvue_type_script_lang_js = ({
  props: {
    countDatas: {
      type: Number,
      default: function () {
        return null;
      }
    }
  },
  data: () => ({
    panelOpen: false
  }),
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      type_vehicules: 'get_type_vehicules',
      current_type_vehicule: 'get_current_type_vehicule',
      infos: 'get_INFOS_v2'
    }),
    currCatVehic() {
      return this.$route.name.indexOf('gaz') === 0 ? 'gaz' : 'elec';
    }
  },
  methods: {
    selectItem(fItem) {
      this.panelOpen = false;
      this.$store.commit('set_current_type_vehicule', fItem);
    }
  }
});
// CONCATENATED MODULE: ./components/module-vehicule-count.vue?vue&type=script&lang=js
 /* harmony default export */ var components_module_vehicule_countvue_type_script_lang_js = (module_vehicule_countvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/module-vehicule-count.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(101)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_module_vehicule_countvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "454b0375",
  "43968971"
  
)

/* harmony default export */ var module_vehicule_count = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SelectorSelectLocation: __webpack_require__(55).default})


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/module-pdc-count.vue?vue&type=template&id=7468c3de&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card"
  }, [_vm._ssrNode("<div class=\"ico\" data-v-7468c3de>" + (_vm.currCatVehic === 'gaz' ? "<div data-v-7468c3de>" + _vm._s(__webpack_require__(103)) + "</div>" : "<div data-v-7468c3de>" + _vm._s(__webpack_require__(104)) + "</div>") + "</div> <div class=\"count\" data-v-7468c3de>" + _vm._ssrEscape(_vm._s(_vm.numberWithSpaces(_vm.countDatas) || ' ')) + "</div> " + (_vm.currCatVehic === 'gaz' ? "<div class=\"type\" data-v-7468c3de>" + _vm._s('stations GNV<br>publiques au total') + "</div>" : "<div class=\"type\" data-v-7468c3de>" + _vm._s('points de charge<br>publiques au total') + "</div>") + " <div class=\"date\" data-v-7468c3de>" + _vm._ssrEscape(_vm._s(_vm.infos['pdc' + _vm.currCatVehic])) + "</div> <div class=\"source\" data-v-7468c3de>" + _vm._ssrEscape("source : " + _vm._s(_vm.currCatVehic === 'elec' ? 'GIREVE' : 'AFGNV')) + "</div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/module-pdc-count.vue?vue&type=template&id=7468c3de&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/module-pdc-count.vue?vue&type=script&lang=js

/* harmony default export */ var module_pdc_countvue_type_script_lang_js = ({
  components: {
    // vehiculeTypeSVG
  },
  props: {
    locationField: {
      type: String,
      default: function () {
        return null;
      }
    },
    locationCode: {
      type: Number,
      default: function () {
        return null;
      }
    },
    countDatas: {
      type: Number,
      default: function () {
        return null;
      }
    }
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      infos: 'get_INFOS_v2'
    }),
    currCatVehic() {
      return this.$route.name.indexOf('gaz') === 0 ? 'gaz' : 'elec';
    }
  },
  data: () => ({
    panelOpen: false
  })
});
// CONCATENATED MODULE: ./components/module-pdc-count.vue?vue&type=script&lang=js
 /* harmony default export */ var components_module_pdc_countvue_type_script_lang_js = (module_pdc_countvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/module-pdc-count.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(105)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_module_pdc_countvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7468c3de",
  "07de77e6"
  
)

/* harmony default export */ var module_pdc_count = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/quintiles-graph.vue?vue&type=template&id=7c572b1a&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.windowWidth >= 640 ? _vm._ssrNode("<div class=\"graphs\" data-v-7c572b1a>", "</div>", [_vm._ssrNode("<div" + _vm._ssrAttr("data-cat", _vm.cat) + " class=\"graph\" data-v-7c572b1a>", "</div>", [_vm._ssrNode("<div class=\"source\" data-v-7c572b1a>" + _vm._ssrEscape("source : " + _vm._s(_vm.currCatVehic === 'elec' ? 'AAAdata' : 'AFGNV')) + "</div> "), _c('highcharts-compo', {
    staticClass: "graph-container",
    class: {
      square: _vm.cat === 'mapping'
    },
    attrs: {
      "options": _vm.graphOptions,
      "chart-height": _vm.chartHeight,
      "bg-image": _vm.cat === 'mapping'
    }
  }), _vm._ssrNode(" <div" + _vm._ssrAttr("data-cat", _vm.cat) + " class=\"graph-background\" data-v-7c572b1a>" + (_vm.currCatVehic !== 'gaz' && _vm.cat === 'vehic' ? "<img" + _vm._ssrAttr("src", __webpack_require__(45)) + " data-v-7c572b1a>" : _vm.currCatVehic !== 'gaz' && _vm.cat === 'pdc' ? "<img" + _vm._ssrAttr("src", __webpack_require__(46)) + " data-v-7c572b1a>" : _vm.currCatVehic === 'gaz' && _vm.cat === 'vehic' ? "<img" + _vm._ssrAttr("src", __webpack_require__(71)) + " data-v-7c572b1a>" : _vm.currCatVehic === 'gaz' && _vm.cat === 'pdc' ? "<img" + _vm._ssrAttr("src", __webpack_require__(72)) + " data-v-7c572b1a>" : "<!---->") + "</div>")], 2), _vm._ssrNode(" <div class=\"ranking-type\" data-v-7c572b1a>" + (_vm.currentTerritoire.type === 'reg' ? "<span data-v-7c572b1a>RÉGIONS</span>" : _vm.currentTerritoire.type === 'dpt' ? "<span data-v-7c572b1a>DÉPARTEMENTS</span>" : _vm.currentTerritoire.type === 'epci' ? "<span data-v-7c572b1a>\n              des EPCI" + (_vm.epciCat.id === 'classe' ? "<span data-v-7c572b1a>" + _vm._ssrEscape(" de même classe (" + _vm._s(_vm.currentTerritoire.classe.replace('CLASSE ', '')) + ")") + "</span>" : "<span data-v-7c572b1a>" + _vm._ssrEscape(" de la même région (" + _vm._s(_vm.current_reg.label) + ")") + "</span>") + "</span>" : "<!---->") + "</div> <div class=\"info-boxes\" data-v-7c572b1a>" + (_vm.graphDatas ? "<div" + _vm._ssrAttr("data-quintile", _vm.graphDatas.CurrQuintile) + " class=\"info-box current\" data-v-7c572b1a><div class=\"info-box-content\" data-v-7c572b1a><div class=\"ranking\" data-v-7c572b1a>" + _vm._s(_vm.graphDatas.CurrRankingText) + "</div> <div class=\"name\" data-v-7c572b1a>" + _vm._ssrEscape(_vm._s(_vm.graphDatas.CurrNameText)) + "</div> <div class=\"desc\" data-v-7c572b1a>" + (_vm.cat === 'vehic' ? "<span data-v-7c572b1a><span class=\"result\" data-v-7c572b1a>" + _vm._ssrEscape(_vm._s(_vm.graphDatas.CurrValueText) + " %") + "</span> de\n              " + (_vm.currCatVehic === 'gaz' ? "<span data-v-7c572b1a>véhicules au gaz</span>" : "<span data-v-7c572b1a>voitures électriques et hybrides rechargeables</span>") + "\n              par rapport au total de véhicules immatriculés\n              <span class=\"volume-data\" data-v-7c572b1a>" + _vm._ssrEscape("soit " + _vm._s(_vm.graphDatas.currValueVol) + " véhicule(s) ") + (_vm.currCatVehic === 'gaz' ? "<span data-v-7c572b1a> au gaz</span>" : "<span data-v-7c572b1a>électriques et hybrides rechargeables</span>") + "<br data-v-7c572b1a>" + _vm._ssrEscape("pour " + _vm._s(_vm.graphDatas.currValueNb) + " véhicules immatriculés") + "</span></span>" : "<span data-v-7c572b1a><span class=\"result\" data-v-7c572b1a>" + _vm._ssrEscape(_vm._s(_vm.graphDatas.CurrValueText) + " ") + (_vm.currCatVehic === 'gaz' ? "<span data-v-7c572b1a>stations GNV</span>" : "<span data-v-7c572b1a>points de charge</span>") + "</span>\n              pour 1000 " + (_vm.currCatVehic === 'gaz' ? "<span data-v-7c572b1a>véhicules au gaz</span>" : "<span data-v-7c572b1a>voitures électriques et hybrides rechargeables</span>") + "<span class=\"volume-data\" data-v-7c572b1a>" + _vm._ssrEscape("soit " + _vm._s(_vm.graphDatas.currValueVol) + " ") + (_vm.currCatVehic === 'gaz' ? "<span data-v-7c572b1a>stations GNV</span>" : "<span data-v-7c572b1a>points de charge</span>") + "</span></span>") + "</div></div></div>" : "<!---->") + " " + (_vm.graphDatas ? "<div" + _vm._ssrAttr("data-quintile", _vm.overItem ? _vm.overItem.quintile : _vm.graphDatas.FirstQuintile) + _vm._ssrClass("info-box", {
    over: _vm.graphDatas && _vm.overItem,
    first: !_vm.overItem
  }) + " data-v-7c572b1a>" + (_vm.graphDatas && _vm.overItem ? "<div class=\"info-box-content\" data-v-7c572b1a><div class=\"ranking\" data-v-7c572b1a>" + _vm._s(_vm.overItem.rankingText) + "</div> <div class=\"name\" data-v-7c572b1a>" + _vm._ssrEscape(_vm._s(_vm.overItem.nameText)) + "</div> <div class=\"desc\" data-v-7c572b1a>" + (_vm.cat === 'vehic' ? "<span data-v-7c572b1a><span class=\"result\" data-v-7c572b1a>" + _vm._ssrEscape(_vm._s(_vm.overItem.valueText)) + "</span> de\n              " + (_vm.currCatVehic === 'gaz' ? "<span data-v-7c572b1a>véhicules au gaz</span>" : "<span data-v-7c572b1a>voitures électriques et hybrides rechargeables</span>") + "\n              par rapport au total de véhicules immatriculés\n              <span class=\"volume-data\" data-v-7c572b1a>" + _vm._ssrEscape("soit " + _vm._s(_vm.overItem.vol) + " véhicule(s) ") + (_vm.currCatVehic === 'gaz' ? "<span data-v-7c572b1a> au gaz</span>" : "<span data-v-7c572b1a>électriques et hybrides rechargeables</span>") + "<br data-v-7c572b1a>" + _vm._ssrEscape("pour " + _vm._s(_vm.overItem.nb) + " véhicules immatriculés") + "</span></span>" : "<span data-v-7c572b1a><span class=\"result\" data-v-7c572b1a>" + _vm._ssrEscape(_vm._s(_vm.overItem.valueText)) + "</span>\n              pour 1000 " + (_vm.currCatVehic === 'gaz' ? "<span data-v-7c572b1a>véhicules au gaz</span>" : "<span data-v-7c572b1a>voitures électriques et hybrides rechargeables</span>") + "<span class=\"volume-data\" data-v-7c572b1a>" + _vm._ssrEscape("soit " + _vm._s(_vm.overItem.vol) + " ") + (_vm.currCatVehic === 'gaz' ? "<span data-v-7c572b1a>stations GNV</span>" : "<span data-v-7c572b1a>points de charge</span>") + "</span></span>") + "</div></div>" : _vm.graphDatas ? "<div class=\"info-box-content\" data-v-7c572b1a><div class=\"ranking\" data-v-7c572b1a>" + _vm._s(_vm.graphDatas.FirstRankingText) + "</div> <div class=\"name\" data-v-7c572b1a>" + _vm._ssrEscape(_vm._s(_vm.graphDatas.FirstNameText)) + "</div> <div class=\"desc\" data-v-7c572b1a>" + (_vm.cat === 'vehic' ? "<span data-v-7c572b1a><span class=\"result\" data-v-7c572b1a>" + _vm._ssrEscape(_vm._s(_vm.graphDatas.FirstValueText) + " %") + "</span> de\n              " + (_vm.currCatVehic === 'gaz' ? "<span data-v-7c572b1a>véhicules au gaz</span>" : "<span data-v-7c572b1a>voitures électriques et hybrides rechargeables</span>") + "\n              par rapport au total de véhicules immatriculés\n              <span class=\"volume-data\" data-v-7c572b1a>" + _vm._ssrEscape("soit " + _vm._s(_vm.graphDatas.FirstValueVol) + " véhicule(s) ") + (_vm.currCatVehic === 'gaz' ? "<span data-v-7c572b1a> au gaz</span>" : "<span data-v-7c572b1a>électriques et hybrides rechargeables</span>") + "<br data-v-7c572b1a>" + _vm._ssrEscape("pour " + _vm._s(_vm.graphDatas.FirstValueNb) + " véhicules immatriculés") + "</span></span>" : "<span data-v-7c572b1a><span class=\"result\" data-v-7c572b1a>" + _vm._ssrEscape(_vm._s(_vm.graphDatas.FirstValueText) + " ") + (_vm.currCatVehic === 'gaz' ? "<span data-v-7c572b1a>stations GNV</span>" : "<span data-v-7c572b1a>points de charge</span>") + "</span>\n              pour 1000\n              " + (_vm.currCatVehic === 'gaz' ? "<span data-v-7c572b1a>véhicules au gaz</span>" : "<span data-v-7c572b1a>véhicules hybrides rechargeables</span>") + "<span class=\"volume-data\" data-v-7c572b1a>" + _vm._ssrEscape("soit " + _vm._s(_vm.graphDatas.FirstValueVol) + " ") + (_vm.currCatVehic === 'gaz' ? "<span data-v-7c572b1a>stations GNV</span>" : "<span data-v-7c572b1a>points de charge</span>") + "</span></span>") + "</div></div>" : "<!---->") + "</div>" : "<!---->") + "</div>")], 2) : _vm.graphDatas ? _c('mobile-classement', {
    attrs: {
      "graph-datas": _vm.graphDatas,
      "epci-cat": _vm.epciCat,
      "regions": _vm.regions,
      "current-territoire": _vm.currentTerritoire,
      "classementType": 'nbVehic'
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/quintiles-graph.vue?vue&type=template&id=7c572b1a&scoped=true

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(1);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/quintiles-graph.vue?vue&type=script&lang=js


/* harmony default export */ var quintiles_graphvue_type_script_lang_js = ({
  props: {
    currentTerritoire: {
      type: Object,
      default: function () {
        return null;
      }
    },
    locationDatas: {
      type: Array,
      default: function () {
        return null;
      }
    },
    quintiles: {
      type: Array,
      default: function () {
        return null;
      }
    },
    cat: {
      type: String,
      default: function () {
        return 'vehic';
      }
    },
    epciCat: {
      type: Object,
      default: function () {
        return null;
      }
    },
    pdcCount: {
      type: Number,
      default: function () {
        return null;
      }
    },
    chartHeight: {
      type: String,
      default: function () {
        return '440px';
      }
    }
  },
  data() {
    const _self = this;
    return {
      overItem: null,
      options: {
        chart: {
          type: 'column',
          title: '',
          backgroundColor: 'transparent',
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0
        },
        credits: {
          enabled: false
        },
        title: {
          text: ''
        },
        plotOptions: {
          series: {
            turboThreshold: 3000,
            // pointPadding: 0,
            // groupPadding: 0.1,
            // pointWidth: 2,
            // borderRadius: 5,
            // maxPointWidth: 32
            point: {
              events: {
                mouseOver: _self.overPoint,
                mouseOut: _self.outPoint
              }
            }
          },
          column: {
            stacking: 'normal',
            borderRadiusTopLeft: 16,
            borderRadiusTopRight: 16
            // maxPointWidth: 10
          }
        },
        xAxis: {
          // width: '70%',
          // left: '15%',
          lineWidth: 4,
          lineColor: '#141446',
          minPadding: 0.04,
          maxPadding: 0.005,
          // categories: ['cat'],
          // maxPadding: 0,
          // tickAmount: 0,
          // left: '22.2%',
          zIndex: 5,
          labels: {
            enabled: false
          }
        },
        legend: {
          enabled: false
        },
        yAxis: {
          title: '',
          labels: {
            formatter: function () {
              if (_self.cat === 'vehic') return this.value + '%';
              return this.value + ' ';
            },
            useHTML: true,
            x: 0,
            align: 'left'
          },
          // overflow: 'allow',
          gridLineDashStyle: 'ShortDot',
          gridLineColor: '#BFBB96',
          showFirstLabel: false
        },
        tooltip: {
          enabled: false
          /*
          formatter: function () {
            return this.point.label + ' : ' + this.point.y
          },
          outside: true,
          */
        },
        series: [{
          data: []
        }]
      }
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      current_type_vehicule: 'get_current_type_vehicule',
      regions: 'get_regions',
      windowWidth: 'get_windowWidth'
    }),
    current_reg() {
      const _self = this;
      if (!_self.$route.params.locationSlug) return null;
      const region = external_lodash_["find"](this.regions, function (fRegion) {
        return fRegion.code === _self.currentTerritoire.code_reg;
      });
      return region;
    },
    graphDatas() {
      const _self = this;
      if (!this.locationDatas) return null;
      let processedDatas = this.locationDatas;
      if (_self.currentTerritoire.type === 'epci') {
        if (_self.epciCat.id === 'classe') {
          processedDatas = external_lodash_["filter"](processedDatas, function (fEntry) {
            return fEntry.classe === _self.currentTerritoire.classe;
          });
        } else {
          processedDatas = external_lodash_["filter"](processedDatas, function (fEntry) {
            return fEntry.code_reg === _self.currentTerritoire.code_reg;
          });
        }
      }

      // console.log('processedDatas', processedDatas)
      const resultsCount = processedDatas.length;
      let graphDatas = external_lodash_["map"](processedDatas, function (fEntry, fEntryIndex) {
        // let y
        // console.log('>>>fEntry', fEntry)
        const returnedObj = {};
        if (_self.cat === 'pdc') {
          if (_self.currCatVehic === 'gaz') {
            returnedObj.y = parseFloat((fEntry.stations_gnv_reg * 1000 / fEntry.c_total_gnv).toFixed(2));
            returnedObj.nb = fEntry.c_total_gnv;
            returnedObj.vol = fEntry.stations_gnv_reg;
          } else {
            returnedObj.y = parseFloat((fEntry.sum_pdc * 1000 / fEntry['c_' + _self.current_type_vehicule.id]).toFixed(1));
            returnedObj.nb = fEntry['c_' + _self.current_type_vehicule.id];
            returnedObj.vol = fEntry.sum_pdc;
          }
          // console.log(fEntry.label, fEntry.sum_pdc, fEntry['c_' + _self.current_type_vehicule.id], y)
        } else if (_self.cat === 'mapping') {
          if (_self.currCatVehic === 'gaz') {
            const pdc = parseFloat((fEntry.stations_gnv_reg * 1000 / fEntry.c_total_gnv).toFixed(1));
            const perc = parseFloat((fEntry.c_total_gnv / fEntry.c_total_autre * 100).toFixed(1));
            returnedObj.x = perc;
            returnedObj.y = pdc;
          } else {
            const pdc = parseFloat((fEntry.sum_pdc * 1000 / fEntry['c_' + _self.current_type_vehicule.id]).toFixed(1));
            const perc = parseFloat((fEntry['c_' + _self.current_type_vehicule.id] / fEntry['c_' + _self.current_type_vehicule.idAutre] * 100).toFixed(1));
            returnedObj.x = perc;
            returnedObj.y = pdc;
          }
        } else if (_self.cat === 'vehic') {
          if (_self.currCatVehic === 'gaz') {
            returnedObj.y = parseFloat((fEntry.c_total_gnv / fEntry.c_total_autre * 100).toFixed(2));
            returnedObj.nb = fEntry.c_total_autre;
            returnedObj.vol = fEntry.c_total_gnv;
          } else {
            returnedObj.y = parseFloat((fEntry['c_' + _self.current_type_vehicule.id] / fEntry['c_' + _self.current_type_vehicule.idAutre] * 100).toFixed(2));
            returnedObj.nb = fEntry['c_' + _self.current_type_vehicule.idAutre];
            returnedObj.vol = fEntry['c_' + _self.current_type_vehicule.id];
          }
        }
        return {
          ...returnedObj,
          code: fEntry.code,
          label: fEntry.label,
          sum_pdc: fEntry.sum_pdc,
          indic_val: fEntry['c_' + _self.current_type_vehicule.id],
          indic_autre: fEntry['c_' + _self.current_type_vehicule.idAutre]
        };
      });
      // console.log('graphDatas>>', graphDatas)
      let current = external_lodash_["find"](graphDatas, function (fEntry) {
        return fEntry.code === _self.currentTerritoire.code;
      });
      if (!current) return null;
      graphDatas = external_lodash_["sortBy"](graphDatas, function (fEntry) {
        return -fEntry.y;
      });
      graphDatas = external_lodash_["map"](graphDatas, function (fEntry, fEntryIndex) {
        const calcPos = Math.ceil(fEntryIndex / (resultsCount / 5)) - 1;
        const quintileIndex = calcPos >= 0 ? calcPos : 0;
        return {
          ...fEntry,
          color: _self.cat === 'mapping' ? 'rgba(67, 110, 177, 0.9)' : _self.quintiles[quintileIndex].color,
          borderColor: current.code === fEntry.code ? '#141446' : 'rgba(255,255,255,0)',
          borderWidth: current.code === fEntry.code ? 3 : 0.1,
          ranking: fEntryIndex + 1,
          quintile: quintileIndex + 1,
          dataLabels: {
            enabled: current.code === fEntry.code
          }
        };
      });
      current = external_lodash_["find"](graphDatas, function (fEntry) {
        return fEntry.code === _self.currentTerritoire.code;
      });
      const first = graphDatas[0];
      let txtType = _self.currentTerritoire.type === 'region' ? ' régions' : ' départements';
      const regObject = external_lodash_["find"](this.regions, function (fEntry) {
        return fEntry.code === _self.currentTerritoire.code_reg;
      });
      if (_self.currentTerritoire.type === 'epci') {
        if (_self.epciCat.id === 'classe') {
          txtType = ' EPCI de ' + _self.currentTerritoire.classe;
        } else {
          txtType = ' EPCI en ' + regObject.label;
        }
      }
      let CurrValueText = current.y;
      const currValueVol = current.vol;
      const currValueNb = current.nb;
      if (_self.cat === 'pdc') {
        if (_self.currCatVehic === 'gaz') {
          CurrValueText = current.y;
        } else {
          CurrValueText = Math.round(current.y);
        }
      } else {
        CurrValueText = current.y;
      }
      let FirstValueText = first.y;
      const FirstValueVol = first.vol;
      const FirstValueNb = first.nb;
      if (_self.cat === 'pdc') {
        if (_self.currCatVehic === 'gaz') {
          FirstValueText = first.y;
        } else {
          FirstValueText = Math.round(first.y);
        }
      } else {
        FirstValueText = first.y;
      }
      return {
        series: graphDatas,
        CurrRankingText: _self.formatRanking(current.ranking) + ' sur ' + graphDatas.length + txtType,
        CurrValueText,
        currValueVol,
        currValueNb,
        CurrNameText: current.label,
        CurrQuintile: current.quintile,
        FirstRankingText: _self.formatRanking(first.ranking) + ' sur ' + graphDatas.length + txtType,
        FirstValueText,
        FirstValueVol,
        FirstValueNb,
        FirstNameText: first.label,
        FirstQuintile: first.quintile
      };
    },
    graphOptions() {
      const _self = this;
      const graphOptions = external_lodash_["cloneDeep"](this.options);
      if (_self.cat === 'mapping') {
        graphOptions.chart.type = 'scatter';
        graphOptions.chart.zoomType = 'xy';
        graphOptions.chart.marginBottom = undefined;
        graphOptions.xAxis.min = 0;
        graphOptions.xAxis.labels.enabled = true;
        graphOptions.xAxis.gridLineWidth = 1;
        graphOptions.xAxis.gridLineDashStyle = 'ShortDot';
        graphOptions.xAxis.gridLineColor = '#BFBB96';
        graphOptions.xAxis.tickInterval = 0.2;
        graphOptions.yAxis.tickInterval = 10;
        graphOptions.yAxis.min = 0;
      }
      if (_self.graphDatas && _self.graphDatas.series) {
        graphOptions.plotOptions.column.dataLabels = {
          enabled: true,
          useHTML: true,
          crop: false,
          overflow: 'allow',
          formatter: function () {
            return '<div class="col-rd-current"></div>';
          },
          verticalAlign: 'top',
          y: -25
          /* y: 25 */ /* ,
                      verticalAlign: 'bottom' */
        };
        if (_self.graphDatas.series.length > 190) {
          graphOptions.plotOptions.column.borderRadiusTopLeft = undefined;
          graphOptions.plotOptions.column.borderRadiusTopRight = undefined;
          graphOptions.plotOptions.column.pointPadding = 0;
          graphOptions.plotOptions.column.groupPadding = 0;
          graphOptions.plotOptions.column.borderWidth = 0;
        } else {
          graphOptions.plotOptions.column.borderRadiusTopLeft = 16;
          graphOptions.plotOptions.column.borderRadiusTopRight = 16;
          graphOptions.plotOptions.column.pointPadding = 0.1;
          graphOptions.plotOptions.column.groupPadding = 0.2;
          graphOptions.plotOptions.column.borderWidth = undefined;
        }
      }
      if (this.graphDatas) {
        graphOptions.series[0].data = _self.graphDatas.series;
      }
      // console.log('graphOptions', graphOptions)
      return graphOptions;
    },
    currCatVehic() {
      return this.$route.name.indexOf('gaz') === 0 ? 'gaz' : 'elec';
    }
  },
  methods: {
    formatRanking(fNum) {
      if (fNum === 1) {
        return '1<sup>er</sup>';
      } else {
        return fNum + '<sup>e</sup>';
      }
    },
    overPoint(fEv) {
      const _self = this;
      const target = external_lodash_["find"](this.graphDatas.series, function (fEntry) {
        return fEntry.code === fEv.target.code;
      });
      let valueText = target.y;
      // console.log('target', target)
      if (_self.cat === 'pdc') {
        if (_self.currCatVehic === 'gaz') {
          valueText = target.y + ' stations GNV';
        } else {
          valueText = Math.round(target.y) + ' points de charge';
        }
      } else {
        valueText = target.y + '%';
      }
      const txtType = _self.currentTerritoire.type === 'reg' ? ' régions' : ' départements';
      this.overItem = {
        ...target,
        rankingText: target.ranking + ' sur ' + _self.graphDatas.series.length + ' ' + txtType,
        valueText,
        nameText: target.label,
        quintile: target.quintile
      };
    },
    outPoint(fEv) {
      this.overItem = null;
    }
  }
});
// CONCATENATED MODULE: ./components/quintiles-graph.vue?vue&type=script&lang=js
 /* harmony default export */ var components_quintiles_graphvue_type_script_lang_js = (quintiles_graphvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/quintiles-graph.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(107)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_quintiles_graphvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7c572b1a",
  "32d4d1b0"
  
)

/* harmony default export */ var quintiles_graph = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HighchartsCompo: __webpack_require__(43).default,MobileClassement: __webpack_require__(89).default})


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/quintiles-graph-reversepdc.vue?vue&type=template&id=6dbd4fdb&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.windowWidth >= 640 ? _vm._ssrNode("<div class=\"graphs\" data-v-6dbd4fdb>", "</div>", [_vm._ssrNode("<div" + _vm._ssrAttr("data-cat", _vm.cat) + " class=\"graph\" data-v-6dbd4fdb>", "</div>", [_vm._ssrNode("<div class=\"source\" data-v-6dbd4fdb>" + _vm._ssrEscape("source : " + _vm._s(_vm.currCatVehic === 'elec' ? 'AAAdata et GIREVE' : 'AFGNV')) + "</div> "), _c('highcharts-compo', {
    staticClass: "graph-container",
    class: {
      square: _vm.cat === 'mapping'
    },
    attrs: {
      "options": _vm.graphOptions,
      "chart-height": _vm.chartHeight,
      "bg-image": _vm.cat === 'mapping'
    }
  }), _vm._ssrNode(" <div" + _vm._ssrAttr("data-cat", _vm.cat) + " class=\"graph-background\" data-v-6dbd4fdb>" + (_vm.currCatVehic !== 'gaz' && _vm.cat === 'vehic' ? "<img" + _vm._ssrAttr("src", __webpack_require__(45)) + " data-v-6dbd4fdb>" : _vm.currCatVehic !== 'gaz' && _vm.cat === 'pdc' ? "<img" + _vm._ssrAttr("src", __webpack_require__(46)) + " data-v-6dbd4fdb>" : _vm.currCatVehic === 'gaz' && _vm.cat === 'vehic' ? "<img" + _vm._ssrAttr("src", __webpack_require__(71)) + " data-v-6dbd4fdb>" : _vm.currCatVehic === 'gaz' && _vm.cat === 'pdc' ? "<img" + _vm._ssrAttr("src", __webpack_require__(72)) + " data-v-6dbd4fdb>" : "<!---->") + "</div>")], 2), _vm._ssrNode(" <div class=\"ranking-type\" data-v-6dbd4fdb>" + (_vm.currentTerritoire.type === 'reg' ? "<span data-v-6dbd4fdb>RÉGIONS</span>" : _vm.currentTerritoire.type === 'dpt' ? "<span data-v-6dbd4fdb>DÉPARTEMENTS</span>" : _vm.currentTerritoire.type === 'epci' ? "<span data-v-6dbd4fdb>\n              des EPCI" + (_vm.epciCat.id === 'classe' ? "<span data-v-6dbd4fdb>" + _vm._ssrEscape(" de même classe (" + _vm._s(_vm.currentTerritoire.classe.replace('CLASSE ', '')) + ")") + "</span>" : "<span data-v-6dbd4fdb>" + _vm._ssrEscape(" de la même région (" + _vm._s(_vm.current_reg.label) + ")") + "</span>") + "</span>" : "<!---->") + "</div> <div class=\"info-boxes\" data-v-6dbd4fdb>" + (_vm.graphDatas ? "<div" + _vm._ssrAttr("data-quintile", _vm.graphDatas.CurrQuintile) + " class=\"info-box current\" data-v-6dbd4fdb><div class=\"info-box-content\" data-v-6dbd4fdb><div class=\"ranking\" data-v-6dbd4fdb>" + _vm._s(_vm.graphDatas.CurrRankingText) + "</div> <div class=\"name\" data-v-6dbd4fdb>" + _vm._ssrEscape(_vm._s(_vm.graphDatas.CurrNameText)) + "</div> <div class=\"desc\" data-v-6dbd4fdb>" + (_vm.cat === 'vehic' ? "<span data-v-6dbd4fdb><span class=\"result\" data-v-6dbd4fdb>" + _vm._ssrEscape(_vm._s(_vm.graphDatas.CurrValueText) + " %") + "</span> de\n              " + (_vm.currCatVehic === 'gaz' ? "<span data-v-6dbd4fdb>véhicules au gaz</span>" : "<span data-v-6dbd4fdb>voitures électriques et hybrides rechargeables</span>") + "\n              par rapport au total de véhicules immatriculés\n              <span class=\"volume-data\" data-v-6dbd4fdb>" + _vm._ssrEscape("soit " + _vm._s(_vm.graphDatas.currValueVol) + " véhicule(s) ") + (_vm.currCatVehic === 'gaz' ? "<span data-v-6dbd4fdb> au gaz</span>" : "<span data-v-6dbd4fdb>électriques et hybrides rechargeables</span>") + "</span></span>" : "<span data-v-6dbd4fdb><span class=\"result\" data-v-6dbd4fdb>" + _vm._ssrEscape(_vm._s(_vm.graphDatas.CurrValueText) + " ") + (_vm.currCatVehic === 'gaz' ? "<span data-v-6dbd4fdb>véhicules au gaz</span>" : "<span data-v-6dbd4fdb>véhicules électriques et hybrides rechargeables</span>") + "</span>\n              par " + (_vm.currCatVehic === 'gaz' ? "<span data-v-6dbd4fdb>station GNV</span>" : "<span data-v-6dbd4fdb>point de charge</span>") + "<span class=\"volume-data\" data-v-6dbd4fdb>" + _vm._ssrEscape("soit " + _vm._s(_vm.graphDatas.currValueVol)) + (_vm.currCatVehic === 'gaz' ? "<span data-v-6dbd4fdb>stations GNV</span>" : "<span data-v-6dbd4fdb>points de charge</span>") + _vm._ssrEscape(" pour " + _vm._s(_vm.graphDatas.currValueNb) + " ") + (_vm.currCatVehic === 'gaz' ? "<span data-v-6dbd4fdb>véhicules au gaz</span>" : "<span data-v-6dbd4fdb>véhicules électriques et hybrides rechargeables</span>") + "</span></span>") + "</div></div></div>" : "<!---->") + " " + (_vm.graphDatas ? "<div" + _vm._ssrAttr("data-quintile", _vm.overItem ? _vm.overItem.quintile : _vm.graphDatas.FirstQuintile) + _vm._ssrClass("info-box", {
    over: _vm.graphDatas && _vm.overItem,
    first: !_vm.overItem
  }) + " data-v-6dbd4fdb>" + (_vm.graphDatas && _vm.overItem ? "<div class=\"info-box-content\" data-v-6dbd4fdb><div class=\"ranking\" data-v-6dbd4fdb>" + _vm._s(_vm.overItem.rankingText) + "</div> <div class=\"name\" data-v-6dbd4fdb>" + _vm._ssrEscape(_vm._s(_vm.overItem.nameText)) + "</div> <div class=\"desc\" data-v-6dbd4fdb>" + (_vm.cat === 'vehic' ? "<span data-v-6dbd4fdb><span class=\"result\" data-v-6dbd4fdb>" + _vm._ssrEscape(_vm._s(_vm.overItem.valueText)) + "</span> de\n              " + (_vm.currCatVehic === 'gaz' ? "<span data-v-6dbd4fdb>véhicules au gaz</span>" : "<span data-v-6dbd4fdb>voitures électriques et hybrides rechargeables</span>") + "\n              par rapport au total de véhicules immatriculés\n              <span class=\"volume-data\" data-v-6dbd4fdb>" + _vm._ssrEscape("soit " + _vm._s(_vm.overItem.vol) + " véhicule(s) ") + (_vm.currCatVehic === 'gaz' ? "<span data-v-6dbd4fdb> au gaz</span>" : "<span data-v-6dbd4fdb>électriques et hybrides rechargeables</span>") + "</span></span>" : "<span data-v-6dbd4fdb><span class=\"result\" data-v-6dbd4fdb>" + _vm._ssrEscape(_vm._s(_vm.overItem.valueText) + " ") + (_vm.currCatVehic === 'gaz' ? "<span data-v-6dbd4fdb>véhicules au gaz</span>" : "<span data-v-6dbd4fdb>véhicules électriques et hybrides rechargeables</span>") + "</span>\n              par " + (_vm.currCatVehic === 'gaz' ? "<span data-v-6dbd4fdb>station GNV</span>" : "<span data-v-6dbd4fdb>point de charge</span>") + "<span class=\"volume-data\" data-v-6dbd4fdb>" + _vm._ssrEscape("soit " + _vm._s(_vm.overItem.vol) + " ") + (_vm.currCatVehic === 'gaz' ? "<span data-v-6dbd4fdb>stations GNV</span>" : "<span data-v-6dbd4fdb>points de charge</span>") + _vm._ssrEscape(" pour " + _vm._s(_vm.overItem.nb) + " ") + (_vm.currCatVehic === 'gaz' ? "<span data-v-6dbd4fdb>véhicules au gaz</span>" : "<span data-v-6dbd4fdb>véhicules électriques et hybrides rechargeables</span>") + "</span></span>") + "</div></div>" : _vm.graphDatas ? "<div class=\"info-box-content\" data-v-6dbd4fdb><div class=\"ranking\" data-v-6dbd4fdb>" + _vm._s(_vm.graphDatas.FirstRankingText) + "</div> <div class=\"name\" data-v-6dbd4fdb>" + _vm._ssrEscape(_vm._s(_vm.graphDatas.FirstNameText)) + "</div> <div class=\"desc\" data-v-6dbd4fdb>" + (_vm.cat === 'vehic' ? "<span data-v-6dbd4fdb><span class=\"result\" data-v-6dbd4fdb>" + _vm._ssrEscape(_vm._s(_vm.graphDatas.FirstValueText) + " %") + "</span> de\n              " + (_vm.currCatVehic === 'gaz' ? "<span data-v-6dbd4fdb>véhicules au gaz</span>" : "<span data-v-6dbd4fdb>voitures électriques et hybrides rechargeables</span>") + "\n              par rapport au total de véhicules immatriculés\n              <span class=\"volume-data\" data-v-6dbd4fdb>" + _vm._ssrEscape("soit " + _vm._s(_vm.graphDatas.FirstValueVol) + " véhicule(s) ") + (_vm.currCatVehic === 'gaz' ? "<span data-v-6dbd4fdb> au gaz</span>" : "<span data-v-6dbd4fdb>électriques et hybrides rechargeables</span>") + "</span></span>" : "<span data-v-6dbd4fdb><span class=\"result\" data-v-6dbd4fdb>" + _vm._ssrEscape(_vm._s(_vm.graphDatas.FirstValueText) + " ") + (_vm.currCatVehic === 'gaz' ? "<span data-v-6dbd4fdb>véhicules au gaz</span>" : "<span data-v-6dbd4fdb>véhicules électriques et hybrides rechargeables</span>") + "</span>\n              par " + (_vm.currCatVehic === 'gaz' ? "<span data-v-6dbd4fdb>station GNV</span>" : "<span data-v-6dbd4fdb>point de charge</span>") + "<span class=\"volume-data\" data-v-6dbd4fdb>" + _vm._ssrEscape("soit " + _vm._s(_vm.graphDatas.FirstValueVol) + " ") + (_vm.currCatVehic === 'gaz' ? "<span data-v-6dbd4fdb>stations GNV</span>" : "<span data-v-6dbd4fdb>points de charge</span>") + _vm._ssrEscape(" pour " + _vm._s(_vm.graphDatas.FirstValueNb) + " ") + (_vm.currCatVehic === 'gaz' ? "<span data-v-6dbd4fdb>véhicules au gaz</span>" : "<span data-v-6dbd4fdb>véhicules électriques et hybrides rechargeables</span>") + "</span></span>") + "</div></div>" : "<!---->") + "</div>" : "<!---->") + "</div>")], 2) : _vm.graphDatas ? _c('mobile-classement-reverse', {
    attrs: {
      "graph-datas": _vm.graphDatas,
      "epci-cat": _vm.epciCat,
      "regions": _vm.regions,
      "current-territoire": _vm.currentTerritoire,
      "classementType": 'nbPDC'
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/quintiles-graph-reversepdc.vue?vue&type=template&id=6dbd4fdb&scoped=true

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(1);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/quintiles-graph-reversepdc.vue?vue&type=script&lang=js


/* harmony default export */ var quintiles_graph_reversepdcvue_type_script_lang_js = ({
  props: {
    currentTerritoire: {
      type: Object,
      default: function () {
        return null;
      }
    },
    locationDatas: {
      type: Array,
      default: function () {
        return null;
      }
    },
    quintiles: {
      type: Array,
      default: function () {
        return null;
      }
    },
    cat: {
      type: String,
      default: function () {
        return 'vehic';
      }
    },
    epciCat: {
      type: Object,
      default: function () {
        return null;
      }
    },
    pdcCount: {
      type: Number,
      default: function () {
        return null;
      }
    },
    chartHeight: {
      type: String,
      default: function () {
        return '440px';
      }
    }
  },
  data() {
    const _self = this;
    return {
      overItem: null,
      options: {
        chart: {
          type: 'column',
          title: '',
          backgroundColor: 'transparent',
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0
        },
        credits: {
          enabled: false
        },
        title: {
          text: ''
        },
        plotOptions: {
          series: {
            turboThreshold: 3000,
            // pointPadding: 0,
            // groupPadding: 0.1,
            // pointWidth: 2,
            // borderRadius: 5,
            // maxPointWidth: 32
            point: {
              events: {
                mouseOver: _self.overPoint,
                mouseOut: _self.outPoint
              }
            }
          },
          column: {
            stacking: 'normal',
            borderRadiusTopLeft: 16,
            borderRadiusTopRight: 16
            // maxPointWidth: 10
          }
        },
        xAxis: {
          // width: '70%',
          // left: '15%',
          lineWidth: 4,
          lineColor: '#141446',
          minPadding: 0.04,
          maxPadding: 0.005,
          // categories: ['cat'],
          // maxPadding: 0,
          // tickAmount: 0,
          // left: '22.2%',
          zIndex: 5,
          labels: {
            enabled: false
          }
        },
        legend: {
          enabled: false
        },
        yAxis: {
          title: '',
          labels: {
            formatter: function () {
              if (_self.cat === 'vehic') return this.value + '%';
              return this.value + ' ';
            },
            useHTML: true,
            x: 0,
            align: 'left'
          },
          // overflow: 'allow',
          gridLineDashStyle: 'ShortDot',
          gridLineColor: '#BFBB96',
          showFirstLabel: false
        },
        tooltip: {
          enabled: false
          /*
          formatter: function () {
            return this.point.label + ' : ' + this.point.y
          },
          outside: true,
          */
        },
        series: [{
          data: []
        }]
      }
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      current_type_vehicule: 'get_current_type_vehicule',
      regions: 'get_regions',
      windowWidth: 'get_windowWidth'
    }),
    current_reg() {
      const _self = this;
      if (!_self.$route.params.locationSlug) return null;
      const region = external_lodash_["find"](this.regions, function (fRegion) {
        return fRegion.code === _self.currentTerritoire.code_reg;
      });
      return region;
    },
    graphDatas() {
      const _self = this;
      if (!this.locationDatas) return null;
      let processedDatas = this.locationDatas;
      if (_self.currentTerritoire.type === 'epci') {
        if (_self.epciCat.id === 'classe') {
          processedDatas = external_lodash_["filter"](processedDatas, function (fEntry) {
            return fEntry.classe === _self.currentTerritoire.classe;
          });
        } else {
          processedDatas = external_lodash_["filter"](processedDatas, function (fEntry) {
            return fEntry.code_reg === _self.currentTerritoire.code_reg;
          });
        }
      }

      // console.log('processedDatas', processedDatas)
      const resultsCount = processedDatas.length;
      let graphDatas = external_lodash_["map"](processedDatas, function (fEntry, fEntryIndex) {
        // let y
        // console.log('>>>fEntry', fEntry)
        const returnedObj = {};
        if (_self.cat === 'pdc') {
          if (_self.currCatVehic === 'gaz') {
            returnedObj.y = fEntry.stations_gnv_reg ? parseFloat((fEntry.c_total_gnv / fEntry.stations_gnv_reg).toFixed(2)
            /*
            ((fEntry.stations_gnv_reg * 1000) / fEntry.c_total_gnv).toFixed(2)
            */) : 0;
            returnedObj.nb = fEntry.c_total_gnv;
            returnedObj.vol = fEntry.stations_gnv_reg;
          } else {
            returnedObj.y = fEntry.sum_pdc ? parseFloat((fEntry['c_' + _self.current_type_vehicule.id] / fEntry.sum_pdc
            /*
            (fEntry.sum_pdc * 1000) /
            fEntry['c_' + _self.current_type_vehicule.id]
            */).toFixed(1)) : 0;
            returnedObj.nb = fEntry['c_' + _self.current_type_vehicule.id];
            returnedObj.vol = fEntry.sum_pdc;
          }
          // console.log(fEntry.label, fEntry.sum_pdc, fEntry['c_' + _self.current_type_vehicule.id], y)
        } else if (_self.cat === 'mapping') {
          if (_self.currCatVehic === 'gaz') {
            const pdc = fEntry.c_total_gnv ? parseFloat((fEntry.stations_gnv_reg / fEntry.c_total_gnv).toFixed(1)) : 0;
            const perc = fEntry.c_total_autre ? parseFloat((fEntry.c_total_gnv / fEntry.c_total_autre * 100).toFixed(1)) : 0;
            returnedObj.x = perc;
            returnedObj.y = pdc;
          } else {
            const pdc = fEntry['c_' + _self.current_type_vehicule.id] ? parseFloat((fEntry.sum_pdc * 1000 / fEntry['c_' + _self.current_type_vehicule.id]).toFixed(1)) : 0;
            const perc = fEntry['c_' + _self.current_type_vehicule.idAutre] ? parseFloat((fEntry['c_' + _self.current_type_vehicule.id] / fEntry['c_' + _self.current_type_vehicule.idAutre] * 100).toFixed(1)) : 0;
            returnedObj.x = perc;
            returnedObj.y = pdc;
          }
        } else if (_self.cat === 'vehic') {
          if (_self.currCatVehic === 'gaz') {
            returnedObj.y = fEntry.c_total_autre ? parseFloat((fEntry.c_total_gnv / fEntry.c_total_autre * 100).toFixed(2)) : 0;
            returnedObj.vol = fEntry.c_total_gnv;
          } else {
            returnedObj.y = fEntry['c_' + _self.current_type_vehicule.idAutre] ? parseFloat((fEntry['c_' + _self.current_type_vehicule.id] / fEntry['c_' + _self.current_type_vehicule.idAutre] * 100).toFixed(2)) : 0;
            returnedObj.vol = fEntry['c_' + _self.current_type_vehicule.id];
          }
        }
        return {
          ...returnedObj,
          code: fEntry.code,
          label: fEntry.label,
          sum_pdc: fEntry.sum_pdc,
          indic_val: fEntry['c_' + _self.current_type_vehicule.id],
          indic_autre: fEntry['c_' + _self.current_type_vehicule.idAutre]
        };
      });
      let current = external_lodash_["find"](graphDatas, function (fEntry) {
        return fEntry.code === _self.currentTerritoire.code;
      });
      if (!current) return null;
      graphDatas = external_lodash_["sortBy"](graphDatas, function (fEntry) {
        // return -fEntry.y
        return fEntry.y;
      });
      graphDatas = external_lodash_["map"](graphDatas, function (fEntry, fEntryIndex) {
        const calcPos = Math.ceil(fEntryIndex / (resultsCount / 5)) - 1;
        const quintileIndex = calcPos >= 0 ? calcPos : 0;
        return {
          ...fEntry,
          color: _self.cat === 'mapping' ? 'rgba(67, 110, 177, 0.9)' : _self.quintiles[quintileIndex].color,
          borderColor: current.code === fEntry.code ? '#141446' : 'rgba(255,255,255,0)',
          borderWidth: current.code === fEntry.code ? 3 : 0.1,
          ranking: fEntryIndex + 1,
          quintile: quintileIndex + 1,
          dataLabels: {
            enabled: current.code === fEntry.code
          }
        };
      });
      current = external_lodash_["find"](graphDatas, function (fEntry) {
        return fEntry.code === _self.currentTerritoire.code;
      });
      const first = graphDatas[0];
      let txtType = _self.currentTerritoire.type === 'reg' ? ' régions' : ' départements';
      const regObject = external_lodash_["find"](this.regions, function (fEntry) {
        return fEntry.code === _self.currentTerritoire.code_reg;
      });
      if (_self.currentTerritoire.type === 'epci') {
        if (_self.epciCat.id === 'classe') {
          txtType = ' EPCI de ' + _self.currentTerritoire.classe;
        } else {
          txtType = ' EPCI en ' + regObject.label;
        }
      }
      let CurrValueText = current.y;
      const currValueVol = current.vol;
      const currValueNb = current.nb;
      if (_self.cat === 'pdc') {
        if (_self.currCatVehic === 'gaz') {
          CurrValueText = current.y;
        } else {
          CurrValueText = current.y;
        }
      } else {
        CurrValueText = current.y;
      }
      let FirstValueText = first.y;
      const FirstValueVol = first.vol;
      const FirstValueNb = first.nb;
      if (_self.cat === 'pdc') {
        if (_self.currCatVehic === 'gaz') {
          FirstValueText = first.y;
        } else {
          FirstValueText = first.y;
        }
      } else {
        FirstValueText = first.y;
      }
      return {
        txtType,
        series: graphDatas,
        CurrRankingText: _self.formatRanking(current.ranking) + ' sur ' + graphDatas.length + txtType,
        CurrValueText,
        currValueVol,
        currValueNb,
        CurrNameText: current.label,
        CurrQuintile: current.quintile,
        FirstRankingText: _self.formatRanking(first.ranking) + ' sur ' + graphDatas.length + txtType,
        FirstValueText,
        FirstValueVol,
        FirstValueNb,
        FirstNameText: first.label,
        FirstQuintile: first.quintile
      };
    },
    graphOptions() {
      const _self = this;
      const graphOptions = external_lodash_["cloneDeep"](this.options);
      if (_self.cat === 'mapping') {
        graphOptions.chart.type = 'scatter';
        graphOptions.chart.zoomType = 'xy';
        graphOptions.chart.marginBottom = undefined;
        graphOptions.xAxis.min = 0;
        graphOptions.xAxis.labels.enabled = true;
        graphOptions.xAxis.gridLineWidth = 1;
        graphOptions.xAxis.gridLineDashStyle = 'ShortDot';
        graphOptions.xAxis.gridLineColor = '#BFBB96';
        graphOptions.xAxis.tickInterval = 0.2;
        graphOptions.yAxis.tickInterval = 10;
        graphOptions.yAxis.min = 0;
      }
      if (_self.graphDatas && _self.graphDatas.series) {
        graphOptions.plotOptions.column.dataLabels = {
          enabled: true,
          useHTML: true,
          crop: false,
          overflow: 'allow',
          formatter: function () {
            return '<div class="col-rd-current"></div>';
          },
          verticalAlign: 'top',
          y: -25
          /* y: 25 */ /* ,
                      verticalAlign: 'bottom' */
        };
        if (_self.graphDatas.series.length > 190) {
          graphOptions.plotOptions.column.borderRadiusTopLeft = undefined;
          graphOptions.plotOptions.column.borderRadiusTopRight = undefined;
          graphOptions.plotOptions.column.pointPadding = 0;
          graphOptions.plotOptions.column.groupPadding = 0;
          graphOptions.plotOptions.column.borderWidth = 0;
        } else {
          graphOptions.plotOptions.column.borderRadiusTopLeft = 16;
          graphOptions.plotOptions.column.borderRadiusTopRight = 16;
          graphOptions.plotOptions.column.pointPadding = 0.1;
          graphOptions.plotOptions.column.groupPadding = 0.2;
          graphOptions.plotOptions.column.borderWidth = undefined;
        }
      }
      if (this.graphDatas) {
        graphOptions.series[0].data = _self.graphDatas.series;
      }
      // console.log('graphOptions', graphOptions)
      return graphOptions;
    },
    currCatVehic() {
      return this.$route.name.indexOf('gaz') === 0 ? 'gaz' : 'elec';
    }
  },
  methods: {
    formatRanking(fNum) {
      if (fNum === 1) {
        return '1<sup>er</sup>';
      } else {
        return fNum + '<sup>e</sup>';
      }
    },
    overPoint(fEv) {
      const _self = this;
      const target = external_lodash_["find"](this.graphDatas.series, function (fEntry) {
        return fEntry.code === fEv.target.code;
      });
      let valueText = target.y;
      // console.log('target', target)
      if (_self.cat === 'pdc') {
        if (_self.currCatVehic === 'gaz') {
          // valueText = target.y + ' stations GNV'
        } else {
          // valueText = Math.round(target.y) + ' points de charge'
        }
      } else {
        valueText = target.y + '%';
      }
      const txtType = _self.currentTerritoire.type === 'reg' ? ' régions' : ' départements';
      this.overItem = {
        ...target,
        rankingText: _self.formatRanking(target.ranking) + ' sur ' + _self.graphDatas.series.length + ' ' + txtType,
        valueText,
        nameText: target.label,
        quintile: target.quintile
      };
    },
    outPoint(fEv) {
      this.overItem = null;
    }
  }
});
// CONCATENATED MODULE: ./components/quintiles-graph-reversepdc.vue?vue&type=script&lang=js
 /* harmony default export */ var components_quintiles_graph_reversepdcvue_type_script_lang_js = (quintiles_graph_reversepdcvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/quintiles-graph-reversepdc.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(109)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_quintiles_graph_reversepdcvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6dbd4fdb",
  "7e850e3a"
  
)

/* harmony default export */ var quintiles_graph_reversepdc = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HighchartsCompo: __webpack_require__(43).default,MobileClassementReverse: __webpack_require__(90).default})


/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"18\" height=\"16\" viewBox=\"0 0 18 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M17.1094 9.39844L10.8594 15.6484C10.625 15.8828 10.3125 16 10 16C9.64844 16 9.33594 15.8828 9.10156 15.6484C8.59375 15.1797 8.59375 14.3594 9.10156 13.8906L13.2031 9.75H1.25C0.546875 9.75 0 9.20312 0 8.5C0 7.83594 0.546875 7.25 1.25 7.25H13.2031L9.10156 3.14844C8.59375 2.67969 8.59375 1.85938 9.10156 1.39062C9.57031 0.882812 10.3906 0.882812 10.8594 1.39062L17.1094 7.64062C17.6172 8.10938 17.6172 8.92969 17.1094 9.39844Z\" fill=\"white\"/>\n</svg>\n";

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return exportGTAB; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function exportGTAB(containerID, exportParams) {
  const dlElement = document.querySelector('#' + containerID);
  const HTMLOuter = dlElement.outerHTML;
  let datasHTML = '';
  if (exportParams.title !== undefined && exportParams.title !== '') {
    datasHTML += "<div class='export_title'>" + exportParams.title + '</div>';
  }
  const componentStyles = document.querySelectorAll('head > style');
  let styles = '';
  componentStyles.forEach(function (currentValue, currentIndex, listObj) {
    styles += currentValue.outerHTML;
  });
  datasHTML = '<html>' + '<head><meta data-n-head="1" charset="utf-8">' + styles + '</head>' + "<body id='bodySite' size='A4' layout='landscape'>" + "<div class='export_page'><div class='export_content'>" +
  // += datasHTML
  HTMLOuter + '</div></div>' + '</body></html>';
  let exportTitle = 'parlonsclimat.pdf';
  if (exportParams.exportTitle !== undefined) exportTitle = exportParams.exportTitle;
  let apiUrl = $nuxt.$store.state.appSettings.htmlToPdfUrl; // eslint-disable-line
  let accessToken = $nuxt.$store.state.appSettings.htmlToPdfToken; // eslint-disable-line

  const result = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(apiUrl, {
    datas: datasHTML,
    title: exportTitle,
    source: 'https://' + $nuxt.$store.state.SERVICE_HOST,
    // eslint-disable-line
    landscape: false,
    displayHeaderFooter: false,
    headerTemplate: false,
    footerTemplate: false,
    viewPort: {
      width: 1280
    }
  }, {
    responseType: 'blob',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  }).then(response => {
    if (false) {}
    const file = new Blob([response.data], {
      type: 'application/pdf'
    });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
    const a = document.createElement('a');
    a.href = fileURL;
    a.target = '_blank';
    a.download = exportTitle;
    document.querySelector('body').setAttribute('data-downloading', 'false');
    document.body.appendChild(a);
    a.click();
    return response;
  });
  return result;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(39)["URL"]))

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_elecTemplate_vue_vue_type_style_index_0_id_351c8ece_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_elecTemplate_vue_vue_type_style_index_0_id_351c8ece_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_elecTemplate_vue_vue_type_style_index_0_id_351c8ece_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_elecTemplate_vue_vue_type_style_index_0_id_351c8ece_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_elecTemplate_vue_vue_type_style_index_0_id_351c8ece_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#app,#index{--primary-100:#ec81a6;--header-gradient:linear-gradient(180deg,#ec81a6,#141446);--mobility-100:#ec81a6;--secondary-F-25:#fabbae}#app.enedis{--primary-100:#1423dc;--header-gradient:linear-gradient(180deg,#1423dc,#141446);--mobility-100:#93c90e;--secondary-F-25:#c3e869}@media screen and (max-width:639px){.page .page-header .page-header-selectors{width:calc(200vw + 80px)}}.location-selector-box{display:flex;flex-basis:480px}.page-header-wrapper{position:relative;z-index:2}.page-header{background-color:var(--primary-100);box-shadow:0 16px 20px hsla(223,9%,60%,.3);color:#fff;display:flex;flex-direction:column;padding-top:55px;position:relative}.page-header .page-header-wrapper{display:flex;flex:1;flex-direction:column;justify-content:flex-end}.page-header:before{background:var(--header-gradient);bottom:0;content:\"\";left:0;position:absolute;right:0;top:100px;z-index:1}.page-header .page-header-subtitle{font-size:16px;font-style:normal;font-weight:400;letter-spacing:.2em;line-height:22px;text-align:center;text-transform:uppercase}.page-header .page-header-subtitle a{color:#fff}.page-header .page-header-title{font-size:32px;font-weight:800;letter-spacing:-.02em;line-height:44px;text-align:center}.page-header .page-header-territoire-title{font-size:14px;font-weight:400;line-height:19px;margin-top:8px;text-align:center;text-transform:uppercase}.page-header .page-header-selectors{align-items:flex-end;display:flex;flex:1;flex-direction:row;gap:20px;justify-content:center;margin-top:32px;padding:0;position:relative;transition-delay:0s;transition-duration:.3s;transition-property:opacity;transition-timing-function:ease-out}.page-header .elec-data-box{align-items:flex-start;display:flex;flex-direction:row;gap:20px;justify-content:center;padding:0}.page-content{align-items:center;color:#141446;display:flex;flex-direction:column;margin-bottom:40px;margin-top:40px;opacity:0;transition-delay:0s;transition-duration:.3s;transition-property:opacity;transition-timing-function:ease-out}.page-content .section{max-width:1068px;overflow:hidden}.page-content[data-loading-state=loading] .header-epci{display:none}.page-content[data-loading-state=loaded]{opacity:1}.section-title{align-items:center;display:flex;flex-direction:row;gap:8px;justify-content:center;padding:0;position:relative}.section-title:before{background-color:#141446;content:\"\";height:1px;left:0;margin-top:-1px;position:absolute;top:50%;width:100%}.section-title .title-label{background-color:#fff;font-size:12px;font-weight:400;letter-spacing:.2em;line-height:16px;padding:0 8px;position:relative;text-align:center;text-transform:uppercase;z-index:1}.section-graph{position:relative}.section-graph.limited+.section-bt .bt-download{opacity:0;pointer-events:none}.section-graph.limited ::v-deep .graph-txt-desc{opacity:0;pointer-events:none}.section-graph.limited ::v-deep .section-legend{opacity:0;pointer-events:none}.section-graph.limited ::v-deep .info-zoom{opacity:0;pointer-events:none}.section-graph.limited ::v-deep .ranking-type{opacity:0;pointer-events:none}.section-graph.limited ::v-deep .mobile-classement{border-bottom:0}.section-graph.limited ::v-deep .graph .bt-wrapper,.section-graph.limited ::v-deep .graph .classement-item,.section-graph.limited ::v-deep .graph .gradient-bottom,.section-graph.limited ::v-deep .graph .gradient-top,.section-graph.limited ::v-deep .mobile-classement .bt-wrapper,.section-graph.limited ::v-deep .mobile-classement .classement-item,.section-graph.limited ::v-deep .mobile-classement .gradient-bottom,.section-graph.limited ::v-deep .mobile-classement .gradient-top{opacity:0}.section-graph.limited ::v-deep .graph .graph-container,.section-graph.limited ::v-deep .mobile-classement .graph-container{opacity:0;pointer-events:none}.section-graph.limited ::v-deep .graph:before,.section-graph.limited ::v-deep .mobile-classement:before{background-image:url(/indication-icon.svg);content:\"\";height:32px;left:50%;margin-left:-16px;margin-top:-46px;position:absolute;top:50%;width:32px;z-index:1}.section-graph.limited ::v-deep .graph:after,.section-graph.limited ::v-deep .mobile-classement:after{align-items:center;background:#eeecdc;border-radius:20px;box-sizing:border-box;color:#141446;content:\"Indicateurs non représentatifs pour cette sélection. \\aLe graphique est non disponible.\";display:flex;font-size:16px;font-weight:600;height:100%;justify-content:center;left:0;letter-spacing:.1em;line-height:140%;padding-top:50px;position:absolute;text-align:center;top:0;white-space:pre;width:100%}.section-graph.limited ::v-deep .info-box{background-color:transparent!important;border-color:transparent!important;position:relative}.section-graph.limited ::v-deep .info-box:not(.first)[data-quintile=\"1\"]{background-color:transparent!important;border-color:transparent!important}.section-graph.limited ::v-deep .info-box:not(.first)[data-quintile=\"2\"]{background-color:transparent!important;border-color:transparent!important}.section-graph.limited ::v-deep .info-box:not(.first)[data-quintile=\"3\"]{background-color:transparent!important;border-color:transparent!important}.section-graph.limited ::v-deep .info-box:not(.first)[data-quintile=\"4\"]{background-color:transparent!important;border-color:transparent!important}.section-graph.limited ::v-deep .info-box:not(.first)[data-quintile=\"5\"]{background-color:transparent!important;border-color:transparent!important}.section-graph.limited ::v-deep .info-box:after{background:#eeecdc;border-radius:20px;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}.section-legend{align-items:flex-start;font-size:14px;font-weight:600;gap:10px;line-height:19px;margin-top:13px;padding:0}.section-legend,.section-legend .section-legend-item{display:flex;flex-direction:row;justify-content:center}.section-legend .section-legend-item{align-items:center;border-radius:20px;gap:5px;min-width:140px;padding:5px 10px}.section-legend .section-legend-item.leaders{background-color:#436eb1}.section-legend .section-legend-item.bons{background-color:#00b4a0}.section-legend .section-legend-item.danslamoyenne{background-color:#8ad279}.section-legend .section-legend-item.moinsbons{background-color:#f09429}.section-legend .section-legend-item.enretard{background-color:#eb674c}.statut-title{align-items:center;color:#fff;display:flex;font-size:10px;font-weight:400;line-height:14px;margin-left:20px;margin-right:8px;text-transform:uppercase}.statut-legend{align-items:flex-start;font-size:12px;font-weight:600;gap:10px;line-height:16px;margin-top:10px;padding:0}.statut-legend,.statut-legend .statut-legend-item{display:flex;flex-direction:row;justify-content:center}.statut-legend .statut-legend-item{align-items:center;border-radius:20px;gap:5px;min-width:120px;padding:2px 10px}.statut-legend .statut-legend-item.leaders{background-color:#436eb1}.statut-legend .statut-legend-item.bons{background-color:#00b4a0}.statut-legend .statut-legend-item.danslamoyenne{background-color:#8ad279}.statut-legend .statut-legend-item.moinsbons{background-color:#f09429}.statut-legend .statut-legend-item.enretard{background-color:#eb674c}.graph-title{font-size:20px;font-weight:800;line-height:140%;margin-bottom:10px;margin-top:45px}.graph-title:not(.center){max-width:684px}.graph-title.center{text-align:center}.graph-title .uppercase{text-transform:uppercase}.graph-title .bigger{font-size:40px;font-weight:800;line-height:120%}.graph-title .smaller{font-size:24px;font-weight:400;line-height:120%}.header-epci{margin-bottom:20px;margin-top:-40px;max-width:980px;width:100%}.header-epci .header-epci-switch-wrapper{align-items:center;background-color:#141446;display:flex;flex-direction:row;gap:126px;justify-content:space-between;padding:24px 60px}.header-epci .header-epci-switch-wrapper .header-epci-text{color:#fff;font-size:24px;font-weight:400;line-height:33px;max-width:390px}.header-epci .header-epci-switch-wrapper .header-epci-switcher{display:flex}.header-epci .header-epci-switch-wrapper .header-epci-switcher-item{background-color:#323274;border:6px solid #141446;border-radius:20px 0 0 20px;border-right-width:0;color:#98b5e1;cursor:pointer;padding:10px 20px;transition-delay:0s;transition-duration:.3s;transition-property:background-color,color;transition-timing-function:ease-out}.header-epci .header-epci-switch-wrapper .header-epci-switcher-item:last-child{border-radius:0 20px 20px 0;border-width:6px 6px 6px 0}.header-epci .header-epci-switch-wrapper .header-epci-switcher-item.current{background-color:#fff;border-color:#fff;border-width:6px 0 6px 6px;color:#141446}.header-epci .header-epci-switch-wrapper .header-epci-switcher-item:not(.current):hover{background-color:#436eb1;color:#fff}.header-epci[data-cat=territoire] .header-epci-switch-wrapper{border-radius:0 0 40px 40px}.header-epci .header-epci-infos{background:var(--secondary-F-25);border-radius:0 0 40px 40px;padding:30px 60px}.header-epci .header-epci-infos .header-epci-infos-head{align-items:flex-start;display:flex;flex-direction:row;justify-content:space-between;padding:0}.header-epci .header-epci-infos .header-epci-infos-head .epci-info-title{font-size:12px;font-weight:400;letter-spacing:.2em;line-height:16px}.header-epci .header-epci-infos .header-epci-infos-head .epci-info-desc{font-size:16px;font-weight:800;letter-spacing:-.02em;line-height:22px}.header-epci .header-epci-infos .header-epci-infos-head .epci-info-legend{font-size:10px;font-weight:400;line-height:14px}.header-epci .header-epci-infos .header-epci-infos-head .header-epci-infos-head-box{display:flex;flex-direction:column;justify-content:center;padding:0}.header-epci .header-epci-infos .header-epci-infos-head .header-epci-infos-head-box:last-child{align-items:center;gap:8px}.header-epci .header-epci-infos .epci-info-more{font-size:12px;font-weight:400;line-height:16px;text-align:center}.header-epci .header-epci-infos .epci-info-bt,.header-epci .header-epci-infos .epci-info-bt-wrapper{align-items:center;display:flex;justify-content:center}.header-epci .header-epci-infos .epci-info-bt{background:#141446;border-radius:20px;color:#fff;cursor:pointer;flex-direction:column;flex-direction:row;font-size:14px;font-weight:600;gap:8px;line-height:19px;padding:6px 16px;transition-delay:0s;transition-duration:.3s;transition-property:background-color,color;transition-timing-function:ease-out}.header-epci .header-epci-infos .epci-info-bt:hover{background-color:#fff;color:#141446}.header-epci .header-epci-infos .epci-info-bt:hover .ico ::v-deep svg path{fill:#141446!important}.header-epci .header-epci-infos .epci-info-bt .ico{align-items:center;display:flex;justify-content:center;width:20px}.header-epci .header-epci-infos .epci-info-bt .ico ::v-deep svg path{transition-delay:0s;transition-duration:.3s;transition-property:fill;transition-timing-function:ease-out}.header-epci .header-epci-infos .header-epci-infos-content{font-size:20px;font-weight:400;line-height:130%;margin-top:10px}.header-epci .header-epci-infos .header-epci-infos-content .classe-label{font-weight:700}.section-bt{align-items:center;display:flex;justify-content:center;margin-top:40px}.location-selector-box{max-width:none;width:100%}.statut-sticky{background-color:#141446;display:flex;height:40px;left:0;margin-top:-40px;position:fixed;top:0;transition-delay:0s;transition-duration:.3s;transition-property:margin-top;transition-timing-function:ease-out;width:100%;z-index:99}.statut-sticky.isOn{margin-top:0}.epci-compare-switch{align-items:center;display:flex;height:100%;position:absolute;right:20px}.epci-compare-switch .switch-wrapper .selector.opened{background:transparent;padding-bottom:25px;padding-top:0}.epci-compare-switch .switch-wrapper .selector.opened ::v-deep .selector-close{display:none}.epci-compare-switch .switch-wrapper .selector.opened ::v-deep .placeholder{display:none}.epci-compare-switch .switch-wrapper .selector.opened ::v-deep .selector-list-panel{padding-top:0}.epci-compare-switch .switch-wrapper .selector.opened ::v-deep .select-list-wrapper{padding-left:12px}.switch-label{color:#fff;font-size:10px;font-weight:400;line-height:14px;text-transform:uppercase}.switch-wrapper{margin-left:8px;min-width:220px;position:relative}.switch-wrapper .selector{padding-bottom:4px;padding-top:4px}.switch-wrapper :v-deep .selector-close{display:none}.switch-wrapper ::v-deep .selector-list-panel .select-item{font-size:12px;font-weight:600;line-height:16px}.switch-wrapper ::v-deep .placeholder{font-size:12px;font-weight:600;line-height:16px}.switch-wrapper ::v-deep .anchor-down svg path{fill:#141446}.switch-wrapper ::v-deep .selector-label{display:none}.switch-wrapper ::v-deep .selector-close{right:14px;top:8px}.switch-wrapper ::v-deep .selector-close svg path{fill:#141446}.switch-wrapper ::v-deep .selector-list-panel{height:auto}.switch-wrapper ::v-deep .selector-list-panel{background:linear-gradient(180deg,#fcfbf8 70%,#eeecdc);border:1px solid #141446;border-radius:13px;margin-top:0;padding-top:20px}.switch-wrapper ::v-deep .selector-list-panel .select-item{color:#141446}.switch-wrapper ::v-deep .selector-list-panel .select-item .ico svg path{fill:#141446}.switch-wrapper ::v-deep .selector-list-panel .select-item:first-child{border-top-color:transparent}.switch-wrapper ::v-deep .selector-list-panel .select-item:last-child{margin-bottom:0!important}.header-box-enter-active,.header-box-leave-active{transition:all .5s ease}.header-box-enter-from,.header-box-leave-to{opacity:0}@media screen and (max-width:1279px){.section-title{margin:auto;max-width:560px}.section-legend{flex-wrap:wrap;margin:13px auto auto;max-width:560px}.section{padding:0 40px}}@media screen and (max-width:1148px){.page-content .section,.section-graph{max-width:100%}}.selector-mobile-wrapper{display:flex;flex-direction:row;grid-gap:10px;width:calc(200vw + 10px)}.page-header-selectors.mobile-only{display:inline;display:initial}.page-header-selectors.mobile-only .location-selector-box{padding:0 28px}.carrousel-controls{position:relative;grid-gap:8px;margin-top:20px;z-index:11}.carrousel-controls .carrousel-controls-item{background:#f89fbe;border:4px solid #f89fbe;border-radius:8px;height:16px;transition-delay:0s;transition-duration:.3s;transition-property:border;transition-timing-function:ease-out;width:16px}.carrousel-controls .carrousel-controls-item.current{border:4px solid #fff}@media screen and (max-width:1190px){.statut-sticky{margin-top:-62px}.statut-sticky .header-epci{padding:21px 28px 0}.statut-sticky .header-epci .header-epci-switch-wrapper{flex-direction:column;padding:24px 50px;grid-gap:20px}.statut-sticky .header-epci .header-epci-switch-wrapper .header-epci-text{font-size:18px;line-height:25px;text-align:center}.statut-sticky .header-epci .header-epci-infos{padding:20px}.statut-sticky .header-epci .header-epci-infos .header-epci-infos-head{flex-direction:column}.statut-sticky .header-epci .header-epci-infos .header-epci-infos-content{font-size:16px;line-height:140%}.statut-sticky .header-epci .header-epci-infos-content-box{flex-direction:column;margin-top:20px}.statut-title{display:none}.statut-sticky{align-items:center;background-color:#fff;box-shadow:0 0 20px rgba(20,20,70,.5);height:28px;justify-content:center}.statut-sticky .statut-legend{flex-wrap:nowrap;gap:initial;margin-top:0}.statut-sticky .statut-legend .statut-legend-item{background-color:transparent;font-size:10px;line-height:14px;min-width:0;min-width:auto;padding:0 8px 0 13px;position:relative}.statut-sticky .statut-legend .statut-legend-item:last-child{padding-right:0}.statut-sticky .statut-legend .statut-legend-item:before{background-color:red;border-radius:5px;content:\"\";height:10px;left:0;position:absolute;top:2px;width:10px}.statut-sticky .statut-legend .statut-legend-item.leaders:before{background-color:#436eb1}.statut-sticky .statut-legend .statut-legend-item.bons:before{background-color:#00b4a0}.statut-sticky .statut-legend .statut-legend-item.danslamoyenne:before{background-color:#8ad279}.statut-sticky .statut-legend .statut-legend-item.moinsbons:before{background-color:#f09429}.statut-sticky .statut-legend .statut-legend-item.enretard:before{background-color:#eb674c}.epci-compare-switch{background-color:#141446;height:auto;padding:6px 28px;position:absolute;right:auto;top:28px;width:100%}.epci-compare-switch .switch-label{flex:1}.epci-compare-switch .switch-wrapper{align-items:center;background-color:#141446;display:flex;flex-direction:row;justify-content:space-between;min-width:0;min-width:auto}.epci-compare-switch .switch-wrapper .header-epci-text{color:#fff;font-size:24px;font-weight:400;line-height:33px;max-width:390px}.epci-compare-switch .switch-wrapper .header-epci-switcher{display:flex}.epci-compare-switch .switch-wrapper .header-epci-switcher-item{background-color:#323274;border-radius:20px 0 0 20px;border-style:solid;color:#98b5e1;cursor:pointer;font-size:12px;line-height:16px;padding:2px 19px}.epci-compare-switch .switch-wrapper .header-epci-switcher-item:last-child{border-radius:0 20px 20px 0}.epci-compare-switch .switch-wrapper .header-epci-switcher-item.current{background-color:#fff;color:#141446}}@media screen and (max-width:639px){.page-header{z-index:10}.page-header .page-header-subtitle{font-size:10px;line-height:14px}.page-header .page-header-title{font-size:24px;line-height:28px}.page-header .page-header-territoire-title{display:block!important}.page-header .page-title{font-size:32px;line-height:44px}.page-header .page-header-wrapper{justify-content:flex-start}.page-header .page-header-selectors{align-items:flex-start;flex:initial}.page-header .page-header-selectors ::v-deep .selector-box{border-radius:40px}.page-header .page-header-selectors .selector-mobile-wrapper{transition-delay:0s;transition-duration:.3s;transition-property:all;transition-timing-function:ease-out}.page-header .page-header-selectors[data-carrousel-index=\"0\"] .selector-mobile-wrapper{margin-left:0}.page-header .page-header-selectors[data-carrousel-index=\"1\"] .selector-mobile-wrapper{margin-left:calc(-200vw - 20px)}.page-header .carrousel-mobile .page-header-selectors{flex-direction:row;grid-gap:10px}.page-header .carrousel-mobile .page-header-selectors .location-selector-box{padding:0 28px}.page-content{margin-top:20px}.page-content .header-epci{margin-top:-20px}.page-content .header-epci .header-epci-infos-content-box{flex-direction:column;margin-top:20px}.page-content .header-epci .header-epci-infos-content-box .epci-info-bt{margin-top:8px}.page-content .header-epci .header-epci-switch-wrapper{flex-direction:column;gap:20px;padding:24px}.page-content .header-epci .header-epci-switch-wrapper .header-epci-switcher{flex-basis:100%;max-width:280px;width:100%}.page-content .header-epci .header-epci-switch-wrapper .header-epci-switcher .header-epci-switcher-item{flex-basis:50%}.page-content .header-epci .header-epci-switch-wrapper .header-epci-switcher .header-epci-switcher-item:first-child{text-align:right}.page-content .header-epci .header-epci-switch-wrapper .header-epci-text{font-size:18px;font-weight:400;line-height:25px;text-align:center}.page-content .section{padding:0 22px}.page-content .graph-title{margin-top:27px}.page-content .graph-title .smaller{font-size:18px;line-height:120%}.page-content .graph-title .bigger{font-size:32px;line-height:120%}.page-content .section-graph.limited ::v-deep .mobile-classement:before{margin-top:-76px}.page-content .section-graph.limited ::v-deep .mobile-classement:after{content:\"Indicateurs non \\areprésentatifs pour cette \\asélection. \\aLe graphique est non \\a disponible.\"}.page-content .section-legend{flex-wrap:nowrap;gap:initial;margin-top:10px}.page-content .section-legend .section-legend-item{background-color:transparent;font-size:10px;line-height:14px;min-width:0;min-width:auto;padding:0 8px 0 13px;position:relative;white-space:nowrap}.page-content .section-legend .section-legend-item:last-child{padding-right:0}.page-content .section-legend .section-legend-item:before{background-color:red;border-radius:5px;content:\"\";height:10px;left:0;position:absolute;top:2px;width:10px}.page-content .section-legend .section-legend-item.leaders:before{background-color:#436eb1}.page-content .section-legend .section-legend-item.bons:before{background-color:#00b4a0}.page-content .section-legend .section-legend-item.danslamoyenne:before{background-color:#8ad279}.page-content .section-legend .section-legend-item.moinsbons:before{background-color:#f09429}.page-content .section-legend .section-legend-item.enretard:before{background-color:#eb674c}}.select-location-mobile{bottom:40px;margin-bottom:-100%;position:fixed;width:100%;z-index:100}.select-location-mobile .location-selector-box{flex-basis:auto;width:100%}.select-location-mobile .location-selector-box .selector-box{flex-basis:auto;max-width:none;width:100%}.select-location-mobile.expanded{margin-bottom:0}.select-location-toggle{align-items:center;background:#323274;bottom:0;color:#fff;display:flex;font-size:12px;height:40px;letter-spacing:.1em;line-height:16px;padding:0 16px;position:fixed;text-align:center;text-transform:uppercase;width:100%;z-index:100}.select-location-toggle div{flex:1;text-align:left}.select-location-toggle span{padding-top:3px}.select-location-toggle span ::v-deep svg path{fill:#fff}.page-header-selectors.mobile-only{display:block;overflow:hidden}.page-header-selectors.mobile-only .selector-mobile-wrapper{display:flex;transition:transform .3s ease-out}.page-header-selectors.mobile-only .location-selector-box{box-sizing:border-box;padding:0 15px;width:100%}.carrousel-controls{display:flex;justify-content:center;margin-top:10px}.carrousel-controls .carrousel-controls-item{background:#c3c3c3;border-radius:50%;height:8px;margin:0 4px;width:8px}.carrousel-controls .carrousel-controls-item.current{background:#000}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./views/elecTemplate.vue?vue&type=template&id=351c8ece
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "page"
  }, [_vm._ssrNode("<div" + _vm._ssrClass("statut-sticky", {
    isOn: _vm.stickyStatut
  }) + ">", "</div>", [_vm._ssrNode("<div class=\"statut-title\"><span class=\"title-label\"> statut des territoires </span></div> <div class=\"statut-legend\">" + _vm._ssrList(_vm.quintiles, function (quintile, quintileIndex) {
    return "<div" + _vm._ssrClass("statut-legend-item", quintile.id) + ">" + _vm._ssrEscape("\n        " + _vm._s(quintile.label) + "\n      ") + "</div>";
  }) + "</div> "), _vm.current_type_territoire.id === 'epci' && _vm.current_territoire ? _vm._ssrNode("<div class=\"epci-compare-switch\">", "</div>", [_vm._ssrNode("<div class=\"switch-label\"><span class=\"no-mobile-head\">Comparer aux autres…</span> <span class=\"mobile-head-only\">Comparer aux même…</span></div> "), _vm._ssrNode("<div class=\"switch-wrapper\">", "</div>", [_c('selector-select-location', {
    staticClass: "selector list no-mobile-head",
    attrs: {
      "items": _vm.epci_categories_mobile,
      "panel-open": _vm.panelOpenEpciMobile,
      "current": _vm.current_epci_category_mobile,
      "use-internal-territoire": false,
      "use-anchor-down": true,
      "v-bar-enabled": false
    },
    on: {
      "openPanel": function ($event) {
        _vm.panelOpenEpciMobile = true;
      },
      "closePanel": function ($event) {
        _vm.panelOpenEpciMobile = false;
      },
      "selectItem": _vm.selectClass
    }
  }), _vm._ssrNode(" " + _vm._ssrList(_vm.epci_categories, function (item, itemIndex) {
    return "<div" + _vm._ssrClass("header-epci-switcher-item mobile-head-only", {
      current: _vm.current_epci_category.id === item.id
    }) + ">" + _vm._ssrEscape("\n          " + _vm._s(item.label) + "\n        ") + "</div>";
  }))], 2)], 2) : _vm._e()], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"page-header\">", "</div>", [_vm._ssrNode("<div class=\"page-header-wrapper\">", "</div>", [_vm._ssrNode("<div class=\"page-header-subtitle\">", "</div>", [_vm.$route.name === 'index' ? _vm._ssrNode("<span>", "</span>", [_vm._ssrNode("datavisualisation")], 2) : _c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("datavisualisation — mobilités propres")])], 1), _vm._ssrNode(" <div class=\"page-header-title\">" + (_vm.$route.name === 'index' ? "<span>mobilités propres</span>" : _vm.currCatVehic === 'gaz' ? "<span>Véhicules particuliers au gaz naturel</span>" : "<span>Véhicules électriques et hybrides rechargeables</span>") + "</div> " + (_vm.current_territoire ? "<div class=\"page-header-territoire-title mobile-only\">" + _vm._ssrEscape("\n        " + _vm._s(_vm.current_territoire.label) + "\n      ") + "</div>" : "<!---->") + " "), _vm._ssrNode("<div" + _vm._ssrClass("page-header-selectors", {
    'no-mobile': _vm.$route.name === 'index'
  }) + ">", "</div>", [_vm._ssrNode("<div class=\"location-selector-box\">", "</div>", [_c('box-select-page-head', {
    staticClass: "selector-electric",
    attrs: {
      "reduced": _vm.$route.name !== 'index',
      "cat-vehic": 'elec'
    }
  })], 1), _vm._ssrNode(" "), _vm.$route.name === 'index' && !_vm.$store.state.versionEnedis ? _vm._ssrNode("<div class=\"location-selector-box\">", "</div>", [_c('box-select-page-head', {
    staticClass: "selector-electric",
    attrs: {
      "reduced": _vm.$route.name !== 'index',
      "cat-vehic": 'gaz'
    }
  })], 1) : _vm.$route.name !== 'index' && _vm.current_territoire ? _vm._ssrNode("<div class=\"elec-data-box\">", "</div>", [_c('module-vehicule-count', {
    attrs: {
      "count-datas": _vm.vehiculeCountDatas,
      "location-field": _vm.locationField,
      "location-code": _vm.current_territoire.code
    }
  }), _vm._ssrNode(" "), _c('module-pdc-count', {
    attrs: {
      "count-datas": _vm.pdcCountDatas
    }
  })], 2) : _vm._e()], 2), _vm._ssrNode(" "), _vm.$route.name === 'index' ? _vm._ssrNode("<div" + _vm._ssrAttr("data-carrousel-index", _vm.carrouselIndex) + " class=\"page-header-selectors mobile-only\">", "</div>", [_c('div', {
    directives: [{
      name: "touch",
      rawName: "v-touch:start",
      value: _vm.startHandler,
      expression: "startHandler",
      arg: "start"
    }, {
      name: "touch",
      rawName: "v-touch:end",
      value: _vm.endHandler,
      expression: "endHandler",
      arg: "end"
    }, {
      name: "touch",
      rawName: "v-touch:swipe.left",
      value: _vm.swipeHandlerLeft,
      expression: "swipeHandlerLeft",
      arg: "swipe",
      modifiers: {
        "left": true
      }
    }, {
      name: "touch",
      rawName: "v-touch:swipe.right",
      value: _vm.swipeHandlerRight,
      expression: "swipeHandlerRight",
      arg: "swipe",
      modifiers: {
        "right": true
      }
    }],
    staticClass: "selector-mobile-wrapper"
  }, [_vm._ssrNode("<div class=\"location-selector-box\">", "</div>", [_c('box-select-page-head', {
    staticClass: "selector-electric",
    attrs: {
      "reduced": _vm.$route.name !== 'index',
      "cat-vehic": 'elec'
    }
  })], 1), _vm._ssrNode(" "), _vm.$route.name === 'index' && !_vm.$store.state.versionEnedis ? _vm._ssrNode("<div class=\"location-selector-box\">", "</div>", [_c('box-select-page-head', {
    staticClass: "selector-electric",
    attrs: {
      "reduced": _vm.$route.name !== 'index',
      "cat-vehic": 'gaz'
    }
  })], 1) : _vm.$route.name !== 'index' && _vm.current_territoire ? _vm._ssrNode("<div class=\"elec-data-box\">", "</div>", [_c('module-vehicule-count', {
    attrs: {
      "count-datas": _vm.vehiculeCountDatas,
      "location-field": _vm.locationField,
      "location-code": _vm.current_territoire.code
    }
  }), _vm._ssrNode(" "), _c('module-pdc-count', {
    attrs: {
      "count-datas": _vm.pdcCountDatas
    }
  })], 2) : _vm._e()], 2)]) : _vm._e(), _vm._ssrNode(" " + (_vm.$route.name === 'index' && !_vm.$store.state.versionEnedis ? "<div class=\"carrousel-controls mobile-only flex\"><div" + _vm._ssrClass("carrousel-controls-item", {
    current: _vm.carrouselIndex === 0
  }) + "></div> <div" + _vm._ssrClass("carrousel-controls-item", {
    current: _vm.carrouselIndex === 1
  }) + "></div></div>" : "<!---->"))], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrAttr("data-loading-state", _vm.loadingState) + " class=\"page-content\">", "</div>", [_vm._ssrNode((_vm.current_type_territoire.id === 'epci' && _vm.current_territoire ? "<div" + _vm._ssrAttr("data-cat", _vm.current_epci_category.id) + " class=\"header-epci\"><div class=\"header-epci-switch-wrapper\"><div class=\"header-epci-text\">\n          Vous pouvez comparer cet EPCI aux autres EPCI de même…\n        </div> <div class=\"header-epci-switcher\">" + _vm._ssrList(_vm.epci_categories, function (item, itemIndex) {
    return "<div" + _vm._ssrClass("header-epci-switcher-item", {
      current: _vm.current_epci_category.id === item.id
    }) + ">" + _vm._ssrEscape("\n            " + _vm._s(item.label) + "\n          ") + "</div>";
  }) + "</div></div> " + (_vm.current_territoire && _vm.current_epci_category.id === 'classe' ? "<div class=\"header-epci-infos\"><div class=\"header-epci-infos-head\"><div class=\"header-epci-infos-head-box\"><div class=\"epci-info-title\">" + _vm._ssrEscape("\n              " + _vm._s(_vm.current_territoire.label) + "\n            ") + "</div> <div class=\"epci-info-desc\">" + _vm._ssrEscape("\n              est un EPCI* de\n              " + _vm._s(_vm.current_territoire.classe.replace('CLASSE', 'classe')) + "\n            ") + "</div> <div class=\"epci-info-legend\">\n              *Établissement public de coopération intercommunale\n            </div></div> <div class=\"header-epci-infos-head-box no-mobile\"><div class=\"epci-info-more\">\n              En savoir plus sur les classes d’EPCI\n            </div> <div class=\"epci-info-bt-wrapper\"><a href=\"/fs-2021-dt-02-colard-accessibilite-zones-peripheriques-avril.pdf\" download class=\"epci-info-bt\"><div>Télécharger le pdf (1.2mo)</div> <div class=\"ico\">" + _vm._s(__webpack_require__(44)) + "</div></a></div></div></div> " + (_vm.current_epci_category.id === 'classe' ? "<div class=\"header-epci-infos-content\"><span class=\"classe-label\">" + _vm._ssrEscape(_vm._s(_vm.current_territoire.classe.replace('CLASSE', 'classe')) + "\n            :") + "</span>" + _vm._ssrEscape("\n          " + _vm._s(_vm.txtEPCI[_vm.current_territoire.classe.replace('CLASSE ', '')]) + "\n        ") + "</div>" : "<!---->") + " <div class=\"header-epci-infos-content-box mobile-only\"><div class=\"epci-info-more\">\n            En savoir plus sur les classes d’EPCI\n          </div> <div class=\"epci-info-bt-wrapper\"><a href=\"/fs-2021-dt-02-colard-accessibilite-zones-peripheriques-avril.pdf\" download class=\"epci-info-bt\"><div>Télécharger le pdf (1.2mo)</div> <div class=\"ico\">" + _vm._s(__webpack_require__(44)) + "</div></a></div></div></div>" : "<!---->") + "</div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"section\">", "</div>", [_vm._ssrNode((_vm.current_territoire && _vm.loadingState === 'loaded' ? "<div><div class=\"section-title\"><span class=\"title-label\"> statut des territoires </span></div> <div class=\"section-legend\">" + _vm._ssrList(_vm.quintiles, function (quintile, quintileIndex) {
    return "<div" + _vm._ssrClass("section-legend-item", quintile.id) + ">" + _vm._ssrEscape("\n            " + _vm._s(quintile.label) + "\n          ") + "</div>";
  }) + "</div></div>" : "<!---->") + " "), _vm.current_territoire ? _vm._ssrNode("<div id=\"quintile-graph-vehic\" class=\"section-graph\">", "</div>", [_vm._ssrNode("<div class=\"graph-title\">\n          Pourcentage de\n          " + (_vm.currCatVehic === 'gaz' ? "<span>véhicules au gaz</span>" : "<span>véhicules électriques et hybrides\n            rechargeables</span>") + "\n          par rapport au total de véhicules immatriculés\n        </div> "), _c('quintiles-graph', {
    attrs: {
      "cat": 'vehic',
      "quintiles": _vm.quintiles,
      "location-datas": _vm.locationDatas,
      "current-territoire": _vm.current_territoire,
      "epci-cat": _vm.current_epci_category
    }
  })], 2) : _vm._e(), _vm._ssrNode(" " + (_vm.current_territoire ? "<div class=\"section-bt no-mobile\"><span" + _vm._ssrAttr("data-exporting", _vm.downloadindGraphVehic) + " class=\"bt-download\">\n          Télécharger le graphique\n          " + (!_vm.downloadindGraphVehic ? "<div class=\"ico\">" + _vm._s(__webpack_require__(44)) + "</div>" : "<div class=\"ico\"><span class=\"rotating\">" + _vm._s(__webpack_require__(66)) + "</span></div>") + "</span></div>" : "<!---->") + " "), _vm.current_territoire ? _vm._ssrNode("<div id=\"quintile-graph-pdc\"" + _vm._ssrClass("section-graph", {
    limited: _vm.limmitedGraph
  }) + ">", "</div>", [_vm._ssrNode("<div class=\"graph-title\">\n          Nombre de " + (_vm.currCatVehic === 'gaz' ? "<span>véhicules au gaz</span>" : "<span>véhicules électriques et\n            hybrides rechargeables</span>") + " par\n          " + (_vm.currCatVehic === 'gaz' ? "<span>station GNV</span>" : "<span>point de charge publique</span>") + "</div> "), _c('quintiles-graph-reversepdc', {
    attrs: {
      "cat": 'pdc',
      "pdc-count": _vm.pdcCountDatas,
      "quintiles": _vm.quintiles,
      "location-datas": _vm.locationDatas,
      "current-territoire": _vm.current_territoire,
      "epci-cat": _vm.current_epci_category
    }
  })], 2) : _vm._e(), _vm._ssrNode(" " + (_vm.current_territoire ? "<div class=\"section-bt no-mobile\"><span" + _vm._ssrAttr("data-exporting", _vm.downloadindGraphPdc) + " class=\"bt-download\">\n          Télécharger le graphique\n          " + (!_vm.downloadindGraphPdc ? "<div class=\"ico\">" + _vm._s(__webpack_require__(44)) + "</div>" : "<div class=\"ico\"><span class=\"rotating\">" + _vm._s(__webpack_require__(66)) + "</span></div>") + "</span></div>" : "<!---->") + " "), _vm.current_territoire ? _vm._ssrNode("<div id=\"quintile-graph-mapping\"" + _vm._ssrClass("section-graph no-mobile", {
    limited: _vm.limmitedGraph
  }) + ">", "</div>", [_vm._ssrNode("<div class=\"graph-title center\"><div class=\"smaller uppercase\">Mapping</div> <div class=\"bigger\">" + (_vm.current_type_territoire.id === 'regions' ? "<span>des régions</span>" : _vm.current_type_territoire.id === 'departements' ? "<span>des départements</span>" : _vm.current_type_territoire.id === 'epci' ? "<span>\n              des EPCI" + (_vm.current_epci_category.id === 'classe' ? "<span>" + _vm._ssrEscape("\n                de classe " + _vm._s(_vm.current_territoire.classe)) + "</span>" : "<span>" + _vm._ssrEscape(" en " + _vm._s(_vm.current_reg.label)) + "</span>") + "</span>" : "<!---->") + "</div></div> "), _c('quintiles-graph-2axis-reverse', {
    attrs: {
      "downloadindGraphMapping": _vm.downloadindGraphMapping,
      "cat": 'mapping',
      "pdc-count": _vm.pdcCountDatas,
      "quintiles": _vm.quintiles,
      "location-datas": _vm.locationDatas,
      "current-territoire": _vm.current_territoire,
      "epci-cat": _vm.current_epci_category,
      "chart-height": '100%'
    },
    on: {
      "callExport": _vm.callExport
    }
  })], 2) : _vm._e(), _vm._ssrNode(" " + (_vm.current_territoire ? "<div class=\"section-bt\"><span class=\"bt-ore\"><span class=\"label\">Visualiser un autre territoire</span> <div class=\"ico\">" + _vm._s(__webpack_require__(91)) + "</div></span></div>" : "<!---->"))], 2), _vm._ssrNode(" "), _c('nuxt-child')], 2), _vm._ssrNode(" "), _vm.$route.name !== 'index' ? _vm._ssrNode("<div" + _vm._ssrClass("select-location-mobile mobile-only", {
    expanded: _vm.mobileLocationSelectExpanded
  }) + ">", "</div>", [_vm.$route.name === 'index-vehicules-electriques-et-hybrides-rechargeables-territoireType-locationSlug' ? _vm._ssrNode("<div class=\"location-selector-box\">", "</div>", [_c('box-select-page-head', {
    staticClass: "selector-electric",
    attrs: {
      "reduced": _vm.$route.name !== 'index',
      "cat-vehic": 'elec'
    }
  })], 1) : _vm._ssrNode("<div class=\"location-selector-box\">", "</div>", [_c('box-select-page-head', {
    staticClass: "selector-electric",
    attrs: {
      "reduced": _vm.$route.name !== 'index',
      "cat-vehic": 'gaz'
    }
  })], 1)]) : _vm._e(), _vm._ssrNode(" " + (_vm.$route.name !== 'index' ? "<div" + _vm._ssrClass("select-location-toggle mobile-only", {
    expanded: _vm.mobileLocationSelectExpanded
  }) + "><div>Changer de territoire</div> " + (!_vm.mobileLocationSelectExpanded ? "<span>" + _vm._s(__webpack_require__(124)) + "</span>" : "<span>" + _vm._s(__webpack_require__(91)) + "</span>") + "</div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./views/elecTemplate.vue?vue&type=template&id=351c8ece

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(1);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "vue-scrollto"
var external_vue_scrollto_ = __webpack_require__(38);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// EXTERNAL MODULE: ./commons/utils/index.js
var utils = __webpack_require__(125);

// EXTERNAL MODULE: ./api/config.js
var config = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./views/elecTemplate.vue?vue&type=script&lang=js






let html2canvas;
if (false) {}
/* harmony default export */ var elecTemplatevue_type_script_lang_js = ({
  middleware: ['fetchRegions'],
  data: function () {
    return {
      txtEPCI: {
        M: 'Les 22 métropoles administratives (22 EPCI, 19,1 millions d’habitants)',
        A: 'La proche banlieue parisienne : une attraction de Paris de plus en plus forte (12 EPCI, 2,9 millions d’habitants)',
        B: 'Périurbain de la région parisienne et de certaines grandes métropoles ou zones transfrontalières (79 EPCI, 3,9 millions d’habitants)',
        C: 'Périurbain élargi et campagne autour des métropoles ou de villes moyennes : une population qui augmente et utilise de plus en plus la voiture (376 EPCI, 12,4 millions d’habitants)',
        D: 'EPCI des villes moyennes (114 EPCI, 11,6 millions d’habitants)',
        E: 'EPCI de villes moyennes ou petites, du rural - EPCI XXL (Cherbourg, Pays basque)(286 EPCI, 9,5 millions d’habitants)',
        F: 'EPCI ruraux et périurbain de villes moyennes : un rapport déséquilibré emplois/actifs occupés pour des territoires de plus en plus périurbains (201 EPCI, 3 millions d’habitants)',
        G: 'EPCI ruraux : territoires vieillissant avec une faible densité (146 EPCI, 1,7 million d’habitants)'
      },
      touching: false,
      downloadindGraphVehic: false,
      downloadindGraphPdc: false,
      downloadindGraphMapping: false,
      mobileLocationSelectExpanded: false,
      carrouselIndex: 0,
      prevOffset: 0,
      panelOpenEpciMobile: false,
      loadingState: 'loading',
      lastRequest: '',
      inLocationDatas: null,
      locationDatas: null,
      current_epci_category: {
        id: 'classe',
        label: 'Classe'
      },
      epci_categories: [{
        id: 'classe',
        label: 'Classe'
      }, {
        id: 'territoire',
        label: 'Région'
      }],
      current_epci_category_mobile: {
        id: 'classe',
        label: 'EPCI de même classe',
        short: 'Classes'
      },
      epci_categories_mobile: [{
        id: 'classe',
        label: 'EPCI de même classe',
        short: 'Classes'
      }, {
        id: 'territoire',
        label: 'EPCI de la même région',
        short: 'Régions'
      }],
      quintiles: [{
        id: 'leaders',
        label: 'Leaders',
        color: '#436eb1'
      }, {
        id: 'bons',
        label: 'Bons',
        color: '#00b4a0'
      }, {
        id: 'danslamoyenne',
        label: 'Dans la moyenne',
        color: '#8ad279'
      }, {
        id: 'moinsbons',
        label: 'Moins bons',
        color: '#f09429'
      }, {
        id: 'enretard',
        label: 'En retard',
        color: '#eb674c'
      }]
    };
  },
  async fetch() {
    await this.updateDatas();
    if (this.$route.name !== 'index') this.loadingState = 'loaded';
  },
  mounted: function () {
    if (window) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  beforeDestroy: function () {
    if (window) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      communes: 'get_communes',
      departements: 'get_departements',
      regions: 'get_regions',
      epci: 'get_EPCI',
      current_type_territoire: 'get_current_type_territoire',
      current_type_vehicule: 'get_current_type_vehicule',
      type_vehicules: 'get_type_vehicules',
      windowWidth: 'get_windowWidth'
    }),
    limmitedGraph() {
      return this.current_type_vehicule.slug !== 'tous-type' && this.current_type_vehicule.slug !== 'particuliers';
    },
    currCatVehic() {
      return this.$route.name.indexOf('gaz') === 0 ? 'gaz' : 'elec';
    },
    current_territoire() {
      const _self = this;
      if (!_self.$route.params.locationSlug) return null;
      return external_lodash_["find"](this[this.current_type_territoire.id], function (fEntry) {
        return _self.slugify(fEntry.label) === _self.$route.params.locationSlug;
      });
    },
    current_reg() {
      const _self = this;
      if (!_self.$route.params.locationSlug) return null;
      const territoire = external_lodash_["find"](this[this.current_type_territoire.id], function (fEntry) {
        return _self.slugify(fEntry.label) === _self.$route.params.locationSlug;
      });
      const region = external_lodash_["find"](this.regions, function (fRegion) {
        return fRegion.code === territoire.code_reg;
      });
      return region;
    },
    locationField() {
      switch (this.current_type_territoire.id) {
        case 'departements':
          return 'code_dpt';
        // 'code_dpt' // Fix bug to retrieve code_dpt
        case 'regions':
          return 'code_reg';
        case 'epci':
          return 'code_epci';
        default:
          return null;
      }
    },
    locationSlug() {
      return this.$route.params.locationSlug;
    },
    vehiculeCountDatas() {
      const _self = this;
      if (!this.locationDatas) return;
      const dataEntry = external_lodash_["find"](this.locationDatas, function (fEntry) {
        return fEntry.code === _self.current_territoire.code;
      });
      if (!dataEntry) return null;
      if (this.currCatVehic === 'gaz') return dataEntry.c_total_gnv;
      return dataEntry['c_' + _self.current_type_vehicule.id];
    },
    pdcCountDatasV0() {
      const _self = this;
      if (_self.currCatVehic === 'gaz' && _self.current_territoire) {
        return _self.current_territoire.stations_gnv_reg;
      }
      const sumPDC = external_lodash_["sum"](external_lodash_["map"](external_lodash_["groupBy"](_self.inLocationDatas, 'code_epci'), function (fEntry) {
        return _self.current_type_territoire.id === 'regions' ? fEntry[0].pdc_reg : _self.current_type_territoire.id === 'departements' ? fEntry[0].pdc_dep : fEntry[0].pdc_epci;
      }));
      return sumPDC;
    },
    pdcCountDatas() {
      const _self = this;
      if (_self.currCatVehic === 'gaz' && _self.current_territoire) {
        return _self.current_territoire.stations_gnv_reg;
      }
      const checkDataUnicityReg = _self.inLocationDatas ? _self.inLocationDatas.every(val => val.pdc_reg === _self.inLocationDatas[0].pdc_reg) : false;
      const checkDataUnicityDep = _self.inLocationDatas ? _self.inLocationDatas.every(val => val.pdc_reg === _self.inLocationDatas[0].pdc_reg) : false;
      const checkDataUnicityEpci = _self.inLocationDatas ? _self.inLocationDatas.every(val => val.pdc_reg === _self.inLocationDatas[0].pdc_reg) : false;
      if (!checkDataUnicityReg || !checkDataUnicityDep || !checkDataUnicityEpci) {
        console.error('Error: Les données de PDC ne sont pas uniques pour le territoire courant');
      }
      return _self.current_type_territoire.id === 'regions' && _self.inLocationDatas ? _self.inLocationDatas[4].pdc_reg : _self.current_type_territoire.id === 'departements' && _self.inLocationDatas ? _self.inLocationDatas[0].pdc_dep : _self.current_type_territoire.id === 'epci' && _self.inLocationDatas ? _self.inLocationDatas[0].pdc_epci : 0;
    },
    percVehic() {
      // const _self = this
      return null;
    },
    stickyStatut: function () {
      // current_type_territoire.id
      // current_epci_category.id
      if (this.windowWidth < 640) {
        if (this.current_type_territoire.id === 'epci') return this.prevOffset > 900 && this.prevOffset < 2500;
        return this.prevOffset > 780 && this.prevOffset < 2000;
      }
      if (this.current_type_territoire.id === 'epci') return this.prevOffset > 880 && this.prevOffset < 2000;
      return this.prevOffset > 560 && this.prevOffset < 2000;
    }
  },
  watch: {
    'current_territoire.code': async function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      this.loadingState = 'loading';
      this.mobileLocationSelectExpanded = false;
      await this.updateDatas();
      this.loadingState = 'loaded';
    },
    'current_epci_category.id': async function () {
      this.loadingState = 'loading';
      await this.updateDatas();
      this.loadingState = 'loaded';
    }
  },
  methods: {
    startHandler() {
      if (this.$store.state.versionEnedis) return;
      this.touching = true;
    },
    endHandler() {
      if (this.$store.state.versionEnedis) return;
      // console.log('endHandler')
      this.touching = false;
    } /*
      ,
      movingHandler(fEv) {
      if (this.touching) {
        console.log('moving', fEv)
      }
      
      }
      */,
    swipeHandlerLeft() {
      if (this.$store.state.versionEnedis) return;
      // console.log('swipe L')
      this.touching = false;
      //this.carrouselIndex = 1
      this.setCarrouselIndex(this.carrouselIndex === 0 ? 1 : 0);
    },
    swipeHandlerRight() {
      if (this.$store.state.versionEnedis) return;
      // console.log('swipe R')
      this.touching = false;
      //this.carrouselIndex = 0
      this.setCarrouselIndex(this.carrouselIndex === 1 ? 0 : 1);
    },
    setCarrouselIndex(index) {
      this.carrouselIndex = index;
    },
    async updateDatas() {
      //console.log('this.locationField', this.locationField, 'this.current_territoire.code', this.current_territoire.code)

      if (!this.current_territoire) return;
      const _self = this;
      const req = '&q=' + this.locationField + '=' + this.current_territoire.code + '&rows=-1';
      //console.log('inLocationDatas', getODSRequest(req))
      const inLocationDatas = await external_axios_default.a.get(Object(config["a" /* getODSRequest */])(req)).then(response => {
        return external_lodash_["map"](response.data.records, 'fields');
      });
      //console.log('req', req)
      this.inLocationDatas = inLocationDatas;
      let reqGraph = '&x=' + this.locationField.replace('code_', 'libelle_');
      external_lodash_["each"](this.type_vehicules, function (fType) {
        reqGraph += '&y.c_' + fType.id + '.func=SUM&y.c_' + fType.id + '.expr=' + fType.id;
        reqGraph += '&y.c_' + fType.idAutre + '.func=SUM&y.c_' + fType.idAutre + '.expr=' + fType.idAutre;
      });
      if (_self.current_type_territoire.id === 'epci') {
        reqGraph += '&q=';
        if (_self.current_epci_category.id === 'classe') {
          reqGraph += 'classe_epci=' + _self.current_territoire.classe;
        } else if (_self.current_epci_category.id === 'territoire') {
          // reqGraph += _self.locationField + '=' + _self.current_territoire.code
          // reqGraph += '(code_reg' + '=' + _self.current_territoire.code_reg + ')or(code_epci=' + _self.current_territoire.code + ')'
        }
      }
      if (this.currCatVehic === 'gaz') {
        reqGraph += '&y.c_total_gnv.func=SUM&y.c_total_gnv.expr=total_gnv';
      }
      // console.log('reqGraph', reqGraph)
      const graphDatas = await external_axios_default.a.get(Object(config["a" /* getODSRequest */])(reqGraph, 'analyze')).then(response => {
        return external_lodash_["map"](response.data, function (fEntry) {
          const territoireObject = external_lodash_["find"](_self[_self.current_type_territoire.id], function (fTerritory) {
            return fTerritory.label === fEntry.x;
          });
          if (!territoireObject) {

            //console.log('territoireObject', territoireObject, fEntry.x)
          }
          let processedEPCI;
          if (territoireObject.type === 'epci') {
            processedEPCI = external_lodash_["filter"](_self.epci, function (fEpci) {
              if (territoireObject.type === 'reg') {
                return fEpci.code_reg === territoireObject.code;
              } else if (territoireObject.type === 'dpt') {
                return fEpci.code_dpt === territoireObject.code;
              } else {
                return fEpci.code === territoireObject.code;
              }
            });
          } else {
            processedEPCI = external_lodash_["filter"](_self.communes, function (fCommune) {
              if (territoireObject.type === 'reg') {
                return fCommune.code_reg === territoireObject.code;
              } else if (territoireObject.type === 'dpt') {
                return fCommune.code_dpt === territoireObject.code;
              } else {
                return fCommune.code_epci === territoireObject.code;
              }
            });
          }

          // let processedEPCI = filteredEpciByComm
          if (territoireObject.type === 'epci' && _self.current_epci_category.id === 'classe') {
            processedEPCI = external_lodash_["uniqBy"](processedEPCI, 'code_epci');
          }
          // console.log('processedEPCI', processedEPCI)

          /*console.log('processedEPCI', territoireObject.label, territoireObject.code, processedEPCI, '>>sum_pdc>>', _.sumBy(_.uniqBy(processedEPCI, 'code_epci'), function (fEpci) {
            return fEpci.pdc_epci
          }))*/

          /*
          console.log('filteredEpci', territoireObject.label, processedEPCI, territoireObject.label, _.sumBy(processedEPCI, function (fEpci) {
              return fEpci.pdc_epci
            }), _.map(processedEPCI, 'code_epci'))
            */

          return {
            ...fEntry,
            ...territoireObject,
            sum_pdc: external_lodash_["sumBy"](external_lodash_["uniqBy"](processedEPCI, 'code_epci'), function (fEpci) {
              return fEpci.pdc_epci;
            })
          };
        });
      });
      this.locationDatas = graphDatas;
    },
    mobileLocationSelectExpandToggle() {
      this.mobileLocationSelectExpanded = !this.mobileLocationSelectExpanded;
    },
    selectClass(fItem) {
      const _self = this;
      const newClass = external_lodash_["find"](_self.epci_categories, function (fEntry) {
        return fEntry.id === fItem.id;
      });
      const newClassMobile = external_lodash_["find"](_self.epci_categories_mobile, function (fEntry) {
        return fEntry.id === fItem.id;
      });
      this.current_epci_category = newClass;
      this.current_epci_category_mobile = newClassMobile;
      this.panelOpenEpciMobile = false;
    },
    scrollChooseTerritory() {
      Object(external_vue_scrollto_["scrollTo"])('#choose-territory', 500, {
        easing: 'ease-in-out',
        offset: -50
      });
    },
    handleScroll: function (e) {
      this.panelOpenEpciMobile = false;
      this.prevOffset = window.pageYOffset;
    },
    callExport(fID) {
      const _self = this;
      this.exporting = true;
      if (fID === 'quintile-graph-vehic') this.downloadindGraphVehic = true;else if (fID === 'quintile-graph-pdc') this.downloadindGraphPdc = true;else if (fID === 'quintile-graph-mapping') this.downloadindGraphMapping = true;

      // this.watermarkOn = true

      setTimeout(function () {
        const element = document.querySelector('#' + fID);
        // console.log('element', element.getBoundingClientRect())
        const elSize = element.getBoundingClientRect();
        const margin = 20;
        html2canvas(element, {
          allowTaint: true,
          x: -margin,
          y: -margin,
          width: elSize.width + margin * 2,
          height: elSize.height + margin * 2,
          /* x: -55,
          y: 0,
          scrollX: 0,
          scrollY: 0, */
          // width: 1075,
          // height: 760,
          // removeContainer: false,
          // windowWidth: 1300,
          // windowHeight: 760,
          onclone: function (document) {
            const el = document.querySelectorAll('.section-graph');
            const elBT = document.querySelectorAll('.bt-download');
            const elSticky = document.querySelectorAll('.howtoread-sticky');
            elSticky.forEach(function (fEl) {
              fEl.classList.add('hideExport');
            });
            elBT.forEach(function (fEl) {
              fEl.classList.add('hideExport');
            });
            el.forEach(function (fEl) {
              fEl.classList.add('watermarkOn');
            });

            // _self.watermarkOn = false
          }
        }).then(canvas => {
          const imgData = canvas.toDataURL('image/png', 1.0);
          const img = new Image();
          img.crossOrigin = 'Anonymous';
          img.id = 'getshot';
          img.src = imgData;
          document.body.appendChild(img);
          const a = document.createElement('a');
          a.href = img.src;
          a.download = _self.$store.state.appSlugID + '.png';
          a.click();
          document.body.removeChild(img);
          _self.isExporting = false;
          if (fID === 'quintile-graph-vehic') _self.downloadindGraphVehic = false;else if (fID === 'quintile-graph-pdc') _self.downloadindGraphPdc = false;else if (fID === 'quintile-graph-mapping') _self.downloadindGraphMapping = false;
          // _self.$store.commit('set_exportingcountry_state', false)
        });

        // _self.exportAsPDF(fID)
      }, 10);
    },
    async exportAsPDF(fID) {
      const _self = this;
      // return
      await utils["a" /* exportGTAB */](fID, {
        title: '',
        exportTitle: _self.$store.state.appSlugID + '.pdf',
        filters: []
      });
      this.isDownloading = false;
      this.exporting = false;
    }
  }
});
// CONCATENATED MODULE: ./views/elecTemplate.vue?vue&type=script&lang=js
 /* harmony default export */ var views_elecTemplatevue_type_script_lang_js = (elecTemplatevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./views/elecTemplate.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(126)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  views_elecTemplatevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "9551e2a8"
  
)

/* harmony default export */ var elecTemplate = __webpack_exports__["a"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SelectorSelectLocation: __webpack_require__(55).default,BoxSelectPageHead: __webpack_require__(119).default,ModuleVehiculeCount: __webpack_require__(120).default,ModulePdcCount: __webpack_require__(121).default,QuintilesGraph: __webpack_require__(122).default,QuintilesGraphReversepdc: __webpack_require__(123).default})


/***/ }),
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/gaz.vue?vue&type=template&id=315faa58
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('AppHeader'), _vm._ssrNode(" "), _c('elec-view'), _vm._ssrNode(" "), _c('AppFooter')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/gaz.vue?vue&type=template&id=315faa58

// EXTERNAL MODULE: ./views/elecTemplate.vue + 4 modules
var elecTemplate = __webpack_require__(135);

// EXTERNAL MODULE: ./components/app-footer.vue + 4 modules
var app_footer = __webpack_require__(117);

// EXTERNAL MODULE: ./components/app-header.vue
var app_header = __webpack_require__(114);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/gaz.vue?vue&type=script&lang=js



/* harmony default export */ var gazvue_type_script_lang_js = ({
  components: {
    elecView: elecTemplate["a" /* default */],
    AppFooter: app_footer["default"],
    AppHeader: app_header["default"]
  }
});
// CONCATENATED MODULE: ./pages/gaz.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_gazvue_type_script_lang_js = (gazvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/gaz.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_gazvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "187f8cb9"
  
)

/* harmony default export */ var gaz = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AppHeader: __webpack_require__(114).default,AppFooter: __webpack_require__(117).default})


/***/ })
]);;
//# sourceMappingURL=gaz.js.map