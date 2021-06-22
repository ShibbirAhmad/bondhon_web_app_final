<template>
  <div class="wrapper-wide">
    <!-- <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage"></loading> -->

    <frontend-header></frontend-header>

    <div id="container">
      <div class="container">
        <!-- Breadcrumb End-->

        <div style="min-height: 400px" class="row flex">
         
        <sidebar></sidebar> 

          <div class="col-md-6 col-sm-10">
            <div class="form-container">
              <form>
                <div class="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    disabled
                    class="form-control"
                    :value="user.name ? user.name : 'customer'"
                  />
                </div>

                <div class="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    disabled
                    class="form-control"
                    :value="user.mobile_no"
                  />
                </div>

                <div class="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    disabled
                    class="form-control"
                    :value="user.email ? user.email : 'No Email Added'"
                  />
                </div>

                <div class="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    disabled
                    class="form-control"
                    :value="userCity(user.city_id)"
                  />
                </div>
                <div class="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    disabled
                    class="form-control"
                    :value="user.address ? user.address : 'Not available'"
                  />
                </div>

                <div class="form-group text-center">
                  <router-link :to="{ name: 'UserDashboard' }">
                    <i class="fa fa-arrow-left"> </i>Back</router-link
                  >
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
import sidebar from "./Sidebar.vue"
import { Form, HasError } from "vform";

export default {
  props: ["categories"],

  created() {
    this.getCity();
    setTimeout(() => {
      this.loading = false;
    }, 100);
    this.$store.dispatch("user");
  },

  data() {
    return {
      city: "",
      cities: "",
      loading: true,
    };
  },

  methods: {
    getCity() {
      axios
        .get("/_public/others")
        .then((resp) => {
          this.cities = resp.data.cities;
        })
    
    },
    userCity(city_id) {
      let city = "";
      this.cities.forEach((element) => {
        if (element.id == city_id) {
          city = element.name;
        }
      });
      return city;
    },
  },

  mounted() {
    this.$store.dispatch("user");
  },
  components: {
   sidebar
  },
  computed:{
    user(){
      return this.$store.getters.user ;
    }
  }
};
</script>


<style scoped>

.user_content {
  box-shadow: 1px 2px 1px #ddd;
}

.form-container {
    background: #fff;
    padding: 20px 22px;
}

</style>