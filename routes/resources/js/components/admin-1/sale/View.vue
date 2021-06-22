<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header"></section>
      <section class="content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-11">
              <div class="box box-primary">
                <div class="box-header"></div>
                <div class="box-body">
                  <div class="row">
                    <div class="invoice-header">
                      <img
                        class="invoice-logo"
                        :src="'/./public/frontend/image/logo.png'"
                        title="MarketShop"
                        alt="MarketShop"
                      />
                      <div class="address">
                        <p>Office: Houes:36,Road:06,Banarosi Polli,Mirpur-10,Dhaka-1216.</p>
                        <p>EmaiL:support@madinafashionbd.com</p>
                        <p>Mobile:+88 01715-900066</p>
                        <p>Date: {{sale.created_at}}</p>
                        <h3><strong>Sale Invoice</strong></h3>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div v-if="sale.sale_type==1">
                      <div class="col-lg-4 invoice-body" style="margin-left:27px;">
                       <p class="text-bold">Sale Type: Office Sale</p>
                      <p class="text-bold"
                      >Name: {{ sale.name }}</p>
                      <p class="text-bold">
                        Mobile_no:
                        <strong>{{sale.mobile_no}}</strong>
                      </p>
                      <p class="text-bold">
                        Address:
                        <strong>{{sale.address}}</strong>
                      </p>

                    </div>
                    </div>
                    <div v-else>
                      <div class="col-lg-4 invoice-body" style="margin-left:27px;">
                       <p class="text-bold">Sale Type:Company_sale</p>
                      <p class="text-bold" v-if="sale.company"
                      >Company_name: {{sale.company.name }}</p>
                     </div>
                    </div>
                    
                  </div>

                  <div class="row">
                    <div class="col-lg-1"></div>
                    <h1 v-if="loading">
                      <i class="fa fa-spin fa-spinner"></i>
                    </h1>
                    <div class="col-lg-8" v-else>
                      <table class="table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Product_code</th>
                            <th>quntity</th>
                            <th>price &#2547</th>
                            <th>total &#2547</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item,index) in details " :key="index">
                            <td>{{index+1}}</td>
                            <td>
                              {{ item.product.name}}
                           
                            </td>
                            <td>{{ item.product.product_code }}</td>
                            <td>{{item.qty}}</td>
                            <td>{{item.price}}</td>
                            <td>{{item.total}}</td>
                          </tr>

                        <tr>
                            <td colspan="4"></td>
                            <td>
                              <b>Total Amount</b>
                            </td>
                            <td>
                              <b>{{sale.total}}</b>
                            </td>
                          </tr>
                        
                          <tr>
                            <td colspan="4"></td>
                            <td>
                              <b>Paid</b>
                            </td>
                            <td>
                              <b>{{sale.paid}}</b>
                            </td>
                          </tr>
                            <tr>
                            <td colspan="4"></td>
                            <td>
                              <b>Paid_By</b>
                            </td>
                            <td>
                              <b v-if="sale.paid_by==1">Cash</b>
                              <b v-if="sale.paid_by==2">bKash</b>
                              <b v-if="sale.paid_by==3">Bank</b>
                       </td>
                          </tr>
                        

                          <tr>
                            <td colspan="4"></td>
                            <td>
                              <b>Amount Due</b>
                            </td>
                            <td>
                              <b>{{sale.total-sale.paid}}</b>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                 <div class="row">
                    <div class="col-lg-2" style="margin-left:27px;text-align:center;">
                     
                      <h5 style="border-top:2px dotted #000;margin-top:30px;">
                        <strong>Accounts</strong>
                      </h5>
                    </div>
                  </div>

                <div class="bottomBtn">
                    <button class="btn btn-success print"  @click="print">
                      <i class="fa fa-print"></i>
                    </button>
                    <button class="btn btn-warning back" @click="back">
                      <i class="fa fa-arrow-circle-right" ></i>
                    </button>
                  </div> 
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

Vue.component(HasError.name, HasError);
export default {
  name: "Purchase",
  created() {
    //  this.purchaseDetails();
    setTimeout(() => {
      this.purchaseDetails();
    }, 500);
  },
  data() {
    return {
      sale: "",
      details: "",
      error: "",
      loading: true,
      merchant: "",
    };
  },

  methods: {
    purchaseDetails() {
      axios
        .get("/sale/view/" + this.$route.params.id)
        .then((resp) => {
          console.log(resp)
          if (resp.data.status == "SUCCESS") {
            this.sale = resp.data.sale;
            this.details = resp.data.items;
            this.loading = false;
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
    print() {
      window.print();
    },
    back() {
      //   console.log(window.history);
      window.history.back();
    },
  },
  computed: {},
};
</script>

<style scoped>
.mb-2 {
  margin-bottom: 5px !important;
}
.bottomBtn {
  margin-top: 15px;
  margin-left: 20px;
}

@media print {
  .navbar {
    display: none;
  }
  .col-lg-2 {
    width: 20% !important;
  }
  .invoice-header {
    display: block;
  }
  .box {
    border-top: none;
  }
  footer {
    border-top: none !important;
  }
  .bottomBtn {
    display: none;
  }
}
</style>
