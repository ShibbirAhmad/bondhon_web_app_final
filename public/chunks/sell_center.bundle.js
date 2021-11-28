(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sell_center"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/sell_center/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/sell_center/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.getShowroms();
  },
  data: function data() {
    return {
      sellcenters: "",
      loading: true,
      base_url: this.$store.state.image_base_link
    };
  },
  methods: {
    goToSellCenterDashboard: function goToSellCenterDashboard(id) {
      axios.get('/api/admin/access/to/sell/center/' + id).then(function (resp) {
        console.log(resp);

        if (resp.data.status == 'SUCCESS') {
          localStorage.setItem('sell_center_token', resp.data.sell_center_token);
          window.open('/sell/center/dashboard');
        }
      });
    },
    getShowroms: function getShowroms() {
      var _this = this;

      axios.get("/api/list/of/sellcenter").then(function (resp) {
        if (resp.data.status == "SUCCESS") {
          _this.sellcenters = resp.data.sellcenters;
          _this.loading = false;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/sell_center/Index.vue?vue&type=template&id=b1e696ec&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/sell_center/Index.vue?vue&type=template&id=b1e696ec&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
      _c("admin-main"),
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
                  attrs: { to: { name: "sell_center_add" } }
                },
                [_c("i", { staticClass: "fa fa-plus" })]
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
            _c("div", { staticClass: "row justify-content-center" }, [
              _c("div", { staticClass: "col-lg-11 col-md-11 col-sm-11 " }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _c(
                      "table",
                      {
                        staticClass:
                          "table table-bordered table-striped text-center"
                      },
                      [
                        _vm._m(2),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          [
                            _vm.loading
                              ? _c("h1", [
                                  _c("i", {
                                    staticClass: "fa fa-spin fa-spinner"
                                  })
                                ])
                              : _vm._l(_vm.sellcenters, function(
                                  sellcenter,
                                  index
                                ) {
                                  return _c("tr", { key: index }, [
                                    _c("td", { attrs: { scope: "row" } }, [
                                      _vm._v(_vm._s(index + 1))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(sellcenter.name))]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(sellcenter.address))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(sellcenter.phone))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(
                                          sellcenter.licience
                                            ? sellcenter.licience
                                            : "None"
                                        )
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("img", {
                                        attrs: {
                                          src: _vm.base_url + sellcenter.logo,
                                          alt: "logo",
                                          width: "50px",
                                          height: "50px"
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      sellcenter.status == 1
                                        ? _c(
                                            "span",
                                            {
                                              staticClass: "badge badge-success"
                                            },
                                            [_vm._v(" Active ")]
                                          )
                                        : _c(
                                            "span",
                                            {
                                              staticClass: "badge badge-success"
                                            },
                                            [_vm._v(" De-Active ")]
                                          )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-success",
                                            staticStyle: {
                                              "margin-bottom": "5px"
                                            },
                                            attrs: {
                                              to: {
                                                name: "sell_center_edit",
                                                params: { id: sellcenter.id }
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-edit"
                                            }),
                                            _vm._v(" Edit Info ")
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-success",
                                            on: {
                                              click: function($event) {
                                                return _vm.goToSellCenterDashboard(
                                                  sellcenter.id
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v("Dashboard")]
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                })
                          ],
                          2
                        )
                      ]
                    )
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
    return _c("ol", { staticClass: "breadcrumb" }, [
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("i", { staticClass: "fa fa-dashboard" }),
          _vm._v("Dashboard")
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "active" }, [_vm._v("Sell Center")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border text-center" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Sell Center table")])
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
        _c("th", { attrs: { scope: "col" } }, [_vm._v("name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Place")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Phone")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Licience")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Logo")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/sell_center/Index.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/admin/sell_center/Index.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_b1e696ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=b1e696ec&scoped=true& */ "./resources/js/components/admin/sell_center/Index.vue?vue&type=template&id=b1e696ec&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/sell_center/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_b1e696ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_b1e696ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b1e696ec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/sell_center/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/sell_center/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/admin/sell_center/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/sell_center/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/sell_center/Index.vue?vue&type=template&id=b1e696ec&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/admin/sell_center/Index.vue?vue&type=template&id=b1e696ec&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_b1e696ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=b1e696ec&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/sell_center/Index.vue?vue&type=template&id=b1e696ec&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_b1e696ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_b1e696ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);