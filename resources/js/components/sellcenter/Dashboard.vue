<template>
  <div>
    <navbar></navbar>

    <div class="content-wrapper">
      <section class="content-header">
        <h1>Analysis</h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Home</a>
          </li>
          <li class="active">Dashboard</li>
        </ol>
      </section>
      <h1 v-if="loading" style="text-align: center; font-size: 50px">
        <i class="fa fa-spinner fa-spin"></i>
      </h1> 
      <section v-else class="content">

        <div class="row container_row" >

  
           <div  class="col-lg-4 col-md-4 col-lg-12 col-md-12">  
              <div  class="boxs  blue">
                <h3> Today Sales Profit </h3>
            
              <h4>   {{ today_profit }} &#2547;  </h4>
                   <router-link :to="{ name: 'today_sales_report' }" class="small-boxs-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></router-link>
                <img class="d_img_icon" src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="">        
              </div>
           </div>

          <div  class="col-lg-4 col-md-4 col-lg-12 col-md-12">  
              <div  class="boxs  blue">
                <h3> Yesterday Sales Profit </h3>
            
              <h4>   {{ yesterday_profit }} &#2547;  </h4>
                   <router-link :to="{ name: 'yesterday_sales_report' }" class="small-boxs-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></router-link>
                <img class="d_img_icon" src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="">        
              </div>
           </div>

          <div  class="col-lg-4 col-md-4 col-lg-12 col-md-12">  
              <div  class="boxs  blue">
                <h3> This Week Sales Profit </h3>
            
              <h4>   {{ this_week_profit }} &#2547;  </h4>
                   <router-link :to="{ name: 'this_week_sales_report' }" class="small-boxs-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></router-link>
                <img class="d_img_icon" src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="">        
              </div>
           </div>

          <div  class="col-lg-4 col-md-4 col-lg-12 col-md-12">  
              <div  class="boxs  blue">
                <h3> This Month Sales Profit </h3>
            
              <h4>   {{ this_month_profit }} &#2547;  </h4>
                   <router-link :to="{ name: 'this_month_sales_report' }" class="small-boxs-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></router-link>
                <img class="d_img_icon" src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="">        
              </div>
           </div>


          <div  class="col-lg-4 col-md-4 col-lg-12 col-md-12">  
              <div  class="boxs  blue">
                <h3> Total Sales Profit </h3>
            
              <h4>   {{ total_profit }} &#2547;  </h4>
                   <router-link :to="{ name: 'total_sales_report' }" class="small-boxs-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></router-link>
                <img class="d_img_icon" src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="">        
              </div>
           </div>


           <div  class="col-lg-4 col-md-4 col-lg-12 col-md-12">  
              <div  class="boxs  blue">
                <h3> Credit This Weeck  </h3>
            
              <h4>   {{ analysis.this_weeck_credit }} &#2547;  </h4>
                   <router-link :to="{ name: 'sell_center_credit' }" class="small-boxs-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></router-link>
                <img class="d_img_icon" src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="">        
              </div>
           </div>


           <div  class="col-lg-4 col-md-4 col-lg-12 col-md-12">  
              <div  class="boxs  blue">
                <h3> Credit This Month  </h3>
            
              <h4>   {{ analysis.this_month_credit }} &#2547;  </h4>
                   <router-link :to="{ name: 'sell_center_credit' }" class="small-boxs-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></router-link>
                <img class="d_img_icon" src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="">        
              </div>
           </div>


          <div  class="col-lg-4 col-md-4 col-lg-12 col-md-12">  
                        <div  class="boxs  blue">
                          <h3> Total Credit   </h3>
                      
                        <h4>   {{ analysis.total_credit }} &#2547;  </h4>
                        <router-link :to="{ name: 'sell_center_credit' }" class="small-boxs-footer"
                          >More info <i class="fa fa-arrow-circle-right"></i
                        ></router-link>
                          <img class="d_img_icon" src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="">        
                        </div>
            </div>


            

          <div class="col-lg-4 col-md-4 col-lg-12 col-md-12">  
                        <div  class="boxs  red">
                          <h3>  Debit This Weeck   </h3>
                      
                        <h4>   {{ analysis.this_weeck_debit }} &#2547;  </h4>
                                     <router-link :to="{ name: 'sell_center_debit' }" class="small-boxs-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></router-link>
                          <img class="d_img_icon" src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="">        
                        </div>
            </div> 


          <div  class="col-lg-4 col-md-4 col-lg-12 col-md-12">  
                        <div  class="boxs  red">
                          <h3>  Debit This Month   </h3>
                      
                        <h4>   {{ analysis.this_month_debit }} &#2547;  </h4>
                                     <router-link :to="{ name: 'sell_center_debit' }" class="small-boxs-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></router-link>
                          <img class="d_img_icon" src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="">        
                        </div>
            </div>



          <div  class="col-lg-4 col-md-4 col-lg-12 col-md-12">  
                        <div  class="boxs  red">
                          <h3> Total Debit   </h3>
                        <h4>   {{ analysis.total_debit }} &#2547;  </h4>
                                     <router-link :to="{ name: 'sell_center_debit' }" class="small-boxs-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></router-link>
                          <img class="d_img_icon" src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="">        
                        </div>
            </div>
             

      </div>

    <div class="row">
          <h1 class="heading" style="margin-left: 15px">Accounts</h1>
          <div class="col-lg-4">
            <div class="custom-boxs">
              <div class="custom-boxs-body">
                <h4>
                  In Cash: <strong>{{ parseInt(balance.today_credit_cash) }}</strong>
                </h4>
                <h4>
                  In Bkash:
                  <strong>{{ parseInt(balance.today_credit_bkash) }}</strong>
                </h4>
                <h4>
                  In Nagad:
                  <strong>{{ parseInt(balance.today_credit_nagad) }}</strong>
                </h4>
                <h4>
                  In Bank: <strong>{{ parseInt(balance.today_credit_bank) }}</strong>
                </h4>

                <h4>
                  Total: <strong>{{ parseInt(balance.today_credit) }}</strong>
                </h4>
              </div>

              <div class="custom-boxs-footer">
                <h3 style="color:#fff"  class="text-center text-uppercase">today credit</h3>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="custom-boxs">
              <div class="custom-boxs-body">
                <h4>
                  In Cash: <strong>{{ parseInt(balance.today_debit_cash) }}</strong>
                </h4>
                <h4>
                  In Bkash:
                  <strong>{{ parseInt(balance.today_debit_bkash) }}</strong>
                </h4>
                <h4>
                  In Nagad:
                  <strong>{{ parseInt(balance.today_debit_nagad) }}</strong>
                </h4>
                <h4>
                  In Bank: <strong>{{ parseInt(balance.today_debit_bank) }}</strong>
                </h4>

                <h4>
                  Total: <strong>{{ parseInt(balance.today_debit) }}</strong>
                </h4>
              </div>

              <div class="custom-boxs-footer">
                <h3 style="color:#fff" class="text-center text-uppercase">today debit</h3>
              </div>
            </div>
          </div>


          <div class="col-lg-4">
            <div class="custom-boxs">
              <div class="custom-boxs-body">
                <h4>
                  In Cash:
                  <strong>{{
                    parseInt(balance.total_credit_cash) -
                    parseInt(balance.total_debit_cash)
                  }}</strong>
                </h4>
                <h4>
                  In Bkash:
                  <strong>{{
                    parseInt(balance.total_credit_bkash) -
                    parseInt(balance.total_debit_bkash)
                  }}</strong>
                </h4>
                <h4>
                  In Nagad:
                  <strong>{{
                    parseInt(balance.total_credit_nagad) -
                    parseInt(balance.total_debit_nagad)
                  }}</strong>
                </h4>
                <h4>
                  In Bank:
                  <strong>{{
                    parseInt(balance.total_credit_bank) -
                    parseInt(balance.total_debit_bank)
                  }}</strong>
                </h4>

                <h4>
                  Total:
                  <strong>{{
                    parseInt(balance.total_credit) - parseInt(balance.total_debit)
                  }}</strong>
                </h4>
              </div>

              <div class="custom-boxs-footer">
                <h3 style="color:#fff"  class="text-center text-uppercase">total balance</h3>
              </div>
            </div>
          </div>
        </div>

