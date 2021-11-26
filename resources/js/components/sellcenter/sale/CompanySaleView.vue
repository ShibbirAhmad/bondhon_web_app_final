<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header"></section>
      <section class="content">
        <div class="container" id="__container">
          <div class="row justify-content-center">
            <div class="col-lg-11">
              <div class="box box-primary">
                <div class="box-header"></div>
                <div class="box-body">
                  <div class="row print_info_container">
                    <div class="col-md-1 col-sm-1"></div>
                    <div v-if="sales[0]" class="col-md-3 col-sm-5 description">
           
                        <p>
                         Customer Name: <strong >{{ sales[0].customer_name }}</strong>
                        </p>
                        <p>
                          Mobile No: <strong>{{ sales[0].customer_phone }}</strong>
                        </p>
                        <p class="address_line">
                          Address: <strong>{{ sales[0].customer_address }}</strong>
                        </p>

                        <p>
                          Invoice No:
                          <strong >{{
                            sales[0].invoice_no
                          }}</strong>
             
                        </p>
                     
                     <p v-if="sales[0].comment" >{{ sales[0].comment }} </p>
                  
                  
                    </div>

                    <div class="col-md-3 col-sm-3 logo">
                      <p class="m_title"> {{ sellcenter.name }} </p>
                    </div>
                    <div
                      style="margin-left: 27px"
                      class="col-md-4 col-sm-4 address"
                    >
                      <img
                        :src="base_url +sellcenter.logo"
                        class="m_logo"
                      />
                      <p v-html="sellcenter.address" class="address_line" style="margin-top: -10px">
                        
                      </p>
            
                      <p v-if="sales[0]"   >
                        Date:<strong> {{ formatDate(sales[0].created_at) }}</strong>
                      </p>
                    </div>
                    <div class="col-md-1 col-sm-1"></div>
                  </div>

                  <div class="row">
                    <div class="col-lg-1"></div>
                    <h1 v-if="loading">
                      <i class="fa fa-spin fa-spinner"></i>
                    </h1>
                    <div class="col-lg-10" v-else>
                      <table class="table table-bordered table-hover table-striped">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Product Code</th>
                            <th>Quntity</th>
                            <th>Price</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, index) in sales" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>
                              {{ item.product.name }}
                            </td>
                            <td>{{ item.product.code }}</td>
                            <td>{{ item.sale_quantity }}</td>
                            <td>{{ item.price }}</td>
                            <td> {{ item.amount }} </td>
                          </tr>
                  
        
                          <tr>
                            <td colspan="3"></td>
                            <td>
                              <strong> = {{ totalQuantity() }}</strong>
                            </td>
                            <td>
                              <b>Total Amount</b>
                            </td>
                            <td>
                              <b>{{ saleAmount() }}</b>
                            </td>
                          </tr>

                          <tr>
                            <td colspan="4"></td>
                            <td>
                              <b>Discount</b>
                            </td>
                            <td>
                              <b>{{ saleDiscount() }}</b>
                            </td>
                          </tr>

                          <tr>
                            <td colspan="4"></td>
                            <td>
                              <b>Paid</b>
                            </td>
                            <td>
                              <b>{{ sales[0].paid }}</b>
                            </td>
                          </tr>

                          <tr>
                            <td colspan="4"></td>
                            <td>
                              <b>Shipping Cost</b>
                            </td>
                            <td>
                              <b>{{ sales[0].shipping_cost }}</b>
                            </td>
                          </tr>

                          <tr>
                            <td colspan="4"></td>
                            <td>
                              <b>Amount Due</b>
                            </td>
                            <td>
                              <b>{{
                                ( saleAmount()  + sales[0].shipping_cost ) -
                                (saleDiscount() + sales[0].paid ) 
                              }}</b>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>


                  <div class="bottomBtn">
                    <button class="btn btn-success print" @click="print(sales[0].invoice_no)">
                      <i class="fa fa-print"></i>
                    </button>
                    <button class="btn btn-warning back" @click="back">
                      <i class="fa fa-arrow-circle-right"></i>
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
import navbar from "../Navbar.vue"
export default {
 components:{
   navbar
 },
  created() {
    this.saleDetails();
  },
  data() {
    return {
      sales: "",
      sellcenter: "",
      error: "",
      loading: true,
      base_url: this.$store.state.image_base_link,
    };
  },

  methods: {
    saleDetails() {
      axios
        .get("/api/sell/center/company/sale/view/"+this.$route.params.invoice_no)
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.sales = resp.data.sales;
            this.sellcenter = resp.data.sellcenter;
            this.loading = false;
          } else {
            this.$toasted.show("something went to wrong", {
              type: "error",
              position: "top-center",
              duration: 5000,
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.$toasted.show("something went to wrong", {
            type: "error",
            position: "top-center",
            duration: 4000,
          });
        });
    },
    formatDate(date) {
      console.log(date);
      let short_date = date.split(" ")[0];
      let origina_date = short_date.split("-");
      return `${origina_date[2]}-${origina_date[1]}-${origina_date[0]}`;
    },
    print(sale_id) {
      window.open("/api/print/sell/center/sale/invoice/" + sale_id, "_blank");
    },
    back() {
      window.history.back();
    },
    totalQuantity() {
      let total = 0;
      this.sales.forEach((element) => {
          total += parseInt(element.sale_quantity);
      });

      return total;
    },
    saleAmount() {
      let total = 0;
      this.sales.forEach((ele) => {
          total += parseInt(ele.price) * parseInt(ele.sale_quantity);
      });
      return total;
    },
    saleDiscount() {
      let total = 0;
      this.sales.forEach((ele) => {
          total += parseFloat(ele.discount) ;
      });

      return total;
    },
  },

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
.head_title {
  margin-left: 27px;
  margin-top: -12px;
}
.address_line {
  line-height: 15px;
}
p {
  line-height: 11px;
  font-size: 14px;
}
.m_logo {
  margin-top: -30px;
  height: 80px;
}
.m_title {
  margin-top: -15px;
  font-size: 11px;
}
table {
  margin-top: 10px;
}
@media print {
  table {
    margin-top: 0px !important;
  }

  .m_title {
    margin-top: -15px;
    font-size: 10px;
  }
  .navbar {
    display: none;
  }

  .print_info_container {
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    padding: 10px 10px !important;
    margin-top: -15px;
  }
  .col-sm-1 {
    display: none;
  }
  p {
    line-height: 8px;
    font-size: 14px;
  }
  .logo {
    width: 40% !important;
  }

  .description {
    width: 50% !important;
  }
  .col-lg-2 {
    width: 20% !important;
    margin-top: 20px !important;
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
  .address {
    text-align: right;
  }
}
.exchange-memo {
  position: absolute;
  left: 25%;
  top: 43%;
}
</style>