<template>
  <div class="wrapper-wide">

    <frontend-header></frontend-header>

    <div id="container">
       <div style="min-height: 400px" class="row">
         
         <div class="s_bar">
           <sidebar> </sidebar>
         </div>
           
         <div class="col-md-2 col-sm-0">  </div>

          <div class="col-md-4 col-sm-10 form-container">

             <div  class="card">
                   <div class="card-heading text-center ">
                       <h4 class="card-title">Set your New password </h4>
                  </div>
                  <div class="card-body ">
                      <form @submit.prevent="setNewPassword" class="form">

                          <div  class="form-group ">
                                <label for="new_password">password</label>
                                <input type="password" v-model="form.new_password" :class="{'is-invalid' : form.errors.has('new_password') }" name="old_paasword" autofocus autocomplete="off" placeholder="your current password" class="form-control" id="">
                                <has-error :form="form" field="new_password "> </has-error>
                          </div>

                          <div class="form-group">
                                <label for="retype_password">Retype password</label>
                                <input type="password" v-model="form.retype_password" :class="{'is-invalid' : form.errors.has('retype_password') }" name="new_paasword" autofocus autocomplete="off" placeholder=" new password" class="form-control" id="">
                                <has-error :form="form" field="retype_password "> </has-error>
                          </div>
                         <div class="form-group text-center ">
                              <button style="margin-bottom:10px;" :disabled="form.busy" class="btn btn-primary " type="submit"> <i class="fa fa-spiner" v-if="form.busy"></i> Change</button> 
                         </div>
                      </form>
                      
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

  data() {
    return {
      form: new Form({
        new_password: "",
        retype_password: "",
      }),
    };
  },

  methods: {
    setNewPassword() {
      this.form
        .post("/_public/user/set/new/password", {
          ternsfromRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.success == "OK") {
            this.$toasted.show(resp.data.message,{
              type:'success',
              position:'top-center',
              duration:5000,
            });
            this.$router.push({ name: "UserDashboard" });
          
          }else{
            this.$toasted.show(resp.data.message,{
              type:'error',
              position:'top-center',
              duration:5000,
            });
          }
        })
    },
  },

  components:{

      sidebar
  }
};
</script>

<style >


.s_bar {
    position: absolute;
    margin-left: 100px;
}

 @media screen and (max-width:400px) {

   
.s_bar {
    position: absolute;
    margin-left: 10px;
    margin-top: -15px;
}

    .card{
   margin-left:20px;
   margin-right:20px;
   }

   .extra{
     display: none ;
   }

 }
 .form-container {
    background: #fff;
    padding: 20px 22px;
}

</style>

