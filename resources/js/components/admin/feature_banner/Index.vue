<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <ol class="breadcrumb">
          <li>
            <a href="#"> <i class="fa fa-dashboard"></i>Dashboard </a>
          </li>
          <li class="active">banner</li>
        </ol>
      </section>
      <section class="content">
        <div class="row">
          <div class="col-lg-11 col-md-11 ">
            <div class="box box_container box-primary">
              <div class="box-header text-center with-border">
                <h3 class="box-title"> Feature  Banner </h3>
              </div>
              <div class="box-body">
                <div class="alert-danger alert" v-if="error">{{ error }}</div>
                <br/>
                <form
                  @submit.prevent="updatebanner"
                  @keydown="form.onKeydown($event)"
                  enctype="multipart/form-data"
                >
                <div class="row">
                  <div class="col-md-12">

                       <select v-model="form.status" class="form-control" >
                         <option value="1">Active</option>
                         <option value="2">De-Active</option>
                       </select>

                  </div>
                </div>
                  <div class="row">

                    <div class="col-md-4">
                      <div class="form-group">
                       <h4> <label for="url_1"> First Banner Link  </label> </h4>
                        <input
                          type="text"
                          v-model="form.url_1"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('url_1'),
                          }"
                          name="url_1"
                        />
                        <has-error :form="form" field="url_1">
                        </has-error>

                     </div>
                  <div class="form-group text-center">
                    <label for="banner">Upload Banner <span> width*height(900px*315px) </span> </label>
                    <img
                      @click="clickImage_1"
                      id="bannerBackground"
                      :src="preview_image_1?preview_image_1:base_url+form.banner_1"
                    />
                    <input
                      id="uploadLogo_1"
                      class="form-control"
                      type="file"
                      @change="uploadImage_1"
                      name="banner_1"
                    />
                  </div>
                       </div>

                   <div class="col-md-4">
                      <div class="form-group">
                       <h4> <label for="url_2"> Second Banner Link  </label> </h4>
                        <input
                          type="text"
                          v-model="form.url_2"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('url_2'),
                          }"
                          name="url_2"
                        />
                        <has-error :form="form" field="url_2">
                        </has-error>

                     </div>
                  <div class="form-group text-center">
                    <label for="banner">Upload Banner <span> width*height(900px*315px) </span> </label>
                    <img
                      @click="clickImage_2"
                      id="bannerBackground"
                      :src="preview_image_2?preview_image_2:base_url+form.banner_2"
                    />
                    <input
                      id="uploadLogo_2"
                      class="form-control"
                      type="file"
                      @change="uploadImage_2"
                      name="banner_2"
                    />
                  </div>
                       </div>

                       
                   <div class="col-md-4">
                      <div class="form-group">
                       <h4> <label for="url_3"> Third Banner Link  </label> </h4>
                        <input
                          type="text"
                          v-model="form.url_2"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('url_3'),
                          }"
                          name="url_3"
                        />
                        <has-error :form="form" field="url_3">
                        </has-error>

                     </div>
                  <div class="form-group text-center">
                    <label for="banner">Upload Banner <span> width*height(900px*315px) </span> </label>
                    <img
                      @click="clickImage_3"
                      id="bannerBackground"
                      :src="preview_image_3?preview_image_3:base_url+form.banner_3"
                    />
                    <input
                      id="uploadLogo_3"
                      class="form-control"
                      type="file"
                      @change="uploadImage_3"
                      name="banner_3"
                    />
                  </div>
                       </div>


                  </div>

                  <div class="form-group text-center">
                    <button
                      :disabled="form.busy || disabled"
                      type="submit"
                      class="btn btn-primary"
                    >
                      <i class="fa fa-spin fa-spinner" v-if="form.busy"></i
                      >Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import { Form, HasError, AlertError } from "vform";
