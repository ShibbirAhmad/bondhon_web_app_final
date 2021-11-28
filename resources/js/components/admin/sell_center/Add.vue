<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'sell_center' }" class="btn btn-primary"
            ><i class="fa fa-arrow-left"></i>
          </router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">sell center</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title">Add Sell Center</h3>
              </div>
              <div class="box-body">
                <form
                  @submit.prevent="add"
                  @keydown="form.onKeydown($event)"
                  enctype="multipart/form-data"
                >
                  <div class="alert-danger alert" v-if="error">
                    {{ error }}
                  </div>
                  <div class="form-group">
                    <label>Name</label>
                    <input
                      class="form-control"
                      v-model="form.name"
                      :class="{ 'is-invalid': form.errors.has('name') }"
                      type="text"
                      name="name"
                      required
                      placeholder="sell center name"
                    />
                    <has-error :form="form" field="name"></has-error>
                  </div>
                  <div class="form-group">
                    <label>Address/Invoice Address </label>
                     <textarea class="form-control"
                      v-model="form.address"
                      required
                      :class="{ 'is-invalid': form.errors.has('address') }" rows="3"></textarea>
                    <has-error :form="form" field="address"></has-error>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Licience</label>
                        <input
                          class="form-control"
                          v-model="form.licience"
                          :class="{
                            'is-invalid': form.errors.has('licience'),
                          }"
                          type="text"
                          name="licience"
                          placeholder="Ex:l9009d-ds.."
                        />
                        <has-error
                          :form="form"
                          field="licience"
                        ></has-error>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Phone</label>
                        <input
                          class="form-control"
                          v-model="form.phone"
                          :class="{
                            'is-invalid': form.errors.has('phone'),
                          }"
                          type="text"
                          name="phone"
                          required
                          maxlength="11"
                          placeholder="01xxxxxxxxx"
                        />
                        <has-error
                          :form="form"
                          field="phone"
                        ></has-error>
                      </div>
                    </div>

                  </div>
                  <div class="form-group">
                    <div class="row">
                       <div class="col-sm-6">
                      <div class="form-group">
                        <label>Password</label>
                        <input
                          class="form-control"
                          v-model="form.password"
                          :class="{
                            'is-invalid': form.errors.has('password'),
                          }"
                          type="password"
                          name="password"
                          required
                        />
                        <has-error
                          :form="form"
                          field="password"
                        ></has-error>
                      </div>
                    </div>
                      <div class="col-md-6">
                      <div class="form-group">
                        <label>Logo </label>
                        <input
                          class="form-control"
                          type="file"
                          @change="uploadImage"
                          name="image"
                        />
                      </div>
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
Vue.component(HasError.name, HasError);
export default {
  data() {
    return {
      form: new Form({
        name: "",
        address: "",
        licience: "",
        phone: "",
        password: "",
        logo: "",
      }),
      error: "",
    };
  },

  methods: {
    add() {
      this.form
        .post("/api/sellcenter/add", {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.$router.push({ name: "sell_center" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
          } else {
            this.error = "something went to wrong";
          }
        })
       
    },
      uploadImage(e) {
      const file = e.target.files[0];
      this.form.logo = file;
    },
  },
};
</script>

<style scoped>
.mb-2 {
  margin-bottom: 5px !important;
}
</style>
