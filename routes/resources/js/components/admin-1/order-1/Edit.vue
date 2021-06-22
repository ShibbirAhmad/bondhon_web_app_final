<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{name:'order'}" class="btn btn-primary">
            <i class="fa fa-arrow-right"></i>
          </router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#">
              <i class="fa fa-dashboard"></i>Dashboard
            </a>
          </li>
          <li class="active">Order</li>
        </ol>
      </section>
      <section class="content">
        <h1 v-if="loading">
          <i class="fa fa-spin fa-spinner"></i>
        </h1>
        <form @submit.prevent="add" v-else>
          <div class="row justify-content-center">
            <div class="alert alert-danger alert-dismissible" v-if="error" role="alert">
              {{error}}
              <span
                aria-hidden="true"
                class="close"
                data-dismiss="alert"
                style="color: #fff;"
                aria-label="Close"
              >&times;</span>
            </div>
            <div class="col-lg-4">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">Customer information</h3>
                </div>
                <div class="box-body">
                  <div class="form-group">
                    <label>Customer_mobile</label>
                    <input
                      type="text"
                      name="customer_mobile"
                      class="form-control"
                      autofocus
                      autocomplete="off"
                      placeholder="Enter customer 11 digit mobile number"
                      v-model="form.customer_mobile"
                      :class="{ 'is-invalid': form.errors.has('customer_mobile') }"
                    />
                    <has-error :form="form" field="customer_mobile"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      autofocus
                      autocomplete="off"
                      placeholder="Name"
                      v-model="form.customer_name"
                      :class="{ 'is-invalid': form.errors.has('customer_name') }"
                    />
                    <has-error :form="form" field="customer_name"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      class="form-control"
                      autofocus
                      autocomplete="off"
                      placeholder="address"
                      v-model="form.customer_address"
                      :class="{ 'is-invalid': form.errors.has('customer_address') }"
                    />
                    <has-error :form="form" field="customer_address"></has-error>
                  </div>

                  <div class="form-group">
                    <label>City</label>
                    <select
                      name="city"
                      id
                      class="form-control"
                      v-model="form.city"
                      @change="selectCity"
                      :class="{ 'is-invalid': form.errors.has('city') }"
                    >
                      <option value>select city</option>
                      <option v-for="city in cities" :value="city.id">{{city.name}}</option>
                    </select>
                    <has-error :form="form" field="city"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Shipping_cost</label>
                    <input
                      type="text"
                      name="shipping_cost"
                      class="form-control"
                      v-model="form.shipping_cost"
                      :class="{ 'is-invalid': form.errors.has('shipping_cost') }"
                    />
                    <has-error :form="form" field="shipping_cost"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Courier</label>
                    <select
                      name="courier"
                      v-model="form.courier"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('courier') }"
                    >
                      <option value>select courier</option>
                      <option v-for="courier in couriers" :value="courier.id">{{courier.name}}</option>
                    </select>
                    <has-error :form="form" field="courier"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Status</label>
                    <select name="status" v-model="form.status" class="form-control">
                      <option value="1">Approved</option>
                      <option value="2">Pending</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-8">
              <div class="box box-success">
                <div class="box-header with-border">
                  <h3 class="box-title">Product information</h3>
                </div>
                <div class="box-body">
                  <div class="form-group">
                    <label>Product</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      autofocus
                      autocomplete="off"
                      placeholder="Enter Product Code"
                      @keyup="searchProduct"
                      v-model="product_code"
                    />
                  </div>

                  <div class="row">
                    <div class="col-lg-12">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Attribute</th>
                            <th>Variant</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>total</th>
                          </tr>
                        </thead>
                        <tbody v-if="products.length>0">
                          <tr v-for="(product,index) in products" :key="index">
                            <td>{{index+1}}</td>
                            <td>
                              {{product.name + '-' +product.product_code}}
                              <input
                                type="hidden"
                                :value="product.id"
                              />
                            </td>
                            <td>
                              <select
                                class="form-control"
                                @change="attribute(index)"
                                v-model="attribute_id"
                              >
                                <option value>select attribute</option>
                                <option
                                  v-if="product.attributes"
                                  v-for="(product_attribute,index) in product.attributes"
                                  :key="index"
                                  :value="product_attribute.attribute.id"
                                >{{product_attribute.attribute.name}}</option>
                              </select>
                            </td>
                            <td>
                              <select
                                class="form-control"
                                @change="variant(index)"
                                v-model="variant_id"
                              >
                                <option value>select attribute</option>
                                <option
                                  v-if="product.variants"
                                  v-for="(product_variant,index) in product.variants"
                                  :key="index"
                                  :value="product_variant.variant.id"
                                >{{product_variant.variant.name}}</option>
                              </select>
                            </td>
                            <td>
                              <input
                                type="number"
                               v-model="form.products[index].quantity"
                                @keyup="quantity(index)"
                                @change="quantity(index)"
                                style="width:50px;"
                                :value="product.quantity"
                              />
                              <span class="badge badge-danger">{{product.stock}}</span>
                            </td>
                       >
                            <td>{{ product.price }}</td>
                             

                            <td>{{product.total }}</td>
                          </tr>
                          <tr v-if="products.length>0">
                            <td colspan="5"></td>
                            <td>Total Amount</td>
                            <td>{{form.total}}</td>
                          </tr>
                          <tr v-if="products.length>0">
                            <td colspan="5"></td>
                            <td>Discout</td>
                            <td>
                              <input
                                class="form-control"
                                @keyup="totalCalculation"
                                v-model="form.discount"
                                placeholder="0"
                              />
                            </td>
                          </tr>
                          <tr v-if="products.length>0">
                            <td colspan="5"></td>
                            <td>Paid</td>
                            <td>
                              <input
                                v-model="form.paid"
                                @keyup="totalCalculation"
                                class="form-control"
                                placeholder="0"
                              />
                            </td>
                          </tr>
                          <tr v-if="products.length>0">
                            <td colspan="5"></td>
                            <td>Shipping_charge</td>
                            <td>{{form.shipping_cost}}</td>
                          </tr>
                          <tr v-if="products.length>0">
                            <td colspan="5"></td>
                            <td>Amoutn due</td>
                            <td>{{form.due}}</td>
                          </tr>
                          <button
                            class="btn btn-success"
                            style="margin-top:12px;"
                            type="submit"
                          >Submit</button>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import { Form, HasError, AlertError } from "vform";
