
<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'bill_statement' }" class="btn btn-primary">
            <i class="fa fa-arrow-left"></i>
          </router-link>
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
                <h4 class="heading"> {{ bill_statement.company_name }} </h4>
          </div>
          <div class="row data_table_row">
            <div class="col-md-6 col-sm-6">
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

            <div class="col-md-6 col-sm-6">
                   <div class="box">
                <div class="box-header with-border text-center">
                  <div class="row">
                    <div class="col-sm-7">
                       <h3 class="box-title">
                    Per Month History
                  </h3>
                    </div>
                    <div class="col-sm-3">
                          <button

                    @click="showModal"
                    class="btn btn-success"
                  >
                    <i class="fa fa-plus"></i> Monthly Statement
                  </button>
                    </div>
                  </div>

                </div>

                <div class="box-body">
                  <table class="table table-striped text-center table-bordered">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Month</th>
                        <th>Comment</th>
                          <th>Amount</th>
                         </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(per_month, index) in per_month_history"
                        :key="index"
                      >
                        <td >{{ index+1}}</td>

                     <td>
                       {{ per_month.date }}
                     </td>
                         <td>
                      <strong>
                         {{ per_month.month }}
                      </strong>
                     </td>
                      <td>
                       {{ per_month.comment }}
                     </td>
                     <td>
                     <strong>
                         {{ per_month.amount }}
                     </strong>
                     </td>

                      </tr>
                      <tr>
                        <td colspan="4"></td>
                        <td>
                          <strong> = {{ per_month_total }}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <modal name="example" :width="400" :height="380">
            <div class="card" style="padding: 20px">
              <div class="card-body">
                <div class="form-group">
                  <label>Date</label>
                  <date-picker
                    autocomplete="off"
                    v-model="date"
                    :config="options"
                  ></date-picker>
                </div>
                <div class="form-group">
                  <label>Month</label>
                  <select class="form-control" v-model="month">
                    <option value="" disabled>Select A Month</option>
                    <option value="January-2021">January-2021</option>
                    <option value="February-2021">February-2021</option>

                    <option value="March-2021">March-2021</option>

                    <option value="April-2021">April-2021</option>

                    <option value="May-2021">May-2021</option>

                    <option value="Jun-2021">Jun-2021</option>

                    <option value="July-2021">July-2021</option>

                    <option value="Augest-2021">Augest-2021</option>

                    <option value="September-2021">September-2021</option>
                    <option value="Nomeber-2021">Nomeber-2021</option>
                    <option value="December-2021">December-2021</option>
                  </select>
                </div>

                <div class="form-group">
                  <label>Amount</label>
                  <input
                    type="number"
                    v-model="amount"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label>Comment</label>
                  <input
                    type="text"
                    v-model="comment"
                    class="form-control"
                  />
                </div>

                <button
                  class="btn btn-success btn-block"
                  @click="addPerMonthBill"
                >
                  Submit
                </button>
              </div>
            </div>
          </modal>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
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
      per_month_history: "",
      per_month_total:"",
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
        .get("/api/bll/statement/details/"+this.$route.params.id+'?page='+page)
        .then((resp) => {
          console.log(resp);
          this.bill_statement = resp.data.bill_statement;
          this.bill_statement_id = this.$route.params.id;
          this.bill_history = resp.data.bill_history;
          this.total_bill = resp.data.total_bill;
          //per month statements
          this.per_month_history = resp.data.per_month_history;
          this.per_month_total = resp.data.per_month_total;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },

     addPerMonthBill() {

        if (this.date.length < 1) {
        alert("Please Check Date Filed");
        return;
      }

      if (this.month.length < 1) {
        alert("Please Select A Month");
        return;
      }

      if (this.amount.length < 1) {
        alert("Amount filed is empty");
        return;
      }
      if (this.amount < 1) {
        alert("Amount Can not be smaller 1");
        return;
      }

        axios.get("/api/bll/per/month/add",{
          params:{
            bill_statement_id : this.bill_statement_id,
            date : this.date,
            comment : this.comment,
            month : this.month,
            date :  this.date,
            amount : this.amount,
          }
        })
          .then((resp) => {
            console.log(resp);
            if (resp.data.status=="OK") {
              this.getBillStatement();
              this.$toasted.show(resp.data.message,{
                type:'success',
                position:'top-center',
                duration:4000,
              })
               this.$modal.hide("example");
            }
          });

      },

     showModal() {
      this.$modal.show("example");
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
