<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'investment' }" class="btn btn-primary"
            ><i class="fa fa-arrow-left"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Investor</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-lg-offset-2">
             <h1 v-if="loading"><i class="fa fa-spinner fa-spin"></i></h1>
                <form
                  v-else
                  @submit.prevent="addInvestor"
                  @keydown="form.onKeydown($event)"
                  enctype="multipart/form-data"
                >
                  <div class="alert-danger alert" v-if="error">
                    {{ error }}
                  </div>
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title">Investor Basic Information </h3>
              </div>
              <div class="box-body">
                 
                    <div class="form-group">
                        <label>Name <b class="text-danger">*</b>  </label>

                        <input
                          v-model="form.name"
                          type="text"
                          name="name"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('name') }"
                          autofocus
                          placeholder="Ex: MD Mohammad"
                        />
                        <has-error :form="form" field="name"></has-error>
                      </div>

                  <div class="row">
                    <div class="col-md-6">
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
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Mobile Number <b class="text-danger">*</b> </label>

                        <input
                          v-model="form.mobile_no"
                          type="text"
                          name="mobile_no"
                          maxlength="11"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('mobile_no'),
                          }"
                          autocomplete="off"
                          placeholder="01xxxxxxxxx"
                           
                        />
                        <has-error :form="form" field="mobile_no"></has-error>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Address <b class="text-danger">*</b> </label>
                        <input
                          v-model="form.address"
                          type="text"
                          name="email"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('address') }"
                          autocomplete="off"
                          placeholder="address"
                           
                        />
                        <has-error :form="form" field="address"></has-error>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Referance Name <b class="text-danger">*</b></label>

                        <input
                          v-model="form.referance_name"
                          type="text"
                          
                          name="referance_name"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('referance_name'),
                          }"
                          autofocus
                          autocomplete="off"
                          placeholder="refarance name"
                        />
                        <has-error
                          :form="form"
                          field="referance_name"
                        ></has-error>
                      </div>
                    </div>
                  </div>

              
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                        <label
                          >photo <b class="text-danger">*</b>
                        </label>
                            <input
                              @change="uploadInvestorProfile"
                              class="form-control"
                              type="file"
                              
                            />
                          </div>
                      </div>
                  <div class="col-md-6">
                     <div class="form-group text-center">
                        <img
                          id="m_profile"
                          :src="base_url + form.image"
                          class="member_profile"
                        />
                      </div>
                  </div>
                </div>
              
               <div class="row">
                 <div class="col-md-6">
                      <div class="form-group">
                        <label
                          >NID/Birth Registration NO<b class="text-danger"
                            >*</b
                          ></label
                        >
                      <input
                          class="form-control"
                          
                          :class="{ 'is-invalid': form.errors.has('nid') }"
                          type="file"
                            @change="uploadNidImage"
                          name="nid"
                         />
                   </div>
                    </div>
                 <div class="col-md-6 text-center">
                   <img class="nid_image" :src="base_url+ form.nid " alt="image">
                        <a :href="base_url+form.nid" download > <i class="fa fa-download download_icon"></i> </a>
                    
                   </div>
               </div>


              </div>
            </div>
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                  <h3 class="box-title">Investor Family Information</h3>
                </div>
                <div class="box-body">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          >Father/Husband Name <b class="text-danger">*</b>
                        </label>
                        <input
                          v-model="form.father_name"
                          type="text"
                          name="father_name"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('father_name'),
                          }"
                          autofocus
                          placeholder="father_name"
                        />
                        <has-error :form="form" field="father_name"></has-error>
                      </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                        <label
                          >Mother/Wife Name <b class="text-danger">*</b>
                        </label>
                        <input
                          v-model="form.mother_name"
                          type="text"
                          name="mother_name"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('mother_name'),
                          }"
                          autofocus
                          placeholder="mother_name"
                        />
                        <has-error :form="form" field="mother_name"></has-error>
                      </div>
                    </div>
                  </div>

                 

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          >Father/Husband Phone<b class="text-danger"
                            >*</b
                          ></label
                        >
                        <input
                          v-model="form.father_phone"
                          type="number"
                          name="father_phone"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('father_phone'),
                          }"
                          autofocus
                          
                          maxlength="11"
                          placeholder="01xxxxxxxxx"
                        />
                        <has-error
                          :form="form"
                          field="father_phone"
                        ></has-error>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          >Mother/Wife Phone<b class="text-danger">*</b></label
                        >
                        <input
                          v-model="form.mother_phone"
                          type="number"
                          name="mother_phone"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('mother_phone'),
                          }"
                          autofocus
                          
                          maxlength="11"
                          placeholder="01xxxxxxxxx"
                        />
                        <has-error
                          :form="form"
                          field="mother_phone"
                        ></has-error>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>
                          Present Address <b class="text-danger">*</b>
                        </label>
                        <input
                          v-model="form.parent_present_address"
                          type="text"
                          name="parent_present_address"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has(
                              'parent_present_address'
                            ),
                          }"
                          autofocus
                          
                          placeholder="parent_present_address"
                        />
                        <has-error
                          :form="form"
                          field="parent_present_address"
                        ></has-error>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>
                          Permanent Address <b class="text-danger">*</b>
                        </label>
                        <input
                          v-model="form.parent_permanent_address"
                          type="text"
                          name="parent_permanent_address"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has(
                              'parent_permanent_address'
                            ),
                          }"
                          autofocus
                          
                          placeholder="parent_permanent_address"
                        />
                        <has-error
                          :form="form"
                          field="parent_permanent_address"
                        ></has-error>
                      </div>
                    </div>
                  </div>
                 <div class="row">
                   <div class="col-md-6">
                      <div class="form-group">
                        <label
                          >Father/Husband NID<b class="text-danger"
                            >*</b
                          ></label >
                         <input
                          class="form-control"
                          
                          :class="{ 'is-invalid': form.errors.has('father_nid') }"
                          type="file"
                            @change="uploadFatherNidImage"
                          name="father_nid"
                         />
                        <has-error :form="form" field="father_nid"></has-error>
                      </div>
                   </div>
                   <div class="col-md-6 text-center">
                         <img class="nid_image" :src="base_url+ form.father_nid " alt="image">
                        <a :href="base_url+form.father_nid" download > <i class="fa fa-download download_icon"></i> </a>
                
                   </div>
                 </div>
                  <div class="row">
                   <div class="col-md-6">
                      <div class="form-group">
                        <label
                          >Mother/Wife NID<b class="text-danger"
                            >*</b
                          ></label
                        >
                        <input
                          class="form-control"
                          
                          :class="{ 'is-invalid': form.errors.has('mother_nid') }"
                          type="file"
                            @change="uploadMotherNidImage"
                          name="mother_nid"
                         />
                        <has-error :form="form" field="mother_nid"></has-error>
                      </div>
                   </div>
                   <div class="col-md-6 text-center">
                      <img class="nid_image" :src="base_url+ form.mother_nid " alt="image">
                        <a :href="base_url+form.mother_nid" download > <i class="fa fa-download download_icon"></i> </a>
              
                   </div>
                 </div>
                 <div class="form-group text-center">
                    <button
                      :disabled="form.busy"
                      type="submit"
                      class="btn btn-primary"
                    >
                      <i class="fa fa-spin fa-spinner" v-if="form.busy"></i
                      >Save
                    </button>
                  </div>


                </div>

              </div>
            </form>
          </div>
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
    this.cDate();
    this.getEditInfo();
  },
  data() {
    return {
      form: new Form({
        name: "",
        referance_name: "",
        email: "",
        mobile_no: "",
        address:"",
        father_name: "",
        mother_name: "",
        father_phone: "",
        mother_phone: "",
        father_nid: "",
        mother_nid: "",
        nid: "",
        parent_present_address: "",
        parent_permanent_address: "",
        image:"",
      }),
      base_url: this.$store.state.image_base_link,
      loading: true,
      error: "",
      options: {
        format: "YYYY-MM-DD",
        useCurrent: false,
      },
      loaners: "",
    };
  },

  methods: {
    getEditInfo(){
        axios.get('/api/get/company/investor/info/'+this.$route.params.id)
        .then(resp => {
          this.form.name = resp.data.investor.name ;
          this.form.purpose = resp.data.investor.purpose ;
          this.form.nid = resp.data.investor.nid ;
          this.form.father_name = resp.data.investor.father_name ;
          this.form.mother_name = resp.data.investor.mother_name ;
          this.form.father_phone = resp.data.investor.father_phone ;
          this.form.mother_phone = resp.data.investor.mother_phone ;
          this.form.father_nid = resp.data.investor.father_nid ;
          this.form.mother_nid = resp.data.investor.mother_nid ;
          this.form.mobile_no = resp.data.investor.mobile_no ;
          this.form.email = resp.data.investor.email ;
          this.form.image = resp.data.investor.image ;
          this.form.address = resp.data.investor.address ;
          this.form.referance_name = resp.data.investor.referance_name ;
          this.form.parent_present_address = resp.data.investor.parent_present_address ;
          this.form.parent_permanent_address = resp.data.investor.parent_permanent_address ;
        })
    },
    addInvestor() {
      this.form
        .post("/api/company/investor/edit/info/"+this.$route.params.id, {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "OK") {
            this.$router.push({ name: "investment" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-right",
              duration: 4000,
            });
          } else {
            this.error = "some thing went to wrong";
          }
        })
        .catch((error) => {
          console.log(error);
          this.error = "some thing went to wrong";
        });
    },



   uploadNidImage(e) {
      const file = e.target.files[0];
      this.form.nid = file;
    },

    uploadMotherNidImage(e) {
      const file = e.target.files[0];
      this.form.mother_nid = file;
    },

   uploadFatherNidImage(e) {
      const file = e.target.files[0];
      this.form.father_nid = file;
    },


    uploadInvestorProfile(e) {
      this.form.image = e.target.files[0];
    },


    cDate() {
      //current date
      let d = new Date();
      //current day
      let month = d.getMonth() + 1;
      let day = d.getDate();
      let output =
        d.getFullYear() +
        "-" +
        (("" + month).length < 2 ? "0" : "") +
        month +
        "-" +
        (("" + day).length < 2 ? "0" : "") +
        day;
      this.form.date = output;

      this.loading = false;
    },





  },
};
</script>

<style scoped>
.mb-2 {
  margin-bottom: 5px !important;
}

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

.member_profile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #ddd;
}

</style>
