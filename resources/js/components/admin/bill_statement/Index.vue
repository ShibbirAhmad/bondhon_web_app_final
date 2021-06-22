<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'bill_statement_add' }" class="btn btn-primary"
            ><i class="fa fa-plus"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Bill </li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10 col-lg-offset-1">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                  <h3 class="box-title heading">Bill Statement Table</h3>
                </div>
                <div class="box-body">
                 
                  <table class="table text-center table-striped ">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col"> Bill Name</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col"> Address </th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr v-else
                        v-for="(items, index) in bill_statement"
                        v-bind:key="index"
                      >
                        <td scope="row">{{ index + 1 }}</td>
                        <td>   <router-link
                            :to="{
                              name: 'bill_statement_details',
                              params: { id: items.id },
                            }"
                            >{{ items.name }}
                          </router-link> </td>
                        <td>
                          {{ items.company_name }}
                        </td>
                          <td>{{ items.mobile_no }} </td>
                          <td>{{ items.address }} </td>
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
    this.getBillStatements();
  },
  data() {
    return {
      bill_statement:"",
      loading: true,
      basePath: this.$store.getters.image_base_link,
      total_investment: "",
      total_profit_paid: "",
      total_due_amount: 0,
    };
  },
  methods: {
    getBillStatements() {
      axios
        .get("/api/bill/statement/list")
        .then((resp) => {
          console.log(resp);
          if (resp.data.success == "OK") {
             this.bill_statement = resp.data.bills;
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

.total_style {
  border: 2px solid #ddd;
  padding: 4px 25px;
}
.total_row {
  padding-bottom: 20px;
}
</style>
