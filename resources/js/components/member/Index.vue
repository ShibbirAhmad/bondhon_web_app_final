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

        <div class="row" >

         <div class="col-lg-3 col-xs-6">
            <div class="small-box  bg-green">
               <h3 > {{ memberData.total_collection_paid }}  <span class="money_icon"> &#2547; </span>  </h3>
                <span class="sub_info" > </span>
                <h4> Total Paid </h4>
              <a href="#" class="small-box-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></a>
            </div>
          </div>


           <div class="col-lg-3 col-xs-6">
            <div class="small-box  bg-green">
               <h3 > {{ memberData.total_profit_taken }}  <span class="money_icon"> &#2547; </span>  </h3>
                <span class="sub_info" > </span>
                <h4> Total Profit Got </h4>
              <a href="#" class="small-box-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></a>
            </div>
          </div>

        <div class="col-lg-3 col-xs-6">
            <div class="small-box  bg-green">
               <h3 > {{ analysis.total_member }}  </h3>
                <span class="sub_info" >  {{ analysis.total_amount_of_member  }} &#2547;  </span>
                <h4> Member & Amount </h4>
              <router-link :to="{ name: 'admin' }" class="small-box-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></router-link>
            </div>
          </div>


           <div class="col-lg-3 col-xs-6">
            <div class="small-box  bg-green">
               <h3 > {{ analysis.total_project }}  </h3>
                <span class="sub_info" >  {{ analysis.total_project_cost  }} &#2547;  </span>
                <h4> Project & Cost </h4>
              <router-link :to="{ name: 'project' }" class="small-box-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></router-link>
            </div>
          </div>



           <div class="col-lg-3 col-xs-6">
            <div class="small-box  bg-green">
               <h3 > {{ analysis.total_investor }}  </h3>
                <span class="sub_info" >  {{ analysis.total_invested_amount - analysis.total_invested_return_amount }} &#2547;  </span>
                <h4> Investor & Amount </h4>
              <router-link :to="{ name: 'project' }" class="small-box-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></router-link>
            </div>
          </div>


           <div class="col-lg-3 col-xs-6">
            <div class="small-box  bg-green">
               <h3 > {{ analysis.total_project }}  </h3>
                <span class="sub_info" >  {{ analysis.total_project_profit  }} &#2547;  </span>
                <h4> Project & Profit </h4>
              <router-link :to="{ name: 'project' }" class="small-box-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></router-link>
            </div>
          </div>


           <div class="col-lg-3 col-xs-6">
            <div class="small-box  bg-green">
               <h3 > {{ analysis.this_month_credit }} <span class="money_icon">  &#2547;</span>  </h3>
                <span class="sub_info" >  </span>
                <h4>  Credit This Month  </h4>
              <router-link :to="{ name: 'credit' }" class="small-box-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></router-link>
            </div>
          </div>

            <div class="col-lg-3 col-xs-6">
            <div class="small-box  bg-green">
               <h3 > {{ analysis.total_credit }} <span class="money_icon">  &#2547;</span>  </h3>
                <span class="sub_info" >  </span>
                <h4>  Credit Total </h4>
              <router-link :to="{ name: 'credit' }" class="small-box-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></router-link>
            </div>
          </div>

           <div class="col-lg-3 col-xs-6">
            <div class="small-box  bg-green">
               <h3 > {{ analysis.this_month_debit }}  <span class="money_icon"> &#2547; </span>  </h3>
                <span class="sub_info" > </span>
                <h4>  Debit This Month  </h4>
              <router-link :to="{ name: 'debit' }" class="small-box-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></router-link>
            </div>
          </div>


         <div class="col-lg-3 col-xs-6">
            <div class="small-box  bg-green">
               <h3 > {{ analysis.total_debit }}  <span class="money_icon"> &#2547; </span>  </h3>
                <span class="sub_info" > </span>
                <h4>  Debit Total </h4>
              <router-link :to="{ name: 'debit' }" class="small-box-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></router-link>
            </div>
          </div>

          <div class="col-lg-3 col-xs-6">
            <div class="small-box  bg-green">
               <h3 > {{ analysis.company_value }}  <span class="money_icon"> &#2547; </span>  </h3>
                <span class="sub_info" > </span>
                <h4> Company Assets </h4>
              <a href="#" class="small-box-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></a>
            </div>
          </div>

            <div class="col-lg-3 col-xs-6">
            <div class="small-box  bg-green">
               <h3 > {{ analysis.share_value }}  <span class="money_icon"> &#2547; </span>  </h3>
                <span class="sub_info" > </span>
                <h4> Share Value </h4>
              <a href="#" class="small-box-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></a>
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
  height: 220px;
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

</style>
