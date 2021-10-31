<template>
  <div>
      <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'purchase' }" class="btn btn-primary">
            <i class="fa fa-arrow-right"></i>
          </router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"> <i class="fa fa-dashboard"></i>Dashboard </a>
          </li>
          <li class="active">Purchase</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-10 col-lg-offset-1">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title">Add Purchase</h3>
              </div>
              <div class="box-body">
                <h1 v-if="loading">
                  <i class="fa fa-spin fa-spinner"></i>
                </h1>

                <div class="alert-danger alert" v-if="error">{{ error }}</div>
                <div class="row">
                  <div class="col-lg-3">
                    <div class="form-group">
                      <label>Purchase Date</label>
                      <date-picker
                        autocomplete="off"
                        v-model="purchase_date"
                        :config="options"
                      ></date-picker>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="form-group">
                      <label>Invoice No</label>
                      <input
                        class="form-control"
                        v-model="invoice_no"
                        placeholder="invoice"
                        @keyup="validation"
                        autofocus
                      />
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="form-group">
                      <label>Supplier</label>
                      <select
                        class="form-control"
                        @change="validation"
                        v-model="supplier_id"
                        name="supplier"
                      >
                        <option value>Select Supplier</option>
                        <option
                          v-for="supplier in suppliers"
                          :value="supplier.id"
                          :key="supplier.id"
                        >
                          {{ supplier.name }}-{{supplier.phone}}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="form-group">
                      <label>Document/Memo</label>
                      <input class="form-control" type="file" @change="uploadImage" name="document">
                    </div>
                  </div>
                </div>
                <div class="product_information">
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label>Product Code</label>
                        <input
                          class="form-control"
                          autocomplete="off"
                          name="product"
                          v-model="search"
                          placeholder="type product code"
                          @keyup="autocompleteSearh"
                        />

                        <div class="autocomplete" v-show="automcomplete">
                          <ul class="list-group">
                            <li
                              class="list-group-item"
                              v-for="productItem in productItems"
                              @click="selectedProduct(productItem)"
                            >
                              {{ productItem.code + "-" + productItem.name }}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-2">
                      <div class="form-group">
                        <label>Purchase Price</label>
                        <input
                          v-model="preview_products.price"
                          type="text"
                          readonly
                          name="price"
                          class="form-control"
                          
                        />
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
                          placeholder="quantity"
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
                          @keyup="total"
                        />
                      </div>
                    </div>
                    <div class="col-lg-1">
                      <button
                        class="btn btn-success btn-sm"
                        style="margin-top: 25px"
                        @click="productAdd"
                        :disabled="validationPreview"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
                <div class="product_preview" v-if="products.length > 0">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>total</th>
                        <th>X</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(product, index) in products" :key="index" >
                        <td>{{ index  }}</td>
                        <td>{{ product.code + "-" + product.product_name }}</td>
                        <td>{{ product.price }}</td>
                        <td>{{ product.quantity }}</td>
                        <td>{{ product.total }}</td>
                        <td class="text-danger" @click="cancel(index)">
                          <i class="fa fa-trash"></i>
                        </td>
                      </tr>

                      <tr>
                        <td colspan="3"></td>
                        <td>Total Amount</td>
                        <td>{{ this.AmountTotal }}</td>
                      </tr>
                      <tr>
                        <td colspan="3"></td>
                        <td>Paid</td>
                        <td>
                          <input
                            class="form-control"
                            placeholder="Paid"
                            @keyup="amountDue"
                            v-model="paid"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3"></td>
                        <td>Paid By</td>
                        <td>
                          <select
                            name="debit_from"
                            id=""
                            class="form-control"
                            v-model="paid_by"
                          >
                          <option value="Cash">Cash</option>
                          <option value="Bkash">Bkash </option>
                          <option value="Nagad">Nagad</option>
                          <option value="Bank">Bank</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3"></td>
                        <td>Amount Due</td>
                        <td>{{ due }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              <div class="form-group text-center">
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
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Form, HasError, AlertError } from "vform";
import datePicker from "vue-bootstrap-datetimepicker";
import navbar from "../Navbar.vue"
Vue.component(HasError.name, HasError);

