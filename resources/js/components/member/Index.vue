<template>
  <div>
    <member-main></member-main>

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

         <div class="row container_row">

           <div class="col-lg-4 col-md-4 col-lg-12 col-md-12"> 
              <div class="box cyan">
                <h3>Total Paid</h3>
                <h4>{{ memberData.total_collection_paid }}  <span class="money_icon"> &#2547; </span></h4>
                <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="">
                  <router-link :to="{ name: 'member_collection_history' }" class="small-box-footer"
                          >More info <i class="fa fa-arrow-circle-right"></i
                        ></router-link>
              </div>
          </div>
           <div class="col-lg-4 col-md-4 col-lg-12 col-md-12">
                       
                <div class="box cyan">
                  <h3> Total Profit Got</h3>
                  <h4> {{ memberData.total_profit_taken }}  <span class="money_icon"> &#2547; </span></h4>
                  <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="">
                          <router-link :to="{ name: 'member_profit_history' }" class="small-box-footer"
                            >More info <i class="fa fa-arrow-circle-right"></i
                          ></router-link>
                </div>

           </div>

           <div class="col-lg-4 col-md-4 col-lg-12 col-md-12"> 

              <div v-if="$can('member_and_amount')" class="box  blue">
                <h3>  <span class="person_counter"> {{ analysis.total_member }} </span> Member  </h3>
              <h4> {{ analysis.total_amount_of_member  }} &#2547; </h4>
                <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="">
              </div>

          </div>
           <div v-if="$can('investor_and_amount')" class="col-lg-4 col-md-4 col-lg-12 col-md-12">  
              <div  class="box  blue">
                <h3>  <span class="person_counter"> {{ analysis.total_investor }} </span> Investor  </h3>
            
              <h4>   {{ analysis.total_invested_amount - analysis.total_invested_return_amount  }} &#2547;  </h4>
                <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="">        
              </div>
           </div>

           <div v-if="$can('project_and_profit')" class="col-lg-4 col-md-4 col-lg-12 col-md-12">  
              <div  class="box  blue">
                <h3> <span class="person_counter"> {{ analysis.total_project }} </span> Project Profit  </h3>
            
              <h4>   {{ analysis.total_project_profit  }} &#2547;  </h4>
                <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="">        
              </div>
           </div>



          <div v-if="$can('project_and_cost')" class="col-lg-4 col-md-4 col-lg-12 col-md-12">  
              <div  class="box  red">
                <h3> <span class="person_counter"> {{ analysis.total_project }}  </span>  Project Cost</h3>
            
              <h4>   {{ analysis.total_project_cost  }} &#2547;  </h4>
                <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="">        
              </div>
           </div>


           <div v-if="$can('credit_this_month')" class="col-lg-4 col-md-4 col-lg-12 col-md-12">  
              <div  class="box  blue">
                <h3> Credit This Month  </h3>
            
              <h4>   {{ analysis.this_month_credit }} &#2547;  </h4>
                <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="">        
              </div>
           </div>


          <div v-if="$can('credit_total')" class="col-lg-4 col-md-4 col-lg-12 col-md-12">  
                        <div  class="box  blue">
                          <h3> Total Credit   </h3>
                      
                        <h4>   {{ analysis.total_credit }} &#2547;  </h4>
                          <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="">        
                        </div>
            </div>


             


          <div v-if="$can('debit_this_month')" class="col-lg-4 col-md-4 col-lg-12 col-md-12">  
                        <div  class="box  red">
                          <h3>  Debit This Month   </h3>
                      
                        <h4>   {{ analysis.this_month_debit }} &#2547;  </h4>
                          <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="">        
                        </div>
            </div>

          <div v-if="$can('debit_total')" class="col-lg-4 col-md-4 col-lg-12 col-md-12">  
                        <div  class="box  red">
                          <h3> Total Debit   </h3>
                      
                        <h4>   {{ analysis.total_debit }} &#2547;  </h4>
                          <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="">        
                        </div>
            </div>
             

         <div v-if="$can('company_assets')" class="col-lg-4 col-md-4 col-lg-12 col-md-12">  
                        <div  class="box  blue">
                          <h3> Company Assets   </h3>
                      
                        <h4>   {{ analysis.company_value }} &#2547;  </h4>
                          <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="">        
                        </div>
          </div>
             

         <div v-if="$can('share_value')" class="col-lg-4 col-md-4 col-lg-12 col-md-12">  
                <div  class="box  cyan">
                  <h3> Share Value   </h3>
              
                <h4>   {{ analysis.share_value.toFixed(2) }} &#2547;  </h4>
                  <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="">        
                </div>
          </div>
        

  </div>


      </section>
    </div>
  </div>
</template>

<script>


export default {
  name: "Index",

  data() {
    return {
      loading: true,
      balance: {},
      analysis: "",
      base_url: this.$store.state.image_base_link,
      analysis: "",
      memberData: "",
      analysisshow: 1,
    };
  },
  mounted() {
    this.$store.dispatch("member");
    this.dashboard();
  },
  methods: {
    dashboard() {
      axios
        .get("/api/dashboard/analysis")
        .then((resp) => {
          console.log(resp);
          this.analysis = resp.data.analysis;
          this.balance=resp.data.balance ;
          this.memberData=resp.data.memberData ;
          this.loading = false;
        })

    },
  },


  computed: {
    member() {
      return this.$store.getters.member;
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
  padding-right: 10%;
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
.custom-box {
  background: #fff;
  padding: 13px;
  height: 200px;
  box-shadow: 3px 3px 3px #ddd;
  border-radius: 6px;
  margin-bottom: 10px;

}
.custom-box-body strong {
  position: absolute;
  right: 10%;
  color: blue;
}
.custom-box-footer {
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

.small-box {
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


.box p {
    color: var(--grayishBlue);
}

.box {
    border-radius: 5px;
    box-shadow: 0px 30px 40px -20px var(--grayishBlue);
    padding: 30px;
    margin: 20px;  
}

img {
    margin-top: -75px;
    float: right;
}

@media (max-width: 450px) {
    .box {
        height: 200px;
    }
}

@media (max-width: 950px) and (min-width: 450px) {
    .box {
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
    .box-down {
        position: relative;
        top: 150px;
    }
    .box {
        width: 100%;
        height: 150px;
     
    }
    .header p {
        width: 30%;
    }
    
}







</style>
