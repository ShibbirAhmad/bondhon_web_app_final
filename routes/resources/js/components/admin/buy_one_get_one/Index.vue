<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <ol class="breadcrumb">
          <li>
            <a href="#"> <i class="fa fa-dashboard"></i>Dashboard </a>
          </li>
          <li class="active">campaign</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-11 col-lg-offset-2">
            <div class="box box_container box-primary">
              <div class="box-header text-center with-border">
                <h3 class="box-title">Buy For Get-One Offer</h3>
              </div>
              <div class="box-body">
                <div class="alert-danger alert" v-if="error">{{ error }}</div>
                <br/>
                <form
                  @submit.prevent="updateCampaign"
                  @keydown="form.onKeydown($event)"
                  enctype="multipart/form-data"
                >
                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-1"></div>
                      <div class="col-md-2 text-center">
                       <h4> <label for="product_code"> Product_Code </label> </h4> 
                      </div>
                      <div class="col-md-9 code_input">
                        <input
                          type="text"
                          v-model="form.product_code"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('product_code'),
                          }"
                          name="product_code"
                        />
                        <has-error :form="form" field="product_code">
                        </has-error>
                      </div>
                     
                    </div>
                  </div>
                  <div class="form-group text-center">
                    <label for="banner">Upload Banner </label>
                    <img
                      @click="clickImage"
                      id="campaignBackground"
                      :src="banner"
                    />
                    <input
                      id="uploadLogo"
                      class="form-control"
                      type="file"
                      @change="uploadbanner"
                      name="banner"
                    />
                  </div>
                  <div class="form-group text-center">
                    <button
                      :disabled="form.busy"
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
        banner: "",
        product_code: "",
      }),
      error: "",
      loading: true,
      base_url: this.$store.state.image_base_link,
      banner: this.$store.state.image_base_link + "images/no_image.jpg",
    };
  },

  methods: {
    getBuyOne() {
      axios.get("/api/get/buy/one/get/one/offer")
      .then((resp) => {
        console.log(resp);
        if (resp.data.status == "OK") {
          this.form.id = resp.data.campaign.id;
          this.form.product_code = resp.data.campaign.product_code;
          this.form.banner = resp.data.campaign.banner;
          this.loading = false;
          if (this.form.banner) {
            this.banner =this.base_url+this.form.banner;
          }
        }
      });
    },

    updateCampaign() {
      this.form
        .post("/api/edit/buy/one/get/one/offer/"+this.form.id, {
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

    uploadbanner(e) {
      const file = e.target.files[0];
      if (!file.type.match("image.*")) {
        Swal.fire({
          type: "warning",
          text: "this is not any kind of image",
        });
        return;
      }
      //let image file size check
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (evt) => {
        let img = new Image();
        img.onload = () => {
          console.log(img.width, img.height);
          this.setbanner(file, evt);
        };
        img.src = evt.target.result;
      };
    },

    setbanner(file, evt) {
      this.disabled = false;
      this.form.banner = file;
      this.banner = evt.target.result;
    },

    clickImage() {
      let logo_file = document.getElementById("uploadLogo");
      logo_file.click();
    },
  },
};
</script>

<style scoped>
.box_container {
  margin-left: -14%;
  margin-top: 2%;
}
.code_input {
  width: 73%;
}

#uploadLogo {
  display: none;
}

#campaignBackground {
  border: 1px solid #ddd;
  padding: 5px;
  cursor: pointer;
  margin-left: 25px;
  width: 95%;
  height: 300px;
}
</style>