<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'sell_center_credit' }" class="btn btn-primary"
            ><i class="fa fa-arrow-left"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Credit </li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
           <div class="col-lg-10 col-lg-offset-1">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title">Add Credit </h3>
              </div>
              <div class="box-body">
                <form
                  @submit.prevent="addCredit"
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
                              name="purpose"  
                              v-model="form.purpose"
                              class="form-control" 
                              @change="selectPurpose"
                          >
                            <option value="others">others</option>
                            <option value="credit_statement">Credit Statement</option>
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
                        <label>Credit In</label>
                        <select
                          name="credit_in"
                          class="form-control"
                          v-model="form.credit_in"
                          :class="{
                            'is-invalid': form.errors.has('credit_in'),
                          }"
                        >
                          <option value="Cash">Cash</option>
                          <option value="Bkash">
                            Bkash
                          </option>
                          <option value="Nagad">
                            Nagad
                          </option>
                          <option value="Bank">Bank</option>
                        </select>
                        <has-error :form="form" field="credit_in"></has-error>
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
import navbar from "../Navbar.vue"
Vue.component(HasError.name, HasError);
export default {

  data() {
    return {
      form: new Form({
        purpose: "others",
        amount: "",
        date: "",
        comment: "",
        credit_in: "Cash",
        bill_statement_id: "",
        month: "",
      }),
      error: "",
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
      disabled: false,
      base_link:this.$store.state.image_base_link

    };
  },

  methods: {

  selectPurpose() {
     let value = this.form.purpose;
     if(value == "credit_statement"){
        this.billStatementList();
      }
      else {
        this.form.bill_statement_id="";
      }
    },
    

    billStatementList() {
      axios
        .get("/api/sellcenter/bill/statement/list/type/credit")
        .then((resp) => {
          console.log(resp)
          let options = {};
          resp.data.bills.forEach((element) => {
            options[element.id] = element.name;
          });
          Swal.fire({
            title: "Select a credit ",
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


    
    addCredit() {
      this.form
        .post("/api/sellcenter/credit/store")
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.$router.push({ name: "sell_center_credit" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 2000,
            });
          } else {
            this.error = "something went to wrong";
          }
        })

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


  },
  mounted() {
    this.pDate();
  },
   components:{
    navbar
  },

};
</script>

<style scoped>
.mb-2 {
  margin-bottom: 5px !important;
}

</style>
