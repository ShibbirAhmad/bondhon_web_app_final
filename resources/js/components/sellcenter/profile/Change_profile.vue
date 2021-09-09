<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link
            :to="{ name: 'sellcenter_dashboard' }"
            class="btn btn-primary"
            ><i class="fa fa-arrow-left"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Edit Info</a>
          </li>
          <li class="active">Edit</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title">Edit Sell Center Information</h3>
              </div>
              <div class="box-body">
                <h1 v-if="loading"><i class="fa fa-spinner fa-spin"></i></h1>
                <form
                  v-else
                  @submit.prevent="updateSellcenter"
                  @keydown="form.onKeydown($event)"
                  enctype="multipart/form-data"
                >
                  <ul class="list-group" v-if="errors">
                    <li
                      class="list-group-item"
                      v-for="(error, index) in errors"
                      :key="index"
                    >
                      {{ error.name }}
                    </li>
                  </ul>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Name</label>

                        <input
                          v-model="form.name"
                          type="text"
                          name="name"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('name') }"
                          autofocus
                          autocomplete="off"
                          placeholder="name"
                        />

                        <has-error :form="form" field="name"></has-error>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="licience"> Licience </label>
                        <input
                          type="text"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('licience'),
                          }"
                          v-model="form.licience"
                          name="licience"
                        />
                        <has-error :form="form" field="licience">
                        </has-error>
                      </div>
                    </div>
                  </div>

                     <div class="form-group">
                        <label for="phone">Phone</label>
                        <input
                          type="text"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('phone') }"
                          autocomplete="off"
                          autofocus
                          v-model="form.phone"
                          name="phone"
                        />
                        <has-error :form="form" field="phone"> </has-error>
                      </div>
           
                  <div class="form-group">
                    <label for="address">Address</label>

                    <textarea
                      v-model="form.address"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('address') }"
                      name="address"
                      rows="3"
                    ></textarea>

                    <has-error :form="form" field="address"> </has-error>
                  </div>
                  <div class="form-group">
                    <img
                      v-if="this.preview_image"
                      :src="this.preview_image"
                      class="image-responsive"
                      style="width: 250px; height: 250px; margin-left: 100px"
                    />
                  </div>
                  <div class="form-group">
                    <label>Image</label>
                    <input
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('image') }"
                      type="file"
                      @change="uploadImage"
                      name="image"
                    />
                    <has-error :form="form" field="image"></has-error>
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
import navbar from "../Navbar";
Vue.component(HasError.name, HasError);

export default {
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
    this.getSellCenter();
  },
  data() {
    return {
      form: new Form({
        name: "",
        phone: "",
        licience: "",
        address: "",
        logo: "",
      }),
      base_url: this.$store.state.image_base_link,
      loading: true,
      errors: [],
      preview_image: "",
    };
  },

  methods: {
    getSellCenter(){
      axios.get('/api/get/single/sellcenter')
      .then((resp)=>{
         this.form.name= resp.data.sellcenter.name ;
         this.form.phone= resp.data.sellcenter.phone ;
         this.form.licience= resp.data.sellcenter.licience ;
         this.form.address= resp.data.sellcenter.address ;
         this.form.logo= resp.data.sellcenter.logo ;
      })
    },
    updateSellcenter() {
      this.form
        .post("/api/sellcenter/update", {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          // console.log(resp);
          if (resp.data.success == "OK") {
            this.$router.push({ name: "sell_center_dashboard" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
          }
        })
    },

    uploadImage(e) {
      const file = e.target.files[0];
      ///let image file size check
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (evt) => {
        let img = new Image();

        img.onload = () => {
          console.log(img.width + "-" + img.height);
        };

        img.src = evt.target.result;
        this.preview_image = evt.target.result;
        this.form.logo = file;
      };
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
</style>
