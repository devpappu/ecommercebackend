"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_backend_backend_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/backend.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/backend.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_dashboard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/dashboard.vue */ "./resources/js/components/backend/pages/dashboard.vue");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AdminDashboad: _pages_dashboard_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      menutex: true
    };
  },
  methods: {
    logout: function logout() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/auth/logout', {
        token: localStorage.getItem('token')
      }).then(function (res) {
        _this.$store.commit('SET_AUTHENTICATED', false);

        _this.$store.commit('SET_USER', '');

        localStorage.removeItem("token");

        _this.$router.push({
          name: 'login'
        });
      });
    },
    leftmenutext: function leftmenutext() {
      document.getElementById("sidebar").style.display = "block";
    },
    pdf: function pdf() {
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/generate-pdf');
    }
  },
  mounted: function mounted() {
    console.log('Backend Component mounted.');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/dashboard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/dashboard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _defineProperty({
      orders: '',
      users: '',
      products: ''
    }, "orders", '');
  },
  mounted: function mounted() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/admin/dashboard").then(function (res) {
      _this.users = res.data.users;
      _this.orders = res.data.orders;
      _this.products = res.data.products;
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/backend.vue?vue&type=style&index=0&id=1bbb061e&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/backend.vue?vue&type=style&index=0&id=1bbb061e&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_public_website_css_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../public/website/css/tailwind.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/website/css/tailwind.css");
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css);"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_public_website_css_tailwind_css__WEBPACK_IMPORTED_MODULE_1__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.router-link-active[data-v-1bbb061e]{\n    background: #e7eaeb\n}\n*body[data-v-1bbb061e] {\n    margin: 0;\n    padding: 0;\n    font-family: 'Montserrat', sans-serif;\n    font-style: normal;\n}\n*[data-v-1bbb061e]{\n    font-style: normal;\n}\n\n\n/* width */\n[data-v-1bbb061e]::-webkit-scrollbar {\n    width: 10px;\n}\n\n\n/* Track */\n[data-v-1bbb061e]::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px grey;\n    border-radius: 0px !important;\n}\n\n\n/* Handle */\n[data-v-1bbb061e]::-webkit-scrollbar-thumb {\n    background: #bac1c4;\n    border-radius: 10px;\n}\n\n\n/* Handle on hover */\n[data-v-1bbb061e]::-webkit-scrollbar-thumb:hover {\n    background: #a6b2b4;\n}\n.content[data-v-1bbb061e] {\n    margin-left: 172px;\n    height: 100vh;\n    transition: 0.3s !important;\n}\n@media screen and (max-width: 780px) {\n.content[data-v-1bbb061e] {\n        margin-left: 55px !important;\n}\n.admin.menu-setting .sidebar[data-v-1bbb061e] {\n        width: 60px !important;\n}\n}\n\n\n\n/* JS MENU */\n.admin.menu-setting .sidebar[data-v-1bbb061e] {\n    width: 68px;\n}\n.admin.menu-setting .content[data-v-1bbb061e] {\n    margin-left: 67px\n}\n.admin.menu-setting .sidebar a span[data-v-1bbb061e],\n.admin.menu-setting .profile_info[data-v-1bbb061e] {\n    display: none;\n}\n.admin.menu-setting .sidebar a[data-v-1bbb061e] {\n    padding-left: 22px;\n}\n.admin[data-v-1bbb061e]{\n    background: #f3f3f5 !important;\n}\n\n\n/* Start Sidebar*/\n.sidebar[data-v-1bbb061e] {\n    z-index: 1;\n    top: 0;\n    /* margin-top: 57px;\n    padding-top: 14px; */\n    position: fixed;\n    left: 0;\n    width: 170px;\n    height: 100%;\n    /* transition: 0.3s !important; */\n    transition-property: left;\n    overflow-y: auto;\n}\n.sidebar a[data-v-1bbb061e] {\n    font-size: 14px;\n    color: #363940 !important;\n    display: block;\n    width: 100%;\n    line-height: 45px;\n    text-decoration: none;\n    padding-left: 25px;\n    box-sizing: border-box;\n    font-family: sans-serif;\n    font-style: normal !important;\n    /* transition: 0.1s; */\n}\n.sidebar a[data-v-1bbb061e]:hover {\n    color: black;\n    /* font-size: 15px; */\n    background-color: #eaeff3;\n    padding-left: 24px;\n}\na#icon-menu[data-v-1bbb061e] {\n    color: white;\n    margin-left: 35px;\n    font-size: 18px;\n}\n.sidebar i[data-v-1bbb061e] {\n    padding-right: 10px;\n}\n\n/* .top-header {\n    z-index: 1;\n    position: absolute;\n    top: 0;\n} */\n.admin-name[data-v-1bbb061e] {\n    color: white;\n}\n.sidebar li[data-v-1bbb061e] {\n    padding: 2px 10px;\n}\n\n\n\n/* End Sidebar*/\n\n\n/* Start header css on phone */\n@media screen and (max-width: 780px) {\nspan.admin-name[data-v-1bbb061e] {\n        display: none;\n}\n.sidebar a[data-v-1bbb061e] {\n        padding-left: 20px !important;\n}\n.admin.menu-setting .sidebar[data-v-1bbb061e] {\n        width: 0px !important;\n}\n.content[data-v-1bbb061e] {\n        margin-left: 0px !important;\n}\n.admin.menu-setting .sidebar a span[data-v-1bbb061e],\n.admin.menu-setting .profile_info[data-v-1bbb061e] {\n    display: none !important;\n}\n}\n@media screen and (max-width: 780px) {\n.sidebar[data-v-1bbb061e]  {\n        display: none;\n}\n}\n\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/dashboard.vue?vue&type=style&index=0&id=3b7fe513&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/dashboard.vue?vue&type=style&index=0&id=3b7fe513&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.white-bg[data-v-3b7fe513]{\n    background: white;\n}\n.red-bg[data-v-3b7fe513]{\n    background: red;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/website/css/tailwind.css":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/website/css/tailwind.css ***!
  \*******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/backend.vue?vue&type=style&index=0&id=1bbb061e&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/backend.vue?vue&type=style&index=0&id=1bbb061e&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_backend_vue_vue_type_style_index_0_id_1bbb061e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./backend.vue?vue&type=style&index=0&id=1bbb061e&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/backend.vue?vue&type=style&index=0&id=1bbb061e&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_backend_vue_vue_type_style_index_0_id_1bbb061e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_backend_vue_vue_type_style_index_0_id_1bbb061e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/dashboard.vue?vue&type=style&index=0&id=3b7fe513&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/dashboard.vue?vue&type=style&index=0&id=3b7fe513&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_3b7fe513_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=style&index=0&id=3b7fe513&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/dashboard.vue?vue&type=style&index=0&id=3b7fe513&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_3b7fe513_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_3b7fe513_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/components/backend/backend.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/backend/backend.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _backend_vue_vue_type_template_id_1bbb061e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backend.vue?vue&type=template&id=1bbb061e&scoped=true& */ "./resources/js/components/backend/backend.vue?vue&type=template&id=1bbb061e&scoped=true&");
