(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sell_center_company_sale"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/sale/CompanySales.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sellcenter/sale/CompanySales.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    navbar: _Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  created: function created() {
    this.saleList();
  },
  data: function data() {
    return {
      sales: {},
      loading: true,
      item: 20,
      start_date: "",
      end_date: "",
      data_search: "",
      //date picker options ..........
      options: {
        format: "YYYY-MM-DD",
        useCurrent: true
      }
    };
  },
  methods: {
    saleAmount: function saleAmount(sales) {
      var amount = 0;
      sales.forEach(function (sale) {
        amount += parseInt(sale.amount);
      });
      return amount;
    },
    saleDiscount: function saleDiscount(sales) {
      var amount = 0;
      sales.forEach(function (sale) {
        amount += parseFloat(sale.discount);
      });
      return amount.toFixed(0);
    },
    filterSales: function filterSales() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      //fetch data
      axios.get("/api/filter/sell/center/company/sales?page=" + page, {
        //send data
        params: {
          start_date: this.start_date,
          end_date: this.end_date,
          item: this.item
        }
      }).then(function (resp) {
        console.log(resp);

        if (resp.data.status == "SUCCESS") {
          _this.sales = resp.data.sales;
        }
      });
    },
    saleList: function saleList() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get("/api/sell/center/company/sales?page=" + page, {
        params: {
          item: this.item
        }
      }).then(function (resp) {
        console.log(resp);

        if (resp.data.status == "SUCCESS") {
          _this2.sales = resp.data.sales;
          _this2.loading = false;
        } else {
          _this2.$toasted.show("something went to wrong", {
            type: "error",
            position: "top-center",
            duration: 5000
          });
        }
      })["catch"](function (error) {
        _this2.$toasted.show("something went to wrong", {
          type: "error",
          position: "top-center",
          duration: 4000
        });
      });
    }
  },
  watch: {
    start_date: function start_date(value) {
      if (value.length > 1) {
        this.filterSales();
      }
    },
    end_date: function end_date(value) {
      if (value.length > 1) {
        this.filterSales();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/sale/CompanySales.vue?vue&type=style&index=0&id=0c295bda&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sellcenter/sale/CompanySales.vue?vue&type=style&index=0&id=0c295bda&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.action_container>a[data-v-0c295bda]{\n  margin:2px 0px;\n}\n.amout_container>p[data-v-0c295bda]{\n  text-align: left;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/sale/CompanySales.vue?vue&type=style&index=0&id=0c295bda&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sellcenter/sale/CompanySales.vue?vue&type=style&index=0&id=0c295bda&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySales.vue?vue&type=style&index=0&id=0c295bda&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/sale/CompanySales.vue?vue&type=style&index=0&id=0c295bda&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/sale/CompanySales.vue?vue&type=template&id=0c295bda&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sellcenter/sale/CompanySales.vue?vue&type=template&id=0c295bda&scoped=true& ***!
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
      _c("navbar"),
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
                  attrs: { to: { name: "sell_center_sale_add" } }
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
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-12 col-xl-12 col-md-12" }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _c(
                    "div",
                    { staticClass: "box-header with-border text-center" },
                    [
                      _c("h3", { staticClass: "box-title" }, [
                        _vm._v("Sales Records ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "row",
                          staticStyle: { "margin-top": "10px" }
                        },
                        [
                          _c("div", { staticClass: "col-lg-10" }, [
                            _c(
                              "form",
                              {
                                on: {
                                  submit: function($event) {
                                    $event.preventDefault()
                                    return _vm.filterSales($event)
                                  }
                                }
                              },
                              [
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-lg-4" }, [
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
                                        autocomplete: "off",
                                        placeholder: "search by invoice,phone "
                                      },
                                      domProps: { value: _vm.search },
                                      on: {
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
                                  _c(
                                    "div",
                                    { staticClass: "col-lg-4" },
                                    [
                                      _c("date-picker", {
                                        attrs: {
                                          autocomplete: "off",
                                          placeholder: "start-date",
                                          config: _vm.options
                                        },
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
                                    { staticClass: "col-lg-4" },
                                    [
                                      _c("date-picker", {
                                        attrs: {
                                          autocomplete: "off",
                                          placeholder: "end-date",
                                          config: _vm.options
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
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-lg-2" }, [
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
                                        .call($event.target.options, function(
                                          o
                                        ) {
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
                                    _vm.saleList
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
                                _c("option", { attrs: { value: "40" } }, [
                                  _vm._v("40")
                                ])
                              ]
                            )
                          ])
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _c(
                      "table",
                      {
                        staticClass:
                          "table table-bordered table-hover table-striped "
                      },
                      [
                        _vm._m(1),
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
                              : _vm._l(_vm.sales.data, function(sale, index) {
                                  return _c("tr", { key: index }, [
                                    _c("td", { attrs: { scope: "row" } }, [
                                      _vm._v(_vm._s(index + 1))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(sale.invoice_no))]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(
                                          sale.company_sales[0].customer_name
                                            ? sale.company_sales[0]
                                                .customer_name
                                            : "empty"
                                        ) + " "
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c("b", [
                                        _vm._v(
                                          " " +
                                            _vm._s(
                                              sale.company_sales[0]
                                                .customer_phone
                                                ? sale.company_sales[0]
                                                    .customer_phone
                                                : "empty"
                                            ) +
                                            " "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            sale.company_sales[0]
                                              .customer_address
                                              ? sale.company_sales[0]
                                                  .customer_address
                                              : "empty"
                                          )
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c(
                                        "div",
                                        { staticClass: "amout_container" },
                                        [
                                          _c("p", [
                                            _vm._v(
                                              " Total:  " +
                                                _vm._s(
                                                  _vm.saleAmount(
                                                    sale.company_sales
                                                  )
                                                ) +
                                                "  "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("p", [
                                            _vm._v(
                                              " Discount: " +
                                                _vm._s(
                                                  _vm.saleDiscount(
                                                    sale.company_sales
                                                  )
                                                ) +
                                                "  "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("p", [
                                            _vm._v(
                                              " Paid: " +
                                                _vm._s(
                                                  sale.company_sales[0].paid
                                                ) +
                                                " "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("p", [
                                            _vm._v(
                                              " Shipping: " +
                                                _vm._s(
                                                  sale.company_sales[0]
                                                    .shipping_cost
                                                ) +
                                                " "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("p", [
                                            _vm._v(
                                              " Due: " +
                                                _vm._s(
                                                  _vm.saleAmount(
                                                    sale.company_sales
                                                  ) +
                                                    sale.company_sales[0]
                                                      .shipping_cost -
                                                    parseInt(
                                                      sale.company_sales[0].paid
                                                    ) -
                                                    _vm.saleDiscount(
                                                      sale.company_sales
                                                    )
                                                ) +
                                                "  "
                                            )
                                          ])
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      sale.company_sales[0].courier.length > 0
                                        ? _c("div", [
                                            _c("p", [
                                              _vm._v(
                                                _vm._s(
                                                  sale.company_sales[0].courier
                                                ) + " "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("p", [
                                              _vm._v(" memo: "),
                                              _c("b", [
                                                _vm._v(
                                                  _vm._s(
                                                    sale.company_sales[0]
                                                      .memo_no
                                                      ? sale.company_sales[0]
                                                          .memo_no
                                                      : "empty"
                                                  )
                                                )
                                              ])
                                            ])
                                          ])
                                        : _c("div", [
                                            _vm._v(
                                              "\n                          Empty\n                        "
                                            )
                                          ])
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("p", [
                                        _vm._v(
                                          "   " +
                                            _vm._s(
                                              sale.company_sales[0].status
                                            ) +
                                            " "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      sale.company_sales[0].print_status == 1
                                        ? _c(
                                            "a",
                                            {
                                              staticClass:
                                                "btn btn-xs btn-success",
                                              staticStyle: { width: "70px" }
                                            },
                                            [_vm._v("printed")]
                                          )
                                        : _vm._e()
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(
                                            sale.company_sales[0].commment
                                              ? sale.company_sales[0].commment
                                              : ""
                                          ) +
                                          "\n                      "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c(
                                        "div",
                                        { staticClass: "action_container" },
                                        [
                                          _c(
                                            "router-link",
                                            {
                                              staticClass:
                                                "btn btn-primary btn-sm",
                                              staticStyle: { width: "70px" },
                                              attrs: {
                                                to: {
                                                  name:
                                                    "sell_center_company_sale_view",
                                                  params: {
                                                    invoice_no: sale.invoice_no
                                                  }
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fa fa-eye"
                                              }),
                                              _vm._v("view")
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "a",
                                            {
                                              staticClass: "btn btn-sm btn-info"
                                            },
                                            [_vm._v("shipment")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "btn btn-sm btn-success"
                                            },
                                            [_vm._v("delivered")]
                                          )
                                        ],
                                        1
                                      )
                                    ])
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
                            attrs: { data: _vm.sales, limit: 3 },
                            on: { "pagination-change-page": _vm.saleList }
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
                            _c("strong", [_vm._v(_vm._s(_vm.sales.from))]),
                            _vm._v(" to\n                      "),
                            _c("strong", [_vm._v(_vm._s(_vm.sales.to))]),
                            _vm._v(" of total\n                      "),
                            _c("strong", [_vm._v(_vm._s(_vm.sales.total))]),
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
      _c("li", { staticClass: "active" }, [_vm._v("Sales")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { width: "5%" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "10%" } }, [_vm._v("Invoice")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "15%" } }, [_vm._v("Customer")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "20%" } }, [_vm._v("Address")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "15%" } }, [_vm._v("Amount")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "10%" } }, [_vm._v("Courier")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "9%" } }, [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "10%" } }, [_vm._v("Comment")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "6%" } }, [_vm._v("Action")])
      ])
    ])
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

/***/ "./resources/js/components/sellcenter/sale/CompanySales.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/sellcenter/sale/CompanySales.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanySales_vue_vue_type_template_id_0c295bda_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanySales.vue?vue&type=template&id=0c295bda&scoped=true& */ "./resources/js/components/sellcenter/sale/CompanySales.vue?vue&type=template&id=0c295bda&scoped=true&");
/* harmony import */ var _CompanySales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanySales.vue?vue&type=script&lang=js& */ "./resources/js/components/sellcenter/sale/CompanySales.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CompanySales_vue_vue_type_style_index_0_id_0c295bda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompanySales.vue?vue&type=style&index=0&id=0c295bda&scoped=true&lang=css& */ "./resources/js/components/sellcenter/sale/CompanySales.vue?vue&type=style&index=0&id=0c295bda&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CompanySales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanySales_vue_vue_type_template_id_0c295bda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanySales_vue_vue_type_template_id_0c295bda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0c295bda",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sellcenter/sale/CompanySales.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sellcenter/sale/CompanySales.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/sellcenter/sale/CompanySales.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySales.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/sale/CompanySales.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sellcenter/sale/CompanySales.vue?vue&type=style&index=0&id=0c295bda&scoped=true&lang=css&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/sellcenter/sale/CompanySales.vue?vue&type=style&index=0&id=0c295bda&scoped=true&lang=css& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySales_vue_vue_type_style_index_0_id_0c295bda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySales.vue?vue&type=style&index=0&id=0c295bda&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/sale/CompanySales.vue?vue&type=style&index=0&id=0c295bda&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySales_vue_vue_type_style_index_0_id_0c295bda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySales_vue_vue_type_style_index_0_id_0c295bda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySales_vue_vue_type_style_index_0_id_0c295bda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySales_vue_vue_type_style_index_0_id_0c295bda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySales_vue_vue_type_style_index_0_id_0c295bda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/sellcenter/sale/CompanySales.vue?vue&type=template&id=0c295bda&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/sellcenter/sale/CompanySales.vue?vue&type=template&id=0c295bda&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySales_vue_vue_type_template_id_0c295bda_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySales.vue?vue&type=template&id=0c295bda&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/sale/CompanySales.vue?vue&type=template&id=0c295bda&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySales_vue_vue_type_template_id_0c295bda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySales_vue_vue_type_template_id_0c295bda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);