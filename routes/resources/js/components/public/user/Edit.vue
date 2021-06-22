<template>
  <div class="wrapper-wide">
    <frontend-header></frontend-header>

    <div id="container">
      <div class="container">
        <div style="min-height: 400px" class="row flex">
                
            <sidebar></sidebar> 

          <div class="col-md-6 col-sm-10">
            <div class="form-container content">
              <form
                @submit.prevent="UpdateProfile"
                enctype="multipart/form-data"
              >
                <div class="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('name') }"
                    name="name"
                    v-model="form.name"
                    autocomplete="off"
                  />
                  <has-error :form="form" field="name"></has-error>
                </div>
                <div class="form-group">
                  <label for>Mobile_no</label>
                  <input
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('mobile_no') }"
                    name="mobile_no"
                    v-model="form.mobile_no"
                    autocomplete="off"
                  />
                  <has-error :form="form" field="mobile_no"></has-error>
                </div>

                <div class="form-group">
                  <label for>City</label>

                  <select name="city" v-model="form.city" class="form-control">
                    <option value disabled>Your city</option>
                    <option
                      v-for="(city, index) in cities"
                      :key="index"
                      :value="city.id"
                    >
                      {{ city.name }}
                    </option>
                  </select>
                  <has-error :form="form" field="city"></has-error>
                </div>

                <div class="form-group">
                  <label for>Email</label>
                  <input
                    type="email"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('email') }"
                    name="mobile_no"
                    v-model="form.email"
                    autocomplete="off"
                  />
                  <has-error :form="form" field="email"></has-error>
                </div>
                <div class="form-group">
                  <label for>Address</label>
                  <input
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('address') }"
                    name="address"
                    v-model="form.address"
                    autocomplete="off"
                  />
                  <has-error :form="form" field="address"></has-error>
                </div>

                <div class="form-group text-center">
                  <button
                    :disabled="form.busy"
                    class="btn btn-primary"
                    type="submit"
                  >
                    <i class="fa fa-spinner fa-spin" v-if="form.busy"></i>
                    UPDATE
                  </button>
                </div>
              </form>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
      <frontend-footer></frontend-footer>
    </div>
  </div>
</template>

<script>
import { Form, HasError } from "vform";
import sidebar from "./Sidebar.vue" ;
export default {
  props: ["categories"],

  created() {
    this.getCity();
    this.user();
  },

  data() {
    return {
      order_lists: {},
      loading: true,
      form: new Form({
        name: "",
        email: "",
        mobile_no: "",
        address: "",
        city: "",
      }),
      cities: "",
      base_url: this.$store.state.image_base_link,
    };
  },

  methods: {
    UpdateProfile() {
      this.form
        .post("/_public/update/user/profile", {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "ERROR") {
            this.$toasted.show(resp.data.message, {
              type: "error",
              position: "top-center",
              duration: 2000,
            });
          } else {
            this.$toasted.show("update profile successfully", {
              type: "success",
              position: "top-center",
              duration: 2000,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getCity() {
      axios
        .get("/_public/others")
        .then((resp) => {
          this.cities = resp.data.cities;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    user() {
      axios
        .get("/_public/userToCheck")
        .then((resp) => {
          if (resp.data.status == "AUTHORIZED") {
            this.form.name = resp.data.user.name;
            this.form.mobile_no = resp.data.user.mobile_no;
            this.form.address = resp.data.user.address;
            this.form.email = resp.data.user.email;
            this.form.city = resp.data.user.city_id;
          }
        })
        .catch((error) => {});
    },
  },
  components:{
    sidebar
  }
};
</script>

<style scoped>
.content{
  background:#fff;
  padding: 20px 20px;
}
</style>