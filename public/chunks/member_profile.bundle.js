(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["member_profile"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/member/Profile.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/member/Profile.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mounted: function mounted() {
    this.getMemberInformation();
    this.getAggreement();
  },
  data: function data() {
    return {
      loading: true,
      admin: "",
      basePath: this.$store.getters.image_base_link,
      aggreement_details: ""
    };
  },
  methods: {
    getAggreement: function getAggreement() {
      var _this = this;

      axios.get("/api/get/aggreement/info").then(function (resp) {
        _this.aggreement_details = resp.data.setting.policy;
      });
    },
    getMemberInformation: function getMemberInformation() {
      var _this2 = this;

      axios.get("/api/member/profile/info").then(function (resp) {
        console.log(resp);
        _this2.admin = resp.data.member;
        _this2.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/member/Profile.vue?vue&type=style&index=0&id=1ccefd24&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/member/Profile.vue?vue&type=style&index=0&id=1ccefd24&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.nid_image[data-v-1ccefd24] {\r\n      height: 150px;\r\n      width: 300px;\n}\n.download_icon[data-v-1ccefd24]{\r\n   cursor: pointer;\r\n    font-size: 29px;\r\n    position: absolute;\r\n    margin: 4px -30px;\r\n    color: green;\n}\n.aggreement_container[data-v-1ccefd24] {\r\n   height: 400px;\r\n   overflow-y: scroll;\n}\np[data-v-1ccefd24] {\r\n    font-size: 16px;\r\n    line-height: 17px;\n}\n.profile_img[data-v-1ccefd24] {\r\n  width: 150px;\r\n  height: 150px;\r\n  border-radius: 50%;\r\n  border: 3px solid #161745;\r\n  padding: 3px;\r\n  line-height: 0;\n}\n.aggreement_image[data-v-1ccefd24]{\r\n    width:90%;\r\n    height: 320px;\r\n    border:1px solid #161745 ;\n}\n.aggreement_info[data-v-1ccefd24]{\r\n    overflow-y: scroll;\n}\n.custom_row[data-v-1ccefd24] {\r\n  margin-left: -30px !important;\r\n  margin-right: 0px !important;\n}\n.m_l[data-v-1ccefd24] {\r\n    margin-left: 30px;\n}\n@media screen  and(max-width:450px){\n.custom_row[data-v-1ccefd24] {\r\n      margin-left: -9px!important;\r\n      margin-right: -22px !important;\n}\n.nid_image[data-v-1ccefd24] {\r\n      height: 150px;\r\n      width: 250px;\n}\n.aggreement_container[data-v-1ccefd24] {\r\n     overflow-y: scroll;\n}\n}\n.box[data-v-1ccefd24]{\r\n  min-height: 400px;\n}\n@media screen and (max-width:450px) {\n.row[data-v-1ccefd24] {\r\n    margin-right: -30px !important;\r\n    margin-left: -30px !important;\n}\n.col-xs-12[data-v-1ccefd24] {\r\n    width: 100% !important;\n}\n.table_container[data-v-1ccefd24] {\r\n    overflow-x:scroll;\n}\n.item_displayer[data-v-1ccefd24]{\r\n    margin-left:10px;\n}\n}\np[data-v-1ccefd24] {padding:10px}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/member/Profile.vue?vue&type=style&index=0&id=1ccefd24&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/member/Profile.vue?vue&type=style&index=0&id=1ccefd24&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=style&index=0&id=1ccefd24&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/member/Profile.vue?vue&type=style&index=0&id=1ccefd24&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/member/Profile.vue?vue&type=template&id=1ccefd24&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/member/member/Profile.vue?vue&type=template&id=1ccefd24&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      _c("member-main"),
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
                  attrs: { to: { name: "member_dashboard" } }
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
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row custom_row" }, [
              _c("div", { staticClass: "col-md-6 col-sm-12 col-xs-12" }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "col-md-4 col-sm-12 col-xs-12 text-center"
                        },
                        [
                          _c("img", {
                            staticClass: "profile_img",
                            attrs: {
                              src: _vm.admin.image
                                ? _vm.basePath + _vm.admin.image
                                : _vm.basePath +
                                  "images/static/user2-160x160.jpg",
                              alt: _vm.admin.name
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-8 col-sm-12 col-xs-12" },
                        [
                          _c("ul", [
                            _c("li", [
                              _c("p", [
                                _vm._v("\n                          Name : "),
                                _c("span", { staticClass: "m_l" }, [
                                  _vm._v(" " + _vm._s(_vm.admin.name) + " ")
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("p", [
                                _vm._v("\n                          Email : "),
                                _c("span", { staticClass: "m_l" }, [
                                  _vm._v(" " + _vm._s(_vm.admin.email) + " ")
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("p", [
                                _vm._v("\n                          Phone : "),
                                _c("span", { staticClass: "m_l" }, [
                                  _vm._v(" " + _vm._s(_vm.admin.phone) + " ")
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("p", [
                                _vm._v(
                                  "Present Address :  " +
                                    _vm._s(_vm.admin.present_address)
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("p", [
                                _vm._v(
                                  "\n                          Permanent Address :  " +
                                    _vm._s(_vm.admin.permanent_address) +
                                    "\n                        "
                                )
                              ])
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12 text-center" }, [
                        _c("img", {
                          staticClass: "nid_image",
                          attrs: {
                            src: _vm.basePath + _vm.admin.nid,
                            alt: "image"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            attrs: {
                              href: _vm.basePath + _vm.admin.nid,
                              download: ""
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-download download_icon"
                            })
                          ]
                        )
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6 col-sm-12 col-xs-12" }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "col-md-4 col-sm-12 col-xs-12 text-center"
                        },
                        [
                          _c("img", {
                            staticClass: "profile_img",
                            attrs: {
                              src: _vm.admin.nominee_image
                                ? _vm.basePath + _vm.admin.nominee_image
                                : _vm.basePath +
                                  "images/static/user2-160x160.jpg",
                              alt: _vm.admin.nominee_name
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-8 col-sm-12 col-xs-12" },
                        [
                          _c("ul", [
                            _c("li", [
                              _c("p", [
                                _vm._v("\n                          Name : "),
                                _c("span", { staticClass: "m_l" }, [
                                  _vm._v(" " + _vm._s(_vm.admin.name) + " ")
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("p", [
                                _vm._v("\n                          Email : "),
                                _c("span", { staticClass: "m_l" }, [
                                  _vm._v(" " + _vm._s(_vm.admin.email) + " ")
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("p", [
                                _vm._v("\n                          Phone : "),
                                _c("span", { staticClass: "m_l" }, [
                                  _vm._v(" " + _vm._s(_vm.admin.phone) + " ")
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("p", [
                                _vm._v(
                                  "Present Address :  " +
                                    _vm._s(_vm.admin.nominee_present_address)
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("p", [
                                _vm._v(
                                  "\n                          Permanent Address : " +
                                    _vm._s(
                                      _vm.admin.nominee_permanent_address
                                    ) +
                                    "\n                        "
                                )
                              ])
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12 text-center" }, [
                        _c("img", {
                          staticClass: "nid_image",
                          attrs: {
                            src: _vm.basePath + _vm.admin.nominee_nid,
                            alt: "image"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            attrs: {
                              href: _vm.basePath + _vm.admin.nominee_nid,
                              download: ""
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-download download_icon"
                            })
                          ]
                        )
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row custom_row" }, [
              _c("div", { staticClass: "col-md-6 col-sm-12 col-xs-12" }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "col-md-4 col-sm-12 col-xs-12 text-center"
                        },
                        [
                          _c("img", {
                            staticClass: "profile_img",
                            attrs: {
                              src: _vm.admin.father_image
                                ? _vm.basePath + _vm.admin.father_image
                                : _vm.basePath +
                                  "images/static/user2-160x160.jpg",
                              alt: _vm.admin.father_name
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-8 col-sm-12 col-xs-12" },
                        [
                          _c("ul", [
                            _c("li", [
                              _c("p", [
                                _vm._v("\n                          Name : "),
                                _c("span", { staticClass: "m_l" }, [
                                  _vm._v(
                                    " " + _vm._s(_vm.admin.father_name) + " "
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("p", [
                                _vm._v("\n                          Phone : "),
                                _c("span", { staticClass: "m_l" }, [
                                  _vm._v(
                                    " " + _vm._s(_vm.admin.father_phone) + " "
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("p", [
                                _vm._v(
                                  "Present Address :  " +
                                    _vm._s(_vm.admin.parent_present_address)
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("p", [
                                _vm._v(
                                  "\n                          Permanent Address :  " +
                                    _vm._s(_vm.admin.parent_permanent_address) +
                                    "\n                        "
                                )
                              ])
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12 text-center" }, [
                        _c("img", {
                          staticClass: "nid_image",
                          attrs: {
                            src: _vm.basePath + _vm.admin.father_nid,
                            alt: "image"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            attrs: {
                              href: _vm.basePath + _vm.admin.father_nid,
                              download: ""
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-download download_icon"
                            })
                          ]
                        )
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6 col-sm-12 col-xs-12" }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _vm._m(4),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "col-md-4 col-sm-12 col-xs-12 text-center"
                        },
                        [
                          _c("img", {
                            staticClass: "profile_img",
                            attrs: {
                              src: _vm.admin.mother_image
                                ? _vm.basePath + _vm.admin.mother_image
                                : _vm.basePath +
                                  "images/static/user2-160x160.jpg",
                              alt: _vm.admin.mother_name
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-8 col-sm-12 col-xs-12" },
                        [
                          _c("ul", [
                            _c("li", [
                              _c("p", [
                                _vm._v("\n                          Name : "),
                                _c("span", { staticClass: "m_l" }, [
                                  _vm._v(
                                    " " + _vm._s(_vm.admin.mother_name) + " "
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("p", [
                                _vm._v("\n                          Phone : "),
                                _c("span", { staticClass: "m_l" }, [
                                  _vm._v(
                                    " " + _vm._s(_vm.admin.mother_phone) + " "
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("p", [
                                _vm._v("NID: "),
                                _c("span", { staticClass: "m_l" }, [
                                  _vm._v(
                                    " " + _vm._s(_vm.admin.mother_nid) + " "
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("p", [
                                _vm._v(
                                  "Present Address :  " +
                                    _vm._s(_vm.admin.parent_present_address)
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("p", [
                                _vm._v(
                                  "\n                          Permanent Address :  " +
                                    _vm._s(_vm.admin.parent_permanent_address) +
                                    "\n                        "
                                )
                              ])
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12 text-center" }, [
                        _c("img", {
                          staticClass: "nid_image",
                          attrs: {
                            src: _vm.basePath + _vm.admin.mother_nid,
                            alt: "image"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            attrs: {
                              href: _vm.basePath + _vm.admin.mother_nid,
                              download: ""
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-download download_icon"
                            })
                          ]
                        )
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row custom_row" }, [
              _c("div", { staticClass: "col-md-12 col-sm-12 col-xs-12" }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _vm._m(5),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-6 col-sm-12 col-xs-12" },
                        [
                          _c(
                            "div",
                            { staticClass: "form-group aggreement_container" },
                            [
                              _c("p", {
                                domProps: {
                                  innerHTML: _vm._s(_vm.aggreement_details)
                                }
                              })
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-6 col-sm-12 col-xs-12" },
                        [
                          _c("img", {
                            staticClass: "aggreement_image",
                            staticStyle: { "margin-left": "10px" },
                            attrs: {
                              src: _vm.admin.aggreement_image
                                ? _vm.basePath + _vm.admin.aggreement_image
                                : _vm.basePath +
                                  "images/static/user2-160x160.jpg",
                              alt: "aggreement"
                            }
                          })
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
          _vm._v("member")
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "active" }, [_vm._v("profile")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border text-center" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Personal Information")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border text-center" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Nominee Information")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border text-center" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Father Information")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border text-center" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Mother Information")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border text-center" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Aggreement Information")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/member/member/Profile.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/member/member/Profile.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_1ccefd24_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=1ccefd24&scoped=true& */ "./resources/js/components/member/member/Profile.vue?vue&type=template&id=1ccefd24&scoped=true&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/components/member/member/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Profile_vue_vue_type_style_index_0_id_1ccefd24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile.vue?vue&type=style&index=0&id=1ccefd24&scoped=true&lang=css& */ "./resources/js/components/member/member/Profile.vue?vue&type=style&index=0&id=1ccefd24&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_1ccefd24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_1ccefd24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1ccefd24",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/member/member/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/member/member/Profile.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/member/member/Profile.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/member/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/member/member/Profile.vue?vue&type=style&index=0&id=1ccefd24&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/member/member/Profile.vue?vue&type=style&index=0&id=1ccefd24&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_1ccefd24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=style&index=0&id=1ccefd24&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/member/Profile.vue?vue&type=style&index=0&id=1ccefd24&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_1ccefd24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_1ccefd24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_1ccefd24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_1ccefd24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_1ccefd24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/member/member/Profile.vue?vue&type=template&id=1ccefd24&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/member/member/Profile.vue?vue&type=template&id=1ccefd24&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_1ccefd24_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=1ccefd24&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/member/member/Profile.vue?vue&type=template&id=1ccefd24&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_1ccefd24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_1ccefd24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);