

<template>
  <div>
    <member-main></member-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'member_dashboard' }" class="btn btn-primary"
            ><i class="fa fa-arrow-left"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>member</a>
          </li>
          <li class="active">profile</li>
        </ol>
      </section>

      <section class="content">
        <div class="container">
          <div class="row custom_row">
            <div class="col-md-6 col-sm-12 col-xs-12">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                  <h3 class="box-title">Personal Information</h3>
                </div>
                <div class="box-body">
                  <div class="row">
                    <div class="col-md-4 col-sm-12 col-xs-12 text-center">
                      <img
                        :src="
                          admin.image
                            ? basePath + admin.image
                            : basePath + 'images/static/user2-160x160.jpg'
                        "
                        class="profile_img"
                        :alt="admin.name"
                      />
                    </div>
                    <div class="col-md-8 col-sm-12 col-xs-12">
                      <ul>
                        <li>
                          <p>
                            Name : <span class="m_l"> {{ admin.name }} </span>
                          </p>
                        </li>
                        <li>
                          <p>
                            Email : <span class="m_l"> {{ admin.email }} </span>
                          </p>
                        </li>
                        <li>
                          <p>
                            Phone : <span class="m_l"> {{ admin.phone }} </span>
                          </p>
                        </li>

                        <li>
                          <p>Present Address :  {{ admin.present_address }}</p>
                        </li>
                        <li>
                          <p>
                            Permanent Address :  {{ admin.permanent_address }}
                          </p>
                        </li>
                      </ul>
                    </div>
                     <div class="col-md-12 text-center">
                       <img class="nid_image" :src="basePath+ admin.nid " alt="image">
                        <a :href="basePath+admin.nid" download > <i class="fa fa-download download_icon"></i> </a>
                     </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                  <h3 class="box-title">Nominee Information</h3>
                </div>
                <div class="box-body">
                  <div class="row">
                    <div class="col-md-4 col-sm-12 col-xs-12 text-center">
                      <img
                        :src="
                          admin.nominee_image
                            ? basePath + admin.nominee_image
                            : basePath + 'images/static/user2-160x160.jpg'
                        "
                        class="profile_img"
                        :alt="admin.nominee_name"
                      />
                    </div>
                    <div class="col-md-8 col-sm-12 col-xs-12">
                      <ul>
                        <li>
                          <p>
                            Name : <span class="m_l"> {{ admin.name }} </span>
                          </p>
                        </li>
                        <li>
                          <p>
                            Email : <span class="m_l"> {{ admin.email }} </span>
                          </p>
                        </li>
                        <li>
                          <p>
                            Phone : <span class="m_l"> {{ admin.phone }} </span>
                          </p>
                        </li>

                        <li>
                          <p>Present Address :  {{ admin.nominee_present_address }}</p>
                        </li>
                        <li>
                          <p>
                            Permanent Address : {{ admin.nominee_permanent_address }}
                          </p>
                        </li>
                      </ul>
                    </div>
                     <div class="col-md-12 text-center">
                       <img class="nid_image" :src="basePath+ admin.nominee_nid "  alt="image">
                      <a :href="basePath+admin.nominee_nid" download > <i class="fa fa-download download_icon"></i> </a>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

           <div class="row custom_row">
            <div class="col-md-6 col-sm-12 col-xs-12">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                  <h3 class="box-title">Father Information</h3>
                </div>
                <div class="box-body">
                  <div class="row">
                    <div class="col-md-4 col-sm-12 col-xs-12 text-center">
                      <img
                        :src="
                          admin.father_image
                            ? basePath + admin.father_image
                            : basePath + 'images/static/user2-160x160.jpg'
                        "
                        class="profile_img"
                        :alt="admin.father_name"
                      />
                    </div>
                    <div class="col-md-8 col-sm-12 col-xs-12">
                      <ul>
                        <li>
                          <p>
                            Name : <span class="m_l"> {{ admin.father_name }} </span>
                          </p>
                        </li>
                        <li>
                          <p>
                            Phone : <span class="m_l"> {{ admin.father_phone }} </span>
                          </p>
                        </li>

                        <li>
                          <p>Present Address :  {{ admin.parent_present_address }}</p>
                        </li>
                        <li>
                          <p>
                            Permanent Address :  {{ admin.parent_permanent_address }}
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-12 text-center">
                       <img class="nid_image" :src="basePath+ admin.father_nid " alt="image">
                        <a :href="basePath+admin.father_nid" download > <i class="fa fa-download download_icon"></i> </a>
                     </div>
                  </div>
                </div>
              </div>
            </div>
              <div class="col-md-6 col-sm-12 col-xs-12">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                  <h3 class="box-title">Mother Information</h3>
                </div>
                <div class="box-body">
                  <div class="row">
                    <div class="col-md-4 col-sm-12 col-xs-12 text-center">
                      <img
                        :src="
                          admin.mother_image
                            ? basePath + admin.mother_image
                            : basePath + 'images/static/user2-160x160.jpg'
                        "
                        class="profile_img"
                        :alt="admin.mother_name"
                      />
                    </div>
                    <div class="col-md-8 col-sm-12 col-xs-12">
                      <ul>
                        <li>
                          <p>
                            Name : <span class="m_l"> {{ admin.mother_name }} </span>
                          </p>
                        </li>
                        <li>
                          <p>
                            Phone : <span class="m_l"> {{ admin.mother_phone }} </span>
                          </p>
                        </li>
                        <li>
                          <p>NID: <span class="m_l"> {{ admin.mother_nid }} </span> </p>
                        </li>
                        <li>
                          <p>Present Address :  {{ admin.parent_present_address }}</p>
                        </li>
                        <li>
                          <p>
                            Permanent Address :  {{ admin.parent_permanent_address }}
                          </p>
                        </li>
                      </ul>
                    </div>
                      <div class="col-md-12 text-center">
                       <img class="nid_image" :src="basePath+ admin.mother_nid " alt="image">
                        <a :href="basePath+admin.mother_nid" download > <i class="fa fa-download download_icon"></i> </a>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


           <div class="row custom_row">
              <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                  <h3 class="box-title">Aggreement Information</h3>
                </div>
                <div class="box-body">
                  <div class="row">
                    <div class="col-md-6 col-sm-12 col-xs-12">
                       <div class="form-group aggreement_container">
                          <p v-html="aggreement_details"  >
                         </p>
                       </div>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <img
                        :src="
                          admin.aggreement_image
                            ? basePath + admin.aggreement_image
                            : basePath + 'images/static/user2-160x160.jpg'
                        "
                        class="aggreement_image"
                        alt="aggreement"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
    </div>
  </div>