Vue.component(HasError.name, HasError);
export default {
  name: "subCategory",
  created() {
    this.getBuyOne();
  },
  data() {
    return {
      form: new Form({
        id: "",
        banner_1: "",
        banner_2: "",
        banner_3: "",
        url_1: "",
        url_2: "",
        url_3: "",
        status:"",
      }),
      disabled: false,
      image_width:900,
      image_height:315,
      imagae_size:1024,
      error: "",
      loading: true,
      base_url: this.$store.state.image_base_link,
      preview_image_1: "",
      preview_image_2: "",
      preview_image_3: "",
    };
  },

  methods: {
    getBuyOne() {
      axios.get("/api/get/feature/banner")
      .then((resp) => {
        console.log(resp);
        if (resp.data.status == "OK") {
          this.form.id = resp.data.banner.id;
          this.form.url_1 = resp.data.banner.url_1;
          this.form.url_2 = resp.data.banner.url_2;
          this.form.url_3 = resp.data.banner.url_3;
          this.form.banner_1 = resp.data.banner.banner_1;
          this.form.banner_2 = resp.data.banner.banner_2;
          this.form.banner_3 = resp.data.banner.banner_3;
          this.form.status = resp.data.banner.status;
          this.loading = false;

        }
      });
    },

    updatebanner() {
      this.form
        .post("/api/edit/banner/"+this.form.id, {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
            this.getBuyOne();
          } else {
            this.error = "some thing want to wrong";
          }
        });
    },


  uploadImage_1(e) {
      const file = e.target.files[0];
     if (!file.type.match("image.*")) {
         Swal.fire({
          type:'warning',
          text:'this is not any kind of image',
        });
        return;
      }
       if(file.size/1024>this.imagae_size){
        Swal.fire({
          type:'warning',
          text:`File size can not be bigger then ${this.imagae_size}KB.Reference file size is'+file.size/1024 +'KB`,
        });
        return;
      }
 ///let image file size check
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (evt) => {
        let img = new Image();
        img.onload = () => {
          console.log(img.width, img.height);
          if (
            img.width != this.image_width &&
            img.height != this.image_height
          ) {
            this.disabled = true;
            Swal.fire({
              type:'error',
              text:  "Image size need  " + this.image_width +"*" + this.image_height +  "px. But Upload imaze size " + img.width+ "*" +
                img.height +
                "px"
            })
          } else {
            this.setImage_1(file, evt);
            return;
          }
        };
        img.src = evt.target.result;
      };
    },

   setImage_1(file, evt) {
      console.log(file);
      this.disabled = false;
      this.preview_image_1 = evt.target.result;
      this.form.banner_1 = file;
    },

    clickImage_1() {
      let logo_file = document.getElementById("uploadLogo_1");
      logo_file.click();
    },



  uploadImage_2(e) {
      const file = e.target.files[0];
     if (!file.type.match("image.*")) {
         Swal.fire({
          type:'warning',
          text:'this is not any kind of image',
        });
        return;
      }
       if(file.size/1024>this.imagae_size){
        Swal.fire({
          type:'warning',
          text:`File size can not be bigger then ${this.imagae_size}KB.Reference file size is'+file.size/1024 +'KB`,
        });
        return;
      }
 ///let image file size check
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (evt) => {
        let img = new Image();
        img.onload = () => {
          console.log(img.width, img.height);
          if (
            img.width != this.image_width &&
            img.height != this.image_height
          ) {
            this.disabled = true;
            Swal.fire({
              type:'error',
              text:  "Image size need  " + this.image_width +"*" + this.image_height +  "px. But Upload imaze size " + img.width+ "*" +
                img.height +
                "px"
            })
          } else {
            this.setImage_2(file, evt);
            return;
          }
        };
        img.src = evt.target.result;
      };
    },

   setImage_2(file, evt) {
      console.log(file);
      this.disabled = false;
      this.preview_image_2 = evt.target.result;
      this.form.banner_2 = file;
    },

    clickImage_2() {
      let logo_file = document.getElementById("uploadLogo_2");
      logo_file.click();
    },


  
  uploadImage_3(e) {
      const file = e.target.files[0];
     if (!file.type.match("image.*")) {
         Swal.fire({
          type:'warning',
          text:'this is not any kind of image',
        });
        return;
      }
       if(file.size/1024>this.imagae_size){
        Swal.fire({
          type:'warning',
          text:`File size can not be bigger then ${this.imagae_size}KB.Reference file size is'+file.size/1024 +'KB`,
        });
        return;
      }
 ///let image file size check
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (evt) => {
        let img = new Image();
        img.onload = () => {
          console.log(img.width, img.height);
          if (
            img.width != this.image_width &&
            img.height != this.image_height
          ) {
            this.disabled = true;
            Swal.fire({
              type:'error',
              text:  "Image size need  " + this.image_width +"*" + this.image_height +  "px. But Upload imaze size " + img.width+ "*" +
                img.height +
                "px"
            })
          } else {
            this.setImage_3(file, evt);
            return;
          }
        };
        img.src = evt.target.result;
      };
    },

   setImage_3(file, evt) {
      console.log(file);
      this.disabled = false;
      this.preview_image_3 = evt.target.result;
      this.form.banner_3 = file;
    },

    clickImage_3() {
      let logo_file = document.getElementById("uploadLogo_3");
      logo_file.click();
    },

   

  },
};
</script>

<style scoped>
.box_container {
  margin-left: 2%;
  margin-top: 2%;
}
.code_input {
  width:70%;
}

#uploadLogo_1 {
  display: none;
}

#uploadLogo_2 {
  display: none;
}

#uploadLogo_3 {
  display: none;
}


#bannerBackground {
  border: 1px solid #ddd;
  padding: 5px;
  cursor: pointer;
  margin-left: 25px;
  width: 300px;
  height:200px;
}
</style>