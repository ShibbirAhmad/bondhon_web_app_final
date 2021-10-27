<template>
    <div>
        <header class="main-header">
    <!-- Logo -->
    <a href="" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>A</b>LT</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>{{   sellcenter.name }}</b></span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>

      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">

          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img :src="base_url + sellcenter.logo " class="user-image" >
              <span class="hidden-xs">{{ sellcenter.name }}</span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img :src="base_url+sellcenter.logo" class="img-circle" alt="User Image">

                <p>
                  {{ sellcenter.name  }} 
                  <small> since {{  sellcenter.created_at }}</small>
                </p>
              </li>
              <!-- Menu Body -->
              <!-- <li class="user-body">
                <div class="row">
                  <div class="col-xs-4 text-center">
                    <a href="#">Followers</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Sales</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Friends</a>
                  </div>
                </div> -->
              <!-- </li> -->

              <!-- Menu Footer-->
              <li class="user-footer">
                    <div class="row">
                      <div class="col-md-3">
                        <router-link :to="{ name: 'sell_center_profile'}"  class="btn btn-primary " > profile </router-link>
                      </div>

                      <div class="col-md-6">
                      <router-link :to="{ name: 'sell_center_password_edit'}"  class="btn btn-primary ">change password</router-link>
                      </div>

                      <div class="col-md-3">
                          <a @click="logout" class="btn btn-danger "> logout </a>
                      </div>
                    </div>


              </li>
            </ul>
          </li>
          <!-- Control Sidebar Toggle Button -->

        </ul>
      </div>
    </nav>
  </header>
    </div>
</template>



<script>
export default {
  created() {

    this.$store.dispatch("sellcenter");
    this.$store.dispatch("general_setting");
  },
  data() {
    return {
      base_url: this.$store.state.image_base_link ,
    };
  },
  methods: {
     logout(){
        axios.get('/api/sellcenter/logout')
        .then(resp => {
          console.log(resp);
          if (resp.data.status == "OK") {
             localStorage.removeItem('sell_center_token') ;
             this.$store.commit('sellcenter',null);
             this.$router.push({ name : 'sell_center_login'});
              this.$toasted.show("Logout successfully ! login again to come back .", {
              type: "error",
              position: "top-center",
              duration: 10000,
            });
          }
        })

     }
  },
  computed: {
    sellcenter() {
      return this.$store.getters.sellcenter;
    },

    general_setting() {
        return this.$store.getters.general_setting;
    },
  },
};
</script>

<style>

</style>