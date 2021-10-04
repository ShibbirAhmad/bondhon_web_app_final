(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["this_week_sales_report"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/sale/ThisWeekSaleReport.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sellcenter/sale/ThisWeekSaleReport.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Navbar */ "./resources/js/components/sellcenter/Navbar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    this.salesList();
  },
  data: function data() {
    return {
      this_week_sales_products: '',
      this_month_profit: 0,
      this_week_profit: 0,
      today_profit: 0,
      yesterday_profit: 0,
      total_profit: 0,
      loading: true,
      basePath: this.$store.state.image_base_link
    };
  },
  components: {
    navbar: _Navbar__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    salesList: function salesList() {
      var _this = this;

      axios.get("/api/sellcenter/sale/reports/analysis").then(function (resp) {
        console.log(resp);
        _this.this_week_sales_products = resp.data.this_week_sales_products;

        _this.totalProfit(resp.data.total_sales_products);

        _this.thisMonthProfit(resp.data.this_month_sales_products);

        _this.thisWeekProfit(resp.data.this_week_sales_products);

        _this.yesterdayProfit(resp.data.yesterday_sales_products);

        _this.todayProfit(resp.data.today_sales_products);

        _this.loading = false;
      });
    },
    purchasePrice: function purchasePrice(items) {
      if (items) {
        var price = 0.0;
        var purchase_times = 0;
        items.forEach(function (item) {
          price += parseFloat(item.price);
          purchase_times += 1;
        });
        purchase_times = purchase_times.length > 0 ? purchase_times : 1;
        var average_price = price / purchase_times;
        return average_price;
      }
    },
    totalProfit: function totalProfit(sales_products) {
      if (sales_products) {
        var average_purchase_price = 0;
        var total_sales_amount = 0;
        var total_sale_quantity = 0;
        sales_products.forEach(function (item) {
          item.total_sales.forEach(function (sale) {
            total_sales_amount += parseFloat(sale.amount);
            total_sale_quantity += parseFloat(sale.quantity);
          });
        });
        sales_products.forEach(function (item) {
          var purchase_price = 0;
          var purchase_times = 0;
          item.purchase_items.forEach(function (purchase) {
            purchase_price += parseFloat(purchase.price);
            purchase_times += 1;
          });
          purchase_times = purchase_times.length > 0 ? purchase_times : 1;
          average_purchase_price += purchase_price / purchase_times;
        });
        var total_sale_purchase_price = parseFloat(average_purchase_price) * parseFloat(total_sale_quantity);
        var profit_amount = parseFloat(total_sales_amount) - parseFloat(total_sale_purchase_price);
        this.total_profit = profit_amount.toFixed(2);
      }
    },
    thisMonthProfit: function thisMonthProfit(sales_products) {
      if (sales_products) {
        var average_purchase_price = 0;
        var total_sales_amount = 0;
        var total_sale_quantity = 0;
        sales_products.forEach(function (item) {
          item.this_month_sales.forEach(function (sale) {
            total_sales_amount += parseFloat(sale.amount);
            total_sale_quantity += parseFloat(sale.quantity);
          });
        });
        sales_products.forEach(function (item) {
          var purchase_price = 0;
          var purchase_times = 0;
          item.purchase_items.forEach(function (purchase) {
            purchase_price += parseFloat(purchase.price);
            purchase_times += 1;
          });
          purchase_times = purchase_times.length > 0 ? purchase_times : 1;
          average_purchase_price += purchase_price / purchase_times;
        });
        var total_sale_purchase_price = average_purchase_price * total_sale_quantity;
        var profit_amount = total_sales_amount - total_sale_purchase_price;
        this.this_month_profit = profit_amount.toFixed(2);
      }
    },
    thisWeekProfit: function thisWeekProfit(sales_products) {
      if (sales_products) {
        var total_sales_amount = 0;
        var total_sale_quantity = 0;
        sales_products.forEach(function (item) {
          item.this_week_sales.forEach(function (sale) {
            total_sales_amount += parseFloat(sale.amount);
            total_sale_quantity += parseFloat(sale.quantity);
          });
        });
        var purchase_price = 0;
        var purchase_times = 0;
        sales_products.forEach(function (item) {
          item.purchase_items.forEach(function (purchase) {
            purchase_price += parseFloat(purchase.price);
            purchase_times += 1;
          });
        });
        var average_purchase_price = purchase_price / purchase_times;
        var total_sale_purchase_price = average_purchase_price * total_sale_quantity;
        var profit_amount = total_sales_amount - total_sale_purchase_price;
        this.this_week_profit = profit_amount.toFixed(2);
      }
    },
    yesterdayProfit: function yesterdayProfit(sales_products) {
      if (sales_products) {
        var average_purchase_price = 0;
        var total_sales_amount = 0;
        var total_sale_quantity = 0;
        sales_products.forEach(function (item) {
          item.yesterday_sales.forEach(function (sale) {
            total_sales_amount += parseFloat(sale.amount);
            total_sale_quantity += parseFloat(sale.quantity);
          });
        });
        sales_products.forEach(function (item) {
          var purchase_price = 0;
          var purchase_times = 0;
          item.purchase_items.forEach(function (purchase) {
            purchase_price += parseFloat(purchase.price);
            purchase_times += 1;
          });
          purchase_times = purchase_times.length > 0 ? purchase_times : 1;
          average_purchase_price += purchase_price / purchase_times;
        });
        var total_sale_purchase_price = average_purchase_price * total_sale_quantity;
        var profit_amount = total_sales_amount - total_sale_purchase_price;
        this.yesterday_profit = profit_amount.toFixed(2);
      }
    },
    todayProfit: function todayProfit(sales_products) {
      if (sales_products) {
        var average_purchase_price = 0;
        var total_sales_amount = 0;
        var total_sale_quantity = 0;
        sales_products.forEach(function (item) {
          item.today_sales.forEach(function (sale) {
            total_sales_amount += parseFloat(sale.amount);
            total_sale_quantity += parseFloat(sale.quantity);
          });
        });
        sales_products.forEach(function (item) {
          var purchase_price = 0;
          var purchase_times = 0;
          item.purchase_items.forEach(function (purchase) {
            purchase_price += parseFloat(purchase.price);
            purchase_times += 1;
          });
          purchase_times = purchase_times.length > 0 ? purchase_times : 1;
          average_purchase_price += purchase_price / purchase_times;
        });
        var total_sale_purchase_price = average_purchase_price * total_sale_quantity;
        var profit_amount = total_sales_amount - total_sale_purchase_price;
        this.today_profit = profit_amount.toFixed(2);
      }
    },
    salesAmount: function salesAmount(items) {
      if (items) {
        var amount = 0;
        items.forEach(function (item) {
          amount += parseFloat(item.amount);
        });
        return amount.toFixed(2);
      }
    },
    salesQuantity: function salesQuantity(items) {
      if (items) {
        var quantity = 0;
        items.forEach(function (item) {
          quantity += parseFloat(item.quantity);
        });
        return quantity.toFixed(2);
      }
    },
    back: function back() {
      return window.history.back();
    }
  }
});

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/sale/ThisWeekSaleReport.vue?vue&type=template&id=39a57c90&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sellcenter/sale/ThisWeekSaleReport.vue?vue&type=template&id=39a57c90& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
            "div",
            { staticClass: "order_statistic row" },
            [
              _c(
                "a",
                {
                  staticClass: "statistic_item",
                  staticStyle: {},
                  on: { click: _vm.back }
                },
                [_vm._m(0)]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "statistic_item",
                  attrs: { to: { name: "today_sales_report" } }
                },
                [
                  _c("h2", [_vm._v(_vm._s(_vm.today_profit))]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Today Sale Profit")])
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "statistic_item",
                  attrs: { to: { name: "yesterday_sales_report" } }
                },
                [
                  _c("h2", [_vm._v(_vm._s(_vm.yesterday_profit))]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Yesterday Sale Profit ")])
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "statistic_item",
                  attrs: { to: { name: "this_week_sales_report" } }
                },
                [
                  _c("h2", [_vm._v(_vm._s(_vm.this_week_profit))]),
                  _vm._v(" "),
                  _c("p", [_vm._v("  This Week Sale Profit ")])
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "statistic_item",
                  attrs: { to: { name: "this_month_sales_report" } }
                },
                [
                  _c("h2", [_vm._v(_vm._s(_vm.this_month_profit))]),
                  _vm._v(" "),
                  _c("p", [_vm._v("This Month Sale Profit")])
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "statistic_item",
                  attrs: { to: { name: "total_sales_report" } }
                },
                [
                  _c("h2", [_vm._v(_vm._s(_vm.total_profit))]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Total  Sale Profit")])
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "content" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-12 col-md-12 " }, [
              _c("div", { staticClass: "box box-primary" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "box-body" }, [
                  _c(
                    "table",
                    {
                      staticClass:
                        "table table-striped text-center table-hover table-bordered"
                    },
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
                            : _vm._l(_vm.this_week_sales_products, function(
                                item,
                                index
                              ) {
                                return _c("tr", { key: index }, [
                                  _c("td", { attrs: { scope: "row" } }, [
                                    _vm._v(_vm._s(index + 1))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      "\n                          " +
                                        _vm._s(item.name) +
                                        "-" +
                                        _vm._s(item.code) +
                                        "\n                          "
                                    ),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("img", {
                                      attrs: {
                                        src: item.image
                                          ? _vm.basePath + item.image
                                          : _vm.basePath +
                                            "images/no_image.jpg",
                                        width: "50px",
                                        height: "50px",
                                        alt: "product image"
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.purchasePrice(item.purchase_items)
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.salesQuantity(item.this_week_sales)
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.salesAmount(item.this_week_sales)
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        (
                                          _vm.salesAmount(
                                            item.this_week_sales
                                          ) -
                                          _vm.purchasePrice(
                                            item.purchase_items
                                          ) *
                                            _vm.salesQuantity(
                                              item.this_week_sales
                                            )
                                        ).toFixed(2)
                                      ) + "  "
                                    )
                                  ])
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
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", [
      _c("i", { staticClass: "fa fa-arrow-left" }),
      _vm._v("Back ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border text-center" }, [
      _c("h4", [_vm._v(" Sales Reports")])
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
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Product")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Purchase Price")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Sale Item")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Sale Amount")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Profit")])
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

/***/ "./resources/js/components/sellcenter/sale/ThisWeekSaleReport.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/sellcenter/sale/ThisWeekSaleReport.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ThisWeekSaleReport_vue_vue_type_template_id_39a57c90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThisWeekSaleReport.vue?vue&type=template&id=39a57c90& */ "./resources/js/components/sellcenter/sale/ThisWeekSaleReport.vue?vue&type=template&id=39a57c90&");
/* harmony import */ var _ThisWeekSaleReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThisWeekSaleReport.vue?vue&type=script&lang=js& */ "./resources/js/components/sellcenter/sale/ThisWeekSaleReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ThisWeekSaleReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ThisWeekSaleReport_vue_vue_type_template_id_39a57c90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ThisWeekSaleReport_vue_vue_type_template_id_39a57c90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sellcenter/sale/ThisWeekSaleReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sellcenter/sale/ThisWeekSaleReport.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/sellcenter/sale/ThisWeekSaleReport.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThisWeekSaleReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ThisWeekSaleReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/sale/ThisWeekSaleReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThisWeekSaleReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sellcenter/sale/ThisWeekSaleReport.vue?vue&type=template&id=39a57c90&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/sellcenter/sale/ThisWeekSaleReport.vue?vue&type=template&id=39a57c90& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ThisWeekSaleReport_vue_vue_type_template_id_39a57c90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ThisWeekSaleReport.vue?vue&type=template&id=39a57c90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/sale/ThisWeekSaleReport.vue?vue&type=template&id=39a57c90&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ThisWeekSaleReport_vue_vue_type_template_id_39a57c90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ThisWeekSaleReport_vue_vue_type_template_id_39a57c90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);