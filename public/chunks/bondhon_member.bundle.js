(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bondhon_member"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/admin/Member.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/admin/Member.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
      _this.adminList();
    }, 500); // this.getResults();
  },
  data: function data() {
    return {
      admins: {},
      loading: true,
      basePath: this.$store.getters.image_base_link,
      item: "",
      search: ""
    };
  },
  methods: {
    adminList: function adminList() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get("/api/member/list?page=" + page).then(function (resp) {
        if (resp.data.status == "SUCCESS") {
          _this2.admins = resp.data.admins;
          _this2.loading = false;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    memberDashboard: function memberDashboard(member_id, index) {
      var _this3 = this;

      axios.get('/api/admin/to/member/dashboard/' + member_id).then(function (resp) {
        if (resp.data.status == "SUCCESS") {
          localStorage.setItem("member_token", resp.data.token);

          _this3.$store.commit("member", resp.data.member);

          window.open('/member/dashboard', '_blank');
        }
      });
    },
    searchAdmin: function searchAdmin() {
      var _this4 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get("/api/search/admin/" + this.search + "?page=" + page).then(function (resp) {
        console.log(resp);

        if (resp.data.status == "OK") {
          _this4.admins = resp.data.admins;
        } else {
          _this4.adminList();
        }
      })["catch"]();
    },
    deActive: function deActive(admin) {
      var _this5 = this;

      Swal.fire({
        title: "Are you sure?",
        text: "You won't de-active this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!"
      }).then(function (result) {
        if (result.value) {
          axios.get("/deactive/admin/" + admin.id).then(function (resp) {
            if (resp.data.status == "SUCCESS") {
              _this5.adminList();

              _this5.$toasted.show(resp.data.message, {
                position: "top-center",
                type: "success",
                duration: 4000
              });
            } else {
              _this5.$toasted.show("some thing want to wrong", {
                position: "top-center",
                type: "error",
                duration: 4000
              });
            }
          })["catch"](function (error) {
            _this5.$toasted.show("some thing want to wrong", {
              position: "top-center",
              type: "error",
              duration: 4000
            });
          });
        } else {
          _this5.$toasted.show("OK ! no action here", {
            position: "top-center",
            type: "info",
            duration: 3000
          });
        }
      });
    },
    active: function active(admin) {
      var _this6 = this;

      Swal.fire({
        title: "Are you sure?",
        text: "You won't active this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!"
      }).then(function (result) {
        if (result.value) {
          axios.get("/active/admin/" + admin.id).then(function (resp) {
            if (resp.data.status == "SUCCESS") {
              _this6.adminList();

              _this6.$toasted.show(resp.data.message, {
                position: "top-center",
                type: "success",
                duration: 4000
              });
            } else {
              _this6.$toasted.show("some thing want to wrong", {
                position: "top-center",
                type: "error",
                duration: 4000
              });
            }
          })["catch"](function (error) {
            _this6.$toasted.show("some thing want to wrong", {
              position: "top-center",
              type: "error",
              duration: 4000
            });
          });
        } else {
          _this6.$toasted.show("Ok ! no action here", {
            position: "top-center",
            type: "info",
            duration: 3000
          });
        }
      });
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/admin/Member.vue?vue&type=template&id=3d7ab676&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/admin/Member.vue?vue&type=template&id=3d7ab676&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
                  attrs: { to: { name: "member_add" } }
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
            _c("div", { staticClass: "row " }, [
              _c("div", { staticClass: "col-lg-11 col-md-11" }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _c(
                    "div",
                    { staticClass: "box-header with-border text-center" },
                    [
                      _c("h3", { staticClass: "box-title" }, [
                        _vm._v("Bondhon Members ")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-2" }, [
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
                              attrs: { id: "" },
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
                                  _vm.adminList
                                ]
                              }
                            },
                            [
                              _c("option", { attrs: { value: "10" } }, [
                                _vm._v("10")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "20" } }, [
                                _vm._v("20")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "30" } }, [
                                _vm._v("30")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "40" } }, [
                                _vm._v("40")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "50" } }, [
                                _vm._v("50")
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-5" }),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-5" }, [
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
                              placeholder: "type  name or email"
                            },
                            domProps: { value: _vm.search },
                            on: {
                              keyup: _vm.searchAdmin,
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
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _c(
                      "table",
                      {
                        staticClass:
                          "table table-bordered table-striped table-hover"
                      },
                      [
                        _vm._m(1),
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
                            _vm._l(_vm.admins.data, function(admin, index) {
                              return _c("tr", { key: index }, [
                                _c("td", { attrs: { scope: "row" } }, [
                                  _vm._v(_vm._s(index + 1))
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticStyle: {
                                          color: "blue",
                                          "font-size": "14px"
                                        },
                                        attrs: {
                                          to: {
                                            name: "bondhon_member_details",
                                            params: { id: admin.id }
                                          }
                                        }
                                      },
                                      [_vm._v(" " + _vm._s(admin.name) + " ")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(admin.phone))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(admin.email))]),
                                _vm._v(" "),
                                _c("td", [
                                  admin.image
                                    ? _c("img", {
                                        staticClass: "img-circle small-image",
                                        attrs: {
                                          src: _vm.basePath + admin.image,
                                          alt: "admin Image"
                                        }
                                      })
                                    : _c("img", {
                                        staticClass: "img-circle small-image",
                                        attrs: {
                                          src:
                                            _vm.basePath +
                                            "images/static/noimage.png",
                                          alt: "admin Image"
                                        }
                                      })
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("address", [
                                    _vm._v(_vm._s(admin.present_address))
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  admin.status == 1
                                    ? _c("span", { staticClass: "badge" }, [
                                        _vm._v("Active")
                                      ])
                                    : _c(
                                        "span",
                                        { staticClass: "badge text-bold" },
                                        [_vm._v("De-Active")]
                                      )
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
                                            name: "edit_member",
                                            params: { adminId: admin.id }
                                          }
                                        }
                                      },
                                      [_c("i", { staticClass: "fa fa-edit" })]
                                    ),
                                    _vm._v(" "),
                                    admin.status == 1
                                      ? _c(
                                          "a",
                                          {
                                            staticClass:
                                              "btn btn-warning btn-sm",
                                            attrs: { title: "De-active" },
                                            on: {
                                              click: function($event) {
                                                return _vm.deActive(admin)
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
                                            staticClass:
                                              "btn btn-primary btn-sm",
                                            attrs: { title: "active" },
                                            on: {
                                              click: function($event) {
                                                return _vm.active(admin)
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-check"
                                            })
                                          ]
                                        ),
                                    _vm._v(" "),
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "btn btn-primary btn-sm",
                                        attrs: {
                                          to: {
                                            name: "assign_admin_permission",
                                            params: { id: admin.id }
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "Permissions\n                        "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm.$can("member_dashboard_show")
                                      ? _c(
                                          "a",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-success",
                                            on: {
                                              click: function($event) {
                                                return _vm.memberDashboard(
                                                  admin.id,
                                                  index
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-eye"
                                            }),
                                            _vm._v(" dashboard ")
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
                            attrs: { data: _vm.admins },
                            on: { "pagination-change-page": _vm.adminList }
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
                            _c("strong", [_vm._v(_vm._s(_vm.admins.from))]),
                            _vm._v(" to\n                      "),
                            _c("strong", [_vm._v(_vm._s(_vm.admins.to))]),
                            _vm._v(" of total\n                      "),
                            _c("strong", [_vm._v(_vm._s(_vm.admins.total))]),
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
      _c("li", { staticClass: "active" }, [_vm._v("Memebers")])
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
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Phone")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Image")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Address")]),
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

/***/ "./resources/js/components/admin/admin/Member.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/admin/admin/Member.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Member_vue_vue_type_template_id_3d7ab676_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Member.vue?vue&type=template&id=3d7ab676&scoped=true& */ "./resources/js/components/admin/admin/Member.vue?vue&type=template&id=3d7ab676&scoped=true&");
/* harmony import */ var _Member_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Member.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/admin/Member.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Member_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Member_vue_vue_type_template_id_3d7ab676_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Member_vue_vue_type_template_id_3d7ab676_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3d7ab676",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/admin/Member.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/admin/Member.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/admin/admin/Member.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Member_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Member.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/admin/Member.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Member_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/admin/Member.vue?vue&type=template&id=3d7ab676&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/admin/admin/Member.vue?vue&type=template&id=3d7ab676&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Member_vue_vue_type_template_id_3d7ab676_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Member.vue?vue&type=template&id=3d7ab676&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/admin/Member.vue?vue&type=template&id=3d7ab676&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Member_vue_vue_type_template_id_3d7ab676_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Member_vue_vue_type_template_id_3d7ab676_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);