(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/category/Category.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/category/Category.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Index */ "./resources/js/components/admin/Index.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Index: _Index__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  created: function created() {
    var _this = this;

    setTimeout(function () {
      _this.category();
    }, 500);
  },
  data: function data() {
    return {
      categories: {},
      loading: true,
      search: '',
      basePath: this.$store.state.image_base_link
    };
  },
  methods: {
    category: function category() {
      var _this2 = this;

      axios.get('/list/category').then(function (resp) {
        console.log(resp); //  console.log(resp.data.admins.data)

        if (resp.data.status == 'SUCCESS') {
          _this2.categories = resp.data.categories;
          _this2.loading = false;
        } else {
          _this2.$toasted.show('some thing want to wrong', {
            type: "error",
            position: 'top-center',
            duration: 5000
          });
        }
      })["catch"](function (error) {
        _this2.$toasted.show('some thing want to wrong', {
          type: "error",
          position: 'top-center',
          duration: 4000
        });
      });
    },
    unselected: function unselected(category) {
      var _this3 = this;

      axios.get('/unselected/category/' + category.id).then(function (resp) {
        //console.log(resp)
        if (resp.data.status == 'SUCCESS') {
          _this3.category();

          _this3.$toasted.show(resp.data.message, {
            type: "success",
            position: 'top-center',
            duration: 4000
          });
        } else {
          _this3.$toasted.show('something want to wrong', {
            type: "error",
            position: 'top-center',
            duration: 4000
          });
        }
      })["catch"](function (error) {
        _this3.$toasted.show('some thing want to wrong', {
          type: "error",
          position: 'top-center',
          duration: 4000
        });
      });
    },
    selected: function selected(category) {
      var _this4 = this;

      axios.get('/selected/category/' + category.id).then(function (resp) {
        //  console.log(resp)
        if (resp.data.status == 'SUCCESS') {
          _this4.category();

          _this4.$toasted.show(resp.data.message, {
            type: "success",
            position: 'top-center',
            duration: 4000
          });
        } else {
          _this4.$toasted.show('some thing want to wrong', {
            type: "error",
            position: 'top-center',
            duration: 4000
          });
        }
      })["catch"](function (error) {
        _this4.$toasted.show('some thing want to wrong', {
          type: "error",
          position: 'top-center',
          duration: 4000
        });
      });
    },
    active: function active(category) {
      var _this5 = this;

      axios.get('/active/category/' + category.id).then(function (resp) {
        //   console.log(resp)
        if (resp.data.status == 'SUCCESS') {
          _this5.category();

          _this5.$toasted.show(resp.data.message, {
            type: "success",
            position: 'top-center',
            duration: 4000
          });
        } else {
          _this5.$toasted.show('some thing want to wrong', {
            type: "error",
            position: 'top-center',
            duration: 4000
          });
        }
      })["catch"](function (error) {
        _this5.$toasted.show('some thing want to wrong', {
          type: "error",
          position: 'top-center',
          duration: 4000
        });
      });
    },
    deActive: function deActive(category) {
      var _this6 = this;

      axios.get('/deActive/category/' + category.id).then(function (resp) {
        //   console.log(resp)
        if (resp.data.status == 'SUCCESS') {
          _this6.category();

          _this6.$toasted.show(resp.data.message, {
            type: "success",
            position: 'top-center',
            duration: 4000
          });
        } else {
          _this6.$toasted.show('some thing want to wrong', {
            type: "error",
            position: 'top-center',
            duration: 4000
          });
        }
      })["catch"](function (error) {
        _this6.$toasted.show('some thing want to wrong', {
          type: "error",
          position: 'top-center',
          duration: 4000
        });
      });
    },
    searchResult: function searchResult() {
      var _this7 = this;

      if (this.search.length > 1) {
        this.loading = true;
        axios.get('/search/category/' + this.search).then(function (resp) {
          console.log(resp);

          if (resp.data.status == 'SUCCESS') {
            _this7.loading = false;
            _this7.categories = resp.data.categories;
          } else {
            _this7.$toasted.show('some thing want to wrong', {
              type: "error",
              position: 'top-center',
              duration: 4000
            });
          }
        })["catch"](function (error) {
          _this7.$toasted.show('some thing want to wrong', {
            type: "error",
            position: 'top-center',
            duration: 4000
          });
        });
      } else {
        this.category();
      }
    },
    getPagination: function getPagination() {
      var _this8 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.loading = true;
      axios.get('/list/category?page=' + page).then(function (response) {
        _this8.loading = false;
        _this8.categories = response.data.categories;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/category/Category.vue?vue&type=template&id=0b45bc54&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/category/Category.vue?vue&type=template&id=0b45bc54&scoped=true& ***!
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
                  attrs: { to: { name: "categoryAdd" } }
                },
                [_c("i", { staticClass: "fa fa-plus" })]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-success",
                  attrs: { to: { name: "SubCategory" } }
                },
                [_vm._v("sub category")]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-primary",
                  attrs: { to: { name: "subSubCategory" } }
                },
                [_vm._v("sub sub category")]
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
              _c("div", { staticClass: "col-lg-8 col-lg-offset-1" }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _c("div", { staticClass: "box-header with-border" }, [
                    _c("div", { staticClass: "row" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-6" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.search,
                              expression: "search"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "Enter Category name"
                          },
                          domProps: { value: _vm.search },
                          on: {
                            keyup: _vm.searchResult,
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.search = $event.target.value
                            }
                          }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _c("table", { staticClass: "table" }, [
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
                            : _vm._l(_vm.categories.data, function(
                                category,
                                index
                              ) {
                                return _c("tr", { key: index }, [
                                  _c("td", { attrs: { scope: "row" } }, [
                                    _vm._v(_vm._s(index + 1))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(category.name))]),
                                  _vm._v(" "),
                                  _c("td", [
                                    category.icon_image
                                      ? _c("img", {
                                          staticClass: "img-circle small-image",
                                          attrs: {
                                            src:
                                              _vm.basePath +
                                              category.icon_image,
                                            alt: "Category Image"
                                          }
                                        })
                                      : _c("img", {
                                          staticClass: "img-circle small-image",
                                          attrs: {
                                            src:
                                              _vm.basePath +
                                              "images/static/noimage.png",
                                            alt: "Category Image"
                                          }
                                        })
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    category.is_selected == 1
                                      ? _c("span", { staticClass: "badge" }, [
                                          _c("i", {
                                            staticClass: "fa fa-check"
                                          })
                                        ])
                                      : _c("span", { staticClass: "badge" }, [
                                          _c("i", {
                                            staticClass: "fa fa-close"
                                          })
                                        ])
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    category.status == 1
                                      ? _c("span", { staticClass: "badge" }, [
                                          _vm._v("active")
                                        ])
                                      : _c("span", { staticClass: "badge" }, [
                                          _vm._v("De-active")
                                        ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass: "btn btn-success btn-sm",
                                          attrs: {
                                            to: {
                                              name: "CategoryEdit",
                                              params: {
                                                categoryId: category.id
                                              }
                                            }
                                          }
                                        },
                                        [_c("i", { staticClass: "fa fa-edit" })]
                                      ),
                                      _vm._v(" "),
                                      category.is_selected == 1
                                        ? _c(
                                            "a",
                                            {
                                              staticClass: "btn btn-danger",
                                              attrs: { title: "un-selected" },
                                              on: {
                                                click: function($event) {
                                                  return _vm.unselected(
                                                    category
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fa fa-close"
                                              })
                                            ]
                                          )
                                        : _c(
                                            "a",
                                            {
                                              staticClass: "btn btn-primary",
                                              attrs: { title: "selected" },
                                              on: {
                                                click: function($event) {
                                                  return _vm.selected(category)
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fa fa-chain"
                                              })
                                            ]
                                          ),
                                      _vm._v(" "),
                                      category.status == 1
                                        ? _c(
                                            "a",
                                            {
                                              staticClass: "btn btn-warning",
                                              attrs: { title: "De-active" },
                                              on: {
                                                click: function($event) {
                                                  return _vm.deActive(category)
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fa fa-ban"
                                              })
                                            ]
                                          )
                                        : _c(
                                            "a",
                                            {
                                              staticClass: "btn btn-primary",
                                              attrs: { title: "active" },
                                              on: {
                                                click: function($event) {
                                                  return _vm.active(category)
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fa fa-check"
                                              })
                                            ]
                                          )
                                    ],
                                    1
                                  )
                                ])
                              })
                        ],
                        2
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-footer" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-lg-6" },
                        [
                          _c("pagination", {
                            attrs: { data: _vm.categories },
                            on: { "pagination-change-page": _vm.getPagination }
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
                            _vm._v("Showing "),
                            _c("strong", [_vm._v(_vm._s(_vm.categories.from))]),
                            _vm._v(
                              " to\n                                            "
                            ),
                            _c("strong", [_vm._v(_vm._s(_vm.categories.to))]),
                            _vm._v(
                              " of total\n                                            "
                            ),
                            _c("strong", [
                              _vm._v(_vm._s(_vm.categories.total))
                            ]),
                            _vm._v(
                              " entries\n                                        "
                            )
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
    return _c("ol", { staticClass: "breadcrumb" }, [
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("i", { staticClass: "fa fa-dashboard" }),
          _vm._v("Dashboard")
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "active" }, [_vm._v("Category")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-6" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Category table")])
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
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Image")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("isSelected")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/category/Category.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/admin/category/Category.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Category_vue_vue_type_template_id_0b45bc54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Category.vue?vue&type=template&id=0b45bc54&scoped=true& */ "./resources/js/components/admin/category/Category.vue?vue&type=template&id=0b45bc54&scoped=true&");
/* harmony import */ var _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/category/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Category_vue_vue_type_template_id_0b45bc54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Category_vue_vue_type_template_id_0b45bc54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0b45bc54",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/category/Category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/category/Category.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/admin/category/Category.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/category/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/category/Category.vue?vue&type=template&id=0b45bc54&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/admin/category/Category.vue?vue&type=template&id=0b45bc54&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_0b45bc54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=template&id=0b45bc54&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/category/Category.vue?vue&type=template&id=0b45bc54&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_0b45bc54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_0b45bc54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);