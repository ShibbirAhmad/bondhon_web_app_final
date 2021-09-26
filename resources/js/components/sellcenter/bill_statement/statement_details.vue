
<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <a @click="goBack" class="btn btn-primary">
            <i class="fa fa-arrow-left"></i>
          </a>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Bill</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row  over_view_row text-center">
                <h4 class="heading"> {{ bill_statement.name }} </h4>
          </div>
          <div class="row data_table_row">
            <div class="col-md-10 col-sm-10">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                  <h3 class="box-title"> Paid History </h3>
                </div>

                <div class="box-body">
                  <table class="table table-striped text-center table-borderd">
                    <tr>
                      <th>#</th>
                      <th>Date</th>
                      <th>Comment</th>
                      <th>Amount</th>
                    </tr>
                    <tbody>
                      <tr v-for="(item, index) in bill_history.data" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.date }}</td>
                        <td>{{ item.comment }}</td>
                        <td>{{ item.amount }}</td>
                      </tr>
                      <tr>
                        <td colspan="3">In Total</td>
                        <td>{{ total_bill }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                   <div class="box-footer">
                  <div class="row">
                    <div class="col-sm-12">
                      <pagination
                        :data="bill_history"
                        @pagination-change-page="getBillStatement"
                        :limit="3"
                      >
                      </pagination>
                    </div>
                    <div class="col-sm-12 ">
                      <p>
                        Showing <strong>{{ bill_history.from }}</strong> to
                        <strong>{{ bill_history.to }}</strong> of total
                        <strong>{{ bill_history.total }}</strong> entries
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
import navbar from "../Navbar.vue"
export default {
  components:{
    navbar
  },
  created() {
    this.getBillStatement();
  },
  data() {
    return {
      bill_statement: "",
      loading: true,
      bill_history:{},
      total_bill: "",
      bill_statement_id: "",
      date: "",
      month: "",
      comment: "",
      amount:"",
      options: {
        format: "YYYY-MM-DD",
        useCurrent: false,
      },
    };
  },
  methods: {
    getBillStatement(page=1) {
      axios
        .get("/api/sellcenter/bill/statement/details/"+this.$route.params.id+'?page='+page)
        .then((resp) => {
          console.log(resp);
          this.bill_statement = resp.data.bill_statement;
          this.bill_statement_id = this.$route.params.id;
          this.bill_history = resp.data.bill_history;
          this.total_bill = resp.data.total_bill;
          this.loading = false;
        })
        
    },

    
    goBack(){
      window.history.back()
    },


     cDate() {
      //current date
      let d = new Date();
      let month = d.getMonth() + 1;
      let day = d.getDate();
      let output =
        d.getFullYear() +
        "-" +
        (("" + month).length < 2 ? "0" : "") +
        month +
        "-" +
        (("" + day).length < 2 ? "0" : "") +
        day;
      this.salary_date = output;
    },
  },
};
</script>

<style>
.col-lg-3.__c_box {
  padding: 10px;
  background: #fff;
  width: 250px;
  height: 85px;
  margin-right: 15px;
  margin-bottom: 20px;
  text-align: center;
  box-shadow: 3px 3px 3px #ddd;
}
.box-title {
  padding: 5px 6px;
  cursor: pointer;
}

.data_table_row{
  width: 80%;
  overflow-x: scroll;
}

.over_view_row{
  width: 70%;
  height:70px;
  margin-left: 5%;
  box-shadow: 1px 1px 2px 1px #ddd ;
  margin-bottom: 20px;
}

</style>
