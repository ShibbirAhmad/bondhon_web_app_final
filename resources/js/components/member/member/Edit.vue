<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'admin' }" class="btn btn-primary"
            ><i class="fa fa-arrow-left"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Memeber</li>
        </ol>
      </section>
      <section class="content">
        <div class="row">
          <h1 v-if="loading"><i class="fa fa-spinner fa-spin"></i></h1>
          <form
            v-else
            @submit.prevent="update"
            @keydown="form.onKeydown($event)"
            enctype="multipart/form-data"
          >
            <div class="alert-danger alert" v-if="error">
              {{ error }}
            </div>

            <div class="col-lg-10 col-lg-offset-1">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                  <h3 class="box-title">Personal Information</h3>
                </div>
                <div class="box-body">

                    <div class="row">
                      <div class="col-md-6 col-sm-6 col-xs-12">

                      <div class="form-group">
                        <label>Name <b class="text-danger">*</b> </label>
                        <input
                          v-model="form.name"
                          type="text"
                          name="name"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('name') }"
                          autofocus
                          placeholder="name"
                        />
                        <has-error :form="form" field="name"></has-error>
                      </div>

                      <div class="form-group">
                        <label>Email<b class="text-danger">*</b></label>
                        <input
                          v-model="form.email"
                          type="email"
                          name="email"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('email') }"
                          autofocus
                          placeholder="email"
                        />
                        <has-error :form="form" field="email"></has-error>
                      </div>



                      <div class="form-group">
                        <label>
                          Present Address <b class="text-danger">*</b>
                        </label>
                        <input
                          v-model="form.permanent_address"
                          type="text"
                          name="present_address"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('present_address'),
                          }"
                          autofocus
                          required
                          placeholder="present_address"
                        />
                        <has-error
                          :form="form"
                          field="present_address"
                        ></has-error>
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
                      </div>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="form-group text-center">
                          <img
                            id="m_profile"
                            :src="base_url + form.image"
                            class="member_profile"
                          />
                         </div>

                      </div>
                    </div>



                </div>
              </div>
            </div>


            <div class="col-lg-10 form-group text-center">
              <button
                :disabled="form.busy"
                type="submit"
                class="btn btn-primary"
              >
                <i class="fa fa-spin fa-spinner" v-if="form.busy"></i>Save
              </button>
            </div>
          </form>
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
  created() {
    setTimeout(() => {
      this.getAdmin();
      this.loading = false;
    }, 500);
  },
  data() {
    return {
      form: new Form({
        name: "",
        email: "",
        phone: "",
        present_address: "",
        image: "",
      }),
      base_url: this.$store.state.image_base_link,
      loading: true,
      error: "",
    };
  },

  methods: {
    getAdmin() {
      axios
        .get("/api/member/profile/info")
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "OK") {
            this.form.name = resp.data.member.name;
            this.form.phone = resp.data.member.phone;
            this.form.email = resp.data.member.email;
            this.form.image = resp.data.member.image;
            this.form.present_address = resp.data.member.present_address;
          }
        });
    },
    update() {
      this.form
        .post("/api/edit/member/profile/info", {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.$router.push({ name: "admin" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
          } else {
            this.error = "some thing want to wrong";
          }
        });
    },
    uploadImage(e) {
      const file = e.target.files[0];
      this.form.image = file;
      ///let image file size check
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (evt) => {
        let img = new Image();
        img.onload = () => {
          console.log(img.width + "-" + img.height);
        };
        img.src = evt.target.result;
        document.getElementById("m_profile").src = evt.target.result;
      };
    },


    read(image) {
      let reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.form.image = e.target.result;
      };
    },




  },
  computed: {},
};
</script>

<style scoped>
.mb-2 {
  margin-bottom: 5px !important;
}

.member_profile {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 1px solid #ddd;
}
</style>
