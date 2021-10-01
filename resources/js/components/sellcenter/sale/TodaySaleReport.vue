<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
       <div class="order_statistic row" >

        <a  @click="back" style="padd" class="statistic_item" >
           <h3> <i class="fa fa-arrow-left"></i>Back </h3> 
         </a>
        <router-link class="statistic_item" :to="{name:'today_sales_report'}" >
           <h2>{{ today_profit }}</h2> 
           <p>Today Sale Report</p>
          </router-link>
        <router-link class="statistic_item" :to="{name:'yesterday_sales_report'}" >
          <h2>{{ yesterday_profit }}</h2>
          <p>Yesterday Sale Report </p>
           </router-link>
        <router-link class="statistic_item" :to="{name:'this_week_sales_report'}" >
          <h2>{{ this_week_profit }}</h2>
          <p>  This Week Sale Report </p>
           </router-link>
        <router-link class="statistic_item" :to="{name:'this_month_sales_report'}" >
           <h2>{{ this_month_profit }}</h2>
           <p>This Month Sale Report</p>
            </router-link>
        <router-link class="statistic_item" :to="{name:'total_sales_report'}" >
           <h2>{{ total_profit }}</h2>
           <p>Total  Sale Report</p>
            </router-link>

       </div>


      </section>
      <section class="content">
          <div class="row">
            <div class="col-lg-12 col-md-12 ">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                         <h4> Sales Reports</h4>
                </div>
                <div class="box-body">
                  <table class="table table-striped text-center table-hover table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product</th>
                        <th scope="col">Purchase Price</th>
                        <th scope="col">Sale Item</th>
                        <th scope="col">Sale Amount</th>
                        <th scope="col">Profit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr
                        v-for="(item, index) in today_sales_products"
                        v-else
                        :key="index"
                      >
                        <td scope="row">{{ index + 1 }}</td>
                        <td>
                            {{ item.product.name }}-{{ item.product.code }}
                            <br>
                          <img
                            :src="item.product.image ? basePath+item.product.image :basePath+ 'images/no_image.jpg'"
                             width="50px" height="50px"
                            alt="product image"
                          />
                        </td>
                      
                          <td>{{ (purchasePrice(item.product.purchase_items) * parseFloat(item.quantity)).toFixed(2) }}</td>
                          <td>{{ parseFloat(item.quantity) }}</td>
                        <td>{{ item.amount }}</td>
                         <td>{{ (parseInt(item.amount) - ( purchasePrice(item.product.purchase_items) * parseFloat(item.quantity))).toFixed(2) }}  </td>
                    
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>
      </section>
    </div>
  </div>
</template>

<script>

import navbar from "../Navbar";

export default {
  created() {
    this.salesList();
  },
  data() {
    return {
      today_sales_products: '',
      this_month_profit: '',
      this_week_profit: '',
      today_profit: '',
      yesterday_profit: '',
      total_profit: '',
      loading: true,
      basePath: this.$store.state.image_base_link ,
    };
  },
  methods: {
    salesList() {
      axios.get("/api/sellcenter/sale/reports/analysis")
        .then((resp) => {
          console.log(resp);
          this.today_sales_products = resp.data.today_sales_products;
          this.today_profit = resp.data.today_profit;
          this.yesterday_profit = resp.data.yesterday_profit;
          this.this_week_profit = resp.data.this_week_profit;
          this.this_month_profit = resp.data.this_month_profit;
          this.total_profit = resp.data.total_profit;
          this.loading=false ;
        })
    },


   purchasePrice(items){
       let price = 0 ;
       items.forEach(item => {
           price += parseFloat(item.price) ;
       });
       let  average_price = price / items.length  ;
       return average_price.toFixed(2)  ;
   },


   back(){

       return window.history.back();
   }

  },
  components: {
    navbar,
  },
};
</script>
