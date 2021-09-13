<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link
            :to="{ name: 'sell_center_sale' }"
            class="btn btn-primary"
            ><i class="fa fa-arrow-left"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">sale</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title">Add Sale</h3>
              </div>
              <div class="box-body">
                <div class="form-group">
                  <label>Product Code </label>
                  <input
                    v-model="form.product_code"
                    type="text"
                    name="product_code"
                    class="form-control"
                    autofocus
                    autocomplete="off"
                    placeholder="type product code"
                  />
                </div>
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
                    <label>Price</label>
                    <input
                      v-model="form.price"
                      type="number"
                      name="price"
                      class="form-control"
                      required
                      placeholder="price"
                    />
                  </div>
                   
                  <div class="form-group">
                     <label for="quantity_type"> Quantity Type</label>
                     <select name="quantity_type"
                       required
                       v-model="form.quantity_type"
                       class="form-control">
                       <option  value="pice">pice</option>
                       <option value="gm">gm</option>
                       <option value="kg">kg</option>
                       <option value="liter">liter</option>
                     </select>
                  </div>

                  <div class="form-group">
                    <label>Quantity/Item</label>
                    <input
                      v-model="form.quantity"
                      type="numer"
                      name="quantity"
                      class="form-control"
                      required
                    />
                  </div>
                   <div class="form-group">
                    <label>Amount</label>
                    <input
                      v-model="form.amount"
                      type="text"
                      name="amount"
                      class="form-control"
                      readonly
                    />
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
  components: { navbar },
  name: "Add",
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  },
  data() {
    return {
      form: new Form({
        product_code: "",
        price: 0,
        quantity: 0,
        quantity_type:"pice",
        amount: 0,
      }),
      loading: true,
      error: "",
    };
  },

  methods: {
    add() {
      this.form
        .post("/api/supplier/add", {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          //   console.log(resp)
          if (resp.data.status == "SUCCESS") {
            this.$router.push({ name: "supplier" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
          } else {
            this.error = "some thing want to wrong";
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
