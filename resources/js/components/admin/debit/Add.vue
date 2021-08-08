<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'debit' }" class="btn btn-primary"
            ><i class="fa fa-arrow-left"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Debit</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
           <div class="col-lg-10 col-lg-offset-1">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title">Add Debit</h3>
              </div>
              <div class="box-body">
                <h1 v-if="loading"><i class="fa fa-spinner fa-spin"></i></h1>
                <form
                  v-else
                  @submit.prevent="addDebit"
                  @keydown="form.onKeydown($event)"
                  enctype="multipart/form-data"
                >
                  <div class="alert-danger alert" v-if="error">
                    {{ error }}
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Date</label>

                        <date-picker
                          autocomplete="off"
                          v-model="form.date"
                          :config="options"
                          :class="{ 'is-invalid': form.errors.has('date') }"
                        ></date-picker>

                        <has-error :form="form" field="date"></has-error>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Purpose</label>
                        <select
                          class="form-control"
                          v-model="form.purpose"
                          name="purpose"
                          required
                          @change="selectPurpose"
                          :class="{ 'is-invalid': form.errors.has('purpose') }"
                        >
                          <option value="" selected disabled>
                            Select Purpose
                          </option>
                          <option
                            v-for="purpose in purposes"
                            :key="purpose.id"
                            :value="purpose.id"
                          >
                            {{ purpose.text }}
                          </option>
                        </select>
                        <has-error :form="form" field="purpose"></has-error>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Amount</label>
                        <input
                          type="text"
                          name="amount"
                          v-model="form.amount"
                           required
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('amount') }"
                          autocomplete="off"
                        />
                        <has-error :form="form" field="amount"></has-error>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Debit From</label>
                        <select
                          name="debit_from"
                          id=""
                          class="form-control"
                          v-model="form.debit_from"
                          :class="{
                            'is-invalid': form.errors.has('debit_from'),
                          }"
                        >
                          <option value="Cash">Cash</option>
                          <option value="Bkash(personal)">
                            Bkash(personal)
                          </option>
                          <option value="Bkash(merchant)">
                            Bkash(merchant)
                          </option>
                          <option value="Bank">Bank</option>
                        </select>
                        <has-error :form="form" field="debit_from"></has-error>
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label>Comment</label>
                    <input
                      type="text"
                      name="comment"
                      class="form-control"
                      v-model="form.comment"
                      :class="{ 'is-invalid': form.errors.has('comment') }"
                      autocomplete="off"
                    />
                    <has-error :form="form" field="comment"></has-error>
                  </div>

                  <div class="form-group" id="signatur-pad">
                    <label for="">Signature</label>

                    <sig
                      ref="signature"
                      style="margin-bottom: 5px"
                      :class="{ 'is-invalid': form.errors.has('signature') }"
                      id="sig"
                      class="bg-warning"
                      :sigOption="option"
                      :disabled="disabled"
                    >
                    </sig>

                    <button
                      type="button"
                      @click.prevent="clear"
                      style="position: absolute; right: 10px"
                      class="m-1"
                    >
                      clear
                    </button>
                    <button
                      type="button"
                      @click.prevent="form.signature_write = true"
                      style="position: absolute; right: 60px"
                      class="m-1"
                    >
                      Perfect
                    </button>
                  </div>
                  <br />
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import { Form, HasError, AlertError } from "vform";
import sig from "vue-signature";

