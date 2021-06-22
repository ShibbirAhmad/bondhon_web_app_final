(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project_edit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/project/Edit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/project/Edit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  created: function created() {
    this.adminList();
    this.getProjectInfo();
  },
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_1__["Form"]({
        name: "",
        place: "",
        project_type: "select project type",
        proposed_budget: "",
        total_cost: "",
        emabaded_url: "",
        manager_name: "",
        nid: "",
        present_address: "",
        permanent_address: "",
        description: "write project description",
        comments: "write comments about this project",
        manager_image: "",
        aggreement_details: "write details here ...",
        agreement_image: "",
        father_name: "",
        mother_name: "",
        father_phone: "",
        mother_phone: "",
        father_nid: "",
        mother_nid: "",
        parent_present_address: "",
        parent_permanent_address: "",
        image: [],
        files: []
      }),
      manager_select: "select project manager",
      loading: true,
      error: "",
      editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default.a,
      editorConfig: {},
      isDraging: false,
      dragCount: 0,
      files: [],
      image: [],
      admins: {},
      basePath: this.$store.state.image_base_link
    };
  },
  methods: {
    getProjectInfo: function getProjectInfo() {
      var _this = this;

      axios.get('/api/get/project/' + this.$route.params.id).then(function (resp) {
        console.log(resp);
        _this.form.name = resp.data.project.name;
        _this.form.place = resp.data.project.place;
        _this.form.project_type = resp.data.project.project_type;
        _this.form.proposed_budget = resp.data.project.proposed_budget;
        _this.form.total_cost = resp.data.project.total_cost;
        _this.form.emabaded_url = resp.data.project.emabaded_url ? resp.data.project.emabaded_url : '';
        _this.form.manager_name = resp.data.project.manager_name;
        _this.form.present_address = resp.data.project.present_address;
        _this.form.permanent_address = resp.data.project.permanent_address;
        _this.form.comments = resp.data.project.comments;
        _this.form.aggreement_details = resp.data.project.aggreement_details;
        _this.form.description = resp.data.project.description;
        _this.form.manager_image = resp.data.project.manager_image;
        _this.form.agreement_image = resp.data.project.agreement_image;
        _this.form.father_name = resp.data.project.father_name;
        _this.form.nid = resp.data.project.nid;
        _this.form.mother_name = resp.data.project.mother_name;
        _this.form.father_nid = resp.data.project.father_nid;
        _this.form.mother_nid = resp.data.project.mother_nid;
        _this.form.father_phone = resp.data.project.father_phone;
        _this.form.mother_phone = resp.data.project.mother_phone;
        _this.form.parent_present_address = resp.data.project.parent_present_address;
        _this.form.parent_permanent_address = resp.data.project.parent_permanent_address;
        var image = resp.data.project.project_image;

        for (var i = 0; i < image.length; i++) {
          _this.form.files.push(_this.basePath + image[i].image);

          _this.form.image.push(_this.basePath + image[i].image);
        }
      });
    },
    updateProject: function updateProject() {
      var _this2 = this;

      window.scrollTo(0, 0);
      this.$Progress.start();
      this.form.post("/api/bondhon/project/update/" + this.$route.params.id, {
        transformRequest: [function (data, headers) {
          return objectToFormData(data);
        }],
        onUploadProgress: function onUploadProgress(e) {
          // Do whatever you want with the progress event
          console.log(e);
        }
      }).then(function (resp) {
        console.log(resp);

        _this2.$Progress.finish();

        if (resp.data.status == "SUCCESS") {
          _this2.$router.push({
            name: "project"
          });

          _this2.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 4000
          });
        } else {
          _this2.error = "some thing want to wrong";
        }
      });
    },
    adminList: function adminList() {
      var _this3 = this;

      axios.get("/api/list/admin").then(function (resp) {
        console.log(resp);

        if (resp.data.status == "SUCCESS") {
          _this3.admins = resp.data.admins;
          _this3.loading = false;
        }
      });
    },
    displayMemeberInfo: function displayMemeberInfo(member) {
      //   console.log(member);
      this.form.manager_name = member.name;
      this.form.present_address = member.present_address;
      this.form.permanent_address = member.permanent_address;
      this.form.father_name = member.father_name;
      this.form.mother_name = member.mother_name;
      this.form.nid = member.nid;
      this.form.father_nid = member.father_nid;
      this.form.mother_nid = member.mother_nid;
      this.form.father_phone = member.father_phone;
      this.form.mother_phone = member.mother_phone;
      this.form.parent_present_address = member.present_address;
      this.form.parent_permanent_address = member.permanent_address;
    },
    DeleteProjectImage: function DeleteProjectImage(index) {
      var _this4 = this;

      Swal.fire({
        title: "Are you sure?",
        text: "You won't permanent delete this image??",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!"
      }).then(function (result) {
        console.log(index);

        if (result.value) {
          axios.get("/api/delete/project/image/" + _this4.$route.params.id, {
            params: {
              index: index
            }
          }).then(function (resp) {
            if (resp.data.status == "SUCCESS") {
              _this4.$toasted.show(resp.data.message, {
                type: "success",
                position: "top-bottom",
                duration: 4000
              });

              _this4.form.image.splice(index, 1);
            }
          });
        } else {
          _this4.$toasted.show("OK ! no action here", {
            position: "top-center",
            type: "info",
            duration: 3000
          });
        }
      });
    },
    uploadManagerProfile: function uploadManagerProfile(e) {
      var file = e.target.files[0];
      this.form.manager_image = file; ///let image file size check

      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function (evt) {
        var img = new Image();

        img.onload = function () {
          console.log(img.width + "-" + img.height);
        };

        img.src = evt.target.result;
        document.getElementById('manager_profile').src = evt.target.result;
      };
    },
    uploadAggreement: function uploadAggreement(e) {
      this.form.agreement_image = e.target.files[0];
    },
    uploadImage: function uploadImage(e) {
      var _this5 = this;

      var file = e.target.files;
      Array.from(file).forEach(function (file) {
        return _this5.addImage(file);
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
      var _this6 = this;

      e.preventDefault();
      e.stopPropagation();
      this.isDraging = false;
      var files = e.dataTransfer.files; // console.log(files);

      Array.from(files).forEach(function (file) {
        return _this6.addImage(file);
      });
    },
    addImage: function addImage(file) {
      var _this7 = this;

      console.log(file.size / 1024);

      if (!file.type.match("image.*")) {
        Swal.fire({
          type: "warning",
          text: "this is not any kind of image"
        });
        return;
      }

      if (file.size / 1024 > 1024) {
        Swal.fire({
          type: "warning",
          text: "File size can not be bigger then 1MB.Reference Max file size is " + file.size / 1024 + "KB"
        });
        return;
      }

      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function (evt) {
        var img = new Image();

        img.onload = function () {
          if (img.width <= 1200 && img.height <= 1200) {
            _this7.form.image.push(file);

            _this7.form.files.push(evt.target.result);

            return;
          } else {
            _this7.disabled = true;
            alert("Image maximu size 1200px*1200px.But Upload imaze size" + img.width + "*" + img.height + "px");
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
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/project/Edit.vue?vue&type=style&index=0&id=56df38aa&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/project/Edit.vue?vue&type=style&index=0&id=56df38aa&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline.ck-blurred[data-v-56df38aa] {\r\n  height: 80px !important;\n}\n.mb-2[data-v-56df38aa] {\r\n  margin-bottom: 5px !important;\n}\n.height[data-v-56df38aa] {\r\n  height: 360px !important;\n}\n.uploader[data-v-56df38aa] {\r\n  width: 100%;\r\n  background: #222d32;\r\n  color: #fff;\r\n  padding: 40px 15px;\r\n  text-align: center;\r\n  border-radius: 10px;\r\n  border: 3px dashed;\r\n  font-size: 20px;\r\n  position: relative;\n}\n.draging[data-v-56df38aa] {\r\n  background: #fff;\r\n  color: #222d32;\r\n  border: 3px dashed #222d32;\n}\n.file-input label[data-v-56df38aa] {\r\n  background: #222d32;\r\n  color: #fff;\n}\ni.fa.fa-cloud-upload[data-v-56df38aa] {\r\n  font-size: 85px;\n}\n#file[data-v-56df38aa] {\r\n  opacity: 0;\r\n  z-index: -1;\n}\n.file-input[data-v-56df38aa] {\r\n  width: 280px;\r\n  margin: auto;\r\n  position: relative;\r\n  height: 86px;\n}\n.images-preview[data-v-56df38aa] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin-top: 20px;\n}\n.img-wrapper[data-v-56df38aa] {\r\n  width: 110px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 10px;\r\n  height: 105px;\r\n  justify-content: space-between;\r\n  background: #fff;\r\n  box-shadow: 5px 5px 20px #3e3737;\r\n  margin-bottom: 32px;\n}\nimg[data-v-56df38aa] {\r\n  max-height: 105px;\n}\n.files[data-v-56df38aa] {\r\n  font-size: 12px;\r\n  background: #fff;\r\n  color: red;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: self-start;\r\n  padding: 3px 6px;\n}\n.name[data-v-56df38aa] {\r\n  overflow: hidden;\r\n  height: 18px;\n}\n.upload-control[data-v-56df38aa] {\r\n  position: absolute;\r\n  width: 100%;\r\n  background: #fff;\r\n  top: 0;\r\n  left: 0;\r\n  border-top-left-radius: 7px;\r\n  border-top-right-radius: 7px;\r\n  padding: 10px;\r\n  padding-bottom: 4px;\r\n  text-align: right;\n}\n.label[data-v-56df38aa] {\r\n  padding: 2px 5px;\r\n  margin-right: 10px;\r\n  border: 2px solid #222d32;\r\n  border-radius: 3px;\r\n\r\n  font-size: 15px;\r\n  cursor: pointer;\r\n  color: #222d32;\n}\n.file-input label[data-v-56df38aa] {\r\n  background: #fff;\r\n  color: #222d32;\r\n  padding: 10px 40px;\n}\n.cancel[data-v-56df38aa] {\r\n  background: #fff;\r\n\r\n  cursor: pointer;\r\n  color: red;\r\n  width: 110px;\n}\n.member_profile[data-v-56df38aa]{\r\n   width:80px;\r\n   height: 80px;\r\n   border-radius: 50%;\r\n   border:1px solid #ddd;\n}\n.btn_download[data-v-56df38aa]{\r\n  margin-top: 25px;\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/project/Edit.vue?vue&type=style&index=0&id=56df38aa&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/project/Edit.vue?vue&type=style&index=0&id=56df38aa&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=56df38aa&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/project/Edit.vue?vue&type=style&index=0&id=56df38aa&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/project/Edit.vue?vue&type=template&id=56df38aa&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/project/Edit.vue?vue&type=template&id=56df38aa&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
                  attrs: { to: { name: "project" } }
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
                      return _vm.updateProject($event)
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
                            "\n           " +
                              _vm._s(_vm.error) +
                              "\n           "
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
                    _c("div", { staticClass: "col-lg-6" }, [
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
                                  placeholder: "Ex:agro firm",
                                  required: ""
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
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-6" }, [
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
                                          value: _vm.form.project_type,
                                          expression: "form.project_type"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "project_type"
                                        )
                                      },
                                      attrs: {
                                        required: "",
                                        name: "project_type"
                                      },
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
                                            "project_type",
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
                                        {
                                          attrs: {
                                            value: "select project type"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                           select project type\n                         "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        {
                                          attrs: {
                                            value: "implemented project"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                           Implemented Project\n                         "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { value: "planned project" } },
                                        [
                                          _vm._v(
                                            "\n                           Planned Project\n                         "
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "project_type"
                                    }
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
                                  _vm._m(4),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.place,
                                        expression: "form.place"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has("place")
                                    },
                                    attrs: {
                                      type: "text",
                                      name: "place",
                                      required: "",
                                      placeholder: "Ex:Dhaka"
                                    },
                                    domProps: { value: _vm.form.place },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "place",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: { form: _vm.form, field: "place" }
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
                                  _vm._m(5),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.proposed_budget,
                                        expression: "form.proposed_budget"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "proposed_budget"
                                      )
                                    },
                                    attrs: {
                                      type: "number",
                                      name: "proposed_budget",
                                      required: "",
                                      placeholder: "000000"
                                    },
                                    domProps: {
                                      value: _vm.form.proposed_budget
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "proposed_budget",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "proposed_budget"
                                    }
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
                                  _vm._m(6),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.total_cost,
                                        expression: "form.total_cost"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "total_cost"
                                      )
                                    },
                                    attrs: {
                                      type: "number",
                                      name: "total_cost",
                                      disabled: "",
                                      placeholder: "00000"
                                    },
                                    domProps: { value: _vm.form.total_cost },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "total_cost",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "total_cost"
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
                              _c("label", [_vm._v(" video url ")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.emabaded_url,
                                    expression: "form.emabaded_url"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "emabaded_url"
                                  )
                                },
                                attrs: {
                                  type: "text",
                                  name: "emabaded_url",
                                  placeholder:
                                    "Ex: embaded url of youtube video"
                                },
                                domProps: { value: _vm.form.emabaded_url },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "emabaded_url",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "emabaded_url" }
                              })
                            ],
                            1
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-6" }, [
                      _c("div", { staticClass: "box box-primary height" }, [
                        _vm._m(7),
                        _vm._v(" "),
                        _c("div", { staticClass: "box-body" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _vm._m(8),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.manager_select,
                                    expression: "manager_select"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { required: "" },
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
                                      _vm.manager_select = $event.target
                                        .multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    },
                                    function($event) {
                                      return _vm.displayMemeberInfo(
                                        _vm.manager_select
                                      )
                                    }
                                  ]
                                }
                              },
                              [
                                _c(
                                  "option",
                                  {
                                    attrs: {
                                      value: "select project manager",
                                      disabled: ""
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                       select project manager\n                     "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "new" } }, [
                                  _vm._v("New Person")
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.admins.data, function(admin, index) {
                                  return _c(
                                    "option",
                                    { key: index, domProps: { value: admin } },
                                    [
                                      _vm._v(
                                        "\n                       " +
                                          _vm._s(admin.name) +
                                          "\n                     "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _vm._m(9),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.manager_name,
                                        expression: "form.manager_name"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "manager_name"
                                      )
                                    },
                                    attrs: {
                                      type: "text",
                                      name: "manager_name",
                                      autofocus: "",
                                      placeholder: "Ex:agro firm",
                                      required: ""
                                    },
                                    domProps: { value: _vm.form.manager_name },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "manager_name",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "manager_name"
                                    }
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
                                  _vm._m(10),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.nid,
                                        expression: "form.nid"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has("nid")
                                    },
                                    attrs: {
                                      type: "number",
                                      name: "nid",
                                      autofocus: "",
                                      require: "",
                                      placeholder: "15xxxxxxxxx"
                                    },
                                    domProps: { value: _vm.form.nid },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "nid",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: { form: _vm.form, field: "nid" }
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
                                  _vm._m(11),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.permanent_address,
                                        expression: "form.permanent_address"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "present_address"
                                      )
                                    },
                                    attrs: {
                                      type: "text",
                                      name: "present_address",
                                      autofocus: "",
                                      required: "",
                                      placeholder: "present_address"
                                    },
                                    domProps: {
                                      value: _vm.form.permanent_address
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "permanent_address",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "present_address"
                                    }
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
                                  _vm._m(12),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.present_address,
                                        expression: "form.present_address"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "permanent_address"
                                      )
                                    },
                                    attrs: {
                                      type: "text",
                                      name: "permanent_address",
                                      autofocus: "",
                                      required: "",
                                      placeholder: "permanent_address"
                                    },
                                    domProps: {
                                      value: _vm.form.present_address
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "present_address",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "permanent_address"
                                    }
                                  })
                                ],
                                1
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _vm._m(13),
                                _vm._v(" "),
                                _c("input", {
                                  staticClass: "form-control",
                                  attrs: { type: "file" },
                                  on: { change: _vm.uploadManagerProfile }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c(
                                "div",
                                { staticClass: "form-group text-center" },
                                [
                                  _c("img", {
                                    staticClass: "member_profile",
                                    attrs: {
                                      id: "manager_profile",
                                      src: _vm.basePath + _vm.form.manager_image
                                    }
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
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-6" }, [
                      _c("div", { staticClass: "box box-primary" }, [
                        _vm._m(14),
                        _vm._v(" "),
                        _c("div", { staticClass: "box-body" }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _vm._m(15),
                                _vm._v(" "),
                                _c("input", {
                                  staticClass: "form-control",
                                  attrs: { type: "file" },
                                  on: { change: _vm.uploadAggreement }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6 text-center" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "btn btn_download btn-success ",
                                    attrs: {
                                      href:
                                        _vm.basePath + _vm.form.agreement_image,
                                      download: ""
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-lg fa-download"
                                    })
                                  ]
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", [_vm._v("aggreement details ")]),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.aggreement_details,
                                    expression: "form.aggreement_details"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "aggreement_details"
                                  )
                                },
                                attrs: {
                                  name: "aggreement_details",
                                  rows: "4"
                                },
                                domProps: {
                                  value: _vm.form.aggreement_details
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "aggreement_details",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: {
                                  form: _vm.form,
                                  field: "aggreement_details"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Comments")]),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.comments,
                                  expression: "form.comments"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { name: "comments", rows: "2" },
                              domProps: { value: _vm.form.comments },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "comments",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-6" }, [
                      _c("div", { staticClass: "box box-primary" }, [
                        _vm._m(16),
                        _vm._v(" "),
                        _c("div", { staticClass: "box-body" }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _vm._m(17),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.father_name,
                                        expression: "form.father_name"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "father_name"
                                      )
                                    },
                                    attrs: {
                                      type: "text",
                                      name: "father_name",
                                      autofocus: "",
                                      placeholder: "father_name"
                                    },
                                    domProps: { value: _vm.form.father_name },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "father_name",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "father_name"
                                    }
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
                                  _vm._m(18),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.father_nid,
                                        expression: "form.father_nid"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "father_nid"
                                      )
                                    },
                                    attrs: {
                                      type: "number",
                                      name: "father_nid",
                                      autofocus: "",
                                      require: "",
                                      placeholder: "11xxxxxxxxx"
                                    },
                                    domProps: { value: _vm.form.father_nid },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "father_nid",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "father_nid"
                                    }
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
                                  _vm._m(19),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.mother_name,
                                        expression: "form.mother_name"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "mother_name"
                                      )
                                    },
                                    attrs: {
                                      type: "text",
                                      name: "mother_name",
                                      autofocus: "",
                                      placeholder: "mother_name"
                                    },
                                    domProps: { value: _vm.form.mother_name },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "mother_name",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "mother_name"
                                    }
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
                                  _vm._m(20),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.mother_nid,
                                        expression: "form.mother_nid"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "mother_nid"
                                      )
                                    },
                                    attrs: {
                                      type: "number",
                                      name: "mother_nid",
                                      autofocus: "",
                                      require: "",
                                      placeholder: "15xxxxxxxxx"
                                    },
                                    domProps: { value: _vm.form.mother_nid },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "mother_nid",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "mother_nid"
                                    }
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
                                  _vm._m(21),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.father_phone,
                                        expression: "form.father_phone"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "father_phone"
                                      )
                                    },
                                    attrs: {
                                      type: "number",
                                      name: "father_phone",
                                      autofocus: "",
                                      required: "",
                                      maxlength: "11",
                                      placeholder: "01xxxxxxxxx"
                                    },
                                    domProps: { value: _vm.form.father_phone },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "father_phone",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "father_phone"
                                    }
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
                                  _vm._m(22),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.mother_phone,
                                        expression: "form.mother_phone"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "mother_phone"
                                      )
                                    },
                                    attrs: {
                                      type: "number",
                                      name: "mother_phone",
                                      autofocus: "",
                                      required: "",
                                      maxlength: "11",
                                      placeholder: "01xxxxxxxxx"
                                    },
                                    domProps: { value: _vm.form.mother_phone },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "mother_phone",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "mother_phone"
                                    }
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
                                  _vm._m(23),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.parent_present_address,
                                        expression:
                                          "form.parent_present_address"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "parent_present_address"
                                      )
                                    },
                                    attrs: {
                                      type: "text",
                                      name: "parent_present_address",
                                      autofocus: "",
                                      required: "",
                                      placeholder: "parent_present_address"
                                    },
                                    domProps: {
                                      value: _vm.form.parent_present_address
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "parent_present_address",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "parent_present_address"
                                    }
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
                                  _vm._m(24),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          _vm.form.parent_permanent_address,
                                        expression:
                                          "form.parent_permanent_address"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "parent_permanent_address"
                                      )
                                    },
                                    attrs: {
                                      type: "text",
                                      name: "parent_permanent_address",
                                      autofocus: "",
                                      required: "",
                                      placeholder: "parent_permanent_address"
                                    },
                                    domProps: {
                                      value: _vm.form.parent_permanent_address
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "parent_permanent_address",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "parent_permanent_address"
                                    }
                                  })
                                ],
                                1
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-6" }, [
                      _c("div", { staticClass: "box box-primary" }, [
                        _vm._m(25),
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
                                                  return _vm.DeleteProjectImage(
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
                        _vm._m(26),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "box-body" },
                          [
                            _c("ckeditor", {
                              class: {
                                "is-invalid": _vm.form.errors.has("description")
                              },
                              attrs: {
                                editor: _vm.editor,
                                name: "description",
                                config: _vm.editorConfig
                              },
                              model: {
                                value: _vm.form.description,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "description", $$v)
                                },
                                expression: "form.description"
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "description" }
                            })
                          ],
                          1
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(27)
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
          _vm._v("Dashboard ")
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "active" }, [_vm._v("add project")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Basic Information")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                     Project Name\n                     "),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(
        "\n                         Project Type\n                         "
      ),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(
        "\n                         Project Place\n                         "
      ),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(
        "\n                         proposed budget\n                         "
      ),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(" Total Cost   "),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border text-center" }, [
      _c("h3", { staticClass: "box-title" }, [
        _vm._v("Project Manager Information")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                     Select\n                     "),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                         Name\n                         "),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("NID/Birth Registration NO"),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                         Present Address "),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                         Permanent Address "),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Manager photo  "),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border text-center" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Aggreement Details")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("aggreement photo  "),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border text-center" }, [
      _c("h3", { staticClass: "box-title" }, [
        _vm._v("Manager Family Information")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Father/Husband Name "),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Father/Husband NID"),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Mother/Wife Name "),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Mother/Wife NID NO"),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Father/Husband Phone"),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Mother/Wife Phone"),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                         Present Address "),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n                         Permanent Address "),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [
        _vm._v("\n                   Image Gallery\n                   "),
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
        _vm._v("\n                   Project Description\n                   "),
        _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group text-center" }, [
      _c("button", { staticClass: "btn btn-primary" }, [_vm._v("Save")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/project/Edit.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/admin/project/Edit.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_56df38aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=56df38aa&scoped=true& */ "./resources/js/components/admin/project/Edit.vue?vue&type=template&id=56df38aa&scoped=true&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/project/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Edit_vue_vue_type_style_index_0_id_56df38aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=0&id=56df38aa&scoped=true&lang=css& */ "./resources/js/components/admin/project/Edit.vue?vue&type=style&index=0&id=56df38aa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_56df38aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_56df38aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "56df38aa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/project/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/project/Edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/admin/project/Edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/project/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/project/Edit.vue?vue&type=style&index=0&id=56df38aa&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/admin/project/Edit.vue?vue&type=style&index=0&id=56df38aa&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_56df38aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=56df38aa&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/project/Edit.vue?vue&type=style&index=0&id=56df38aa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_56df38aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_56df38aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_56df38aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_56df38aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_56df38aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/project/Edit.vue?vue&type=template&id=56df38aa&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/admin/project/Edit.vue?vue&type=template&id=56df38aa&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_56df38aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=56df38aa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/project/Edit.vue?vue&type=template&id=56df38aa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_56df38aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_56df38aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);