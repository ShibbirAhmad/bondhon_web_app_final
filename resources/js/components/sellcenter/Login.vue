<template>
  <div class="login_container" >
  <div class="login-box" v-if="!isLoading">
    <div class="login-logo">
      <a href="#"> <b>bondhonsociety</b>.com</a>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="login-box-msg">Sign-in to start your session</p>
      <form @submit.prevent="login">
        <div class="alert alert-danger" v-if="error">{{ error }}</div>
        
        <div class="form-group has-feedback">
          <label for="phone">Phone</label>
          <input
            type="text"
            class="form-control"
            :class="{ 'is-invalid': form.errors.has('phone') }"
            name="phone"
            v-model="form.phone"
            placeholder="01xxxxxxxxx"
            maxlength="11"
            autofocus
          />
          <has-error :form="form" field="phone"></has-error>
        </div>
        <div class="form-group has-feedback">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            :class="{ 'is-invalid': form.errors.has('password') }"
            name="password"
            v-model="form.password"
            autocomplete="off"
          />
          <has-error :form="form" field="password"></has-error>
        </div>
        <button
          :disabled="form.busy"
          class="btn btn-block btn-primary"
          type="submit"
        >
          <i class="fa fa-spinner fa-spin" v-if="form.busy"></i>LOGIN
        </button>
      </form>
    </div>
    <!-- /.login-box-body -->
  </div>
  <div class="loading" v-else>
    <h2>Loading............</h2>
  </div>

  </div>
</template>

<script>
import Vue from "vue";
import { Form, HasError } from "vform";


Vue.component(HasError.name, HasError);
export default {
  created() {
    this.removeClass();

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },

  data() {
    return {
      form: new Form({
        phone: "",
        password: "",
      }),
      error: "",
      isLoading: true,
    };
  },

  methods: {
    login() {
      this.form
        .post("/api/sellcenter/login")
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            localStorage.setItem("sell_center_token", resp.data.sell_center_token);
            this.$store.commit("sellcenter", resp.data.sellcenter);
            this.$router.push({ name: "sell_center_dashboard" });
            setTimeout(() =>{
              location.reload();
            },1000)

            this.addClass();
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
          }
          if (resp.data.status == "Fail") {
            this.error = resp.data.message;
          }
        })
        .catch((error) => {
          this.error = "Something went to wrong. please try again";
        });
    },

    removeClass() {
      let myBody = document.getElementsByTagName("body")[0];
      let sidebar = document.getElementsByClassName("main-sidebar");
      let footer = document.getElementsByClassName("main-footer");

      myBody.classList.remove("skin-blue");
      myBody.classList.add("login-page");

      if (sidebar.length > 0) {
        sidebar[0].classList.add("none");
      }
      if (footer.length > 0) {
        footer[0].classList.add("none");
      }
    },

    addClass() {
      let myBody = document.getElementsByTagName("body")[0];
      let sidebar = document.getElementsByClassName("main-sidebar")[0];
      let footer = document.getElementsByClassName("main-footer")[0];
      myBody.classList.remove("login-page");
      myBody.classList.add("skin-blue");

      sidebar.classList.remove("none");
      footer.classList.remove("none");
    },
  },
};

</script>
<style >


.login_container{
    position: fixed;
    background: url(https://static.vecteezy.com/system/resources/previews/001/777/747/non_2x/abstract-technology-background-security-system-concept-with-fingerprint-letter-p-sign-illustration-vector.jpg);
    width: 100%;
    height: 1000px;
    margin-top: -200px;
}

.login-logo a {
  color:#fff;
}
.login-box {
  margin: 20% auto ;
}


.none {
  display: none !important;
}


@media screen and (max-width: 768px){
      .login-box, .register-box {
          width: 90%;
          margin:77% auto ;
      }
   }
</style>
