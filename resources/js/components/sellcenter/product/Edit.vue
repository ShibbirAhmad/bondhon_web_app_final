<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link
            :to="{ name: 'sell_center_product_manage' }"
            class="btn btn-primary"
          >
            <i class="fa fa-arrow-left"></i>
          </router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"> <i class="fa fa-dashboard"></i> sell center </a>
          </li>
          <li class="active">add product</li>
        </ol>
      </section>
      <section class="content">
        <form
          @submit.prevent="editProduct"
          @keydown="form.onKeydown($event)"
          enctype="multipart/form-data"
        >
          <div
            class="alert alert-danger alert-dismissible"
            v-if="error"
            role="alert"
          >
            {{ error }}
            <span
              aria-hidden="true"
              class="close"
              data-dismiss="alert"
              style="color: #fff"
              aria-label="Close"
              >&times;</span
            >
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-5 col-md-5 col-xs-12">
              <div class="box box-primary height">
                <div class="box-header with-border">
                  <h3 class="box-title">Product Name & Price</h3>
                </div>
                <div class="box-body">
                  <div class="form-group">
                    <label>
                      Name
                      <b class="text-danger">*</b>
                    </label>
                    <input
                      v-model="form.name"
                      type="text"
                      name="name"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('name') }"
                      autofocus
                      autocomplete="off"
                      placeholder="Ex:jean's pents"
                    />
                    <has-error :form="form" field="name"></has-error>
                  </div>

                  <div class="form-group">
                    <label>
                      price
                      <b class="text-danger">*</b>
                    </label>
                    <input
                      v-model="form.price"
                      type="text"
                      name="price"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('price') }"
                      autocomplete="off"
                      placeholder="price"
                      @keyup="salePrice()"
                    />
                    <has-error :form="form" field="price"></has-error>
                  </div>
                  <div class="form-group">
                    <label>Discount (BDT)</label>
                    <input
                      v-model="form.discount"
                      type="text"
                      name="discount"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('discount') }"
                      autocomplete="off"
                      placeholder="discount"
                      @keyup="discount()"
                    />
                    <has-error :form="form" field="discount"></has-error>
                  </div>
                  <div class="form-group">
                    <label>sale price</label>
                    <input
                      v-model="form.sale_price"
                      type="text"
                      name="sale_price"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('sale_price') }"
                      readonly
                    />
                    <has-error :form="form" field="sale_price"></has-error>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-7 col-md-7 col-xs-12">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">Product Details</h3>
                </div>
                <div style="margin-top: 30px" class="box-body">
                  <ckeditor
                    :editor="editor"
                    name="details"
                    :class="{ 'is-invalid': form.errors.has('details') }"
                    v-model="form.details"
                    :config="editorConfig"
                  ></ckeditor>
                  <has-error :form="form" field="details"></has-error>
                </div>
                <br />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 col-xs-12 col-md-12">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">
                    Image Gallery
                    <small>
                      <b>
                        <i>(Every image can not be bigger than 1200*1200 px)</i>
                      </b>
                    </small>
                  </h3>
                </div>
                <div class="box-body">
                  <div
                    class="uploader"
                    @dragenter="onDragEnter"
                    @dragleave="onDragLeave"
                    @dragover.prevent
                    @drop="drop"
                    :class="{ draging: isDraging }"
                  >
                    <div class="upload-control" v-show="form.files.length">
                      <label for="file" class="label">Select a file</label>
                    </div>
                    <div v-show="!form.files.length">
                      <i class="fa fa-cloud-upload"></i>
                      <p>Drag your file here</p>
                      <div>or</div>
                      <div class="file-input">
                        <label for="file" class="label">select a file</label>
                        <input
                          type="file"
                          name="image"
                          id="file"
                          @change="uploadImage"
                          multiple
                        />
                      </div>
                    </div>
                    <div class="images-preview" v-show="form.files.length">
                      <div
                        class="img-wrapper"
                        v-for="(image, index) in form.files"
                        :key="index"
                      >
                        <img :src="image" :alt="`Image Uplaoder ${index}`" />
                        <div class="cancel" @click="cancel(index)">
                          <span>X</span>
                          <span>
                            <i
                              class="fa fa-trash"
                              @click="DeleteProductImage"
                            ></i>
                          </span>
                        </div>
                      </div>
                    </div>

                    <has-error :form="form" field="image"></has-error>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="form-group text-center">
            <button class="btn btn-primary">Submit</button>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import navbar from "../Navbar";
