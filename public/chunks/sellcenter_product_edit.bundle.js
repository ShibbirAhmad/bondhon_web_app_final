(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sellcenter_product_edit"],{

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
    this.$store.dispatch("merchant");
    this.$store.dispatch("general_setting");
  },
  data: function data() {
    return {
      merchant: {},
      base_url: this.$store.state.image_base_link
    };
  },
  methods: {
    logout: function logout() {
      var _this = this;

      axios.get('/api/merchant/logout').then(function (resp) {
        console.log(resp);

        if (resp.data.status == "OK") {
          localStorage.removeItem('merchant_token');

          _this.$store.commit('merchant', null);

          _this.$router.push({
            name: 'merchant_login'
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
    getMerchant: function getMerchant() {
      return this.$store.getters.merchant;
    },
    general_setting: function general_setting() {
      return this.$store.getters.general_setting;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/product/Edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sellcenter/product/Edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navbar */ "./resources/js/components/sellcenter/Navbar.vue");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




vue__WEBPACK_IMPORTED_MODULE_0___default.a.component(vform__WEBPACK_IMPORTED_MODULE_2__["HasError"].name, vform__WEBPACK_IMPORTED_MODULE_2__["HasError"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Add",
  created: function created() {
    var _this = this;

    this.others();
    this.get_edit_product_data();
    setTimeout(function () {
      _this.loading = false;
    }, 500);
  },
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_2__["Form"]({
        name: "",
        merchant: "",
        category: "",
        sub_category: "",
        sub_sub_category: "",
        quantity: "",
        alert_quantity: 1,
        purchase_price: "",
        sale_price: "",
        discount: "",
        price: "",
        details: "",
        attribute: "",
        variant: [],
        image: [],
        files: []
      }),
      loading: true,
      error: "",
      categories: "",
      subcategories: "",
      subSubCategories: "",
      merchants: "",
      attributes: "",
      variants: null,
      editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3___default.a,
      editorConfig: {},
      isDraging: false,
      dragCount: 0,
      files: [],
      image: [],
      basePath: this.$store.state.image_base_link
    };
  },
  methods: {
    get_edit_product_data: function get_edit_product_data() {
      var _this2 = this;

      axios.get("/api/merchant/get/edit/product/" + this.$route.params.id).then(function (resp) {
        console.log(resp);

        if (resp.data.status == "OK") {
          _this2.form.name = resp.data.product.name;
          _this2.form.sale_price = resp.data.product.sale_price;
          _this2.form.price = resp.data.product.price;
          _this2.form.details = resp.data.product.details;
          _this2.form.discount = resp.data.product.discount ? resp.data.product.discount : '';
          _this2.form.quantity = resp.data.product.stock;
          _this2.form.alert_quantity = resp.data.product.alert_quantity;
          _this2.form.category = resp.data.product.category_id;
          _this2.form.sub_category = resp.data.product.sub_category_id;
          _this2.form.sub_category = resp.data.product.sub_category_id;
          _this2.form.attribute = resp.data.product.product_attribute.attribute_id;
          var image = resp.data.product.product_image;

          for (var i = 0; i < image.length; i++) {
            _this2.form.files.push(_this2.basePath + image[i].product_image);

            _this2.form.image.push(_this2.basePath + image[i].product_image);
          }

          if (resp.data.product.category_id !== null) {
            _this2.form.category = resp.data.product.category_id;

            _this2.categoryWiseSubCategory();
          }

          if (resp.data.product.sub_category_id !== null) {
            _this2.form.sub_category = resp.data.product.sub_category_id;

            _this2.subCategoryWiseSubSUbCategory();
          }

          if (resp.data.product.product_attribute.attribute_id !== null) {
            _this2.form.attribute = resp.data.product.product_attribute.attribute_id;

            _this2.attributeWiseVariants();
          }
        }
      });
    },
    editProduct: function editProduct() {
      var _this3 = this;

      window.scrollTo(0, 0);
      this.$Progress.start();
      this.form.post("/api/merchant/edit/product/" + this.$route.params.id, {
        transformRequest: [function (data, headers) {
          return objectToFormData(data);
        }],
        onUploadProgress: function onUploadProgress(e) {
          // Do whatever you want with the progress event
          console.log(e);
        }
      }).then(function (resp) {
        console.log(resp);

        _this3.$Progress.finish();

        if (resp.data.status == "SUCCESS") {
          _this3.$router.push({
            name: "merchant_product_menage"
          });

          _this3.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 4000
          });
        } else {
          _this3.error = "some thing want to wrong";
        }
      })["catch"](function (error) {
        console.log(error);
        console.log(error);

        _this3.$Progress.finish();

        _this3.error = "some thing want to wrong";
      });
    },
    others: function others() {
      var _this4 = this;

      axios.get("/api/product/others").then(function (resp) {
        // console.log(resp)
        if (resp.data.status == "SUCCESS") {
          _this4.categories = resp.data.categories;
          _this4.merchants = resp.data.merchants;
          _this4.attributes = resp.data.attributes;
        } else {
          _this4.error = "some thing want to wrong";
        }
      })["catch"](function (error) {
        // console.log(error)
        _this4.error = "some thing want to wrong";
      });
    },
    categoryWiseSubCategory: function categoryWiseSubCategory() {
      var _this5 = this;

      axios.get("/api/category/wise/subCategory/" + this.form.category).then(function (resp) {
        // console.log(resp)
        if (resp.data.status == "SUCCESS") {
          if (resp.data.subCategories.length > 0) {
            _this5.subcategories = resp.data.subCategories;
          } else {
            _this5.subcategories = "";
          }
        } else {
          console.log("error");
          _this5.subcategories = "";
        }
      })["catch"](function (error) {
        _this5.error = "some thing want wrong";
      });
    },
    subCategoryWiseSubSUbCategory: function subCategoryWiseSubSUbCategory() {
      var _this6 = this;

      axios.get("/api/subCategory/wise/subSubCategory/" + this.form.sub_category).then(function (resp) {
        // console.log(resp.data.subsubcategories);
        if (resp.data.status == "SUCCESS") {
          if (resp.data.subsubcategories.length > 0) {
            _this6.subSubCategories = resp.data.subsubcategories;
          } else {
            _this6.subSubCategories = "";
          }
        } else {
          console.log("error");
          _this6.subSubCategories = "";
        }
      })["catch"](function (error) {
        _this6.error = "some thing want wrong";
      });
    },
    attributeWiseVariants: function attributeWiseVariants() {
      var _this7 = this;

      axios.get("/api/attribute/wise/variant/" + this.form.attribute).then(function (resp) {
        // console.log(resp);
        if (resp.data.status == "SUCCESS") {
          _this7.variants = resp.data.variants; // let length = resp.data.variants.length;
          // let i = 0;
          // for (i; i < length; i++) {
          //   this.variants.push(resp.data.variants[i]);
          // }
        } else {
          console.log("error");
        }
      })["catch"](function (error) {
        // console.log(error);
        _this7.error = "some thing want wrong";
      });
    },
    DeleteProductImage: function DeleteProductImage(index) {
      var _this8 = this;

      Swal.fire({
        title: "Are you sure?",
        text: "You won't permanent delete this image??",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!"
      }).then(function (result) {
        if (result.value) {
          axios.get("/api/merchant/delete/existing/product/image/" + _this8.$route.params.id, {
            params: {
              index: index
            }
          }).then(function (resp) {
            if (resp.data.status == "SUCCESS") {
              _this8.$toasted.show(resp.data.message, {
                type: "success",
                position: "top-bottom",
                duration: 4000
              });

              _this8.form.files.splice(index, 1);

              _this8.form.image.splice(index, 1);
            }
          })["catch"](function (error) {
            console.log(error);
            _this8.error = "some thing want to wrong";
          });
        } else {
          _this8.$toasted.show("OK ! no action here", {
            position: "top-center",
            type: "info",
            duration: 3000
          });
        }
      });
    },
    salePrice: function salePrice() {
      this.form.price = this.form.sale_price;
    },
    discount: function discount() {
      var price = this.form.sale_price - this.form.discount;

      if (price < 0) {
        alert("discount can not be greater then sale_price");
        this.form.price = this.form.sale_price;
        this.form.discount = "";
      } else {
        this.form.price = price;
      }
    },
    uploadImage: function uploadImage(e) {
      var _this9 = this;

      var file = e.target.files;
      Array.from(file).forEach(function (file) {
        return _this9.addImage(file);
      });
    },
    onDragEnter: function onDragEnter(e) {
      e.preventDefault();
      this.dragCount++;
      this.isDraging = true;
    },
    onDragLeave: function onDragLeave(e) {
      e.preventDefault();
      this.dragCount--;

      if (this.dragCount <= 0) {
        this.isDraging = false;
      }
    },
    drop: function drop(e) {
      var _this10 = this;

      e.preventDefault();
      e.stopPropagation();
      this.isDraging = false;
      var files = e.dataTransfer.files; // console.log(files);

      Array.from(files).forEach(function (file) {
        return _this10.addImage(file);
      });
    },
    addImage: function addImage(file) {
      var _this11 = this;

      //  console.log(file);
      if (!file.type.match("image.*")) {
        alert("this is not any kind of image");
        return;
      }

      if (file.size / 1024 > 300) {
        Swal.fire({
          type: 'warning',
          text: 'File size can not be bigger then 300kb.Reference file size is' + file.size / 1024 + 'KB'
        });
        return;
      }

      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function (evt) {
        var img = new Image();

        img.onload = function () {
          if (img.width <= 1200 && img.height <= 1200) {
            _this11.form.image.push(file);

            _this11.form.files.push(evt.target.result);

            return;
          } else {
            _this11.disabled = true;
            alert("Image maximu size 1200*1200px.But Upload image size" + img.width + "*" + img.height + "px");
            return;
          }
        };

        img.src = evt.target.result;
      };
    },
    cancel: function cancel(index) {
      this.form.files.splice(index, 1);
      this.form.image.splice(index, 1);
    }
  },
  components: {
    navbar: _Navbar__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/product/Edit.vue?vue&type=style&index=0&id=6c3a14b7&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sellcenter/product/Edit.vue?vue&type=style&index=0&id=6c3a14b7&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.mb-2[data-v-6c3a14b7] {\r\n  margin-bottom: 5px !important;\n}\n.height[data-v-6c3a14b7] {\r\n  height: 360px !important;\n}\n.uploader[data-v-6c3a14b7] {\r\n  width: 100%;\r\n  background: #222d32;\r\n  color: #fff;\r\n  padding: 40px 15px;\r\n  text-align: center;\r\n  border-radius: 10px;\r\n  border: 3px dashed;\r\n  font-size: 20px;\r\n  position: relative;\n}\n.draging[data-v-6c3a14b7] {\r\n  background: #fff;\r\n  color: #222d32;\r\n  border: 3px dashed #222d32;\n}\n.file-input label[data-v-6c3a14b7] {\r\n  background: #222d32;\r\n  color: #fff;\n}\ni.fa.fa-cloud-upload[data-v-6c3a14b7] {\r\n  font-size: 85px;\n}\n#file[data-v-6c3a14b7] {\r\n  opacity: 0;\r\n  z-index: -1;\n}\n.file-input[data-v-6c3a14b7] {\r\n  width: 280px;\r\n  margin: auto;\r\n  position: relative;\r\n  height: 86px;\n}\n.images-preview[data-v-6c3a14b7] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin-top: 20px;\n}\n.img-wrapper[data-v-6c3a14b7] {\r\n  width: 110px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 10px;\r\n  height: 105px;\r\n  justify-content: space-between;\r\n  background: #fff;\r\n  box-shadow: 5px 5px 20px #3e3737;\r\n  margin-bottom: 32px;\n}\nimg[data-v-6c3a14b7] {\r\n  max-height: 105px;\n}\n.files[data-v-6c3a14b7] {\r\n  font-size: 12px;\r\n  background: #fff;\r\n  color: red;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: self-start;\r\n  padding: 3px 6px;\n}\n.name[data-v-6c3a14b7] {\r\n  overflow: hidden;\r\n  height: 18px;\n}\n.upload-control[data-v-6c3a14b7] {\r\n  position: absolute;\r\n  width: 100%;\r\n  background: #fff;\r\n  top: 0;\r\n  left: 0;\r\n  border-top-left-radius: 7px;\r\n  border-top-right-radius: 7px;\r\n  padding: 10px;\r\n  padding-bottom: 4px;\r\n  text-align: right;\n}\n.label[data-v-6c3a14b7] {\r\n  padding: 2px 5px;\r\n  margin-right: 10px;\r\n  border: 2px solid #222d32;\r\n  border-radius: 3px;\r\n\r\n  font-size: 15px;\r\n  cursor: pointer;\r\n  color: #222d32;\n}\n.file-input label[data-v-6c3a14b7] {\r\n  background: #fff;\r\n  color: #222d32;\r\n  padding: 10px 40px;\n}\n.cancel[data-v-6c3a14b7] {\r\n  background: #fff;\r\n\r\n  cursor: pointer;\r\n  color: red;\r\n  width: 110px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/product/Edit.vue?vue&type=style&index=0&id=6c3a14b7&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sellcenter/product/Edit.vue?vue&type=style&index=0&id=6c3a14b7&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=6c3a14b7&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/product/Edit.vue?vue&type=style&index=0&id=6c3a14b7&scoped=true&lang=css&");

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
                    attrs: { src: _vm.base_url + _vm.getMerchant.image }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "hidden-xs" }, [
                    _vm._v(_vm._s(_vm.getMerchant.name))
                  ])
                ]
              ),
              _vm._v(" "),
              _c("ul", { staticClass: "dropdown-menu" }, [
                _c("li", { staticClass: "user-header" }, [
                  _c("img", {
                    staticClass: "img-circle",
                    attrs: {
                      src: _vm.base_url + _vm.getMerchant.image,
                      alt: "User Image"
                    }
                  }),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.getMerchant.name) +
                        " - Merchant\n                "
                    ),
                    _c("small", [
                      _vm._v(
                        "Member since " + _vm._s(_vm.getMerchant.created_at)
                      )
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
                            attrs: { to: { name: "merchant_profile" } }
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
                            attrs: { to: { name: "merchant_password_edit" } }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/product/Edit.vue?vue&type=template&id=6c3a14b7&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sellcenter/product/Edit.vue?vue&type=template&id=6c3a14b7&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
                  attrs: { to: { name: "merchant_product_menage" } }
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
          _vm.loading
            ? _c(
                "h1",
                {
                  staticStyle: { "text-align": "center", "font-size": "50px" }
                },
                [_c("i", { staticClass: "fa fa-spinner fa-spin" })]
              )
            : _c(
                "form",
                {
                  attrs: { enctype: "multipart/form-data" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.editProduct($event)
                    },
                    keydown: function($event) {
                      return _vm.form.onKeydown($event)
                    }
                  }
                },
                [
                  _vm.error
                    ? _c(
                        "div",
                        {
                          staticClass: "alert alert-danger alert-dismissible",
                          attrs: { role: "alert" }
                        },
                        [
                          _vm._v(
                            "\n          " + _vm._s(_vm.error) + "\n          "
                          ),
                          _c(
                            "span",
                            {
                              staticClass: "close",
                              staticStyle: { color: "#fff" },
                              attrs: {
                                "aria-hidden": "true",
                                "data-dismiss": "alert",
                                "aria-label": "Close"
                              }
                            },
                            [_vm._v("×")]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "row justify-content-center" }, [
                    _c("div", { staticClass: "col-lg-4" }, [
                      _c("div", { staticClass: "box box-primary height" }, [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("div", { staticClass: "box-body" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _vm._m(2),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.name,
                                    expression: "form.name"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has("name")
                                },
                                attrs: {
                                  type: "text",
                                  name: "name",
                                  autofocus: "",
                                  autocomplete: "off",
                                  placeholder: "Ex:jean's pents"
                                },
                                domProps: { value: _vm.form.name },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "name",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "name" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _vm._m(3),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.category,
                                      expression: "form.category"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has(
                                      "category"
                                    )
                                  },
                                  attrs: { name: "category" },
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
                                        _vm.$set(
                                          _vm.form,
                                          "category",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      },
                                      function($event) {
                                        return _vm.categoryWiseSubCategory()
                                      }
                                    ]
                                  }
                                },
                                [
                                  _c("option", { attrs: { value: "" } }, [
                                    _vm._v("select category")
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(_vm.categories, function(category) {
                                    return _c(
                                      "option",
                                      { domProps: { value: category.id } },
                                      [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(category.name) +
                                            "\n                    "
                                        )
                                      ]
                                    )
                                  })
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "category" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _vm._m(4),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.sub_category,
                                      expression: "form.sub_category"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has(
                                      "sub_category"
                                    )
                                  },
                                  attrs: { name: "sub_category" },
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
                                        _vm.$set(
                                          _vm.form,
                                          "sub_category",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      },
                                      function($event) {
                                        return _vm.subCategoryWiseSubSUbCategory()
                                      }
                                    ]
                                  }
                                },
                                [
                                  _c("option", { attrs: { value: "" } }, [
                                    _vm._v("select sub category")
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(_vm.subcategories, function(
                                    subcategory
                                  ) {
                                    return _vm.subcategories
                                      ? _c(
                                          "option",
                                          {
                                            domProps: { value: subcategory.id }
                                          },
                                          [
                                            _vm._v(
                                              "\n                      " +
                                                _vm._s(subcategory.name) +
                                                "\n                    "
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  })
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "sub_category" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", [_vm._v("sub sub category")]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.sub_sub_category,
                                      expression: "form.sub_sub_category"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has(
                                      "sub_sub_category"
                                    )
                                  },
                                  attrs: { name: "'sub_sub_category" },
                                  on: {
                                    change: function($event) {
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
                                      _vm.$set(
                                        _vm.form,
                                        "sub_sub_category",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("option", { attrs: { value: "" } }, [
                                    _vm._v("select sub sub category")
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(_vm.subSubCategories, function(
                                    subSubCategory
                                  ) {
                                    return _vm.subSubCategories
                                      ? _c(
                                          "option",
                                          {
                                            domProps: {
                                              value: subSubCategory.id
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                      " +
                                                _vm._s(subSubCategory.name) +
                                                "\n                    "
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  })
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: {
                                  form: _vm.form,
                                  field: "sub_sub_category"
                                }
                              })
                            ],
                            1
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-4" }, [
                      _c("div", { staticClass: "box box-success height" }, [
                        _vm._m(5),
                        _vm._v(" "),
                        _c("div", { staticClass: "box-body" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _vm._m(6),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.quantity,
                                    expression: "form.quantity"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has("quantity")
                                },
                                attrs: {
                                  type: "text",
                                  name: "quantity",
                                  readonly: "",
                                  autocomplete: "off",
                                  placeholder: "product quantity"
                                },
                                domProps: { value: _vm.form.quantity },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "quantity",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "quantity" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _vm._m(7),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.sale_price,
                                    expression: "form.sale_price"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "sale_price"
                                  )
                                },
                                attrs: {
                                  type: "text",
                                  name: "sale_price",
                                  autocomplete: "off",
                                  placeholder: "sale_price"
                                },
                                domProps: { value: _vm.form.sale_price },
                                on: {
                                  keyup: function($event) {
                                    return _vm.salePrice()
                                  },
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "sale_price",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "sale_price" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", [_vm._v("Discount (BDT)")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.discount,
                                    expression: "form.discount"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has("discount")
                                },
                                attrs: {
                                  type: "text",
                                  name: "discount",
                                  autocomplete: "off",
                                  placeholder: "discount"
                                },
                                domProps: { value: _vm.form.discount },
                                on: {
                                  keyup: function($event) {
                                    return _vm.discount()
                                  },
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "discount",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "discount" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", [_vm._v("price")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.price,
                                    expression: "form.price"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has("price")
                                },
                                attrs: {
                                  type: "text",
                                  name: "price",
                                  autocomplete: "off",
                                  placeholder: "price",
                                  readonly: ""
                                },
                                domProps: { value: _vm.form.price },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "price",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "price" }
                              })
                            ],
                            1
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-4" }, [
                      _c("div", { staticClass: "box box-primary height" }, [
                        _vm._m(8),
                        _vm._v(" "),
                        _c("div", { staticClass: "box-body" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _vm._m(9),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.attribute,
                                    expression: "form.attribute"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { name: "attribute" },
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
                                      _vm.$set(
                                        _vm.form,
                                        "attribute",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    },
                                    function($event) {
                                      return _vm.attributeWiseVariants()
                                    }
                                  ]
                                }
                              },
                              [
                                _c(
                                  "option",
                                  { attrs: { value: "", disabled: "" } },
                                  [_vm._v("select attribute")]
                                ),
                                _vm._v(" "),
                                _vm._l(_vm.attributes, function(attribute) {
                                  return _c(
                                    "option",
                                    { domProps: { value: attribute.id } },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(attribute.name) +
                                          "\n                    "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _vm._m(10),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.variant,
                                    expression: "form.variant"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { name: "variant[]", multiple: "" },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.form,
                                      "variant",
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
                                  { attrs: { value: "", disabled: "" } },
                                  [_vm._v("select variant")]
                                ),
                                _vm._v(" "),
                                _vm._l(_vm.variants, function(variant) {
                                  return _vm.variants
                                    ? _c(
                                        "option",
                                        { domProps: { value: variant.id } },
                                        [
                                          _vm._v(
                                            "\n                      " +
                                              _vm._s(variant.name) +
                                              "\n                    "
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                })
                              ],
                              2
                            )
                          ]),
                          _vm._v(" "),
                          _c("br")
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-6" }, [
                      _c("div", { staticClass: "box box-primary" }, [
                        _vm._m(11),
                        _vm._v(" "),
                        _c("div", { staticClass: "box-body" }, [
                          _c(
                            "div",
                            {
                              staticClass: "uploader",
                              class: { draging: _vm.isDraging },
                              on: {
                                dragenter: _vm.onDragEnter,
                                dragleave: _vm.onDragLeave,
                                dragover: function($event) {
                                  $event.preventDefault()
                                },
                                drop: _vm.drop
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.form.files.length,
                                      expression: "form.files.length"
                                    }
                                  ],
                                  staticClass: "upload-control"
                                },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "label",
                                      attrs: { for: "file" }
                                    },
                                    [_vm._v("Select a file")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: !_vm.form.files.length,
                                      expression: "!form.files.length"
                                    }
                                  ]
                                },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-cloud-upload"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [_vm._v("Drag your file here")]),
                                  _vm._v(" "),
                                  _c("div", [_vm._v("or")]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "file-input" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "label",
                                        attrs: { for: "file" }
                                      },
                                      [_vm._v("select a file")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      attrs: {
                                        type: "file",
                                        name: "image",
                                        id: "file",
                                        multiple: ""
                                      },
                                      on: { change: _vm.uploadImage }
                                    })
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.form.files.length,
                                      expression: "form.files.length"
                                    }
                                  ],
                                  staticClass: "images-preview"
                                },
                                _vm._l(_vm.form.files, function(image, index) {
                                  return _c(
                                    "div",
                                    { key: index, staticClass: "img-wrapper" },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src: image,
                                          alt: "Image Uplaoder " + index
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "cancel",
                                          on: {
                                            click: function($event) {
                                              return _vm.cancel(index)
                                            }
                                          }
                                        },
                                        [
                                          _c("span", [_vm._v("X")]),
                                          _vm._v(" "),
                                          _c("span", [
                                            _c("i", {
                                              staticClass: "fa fa-trash",
                                              on: {
                                                click: function($event) {
                                                  return _vm.DeleteProductImage(
                                                    index
                                                  )
                                                }
                                              }
                                            })
                                          ])
                                        ]
                                      )
                                    ]
                                  )
                                }),
                                0
                              ),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "image" }
                              })
                            ],
                            1
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-6" }, [
                      _c("div", { staticClass: "box box-primary" }, [
                        _vm._m(12),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "box-body" },
                          [
                            _c("ckeditor", {
                              class: {
                                "is-invalid": _vm.form.errors.has("details")
                              },
                              attrs: {
                                editor: _vm.editor,
                                name: "details",
                                config: _vm.editorConfig
                              },
                              model: {
                                value: _vm.form.details,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "details", $$v)
                                },
                                expression: "form.details"
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "details" }
                            })
                          ],
                          1
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(13)
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
    return _c("ol", { staticClass: "breadcrumb" }, [
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("i", { staticClass: "fa fa-dashboard" }),
          _vm._v(" merchant ")
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "active" }, [_vm._v("add product")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border text-center" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Basic Information")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                    Name\n                    "),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                    Category\n                    "),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                    sub category\n\n                    "),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Price & Quantity")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                    Qty\n                    "),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                    sale_price\n                    "),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Attribute & variant")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                    attribute\n                    "),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                    variant\n                    "),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [
        _vm._v("\n                  Image Gallery\n                  "),
        _c("small", [
          _c("b", [
            _c("i", [
              _vm._v("(Every image can not be bigger than 1200*1200 px)")
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [
        _vm._v("\n                  Product Details\n                  "),
        _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group text-center" }, [
      _c("button", { staticClass: "btn btn-primary" }, [_vm._v("Submit")])
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

/***/ "./resources/js/components/sellcenter/product/Edit.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/sellcenter/product/Edit.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_6c3a14b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=6c3a14b7&scoped=true& */ "./resources/js/components/sellcenter/product/Edit.vue?vue&type=template&id=6c3a14b7&scoped=true&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/sellcenter/product/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Edit_vue_vue_type_style_index_0_id_6c3a14b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=0&id=6c3a14b7&scoped=true&lang=css& */ "./resources/js/components/sellcenter/product/Edit.vue?vue&type=style&index=0&id=6c3a14b7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_6c3a14b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_6c3a14b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6c3a14b7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sellcenter/product/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sellcenter/product/Edit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/sellcenter/product/Edit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/product/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sellcenter/product/Edit.vue?vue&type=style&index=0&id=6c3a14b7&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/sellcenter/product/Edit.vue?vue&type=style&index=0&id=6c3a14b7&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_6c3a14b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=6c3a14b7&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/product/Edit.vue?vue&type=style&index=0&id=6c3a14b7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_6c3a14b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_6c3a14b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_6c3a14b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_6c3a14b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_6c3a14b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/sellcenter/product/Edit.vue?vue&type=template&id=6c3a14b7&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/sellcenter/product/Edit.vue?vue&type=template&id=6c3a14b7&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_6c3a14b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=6c3a14b7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sellcenter/product/Edit.vue?vue&type=template&id=6c3a14b7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_6c3a14b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_6c3a14b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);