<template>
  <div>
    <navbar></navbar>
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
                        :src="base_url+sellcenter.logo"
                      />
                      <div class="address">
                         <p>{{ sellcenter.name }}</p>
                        <p>Address:{{ sellcenter.address }}</p>
                        <p>Mobile:{{ sellcenter.phone }}</p>
                        <h3><strong>Purchase Invoice</strong></h3>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 invoice-body" style="margin-left:27px;">
                      <p class="text-bold">Suplier_name: {{supplier.name}}</p>
                      <p class="text-bold">Suplier_phone: {{supplier.phone}}</p>
                      <p
                        class="text-bold"
                      >Address: {{ supplier.address }}</p>
                      <p class="text-bold">
                        Invoice_no:
                        <strong>{{purchase.invoice_no}}</strong>
                      </p>
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
                            <th>price</th>
                            <th>total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item,index) in details " :key="index">
                            <td>{{index+1}}</td>
                            <td>
                              {{ item.product.name}}
                           
                            </td>
                            <td>{{ item.product.code }}</td>
                            <td>{{item.quantity}}</td>
                            <td>{{item.price}}</td>
                            <td>{{item.quantity*item.price}}</td>
                          </tr>

                        <tr>
                            <td colspan="3"></td>
                            <td> <strong>={{totalQuantity(details)}}</strong> </td>
                            <td>
                              <b>Total Amount</b>
                            </td>
                            <td>
                              <b>{{purchase.total}}</b>
                            </td>
                          </tr>
                        
                          <tr>
                            <td colspan="4"></td>
                            <td>
                              <b>Paid</b>
                            </td>
                            <td>
                              <b>{{purchase.paid}}</b>
                            </td>
                          </tr>
                        

                          <tr>
                            <td colspan="4"></td>
                            <td>
                              <b>Amount Due</b>
                            </td>
                            <td>
                              <b>{{purchase.total-purchase.paid}}</b>
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
           <div class="row" v-if="purchase.file">
              <div class="col-lg-8">
                <img :src="base_url+purchase.file" alt="" style="max-width: 400px;">
                 <a :href="base_url+purchase.file" download class="btn btn-success">Download</a>
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
import navbar from "../Navbar.vue"
Vue.component(HasError.name, HasError);
export default {
  name: "Purchase",
  created() {
    this.purchaseDetails();
    this.$store.dispatch('sellcenter');
    },
  data() {
    return {
      purchase: "",
      details: "",
      error: "",
      loading: true,
      supplier: "",
      base_url: this.$store.state.image_base_link,

    };
  },

  methods: {
    purchaseDetails() {
      axios
        .get("/details/purchase/" + this.$route.params.id)
        .then((resp) => {
          console.log(resp.data.details);
          if (resp.data.status == "SUCCESS") {
            this.purchase = resp.data.purchase;
            this.details = resp.data.details;
            this.supplier = resp.data.supplier;

            this.loading = false;
          } else {
            this.$toasted.show("something want to wrong", {
              type: "error",
              position: "top-center",
              duration: 5000,
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.$toasted.show("something want to wrong", {
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

    totalQuantity(details){
      console.log(details)
    let total=0;
      details.forEach(element => {
          total+=parseInt(element.quantity)
      });
      return total;
    }
    
  },
  components: {
    navbar 
  },
  computed:{
    sellcenter(){
      return this.$store.getters.sellcenter ;
    }
  }
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
