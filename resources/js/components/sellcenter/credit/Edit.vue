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
          <li class="active">Credit</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title">Edit Credit</h3>
              </div>
              <div class="box-body">
                <h1 v-if="loading"><i class="fa fa-spinner fa-spin"></i></h1>
                <form
                  v-else
                  @submit.prevent="update"
                  @keydown="form.onKeydown($event)"
                  enctype="multipart/form-data"
                >
                  <div class="alert-danger alert" v-if="error">
                    {{ error }}
                  </div>
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
                  <div class="form-group">
                    <label>Purpose</label>
                    <input
                      type="text"
                      name="purpose"
                      v-model="form.purpose"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('purpose') }"
                      autocomplete="off"
                    />
                    <has-error :form="form" field="purpose"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Amount</label>
                    <input
                      type="text"
                      name="amount"
                      v-model="form.amount"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('amount') }"
                      autocomplete="off"
                    />
                    <has-error :form="form" field="amount"></has-error>
                  </div>

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
                    <i class="fa fa-spin fa-spinner" v-if="form.busy"></i>Save
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
  name: "Add",
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 100);
  },
  components:{
    navbar
  },
  data() {
    return {
      form: new Form({
        purpose: "",
        amount: "",
        date: "",
        comment: "",
         credit_in: "",
      }),

      loading: true,
      error: "",

      //for date picker
      options: {
        format: "YYYY-MM-DD",
        useCurrent: false,
      },
    };
  },

  methods: {
    //mehod initial for get credit data
    edit() {
      axios
        .get("/api/sellcenter/credit/edit/" + this.$route.params.id)
        .then((resp) => {
          console.log(resp);
          //onely success resp
          if (resp.data.status == "SUCCESS") {
            this.form.date = resp.data.credit.date;
            this.form.purpose = resp.data.credit.purpose;
            this.form.comment = resp.data.credit.comment;
            this.form.amount = resp.data.credit.amount;
            this.form.credit_in = resp.data.credit.credit_in;
          }
          //other wise success resp
          else {
            this.error = "something went to wrong";
          }
        })

    },

    //method inital for update credit
    update() {
      this.form
        .post("/api/sellcenter/credit/update/" + this.$route.params.id)
        .then((resp) => {
          //only success resp
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
  },
  mounted() {
    this.edit();
  },
};
</script>

<style scoped>
.mb-2 {
  margin-bottom: 5px !important;
}
</style>
