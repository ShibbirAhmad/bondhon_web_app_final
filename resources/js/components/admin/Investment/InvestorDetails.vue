<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
         <h1>
          <router-link :to="{ name: 'investment' }" class="btn btn-primary"
            ><i class="fa fa-arrow-left"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Investor</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-1"></div>
            <div class="col-lg-3 __c_box">
              <h4>
                Total Invested Amount:

                {{ totalinvestAmount() }}
              </h4>
            </div>
            <div class="col-lg-3 __c_box">
              <h4>
                Total Profit Paid Amount:

                {{ totalPaidAmount() }}
              </h4>
            </div>

            <div class="col-lg-3 __c_box">
              <h4>
                Total Return:
                {{ total_return }}
              </h4>
            </div>

          </div>
          <div class="row justify-content-center">
            <div class="col-lg-11 ">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <div class="row">
                    <div class="col-md-3">
                      <h3
                        class="box-title"
                        @click="i_mode"
                        :class="{ bb: investMode }"
                      >
                        Invest History
                      </h3>
                      <a :href="'/api/invest/history/download/pdf/'+investor_id" target="_blank" class="btn btn-success"> <i class="fa fa-download"> </i> </a>
                    </div>

                    <div class="col-md-4">
                      <h3
                        class="box-title"
                        @click="r_mode"
                      >
                        Profit Paid History
                      </h3>
                       <a :href="'/api/investor/paid/history/download/pdf/'+investor_id" target="_blank" class="btn btn-success"> <i class="fa fa-download"> </i> </a>
                    </div>
                     <div class="col-md-4">
                      <h3
                        class="box-title"
                        @click="p_mode"
                      > Return History
                      </h3>
                    </div>
                  </div>
                </div>
                <div class="box-body">
                  <table v-if="investMode" class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Month</th>
                        <th scope="col">Purpose</th>
                        <th scope="col">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr v-for="(items, index) in invests" v-bind:key="index">
                        <td scope="row">{{ index + 1 }}</td>
                        <td>{{ items.date }}</td>
                        <td>{{ items.month }}</td>
                        <td>{{ items.purpose }}</td>
                        <td>{{ items.amount }}</td>
                      </tr>
                      <tr>
                        <td colspan="4"></td>
                        <td>
                          <strong> ={{ totalinvestAmount() }}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table v-if="receiveMode" class="table text-center table-striped ">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Month</th>
                        <th scope="col">Profit Month  </th>
                        <th scope="col">Comment</th>
                        <th scope="col">Paid By</th>
                        <th scope="col">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr
                        v-for="(investpaid, index) in invest_profit_paid"
                        v-bind:key="index"
                      >
                        <td scope="row">{{ index + 1 }}</td>
                        <td>{{ investpaid.date }}</td>
                        <td>{{ investpaid.profit_month }}</td>
                        <td>{{ investpaid.comment }}</td>
                        <td>{{ investpaid.paid_by }}</td>
                        <td>{{ investpaid.amount }}</td>
                      </tr>
                      <tr>
                        <td colspan="5"> Total profit paid </td>
                        <td>
                          <strong> ={{ totalPaidAmount() }}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table v-if="paymentMode" class="table text-center table-striped ">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Comment</th>
                        <th scope="col">Paid By</th>
                        <th scope="col">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr
                        v-for="(item, index) in investment_return"
                        v-bind:key="index"
                      >
                        <td scope="row">{{ index + 1 }}</td>
                        <td>{{ item.date }}</td>

                        <td>{{ item.comment }}</td>
                        <td>{{ item.paid_by }}</td>
                        <td>{{ item.amount }}</td>
                      </tr>
                      <tr>
                        <td colspan="4"> Total Return Amount </td>
                        <td>
                          <strong> ={{ total_return }}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
export default {
  created() {
    this.getinvests();
  },
  data() {
    return {
      invest: "",
      loading: true,
      basePath: this.$store.getters.image_base_link,
      item: "",
      search: "",
      investMode:true,
      receiveMode:false,
      paymentMode:false ,
      invests: "",
      invest_profit_paid: "",
      investment_return: "",
      total_return: "",
      investor_id:"",
    };
  },
  methods: {
    i_mode(){
         this.investMode=true;
         this.receiveMode=false;
         this.paymentMode=false ;
    },
    r_mode(){
         this.receiveMode=true;
         this.paymentMode=false ;
         this.investMode=false;
    },
    p_mode(){
         this.paymentMode=true ;
         this.investMode=false;
         this.receiveMode=false;

    },
    getinvests() {
      axios
        .get("/api/company/investor/details/"+this.$route.params.id)
        .then((resp) => {
          console.log(resp);
          this.invests = resp.data.invests;
          this.invest_profit_paid = resp.data.invest_profit_paid;
          this.investment_return = resp.data.investment_return;
          this.total_return =    resp.data.total_return;
          this.investor_id=this.$route.params.id ;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    totalinvestAmount() {
      let total = 0;
      if (this.invests.length > 0) {
         this.invests.forEach((element) => {
         total += parseInt(element.amount);
      });
      }
      return total-parseInt(this.total_return);
    },
    totalPaidAmount() {
      let total = 0;
      if (this.invest_profit_paid.length > 0 ) {
        this.invest_profit_paid.forEach((element) => {
         total += parseInt(element.amount);
      });
      }
      return total;
    },

    addMore() {
      let amount = prompt("Enter Amount: ");

      if (parseInt(amount) > 0) {
        let purpose = prompt("Enter purpose: ");

        axios
         .get("/api/add/more/invest/"+this.$route.params.id, {
            params: {
              amount,
              purpose,
            },
          })
          .then((resp) => {
             console.log(resp);
            if (resp.data.success == "OK") {
              alert("invest added successfully");
              this.getinvests();
            } else {
              alert("Error Found");
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
};
</script>

<style>
.col-lg-3.__c_box {
  padding: 10px;
  background: #fff;
  width: 250px;
  height:60px;
  margin-right: 15px;
  margin-bottom: 20px;
  text-align: center;
  box-shadow: 3px 3px 3px #ddd;
}
.box-title {
  padding: 5px 6px;
  cursor: pointer;
}
.bb {
  border-bottom: 2px solid #000;
}
</style>
