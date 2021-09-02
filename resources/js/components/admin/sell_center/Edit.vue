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
          <li class="active">sellcenter</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-lg-offset-1">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title">Update Sell Center</h3>
              </div>
              <div class="box-body">
                <form
                  @submit.prevent="update"
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
                      placeholder="sellcenter"
                    />
                    <has-error :form="form" field="name"></has-error>
                  </div>
                  <div class="form-group">
                    <label>Address</label>
                    <input
                      class="form-control"
                      v-model="form.address"
                      :class="{ 'is-invalid': form.errors.has('address') }"
                      type="text"
                      name="address"
                      placeholder="sellcenter location"
                    />
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
                          required
                          placeholder="Ex:Mohammad.."
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
  created(){
      this.getShowrom();
  },
  data() {
    return {
      form: new Form({
        name: "",
        address: "",
        licience: "",
        phone: "",
      }),
      error: "",
    };
  },

  methods: {
    getShowrom() {
      axios.get("/api/sellcenter/edit/item/"+this.$route.params.id)
      .then((resp) => {
          this.form.name = resp.data.sellcenter.name;
          this.form.address = resp.data.sellcenter.address;
          this.form.licience = resp.data.sellcenter.licience;
          this.form.phone = resp.data.sellcenter.phone;
          this.loading = false;
      });
    },
    update() {
      this.form
        .post("/api/sellcenter/update/"+this.$route.params.id, {
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
          }
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
