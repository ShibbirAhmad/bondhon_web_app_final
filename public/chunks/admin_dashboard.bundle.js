(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin_dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_owl_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-owl-carousel */ "./node_modules/vue-owl-carousel/dist/vue-owl-carousel.js");
/* harmony import */ var vue_owl_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_owl_carousel__WEBPACK_IMPORTED_MODULE_0__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Index",
  data: function data() {
    var _ref;

    return _ref = {
      loading: true,
      balance: {},
      analysis: "",
      base_url: this.$store.state.image_base_link
    }, _defineProperty(_ref, "analysis", ""), _defineProperty(_ref, "analysisshow", 1), _ref;
  },
  created: function created() {},
  mounted: function mounted() {
    this.$store.dispatch("admin");
    this.dashboard();
  },
  methods: {
    dashboard: function dashboard() {
      var _this = this;

      axios.get("/api/dashboard/analysis").then(function (resp) {
        console.log(resp);
        _this.analysis = resp.data.analysis;
        _this.balance = resp.data.balance;
        _this.loading = false;
      });
    }
  },
  components: {
    carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  computed: {
    admin: function admin() {
      return this.$store.getters.admin;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Index.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Index.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.box-gradiant {\r\n  background: linear-gradient(to right, #c33764, #1d2671);\n}\n.small-box .icon {\r\n  color: #fff !important;\r\n  opacity: 0.6;\n}\n.product-thumb.clearfix {\r\n  padding: 12px 13px;\r\n  margin-right: 10px;\r\n  margin-right: 10px;\r\n  border: 1px solid #eee;\r\n  box-shadow: 2px 2px 2px #eee;\n}\n.custom-box {\r\n  background: #fff;\r\n  padding: 13px;\r\n  height: 220px;\r\n  box-shadow: 3px 3px 3px #ddd;\r\n  border-radius: 6px;\r\n  margin-bottom: 10px;\n}\n.custom-box-body strong {\r\n  position: absolute;\r\n  right: 10%;\r\n  color: blue;\n}\n.custom-box-footer {\r\n  background: #00a65a;\r\n  color: #fff;\n}\n.analysis-item {\r\n  display: flex;\r\n  list-style-type: none;\r\n  float: right;\n}\n.analysis-item li {\r\n  padding: 10px 10px;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  cursor: pointer;\n}\n.analysis-item .active {\r\n  border-bottom: 2px solid #000;\n}\n.sub_info{\r\n   font-size: 24px;\r\n    color: #fff;\r\n    margin-top: 0px;\r\n    position: absolute;\r\n    margin-left: 20px;\n}\n.small-box {\r\n    border-radius: 30px;\n}\n.small-box h3 {\r\n      margin: 0px 18px;\r\n      margin-top:5px;\r\n      font-size: 26px;\n}\n.small-box h4 {\r\n    padding-top: 30px;\r\n    margin-left: 20px;\n}\n.money_icon {\r\n  font-size: 26px;\n}\n.small-box>.small-box-footer {\r\n    border-radius: 0px 0px 30px 30px;\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Index.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Index.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Index.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Index.vue?vue&type=template&id=3d8603f7&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Index.vue?vue&type=template&id=3d8603f7& ***!
  \**************************************************************************************************************************************************************************************************************/
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
        _vm._m(0),
        _vm._v(" "),
        _vm.loading
          ? _c(
              "h1",
              { staticStyle: { "text-align": "center", "font-size": "50px" } },
              [_c("i", { staticClass: "fa fa-spinner fa-spin" })]
            )
          : _c("section", { staticClass: "content" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-3 col-xs-6" }, [
                  _c(
                    "div",
                    { staticClass: "small-box  bg-green" },
                    [
                      _c("h3", [
                        _vm._v(" " + _vm._s(_vm.analysis.total_member) + "  ")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "sub_info" }, [
                        _vm._v(
                          "  " +
                            _vm._s(_vm.analysis.total_amount_of_member) +
                            " ৳  "
                        )
                      ]),
                      _vm._v(" "),
                      _c("h4", [_vm._v(" Member & Amount ")]),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "small-box-footer",
                          attrs: { to: { name: "admin" } }
                        },
                        [
                          _vm._v("More info "),
                          _c("i", { staticClass: "fa fa-arrow-circle-right" })
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-3 col-xs-6" }, [
                  _c(
                    "div",
                    { staticClass: "small-box  bg-green" },
                    [
                      _c("h3", [
                        _vm._v(" " + _vm._s(_vm.analysis.total_project) + "  ")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "sub_info" }, [
                        _vm._v(
                          "  " +
                            _vm._s(_vm.analysis.total_project_cost) +
                            " ৳  "
                        )
                      ]),
                      _vm._v(" "),
                      _c("h4", [_vm._v(" Project & Cost ")]),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "small-box-footer",
                          attrs: { to: { name: "project" } }
                        },
                        [
                          _vm._v("More info "),
                          _c("i", { staticClass: "fa fa-arrow-circle-right" })
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-3 col-xs-6" }, [
                  _c(
                    "div",
                    { staticClass: "small-box  bg-green" },
                    [
                      _c("h3", [
                        _vm._v(" " + _vm._s(_vm.analysis.total_investor) + "  ")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "sub_info" }, [
                        _vm._v(
                          "  " +
                            _vm._s(
                              _vm.analysis.total_invested_amount -
                                _vm.analysis.total_invested_return_amount
                            ) +
                            " ৳  "
                        )
                      ]),
                      _vm._v(" "),
                      _c("h4", [_vm._v(" Investor & Amount ")]),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "small-box-footer",
                          attrs: { to: { name: "project" } }
                        },
                        [
                          _vm._v("More info "),
                          _c("i", { staticClass: "fa fa-arrow-circle-right" })
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-3 col-xs-6" }, [
                  _c(
                    "div",
                    { staticClass: "small-box  bg-green" },
                    [
                      _c("h3", [
                        _vm._v(" " + _vm._s(_vm.analysis.total_project) + "  ")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "sub_info" }, [
                        _vm._v(
                          "  " +
                            _vm._s(_vm.analysis.total_project_profit) +
                            " ৳  "
                        )
                      ]),
                      _vm._v(" "),
                      _c("h4", [_vm._v(" Project & Profit ")]),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "small-box-footer",
                          attrs: { to: { name: "project" } }
                        },
                        [
                          _vm._v("More info "),
                          _c("i", { staticClass: "fa fa-arrow-circle-right" })
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-3 col-xs-6" }, [
                  _c(
                    "div",
                    { staticClass: "small-box  bg-green" },
                    [
                      _c("h3", [
                        _vm._v(
                          " " + _vm._s(_vm.analysis.this_month_credit) + " "
                        ),
                        _c("span", { staticClass: "money_icon" }, [
                          _vm._v("  ৳")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "sub_info" }),
                      _vm._v(" "),
                      _c("h4", [_vm._v("  Credit This Month  ")]),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "small-box-footer",
                          attrs: { to: { name: "credit" } }
                        },
                        [
                          _vm._v("More info "),
                          _c("i", { staticClass: "fa fa-arrow-circle-right" })
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-3 col-xs-6" }, [
                  _c(
                    "div",
                    { staticClass: "small-box  bg-green" },
                    [
                      _c("h3", [
                        _vm._v(" " + _vm._s(_vm.analysis.total_credit) + " "),
                        _c("span", { staticClass: "money_icon" }, [
                          _vm._v("  ৳")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "sub_info" }),
                      _vm._v(" "),
                      _c("h4", [_vm._v("  Credit Total ")]),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "small-box-footer",
                          attrs: { to: { name: "credit" } }
                        },
                        [
                          _vm._v("More info "),
                          _c("i", { staticClass: "fa fa-arrow-circle-right" })
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-3 col-xs-6" }, [
                  _c(
                    "div",
                    { staticClass: "small-box  bg-green" },
                    [
                      _c("h3", [
                        _vm._v(
                          " " + _vm._s(_vm.analysis.this_month_debit) + "  "
                        ),
                        _c("span", { staticClass: "money_icon" }, [
                          _vm._v(" ৳ ")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "sub_info" }),
                      _vm._v(" "),
                      _c("h4", [_vm._v("  Debit This Month  ")]),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "small-box-footer",
                          attrs: { to: { name: "debit" } }
                        },
                        [
                          _vm._v("More info "),
                          _c("i", { staticClass: "fa fa-arrow-circle-right" })
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-3 col-xs-6" }, [
                  _c(
                    "div",
                    { staticClass: "small-box  bg-green" },
                    [
                      _c("h3", [
                        _vm._v(" " + _vm._s(_vm.analysis.total_debit) + "  "),
                        _c("span", { staticClass: "money_icon" }, [
                          _vm._v(" ৳ ")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "sub_info" }),
                      _vm._v(" "),
                      _c("h4", [_vm._v("  Debit Total ")]),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "small-box-footer",
                          attrs: { to: { name: "debit" } }
                        },
                        [
                          _vm._v("More info "),
                          _c("i", { staticClass: "fa fa-arrow-circle-right" })
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-3 col-xs-6" }, [
                  _c("div", { staticClass: "small-box  bg-green" }, [
                    _c("h3", [
                      _vm._v(" " + _vm._s(_vm.analysis.company_value) + "  "),
                      _c("span", { staticClass: "money_icon" }, [_vm._v(" ৳ ")])
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "sub_info" }),
                    _vm._v(" "),
                    _c("h4", [_vm._v(" Company Assets ")]),
                    _vm._v(" "),
                    _vm._m(1)
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-3 col-xs-6" }, [
                  _c("div", { staticClass: "small-box  bg-green" }, [
                    _c("h3", [
                      _vm._v(" " + _vm._s(_vm.analysis.share_value) + "  "),
                      _c("span", { staticClass: "money_icon" }, [_vm._v(" ৳ ")])
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "sub_info" }),
                    _vm._v(" "),
                    _c("h4", [_vm._v(" Share Value ")]),
                    _vm._v(" "),
                    _vm._m(2)
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _vm.$can("manage accounts")
                  ? _c("h1", { staticStyle: { "margin-left": "15px" } }, [
                      _vm._v("Accounts")
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-4" }, [
                  _c("div", { staticClass: "custom-box" }, [
                    _c("div", { staticClass: "custom-box-body" }, [
                      _c("h4", [
                        _vm._v("\n                In Cash: "),
                        _c("strong", [
                          _vm._v(
                            _vm._s(parseInt(_vm.balance.today_credit_cash))
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("h4", [
                        _vm._v(
                          "\n                In Bkash(personal):\n                "
                        ),
                        _c("strong", [
                          _vm._v(
                            _vm._s(
                              parseInt(_vm.balance.today_credit_bkash_personal)
                            )
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("h4", [
                        _vm._v(
                          "\n                In Bkash(merchant):\n                "
                        ),
                        _c("strong", [
                          _vm._v(
                            _vm._s(
                              parseInt(_vm.balance.today_credit_bkash_merchant)
                            )
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("h4", [
                        _vm._v("\n                In Bank: "),
                        _c("strong", [
                          _vm._v(
                            _vm._s(parseInt(_vm.balance.today_credit_bank))
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("h4", [
                        _vm._v("\n                Total: "),
                        _c("strong", [
                          _vm._v(_vm._s(parseInt(_vm.balance.today_credit)))
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(3)
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-4" }, [
                  _c("div", { staticClass: "custom-box" }, [
                    _c("div", { staticClass: "custom-box-body" }, [
                      _c("h4", [
                        _vm._v("\n                In Cash: "),
                        _c("strong", [
                          _vm._v(
                            _vm._s(parseInt(_vm.balance.today_debitt_cash))
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("h4", [
                        _vm._v(
                          "\n                In Bkash(personal):\n                "
                        ),
                        _c("strong", [
                          _vm._v(
                            _vm._s(
                              parseInt(_vm.balance.today_debit_bkash_personal)
                            )
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("h4", [
                        _vm._v(
                          "\n                In Bkash(merchant):\n                "
                        ),
                        _c("strong", [
                          _vm._v(
                            _vm._s(
                              parseInt(_vm.balance.today_debit_bkash_merchant)
                            )
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("h4", [
                        _vm._v("\n                In Bank: "),
                        _c("strong", [
                          _vm._v(_vm._s(parseInt(_vm.balance.today_debit_bank)))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("h4", [
                        _vm._v("\n                Total: "),
                        _c("strong", [
                          _vm._v(_vm._s(parseInt(_vm.balance.today_debit)))
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(4)
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-4" }, [
                  _c("div", { staticClass: "custom-box" }, [
                    _c("div", { staticClass: "custom-box-body" }, [
                      _c("h4", [
                        _vm._v("\n                In Cash:\n                "),
                        _c("strong", [
                          _vm._v(
                            _vm._s(
                              parseInt(_vm.balance.total_credit_cash) -
                                parseInt(_vm.balance.total_debitt_cash)
                            )
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("h4", [
                        _vm._v(
                          "\n                In Bkash(personal):\n                "
                        ),
                        _c("strong", [
                          _vm._v(
                            _vm._s(
                              parseInt(
                                _vm.balance.total_credit_bkash_personal
                              ) -
                                parseInt(_vm.balance.total_debit_bkash_personal)
                            )
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("h4", [
                        _vm._v(
                          "\n                In Bkash(merchant):\n                "
                        ),
                        _c("strong", [
                          _vm._v(
                            _vm._s(
                              parseInt(
                                _vm.balance.total_credit_bkash_merchant
                              ) -
                                parseInt(_vm.balance.total_debit_bkash_merchant)
                            )
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("h4", [
                        _vm._v("\n                In Bank:\n                "),
                        _c("strong", [
                          _vm._v(
                            _vm._s(
                              parseInt(_vm.balance.total_credit_bank) -
                                parseInt(_vm.balance.total_debit_bank)
                            )
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("h4", [
                        _vm._v("\n                Total:\n                "),
                        _c("strong", [
                          _vm._v(
                            _vm._s(
                              parseInt(_vm.balance.total_credit) -
                                parseInt(_vm.balance.total_debit)
                            )
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(5)
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
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [_vm._v("Analysis")]),
      _vm._v(" "),
      _c("ol", { staticClass: "breadcrumb" }, [
        _c("li", [
          _c("a", { attrs: { href: "#" } }, [
            _c("i", { staticClass: "fa fa-dashboard" }),
            _vm._v("Home")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "active" }, [_vm._v("Dashboard")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "small-box-footer", attrs: { href: "#" } }, [
      _vm._v("More info "),
      _c("i", { staticClass: "fa fa-arrow-circle-right" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "small-box-footer", attrs: { href: "#" } }, [
      _vm._v("More info "),
      _c("i", { staticClass: "fa fa-arrow-circle-right" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "custom-box-footer" }, [
      _c("h3", { staticClass: "text-center text-uppercase" }, [
        _vm._v("today credit")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "custom-box-footer" }, [
      _c("h3", { staticClass: "text-center text-uppercase" }, [
        _vm._v("today debit")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "custom-box-footer" }, [
      _c("h3", { staticClass: "text-center text-uppercase" }, [
        _vm._v("total balance")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/Index.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/admin/Index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_3d8603f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=3d8603f7& */ "./resources/js/components/admin/Index.vue?vue&type=template&id=3d8603f7&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/admin/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_3d8603f7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_3d8603f7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/admin/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Index.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/admin/Index.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/Index.vue?vue&type=template&id=3d8603f7&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/admin/Index.vue?vue&type=template&id=3d8603f7& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3d8603f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=3d8603f7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Index.vue?vue&type=template&id=3d8603f7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3d8603f7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3d8603f7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);