<br>
<hr>
    <div class="row">

          <div class="col-lg-6 col-xl-6 col-md-6 col-xs-12">
            <div class="stock-custom-boxs">
                <h2 class="heading"> Total Stock Quantity:   <strong> {{  total_stock_quantity.toFixed(2) }} </strong>  </h2>
            </div>
          </div>


          <div class="col-lg-6 col-xl-6 col-md-6 col-xs-12">
            <div class="stock-custom-boxs">
                 <h2 class="heading"> Total Stock Amount:  <strong> {{ total_stock_price.toFixed(2) }} </strong>  </h2>
            </div>
          </div>


        </div>
      </section>
    </div>
  </div>
</template>

<script>

import navbar from "./Navbar.vue"

export default {
  components:{
     navbar
   },
  data() {
    return {
      loading: true,
      balance: {},
      analysis: "",
      total_stock_quantity: "",
      total_stock_price: "",
      base_url: this.$store.state.image_base_link,
      this_month_profit: 0,
      this_week_profit: 0,
      today_profit: 0,
      yesterday_profit: 0,
      total_profit: 0,
    };
  },
  created() {
    this.$store.dispatch("sellcenter");
    this.dashboard();
  },
  methods: {
    dashboard() {
      axios
        .get("/api/sellcenter/dashboard/analysis")
        .then((resp) => {
          console.log(resp);
          this.analysis = resp.data.analysis;
          this.balance=resp.data.balance ;
          this.total_stock_quantity=resp.data.total_stock_quantity ;
          this.total_stock_price=resp.data.total_stock_price ;
          this.totalProfit(resp.data.sale_profit_analysis.original.total_sales_products);
          this.thisMonthProfit(resp.data.sale_profit_analysis.original.this_month_sales_products);
          this.thisWeekProfit(resp.data.sale_profit_analysis.original.this_week_sales_products);
          this.yesterdayProfit(resp.data.sale_profit_analysis.original.yesterday_sales_products);
          this.todayProfit(resp.data.sale_profit_analysis.original.today_sales_products);
          this.loading = false;
        })
    },


  
   purchasePrice(items){

      if (items) {
        let price = 0;
        let purchase_times = 0 ;
        items.forEach(item => {
            price += parseFloat(item.price) ;
            purchase_times += 1 ;
        });
        let  average_price = price / purchase_times ;
        return average_price  ;
        }
   },



     totalProfit(sales_products){
        
            let average_sale_purchase_price = 0 ;
            let total_sales_amount = 0 ;

             sales_products.forEach((item)=>{
                  let purchase_price = this.purchasePrice(item.purchase_items) ;
                      item.total_sales.forEach(sale => {
                                  total_sales_amount += parseFloat(sale.amount) ;
                         }); 
                  average_sale_purchase_price += parseFloat(purchase_price) * this.salesQuantity(item.total_sales);
              });

            let profit = total_sales_amount - average_sale_purchase_price ;
            this.total_profit = profit.toFixed(2) ;
    },


     thisMonthProfit(sales_products){
        
            let average_sale_purchase_price = 0 ;
            let total_sales_amount = 0 ;

             sales_products.forEach((item)=>{
                  let purchase_price = this.purchasePrice(item.purchase_items) ;
                      item.this_month_sales.forEach(sale => {
                                  total_sales_amount += parseFloat(sale.amount) ;
                         }); 
                  average_sale_purchase_price += parseFloat(purchase_price) * this.salesQuantity(item.this_month_sales);
              });

            let profit = total_sales_amount - average_sale_purchase_price ;
            this.this_month_profit = profit.toFixed(2) ;

    },

   

    thisWeekProfit(sales_products){
        
            let average_sale_purchase_price = 0 ;
            let total_sales_amount = 0 ;

             sales_products.forEach((item)=>{
                  let purchase_price = this.purchasePrice(item.purchase_items) ;
                      item.this_week_sales.forEach(sale => {
                                  total_sales_amount += parseFloat(sale.amount) ;
                         }); 
                  average_sale_purchase_price += parseFloat(purchase_price) * this.salesQuantity(item.this_week_sales);
              });

            let profit = total_sales_amount - average_sale_purchase_price ;
            this.this_week_profit = profit.toFixed(2) ;

    },

    yesterdayProfit(sales_products){
        
            let average_sale_purchase_price = 0 ;
            let total_sales_amount = 0 ;

             sales_products.forEach((item)=>{
                  let purchase_price = this.purchasePrice(item.purchase_items) ;
                      item.yesterday_sales.forEach(sale => {
                                  total_sales_amount += parseFloat(sale.amount) ;
                         }); 
                  average_sale_purchase_price += parseFloat(purchase_price) * this.salesQuantity(item.yesterday_sales);
              });
            let profit = total_sales_amount - average_sale_purchase_price ;
            this.yesterday_profit = profit.toFixed(2) ;

    },



    todayProfit(sales_products){
        
            let average_sale_purchase_price = 0 ;
            let total_sales_amount = 0 ;
             sales_products.forEach((item)=>{
                  let purchase_price = this.purchasePrice(item.purchase_items) ;
                      item.today_sales.forEach(sale => {
                                  total_sales_amount += parseFloat(sale.amount) ;
                         }); 
                  average_sale_purchase_price += parseFloat(purchase_price) * this.salesQuantity(item.today_sales);
              });
            let profit = total_sales_amount - average_sale_purchase_price ;
            this.today_profit = profit.toFixed(2) ;

    },



  salesQuantity(items){
     if (items) {
        let quantity = 0 ;
        items.forEach(item => {
            quantity += parseFloat(item.sale_quantity) ;
        });
        return quantity.toFixed(2)  ;
     }
    },

    },

  computed: {
    sellcenter() {
      return this.$store.getters.sellcenter;
    },
  },
};
</script>

