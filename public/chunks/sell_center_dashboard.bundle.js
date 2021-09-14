(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sell_center_dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sellcenter/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue */ "./resources/js/components/sellcenter/Navbar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    navbar: _Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      loading: true,
      balance: {},
      analysis: "",
      base_url: this.$store.state.image_base_link
    };
  },
  created: function created() {
    this.$store.dispatch("sellcenter");
    this.dashboard();
  },
  methods: {
    dashboard: function dashboard() {
      var _this = this;

      axios.get("/api/sellcenter/dashboard/analysis").then(function (resp) {
        console.log(resp);
        _this.analysis = resp.data.analysis;
        _this.balance = resp.data.balance;
        _this.loading = false;
      });
    }
  },
  computed: {
    sellcenter: function sellcenter() {
      return this.$store.getters.sellcenter;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/Navbar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sellcenter/Navbar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
    this.$store.dispatch("sellcenter");
    this.$store.dispatch("general_setting");
  },
  data: function data() {
    return {
      base_url: this.$store.state.image_base_link
    };
  },
  methods: {
    logout: function logout() {
      var _this = this;

      axios.get('/api/sellcenter/logout').then(function (resp) {
        console.log(resp);

        if (resp.data.status == "OK") {
          localStorage.removeItem('sell_center_token');

          _this.$store.commit('sellcenter', null);

          _this.$router.push({
            name: 'sell_center_login'
          });

          _this.$toasted.show("Logout successfully ! login again to come back .", {
            type: "error",
            position: "top-center",
            duration: 10000
          });
        }
      })["catch"]();
    }
  },
  computed: {
    sellcenter: function sellcenter() {
      return this.$store.getters.sellcenter;
    },
    general_setting: function general_setting() {
      return this.$store.getters.general_setting;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/Dashboard.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sellcenter/Dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container_row {\n  margin-left: -35px !important;\n  margin-right: 0px !important;\n}\n.person_counter {\n  padding-right: 5%;\n  color: #1d2671;\n}\n.box-gradiant {\n  background: linear-gradient(to right, #c33764, #1d2671);\n}\n.small-box .icon {\n  color: #fff !important;\n  opacity: 0.6;\n}\n.product-thumb.clearfix {\n  padding: 12px 13px;\n  margin-right: 10px;\n  margin-right: 10px;\n  border: 1px solid #eee;\n  box-shadow: 2px 2px 2px #eee;\n}\n.custom-boxs {\n  background: #fff;\n  padding: 13px;\n  height: 220px;\n  box-shadow: 3px 3px 3px #ddd;\n  border-radius: 6px;\n  margin-bottom: 10px;\n}\n.custom-boxs-body strong {\n  position: absolute;\n  right: 10%;\n  color: blue;\n}\n.custom-boxs-footer {\n  background: #00a65a;\n  color: #fff;\n}\n.analysis-item {\n  display: flex;\n  list-style-type: none;\n  float: right;\n}\n.analysis-item li {\n  padding: 10px 10px;\n  text-transform: uppercase;\n  font-weight: bold;\n  cursor: pointer;\n}\n.analysis-item .active {\n  border-bottom: 2px solid #000;\n}\n.sub_info{\n  font-size: 24px;\n    color: #fff;\n    margin-top: 0px;\n    position: absolute;\n    margin-left: 20px;\n}\n.small-box{\n    border-radius: 30px;\n}\n.small-box h3 {\n      margin: 0px 18px;\n      margin-top:5px;\n      font-size: 26px;\n}\n.small-box h4 {\n    padding-top: 30px;\n    margin-left: 20px;\n}\n.money_icon {\n  font-size: 26px;\n}\n.small-box>.small-box-footer {\n    border-radius: 0px 0px 30px 30px;\n}\n:root {\n    --red: hsl(0, 78%, 62%);\n    --cyan: hsl(180, 62%, 55%);\n    --orange: hsl(34, 97%, 64%);\n    --blue: hsl(212, 86%, 64%);\n    --varyDarkBlue: hsl(234, 12%, 34%);\n    --grayishBlue: hsl(229, 6%, 66%);\n    --veryLightGray: hsl(0, 0%, 98%);\n    --weight1: 200;\n    --weight2: 400;\n    --weight3: 600;\n}\nbody {\n    font-size: 15px;\n    font-family: 'Poppins', sans-serif;\n    background-color: var(--veryLightGray);\n}\n.attribution { \n    font-size: 11px; text-align: center;\n}\n.attribution a { \n    color: hsl(228, 45%, 44%);\n}\nh1:first-of-type {\n    font-weight: var(--weight1);\n    color: var(--varyDarkBlue);\n}\nh1:last-of-type {\n    color: var(--varyDarkBlue);\n}\n@media (max-width: 400px) {\nh1 {\n        font-size: 1.5rem;\n}\n}\n.header {\n    text-align: center;\n    line-height: 0.8;\n    margin-bottom: 50px;\n    margin-top: 100px;\n}\n.header p {\n    margin: 0 auto;\n    line-height: 2;\n    color: var(--grayishBlue);\n}\n.boxs p {\n    color: var(--grayishBlue);\n}\n.boxs {\n    border-radius: 5px;\n    box-shadow: 0px 30px 40px -20px var(--grayishBlue);\n    padding: 30px;\n    margin: 20px;\n}\n.d_img_icon {\n    margin-top: -75px;\n    float: right;\n}\n@media (max-width: 450px) {\n.boxs {\n        height: 200px;\n}\n}\n@media (max-width: 950px) and (min-width: 450px) {\n.boxs {\n        text-align: center;\n        height: 180px;\n}\n}\n.cyan {\n    border-top: 3px solid var(--cyan);\n}\n.red {\n    border-top: 3px solid var(--red);\n}\n.blue {\n    border-top: 3px solid var(--blue);\n}\n.orange {\n    border-top: 3px solid var(--orange);\n}\nh3 {\n    color: var(--varyDarkBlue);\n    font-weight: var(--weight3);\n}\n@media (min-width: 950px) {\n.row1-container {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n}\n.row2-container {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n}\n.boxs-down {\n        position: relative;\n        top: 150px;\n}\n.boxs {\n        width: 100%;\n        height: 150px;\n}\n.header p {\n        width: 30%;\n}\n}\n.boxs {\n    border-radius: 5px;\n    box-shadow: 0px 30px 40px -20px var(--grayishBlue);\n    padding: 30px;\n    margin: 20px;\n}\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/Dashboard.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sellcenter/Dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/Dashboard.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/Dashboard.vue?vue&type=template&id=8113f152&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sellcenter/Dashboard.vue?vue&type=template&id=8113f152& ***!
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
      _c("navbar"),
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
              _c("div", { staticClass: "row container_row" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-4 col-md-4 col-lg-12 col-md-12" },
                  [
                    _c(
                      "div",
                      { staticClass: "boxs  blue" },
                      [
                        _c("h3", [_vm._v(" Credit This Weeck  ")]),
                        _vm._v(" "),
                        _c("h4", [
                          _vm._v(
                            "   " +
                              _vm._s(_vm.analysis.this_weeck_credit) +
                              " ৳  "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass: "small-boxs-footer",
                            attrs: { to: { name: "credit" } }
                          },
                          [
                            _vm._v("More info "),
                            _c("i", { staticClass: "fa fa-arrow-circle-right" })
                          ]
                        ),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "d_img_icon",
                          attrs: {
                            src:
                              "https://assets.codepen.io/2301174/icon-supervisor.svg",
                            alt: ""
                          }
                        })
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-4 col-md-4 col-lg-12 col-md-12" },
                  [
                    _c(
                      "div",
                      { staticClass: "boxs  blue" },
                      [
                        _c("h3", [_vm._v(" Credit This Month  ")]),
                        _vm._v(" "),
                        _c("h4", [
                          _vm._v(
                            "   " +
                              _vm._s(_vm.analysis.this_month_credit) +
                              " ৳  "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass: "small-boxs-footer",
                            attrs: { to: { name: "credit" } }
                          },
                          [
                            _vm._v("More info "),
                            _c("i", { staticClass: "fa fa-arrow-circle-right" })
                          ]
                        ),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "d_img_icon",
                          attrs: {
                            src:
                              "https://assets.codepen.io/2301174/icon-supervisor.svg",
                            alt: ""
                          }
                        })
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-4 col-md-4 col-lg-12 col-md-12" },
                  [
                    _c(
                      "div",
                      { staticClass: "boxs  blue" },
                      [
                        _c("h3", [_vm._v(" Total Credit   ")]),
                        _vm._v(" "),
                        _c("h4", [
                          _vm._v(
                            "   " + _vm._s(_vm.analysis.total_credit) + " ৳  "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass: "small-boxs-footer",
                            attrs: { to: { name: "credit" } }
                          },
                          [
                            _vm._v("More info "),
                            _c("i", { staticClass: "fa fa-arrow-circle-right" })
                          ]
                        ),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "d_img_icon",
                          attrs: {
                            src:
                              "https://assets.codepen.io/2301174/icon-supervisor.svg",
                            alt: ""
                          }
                        })
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-4 col-md-4 col-lg-12 col-md-12" },
                  [
                    _c(
                      "div",
                      { staticClass: "boxs  red" },
                      [
                        _c("h3", [_vm._v("  Debit This Weeck   ")]),
                        _vm._v(" "),
                        _c("h4", [
                          _vm._v(
                            "   " +
                              _vm._s(_vm.analysis.this_weeck_debit) +
                              " ৳  "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass: "small-boxs-footer",
                            attrs: { to: { name: "debit" } }
                          },
                          [
                            _vm._v("More info "),
                            _c("i", { staticClass: "fa fa-arrow-circle-right" })
                          ]
                        ),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "d_img_icon",
                          attrs: {
                            src:
                              "https://assets.codepen.io/2301174/icon-supervisor.svg",
                            alt: ""
                          }
                        })
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-4 col-md-4 col-lg-12 col-md-12" },
                  [
                    _c(
                      "div",
                      { staticClass: "boxs  red" },
                      [
                        _c("h3", [_vm._v("  Debit This Month   ")]),
                        _vm._v(" "),
                        _c("h4", [
                          _vm._v(
                            "   " +
                              _vm._s(_vm.analysis.this_month_debit) +
                              " ৳  "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass: "small-boxs-footer",
                            attrs: { to: { name: "debit" } }
                          },
                          [
                            _vm._v("More info "),
                            _c("i", { staticClass: "fa fa-arrow-circle-right" })
                          ]
                        ),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "d_img_icon",
                          attrs: {
                            src:
                              "https://assets.codepen.io/2301174/icon-supervisor.svg",
                            alt: ""
                          }
                        })
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-4 col-md-4 col-lg-12 col-md-12" },
                  [
                    _c(
                      "div",
                      { staticClass: "boxs  red" },
                      [
                        _c("h3", [_vm._v(" Total Debit   ")]),
                        _vm._v(" "),
                        _c("h4", [
                          _vm._v(
                            "   " + _vm._s(_vm.analysis.total_debit) + " ৳  "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass: "small-boxs-footer",
                            attrs: { to: { name: "debit" } }
                          },
                          [
                            _vm._v("More info "),
                            _c("i", { staticClass: "fa fa-arrow-circle-right" })
                          ]
                        ),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "d_img_icon",
                          attrs: {
                            src:
                              "https://assets.codepen.io/2301174/icon-supervisor.svg",
                            alt: ""
                          }
                        })
                      ],
                      1
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("h1", { staticStyle: { "margin-left": "15px" } }, [
                  _vm._v("Accounts")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-4" }, [
                  _c("div", { staticClass: "custom-boxs" }, [
                    _c("div", { staticClass: "custom-boxs-body" }, [
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
                        _vm._v("\n                In Bkash:\n                "),
                        _c("strong", [
                          _vm._v(
                            _vm._s(parseInt(_vm.balance.today_credit_bkash))
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("h4", [
                        _vm._v("\n                In Nagad:\n                "),
                        _c("strong", [
                          _vm._v(
                            _vm._s(parseInt(_vm.balance.today_credit_nagad))
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
                    _vm._m(1)
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-4" }, [
                  _c("div", { staticClass: "custom-boxs" }, [
                    _c("div", { staticClass: "custom-boxs-body" }, [
                      _c("h4", [
                        _vm._v("\n                In Cash: "),
                        _c("strong", [
                          _vm._v(_vm._s(parseInt(_vm.balance.today_debit_cash)))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("h4", [
                        _vm._v("\n                In Bkash:\n                "),
                        _c("strong", [
                          _vm._v(
                            _vm._s(parseInt(_vm.balance.today_debit_bkash))
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("h4", [
                        _vm._v("\n                In Nagad:\n                "),
                        _c("strong", [
                          _vm._v(
                            _vm._s(parseInt(_vm.balance.today_debit_nagad))
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
                    _vm._m(2)
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-4" }, [
                  _c("div", { staticClass: "custom-boxs" }, [
                    _c("div", { staticClass: "custom-boxs-body" }, [
                      _c("h4", [
                        _vm._v("\n                In Cash:\n                "),
                        _c("strong", [
                          _vm._v(
                            _vm._s(
                              parseInt(_vm.balance.total_credit_cash) -
                                parseInt(_vm.balance.total_debit_cash)
                            )
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("h4", [
                        _vm._v("\n                In Bkash:\n                "),
                        _c("strong", [
                          _vm._v(
                            _vm._s(
                              parseInt(_vm.balance.total_credit_bkash) -
                                parseInt(_vm.balance.total_debit_bkash)
                            )
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("h4", [
                        _vm._v("\n                In Nagad:\n                "),
                        _c("strong", [
                          _vm._v(
                            _vm._s(
                              parseInt(_vm.balance.total_credit_nagad) -
                                parseInt(_vm.balance.total_debit_nagad)
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
                    _vm._m(3)
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
    return _c("div", { staticClass: "custom-boxs-footer" }, [
      _c(
        "h3",
        {
          staticClass: "text-center text-uppercase",
          staticStyle: { color: "#fff" }
        },
        [_vm._v("today credit")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "custom-boxs-footer" }, [
      _c(
        "h3",
        {
          staticClass: "text-center text-uppercase",
          staticStyle: { color: "#fff" }
        },
        [_vm._v("today debit")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "custom-boxs-footer" }, [
      _c(
        "h3",
        {
          staticClass: "text-center text-uppercase",
          staticStyle: { color: "#fff" }
        },
        [_vm._v("total balance")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/Navbar.vue?vue&type=template&id=c0c24b46&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sellcenter/Navbar.vue?vue&type=template&id=c0c24b46& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("header", { staticClass: "main-header" }, [
      _c("a", { staticClass: "logo", attrs: { href: "" } }, [
        _vm._m(0),
        _vm._v(" "),
        _c("span", { staticClass: "logo-lg" }, [
          _c("b", [_vm._v(_vm._s(_vm.general_setting.title))])
        ])
      ]),
      _vm._v(" "),
      _c("nav", { staticClass: "navbar navbar-static-top" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "navbar-custom-menu" }, [
          _c("ul", { staticClass: "nav navbar-nav" }, [
            _c("li", { staticClass: "dropdown user user-menu" }, [
              _c(
                "a",
                {
                  staticClass: "dropdown-toggle",
                  attrs: { href: "#", "data-toggle": "dropdown" }
                },
                [
                  _c("img", {
                    staticClass: "user-image",
                    attrs: { src: _vm.base_url + _vm.sellcenter.logo }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "hidden-xs" }, [
                    _vm._v(_vm._s(_vm.sellcenter.name))
                  ])
                ]
              ),
              _vm._v(" "),
              _c("ul", { staticClass: "dropdown-menu" }, [
                _c("li", { staticClass: "user-header" }, [
                  _c("img", {
                    staticClass: "img-circle",
                    attrs: {
                      src: _vm.base_url + _vm.sellcenter.logo,
                      alt: "User Image"
                    }
                  }),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.sellcenter.name) +
                        " \n                "
                    ),
                    _c("small", [
                      _vm._v(" since " + _vm._s(_vm.sellcenter.created_at))
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "user-footer" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-3" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-primary ",
                            attrs: { to: { name: "sell_center_profile" } }
                          },
                          [_vm._v(" profile ")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-6" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-primary ",
                            attrs: { to: { name: "sell_center_password_edit" } }
                          },
                          [_vm._v("change password")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-danger ",
                          on: { click: _vm.logout }
                        },
                        [_vm._v(" logout ")]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "logo-mini" }, [
      _c("b", [_vm._v("A")]),
      _vm._v("LT")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "sidebar-toggle",
        attrs: { href: "#", "data-toggle": "push-menu", role: "button" }
      },
      [_c("span", { staticClass: "sr-only" }, [_vm._v("Toggle navigation")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/sellcenter/Dashboard.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/sellcenter/Dashboard.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_8113f152___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=8113f152& */ "./resources/js/components/sellcenter/Dashboard.vue?vue&type=template&id=8113f152&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/sellcenter/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/sellcenter/Dashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_8113f152___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_8113f152___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sellcenter/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sellcenter/Dashboard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/sellcenter/Dashboard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sellcenter/Dashboard.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/sellcenter/Dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/Dashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/sellcenter/Dashboard.vue?vue&type=template&id=8113f152&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/sellcenter/Dashboard.vue?vue&type=template&id=8113f152& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_8113f152___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=8113f152& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/Dashboard.vue?vue&type=template&id=8113f152&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_8113f152___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_8113f152___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/sellcenter/Navbar.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/sellcenter/Navbar.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_vue_vue_type_template_id_c0c24b46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=c0c24b46& */ "./resources/js/components/sellcenter/Navbar.vue?vue&type=template&id=c0c24b46&");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js& */ "./resources/js/components/sellcenter/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navbar_vue_vue_type_template_id_c0c24b46___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navbar_vue_vue_type_template_id_c0c24b46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sellcenter/Navbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sellcenter/Navbar.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/sellcenter/Navbar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sellcenter/Navbar.vue?vue&type=template&id=c0c24b46&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/sellcenter/Navbar.vue?vue&type=template&id=c0c24b46& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_c0c24b46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=template&id=c0c24b46& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/Navbar.vue?vue&type=template&id=c0c24b46&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_c0c24b46___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_c0c24b46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);