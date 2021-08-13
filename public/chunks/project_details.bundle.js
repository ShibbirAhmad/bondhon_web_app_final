(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project_details"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/project/ProjectDetails.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/project/ProjectDetails.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    this.projectAccount();
  },
  data: function data() {
    return {
      total_cost: "",
      total_profit: "",
      loading: true,
      project: "",
      cost_records: "",
      profit_records: "",
      total_fund_return: "",
      fund_return_records: "",
      investMode: true,
      receiveMode: false,
      paymentMode: false
    };
  },
  methods: {
    i_mode: function i_mode() {
      this.investMode = true;
      this.receiveMode = false;
      this.paymentMode = false;
    },
    r_mode: function r_mode() {
      this.receiveMode = true;
      this.paymentMode = false;
      this.investMode = false;
    },
    p_mode: function p_mode() {
      this.paymentMode = true;
      this.investMode = false;
      this.receiveMode = false;
    },
    projectAccount: function projectAccount() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get("/api/project/details/account/" + this.$route.params.id).then(function (resp) {
        console.log(resp);
        _this.project = resp.data.project;
        _this.total_cost = resp.data.total_cost;
        _this.total_profit = resp.data.total_profit;
        _this.cost_records = resp.data.cost_records;
        _this.profit_records = resp.data.profit_records;
        _this.total_fund_return = resp.data.total_fund_return;
        _this.fund_return_records = resp.data.fund_return_records;
        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/project/ProjectDetails.vue?vue&type=style&index=0&id=3fe2106c&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/project/ProjectDetails.vue?vue&type=style&index=0&id=3fe2106c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.project-box[data-v-3fe2106c] {\r\n  background: #fff;\r\n  padding:5px;\r\n  box-shadow: 2px 2px 2px #ddd;\r\n  border-radius: 5px;\r\n  height:50px;\n}\n.c-name[data-v-3fe2106c] {\r\n  text-align: center;\r\n  height: 20px;\r\n  font-weight: normal;\n}\n.tab-menu-list[data-v-3fe2106c] {\r\n  display: flex;\r\n  background: #ecf0f5;\n}\n.tab-menu-list li[data-v-3fe2106c] {\r\n  list-style: none;\r\n  padding: 10px;\r\n  text-transform: uppercase;\r\n  font-size: 17px;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  margin-bottom: 10px;\n}\nli.active[data-v-3fe2106c] {\r\n  border-bottom: 2px solid #161725;\r\n  background: #fff;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/project/ProjectDetails.vue?vue&type=style&index=0&id=3fe2106c&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/project/ProjectDetails.vue?vue&type=style&index=0&id=3fe2106c&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectDetails.vue?vue&type=style&index=0&id=3fe2106c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/project/ProjectDetails.vue?vue&type=style&index=0&id=3fe2106c&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/project/ProjectDetails.vue?vue&type=template&id=3fe2106c&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/project/ProjectDetails.vue?vue&type=template&id=3fe2106c&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
        _c("section", { staticClass: "content" }, [
          _vm.loading
            ? _c("div", [
                _vm.loading
                  ? _c("h1", { staticClass: "text-center" }, [
                      _c("i", { staticClass: "fa fa-spin fa-spinner" })
                    ])
                  : _vm._e()
              ])
            : _c("div", { staticClass: "container" }, [
                _c("div", { staticClass: "row justify-content-center" }, [
                  _c("div", { staticClass: "col-lg-11" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        {
                          staticClass: "col-lg-12",
                          staticStyle: {
                            background: "#fff",
                            "margin-bottom": "10px",
                            "text-align": "center",
                            "box-shadow": "2px 2px 2px #ddd"
                          }
                        },
                        [
                          _c(
                            "h4",
                            {
                              staticClass: "text-uppercase",
                              staticStyle: { "font-weight": "bold" }
                            },
                            [
                              _vm._v(
                                "\n                  project:" +
                                  _vm._s(_vm.project.name) +
                                  "\n                "
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-lg-3" }, [
                        _c("div", { staticClass: "project-box" }, [
                          _c("h4", { staticClass: "c-name" }, [
                            _vm._v(" Cost  " + _vm._s(_vm.total_cost) + " ")
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-3" }, [
                        _c("div", { staticClass: "project-box" }, [
                          _c("h4", { staticClass: "c-name" }, [
                            _vm._v(
                              "  Cost After Refund " +
                                _vm._s(
                                  parseInt(_vm.total_cost) -
                                    parseInt(_vm.total_fund_return)
                                ) +
                                " "
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-3" }, [
                        _c("div", { staticClass: "project-box" }, [
                          _c("h4", { staticClass: "c-name" }, [
                            _vm._v(" Profit  " + _vm._s(_vm.total_profit) + " ")
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-3" }, [
                        _c("div", { staticClass: "project-box" }, [
                          _c("h4", { staticClass: "c-name" }, [
                            _vm._v(
                              " Fund Return " +
                                _vm._s(_vm.total_fund_return) +
                                " "
                            )
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-lg-12" }, [
                        _c("div", { staticClass: "tab-menu-list" }, [
                          _c(
                            "li",
                            {
                              class: { active: _vm.investMode },
                              on: { click: _vm.i_mode }
                            },
                            [
                              _vm._v(
                                "\n                    Cost  History\n                    "
                              ),
                              _c(
                                "a",
                                {
                                  staticStyle: {
                                    background: "#000",
                                    color: "#fff",
                                    cursor: "pointer"
                                  },
                                  attrs: {
                                    href:
                                      "/api/pdf/project/amount/" +
                                      _vm.project.id
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                      PDF\n                    "
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            {
                              class: {
                                active: !_vm.investMode && !_vm.paymentMode
                              },
                              on: { click: _vm.r_mode }
                            },
                            [
                              _vm._v(
                                "\n                     Profit History\n                    "
                              ),
                              _c(
                                "a",
                                {
                                  staticStyle: {
                                    background: "#000",
                                    color: "#fff",
                                    cursor: "pointer"
                                  },
                                  attrs: {
                                    href:
                                      "/api/pdf/project/purchase/" +
                                      _vm.project.id
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                      PDF\n                    "
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            {
                              class: {
                                active: !_vm.investMode && !_vm.receiveMode
                              },
                              on: { click: _vm.p_mode }
                            },
                            [
                              _vm._v(
                                "\n                     Fund Return History\n                  "
                              )
                            ]
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _vm.investMode
                        ? _c(
                            "div",
                            {
                              staticClass: "col-lg-12",
                              staticStyle: {
                                background: "#fff",
                                padding: "15px 16px"
                              }
                            },
                            [
                              _c("h4", [_vm._v("Cost History")]),
                              _vm._v(" "),
                              _vm.cost_records.length > 0
                                ? _c(
                                    "table",
                                    {
                                      staticClass:
                                        "table table-bordered table-hover table-striped"
                                    },
                                    [
                                      _vm._m(0),
                                      _vm._v(" "),
                                      _c(
                                        "tbody",
                                        [
                                          _vm._l(_vm.cost_records, function(
                                            cost,
                                            index
                                          ) {
                                            return _c("tr", { key: index }, [
                                              _c("td", [
                                                _vm._v(
                                                  "\n                        " +
                                                    _vm._s(index + 1) +
                                                    "\n                      "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                        " +
                                                    _vm._s(cost.date) +
                                                    "\n                      "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                        " +
                                                    _vm._s(
                                                      cost.paid_by
                                                        ? cost.paid_by
                                                        : ""
                                                    ) +
                                                    "\n                      "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                        " +
                                                    _vm._s(cost.comment) +
                                                    "\n                      "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                        " +
                                                    _vm._s(cost.amount) +
                                                    "\n                      "
                                                )
                                              ])
                                            ])
                                          }),
                                          _vm._v(" "),
                                          _c("tr", [
                                            _c("td", {
                                              attrs: { colspan: "3" }
                                            }),
                                            _vm._v(" "),
                                            _c("td", [_vm._v("total")]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _c("strong", [
                                                _vm._v(
                                                  " = " + _vm._s(_vm.total_cost)
                                                )
                                              ])
                                            ])
                                          ])
                                        ],
                                        2
                                      )
                                    ]
                                  )
                                : _c("h4", { staticClass: "text-center " }, [
                                    _vm._v(
                                      "\n                   Cost History Is Empty\n                "
                                    )
                                  ])
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.receiveMode
                        ? _c(
                            "div",
                            {
                              staticClass: "col-lg-12",
                              staticStyle: {
                                background: "#fff",
                                padding: "15px 16px"
                              }
                            },
                            [
                              _c("h4", [_vm._v("Profit History")]),
                              _vm._v(" "),
                              _vm.profit_records.length > 0
                                ? _c(
                                    "table",
                                    {
                                      staticClass:
                                        "table table-bordered table-hover table-striped"
                                    },
                                    [
                                      _vm._m(1),
                                      _vm._v(" "),
                                      _c(
                                        "tbody",
                                        [
                                          _vm._l(_vm.profit_records, function(
                                            profit,
                                            index
                                          ) {
                                            return _c("tr", { key: index }, [
                                              _c("td", [
                                                _vm._v(
                                                  "\n                        " +
                                                    _vm._s(index + 1) +
                                                    "\n                      "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                        " +
                                                    _vm._s(profit.date) +
                                                    "\n                      "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                        " +
                                                    _vm._s(profit.paid_by) +
                                                    "\n                      "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                        " +
                                                    _vm._s(profit.comment) +
                                                    "\n                      "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                        " +
                                                    _vm._s(profit.amount) +
                                                    "\n                      "
                                                )
                                              ])
                                            ])
                                          }),
                                          _vm._v(" "),
                                          _c("tr", [
                                            _c("td", {
                                              attrs: { colspan: "3" }
                                            }),
                                            _vm._v(" "),
                                            _c("td", [_vm._v("total")]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _c("strong", [
                                                _vm._v(
                                                  "= " +
                                                    _vm._s(_vm.total_profit)
                                                )
                                              ])
                                            ])
                                          ])
                                        ],
                                        2
                                      )
                                    ]
                                  )
                                : _c("h4", { staticClass: "text-center " }, [
                                    _vm._v(
                                      "\n                  Profit Is Empty\n                "
                                    )
                                  ])
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.paymentMode
                        ? _c(
                            "div",
                            {
                              staticClass: "col-lg-12",
                              staticStyle: {
                                background: "#fff",
                                padding: "15px 16px"
                              }
                            },
                            [
                              _c("h4", [_vm._v("Fund Return History")]),
                              _vm._v(" "),
                              _vm.fund_return_records.length > 0
                                ? _c(
                                    "table",
                                    {
                                      staticClass:
                                        "table table-bordered table-hover table-striped"
                                    },
                                    [
                                      _vm._m(2),
                                      _vm._v(" "),
                                      _c(
                                        "tbody",
                                        [
                                          _vm._l(
                                            _vm.fund_return_records,
                                            function(fund, index) {
                                              return _c("tr", { key: index }, [
                                                _c("td", [
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(index + 1) +
                                                      "\n                      "
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(fund.date) +
                                                      "\n                      "
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(fund.paid_by) +
                                                      "\n                      "
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(fund.comment) +
                                                      "\n                      "
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(fund.amount) +
                                                      "\n                      "
                                                  )
                                                ])
                                              ])
                                            }
                                          ),
                                          _vm._v(" "),
                                          _c("tr", [
                                            _c("td", {
                                              attrs: { colspan: "3" }
                                            }),
                                            _vm._v(" "),
                                            _c("td", [_vm._v("total")]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _c("strong", [
                                                _vm._v(
                                                  "= " +
                                                    _vm._s(
                                                      _vm.total_fund_return
                                                    )
                                                )
                                              ])
                                            ])
                                          ])
                                        ],
                                        2
                                      )
                                    ]
                                  )
                                : _c("h4", { staticClass: "text-center " }, [
                                    _vm._v(
                                      "\n                  Fund Return  Is Empty\n                "
                                    )
                                  ])
                            ]
                          )
                        : _vm._e()
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
    return _c("thead", [
      _c("tr", [
        _c("td", [_vm._v("#")]),
        _vm._v(" "),
        _c("td", [_vm._v("Date")]),
        _vm._v(" "),
        _c("td", [_vm._v("Paid By")]),
        _vm._v(" "),
        _c("td", [_vm._v("Comment")]),
        _vm._v(" "),
        _c("td", [_vm._v("Amount")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("td", [_vm._v("#")]),
        _vm._v(" "),
        _c("td", [_vm._v("Date")]),
        _vm._v(" "),
        _c("td", [_vm._v("Paid By")]),
        _vm._v(" "),
        _c("td", [_vm._v("Comment")]),
        _vm._v(" "),
        _c("td", [_vm._v("Amount")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("td", [_vm._v("#")]),
        _vm._v(" "),
        _c("td", [_vm._v("Date")]),
        _vm._v(" "),
        _c("td", [_vm._v("Paid By")]),
        _vm._v(" "),
        _c("td", [_vm._v("Comment")]),
        _vm._v(" "),
        _c("td", [_vm._v("Amount")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/project/ProjectDetails.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/admin/project/ProjectDetails.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectDetails_vue_vue_type_template_id_3fe2106c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectDetails.vue?vue&type=template&id=3fe2106c&scoped=true& */ "./resources/js/components/admin/project/ProjectDetails.vue?vue&type=template&id=3fe2106c&scoped=true&");
/* harmony import */ var _ProjectDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/project/ProjectDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProjectDetails_vue_vue_type_style_index_0_id_3fe2106c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectDetails.vue?vue&type=style&index=0&id=3fe2106c&scoped=true&lang=css& */ "./resources/js/components/admin/project/ProjectDetails.vue?vue&type=style&index=0&id=3fe2106c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProjectDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectDetails_vue_vue_type_template_id_3fe2106c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProjectDetails_vue_vue_type_template_id_3fe2106c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3fe2106c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/project/ProjectDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/project/ProjectDetails.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/admin/project/ProjectDetails.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/project/ProjectDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/project/ProjectDetails.vue?vue&type=style&index=0&id=3fe2106c&scoped=true&lang=css&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/admin/project/ProjectDetails.vue?vue&type=style&index=0&id=3fe2106c&scoped=true&lang=css& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectDetails_vue_vue_type_style_index_0_id_3fe2106c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectDetails.vue?vue&type=style&index=0&id=3fe2106c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/project/ProjectDetails.vue?vue&type=style&index=0&id=3fe2106c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectDetails_vue_vue_type_style_index_0_id_3fe2106c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectDetails_vue_vue_type_style_index_0_id_3fe2106c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectDetails_vue_vue_type_style_index_0_id_3fe2106c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectDetails_vue_vue_type_style_index_0_id_3fe2106c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectDetails_vue_vue_type_style_index_0_id_3fe2106c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/project/ProjectDetails.vue?vue&type=template&id=3fe2106c&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/admin/project/ProjectDetails.vue?vue&type=template&id=3fe2106c&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectDetails_vue_vue_type_template_id_3fe2106c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectDetails.vue?vue&type=template&id=3fe2106c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/project/ProjectDetails.vue?vue&type=template&id=3fe2106c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectDetails_vue_vue_type_template_id_3fe2106c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectDetails_vue_vue_type_template_id_3fe2106c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);