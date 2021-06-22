<template>
 <div class="login_container ">
  <div class="login-box">
    <div class="login-logo">
      <a href="#"> <b>bondhonsociety</b>.com</a>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="login-box-msg">Sign in to start your session</p>

      <form @submit.prevent="login">
        <div class="alert alert-danger" v-if="error">{{ error }}</div>

        <div class="form-group has-feedback">
          <input
            type="email"
            class="form-control"
            :class="{ 'is-invalid': form.errors.has('email') }"
            name="email"
            v-model="form.email"
            placeholder="Email"
            autocomplete="off"
            autofocus
          />
          <has-error :form="form" field="email"></has-error>
        </div>
        <div class="form-group has-feedback">
          <input
            type="password"
            class="form-control"
            :class="{ 'is-invalid': form.errors.has('password') }"
            name="password"
            v-model="form.password"
            placeholder="Password"
            autocomplete="off"
          />
          <has-error :form="form" field="password"></has-error>
        </div>
        <button
          href="#"
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

</div>
</template>

<script>
import Vue from "vue";
import { Form, HasError } from "vform";


Vue.component(HasError.name, HasError);
export default {
  created() {
    this.removeClass();
  },

  data() {
    return {
      form: new Form({
        email: "",
        password: "",
      }),
      error: "",
    };
  },

  methods: {
    login() {
      this.form
        .post("/admin/login")
        .then((resp) => {
          // console.log(resp.data.status == "FAILD");
          if (resp.data.status == "SUCCESS") {
            localStorage.setItem("member_token", resp.data.token);
            this.$store.commit("member", resp.data.member);
            this.$router.push({ name: "member_dashboard" });
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
          if (resp.data.status == "FAILD") {
            this.error = resp.data.message;
          }
        })
        .catch((error) => {
          this.error = "Some thing want to wrong. please try again";
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