import { Form, HasError, AlertError } from "vform";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
Vue.component(HasError.name, HasError);
export default {
  name: "Add",
  created() {
    this.get_edit_product_data();
  },
  data() {
    return {
      form: new Form({
        name: "",
        sale_price: "",
        discount: "",
        price: "",
        details: "",
        image: [],
        files: [],
      }),
      basePath: this.$store.state.image_base_link ,
      error: "",
      editor: ClassicEditor,
      editorConfig: {},
      isDraging: false,
      dragCount: 0,
      files: [],
      image: [],
    };
  },

  methods: {
    get_edit_product_data() {
      axios
        .get("/api/sellcenter/get/edit/product/" + this.$route.params.id)
        .then((resp) => {
          if (resp.data.status == "OK") {
            this.form.name = resp.data.product.name;
            this.form.sale_price = resp.data.product.sale_price;
            this.form.price = resp.data.product.price;
            this.form.details = resp.data.product.details;
            this.form.discount = resp.data.product.discount;

            this.form.files.push(this.basePath + resp.data.product.image);
            this.form.image.push(this.basePath + resp.data.product.image);
          }
        });
    },
    editProduct() {
      window.scrollTo(0, 0);
      this.$Progress.start();

      this.form
        .post("/api/sellcenter/edit/product/" + this.$route.params.id, {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          this.$Progress.finish();
          if (resp.data.status == "SUCCESS") {
            this.$router.push({ name: "sell_center_product_manage" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
          } else {
            this.error = "some thing want to wrong";
          }
        })
        .catch((error) => {
          this.$Progress.finish();
          this.error = "some thing want to wrong";
        });
    },
    DeleteProductImage() {
      Swal.fire({
        title: "Are you sure?",
        text: "You wan't permanent delete this image??",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.value) {
          axios.get("/api/sellcenter/delete/existing/product/image/"+this.$route.params.id)
            .then((resp) => {
              if (resp.data.status == "SUCCESS") {
                this.$toasted.show(resp.data.message, {
                  type: "success",
                  position: "top-bottom",
                  duration: 4000,
                });
                this.form.files.splice(0, 1);
                this.form.image.splice(0, 1);
              }
            })

        } else {
          this.$toasted.show("OK ! no action here", {
            position: "top-center",
            type: "info",
            duration: 3000,
          });
        }
      });
    },

    salePrice() {
      this.form.sale_price = this.form.price;
    },
    discount() {
      let price = this.form.price - this.form.discount;
      if (price < 0) {
        alert("discount can not be greater then sale_price");
        this.form.price = this.form.price;
        this.form.discount = "";
      } else {
        this.form.sale_price = price;
      }
    },
    uploadImage(e) {
      const file = e.target.files;

      Array.from(file).forEach((file) => this.addImage(file));
    },
    onDragEnter(e) {
      e.preventDefault();
      this.dragCount++;
      this.isDraging = true;
    },
    onDragLeave(e) {
      e.preventDefault();
      this.dragCount--;
      if (this.dragCount <= 0) {
        this.isDraging = false;
      }
    },
    drop(e) {
      e.preventDefault();
      e.stopPropagation();
      this.isDraging = false;
      const files = e.dataTransfer;
      Array.from(files).forEach((file) => this.addImage(file));
    },
    addImage(file) {
      //  console.log(file);
      if (!file.type.match("image.*")) {
        alert("this is not any kind of image");
        return;
      }
      if (file.size / 1024 > 300) {
        Swal.fire({
          type: "warning",
          text:
            "File size can not be bigger then 300kb.Reference file size is" +
            file.size / 1024 +
            "KB",
        });
        return;
      }

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (evt) => {
        let img = new Image();
        img.onload = () => {
          if (img.width <= 1200 && img.height <= 1200) {
            this.form.image.push(file);
            this.form.files.push(evt.target.result);
            return;
          } else {
            this.disabled = true;
            alert(
              "Image maximu size 1200*1200px.But Upload image size" +
                img.width +
                "*" +
                img.height +
                "px"
            );
            return;
          }
        };
        img.src = evt.target.result;
      };
    },
    cancel(index) {
      this.form.files.splice(index, 1);
      this.form.image.splice(index, 1);
    },
  },

  components: {
    navbar,
  },
};
</script>

<style scoped>
.mb-2 {
  margin-bottom: 5px !important;
}

.height {
  height: 360px !important;
}

.uploader {
  width: 100%;
  background: #222d32;
  color: #fff;
  padding: 40px 15px;
  text-align: center;
  border-radius: 10px;
  border: 3px dashed;
  font-size: 20px;
  position: relative;
}

.draging {
  background: #fff;
  color: #222d32;
  border: 3px dashed #222d32;
}

.file-input label {
  background: #222d32;
  color: #fff;
}

i.fa.fa-cloud-upload {
  font-size: 85px;
}

#file {
  opacity: 0;
  z-index: -1;
}

.file-input {
  width: 280px;
  margin: auto;
  position: relative;
  height: 86px;
}

.images-preview {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

.img-wrapper {
  width: 110px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  height: 105px;
  justify-content: space-between;
  background: #fff;
  box-shadow: 5px 5px 20px #3e3737;
  margin-bottom: 32px;
}

img {
  max-height: 105px;
}

.files {
  font-size: 12px;
  background: #fff;
  color: red;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  padding: 3px 6px;
}

.name {
  overflow: hidden;
  height: 18px;
}

.upload-control {
  position: absolute;
  width: 100%;
  background: #fff;
  top: 0;
  left: 0;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  padding: 10px;
  padding-bottom: 4px;
  text-align: right;
}

.label {
  padding: 2px 5px;
  margin-right: 10px;
  border: 2px solid #222d32;
  border-radius: 3px;

  font-size: 15px;
  cursor: pointer;
  color: #222d32;
}

.file-input label {
  background: #fff;
  color: #222d32;
  padding: 10px 40px;
}
.cancel {
  background: #fff;

  cursor: pointer;
  color: red;
  width: 110px;
}
</style>