import datePicker from "vue-bootstrap-datetimepicker";

Vue.component(HasError.name, HasError);

export default {
  name: "Add",
  created() {
    this.others();
    this.getDetails();
   
  },
  data() {
    return {
      form: new Form({
        customer_mobile: "",
        customer_name: "",
        customer_address: "",
        city: "",
        courier: "",
        products: [],
        shipping_cost: 0,
        status: 1,
        courier: "",
        total: "",
        discount: "",
        paid: "",
        due: "",
      }),
      attribute_id: "",
      variant_id: "",
      product_code: "",
      city_id: "",
      courier_id: "",
      shipping_cost: "",
      products: [],
      product_attributes: null,
      product_variants: null,
      cities: null,
      couriers: null,
      product_quantity: 1,
      error: "",
      loading:true,
    };
  },

  methods: {
    getDetails() {
      axios
        .get("/order/view/" + this.$route.params.id)
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.form.customer_mobile = resp.data.order.cutomer_phone;
            this.form.customer_name = resp.data.order.customer.name;
            this.form.customer_address = resp.data.order.customer.address;
            this.form.city = resp.data.order.city_id;
            this.form.shipping_cost = resp.data.shipping_cost;
            this.shipping_cost = resp.data.shipping_cost;
            this.form.discount = resp.data.discount;
            this.form.paid = resp.data.paid;
            this.form.due = resp.data.total;
             for (let i = 0; i < resp.data.items.length; i++) {
              this.products.push(resp.data.items[i]);
            }
            this.loading=false;
          } else {
            this.$toasted.show("some thing want to wrong", {
              type: "error",
              position: "top-center",
              duration: 5000,
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.$toasted.show("some thing want to wrong", {
            type: "error",
            position: "top-center",
            duration: 4000,
          });
        });
    },
    add() {
      // this.$Progress.start();
      this.form
        .post("/create/order")
        .then((resp) => {
          // this.$Progress.finish();
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            console.log(resp);
            this.$router.push({ name: "order" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 2000,
            });
          } else {
            this.error = "Some thing want to wrong";
          }
        })
        .catch((error) => {
          console.log(error);
          this.error =
            "Missing submit information. please check all field below and try again";
        });
    },
    others() {
      axios
        .get("/others")

        .then((resp) => {
          if (resp.data.status == "SUCCESS") {
            this.cities = resp.data.cities;
            this.couriers = resp.data.couriers;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    searchProduct() {
      let length = this.product_code.length;
      //  alert(length)
      if ((length = 4)) {
        axios
          .get("/search/product/with/code/" + this.product_code)

          .then((resp) => {
            if (resp.data.status == "SUCCESS") {
              let product = {
                id: "",
                price: "",
                quantity: 1,
                attribute_id: "",
                variant_id: "",
                total: "",
              };
              for (let i = 0; i < resp.data.product.length; i++) {
                this.products.push(resp.data.product[i]);
                product.id = resp.data.product[i].id;
                product.price = resp.data.product[i].price;
                product.total = resp.data.product[i].price;
              }
              this.form.products.push(product);
              this.totalCalculation();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    attribute(index) {
      this.form.products[index].attribute_id = this.attribute_id;
    },
    variant(index) {
      this.form.products[index].variant_id = this.variant_id;
    },
    quantity(index) {
      this.form.products[index].total =
        this.form.products[index].price * this.form.products[index].quantity;

      this.totalCalculation();
    },

    totalCalculation() {
      let products = this.form.products;
      let total = 0;
      for (let i = 0; i < products.length; i++) {
        total += products[i].price * products[i].quantity;
      }
      this.form.total = total;
      this.form.due =
        this.form.total -
        this.form.discount -
        this.form.paid +
        this.form.shipping_cost;
    },
    selectCity() {
      let id = this.form.city;
      let cities = this.cities;
      for (let i = 0; i < cities.length; i++) {
        if (cities[i].id == id) {
          this.form.shipping_cost = cities[i].delivery_charge;
        }
      }
      this.totalCalculation();
    },
  },
  computed: {},
  components: {
    datePicker,
  },
};
//Date picker
</script>

<style scoped>
.mb-2 {
  margin-bottom: 5px !important;
}

.autocomplete {
  max-height: 120px;
  overflow-y: scroll;
  position: absolute;
  width: 100%;
  z-index: 454;
}

.autocomplete li:hover {
  background: #222d32;
  color: #ffffff;
}
</style>