/* harmony import */ var _backend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backend.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/backend.vue?vue&type=script&lang=js&");
/* harmony import */ var _backend_vue_vue_type_style_index_0_id_1bbb061e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backend.vue?vue&type=style&index=0&id=1bbb061e&scoped=true&lang=css& */ "./resources/js/components/backend/backend.vue?vue&type=style&index=0&id=1bbb061e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _backend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _backend_vue_vue_type_template_id_1bbb061e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _backend_vue_vue_type_template_id_1bbb061e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1bbb061e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/backend.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/pages/dashboard.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/backend/pages/dashboard.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dashboard_vue_vue_type_template_id_3b7fe513_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=3b7fe513&scoped=true& */ "./resources/js/components/backend/pages/dashboard.vue?vue&type=template&id=3b7fe513&scoped=true&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/pages/dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _dashboard_vue_vue_type_style_index_0_id_3b7fe513_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.vue?vue&type=style&index=0&id=3b7fe513&scoped=true&lang=css& */ "./resources/js/components/backend/pages/dashboard.vue?vue&type=style&index=0&id=3b7fe513&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _dashboard_vue_vue_type_template_id_3b7fe513_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _dashboard_vue_vue_type_template_id_3b7fe513_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3b7fe513",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/pages/dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/backend.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/backend/backend.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_backend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./backend.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/backend.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_backend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/backend/pages/dashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/backend/pages/dashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/backend/backend.vue?vue&type=style&index=0&id=1bbb061e&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/backend/backend.vue?vue&type=style&index=0&id=1bbb061e&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_backend_vue_vue_type_style_index_0_id_1bbb061e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./backend.vue?vue&type=style&index=0&id=1bbb061e&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/backend.vue?vue&type=style&index=0&id=1bbb061e&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/backend/pages/dashboard.vue?vue&type=style&index=0&id=3b7fe513&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/backend/pages/dashboard.vue?vue&type=style&index=0&id=3b7fe513&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_3b7fe513_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=style&index=0&id=3b7fe513&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/dashboard.vue?vue&type=style&index=0&id=3b7fe513&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/backend/backend.vue?vue&type=template&id=1bbb061e&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/backend/backend.vue?vue&type=template&id=1bbb061e&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_backend_vue_vue_type_template_id_1bbb061e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_backend_vue_vue_type_template_id_1bbb061e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_backend_vue_vue_type_template_id_1bbb061e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./backend.vue?vue&type=template&id=1bbb061e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/backend.vue?vue&type=template&id=1bbb061e&scoped=true&");


