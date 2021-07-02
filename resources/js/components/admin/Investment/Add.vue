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
                 <div class="row">
                   <div class="col-md-6">
                     <div class="form-group">
                    <label>Date  <b class="text-danger">*</b>  </label>

                    <date-picker
                      autocomplete="off"
                      required
                      v-model="form.date"
                      :config="options"
                      :class="{ 'is-invalid': form.errors.has('date') }"
                    ></date-picker>

                    <has-error :form="form" field="date"></has-error>
                  </div>
                     </div>
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
                          required
                          placeholder="email"
                        />
                        <has-error :form="form" field="email"></has-error>
                      </div>

                      </div>
                 </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Name <b class="text-danger">*</b>  </label>

                        <input
                          v-model="form.name"
                          type="text"
                          name="name"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('name') }"
                          autofocus
                          required
                          autocomplete="off"
                          placeholder="Ex: MD Mohammad"
                        />
                        <has-error :form="form" field="name"></has-error>
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
                           required
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
                           required
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
                          required
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

                  <div class="form-group">
                    <label>Purpose <b class="text-danger">*</b> </label>

                    <textarea  v-model="form.purpose"
                      name="purpose"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('purpose') }" rows="3"></textarea>
                    <has-error :form="form" field="purpose"></has-error>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Amount <b class="text-danger">*</b> </label>

                        <input
                          v-model="form.amount"
                          type="text"
                          name="amount"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('amount') }"
                          autocomplete="off"
                          placeholder="45000"
                        />
                        <has-error :form="form" field="amount"></has-error>
                      </div>
                    </div>

                    <div class="col-md-6">
                       <div class="form-group">
                        <label>Profit Margin </label>

                        <input
                          v-model="form.profit_margin"
                          type="text"
                          name="profit_margin"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('profit_margin') }"
                          autocomplete="off"
                          placeholder="25"
                        />
                        <has-error :form="form" field="profit_margin"></has-error>
                      </div>
                    </div>

                  </div>


                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                        <label
                          >Manager photo <b class="text-danger">*</b>
                        </label>
                            <input
                              @change="uploadInvestorProfile"
                              class="form-control"
                              type="file"
                              required
                            />
                          </div>
                      </div>
                  <div class="col-md-6">
                      <div class="form-group">
                        <label
                          >NID/Birth Registration NO<b class="text-danger"
                            >*</b
                          ></label
                        >
                      <input
                          class="form-control"
                          required
                          :class="{ 'is-invalid': form.errors.has('nid') }"
                          type="file"
                            @change="uploadNidImage"
                          name="nid"
                         />
                   </div>
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
                          >Father/Husband NID<b class="text-danger"
                            >*</b
                          ></label >
                         <input
                          class="form-control"
                          required
                          :class="{ 'is-invalid': form.errors.has('father_nid') }"
                          type="file"
                            @change="uploadFatherNidImage"
                          name="father_nid"
                         />
                        <has-error :form="form" field="father_nid"></has-error>
                      </div>
                    </div>
                  </div>

                  <div class="row">
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
                    <div class="col-md-6">
                         <div class="form-group">
                        <label
                          >Mother/Wife NID<b class="text-danger"
                            >*</b
                          ></label
                        >
                        <input
                          class="form-control"
                          required
                          :class="{ 'is-invalid': form.errors.has('mother_nid') }"
                          type="file"
                            @change="uploadMotherNidImage"
                          name="mother_nid"
                         />
                        <has-error :form="form" field="mother_nid"></has-error>
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
                          required
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
                          required
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
                          required
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
                          required
                          placeholder="parent_permanent_address"
                        />
                        <has-error
                          :form="form"
                          field="parent_permanent_address"
                        ></has-error>
                      </div>
                    </div>
                  </div>
                 <div class="form-group text-center">
                    <button
                      :disabled="form.busy"
                      type="submit"
                      class="btn btn-primary"
                    >
                      <i class="fa fa-spin fa-spinner" v-if="form.busy"></i
                      >Submit
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
  },
  data() {
    return {
      form: new Form({
        name: "",
        referance_name: "",
        email: "",
        mobile_no: "",
        address:"",
        date:"",
        purpose:"write purpose details here",
        amount:"",
        profit_margin:"",
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
    addInvestor() {
      this.form
        .post("/api/company/investor/add")
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
            this.error = "some thing want to wrong";
          }
        })
        .catch((error) => {
          console.log(error);
          this.error = "some thing want to wrong";
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
</style>
