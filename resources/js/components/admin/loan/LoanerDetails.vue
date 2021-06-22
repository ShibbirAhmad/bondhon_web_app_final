<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <a @click.prevent="addMore" class="btn btn-primary"
            ><i class="fa fa-plus"></i
          ></a>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Loaner</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 __c_box">
              <h4>
                Total Loan Amount:

                {{ totalLoanAmount() }}
              </h4>
            </div>
            <div class="col-lg-4 __c_box">
              <h4>
                Total Paid Amount:

                {{ totalPaidAmount() }}
              </h4>
            </div>

            <div class="col-lg-4 __c_box">
              <h4>
                Total Due Amount:

                {{ totalLoanAmount() - totalPaidAmount() }}
              </h4>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-8 col-lg-offset-1">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3
                    class="box-title"
                    @click="loanMode = true"
                    :class="{ bb: loanMode }"
                  >
                    Loan History
                  </h3>
                  <h3
                    class="box-title"
                    @click="loanMode = false"
                    :class="{ bb: !loanMode }"
                  >
                    Payment History
                  </h3>
                </div>
                <div class="box-body">
                  <table v-if="loanMode" class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                         <th scope="col">Purpose</th>
                        <th scope="col">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr v-for="(items, index) in loans" v-bind:key="index">
                        <td scope="row">{{ index + 1 }}</td>
                        <td>{{ items.date }}</td>
                        <td>{{ items.purpose }}</td>
                        <td>{{ items.amount }}</td>
                      </tr>
                      <tr>
                        <td colspan="3"></td>
                        <td>
                          <strong> ={{ totalLoanAmount() }}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table v-else class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr
                        v-for="(loanpaid, index) in loanpaids"
                        v-bind:key="index"
                      >
                        <td scope="row">{{ index + 1 }}</td>
                        <td>{{ loanpaid.date }}</td>
                        <td>{{ loanpaid.amount }}</td>
                      </tr>
                         <tr>
                        <td colspan="2"></td>
                        <td>
                          <strong> ={{ totalPaidAmount() }}</strong>
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
    this.getLoans();
  },
  data() {
    return {
      loan: "",
      loading: true,
      basePath: this.$store.getters.image_base_link,
      item: "",
      search: "",
      loanMode: true,
      loans: "",
      loanpaids: "",
    };
  },
  methods: {
    getLoans() {
      axios
        .get("/api/loaners/details/" + this.$route.params.id)
        .then((resp) => {
          console.log(resp);

          this.loans = resp.data.loans;
          this.loanpaids = resp.data.loanPaid;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    totalLoanAmount() {
      let total = 0;

      this.loans.forEach((element) => {
        total += parseInt(element.amount);
      });

      return total;
    },
    totalPaidAmount() {
      let total = 0;

      this.loanpaids.forEach((element) => {
        total += parseInt(element.amount);
      });

      return total;
    },

    addMore(){
      let amount=prompt("Enter Amount: ");

      if(parseInt(amount)>0){

        let purpose=prompt("Enter purpose: ");


        axios.get('/api/loan/store/'+this.$route.params.id,{
          params:{
           amount,
           purpose

          }
        })
        .then(resp=>{
         if(resp.data.success=="OK"){
           alert('Loan added successfully');
           this.getLoans();
         }else{
           alert('Error Found')
         }
        })
        .catch(e=>{
          console.log(e);
        })
      }
    }
  },
};
</script>

<style>
.col-lg-4.__c_box {
  padding: 10px;
  background: #fff;
  width: 220px;
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
