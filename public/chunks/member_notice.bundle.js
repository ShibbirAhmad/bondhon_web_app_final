(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["member_notice"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/member/Notice.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/member/Notice.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
      _this.noticeList();

      _this.loading = false;
    }, 500);
  },
  data: function data() {
    return {
      notices: {},
      loading: true,
      item: 10,
      search: ""
    };
  },
  methods: {
    noticeList: function noticeList() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get("/api/display/notices?page=" + page, {
        params: {
          item: this.item
        }
      }).then(function (resp) {
        console.log(resp);

        if (resp.data.status == "OK") {
          _this2.notices = resp.data.notices;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/member/Notice.vue?vue&type=template&id=67811bba&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/member/Notice.vue?vue&type=template&id=67811bba& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
        _vm._m(0),
        _vm._v(" "),
        _c("section", { staticClass: "content" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row justify-content-center" }, [
              _c("div", { staticClass: "col-lg-10 col-md-10 " }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _c(
                      "table",
                      { staticClass: "table table-hover table-stripeed " },
                      [
                        _vm._m(2),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          [
                            _vm.loading
                              ? _c("h1", { staticClass: "text-center" }, [
                                  _c("i", {
                                    staticClass: "fa fa-spin fa-spinner"
                                  })
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm._l(_vm.notices.data, function(notice, index) {
                              return _c("tr", { key: index }, [
                                _c("td", [
                                  notice.status == "0"
                                    ? _c(
                                        "p",
                                        { staticStyle: { color: "#000" } },
                                        [_vm._v("  " + _vm._s(index + 1) + " ")]
                                      )
                                    : _c(
                                        "p",
                                        { staticStyle: { color: "#566D7E" } },
                                        [_vm._v("  " + _vm._s(index + 1) + " ")]
                                      )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  notice.status == "0"
                                    ? _c(
                                        "p",
                                        { staticStyle: { color: "#000" } },
                                        [
                                          _vm._v(
                                            "  " + _vm._s(notice.name) + " "
                                          )
                                        ]
                                      )
                                    : _c(
                                        "p",
                                        { staticStyle: { color: "#566D7E" } },
                                        [
                                          _vm._v(
                                            "  " + _vm._s(notice.name) + " "
                                          )
                                        ]
                                      )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  notice.status == "0"
                                    ? _c(
                                        "textarea",
                                        {
                                          staticClass: "form-control",
                                          staticStyle: { color: "#000" },
                                          attrs: { rows: "3" }
                                        },
                                        [
                                          _vm._v(
                                            "                         " +
                                              _vm._s(notice.message) +
                                              " "
                                          )
                                        ]
                                      )
                                    : _c(
                                        "textarea",
                                        {
                                          staticClass: "form-control",
                                          staticStyle: { color: "566D7E" },
                                          attrs: { rows: "3" }
                                        },
                                        [
                                          _vm._v(
                                            "                         " +
                                              _vm._s(notice.message) +
                                              " "
                                          )
                                        ]
                                      )
                                ]),
                                _vm._v(" "),
                                _c("td")
                              ])
                            })
                          ],
                          2
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-footer" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-lg-6" },
                        [
                          _c("pagination", {
                            attrs: { data: _vm.notices, limit: 3 },
                            on: { "pagination-change-page": _vm.noticeList }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-lg-6 mt-1",
                          staticStyle: {
                            "margin-top": "25px",
                            "text-align": "right"
                          }
                        },
                        [
                          _c("p", [
                            _vm._v("\n                      Showing "),
                            _c("strong", [_vm._v(_vm._s(_vm.notices.from))]),
                            _vm._v(" to\n                      "),
                            _c("strong", [_vm._v(_vm._s(_vm.notices.to))]),
                            _vm._v(" of total\n                      "),
                            _c("strong", [_vm._v(_vm._s(_vm.notices.total))]),
                            _vm._v(" entries\n                    ")
                          ])
                        ]
                      )
                    ])
                  ])
                ])
              ])
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
    return _c(
      "section",
      {
        staticClass: "content-header",
        staticStyle: { "margin-bottom": "20px" }
      },
      [
        _c("ol", { staticClass: "breadcrumb" }, [
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("i", { staticClass: "fa fa-dashboard" }),
              _vm._v("Dashboard")
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "active" }, [_vm._v("notice")])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border text-center" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Notice messages ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Message")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/member/member/Notice.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/member/member/Notice.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notice_vue_vue_type_template_id_67811bba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notice.vue?vue&type=template&id=67811bba& */ "./resources/js/components/member/member/Notice.vue?vue&type=template&id=67811bba&");
/* harmony import */ var _Notice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notice.vue?vue&type=script&lang=js& */ "./resources/js/components/member/member/Notice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Notice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Notice_vue_vue_type_template_id_67811bba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Notice_vue_vue_type_template_id_67811bba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/member/member/Notice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/member/member/Notice.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/member/member/Notice.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Notice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/member/Notice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/member/member/Notice.vue?vue&type=template&id=67811bba&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/member/member/Notice.vue?vue&type=template&id=67811bba& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notice_vue_vue_type_template_id_67811bba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Notice.vue?vue&type=template&id=67811bba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/member/Notice.vue?vue&type=template&id=67811bba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notice_vue_vue_type_template_id_67811bba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notice_vue_vue_type_template_id_67811bba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);