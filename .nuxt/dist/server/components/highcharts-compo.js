exports.ids = [4];
exports.modules = {

/***/ 40:
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

/***/ 43:
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

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gradient-green.5e83ff8.png";

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gradient-mapping.d62adfe.png";

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_highcharts_compo_vue_vue_type_style_index_0_id_46615fd6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_highcharts_compo_vue_vue_type_style_index_0_id_46615fd6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_highcharts_compo_vue_vue_type_style_index_0_id_46615fd6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_highcharts_compo_vue_vue_type_style_index_0_id_46615fd6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_highcharts_compo_vue_vue_type_style_index_0_id_46615fd6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".commonGraph[data-v-46615fd6],.wrapper[data-v-46615fd6]{display:block;overflow:hidden;position:relative}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=highcharts-compo.js.map