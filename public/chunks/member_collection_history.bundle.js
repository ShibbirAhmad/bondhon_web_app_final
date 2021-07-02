(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["member_collection_history"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/account/Collection.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/account/Collection.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    var _this = this;

    setTimeout(function () {
      _this.collectionList();
    }, 1000);
  },
  data: function data() {
    return {
      collections: {},
      loading: true
    };
  },
  methods: {
    collectionList: function collectionList() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get("/api/list/member/collections?page=" + page).then(function (resp) {
        if (resp.data.status == "OK") {
          _this2.collections = resp.data.collections;
          _this2.loading = false;
        }
      });
    },
    totalCollections: function totalCollections() {
      if (this.collections.data) {
        var total = 0;
        this.collections.data.forEach(function (element) {
          total += element.amount;
        });
        return total;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/account/Collection.vue?vue&type=style&index=0&id=0da97f3a&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/account/Collection.vue?vue&type=style&index=0&id=0da97f3a&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.box[data-v-0da97f3a]{\r\n  min-height: 400px;\n}\n@media screen and (max-width:450px) {\n.row[data-v-0da97f3a] {\r\n    margin-right: -30px !important;\r\n    margin-left: -30px !important;\n}\n.col-xs-12[data-v-0da97f3a] {\r\n    width: 100% !important;\n}\n.table_container[data-v-0da97f3a] {\r\n    overflow-x:scroll;\n}\n.item_displayer[data-v-0da97f3a]{\r\n    margin-left:10px;\n}\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/account/Collection.vue?vue&type=style&index=0&id=0da97f3a&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/account/Collection.vue?vue&type=style&index=0&id=0da97f3a&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Collection.vue?vue&type=style&index=0&id=0da97f3a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/account/Collection.vue?vue&type=style&index=0&id=0da97f3a&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/account/Collection.vue?vue&type=template&id=0da97f3a&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/account/Collection.vue?vue&type=template&id=0da97f3a&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("member-main"),
      _vm._v(" "),
      _c("div", { staticClass: "content-wrapper" }, [
        _c("section", { staticClass: "content-header" }, [
          _c(
            "h1",
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-primary",
                  attrs: { to: { name: "member_dashboard" } }
                },
                [_c("i", { staticClass: "fa fa-arrow-left" })]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "content" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row " }, [
              _c(
                "div",
                { staticClass: "col-lg-10 col-md-10 col-sm-10 col-xs-12 " },
                [
                  _c("div", { staticClass: "box box-primary" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "box-body" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "table_container col-lg-12 col-md-12 col-xs-12"
                        },
                        [
                          _c(
                            "table",
                            {
                              staticClass:
                                "table table-striped text-center table-borderd"
                            },
                            [
                              _vm._m(2),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                [
                                  _vm._l(_vm.collections.data, function(
                                    item,
                                    index
                                  ) {
                                    return _c("tr", { key: index }, [
                                      _c("td", [_vm._v(_vm._s(index + 1))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(item.date))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            item.month ? item.month : "empty"
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(item.comment))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(item.amount))])
                                    ])
                                  }),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c("td", { attrs: { colspan: "4" } }, [
                                      _vm._v("In Total")
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(_vm.totalCollections()))
                                    ])
                                  ])
                                ],
                                2
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "box-footer" }, [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-sm-12" },
                          [
                            _c("pagination", {
                              attrs: { data: _vm.collections, limit: 3 },
                              on: { "pagination-change-page": _vm.collections }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-12" }, [
                          _c("p", { staticClass: "item_displayer" }, [
                            _vm._v(
                              "\n                      Showing\n                      "
                            ),
                            _c("strong", [
                              _vm._v(_vm._s(_vm.collections.from))
                            ]),
                            _vm._v(" to\n                      "),
                            _c("strong", [_vm._v(_vm._s(_vm.collections.to))]),
                            _vm._v(" of total\n                      "),
                            _c("strong", [
                              _vm._v(_vm._s(_vm.collections.total))
                            ]),
                            _vm._v(" entries\n                    ")
                          ])
                        ])
                      ])
                    ])
                  ])
                ]
              )
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ol", { staticClass: "breadcrumb" }, [
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("i", { staticClass: "fa fa-dashboard" }),
          _vm._v("Dashboard")
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "active" }, [_vm._v("Collectios")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border text-center" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Collection History")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("#")]),
      _vm._v(" "),
      _c("th", [_vm._v("Date")]),
      _vm._v(" "),
      _c("th", [_vm._v("Month")]),
      _vm._v(" "),
      _c("th", [_vm._v("Comment")]),
      _vm._v(" "),
      _c("th", [_vm._v("Amount")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/member/account/Collection.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/member/account/Collection.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Collection_vue_vue_type_template_id_0da97f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collection.vue?vue&type=template&id=0da97f3a&scoped=true& */ "./resources/js/components/member/account/Collection.vue?vue&type=template&id=0da97f3a&scoped=true&");
/* harmony import */ var _Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collection.vue?vue&type=script&lang=js& */ "./resources/js/components/member/account/Collection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Collection_vue_vue_type_style_index_0_id_0da97f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Collection.vue?vue&type=style&index=0&id=0da97f3a&scoped=true&lang=css& */ "./resources/js/components/member/account/Collection.vue?vue&type=style&index=0&id=0da97f3a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Collection_vue_vue_type_template_id_0da97f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Collection_vue_vue_type_template_id_0da97f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0da97f3a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/member/account/Collection.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/member/account/Collection.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/member/account/Collection.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Collection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/account/Collection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/member/account/Collection.vue?vue&type=style&index=0&id=0da97f3a&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/member/account/Collection.vue?vue&type=style&index=0&id=0da97f3a&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_0da97f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Collection.vue?vue&type=style&index=0&id=0da97f3a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/account/Collection.vue?vue&type=style&index=0&id=0da97f3a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_0da97f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_0da97f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_0da97f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_0da97f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_0da97f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/member/account/Collection.vue?vue&type=template&id=0da97f3a&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/member/account/Collection.vue?vue&type=template&id=0da97f3a&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_template_id_0da97f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Collection.vue?vue&type=template&id=0da97f3a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/account/Collection.vue?vue&type=template&id=0da97f3a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_template_id_0da97f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_template_id_0da97f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);