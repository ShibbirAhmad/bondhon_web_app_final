<template>
    <div>
        
          <div class="col-md-2 col-sm-2">
               <div class="dropdown user_dropdown ">
              <button
                style="background:#fff;"
                class="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
               <i class="fa fa-bars"></i>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <ul class="list-group">
                  <li class="list-group-item">
                    <router-link :to="{ name: 'UserDashboard' }"
                      ><i class="fa fa-dashboard"></i> Dashboard
                    </router-link>
                  </li>
                  <li class="list-group-item">
                    <router-link :to="{ name: 'UserProfile' }"
                      ><i class="fa fa-user"></i> profile
                    </router-link>
                  </li>
                  <li class="list-group-item">
                    <router-link :to="{ name: 'UserProfileEdit' }">
                      <i class="fa fa-edit"> </i> Edit Profile</router-link
                    >
                  </li>

                  <li class="list-group-item">
                    <router-link :to="{ name: 'PasswordEdit' }">
                      <i class="fa fa-key"></i> change password</router-link
                    >
                  </li>
                   <li class="list-group-item">
                    <router-link :to="{ name: 'user_new_password_set' }">
                      <i class="fa fa-key"></i> set new password</router-link
                    >
                  </li>
                </ul>
              </div>
               </div>
    
         
          </div>
    </div>
</template>  
         
         
         
<script>
export default {

    crated(){
      this.$store.dispatch("user");
    },

    data(){
      return {
          base_url: this.$store.state.image_base_link ,
      }
    },

    computed :{
       user(){  
        return this.$store.getters.user ;
       }
    }
   

}
</script>

<style scoped>

.user_profile_icon{

       width:150px;height:150px; 
   }


 @media screen and (max-width: 650px) {

   .user_profile_icon{

       width:50px;height:50px; 
   }

}

 
</style>