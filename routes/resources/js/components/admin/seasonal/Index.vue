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
          <div class="col-lg-8 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header text-center with-border">
                <h3 class="box-title">Set Seasional Campaign</h3>
              </div>
              <div class="box-body">
                <div class="alert-danger alert" v-if="error">{{ error }}</div>

                <form
                  @submit.prevent="updateSeasionalCampaign"
                  @keydown="form.onKeydown($event)"
                  enctype="multipart/form-data"
                >

                   <div class="form-group">
                    <label for="invoice">Short Qoute </label>
                    <input
                      type="text"
                      v-model="form.quote"
                      placeholder=""
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('quote') }"
                      name="quote"
                    />
                    <has-error :form="form" field="quote"></has-error>
                  </div>

                  <div class="form-group">
                    <label for="invoice">Short Heading </label>
                    <input
                      type="text"
                      v-model="form.heading"
                      placeholder=""
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('heading') }"
                      name="heading"
                    />
                    <has-error :form="form" field="heading"></has-error>
                  </div>

               
                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-6">
                        <label for="product_code"> Product_Code Top </label>
                        <input
                          type="text"
                          v-model="form.product_code_one"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('product_code_one'),
                          }"
                          name="product_code_one"
                        />
                        <has-error :form="form" field="product_code_one"> </has-error>
                      </div>
                      <div class="col-md-6">
                        <label for="product_two"> Product_Code Bottom </label>
                        <input
                          type="text"
                          v-model="form.product_code_two"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('product_code_two'),
                          }"
                          name="product_code_two"
                        />
                         <has-error :form="form" field="product_code_two"> </has-error>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="campaign_background">Upload campaign_background</label>
                    <img
                      @click="clickImage"
                      id="campaignBackground"
                      :src="preview_campaign_background"
                    />
                    <input
                      id="uploadLogo"
                      class="form-control"
                      type="file"
                      @change="uploadcampaign_background"
                      name="campaign_background"
                    />
                  </div>
                  <div class="form-group text-center">
                    <button
                    :disabled="form.busy"
                    type="submit"
                    class="btn btn-primary "
                  >
                    <i class="fa fa-spin fa-spinner" v-if="form.busy"></i>Submit
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
    this.getSeasionalCampaign();
  },
  data() {
    return {
      form: new Form({
        id: "",
        heading: "",
        quote: "",
        product_code_one: "",
        product_code_two: "",
        campaign_background: "",
      }),
      error: "",
      loading: true,
      base_url:this.$store.state.image_base_link,
      preview_campaign_background:this.$store.state.image_base_link+"images/no_image.jpg",

    };
  },

  methods: {
    getSeasionalCampaign() {
      axios.get("/api/get/seasional/campaign")
      .then((resp) => {
        console.log(resp);
        if (resp.data.status == "OK") {
          this.form.id = resp.data.campaign.id;
          this.form.heading = resp.data.campaign.heading;
          this.form.quote = resp.data.campaign.quote;
          this.form.product_code_one = resp.data.campaign.product_code_one;
          this.form.product_code_two = resp.data.campaign.product_code_two;
          this.form.campaign_background = resp.data.campaign.background_image;
          this.loading = false;
          if(this.form.campaign_background){
              this.preview_campaign_background=this.base_url+this.form.campaign_background;
           }
        }
      });
    },

    updateSeasionalCampaign() {
      this.form
        .post("/api/edit/seasional/campaign/"+ this.form.id, {
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
            this.getSeasionalCampaign();
          } else {
            this.error = "some thing want to wrong";
          }
        });
    },

    
    uploadcampaign_background(e) {
      const file = e.target.files[0];
     if (!file.type.match("image.*")) {
         Swal.fire({
          type:'warning',
          text:'this is not any kind of image',
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
          this.setcampaign_background(file, evt);
      
        };
        img.src = evt.target.result;
      };
    },

    setcampaign_background(file, evt) {
      this.disabled = false;
      this.form.campaign_background = file;
      this.preview_campaign_background =evt.target.result;
    },
    
    clickImage(){
      let logo_file=document.getElementById('uploadLogo')
          logo_file.click()
    },

  },
};
</script>

<style scoped>
 
   #uploadLogo {
      display: none;
  }

  #campaignBackground {
          border: 1px solid #ddd;
          padding: 5px;
          cursor: pointer;
          margin-left: 25px;
          width: 565px;
          height: 325px;
  }



</style>