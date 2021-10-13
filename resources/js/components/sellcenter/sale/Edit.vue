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
             
             
              <div class="box-body sale_box">
                <form
                  @submit.prevent="updateSale"
                  enctype="multipart/form-data"
                >
                  <div class="alert-danger alert" v-if="error">
                    {{ error }}
                  </div>

                  <div class="row">
                    <div class="col-md-6 col-xs-6">
                      <div class="form-group">
                        <label for="quantity_type"> Unit Type</label>
                        <select
                          name="quantity_type"
                          required
                          v-model="form.quantity_type"
                          class="form-control"
                        >
                          <option value="pice">pice</option>
                          <option value="gm">gm</option>
                          <option value="kg">kg</option>
                          <option value="liter">liter</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-md-6 col-xs-6">
                      <div class="form-group">
                        <label>Unit</label>
                        <input
                          v-model="form.quantity"
                          type="text"
                          name="quantity"
                          @keyup="amountCalculate"
                          class="form-control"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 col-xs-6">
                      <div class="form-group">
                        <label>Price</label>
                        <input
                          v-model="form.price"
                          type="text"
                          name="price"
                          class="form-control"
                          @keyup="amountCalculate"
                          required
                          placeholder="price"
                        />
                      </div>
                    </div>

                    <div class="col-md-6 col-xs-6">
                      <div class="form-group">
                        <label>Discount</label>
                        <input
                          v-model="form.discount"
                          type="text"
                          name="discount"
                          class="form-control"
                          @keyup="amountCalculate"
                          required
                          placeholder="discount"
                        />
                      </div>
                    </div>
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
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
    this.getSaleItem();
  },
  data() {
    return {
      form: new Form({
        product_id: "",
        price: 0,
        discount: 0,
        quantity: 0,
        quantity_type: "pice",
        amount: 0,
      }),
      products: "",
      loading: true,
      error: "",
    };
  },

  methods: {

    getSaleItem() {
        axios
          .get("/api/sellcenter/sale/item/" + this.$route.params.id)
          .then((resp) => {
            // console.log(resp);
            this.form.product_id = resp.data.sale.sell_center_product_id;
            this.form.price = resp.data.sale.price;
            this.form.discount = resp.data.sale.discount;
            this.form.quantity = resp.data.sale.sale_quantity;
            this.form.quantity_type = resp.data.sale.quantity_type;
            this.form.amount = resp.data.sale.amount;
          });
      
    },
   
   amountCalculate() {
      let price = parseFloat(this.form.price) ;
      let qty = parseFloat(this.form.quantity) ;
      let discount = parseFloat(this.form.discount) ;
      this.form.amount = (price * qty) - discount;
    },

    updateSale() {
      this.form
        .post("/api/sellcenter/sale/update/"+this.$route.params.id, {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          //   console.log(resp)
          if (resp.data.status == "SUCCESS") {
            this.$router.push({ name: "sell_center_sale" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
          } else {
            this.error = "something went to wrong";
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

.search_content {
  width: 95%;
  max-height: 300px;
  position: absolute;
  z-index: 99999;
  overflow-y: auto;
}

.sale_box {
  margin-top: 30px;
}
</style>
