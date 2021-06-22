<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'investment_add' }" class="btn btn-primary"
            ><i class="fa fa-plus"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Investors</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-11 col-lg-offset-1">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                  <h3 class="box-title heading">Investment Table</h3>
                </div>
                <div class="box-body">
                  <div class="row total_row">
                     <div class="col-md-2">

                    <a href="/api/download/all/investment/pdf" target="_blank" class="btn btn-success"> <i class="fa fa-download"> </i> Export PDF </a>
                     </div>
                    <div class="col-md-4"> <h4> Total Investment : <b class="total_style"  style="color:green"> {{ total_investment }} </b> </h4> </div>
                    <div class="col-md-3"> <h4> Total Profit Paid : <b  class="total_style" style="color:green"> {{ total_profit_paid  }}</b> </h4> </div>
                    <div class="col-md-3"> <h4> Total Return : <b  class="total_style" style="color:red"> {{ total_return  }}</b> </h4>   </div>
                  </div>
                  <table class="table text-center table-hover table-bordered table-striped ">
                    <thead>
                      <tr>
                        <th scope="col">#</th>

                        <th scope="col">Name</th>
                        <th scope="col">Referance Name</th>
                        <th scope="col">Mobile </th>
                        <th scope="col">Address</th>
                        <th scope="col">Invested </th>
                        <th scope="col">Profit Margin</th>
                        <th scope="col">Profit Paid </th>
                        <th scope="col">Return </th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr
                        v-for="(items, index) in investment.data"
                        v-bind:key="index"
                      >
                        <td scope="row">{{ index + 1 }}</td>
                        <td>
                          <router-link
                            :to="{
                              name: 'investor_details',
                              params: { id: items.id },
                            }"
                            >{{ items.name }}
                          </router-link>
                        </td>
                        <td>{{ items.referance_name }}</td>
                        <td>{{ items.mobile_no }}</td>

                        <td>{{ items.address }}</td>

                        <td>{{ items.invest_amount }}</td>
                        <td>{{ items.profit_margin }}</td>
                        <td>{{ items.profit_paid_amount  }}</td>
                        <td> {{ items.invest_return }} </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="box-footer">
                  <div class="row">
                    <div class="col-lg-6">
                      <pagination
                        :data="investment"
                        @pagination-change-page="getinvestments"
                      >
                      </pagination>
                    </div>
                    <div
                      class="col-lg-6 mt-1"
                      style="margin-top: 25px; text-align: right"
                    >
                      <p>
                        Showing <strong>{{ investment.from }}</strong> to
                        <strong>{{ investment.to }}</strong> of total
                        <strong>{{ investment.total }}</strong> entries
                      </p>
                    </div>
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
export default {
  created() {
    this.getinvestments();
  },
  data() {
    return {
      investment: {},
      loading: true,
      basePath: this.$store.getters.image_base_link,
      item: "",
      search: "",
      total_investment: "",
      total_profit_paid: "",
      total_return: "",
      total_due_amount: 0,
    };
  },
  methods: {
    getinvestments(page = 1) {
      axios
        .get("/api/company/investor?page=" + page)
        .then((resp) => {
          console.log(resp);
          if (resp.data.success == "OK") {
             this.investment = resp.data.investment;
             this.total_investment = resp.data.total_investment;
             this.total_profit_paid = resp.data.total_profit_paid;
             this.total_return=resp.data.total_return;
            this.loading = false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    totalAmount(investment) {
      //  console.log(typeof investment)

      let total = 0;
      // investment.forEach(ele => {
      //     total +=parseFloat(ele.amount);
      // });

      Object.keys(investment).forEach(function (key) {
        console.log(key);
      });

      return total;
    },
  },
  computed: {},
};
</script>

<style scoped>
.box-primary {
  margin-left: -100px;
  overflow-x: scroll;
}

h4 {
  font-size: 16px;
}

.total_style {
  border: 1px solid #ddd;
  padding: 4px 25px;
}
.total_row {
  padding-bottom: 20px;
}
</style>
