<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <a  @click="goBack()" class="btn btn-primary"
            ><i class="fa fa-arrow-left"></i
          ></a>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">debit credit statement </li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title">Add  Statement </h3>
              </div>
              <div class="box-body">
                <form
                  @submit.prevent="addStatement"
                  @keydown="form.onKeydown($event)"
                  enctype="multipart/form-data"
                >
                  <div class="alert-danger alert" v-if="error">
                    {{ error }}
                  </div>
                    <div class="form-group">
                        <label> Name <b class="text-danger">*</b></label>
                        <input
                          v-model="form.name"
                          type="text"
                          name="name"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('name') }"
                          autofocus
                          autocomplete="off"
                          placeholder="Ex: Internet Bill"
                        />
                        <has-error :form="form" field="name"></has-error>
                      </div>
                  
                    <div class="form-group">
                        <label>Statement Type </label>
                         <select name="type" required v-model="form.type"  class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('type'),
                          }">
                          <option disabled>select one</option>
                          <option value="debit">Debit</option>
                          <option value="credit">Credit</option>
                          </select>
                        <has-error
                          :form="form"
                          field="type"
                        ></has-error>
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
import navbar from "../Navbar.vue";
Vue.component(HasError.name, HasError);
export default {
  components:{
    navbar
  },
  data() {
    return {
      form: new Form({
        name: "",
        type:'select one',
      }),
      error: "",
    };
  },

  methods: {

    goBack(){
      window.history.back()
    },
    addStatement() {
      if (this.form.type=='select one') {
        alert('selecet statement type');
        return ;
      }
      this.form
        .post("/api/sellcenter/bill/statement/add")
        .then((resp) => {
          // console.log(resp);
          if (resp.data.status == "OK") {
            window.history.back();
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-right",
              duration: 4000,
            });
          } else {
            this.error = "something went to wrong";
          }
        })
      
    },
  },
};
</script>

<style scoped>
.mb-2 {
  margin-bottom: 5px !important;
}
</style>