Vue.component(HasError.name, HasError);
export default {
  name: "Add",
  created() {
    this.accountPurpose();
  },
  data() {
    return {
      form: new Form({
        purpose: "",
        amount: "",
        date: "",
        comment: "",
        employee_id: "",
        debit_from: "Cash",
        project_id:"",
        signature: null,
        signature_write: false,
        admin_id: "",
        investor_id: "",
        loaner_id: "",
        month: "",
        old_signature: "",
        bill_statement_id:"",
        investor_return_id:"",
      }),
      old_signature:true,
      loading: true,
      error: "",
      purposes: "",
      //fo date picker
      options: {
        format: "YYYY-MM-DD",
        useCurrent: false,
      },
      months: {
        January: "January",
        February: "February",
        March: "March",
        April: "April",
        May: "May",
        June: "June",
        July: "July",
        August: "August",
        September: "Septembaer",
        October: "October",
        November: "November",
        December: "December",
      },
      //signature pad.......
      option: {
        penColor: "rgb(0, 0, 0)",
        backgroundColor: "#ddd",
      },
      disabled: false,
     base_link:this.$store.state.image_base_link

    };
  },

  methods: {
    accountPurpose() {
      axios
        .get("/api/debit/purpose/list")
        .then((resp) => {
          console.log(resp);
          if (resp.data) {
            this.purposes = resp.data.debit_purposes;
            setTimeout(() => {
              console.log(this.$store.getters.admin.signature);
              if (this.$store.getters.admin.signature) {
                this.form.old_signature = this.$store.getters.admin.signature;
                this.old_signature=true;
              }else{
                  this.old_signature=false;
              }
              this.loading = false;
            }, 1000);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    selectPurpose() {
     let value = this.form.purpose;
      if (value == 1) {
        this.projectList();
      } else if (value == 2) {
        this.bondhonMemberList();
      }else if( value == 3){
         this.investorList();
      }else if(value == 4){
        this.returnInvestorList();
      }else if(value == 5){
        this.billStatementList();
      }
      else if(value == 7){
        this.employeeList();
      }
      else if(value == 12){
        this.loanerList();
      }
      else {
        this.form.admin_id="";
        this.form.investor_id="";
        this.form.loaner_id="";
        this.form.investor_return_id="";
        this.form.project_id="";
        this.form.bill_statement_id="" ;
      }
    },

     loanerList() {
        axios
          .get("/api/loaners")
          .then((resp) => {
            console.log(resp);
            let options = {};
            resp.data.forEach((element) => {
              options[element.id] = element.name + "-" + element.mobile_no;
            });
            Swal.fire({
              title: "Select a Loaner",
              input: "select",
              inputOptions: options,
              inputPlaceholder: "Select One",
              showCancelButton: true,
            }).then((result) => {
              if (result.value) {
                this.form.loaner_id = result.value;
              } else {
                this.form.purpose = "";
                this.form.loaner_id = "";
              }
            });
          })
        
      },


     projectList() {
      axios
        .get("/api/list/project")
        .then((resp) => {
        //  console.log(resp);
          let options = {};
          resp.data.projects.data.forEach((element) => {
            options[element.id] = element.name + "-" + element.place;
          });
          Swal.fire({
            title: "Select a project",
            input: "select",
            inputOptions: options,
            inputPlaceholder: "Select One",
            showCancelButton: true,
          }).then((result) => {
            if (result.value) {
              this.form.project_id = result.value;
            } else {
              this.form.purpose = "";
              this.form.project_id = "";
            }
          });
        })
    },

      bondhonMemberList() {
      axios
        .get("/api/member/list")
        .then((resp) => {
          console.log(resp);
          let options = {};
          resp.data.admins.data.forEach((element) => {
            options[element.id] = element.name + "-" + element.phone;
          });
          Swal.fire({
            title: "Select Member",
            input: "select",
            inputOptions: options,
            inputPlaceholder: "Select One",
            showCancelButton: true,
          }).then((result) => {
            if (result.value) {
              this.form.admin_id = result.value;
              Swal.fire({
                title: "Select Profit Month",
                input: "select",
                inputOptions: this.months,
                inputPlaceholder: "Select One",
                showCancelButton: true,
              }).then((month) => {
                if (month.value) {
                  this.form.month = month.value;
                } else {
                  this.form.month = "";
                }
              });
            } else {
              this.form.purpose = "";
              this.form.admin_id = "";
            }
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },


    employeeList() {
      axios
        .get("/api/employee/list")
        .then((resp) => {
          console.log(resp);
          let options = {};
          resp.data.forEach((element) => {
            options[element.id] = element.name + "-" + element.designation;
          });
          Swal.fire({
            title: "Select a employee",
            input: "select",
            inputOptions: options,
            inputPlaceholder: "Select One",
            showCancelButton: true,
          }).then((result) => {
            if (result.value) {
              this.form.employee_id = result.value;
            } else {
              this.form.purpose = "";
              this.form.employee_id = "";
            }
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    billStatementList() {
      axios
        .get("/api/bill/statement/list")
        .then((resp) => {
          console.log(resp)
          let options = {};
          resp.data.bills.forEach((element) => {
            options[element.id] = element.name;
          });
          Swal.fire({
            title: "Select  bill",
            input: "select",
            inputOptions: options,
            inputPlaceholder: "Select One",
            showCancelButton: true,
          }).then((result) => {
            if (result.value) {
              this.form.bill_statement_id = result.value;
            } else {
              this.form.purpose = "";
              this.form.bill_statement_id = "";
            }
          });
        })

    },

    addDebit() {

    if(!this.old_signature){
        this.save();
    }
      console.log(this.form.signature);
      this.form
        .post("/api/debit/store")
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.$router.push({ name: "debit" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 2000,
            });
          } else {
            this.error = "some thing went to wrong";
          }
        })

    },

    investorList() {
      axios
        .get("/api/company/investor/list")
        .then((resp) => {
          console.log(resp);
          let options = {};
          resp.data.forEach((element) => {
            options[element.id] = element.name + "-" + element.mobile_no;
          });
          Swal.fire({
            title: "Select a Investor",
            input: "select",
            inputOptions: options,
            inputPlaceholder: "Select One",
            showCancelButton: true,
          }).then((result) => {
            if (result.value) {
              this.form.investor_id = result.value;

              Swal.fire({
                title: "Select Profit Month",
                input: "select",
                inputOptions: this.months,
                inputPlaceholder: "Select One",
                showCancelButton: true,
              }).then((month) => {
                if (month.value) {
                  this.form.month = month.value;
                } else {
                  this.form.month = "";
                }
              });
            } else {
              this.form.purpose = "";
              this.form.investor_id = "";
            }
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },


    returnInvestorList() {
      axios
        .get("/api/company/investor/list")
        .then((resp) => {
          console.log(resp)
          let options = {};
          resp.data.forEach((element) => {
            options[element.id] = element.name + "-" + element.mobile_no;
          });
          Swal.fire({
            title: "Select Investor",
            input: "select",
            inputOptions: options,
            inputPlaceholder: "Select One",
            showCancelButton: true,
          }).then((result) => {
            if (result.value) {
              this.form.investor_return_id = result.value;
            } else {
              this.form.purpose = "";
              this.form.investor_return_id = "";
            }
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },


    //method initial for  get current date
    pDate() {
      //current date
      let d = new Date();

      //current mount
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
    },

    save() {
      var _this = this;
      var png = _this.$refs.signature.save();
      this.form.signature = png;
    },
    clear() {
      var _this = this;
      _this.$refs.signature.clear();
      this.form.signature_write = false;
    },
    sigantureFocus() {
      let element = document.getElementById("signatur-pad");
      element.classList.add("focus-signature");
    },
    checkOldSignature(){
      if( this.old_signature.length <= 0){
        alert("You Did Not Write Any Signature Of Our Records");
        return;
      }else{
         this.old_signature_preview=true;
      }
    }
  },
  mounted() {
    this.pDate();
  },
  components: {
    sig,
  },
  watch:{
    old_signature:function(value){
      if(value==false){
        this.form.old_signature="";
        console.log(value);
      }

    }
  }
};
</script>

<style scoped>
.mb-2 {
  margin-bottom: 5px !important;
}
#signatur-pad {
  height: 300px;
}
</style>
