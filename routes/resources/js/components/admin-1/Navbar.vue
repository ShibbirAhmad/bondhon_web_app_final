<template>
  <header class="main-header">
    <!-- Logo -->
    <a href="#" class="logo">
      <span class="logo-mini"><b>A</b>LT</span>
      <span class="logo-lg"><b>Madina </b>fashion</span>
    </a>
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>

      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img
                :src="'/../public/storage/' + getAdmin.image"
                class="user-image"
                :alt="getAdmin.name"
                v-if="getAdmin.image"
              />
              <img
                :src="'/../public/storage/images/user2-160x160.jpg'"
                class="user-image"
                :alt="getAdmin.name"
                v-else
              />
              <span class="hidden-xs">{{ getAdmin.name.replace(/ .*/, '') }}</span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img
                  :src="'/../public/storage/' + getAdmin.image"
                  class="img-circle"
                  :alt="getAdmin.name"
                  v-if="getAdmin.image"
                />
                <img
                  :src="'/../public/storage/images/user2-160x160.jpg'"
                  class="img-circle"
                  :alt="getAdmin.name"
                  v-else
                />

                <p>
                  {{ getAdmin.name }} - admin
                  <small>Member since Nov. 2012</small>
                </p>
              </li>
              <!-- Menu Body -->
              <li class="user-body">
                <!-- /.row -->
              </li>
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-left">
                  <router-link
                    :to="{ name: 'adminProfile' }"
                   style="color:#000 !important;"
                    class="btn btn-default btn-flat"
                    >Profile</router-link
                  >
                </div>
                <div class="pull-right">
                  <a href="#" style="color:#000 !important;" class="btn btn-default btn-flat" @click="logout"
                    >Sign out</a
                  >
                </div>
              </li>
            </ul>
          </li>
        
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("admin");
  },
  data() {
    return {
      admin: {},
    };
  },
  methods: {
    //method inital for logout user
    logout() {
      axios
        .get("/logout/admin")
        .then((resp) => {
          //if success resp, then admin redirect to login page
          if (resp.data.status == "SUCCESS") {
            this.$store.commit("admin", null);
            this.user = null;
            localStorage.removeItem("admin_token");
            this.$router.push({ name: "adminLogin" });
            this.$toasted.show("Logout successfully ! you are back soon .", {
              type: "error",
              position: "top-center",
              duration: 10000,
            });
          }
        })
        .catch(() => {
          this.$toasted.show("some thing want to wrong", {
            type: "error",
            position: "top-center",
            duration: 4000,
          });
        });
    },
  },
  computed: {
    getAdmin() {
      return this.$store.getters.admin;
    },
  },
};
</script>

