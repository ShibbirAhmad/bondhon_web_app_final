(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["credit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/credit/Credit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/credit/Credit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      _this.creditList();
    }, 100); // this.getResults();
  },
  data: function data() {
    return {
      credits: {},
      loading: true,
      current_date: "",
      item: 20,
      search: "",
      status: "all",
      //for date picker
      options: {
        format: "YYYY-MM-DD",
        useCurrent: false
      },
      start_date: "",
      end_date: ""
    };
  },
  methods: {
    creditList: function creditList() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.loading = true;
      axios.get("/credits?page=" + page, {
        params: {
          item: this.item,
          status: this.status,
          search: this.search,
          start_date: this.start_date,
          end_date: this.end_date
        }
      }).then(function (resp) {
        _this2.credits = resp.data;
        _this2.loading = false;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    trash: function trash(creditId, index) {
      var _this3 = this;

      Swal.fire({
        title: "Are you sure?",
        text: "You won't delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!"
      }).then(function (result) {
        if (result.value) {
          axios.get("/credit/destroy/" + creditId).then(function (resp) {
            console.log(resp);

            if (resp.data.status == "SUCCESS") {
              _this3.credits.data.splice(index, 1);

              _this3.$toasted.show(resp.data.message, {
                position: "top-center",
                type: "success",
                duration: 200
              });
            } else {
              _this3.$toasted.show("some thing want to wrong", {
                position: "top-center",
                type: "error",
                duration: 4000
              });
            }
          })["catch"](function (error) {
            // console.log(error)
            _this3.$toasted.show("some thing want to wrong", {
              position: "top-center",
              type: "error",
              duration: 4000
            });
          });
        } else {
          _this3.$toasted.show("OK ! no action here", {
            position: "top-center",
            type: "info",
            duration: 3000
          });
        }
      });
    },
    searchCredit: function searchCredit() {
      if (this.search.length >= 2) {
        this.status = "search";
        this.creditList();
      } else {
        this.status = "all";
        this.creditList();
      }
    },
    filter: function filter() {
      console.log("hell");
      this.status = "filter";
      this.creditList();
    },
    clearAll: function clearAll() {
      this.$Progress.start();
      this.status = "all";
      this.search = '', this.start_date = '', this.end_date = '', this.creditList();
      this.$Progress.finish();
    },
    //method initial for  get current date
    pDate: function pDate() {
      //current date
      var d = new Date(); //current mount
      //current day

      var month = d.getMonth() + 1;
      var day = d.getDate();
      var output = d.getFullYear() + "-" + (("" + month).length < 2 ? "0" : "") + month + "-" + (("" + day).length < 2 ? "0" : "") + day;
      this.current_date = output;
    },
    exportCredit: function exportCredit() {
      window.open('/api/export/credit', '_blank');
    },
    formatDate: function formatDate(date) {
      var origina_date = date.split("-");
      return "".concat(origina_date[2], "-").concat(origina_date[1], "-").concat(origina_date[0]);
    }
  },
  watch: {
    start_date: function start_date() {
      this.status = "filter";
      this.creditList();
    },
    end_date: function end_date() {
      this.status = "filter";
      this.creditList();
    }
  },
  mounted: function mounted() {
    this.pDate();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/credit/Credit.vue?vue&type=template&id=68659ab4&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/credit/Credit.vue?vue&type=template&id=68659ab4&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
              _vm.$can("create credit")
                ? _c(
                    "router-link",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { to: { name: "creditAdd" } }
                    },
                    [_c("i", { staticClass: "fa fa-plus" })]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.$can("manage debit")
                ? _c(
                    "router-link",
                    {
                      staticClass: "btn btn-info",
                      attrs: { to: { name: "debit" } }
                    },
                    [_vm._v("Debit")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  on: { click: _vm.exportCredit }
                },
                [
                  _c("i", { staticClass: "fa fa-download" }),
                  _vm._v(" Exprot Credit")
                ]
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
              _c("div", { staticClass: "col-lg-11" }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _c("div", { staticClass: "box-header with-border" }, [
                    _c("div", { staticClass: "row" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-2" }, [
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
                          attrs: { placeholder: "purpose,commens...." },
                          domProps: { value: _vm.search },
                          on: {
                            keyup: _vm.searchCredit,
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.search = $event.target.value
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-4" }, [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-lg-6" },
                            [
                              _c("date-picker", {
                                attrs: {
                                  autocomplete: "off",
                                  config: _vm.options,
                                  placeholder: "start_date"
                                },
                                on: { change: _vm.filter },
                                model: {
                                  value: _vm.start_date,
                                  callback: function($$v) {
                                    _vm.start_date = $$v
                                  },
                                  expression: "start_date"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-lg-6" },
                            [
                              _c("date-picker", {
                                attrs: {
                                  autocomplete: "off",
                                  config: _vm.options,
                                  placeholder: "end_date"
                                },
                                model: {
                                  value: _vm.end_date,
                                  callback: function($$v) {
                                    _vm.end_date = $$v
                                  },
                                  expression: "end_date"
                                }
                              })
                            ],
                            1
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-1" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.item,
                                expression: "item"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.item = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                },
                                _vm.creditList
                              ]
                            }
                          },
                          [
                            _c("option", { attrs: { value: "20" } }, [
                              _vm._v("20")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "40" } }, [
                              _vm._v("40")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "60" } }, [
                              _vm._v("60")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "80" } }, [
                              _vm._v("80")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-1" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary btn-sm",
                            on: { click: _vm.clearAll }
                          },
                          [_c("i", { staticClass: "fa fa-refresh" })]
                        )
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
                            ? _c("h1", { staticClass: "text-center" }, [
                                _c("i", {
                                  staticClass: "fa fa-spin fa-spinner"
                                })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm._l(_vm.credits.data, function(credit, index) {
                            return _c("tr", { key: index }, [
                              _c("td", { attrs: { scope: "row" } }, [
                                _vm._v(_vm._s(index + 1))
                              ]),
                              _vm._v(" "),
                              _c("td", { staticStyle: { width: "90px" } }, [
                                _vm._v(_vm._s(_vm.formatDate(credit.date)))
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s("CR-" + credit.id))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(credit.purpose))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    credit.credit_in
                                      ? credit.credit_in
                                      : "Not Recorded"
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(credit.amount))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(credit.comment))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(credit.admin.name))]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _vm.$can("edit credit")
                                    ? _c(
                                        "router-link",
                                        {
                                          staticClass: "btn btn-success btn-sm",
                                          attrs: {
                                            to: {
                                              name: "creditEdit",
                                              params: { id: credit.id }
                                            }
                                          }
                                        },
                                        [_c("i", { staticClass: "fa fa-edit" })]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.current_date == credit.date &&
                                  _vm.$can("delete credit")
                                    ? _c(
                                        "a",
                                        {
                                          staticClass: "btn btn-sm btn-danger",
                                          on: {
                                            click: function($event) {
                                              return _vm.trash(credit.id, index)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-trash"
                                          })
                                        ]
                                      )
                                    : _vm._e()
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
                            attrs: { data: _vm.credits, limit: 3 },
                            on: { "pagination-change-page": _vm.creditList }
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
                            _c("strong", [_vm._v(_vm._s(_vm.credits.from))]),
                            _vm._v(" to\n                      "),
                            _c("strong", [_vm._v(_vm._s(_vm.credits.to))]),
                            _vm._v(" of total\n                      "),
                            _c("strong", [_vm._v(_vm._s(_vm.credits.total))]),
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
    return _c("ol", { staticClass: "breadcrumb" }, [
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("i", { staticClass: "fa fa-dashboard" }),
          _vm._v("Dashboard")
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "active" }, [_vm._v("Credit")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-4" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Credit table")])
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
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Invoice_no")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Purpose")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Credit In")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Amount")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Comment")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Insert")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/credit/Credit.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/admin/credit/Credit.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Credit_vue_vue_type_template_id_68659ab4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Credit.vue?vue&type=template&id=68659ab4&scoped=true& */ "./resources/js/components/admin/credit/Credit.vue?vue&type=template&id=68659ab4&scoped=true&");
/* harmony import */ var _Credit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Credit.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/credit/Credit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Credit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Credit_vue_vue_type_template_id_68659ab4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Credit_vue_vue_type_template_id_68659ab4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "68659ab4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/credit/Credit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/credit/Credit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/admin/credit/Credit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Credit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Credit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/credit/Credit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Credit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/credit/Credit.vue?vue&type=template&id=68659ab4&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/admin/credit/Credit.vue?vue&type=template&id=68659ab4&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Credit_vue_vue_type_template_id_68659ab4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Credit.vue?vue&type=template&id=68659ab4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/credit/Credit.vue?vue&type=template&id=68659ab4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Credit_vue_vue_type_template_id_68659ab4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Credit_vue_vue_type_template_id_68659ab4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);