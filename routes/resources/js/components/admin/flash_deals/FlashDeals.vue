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
          <div class="col-lg-7 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header text-center with-border">
                <h3 class="box-title">Set Flash Deals</h3>
              </div>
              <div class="box-body">
                <div class="alert-danger alert" v-if="error">{{ error }}</div>

                <form
                  @submit.prevent="updateFlashDeals"
                  @keydown="form.onKeydown($event)"
                  enctype="multipart/form-data"
                >
                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-6">
                        <label for="qoute">Discount Stand Out</label>
                        <input
                          type="text"
                          v-model="form.discount_stand_out"
                          placeholder=""
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('discount_stand_out'),
                          }"
                          name="discount_stand_out"
                        />
                      </div>

                      <div class="col-md-6">
                        <label for="expired_date">Short expired_date </label>
                 
                        <date-picker autocomplete="off" :class="{'is-invaid' : form.errors.has('expired_date')}"  v-model="form.expired_date" :config="options" > </date-picker>
                        <has-error :form="form" field="expired_date"></has-error>
                    
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-6 text-center"> <h4 class="banner_label">  <label  for="banner">Upload Flash Deals Banner </label></h4> 
                        <p> Banner size shuld be 250px*450px </p>
                       </div>
                      <div class="col-md-6">
                        <img
                          @click="clickImage"
                          id="FlashBanner"
                          :src="banner"
                        />
                        <input
                          id="uploadLogo"
                          class="form-control"
                          type="file"
                          @change="upload_banner"
                          name="banner"
                        />
                      </div>
                    </div>
                  
                  </div>
                  <div class="form-group text-center">
                    <button
                      :disabled="form.busy"
                      type="submit"
                      class="btn btn-primary"
                    >
                      <i class="fa fa-spin fa-spinner" v-if="form.busy"></i
                      >Update
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
import datePicker from 'vue-bootstrap-datetimepicker';
Vue.component(HasError.name, HasError);
export default {
  name: "subCategory",
  created() {
    this.getFlashDeals();
  },
  data() {
    return {
      form: new Form({
        id: "",
        expired_date: "",
        discount_stand_out: "",
        banner: "",
      }),
      options:{
          format:"YYYY-MM-DD",
          useCurrent: false ,
      },
      error: "",
      loading: true,
      banner_width:250,
      banner_height:450,
      base_url: this.$store.state.image_base_link,
      banner: this.$store.state.image_base_link + "images/no_image.jpg",
    };
  },

  methods: {
    getFlashDeals() {
      axios.get("/api/get/flash/deals").then((resp) => {
        console.log(resp);
        if (resp.data.status == "OK") {
          this.form.id = resp.data.campaign.id;
          this.form.expired_date = resp.data.campaign.expired_date;
          this.form.discount_stand_out = resp.data.campaign.discount_stand_out;
          this.form.banner = resp.data.campaign.banner;
          this.loading = false;
          if (this.form.banner) {
            this.banner = this.base_url + this.form.banner;
          }
        }
      });
    },

    updateFlashDeals() {
      this.form
        .post("/api/edit/flash/deals/" + this.form.id, {
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
            this.getFlashDeals();
          } else {
            this.error = "some thing want to wrong";
          }
        });
    },

    upload_banner(e) {
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
          if (this.banner_width!=img.width && this.banner_height!=img.height) {
            Swal.fire(
              {
              text:`${'banner width shuld be '+this.banner_width+'px and height: '+this.banner_height}px`,
              type:'error',
               })
          }else{
              this.setbanner(file, evt);
          }
        
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
#uploadLogo {
  display: none;
}

.banner_label{
  margin-top:40%;
  margin-left:10%;
}

#FlashBanner {
  border: 1px solid #ddd;
  padding: 5px;
  cursor: pointer;
  margin-left:50px;
  width: 200px;
  height: 300px;
}
</style>