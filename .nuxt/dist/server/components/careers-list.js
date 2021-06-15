exports.ids = [2,1];
exports.modules = {

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CareersItems.vue?vue&type=template&id=59ead10c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6\">"+_vm._ssrEscape("\n     "+_vm._s(_vm.career.title)+"\n\n")+"</div> "),_vm._ssrNode("<div class=\"col-md-6 text-right\">","</div>",[_c('router-link',{staticClass:"apply",attrs:{"to":("/career-detail/" + (_vm.career.id))}},[_vm._v("Apply Now")])],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CareersItems.vue?vue&type=template&id=59ead10c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CareersItems.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CareersItemsvue_type_script_lang_js_ = ({props:['career']});
// CONCATENATED MODULE: ./components/CareersItems.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CareersItemsvue_type_script_lang_js_ = (CareersItemsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CareersItems.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CareersItemsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "584d1471"
  
)

/* harmony default export */ var CareersItems = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CareersList.vue?vue&type=template&id=dfb07370&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"row py-5\">","</div>",_vm._l((_vm.careers),function(career,index){return _vm._ssrNode("<div class=\"col-md-12\">","</div>",[_vm._ssrNode("<div class=\"border-bottom p-3\">","</div>",[_vm._ssrNode("<h4>","</h4>",[_c('CareersItems',{attrs:{"career":career}})],1)])])}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CareersList.vue?vue&type=template&id=dfb07370&

// EXTERNAL MODULE: ./components/CareersItems.vue + 4 modules
var CareersItems = __webpack_require__(50);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CareersList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CareersListvue_type_script_lang_js_ = ({components:{CareersItems: CareersItems["default"]},data(){return{careers:[{id:1,title:"Web Developer"},{id:2,title:".Net Developer"},{id:3,title:"UX/UI Developer"},{id:4,title:"QA Engineer"},{id:5,title:"Data & Analytics Engineer"},{id:6,title:"Content Writer"}]};}});
// CONCATENATED MODULE: ./components/CareersList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CareersListvue_type_script_lang_js_ = (CareersListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CareersList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CareersListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "de3d3a06"
  
)

/* harmony default export */ var CareersList = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CareersItems: __webpack_require__(50).default})


/***/ })

};;
//# sourceMappingURL=careers-list.js.map