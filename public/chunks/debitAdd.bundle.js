(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["debitAdd"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/debit/Add.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/debit/Add.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_signature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-signature */ "./node_modules/vue-signature/src/main.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



vue__WEBPACK_IMPORTED_MODULE_0___default.a.component(vform__WEBPACK_IMPORTED_MODULE_1__["HasError"].name, vform__WEBPACK_IMPORTED_MODULE_1__["HasError"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Add",
  created: function created() {
    this.accountPurpose();
  },
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_1__["Form"]({
        purpose: "",
        amount: "",
        date: "",
        comment: "",
        employee_id: "",
        debit_from: "Cash",
        project_id: "",
        signature: null,
        signature_write: false,
        admin_id: "",
        investor_id: "",
        loaner_id: "",
        month: "",
        old_signature: "",
        bill_statement_id: "",
        investor_return_id: ""
      }),
      old_signature: true,
      loading: true,
      error: "",
      purposes: "",
      //fo date picker
      options: {
        format: "YYYY-MM-DD",
        useCurrent: false
      },
      months: {
        January: "January",
        February: "February",
        March: "March",
        April: "April",
        May: "May",
        June: "June",
        July: "July",
        August: "August",
        September: "Septembaer",
        October: "October",
        November: "November",
        December: "December"
      },
      //signature pad.......
      option: {
        penColor: "rgb(0, 0, 0)",
        backgroundColor: "#ddd"
      },
      disabled: false,
      base_link: this.$store.state.image_base_link
    };
  },
  methods: {
    accountPurpose: function accountPurpose() {
      var _this2 = this;

      axios.get("/api/debit/purpose/list").then(function (resp) {
        console.log(resp);

        if (resp.data) {
          _this2.purposes = resp.data.debit_purposes;
          setTimeout(function () {
            console.log(_this2.$store.getters.admin.signature);

            if (_this2.$store.getters.admin.signature) {
              _this2.form.old_signature = _this2.$store.getters.admin.signature;
              _this2.old_signature = true;
            } else {
              _this2.old_signature = false;
            }

            _this2.loading = false;
          }, 1000);
        }
      })["catch"](function (e) {
        console.log(e);
      });
    },
    selectPurpose: function selectPurpose() {
      var value = this.form.purpose;

      if (value == 1) {
        this.projectList();
      } else if (value == 2) {
        this.bondhonMemberList();
      } else if (value == 3) {
        this.investorList();
      } else if (value == 4) {
        this.returnInvestorList();
      } else if (value == 5) {
        this.billStatementList();
      } else if (value == 7) {
        this.employeeList();
      } else if (value == 12) {
        this.loanerList();
      } else {
        this.form.admin_id = "";
        this.form.investor_id = "";
        this.form.loaner_id = "";
        this.form.investor_return_id = "";
        this.form.project_id = "";
        this.form.bill_statement_id = "";
      }
    },
    loanerList: function loanerList() {
      var _this3 = this;

      axios.get("/api/loaners").then(function (resp) {
        console.log(resp);
        var options = {};
        resp.data.forEach(function (element) {
          options[element.id] = element.name + "-" + element.mobile_no;
        });
        Swal.fire({
          title: "Select a Loaner",
          input: "select",
          inputOptions: options,
          inputPlaceholder: "Select One",
          showCancelButton: true
        }).then(function (result) {
          if (result.value) {
            _this3.form.loaner_id = result.value;
          } else {
            _this3.form.purpose = "";
            _this3.form.loaner_id = "";
          }
        });
      });
    },
    projectList: function projectList() {
      var _this4 = this;

      axios.get("/api/list/project").then(function (resp) {
        //  console.log(resp);
        var options = {};
        resp.data.projects.data.forEach(function (element) {
          options[element.id] = element.name + "-" + element.place;
        });
        Swal.fire({
          title: "Select a project",
          input: "select",
          inputOptions: options,
          inputPlaceholder: "Select One",
          showCancelButton: true
        }).then(function (result) {
          if (result.value) {
            _this4.form.project_id = result.value;
          } else {
            _this4.form.purpose = "";
            _this4.form.project_id = "";
          }
        });
      });
    },
    bondhonMemberList: function bondhonMemberList() {
      var _this5 = this;

      axios.get("/api/member/list").then(function (resp) {
        console.log(resp);
        var options = {};
        resp.data.admins.data.forEach(function (element) {
          options[element.id] = element.name + "-" + element.phone;
        });
        Swal.fire({
          title: "Select Member",
          input: "select",
          inputOptions: options,
          inputPlaceholder: "Select One",
          showCancelButton: true
        }).then(function (result) {
          if (result.value) {
            _this5.form.admin_id = result.value;
            Swal.fire({
              title: "Select Profit Month",
              input: "select",
              inputOptions: _this5.months,
              inputPlaceholder: "Select One",
              showCancelButton: true
            }).then(function (month) {
              if (month.value) {
                _this5.form.month = month.value;
              } else {
                _this5.form.month = "";
              }
            });
          } else {
            _this5.form.purpose = "";
            _this5.form.admin_id = "";
          }
        });
      })["catch"](function (e) {
        console.log(e);
      });
    },
    employeeList: function employeeList() {
      var _this6 = this;

      axios.get("/api/employee/list").then(function (resp) {
        console.log(resp);
        var options = {};
        resp.data.forEach(function (element) {
          options[element.id] = element.name + "-" + element.designation;
        });
        Swal.fire({
          title: "Select a employee",
          input: "select",
          inputOptions: options,
          inputPlaceholder: "Select One",
          showCancelButton: true
        }).then(function (result) {
          if (result.value) {
            _this6.form.employee_id = result.value;
          } else {
            _this6.form.purpose = "";
            _this6.form.employee_id = "";
          }
        });
      })["catch"](function (e) {
        console.log(e);
      });
    },
    billStatementList: function billStatementList() {
      var _this7 = this;

      axios.get("/api/bill/statement/list/type/debit").then(function (resp) {
        console.log(resp);
        var options = {};
        resp.data.bills.forEach(function (element) {
          options[element.id] = element.name;
        });
        Swal.fire({
          title: "Select  bill",
          input: "select",
          inputOptions: options,
          inputPlaceholder: "Select One",
          showCancelButton: true
        }).then(function (result) {
          if (result.value) {
            _this7.form.bill_statement_id = result.value;
          } else {
            _this7.form.purpose = "";
            _this7.form.bill_statement_id = "";
          }
        });
      });
    },
    addDebit: function addDebit() {
      var _this8 = this;

      if (!this.old_signature) {
        this.save();
      }

      console.log(this.form.signature);
      this.form.post("/api/debit/store").then(function (resp) {
        console.log(resp);

        if (resp.data.status == "SUCCESS") {
          _this8.$router.push({
            name: "debit"
          });

          _this8.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 2000
          });
        } else {
          _this8.error = "some thing went to wrong";
        }
      });
    },
    investorList: function investorList() {
      var _this9 = this;

      axios.get("/api/company/investor/list").then(function (resp) {
        console.log(resp);
        var options = {};
        resp.data.forEach(function (element) {
          options[element.id] = element.name + "-" + element.mobile_no;
        });
        Swal.fire({
          title: "Select a Investor",
          input: "select",
          inputOptions: options,
          inputPlaceholder: "Select One",
          showCancelButton: true
        }).then(function (result) {
          if (result.value) {
            _this9.form.investor_id = result.value;
            Swal.fire({
              title: "Select Profit Month",
              input: "select",
              inputOptions: _this9.months,
              inputPlaceholder: "Select One",
              showCancelButton: true
            }).then(function (month) {
              if (month.value) {
                _this9.form.month = month.value;
              } else {
                _this9.form.month = "";
              }
            });
          } else {
            _this9.form.purpose = "";
            _this9.form.investor_id = "";
          }
        });
      })["catch"](function (e) {
        console.log(e);
      });
    },
    returnInvestorList: function returnInvestorList() {
      var _this10 = this;

      axios.get("/api/company/investor/list").then(function (resp) {
        console.log(resp);
        var options = {};
        resp.data.forEach(function (element) {
          options[element.id] = element.name + "-" + element.mobile_no;
        });
        Swal.fire({
          title: "Select Investor",
          input: "select",
          inputOptions: options,
          inputPlaceholder: "Select One",
          showCancelButton: true
        }).then(function (result) {
          if (result.value) {
            _this10.form.investor_return_id = result.value;
          } else {
            _this10.form.purpose = "";
            _this10.form.investor_return_id = "";
          }
        });
      })["catch"](function (e) {
        console.log(e);
      });
    },
    //method initial for  get current date
    pDate: function pDate() {
      //current date
      var d = new Date(); //current mount
      //current day

      var month = d.getMonth() + 1;
      var day = d.getDate();
      var output = d.getFullYear() + "-" + (("" + month).length < 2 ? "0" : "") + month + "-" + (("" + day).length < 2 ? "0" : "") + day;
      this.form.date = output;
    },
    save: function save() {
      var _this = this;

      var png = _this.$refs.signature.save();

      this.form.signature = png;
    },
    clear: function clear() {
      var _this = this;

      _this.$refs.signature.clear();

      this.form.signature_write = false;
    },
    sigantureFocus: function sigantureFocus() {
      var element = document.getElementById("signatur-pad");
      element.classList.add("focus-signature");
    },
    checkOldSignature: function checkOldSignature() {
      if (this.old_signature.length <= 0) {
        alert("You Did Not Write Any Signature Of Our Records");
        return;
      } else {
        this.old_signature_preview = true;
      }
    }
  },
  mounted: function mounted() {
    this.pDate();
  },
  components: {
    sig: vue_signature__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  watch: {
    old_signature: function old_signature(value) {
      if (value == false) {
        this.form.old_signature = "";
        console.log(value);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/debit/Add.vue?vue&type=style&index=0&id=5b0058ba&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/debit/Add.vue?vue&type=style&index=0&id=5b0058ba&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.mb-2[data-v-5b0058ba] {\r\n  margin-bottom: 5px !important;\n}\n#signatur-pad[data-v-5b0058ba] {\r\n  height: 300px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/debit/Add.vue?vue&type=style&index=0&id=5b0058ba&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/debit/Add.vue?vue&type=style&index=0&id=5b0058ba&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&id=5b0058ba&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/debit/Add.vue?vue&type=style&index=0&id=5b0058ba&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/debit/Add.vue?vue&type=template&id=5b0058ba&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/debit/Add.vue?vue&type=template&id=5b0058ba&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
                  attrs: { to: { name: "debit" } }
                },
                [_c("i", { staticClass: "fa fa-arrow-left" })]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "content" }, [
          _c("div", { staticClass: "row justify-content-center" }, [
            _c("div", { staticClass: "col-lg-10 col-lg-offset-1" }, [
              _c("div", { staticClass: "box box-primary" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "box-body" }, [
                  _vm.loading
                    ? _c("h1", [
                        _c("i", { staticClass: "fa fa-spinner fa-spin" })
                      ])
                    : _c(
                        "form",
                        {
                          attrs: { enctype: "multipart/form-data" },
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.addDebit($event)
                            },
                            keydown: function($event) {
                              return _vm.form.onKeydown($event)
                            }
                          }
                        },
                        [
                          _vm.error
                            ? _c("div", { staticClass: "alert-danger alert" }, [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(_vm.error) +
                                    "\n                "
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("label", [_vm._v("Date")]),
                                  _vm._v(" "),
                                  _c("date-picker", {
                                    class: {
                                      "is-invalid": _vm.form.errors.has("date")
                                    },
                                    attrs: {
                                      autocomplete: "off",
                                      config: _vm.options
                                    },
                                    model: {
                                      value: _vm.form.date,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "date", $$v)
                                      },
                                      expression: "form.date"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: { form: _vm.form, field: "date" }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("label", [_vm._v("Purpose")]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.purpose,
                                          expression: "form.purpose"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "purpose"
                                        )
                                      },
                                      attrs: { name: "purpose", required: "" },
                                      on: {
                                        change: [
                                          function($event) {
                                            var $$selectedVal = Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function(o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function(o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                            _vm.$set(
                                              _vm.form,
                                              "purpose",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          },
                                          _vm.selectPurpose
                                        ]
                                      }
                                    },
                                    [
                                      _c(
                                        "option",
                                        {
                                          attrs: {
                                            value: "",
                                            selected: "",
                                            disabled: ""
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                          Select Purpose\n                        "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.purposes, function(purpose) {
                                        return _c(
                                          "option",
                                          {
                                            key: purpose.id,
                                            domProps: { value: purpose.id }
                                          },
                                          [
                                            _vm._v(
                                              "\n                          " +
                                                _vm._s(purpose.text) +
                                                "\n                        "
                                            )
                                          ]
                                        )
                                      })
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: { form: _vm.form, field: "purpose" }
                                  })
                                ],
                                1
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("label", [_vm._v("Amount")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.amount,
                                        expression: "form.amount"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "amount"
                                      )
                                    },
                                    attrs: {
                                      type: "text",
                                      name: "amount",
                                      required: "",
                                      autocomplete: "off"
                                    },
                                    domProps: { value: _vm.form.amount },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "amount",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: { form: _vm.form, field: "amount" }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("label", [_vm._v("Debit From")]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.debit_from,
                                          expression: "form.debit_from"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "debit_from"
                                        )
                                      },
                                      attrs: { name: "debit_from", id: "" },
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.form,
                                            "debit_from",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "option",
                                        { attrs: { value: "Cash" } },
                                        [_vm._v("Cash")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { value: "Bkash(personal)" } },
                                        [
                                          _vm._v(
                                            "\n                          Bkash(personal)\n                        "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { value: "Bkash(merchant)" } },
                                        [
                                          _vm._v(
                                            "\n                          Bkash(merchant)\n                        "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { value: "Bank" } },
                                        [_vm._v("Bank")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "debit_from"
                                    }
                                  })
                                ],
                                1
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", [_vm._v("Comment")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.comment,
                                    expression: "form.comment"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has("comment")
                                },
                                attrs: {
                                  type: "text",
                                  name: "comment",
                                  autocomplete: "off"
                                },
                                domProps: { value: _vm.form.comment },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "comment",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "comment" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "form-group",
                              attrs: { id: "signatur-pad" }
                            },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Signature")
                              ]),
                              _vm._v(" "),
                              _c("sig", {
                                ref: "signature",
                                staticClass: "bg-warning",
                                class: {
                                  "is-invalid": _vm.form.errors.has("signature")
                                },
                                staticStyle: { "margin-bottom": "5px" },
                                attrs: {
                                  id: "sig",
                                  sigOption: _vm.option,
                                  disabled: _vm.disabled
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "m-1",
                                  staticStyle: {
                                    position: "absolute",
                                    right: "10px"
                                  },
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.clear($event)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                    clear\n                  "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "m-1",
                                  staticStyle: {
                                    position: "absolute",
                                    right: "60px"
                                  },
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      _vm.form.signature_write = true
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                    Perfect\n                  "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group text-center" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-primary",
                                attrs: {
                                  disabled: _vm.form.busy,
                                  type: "submit"
                                }
                              },
                              [
                                _vm.form.busy
                                  ? _c("i", {
                                      staticClass: "fa fa-spin fa-spinner"
                                    })
                                  : _vm._e(),
                                _vm._v("Submit\n                  ")
                              ]
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
      _c("li", { staticClass: "active" }, [_vm._v("Debit")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border text-center" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Add Debit")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/debit/Add.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/admin/debit/Add.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_5b0058ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=5b0058ba&scoped=true& */ "./resources/js/components/admin/debit/Add.vue?vue&type=template&id=5b0058ba&scoped=true&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/debit/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Add_vue_vue_type_style_index_0_id_5b0058ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add.vue?vue&type=style&index=0&id=5b0058ba&scoped=true&lang=css& */ "./resources/js/components/admin/debit/Add.vue?vue&type=style&index=0&id=5b0058ba&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_5b0058ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_5b0058ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5b0058ba",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/debit/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/debit/Add.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/admin/debit/Add.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/debit/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/debit/Add.vue?vue&type=style&index=0&id=5b0058ba&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/admin/debit/Add.vue?vue&type=style&index=0&id=5b0058ba&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_5b0058ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&id=5b0058ba&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/debit/Add.vue?vue&type=style&index=0&id=5b0058ba&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_5b0058ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_5b0058ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_5b0058ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_5b0058ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_5b0058ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/debit/Add.vue?vue&type=template&id=5b0058ba&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/admin/debit/Add.vue?vue&type=template&id=5b0058ba&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_5b0058ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=5b0058ba&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/debit/Add.vue?vue&type=template&id=5b0058ba&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_5b0058ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_5b0058ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);