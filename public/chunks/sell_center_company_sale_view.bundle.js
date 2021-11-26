(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sell_center_company_sale_view"],{

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
      });
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/sale/CompanySaleView.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sellcenter/sale/CompanySaleView.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Navbar.vue */ "./resources/js/components/sellcenter/Navbar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  created: function created() {
    this.saleDetails();
  },
  data: function data() {
    return {
      sales: "",
      sellcenter: "",
      error: "",
      loading: true,
      base_url: this.$store.state.image_base_link
    };
  },
  methods: {
    saleDetails: function saleDetails() {
      var _this = this;

      axios.get("/api/sell/center/company/sale/view/" + this.$route.params.invoice_no).then(function (resp) {
        console.log(resp);

        if (resp.data.status == "SUCCESS") {
          _this.sales = resp.data.sales;
          _this.sellcenter = resp.data.sellcenter;
          _this.loading = false;
        } else {
          _this.$toasted.show("something went to wrong", {
            type: "error",
            position: "top-center",
            duration: 5000
          });
        }
      })["catch"](function (error) {
        console.log(error);

        _this.$toasted.show("something went to wrong", {
          type: "error",
          position: "top-center",
          duration: 4000
        });
      });
    },
    formatDate: function formatDate(date) {
      console.log(date);
      var short_date = date.split(" ")[0];
      var origina_date = short_date.split("-");
      return "".concat(origina_date[2], "-").concat(origina_date[1], "-").concat(origina_date[0]);
    },
    print: function print(sale_id) {
      window.open("/api/print/sell/center/sale/invoice/" + sale_id, "_blank");
    },
    back: function back() {
      window.history.back();
    },
    totalQuantity: function totalQuantity() {
      var total = 0;
      this.sales.forEach(function (element) {
        total += parseInt(element.sale_quantity);
      });
      return total;
    },
    saleAmount: function saleAmount() {
      var total = 0;
      this.sales.forEach(function (ele) {
        total += parseInt(ele.price) * parseInt(ele.sale_quantity);
      });
      return total;
    },
    saleDiscount: function saleDiscount() {
      var total = 0;
      this.sales.forEach(function (ele) {
        total += parseFloat(ele.discount);
      });
      return total;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/sale/CompanySaleView.vue?vue&type=style&index=0&id=deeff3a4&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sellcenter/sale/CompanySaleView.vue?vue&type=style&index=0&id=deeff3a4&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.mb-2[data-v-deeff3a4] {\r\n  margin-bottom: 5px !important;\n}\n.bottomBtn[data-v-deeff3a4] {\r\n  margin-top: 15px;\r\n  margin-left: 20px;\n}\n.head_title[data-v-deeff3a4] {\r\n  margin-left: 27px;\r\n  margin-top: -12px;\n}\n.address_line[data-v-deeff3a4] {\r\n  line-height: 15px;\n}\np[data-v-deeff3a4] {\r\n  line-height: 11px;\r\n  font-size: 14px;\n}\n.m_logo[data-v-deeff3a4] {\r\n  margin-top: -30px;\r\n  height: 80px;\n}\n.m_title[data-v-deeff3a4] {\r\n  margin-top: -15px;\r\n  font-size: 11px;\n}\ntable[data-v-deeff3a4] {\r\n  margin-top: 10px;\n}\n@media print {\ntable[data-v-deeff3a4] {\r\n    margin-top: 0px !important;\n}\n.m_title[data-v-deeff3a4] {\r\n    margin-top: -15px;\r\n    font-size: 10px;\n}\n.navbar[data-v-deeff3a4] {\r\n    display: none;\n}\n.print_info_container[data-v-deeff3a4] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    position: relative;\r\n    width: 100%;\r\n    padding: 10px 10px !important;\r\n    margin-top: -15px;\n}\n.col-sm-1[data-v-deeff3a4] {\r\n    display: none;\n}\np[data-v-deeff3a4] {\r\n    line-height: 8px;\r\n    font-size: 14px;\n}\n.logo[data-v-deeff3a4] {\r\n    width: 40% !important;\n}\n.description[data-v-deeff3a4] {\r\n    width: 50% !important;\n}\n.col-lg-2[data-v-deeff3a4] {\r\n    width: 20% !important;\r\n    margin-top: 20px !important;\n}\n.invoice-header[data-v-deeff3a4] {\r\n    display: block;\n}\n.box[data-v-deeff3a4] {\r\n    border-top: none;\n}\nfooter[data-v-deeff3a4] {\r\n    border-top: none !important;\n}\n.bottomBtn[data-v-deeff3a4] {\r\n    display: none;\n}\n.address[data-v-deeff3a4] {\r\n    text-align: right;\n}\n}\n.exchange-memo[data-v-deeff3a4] {\r\n  position: absolute;\r\n  left: 25%;\r\n  top: 43%;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/sale/CompanySaleView.vue?vue&type=style&index=0&id=deeff3a4&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sellcenter/sale/CompanySaleView.vue?vue&type=style&index=0&id=deeff3a4&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySaleView.vue?vue&type=style&index=0&id=deeff3a4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/sale/CompanySaleView.vue?vue&type=style&index=0&id=deeff3a4&scoped=true&lang=css&");

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
          _c("b", [_vm._v(_vm._s(_vm.sellcenter.name))])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/sale/CompanySaleView.vue?vue&type=template&id=deeff3a4&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sellcenter/sale/CompanySaleView.vue?vue&type=template&id=deeff3a4&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
        _c("section", { staticClass: "content-header" }),
        _vm._v(" "),
        _c("section", { staticClass: "content" }, [
          _c(
            "div",
            { staticClass: "container", attrs: { id: "__container" } },
            [
              _c("div", { staticClass: "row justify-content-center" }, [
                _c("div", { staticClass: "col-lg-11" }, [
                  _c("div", { staticClass: "box box-primary" }, [
                    _c("div", { staticClass: "box-header" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "box-body" }, [
                      _c("div", { staticClass: "row print_info_container" }, [
                        _c("div", { staticClass: "col-md-1 col-sm-1" }),
                        _vm._v(" "),
                        _vm.sales[0]
                          ? _c(
                              "div",
                              { staticClass: "col-md-3 col-sm-5 description" },
                              [
                                _c("p", [
                                  _vm._v(
                                    "\n                       Customer Name: "
                                  ),
                                  _c("strong", [
                                    _vm._v(_vm._s(_vm.sales[0].customer_name))
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("p", [
                                  _vm._v(
                                    "\n                        Mobile No: "
                                  ),
                                  _c("strong", [
                                    _vm._v(_vm._s(_vm.sales[0].customer_phone))
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("p", { staticClass: "address_line" }, [
                                  _vm._v("\n                        Address: "),
                                  _c("strong", [
                                    _vm._v(
                                      _vm._s(_vm.sales[0].customer_address)
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("p", [
                                  _vm._v(
                                    "\n                        Invoice No:\n                        "
                                  ),
                                  _c("strong", [
                                    _vm._v(_vm._s(_vm.sales[0].invoice_no))
                                  ])
                                ]),
                                _vm._v(" "),
                                _vm.sales[0].comment
                                  ? _c("p", [
                                      _vm._v(_vm._s(_vm.sales[0].comment) + " ")
                                    ])
                                  : _vm._e()
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3 col-sm-3 logo" }, [
                          _c("p", { staticClass: "m_title" }, [
                            _vm._v(" " + _vm._s(_vm.sellcenter.name) + " ")
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-md-4 col-sm-4 address",
                            staticStyle: { "margin-left": "27px" }
                          },
                          [
                            _c("img", {
                              staticClass: "m_logo",
                              attrs: { src: _vm.base_url + _vm.sellcenter.logo }
                            }),
                            _vm._v(" "),
                            _c("p", {
                              staticClass: "address_line",
                              staticStyle: { "margin-top": "-10px" },
                              domProps: {
                                innerHTML: _vm._s(_vm.sellcenter.address)
                              }
                            }),
                            _vm._v(" "),
                            _vm.sales[0]
                              ? _c("p", [
                                  _vm._v("\n                      Date:"),
                                  _c("strong", [
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          _vm.formatDate(
                                            _vm.sales[0].created_at
                                          )
                                        )
                                    )
                                  ])
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-1 col-sm-1" })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-lg-1" }),
                        _vm._v(" "),
                        _vm.loading
                          ? _c("h1", [
                              _c("i", { staticClass: "fa fa-spin fa-spinner" })
                            ])
                          : _c("div", { staticClass: "col-lg-10" }, [
                              _c(
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
                                      _vm._l(_vm.sales, function(item, index) {
                                        return _c("tr", { key: index }, [
                                          _c("td", [_vm._v(_vm._s(index + 1))]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              "\n                            " +
                                                _vm._s(item.product.name) +
                                                "\n                          "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(item.product.code))
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(item.sale_quantity))
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(item.price))
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              " " + _vm._s(item.amount) + " "
                                            )
                                          ])
                                        ])
                                      }),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("td", { attrs: { colspan: "3" } }),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("strong", [
                                            _vm._v(
                                              " = " +
                                                _vm._s(_vm.totalQuantity())
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _vm._m(1),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("b", [
                                            _vm._v(_vm._s(_vm.saleAmount()))
                                          ])
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("td", { attrs: { colspan: "4" } }),
                                        _vm._v(" "),
                                        _vm._m(2),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("b", [
                                            _vm._v(_vm._s(_vm.saleDiscount()))
                                          ])
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("td", { attrs: { colspan: "4" } }),
                                        _vm._v(" "),
                                        _vm._m(3),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("b", [
                                            _vm._v(_vm._s(_vm.sales[0].paid))
                                          ])
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("td", { attrs: { colspan: "4" } }),
                                        _vm._v(" "),
                                        _vm._m(4),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("b", [
                                            _vm._v(
                                              _vm._s(_vm.sales[0].shipping_cost)
                                            )
                                          ])
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("td", { attrs: { colspan: "4" } }),
                                        _vm._v(" "),
                                        _vm._m(5),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("b", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.saleAmount() +
                                                  _vm.sales[0].shipping_cost -
                                                  (_vm.saleDiscount() +
                                                    _vm.sales[0].paid)
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
                            ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "bottomBtn" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-success print",
                            on: {
                              click: function($event) {
                                return _vm.print(_vm.sales[0].invoice_no)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fa fa-print" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-warning back",
                            on: { click: _vm.back }
                          },
                          [_c("i", { staticClass: "fa fa-arrow-circle-right" })]
                        )
                      ])
                    ])
                  ])
                ])
              ])
            ]
          )
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
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product Code")]),
        _vm._v(" "),
        _c("th", [_vm._v("Quntity")]),
        _vm._v(" "),
        _c("th", [_vm._v("Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("b", [_vm._v("Total Amount")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("b", [_vm._v("Discount")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("b", [_vm._v("Paid")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("b", [_vm._v("Shipping Cost")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("b", [_vm._v("Amount Due")])])
  }
]
render._withStripped = true



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



/***/ }),

/***/ "./resources/js/components/sellcenter/sale/CompanySaleView.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/sellcenter/sale/CompanySaleView.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanySaleView_vue_vue_type_template_id_deeff3a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanySaleView.vue?vue&type=template&id=deeff3a4&scoped=true& */ "./resources/js/components/sellcenter/sale/CompanySaleView.vue?vue&type=template&id=deeff3a4&scoped=true&");
/* harmony import */ var _CompanySaleView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanySaleView.vue?vue&type=script&lang=js& */ "./resources/js/components/sellcenter/sale/CompanySaleView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CompanySaleView_vue_vue_type_style_index_0_id_deeff3a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompanySaleView.vue?vue&type=style&index=0&id=deeff3a4&scoped=true&lang=css& */ "./resources/js/components/sellcenter/sale/CompanySaleView.vue?vue&type=style&index=0&id=deeff3a4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CompanySaleView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanySaleView_vue_vue_type_template_id_deeff3a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanySaleView_vue_vue_type_template_id_deeff3a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "deeff3a4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sellcenter/sale/CompanySaleView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sellcenter/sale/CompanySaleView.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/sellcenter/sale/CompanySaleView.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySaleView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySaleView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/sale/CompanySaleView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySaleView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sellcenter/sale/CompanySaleView.vue?vue&type=style&index=0&id=deeff3a4&scoped=true&lang=css&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/sellcenter/sale/CompanySaleView.vue?vue&type=style&index=0&id=deeff3a4&scoped=true&lang=css& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySaleView_vue_vue_type_style_index_0_id_deeff3a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySaleView.vue?vue&type=style&index=0&id=deeff3a4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/sale/CompanySaleView.vue?vue&type=style&index=0&id=deeff3a4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySaleView_vue_vue_type_style_index_0_id_deeff3a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySaleView_vue_vue_type_style_index_0_id_deeff3a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySaleView_vue_vue_type_style_index_0_id_deeff3a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySaleView_vue_vue_type_style_index_0_id_deeff3a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySaleView_vue_vue_type_style_index_0_id_deeff3a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/sellcenter/sale/CompanySaleView.vue?vue&type=template&id=deeff3a4&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/sellcenter/sale/CompanySaleView.vue?vue&type=template&id=deeff3a4&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySaleView_vue_vue_type_template_id_deeff3a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySaleView.vue?vue&type=template&id=deeff3a4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/sale/CompanySaleView.vue?vue&type=template&id=deeff3a4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySaleView_vue_vue_type_template_id_deeff3a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySaleView_vue_vue_type_template_id_deeff3a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);