export default {
  name: "Add",
  created() {
    this.pDate();
    this.supplierList();
  },
  data() {
    return {
      purchase_date: "",
      error: "",
      loading: true,
      options: {
        format: "YYYY-MM-DD",
        useCurrent: false,
      },
      supplier_id: "",
      productItems: [],
      automcomplete: false,
      search: "",
      suppliers: "",
      invoice_no: "",
      validationPreview: true,
      submitValidation: true,
      products: [],
      preview_products: {
        product_name: "",
        product_id: "",
        code: "",
        price: 0,
        quantity: 0,
        total: 0,
      },
      AmountTotal: 0,
      paid: 0,
      due: 0,
      paid_by: "Cash",
      memo:""
    };
  },

  methods: {
    add() {
      this.$Progress.start();
      axios
        .post("/add/purchase", {
          purchase_date: this.purchase_date,
          supplier_id: this.supplier_id,
          total: this.AmountTotal,
          paid: this.paid,
          invoice_no: this.invoice_no,
          products: this.products,
          paid_by: this.paid_by,
          memo:this.memo
        })
        .then((resp) => {
          this.$Progress.finish();
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            console.log(resp);
            this.$router.push({ name: "purchase" });
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
          this.error = "something want to wrong";
        });
    },
    supplierList() {
      axios
        .get("/api/supplier/list")
        .then((resp) => {
        //  console.log(resp);
            this.suppliers = resp.data;
            this.loading = false;
        })

    },
    
    autocompleteSearh() {
      this.validation();
      if (this.search.length > 3) {
        axios.get("/api/search/product/by/code/" + this.search)
          .then((resp) => {
            if (resp.data.status == "SUCCESS") {
              let x = resp.data.products.length;
              let i = 0;
              if (x >= 1) {
                this.productItems = [];
                for (i; i < x; i++) {
                  this.productItems.push(resp.data.products[i]);
                }
              } else {
                let no_found = {
                  name: "No product found",
                  code: "404",
                };
                this.productItems = [];
                this.productItems.push(no_found);
              }
            }
          })
        this.automcomplete = true;
      } else {
        this.automcomplete = false;
      }
    },
    selectedProduct(productItem) {
      if (productItem.name == "No product found") {
        alert("please enter product valid code or name");
        this.validation();
        return;
      } else {
        this.automcomplete = false;
        this.preview_products.product_name = productItem.name;
        this.preview_products.product_id = productItem.id;
        this.preview_products.code = productItem.code;
        this.search = productItem.name + "-" + productItem.code;
        this.validation();
      }
    },
    total() {
        
        let quantity = parseFloat(this.preview_products.quantity);

        if (quantity <= 1) {
          quantity = 1;
        }
        let price = parseFloat(this.preview_products.total) / quantity ;
        this.preview_products.price = price.toFixed(2);
        this.validation();
      
    },
    productAdd() {
      this.products.push(this.preview_products);
      this.preview_products = {
        product_id: "",
        code: "",
        product_name: "",
        price: "",
        total: "",
        quantity: "",
      };
      this.search = "";
      this.totalAmount();
      this.amountDue();
      this.validation();
    },
    validation() {
      //console.log(this.preview_products.price)
      if (
        this.preview_products.price.length > 0 &&
        this.preview_products.quantity.length > 0 &&
        this.invoice_no.length > 0 &&
        this.preview_products.product_id &&
        this.search.length > 0 &&
        this.supplier_id 
      ) {
        this.validationPreview = false;
      } else {
        this.validationPreview = true;
        // this.submitValidation=true;
      }
      if (this.products.length > 0 && this.invoice_no.length > 0 && this.supplier_id ) {
        this.submitValidation = false;
      } else {
        this.submitValidation = true;
      }
      // this.submitValidation();
    },

    totalAmount() {
      let i = 0;
      let total = 0;
      let products = this.products;
      for (i; i < products.length; i++) {
        total += products[i].price * products[i].quantity;
      }
      this.AmountTotal = total;
      this.due = total;
    },
    amountDue() {
      let paid = this.paid;
      let total = this.AmountTotal;
      let due = total - paid;

      this.due = due;
    },
    cancel(index) {
      this.products.splice(index, 1);
      this.totalAmount();
      this.amountDue();
      this.validation();
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
     uploadImage(e) {
      var file = e.target.files[0];
    
    if (!file.type.match("image.*")) {
         Swal.fire({
          type:'warning',
          text:'this is not any kind of image',
        });
        this.memo="";
         this.validation();
        return;
      }

        let reader = new FileReader();
        reader.onload = (e) => {
        this.memo = e.target.result;
         this.validation();
        };
      reader.readAsDataURL(file);
     
    },
  },
  components: {
    datePicker,
    navbar
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
