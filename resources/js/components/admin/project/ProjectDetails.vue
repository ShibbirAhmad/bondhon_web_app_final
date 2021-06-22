<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content">
        <div v-if="loading">
          <h1 class="text-center" v-if="loading">
            <i class="fa fa-spin fa-spinner"></i>
          </h1>
        </div>
        <div v-else class="container">
          <div class="row justify-content-center">
            <div class="col-lg-11">
              <div class="row">
                <div
                  class="col-lg-12"
                  style="
                    background: #fff;
                    margin-bottom: 10px;
                    text-align: center;
                    box-shadow: 2px 2px 2px #ddd;
                  "
                >
                  <h4 class="text-uppercase" style="font-weight: bold">
                    project:{{ project.name }}
                  </h4>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="project-box">
                    <h4 class="c-name">Total Cost Amount  {{ total_cost }} </h4>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="project-box">
                    <h4 class="c-name">Total Profit Amount {{ total_profit }} </h4>
                  </div>
                </div>

              </div>
               <br/>
              <div class="row">
                <div class="col-lg-12">
                  <div class="tab-menu-list">
                    <li
                      @click="payment_history_show = true"
                      :class="[{ active: payment_history_show }]"
                    >
                      Cost  History
                      <a
                        :href="'/api/pdf/project/amount/' + project.id"
                        style="background: #000; color: #fff; cursor: pointer"
                      >
                        PDF
                      </a>
                    </li>

                    <li
                      @click="payment_history_show = false"
                      :class="[{ active: !payment_history_show }]"
                    >
                       Profit History
                      <a
                        :href="'/api/pdf/project/purchase/' + project.id"
                        style="background: #000; color: #fff; cursor: pointer"
                      >
                        PDF
                      </a>
                    </li>
                  </div>
                </div>
              </div>
              <div class="row">
                <div
                  class="col-lg-12"
                  v-if="payment_history_show"
                  style="background: #fff; padding: 15px 16px"
                >
                  <h4>Cost History</h4>
                  <table class="table table-bordered table-hover table-striped" v-if="cost_records.length > 0">
                    <thead>
                      <tr>
                        <td>#</td>
                        <td>Date</td>
                        <td>Paid By</td>
                        <td>Comment</td>
                        <td>Amount</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(cost, index) in cost_records" :key="index">
                        <td>
                          {{ index + 1 }}
                        </td>
                        <td>
                          {{ cost.date }}
                        </td>
                        <td>
                          {{ cost.paid_by ? cost.paid_by : "" }}
                        </td>
                        <td>
                          {{ cost.comment }}
                        </td>
                         <td>
                          {{ cost.amount }}
                        </td>

                      </tr>
                      <tr>
                        <td colspan="3"></td>
                        <td >total</td>

                        <td>
                          <strong> = {{ total_cost }}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h4 class="text-center " v-else>
                     Cost History Is Empty
                  </h4>
                </div>
                <div
                  class="col-lg-12"
                  v-if="!payment_history_show"
                  style="background: #fff; padding: 15px 16px"
                >
                  <h4>Profit History</h4>
                  <table class="table table-bordered table-hover table-striped" v-if="profit_records.length > 0">
                    <thead>
                      <tr>
                        <td>#</td>
                        <td>Date</td>
                        <td>Paid By</td>
                        <td>Comment</td>
                        <td>Amount</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(profit, index) in profit_records" :key="index">
                        <td>
                          {{ index + 1 }}
                        </td>
                        <td>
                          {{ profit.date }}
                        </td>

                        <td>
                          {{ profit.paid_by }}
                        </td>

                        <td>
                          {{ profit.comment }}
                        </td>
                       <td>
                          {{ profit.amount }}
                        </td>

                      </tr>
                      <tr>
                         <td colspan="3"></td>
                        <td >total</td>
                        <td>
                          <strong>= {{ total_profit }}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h4 class="text-center " v-else>
                    Profit Is Empty
                  </h4>
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
    this.projectAccount();
  },
  data() {
    return {
      total_cost: "",
      total_profit: "",
      loading: true,
      project: "",
      cost_records: "",
      profit_records: "",
      payment_history_show: true,
    };
  },
  methods: {
    projectAccount(page = 1) {
      axios
        .get("/api/project/details/account/" + this.$route.params.id)
        .then((resp) => {
          console.log(resp);
          this.project = resp.data.project;
          this.total_cost = resp.data.total_cost;
          this.total_profit = resp.data.total_profit;
          this.cost_records = resp.data.cost_records;
          this.profit_records = resp.data.profit_records;
          this.loading = false;
        })

    },


  },
};
</script>

<style scoped>
.project-box {
  background: #fff;
  padding:5px;
  box-shadow: 2px 2px 2px #ddd;
  border-radius: 5px;
  height:50px;
}
.c-name {
  text-align: center;
  height: 20px;
  font-weight: normal;
}
.tab-menu-list {
  display: flex;
  background: #ecf0f5;
}

.tab-menu-list li {
  list-style: none;
  padding: 10px;
  text-transform: uppercase;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 10px;
}
li.active {
  border-bottom: 2px solid #161725;
  background: #fff;
}
</style>