</template>




<script>
export default {
  mounted() {
    this.getMemberInformation();
    this.getAggreement();
  },

  data() {
    return {
      loading: true,
      admin: "",
      basePath: this.$store.getters.image_base_link,
     aggreement_details:"",

    };
  },

  methods: {
     getAggreement() {
      axios.get("/api/get/aggreement/info")
      .then((resp) => {
          this.aggreement_details = resp.data.setting.policy;
      });
    },
    getMemberInformation() {
      axios
        .get("/api/member/profile/info")
        .then((resp) => {
          console.log(resp);
          this.admin = resp.data.member;
          this.loading = false;
        });
    },
  },
};
</script>



<style scoped>

.nid_image {
      height: 150px;
      width: 300px;
}
.download_icon{
   cursor: pointer;
    font-size: 29px;
    position: absolute;
    margin: 4px -30px;
    color: green;
}
.aggreement_container {
   height: 400px;
   overflow-y: scroll;
}

p {
    font-size: 16px;
    line-height: 17px;
}
.profile_img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid #161745;
  padding: 3px;
  line-height: 0;
}

.aggreement_image{
    width:90%;
    height: 320px;
    border:1px solid #161745 ;
}
.aggreement_info{
    overflow-y: scroll;
}
.custom_row {
  margin-left: -30px !important;
  margin-right: 0px !important;
}

.m_l {
    margin-left: 30px;
}

@media screen  and(max-width:450px){

  .custom_row {
      margin-left: -9px!important;
      margin-right: -22px !important;
  }
  .nid_image {
      height: 150px;
      width: 250px;
    }




}




</style>
