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
           <p>Today Sale Profit</p>
          </router-link>
        <router-link class="statistic_item" :to="{name:'yesterday_sales_report'}" >
          <h2>{{ yesterday_profit }}</h2>
          <p>Yesterday Sale Profit </p>
           </router-link>
        <router-link class="statistic_item" :to="{name:'this_week_sales_report'}" >
          <h2>{{ this_week_profit }}</h2>
          <p>  This Week Sale Profit </p>
           </router-link>
        <router-link class="statistic_item" :to="{name:'this_month_sales_report'}" >
           <h2>{{ this_month_profit }}</h2>
           <p>This Month Sale Profit</p>
            </router-link>
        <router-link class="statistic_item" :to="{name:'total_sales_report'}" >
           <h2>{{ total_profit }}</h2>
           <p>Total  Sale Profit</p>
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
                        v-for="(item, index) in this_month_sales_products"
                        v-else
                        :key="index"
                      >
                        <td scope="row">{{ index + 1 }}</td>
                        <td>
                            {{ item.name }}-{{ item.code }}
                            <br>
                          <img
                            :src="item.image ? basePath+item.image :basePath+ 'images/no_image.jpg'"
                             width="50px" height="50px"
                            alt="product image"
                          />
                        </td>
                      
                  
                        <td>{{ (purchasePrice(item.purchase_items) * salesQuantity(item.this_month_sales)).toFixed(2) }}</td>
                        <td>{{ salesQuantity(item.this_month_sales) }}</td>
                        <td>{{ salesAmount(item.this_month_sales) }}</td>
                        <td>{{ (salesAmount(item.this_month_sales) - ( purchasePrice(item.purchase_items) * salesQuantity(item.this_month_sales))).toFixed(2) }}  </td>
                    
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
      this_month_sales_products: '',
      this_month_profit: 0,
      this_week_profit: 0,
      today_profit: 0,
      yesterday_profit: 0,
      total_profit: 0,
      loading: true,
      basePath: this.$store.state.image_base_link ,
    };
  },
  components: {
    navbar,
  },
  methods: {
    salesList() {
      axios.get("/api/sellcenter/sale/reports/analysis")
        .then((resp) => {
          console.log(resp);
          this.this_month_sales_products = resp.data.this_month_sales_products;
          this.totalProfit(resp.data.total_sales_products);
          this.thisMonthProfit(resp.data.this_month_sales_products);
          this.thisWeekProfit(resp.data.this_week_sales_products);
          this.yesterdayProfit(resp.data.yesterday_sales_products);
          this.todayProfit(resp.data.today_sales_products);
          this.loading=false ;
        })
    },

   purchasePrice(items){

      if (items) {
        let price = 0 ;
        items.forEach(item => {
            price += parseFloat(item.price) ;
        });
        let  average_price = price / items.length  ;
        return average_price.toFixed(2)  ;
        }
   },

    totalProfit(sales_products){
          if (sales_products) {
             let average_purchase_price =0 ;
             let total_sales_amount =0 ;
             let total_sale_quantity =0 ;

             sales_products.forEach((item)=>{
                   item.total_sales.forEach((sale)=>{
                        total_sales_amount += parseFloat(sale.amount);
                        total_sale_quantity += parseFloat(sale.quantity);
                   });
              });

              sales_products.forEach((item)=>{
                   let purchase_price=0 ;
                   item.purchase_items.forEach((purchase)=>{
                        purchase_price += parseFloat(purchase.price);
                   });
                  average_purchase_price += purchase_price /  item.purchase_items.length
              });

            let total_sale_purchase_price =  average_purchase_price * total_sale_quantity;
            let profit_amount = total_sales_amount - total_sale_purchase_price ;
            this.total_profit = profit_amount.toFixed(2) ;
        
    }
    },


    thisMonthProfit(sales_products){
          if (sales_products) {
             let average_purchase_price =0 ;
             let total_sales_amount =0 ;
             let total_sale_quantity =0 ;

             sales_products.forEach((item)=>{
                   item.this_month_sales.forEach((sale)=>{
                        total_sales_amount += parseFloat(sale.amount);
                        total_sale_quantity += parseFloat(sale.quantity);
                   });
              });

              sales_products.forEach((item)=>{
                   let purchase_price=0 ;
                   item.purchase_items.forEach((purchase)=>{
                        purchase_price += parseFloat(purchase.price);
                   });
                  average_purchase_price += purchase_price /  item.purchase_items.length
              });

            let total_sale_purchase_price =  average_purchase_price * total_sale_quantity;
            let profit_amount = total_sales_amount - total_sale_purchase_price ;
            this.this_month_profit = profit_amount.toFixed(2) ;
        
     }
    },

    thisWeekProfit(sales_products){
         if (sales_products) {
             let average_purchase_price =0 ;
             let total_sales_amount =0 ;
             let total_sale_quantity =0 ;

             sales_products.forEach((item)=>{
                   item.this_week_sales.forEach((sale)=>{
                        total_sales_amount += parseFloat(sale.amount);
                        total_sale_quantity += parseFloat(sale.quantity);
                   });
              });

              sales_products.forEach((item)=>{
                   let purchase_price=0 ;
                   item.purchase_items.forEach((purchase)=>{
                        purchase_price += parseFloat(purchase.price);
                   });
                  average_purchase_price += purchase_price /  item.purchase_items.length
              });

            let total_sale_purchase_price =  average_purchase_price * total_sale_quantity;
            let profit_amount = total_sales_amount - total_sale_purchase_price ;
            this.this_week_profit = profit_amount.toFixed(2) ;
        
      }
    },

    yesterdayProfit(sales_products){
         if (sales_products) {
             let average_purchase_price =0 ;
             let total_sales_amount =0 ;
             let total_sale_quantity =0 ;

             sales_products.forEach((item)=>{
                   item.yesterday_sales.forEach((sale)=>{
                        total_sales_amount += parseFloat(sale.amount);
                        total_sale_quantity += parseFloat(sale.quantity);
                   });
              });

              sales_products.forEach((item)=>{
                   let purchase_price=0 ;
                   item.purchase_items.forEach((purchase)=>{
                        purchase_price += parseFloat(purchase.price);
                   });
                  average_purchase_price += purchase_price /  item.purchase_items.length
              });

            let total_sale_purchase_price =  average_purchase_price * total_sale_quantity;
            let profit_amount = total_sales_amount - total_sale_purchase_price ;
            this.yesterday_profit = profit_amount.toFixed(2) ;
        
      }
    },


    todayProfit(sales_products){

          if (sales_products) {

             let average_purchase_price =0 ;
             let total_sales_amount =0 ;
             let total_sale_quantity =0 ;

             sales_products.forEach((item)=>{
                   item.today_sales.forEach((sale)=>{
                        total_sales_amount += parseFloat(sale.amount);
                        total_sale_quantity += parseFloat(sale.quantity);
                   });
              });

              sales_products.forEach((item)=>{
                   let purchase_price=0 ;
                   item.purchase_items.forEach((purchase)=>{
                        purchase_price += parseFloat(purchase.price);
                   });
                  average_purchase_price += purchase_price /  item.purchase_items.length
              });

            let total_sale_purchase_price =  average_purchase_price * total_sale_quantity;
            let profit_amount = total_sales_amount - total_sale_purchase_price ;
            this.today_profit = profit_amount.toFixed(2) ;
                  
          }  
    },



  salesAmount(items){
       if (items) {
          let amount = 0 ;
          items.forEach(item => {
              amount += parseFloat(item.amount) ;
          });
          return amount.toFixed(2)  ;
       }
    },

  salesQuantity(items){
     if (items) {
        let quantity = 0 ;
        items.forEach(item => {
            quantity += parseFloat(item.quantity) ;
        });
        return quantity.toFixed(2)  ;
     }
    },

   back(){
       return window.history.back();
   }

  },


};
</script>