/***/ }),

/***/ "./resources/js/components/backend/pages/dashboard.vue?vue&type=template&id=3b7fe513&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/backend/pages/dashboard.vue?vue&type=template&id=3b7fe513&scoped=true& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_3b7fe513_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_3b7fe513_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_3b7fe513_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=template&id=3b7fe513&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/dashboard.vue?vue&type=template&id=3b7fe513&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/backend.vue?vue&type=template&id=1bbb061e&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/backend.vue?vue&type=template&id=1bbb061e&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {}, [
    _c("div", { staticClass: "admin" }, [
      _c(
        "nav",
        { staticClass: "sidebar bg-white shadow-lg", attrs: { id: "sidebar" } },
        [
          _c(
            "div",
            {
              staticClass: "mt-3 p-2 text-center text-black",
              attrs: { id: "authName" }
            },
            [_c("span", [_vm._v("! Hello " + _vm._s(_vm.AuthUser.name))])]
          ),
          _vm._v(" "),
          _c("ul", { staticClass: "mt-2" }, [
            _c(
              "li",
              [
                _c(
                  "router-link",
                  { attrs: { to: { name: "admin-dashboard" } } },
                  [
                    _c("i", { staticClass: "las la-cart-arrow-down" }),
                    _c("span", { staticClass: "menuText" }, [
                      _vm._v("Dashboard")
                    ])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("router-link", { attrs: { to: { name: "all-users" } } }, [
                  _c("i", { staticClass: "las la-user-secret" }),
                  _c("span", { staticClass: "menuText" }, [_vm._v("Users")])
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("router-link", { attrs: { to: { name: "orders" } } }, [
                  _c("i", { staticClass: "las la-cart-arrow-down" }),
                  _c("span", { staticClass: "menuText" }, [_vm._v("Orders")])
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c(
                  "router-link",
                  { attrs: { to: { name: "product-create" } } },
                  [
                    _c("i", { staticClass: "las la-hand-point-right" }),
                    _c("span", { staticClass: "menuText" }, [
                      _vm._v("Add Product")
                    ])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("router-link", { attrs: { to: { name: "category" } } }, [
                  _c("i", { staticClass: "las la-hand-point-right" }),
                  _c("span", { staticClass: "menuText" }, [
                    _vm._v("Category List")
                  ])
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c(
                  "router-link",
                  { attrs: { to: { name: "product-lists" } } },
                  [
                    _c("i", { staticClass: "las la-hand-point-right" }),
                    _c("span", { staticClass: "menuText" }, [
                      _vm._v("All Products")
                    ])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("router-link", { attrs: { to: { name: "coupon" } } }, [
                  _c("i", { staticClass: "las la-hand-point-right" }),
                  _c("span", { staticClass: "menuText" }, [_vm._v("Coupon")])
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("li", [
              _c("button", { on: { click: _vm.pdf } }, [
                _c("i", { staticClass: "las la-hand-point-right" }),
                _vm._v("PDF Download")
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                {
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      return _vm.logout()
                    }
                  }
                },
                [
                  _c("i", { staticClass: "las la-sign-out-alt" }),
                  _c("span", { staticClass: "menuText" }, [_vm._v("Logout")])
                ]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "content  font-normal" }, [
        _c(
          "div",
          {
            staticClass:
              "flex items-center  justify-between px-2 h-16 bg-purple-700 shadow-2xl"
          },
          [
            _c("div", { staticClass: "pl-3 w-full" }, [
              _c("span", { staticClass: "admin-name" }, [
                _vm._v("!! Hello " + _vm._s(_vm.AuthUser.name))
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  attrs: { href: "#", id: "icon-menu" },
                  on: {
                    click: function($event) {
                      return _vm.leftmenutext()
                    }
                  }
                },
                [_c("i", { staticClass: "las la-expand-arrows-alt lg:hidden" })]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "routing h-screen py-4 px-4 bg-gray-100" },
          [
            _vm.$router.currentRoute.name === "admin-dashboard"
              ? _c("div", [_c("admin-dashboad")], 1)
              : _vm._e(),
            _vm._v(" "),
            _c("router-view")
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/dashboard.vue?vue&type=template&id=3b7fe513&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/dashboard.vue?vue&type=template&id=3b7fe513&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dashboard" }, [
    _c(
      "h2",
      {
        staticClass:
          "text-2xl mb-3 font-semibold text-gray-700 dark:text-gray-200"
      },
      [_vm._v("\n          Dashboard\n        ")]
    ),
    _vm._v(" "),
    _c(
      "a",
      {
        staticClass:
          "flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple",
        attrs: { href: "#" }
      },
      [
        _c("div", { staticClass: "flex items-center" }, [
          _c(
            "svg",
            {
              staticClass: "w-5 h-5 mr-2",
              attrs: { fill: "currentColor", viewBox: "0 0 20 20" }
            },
            [
              _c("path", {
                attrs: {
                  d:
                    "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                }
              })
            ]
          ),
          _vm._v(" "),
          _c("span", [_vm._v("Star this ")])
        ]),
        _vm._v(" "),
        _c("span", [_vm._v("View more →")])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4" },
      [
        _c(
          "div",
          {
            staticClass:
              "flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500"
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "w-5 h-5",
                    attrs: { fill: "currentColor", viewBox: "0 0 20 20" }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                      }
                    })
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("div", [
              _c(
                "p",
                {
                  staticClass:
                    "mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                },
                [_vm._v("\n                    Total Users\n                ")]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "text-lg font-semibold text-gray-700 dark:text-gray-200"
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.users) +
                      "\n                "
                  )
                ]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500"
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "w-5 h-5",
                    attrs: { fill: "currentColor", viewBox: "0 0 20 20" }
                  },
                  [
                    _c("path", {
                      attrs: {
                        "fill-rule": "evenodd",
                        d:
                          "M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z",
                        "clip-rule": "evenodd"
                      }
                    })
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _vm._m(0)
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500"
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "w-5 h-5",
                    attrs: { fill: "currentColor", viewBox: "0 0 20 20" }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                      }
                    })
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("div", [
              _c(
                "p",
                {
                  staticClass:
                    "mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                },
                [_vm._v("\n                    Orders\n                ")]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "text-lg font-semibold text-gray-700 dark:text-gray-200"
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.orders) +
                      "\n                "
                  )
                ]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500"
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "w-5 h-5",
                    attrs: { fill: "currentColor", viewBox: "0 0 20 20" }
                  },
                  [
                    _c("path", {
                      attrs: {
                        "fill-rule": "evenodd",
                        d:
                          "M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z",
                        "clip-rule": "evenodd"
                      }
                    })
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("div", [
              _c(
                "p",
                {
                  staticClass:
                    "mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                },
                [_vm._v("\n                    Products\n                ")]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "text-lg font-semibold text-gray-700 dark:text-gray-200"
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.products) +
                      "\n                "
                  )
                ]
              )
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "table-div" }, [
      _c(
        "div",
        { staticClass: "w-full overflow-hidden rounded-lg shadow-xs" },
        [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
            },
            [
              _c("span", { staticClass: "flex items-center col-span-3" }, [
                _vm._v(
                  "\n                    Showing 21-30 of 100\n                "
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "col-span-2" }),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "flex col-span-4 mt-2 sm:mt-auto sm:justify-end"
                },
                [
                  _c("nav", { attrs: { "aria-label": "Table navigation" } }, [
                    _c("ul", { staticClass: "inline-flex items-center" }, [
                      _c("li", [
                        _c(
                          "button",
                          {
                            staticClass:
                              "px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple",
                            attrs: { "aria-label": "Previous" }
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "w-4 h-4 fill-current",
                                attrs: {
                                  "aria-hidden": "true",
                                  viewBox: "0 0 20 20"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                                    "clip-rule": "evenodd",
                                    "fill-rule": "evenodd"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _vm._m(2),
                      _vm._v(" "),
                      _vm._m(3),
                      _vm._v(" "),
                      _vm._m(4),
                      _vm._v(" "),
                      _vm._m(5),
                      _vm._v(" "),
                      _vm._m(6),
                      _vm._v(" "),
                      _vm._m(7),
                      _vm._v(" "),
                      _vm._m(8),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "button",
                          {
                            staticClass:
                              "px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple",
                            attrs: { "aria-label": "Next" }
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "w-4 h-4 fill-current",
                                attrs: {
                                  "aria-hidden": "true",
                                  viewBox: "0 0 20 20"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                    "clip-rule": "evenodd",
                                    "fill-rule": "evenodd"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ])
                    ])
                  ])
                ]
              )
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "p",
        {
          staticClass:
            "mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
        },
        [_vm._v("\n                    Account balance\n                ")]
      ),
      _vm._v(" "),
      _c(
        "p",
        {
          staticClass: "text-lg font-semibold text-gray-700 dark:text-gray-200"
        },
        [_vm._v("\n                    $ 46,760.89\n                ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-full overflow-x-auto" }, [
      _c("table", { staticClass: "w-full whitespace-no-wrap" }, [
        _c("thead", [
          _c(
            "tr",
            {
              staticClass:
                "text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
            },
            [
              _c("th", { staticClass: "px-4 py-3" }, [_vm._v("Client")]),
              _vm._v(" "),
              _c("th", { staticClass: "px-4 py-3" }, [_vm._v("Amount")]),
              _vm._v(" "),
              _c("th", { staticClass: "px-4 py-3" }, [_vm._v("Status")]),
              _vm._v(" "),
              _c("th", { staticClass: "px-4 py-3" }, [_vm._v("Date")])
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "tbody",
          {
            staticClass:
              "bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
          },
          [
            _c("tr", { staticClass: "text-gray-700 dark:text-gray-400" }, [
              _c("td", { staticClass: "px-4 py-3" }, [
                _c("div", { staticClass: "flex items-center text-sm" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "relative hidden w-8 h-8 mr-3 rounded-full md:block"
                    },
                    [
                      _c("img", {
                        staticClass: "object-cover w-full h-full rounded-full",
                        attrs: {
                          src:
                            "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
                          alt: "",
                          loading: "lazy"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", {
                        staticClass:
                          "absolute inset-0 rounded-full shadow-inner",
                        attrs: { "aria-hidden": "true" }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", [
                    _c("p", { staticClass: "font-semibold" }, [
                      _vm._v("Hans Burger")
                    ]),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "text-xs text-gray-600 dark:text-gray-400"
                      },
                      [
                        _vm._v(
                          "\n                                            10x Developer\n                                        "
                        )
                      ]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "px-4 py-3 text-sm" }, [
                _vm._v(
                  "\n                                $ 863.45\n                            "
                )
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "px-4 py-3 text-xs" }, [
                _c(
                  "span",
                  {
                    staticClass:
                      "px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                  },
                  [
                    _vm._v(
                      "\n                                    Approved\n                                "
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "px-4 py-3 text-sm" }, [
                _vm._v(
                  "\n                                6/10/2020\n                            "
                )
              ])
            ])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "button",
        {
          staticClass:
            "px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
        },
        [
          _vm._v(
            "\n                                    1\n                                "
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "button",
        {
          staticClass:
            "px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
        },
        [
          _vm._v(
            "\n                                    2\n                                "
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "button",
        {
          staticClass:
            "px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"
        },
        [
          _vm._v(
            "\n                                    3\n                                "
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "button",
        {
          staticClass:
            "px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
        },
        [
          _vm._v(
            "\n                                    4\n                                "
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [_c("span", { staticClass: "px-3 py-1" }, [_vm._v("...")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "button",
        {
          staticClass:
            "px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
        },
        [
          _vm._v(
            "\n                                    8\n                                "
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "button",
        {
          staticClass:
            "px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
        },
        [
          _vm._v(
            "\n                                    9\n                                "
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);