<style>

    .container_row {
      margin-left: -35px !important;
      margin-right: 0px !important;
    }

    .person_counter {
      padding-right: 5%;
      color: #1d2671;
    }

    .box-gradiant {
      background: -webkit-linear-gradient(to right, #c33764, #1d2671);
      background: linear-gradient(to right, #c33764, #1d2671);
    }
    .small-box .icon {
      color: #fff !important;
      opacity: 0.6;
    }
    .product-thumb.clearfix {
      padding: 12px 13px;
      margin-right: 10px;
      margin-right: 10px;
      border: 1px solid #eee;
      box-shadow: 2px 2px 2px #eee;
    }
    .custom-boxs {
      background: #fff;
      padding: 13px;
      height: 220px;
      box-shadow: 3px 3px 3px #ddd;
      border-radius: 6px;
      margin-bottom: 10px;
    }

   .stock-custom-boxs {
      background: #fff;
      padding: 13px;
      height: 100px;
      box-shadow: 3px 3px 3px #ddd;
      border-radius: 6px;
      margin-bottom: 10px;
    }


    .custom-boxs-body strong {
      position: absolute;
      right: 10%;
      color: blue;
    }
    .custom-boxs-footer {
      background: #00a65a;
      color: #fff;
    }
    .analysis-item {
      display: flex;
      list-style-type: none;
      float: right;
    }
    .analysis-item li {
      padding: 10px 10px;
      text-transform: uppercase;
      font-weight: bold;
      cursor: pointer;
    }
    .analysis-item .active {
      border-bottom: 2px solid #000;
    }

    .sub_info{
      font-size: 24px;
        color: #fff;
        margin-top: 0px;
        position: absolute;
        margin-left: 20px;
    }

    .small-box{
        border-radius: 30px;
    }

    .small-box h3 {
          margin: 0px 18px;
          margin-top:5px;
          font-size: 26px;
    }

    .small-box h4 {
        padding-top: 30px;
        margin-left: 20px;
    }

    .money_icon {
      font-size: 26px;
    }

    .small-box>.small-box-footer {
        border-radius: 0px 0px 30px 30px;
    }




    :root {
        --red: hsl(0, 78%, 62%);
        --cyan: hsl(180, 62%, 55%);
        --orange: hsl(34, 97%, 64%);
        --blue: hsl(212, 86%, 64%);
        --varyDarkBlue: hsl(234, 12%, 34%);
        --grayishBlue: hsl(229, 6%, 66%);
        --veryLightGray: hsl(0, 0%, 98%);
        --weight1: 200;
        --weight2: 400;
        --weight3: 600;
    }

    body {
        font-size: 15px;
        font-family: 'Poppins', sans-serif;
        background-color: var(--veryLightGray);
    }

    .attribution { 
        font-size: 11px; text-align: center; 
    }
    .attribution a { 
        color: hsl(228, 45%, 44%); 
    }

    h1:first-of-type {
        font-weight: var(--weight1);
        color: var(--varyDarkBlue);

    }

    h1:last-of-type {
        color: var(--varyDarkBlue);
    }

    @media (max-width: 400px) {
        h1 {
            font-size: 1.5rem;
        }
    }

    .header {
        text-align: center;
        line-height: 0.8;
        margin-bottom: 50px;
        margin-top: 100px;
    }

    .header p {
        margin: 0 auto;
        line-height: 2;
        color: var(--grayishBlue);
    }


    .boxs p {
        color: var(--grayishBlue);
    }

    .boxs {
        border-radius: 5px;
        box-shadow: 0px 30px 40px -20px var(--grayishBlue);
        padding: 30px;
        margin: 20px;  
    }

    .d_img_icon {
        margin-top: -75px;
        float: right;
    }

    @media (max-width: 450px) {
        .boxs {
            height: 200px;
        }
    }

    @media (max-width: 950px) and (min-width: 450px) {
        .boxs {
            text-align: center;
            height: 180px;
        }
    }

    .cyan {
        border-top: 3px solid var(--cyan);
    }
    .red {
        border-top: 3px solid var(--red);
    }
    .blue {
        border-top: 3px solid var(--blue);
    }
    .orange {
        border-top: 3px solid var(--orange);
    }

    h3 {
        color: var(--varyDarkBlue);
        font-weight: var(--weight3);
    }


    @media (min-width: 950px) {
        .row1-container {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .row2-container {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .boxs-down {
            position: relative;
            top: 150px;
        }
        .boxs {
            width: 100%;
            height: 150px;
        
        }
        .header p {
            width: 30%;
        }
        
    }


      .boxs {
        border-radius: 5px;
        box-shadow: 0px 30px 40px -20px var(--grayishBlue);
        padding: 30px;
        margin: 20px;
      }


</style>
