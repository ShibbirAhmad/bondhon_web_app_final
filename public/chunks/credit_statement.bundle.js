(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["credit_statement"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/bill_statement/credit_statement.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/bill_statement/credit_statement.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.getBillStatements();
  },
  data: function data() {
    return {
      bill_statement: "",
      loading: true,
      basePath: this.$store.getters.image_base_link,
      total_investment: "",
      total_profit_paid: "",
      total_due_amount: 0
    };
  },
  methods: {
    costTotal: function costTotal(data) {
      var amount = 0;
      data.forEach(function (element) {
        amount += element.amount;
      });
      return amount;
    },
    getBillStatements: function getBillStatements() {
      var _this = this;

      axios.get("/api/bill/statement/list/type/credit").then(function (resp) {
        console.log(resp);

        if (resp.data.success == "OK") {
          _this.bill_statement = resp.data.bills;
          _this.loading = false;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    totalAmount: function totalAmount(investment) {
      //  console.log(typeof investment)
      var total = 0; // investment.forEach(ele => {
      //     total +=parseFloat(ele.amount);
      // });

      Object.keys(investment).forEach(function (key) {
        console.log(key);
      });
      return total;
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/bill_statement/credit_statement.vue?vue&type=style&index=0&id=54aed5f4&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/bill_statement/credit_statement.vue?vue&type=style&index=0&id=54aed5f4&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.box-primary[data-v-54aed5f4] {\r\n  margin-left: -100px;\r\n  overflow-x: scroll;\n}\n.total_style[data-v-54aed5f4] {\r\n  border: 2px solid #ddd;\r\n  padding: 4px 25px;\n}\n.total_row[data-v-54aed5f4] {\r\n  padding-bottom: 20px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/bill_statement/credit_statement.vue?vue&type=style&index=0&id=54aed5f4&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/bill_statement/credit_statement.vue?vue&type=style&index=0&id=54aed5f4&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./credit_statement.vue?vue&type=style&index=0&id=54aed5f4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/bill_statement/credit_statement.vue?vue&type=style&index=0&id=54aed5f4&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/bill_statement/credit_statement.vue?vue&type=template&id=54aed5f4&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/bill_statement/credit_statement.vue?vue&type=template&id=54aed5f4&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
                  attrs: { to: { name: "statement_add" } }
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
              _c("div", { staticClass: "col-lg-10 col-lg-offset-1" }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _c(
                      "table",
                      { staticClass: "table text-center table-striped " },
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
                              : _vm._l(_vm.bill_statement, function(
                                  items,
                                  index
                                ) {
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
                                            staticStyle: { color: "blue" },
                                            attrs: {
                                              to: {
                                                name: "statement_details",
                                                params: { id: items.id }
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(items.name) +
                                                "\n                        "
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c(
                                        "span",
                                        { staticClass: "badge badge-success" },
                                        [
                                          _vm._v(
                                            " ৳ " +
                                              _vm._s(_vm.costTotal(items.bills))
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(items.company_name) +
                                          "\n                      "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(items.mobile_no) + " ")
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(items.address) + " ")
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
      _c("li", { staticClass: "active" }, [_vm._v("Bill ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border text-center" }, [
      _c("h3", { staticClass: "box-title heading" }, [
        _vm._v("Credit Statement Table")
      ])
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
        _c("th", { attrs: { scope: "col" } }, [_vm._v("  Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v(" Total  ")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Company Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Phone")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v(" Address ")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/bill_statement/credit_statement.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/admin/bill_statement/credit_statement.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _credit_statement_vue_vue_type_template_id_54aed5f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./credit_statement.vue?vue&type=template&id=54aed5f4&scoped=true& */ "./resources/js/components/admin/bill_statement/credit_statement.vue?vue&type=template&id=54aed5f4&scoped=true&");
/* harmony import */ var _credit_statement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./credit_statement.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/bill_statement/credit_statement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _credit_statement_vue_vue_type_style_index_0_id_54aed5f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./credit_statement.vue?vue&type=style&index=0&id=54aed5f4&scoped=true&lang=css& */ "./resources/js/components/admin/bill_statement/credit_statement.vue?vue&type=style&index=0&id=54aed5f4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _credit_statement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _credit_statement_vue_vue_type_template_id_54aed5f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _credit_statement_vue_vue_type_template_id_54aed5f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "54aed5f4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/bill_statement/credit_statement.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/bill_statement/credit_statement.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/admin/bill_statement/credit_statement.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_credit_statement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./credit_statement.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/bill_statement/credit_statement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_credit_statement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/bill_statement/credit_statement.vue?vue&type=style&index=0&id=54aed5f4&scoped=true&lang=css&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/admin/bill_statement/credit_statement.vue?vue&type=style&index=0&id=54aed5f4&scoped=true&lang=css& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_credit_statement_vue_vue_type_style_index_0_id_54aed5f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./credit_statement.vue?vue&type=style&index=0&id=54aed5f4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/bill_statement/credit_statement.vue?vue&type=style&index=0&id=54aed5f4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_credit_statement_vue_vue_type_style_index_0_id_54aed5f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_credit_statement_vue_vue_type_style_index_0_id_54aed5f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_credit_statement_vue_vue_type_style_index_0_id_54aed5f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_credit_statement_vue_vue_type_style_index_0_id_54aed5f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_credit_statement_vue_vue_type_style_index_0_id_54aed5f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/bill_statement/credit_statement.vue?vue&type=template&id=54aed5f4&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/admin/bill_statement/credit_statement.vue?vue&type=template&id=54aed5f4&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_credit_statement_vue_vue_type_template_id_54aed5f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./credit_statement.vue?vue&type=template&id=54aed5f4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/bill_statement/credit_statement.vue?vue&type=template&id=54aed5f4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_credit_statement_vue_vue_type_template_id_54aed5f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_credit_statement_vue_vue_type_template_id_54aed5f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);