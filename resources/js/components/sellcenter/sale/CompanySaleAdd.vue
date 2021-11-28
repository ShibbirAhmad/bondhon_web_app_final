<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'sell_center_company_sale' }" class="btn btn-primary">
            <i class="fa fa-arrow-left"></i>
          </router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"> <i class="fa fa-dashboard"></i>Dashboard </a>
          </li>
          <li class="active">Sale</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title">Add Corporate Sale</h3>
              </div>
              <div class="box-body">
                <div class="alert-danger alert" v-if="error">{{ error }}</div>
                <div class="row">
                  <div class="col-lg-2">
                    <div class="form-group">
                      <label>Customer Mobile </label>
                      <small style="float: right"
                        >{{ form.customer_phone.length }}/11</small
                      >
                      <input
                        class="form-control"
                        v-model="form.customer_phone"
                        placeholder="01xxx-xxxxxx"
                        @keyup="searchCustomer"
                        autocomplete="off"
                        type="text"
                        maxlength="11"
                      />
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="form-group">
                      <label>Customer Name</label>
                      <input
                        class="form-control"
                        v-model="form.customer_name"
                        placeholder="Name"
                        @keyup="finalValidation"
                      />
                    </div>
                  </div>

                  <div class="col-lg-3">
                    <div class="form-group">
                      <label>Address</label>
                      <input
                        class="form-control"
                        v-model="form.customer_address"
                        placeholder="address"
                        @keyup="finalValidation"
                      />
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3">
                    <label for="courier"> Select Courier </label>
                    <select
                      class="form-control"
                      required
                      v-model="form.courier"
                    >
                      <option
                        v-for="(courier, index) in couriers"
                        :value="courier.name"
                        :key="index"
                      >
                        {{ courier.name }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="product_information">
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label>Product code</label>
                        <input
                          class="form-control"
                          autocomplete="off"
                          name="product"
                          v-model="search"
                          placeholder="type product code"
                          @keyup="productSearch"
                        />

                        <div class="autocomplete" v-show="automcomplete">
                          <ul class="list-group">
                            <li
                              class="list-group-item"
                              v-for="productItem in productItems"
                              @click="selectedProduct(productItem)"
                              :key="productItem.id"
                            >
                              {{ productItem.code + "-" + productItem.name }}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-2">
                      <div class="form-group">
                        <label>Quantity</label>
                        <input
                          v-model="preview_products.quantity"
                          type="text"
                          name="quantity"
                          class="form-control"
                          autocomplete="off"
                          @keyup="total"
                          id="product_quanitty"
                        />
                      </div>
                    </div>
                    <div class="col-lg-2">
                      <div class="form-group">
                        <label>Price</label>
                        <input
                          v-model="preview_products.price"
                          type="text"
                          ref="price"
                          name="price"
                          class="form-control"
                          autocomplete="off"
                          placeholder="price"
                          @keyup="total"
                        />
                      </div>
                    </div>

                    <div class="col-lg-2">
                      <div class="form-group">
                        <label>Total</label>
                        <input
                          v-model="preview_products.total"
                          type="text"
                          name="total"
                          class="form-control"
                          autocomplete="off"
                          placeholder="total"
                          readonly
                        />
                      </div>
                    </div>
                    <div class="col-lg-1">
                      <button
                        class="btn btn-success btn-sm"
                        style="margin-top: 25px"
                        @click="productAdd"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  <div v-if="preview_products.price" class="row">
                    <div class="col-lg-4 col-md-4">
                      <div class="form-group">
                        <label for="size">Size(optional)</label>
                        <select
                          v-model="preview_products.size"
                          class="form-control"
                        >
                          <option disabled>Select Size</option>
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value="XL">XL</option>
                          <option value="XXL">XXL</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-4">
                      <label for="color">Color(Optional)</label>
                      <input
                        type="text"
                        placeholder="write color"
                        v-model="preview_products.color"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div class="product_preview" v-if="form.products.length > 0">
                  <table class="table table-striped table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>size</th>
                        <th>color</th>
                        <th>quantity</th>
                        <th>price</th>
                        <th>total</th>
                        <th>X</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(product, index) in form.products"
                        :key="index"
                      >
                        <td>{{ index + 1 }}</td>
                        <td>
                          {{ product.code + "-" + product.product_name }}
                        </td>

                        <td>{{ product.size }}</td>
                        <td>{{ product.color }}</td>
                        <td>{{ product.quantity }}</td>
                        <td>{{ product.price }}</td>

                        <td>{{ product.total }}</td>
                        <td class="text-danger" @click="cancel(index)">
                          <i class="fa fa-trash"></i>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="4"></td>
                        <td>
                          <strong> = {{ totalQuantity() }} </strong>
                        </td>
                        <td>Total Amount</td>
                        <td>{{ this.form.AmountTotal }}</td>
                      </tr>
                      <tr>
                        <td colspan="5"></td>
                        <td>Shipping Cost </td>
                        <td> <input type="number" @keyup="totalAmount" class="form-control" v-model="form.shipping_cost"> </td>
                      </tr>
                      <tr>
                        <td colspan="5"></td>
                        <td>Paid</td>
                        <td>
                          <input
                            class="form-control"
                            placeholder="Paid"
                            @keyup="amountDue"
                            v-model="form.paid"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colspan="5"></td>
                        <td>Discount</td>
                        <td>
                          <input
                            class="form-control"
                            placeholder="Paid"
                            @keyup="totalAmount"
                            v-model="form.discount"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td colspan="5"></td>
                        <td>Paid by</td>
                        <td style="display: flex">
                          <select class="form-control" v-model="form.paid_by">
                            <option value="Cash">Cash</option>
                            <option value="Bkash">Bkash</option>
                            <option value="Nagad">Nagad</option>
                            <option value="Bank">Bank</option>
                          </select>
                          <button
                            v-if="
                              form.paid > 0 && form.partials_payment_amount <= 0
                            "
                            title="Partials paymnet"
                            class="btn btn-sm btn-info"
                            @click="partialsPayment"
                          >
                            PP
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="5"></td>
                        <td>Amount Due</td>
                        <td>{{ form.due }}</td>
                      </tr>
                       <tr>
                        <td colspan="5"></td>
                        <td>Order Note(optional) </td>
                        <td> <input type="text" class="form-control" v-model="form.comment"> </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <br />
                <button
                  :disabled="submitValidation"
                  type="submit"
                  @click="add()"
                  class="btn btn-primary"
                >
                  Submit
                </button>
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
import datePicker from "vue-bootstrap-datetimepicker";
import navbar from "../Navbar.vue";
Vue.component(HasError.name, HasError);

export default {
  created(){
    this.courierList();
  },
  data() {
    return {
      //form submit data
      form: new Form({
        type: 2,
        customer_name: "",
        customer_phone: "",
        customer_address: "",
        comment:'',
      //multiple product data
        products: [],
        courier:'',
        shipping_cost: 0,
        AmountTotal: 0,
        paid: 0,
        due: 0,
        discount:0,
        paid_by: 'Cash',
        invoice_no: "",
        partials_paid_by:"",
        partials_payment_amount:0
      }),
      couriers: "",
      companies: "",
      balance:[
       "Cash",
       "Bkash",
       "Nagad",
       "Bank"
      ],
      error:"",
      //store product item from to get db when user type product code or product name
      productItems: [],
      //auto complete
      automcomplete: false,
      search: "",
      //for chck product reltaed property validation
      validationPreview: true,
      submitValidation: true,
      //first store product as obejct, when user select a sepecific product from auto complete serach box
      //and this object pust form.product arraw
      preview_products: {
        product_name: "",
        product_id: "",
        code: "",
        price: "",
        quantity: "",
        size: "",
        color: "",
        total: "",
        stock:''
      },
    };
  },

  methods: {
    courierList() {
      axios
        .get("/api/sellcenter/courier/list")
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.couriers = resp.data.couriers.data;
          }
        })

    },
    //method initial for add sale
    add() {
     this.$Progress.start();
      this.form
        .post("/api/sell/center/company/sale/store")
        .then((resp) => {
          this.$Progress.finish();
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            console.log(resp);
            this.$router.push({ name: "sell_center_company_sale" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
          } else {
            this.error = "dont saved data. please try again";
          }
        })
        .catch((error) => {
          this.$Progress.finish();
          console.log(error);
          this.error = "something  went  to wrong";
        });
    },

    //method initial for get product data when admin type product code or name
    productSearch() {
      let length = this.search.length;
      this.validation();

      if (length >= 4) {
        axios
          .get("/api/sellcenter/search/product/for/company/sale/" + this.search)
          .then((resp) => {
            console.log(resp)
            if(resp.data.product){
                let product=resp.data.product;
                this.preview_products.product_name = product.name;
                this.preview_products.product_id = product.id;
                this.preview_products.code = product.code;
                this.preview_products.stock=product.stock;
                this.preview_products.price=product.price;
                this.preview_products.quantity=1;
                this.preview_products.total=parseInt(product.price)*parseInt(1);
                document.getElementById('product_quanitty').focus();
                this.search = product.code + "-" + product.name;
                this.validationPreview=false
            }else{
                 this.$toasted.show(`${this.search}-Not Found`, {
                  type: "error",
                  position: "top-center",
                  duration: 4000,
                });
            }

          })
       
        this.automcomplete = true;
      } else {
        this.automcomplete = false;
      }
    },

    //method initial for set product item when admin select specific product item
    selectedProduct(productItem) {

      if (productItem.name == "No product found") {
        alert("please enter product valid code or name");
        this.validation();
        return;
      }else if(productItem.stock<=0){
        alert('This Product All ready stock out')
      }
      else {
        this.automcomplete = false;
        this.preview_products.product_name = productItem.name;
        this.preview_products.product_id = productItem.id;
        this.preview_products.code = productItem.code;
        this.preview_products.stock=productItem.stock;
        this.search = productItem.code + "-" + productItem.name;
        this.validation();
      }
    },

    //method initial for calulate sub total  amount, prodict price*quantity
    total() {

      if( parseInt(this.preview_products.quantity) > parseInt(this.preview_products.stock)){
           this.$toasted.show(`product max quantity ${this.preview_products.stock}`, {
              type: "error",
              position: "top-center",
              duration: 3000,
          });
         this.preview_products.quantity=this.preview_products.stock;
         // this.$refs.quantity.focus();

      }
      if (this.preview_products.price.length <= 0) {
        this.$toasted.show("sorry! price filed fille up first", {
          type: "error",
          position: "top-center",
          duration: 3000,
        });
        this.$refs.price.focus();

        return;
      } else {
        let price = this.preview_products.price;
        let quantity = this.preview_products.quantity;

        if (quantity <= 1) {
          quantity = 1;
        }
        let total = parseInt(price) * parseInt(quantity);
        this.preview_products.total = parseInt(total);

      }
      this.validation();
    },

    //method initial for product add on form.prodcut arraw
    productAdd() {
      this.form.products.push(this.preview_products);
      this.preview_products = {
        product_id: "",
        code: "",
        product_name: "",
        price: "",
        size: "",
        color: "",
        total: "",
        quantity: "",
        stock:'',
      };
      this.search = "";
      this.totalAmount();
      this.amountDue();
      this.validation();
      this.finalValidation();
    },

    //method initial for validation product data
    validation() {
      //console.log(this.preview_products.price)
      if (
        this.preview_products.price.length > 0 &&
        this.preview_products.quantity.length > 0 &&
        this.preview_products.product_id &&
        this.search.length > 0 &&
         parseInt(this.preview_products.quantity) <= parseInt(this.preview_products.stock)
      ) {this.validationPreview = true;
        return;
      } else {
        this.validationPreview = true;
        return;
        // this.submitValidation=true;
      }
    },

    finalValidation() {
      if (this.form.products.length <= 0) {
        this.submitValidation = true;
        return;
      }

      if (this.form.customer_name.length <= 0) {
        this.submitValidation = true;
        return;
      }
      if ( this.form.customer_phone.length != 11) {
        this.submitValidation = true;
        return;
      }
      if ( this.form.customer_address.length <= 0) {
        this.submitValidation = true;
        return;
      }
     this.submitValidation = false;
    },

    totalAmount() {
      let i = 0;
      let total = 0;
      let shipping_cost = parseInt(this.form.shipping_cost) ;
      let products = this.form.products;
      for (i; i < products.length; i++) {
        total += products[i].price * products[i].quantity;
      }
      this.form.AmountTotal = total + shipping_cost ;
      this.form.due = (total + shipping_cost) - this.form.discount  ;
    },
    amountDue() {
      let paid = this.form.paid;
      let total = this.form.AmountTotal   ;
      let due = parseInt(total) - (parseInt(paid)+parseInt(this.form.discount));

      this.form.due = due;
    },
    cancel(index) {
      this.form.products.splice(index, 1);
      this.totalAmount();
      this.amountDue();
      this.validation();
      this.finalValidation();
    },
    pDate() {
      let d = new Date();

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
      this.purchase_date = output;
    },


    partialsPayment(){
      let inputOptions={};
     this.balance.forEach(ele=>{
      if(ele != this.form.paid_by){
        inputOptions[ele] = ele ;
      }

    })
      Swal.fire({
         title: 'Partials Payment',
         input: 'select',
         inputOptions: inputOptions,
          showCancelButton: true,
      }).then(result=>{
        if(result.value){
          Swal.fire({
            title: 'Amount',
            input: 'number',
            showCancelButton: false,
          }).then(amount=>{
            if(amount.value){
               this.$toasted.show(`partials payment.${result.value} : ${amount.value}`, {
                type: "info",
                position: "top-center",
                duration: 4000,
             });
              this.form.partials_paid_by=result.value;
              this.form.partials_payment_amount=amount.value;
              console.log(typeof amount.value)
              this.form.paid=parseInt(amount.value)+parseInt(this.form.paid);
              this.form.due=parseInt(this.form.AmountTotal)-parseInt(this.form.paid);
          }
          })
        }
      })
    },
     //method initial search customer
    searchCustomer() {
     // console.log('serach')
      if (this.form.customer_phone.length == 11) {
        axios .get( "/api/search/sell/center/customer/" + this.form.customer_phone)
          .then((resp) => {
            console.log(resp)
            //when com data from t resp
             if (resp.data.customer) {
                this.form.customer_name = resp.data.customer.customer_name,
                this.form.customer_address = resp.data.customer.customer_address;
                 this.$toasted.show('Registered customer', {
                      type: "info",
                      position: "top-center",
                      duration: 3000,
                  });
              }else{
                 this.$toasted.show('New Customer', {
                    type: "info",
                    position: "top-center",
                    duration: 3000,
                });
              }
              this.finalValidation();

          })
     
      }
    },
    totalQuantity(){
      let qty=0;
      this.form.products.forEach(ele=>{
        qty += parseInt(ele.quantity);
      })
      return qty;
    }
  },

  components: {
    datePicker,
    navbar
  },
};
//Date picker
</script>

<style >
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
