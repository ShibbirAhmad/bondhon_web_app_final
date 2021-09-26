<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'team_member' }" class="btn btn-primary"
            ><i class="fa fa-arrow-right"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Employee</a>
          </li>
          <li class="active">edit</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title">Edit  Employee Information</h3>
              </div>
              <div class="box-body">
                <h1 v-if="loading"><i class="fa fa-spinner fa-spin"></i></h1>
                <form
                  v-else
                  @submit.prevent="updateEmployee"
                  @keydown="form.onKeydown($event)"
                  enctype="multipart/form-data"
                >
                  <ul class="list-group" v-if="errors">
                    <li
                      class="list-group-item"
                      v-for="(error, index) in errors"
                      :key="index"
                    >
                      {{ error.name }}
                    </li>
                  </ul>
                  
            

                  <div class="form-group">
                    <label>Name</label>

                    <input
                      v-model="form.name"
                      type="text"
                      name="name"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('name') }"
                      autofocus
                      autocomplete="off"
                      placeholder="name"
                    />

                    <has-error :form="form" field="name"></has-error>
                  </div>
    


                  <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="text" class="form-control" :class="{ 'is-invalid': form.errors.has('phone') }"
                      autocomplete="off"
                      autofocus
                      v-model="form.phone"
                      name="phone"
                 
                    />
                    <has-error :form="form" field="phone"> </has-error>
                  </div>

         

                  <div class="form-group">
                    <label for="designation">Designation</label>

                    <textarea placeholder="write title about this member"
                      v-model="form.designation"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('designation') }"
                      name="designation"
                      rows="2"
                    ></textarea>

                    <has-error :form="form" field="designation"> </has-error>
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
import navbar from "../Navbar.vue";
Vue.component(HasError.name, HasError);

export default {
  components:{
    navbar
  },
  created() {
   this.getEmployee();
  },
  data() {
    return {
      form: new Form({
        name: "",
        designation: "",
        phone: "",
      }),
      loading: true,
      errors: [],
    };
  },

  methods: {
    getEmployee(){
      axios.get('/api/sellcenter/employee/edit/'+this.$route.params.id)
      .then(resp => {
         this.form.name = resp.data.employee.name ;
         this.form.phone = resp.data.employee.phone ;
         this.form.designation = resp.data.employee.designation ;
         this.loading=false ;
      })
    },
    updateEmployee() {
      this.form
        .post("/api/sellcenter/employee/update/"+this.$route.params.id, {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.success == "OK") {
            this.$router.push({ name: "employee_sell_center" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
          }
        })
        .catch((e) => {
          this.errors = [];
          this.errors.push(e.response.data.errors);
        });
    },


  },

};
</script>

<style scoped>
.mb-2 {
  margin-bottom: 5px !important;
}
</style>
