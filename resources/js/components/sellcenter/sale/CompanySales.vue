<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'sell_center_sale_add' }" class="btn btn-primary"
            ><i class="fa fa-plus"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Sales</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-11">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                  <h3 class="box-title">Sales Records </h3>

                    <div style="margin-top: 10px" class="row">
                    <div class="col-lg-8">
                      <form @submit.prevent="filterSales">
                        <div class="row">
                          <div class="col-lg-5">
                            <date-picker
                              autocomplete="off"
                              v-model="start_date"
                              placeholder="start-date"
                              :config="options"
                            ></date-picker>
                          </div>
                          <div class="col-lg-5">
                            <date-picker
                              autocomplete="off"
                              v-model="end_date"
                              placeholder="end-date"
                              :config="options"
                            ></date-picker>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div class="col-lg-4">
                      <select class="form-control" v-model="item" @change="saleList">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="40">40</option>
                      </select>
                    </div>
 

                  </div>

                </div>
                <div class="box-body">
                  <table class="table text-center table-bordered table-hover table-striped ">
                    <thead>
                      <tr>
                        <th width="5%">#</th>
                        <th width="10%">Invoice</th>
                        <th width="20%">Customer</th>
                        <th width="20%">Address</th>
                        <th width="10%">Amount</th>
                        <th width="10%">Paid</th>
                        <th width="10%">Due</th>
                        <th width="15%">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr v-for="(sale, index) in sales.data" :key="index" v-else>
                        <td scope="row">{{ index + 1 }}</td>
                        <td>{{  sale.invoice_no }}</td>
                        <td>{{     sale.customer_name ? sale.customer_name : 'empty' }} <br>
                            <b> {{  sale.customer_phone ? sale.customer_phone : 'empty'  }} </b>
                       </td>
                        <td> {{ sale.customer_address ? sale.customer_address : 'empty' }}</td>
                        <td> {{ sale.amount }}</td>
                        <td> {{ sale.paid }} </td>
                        <td> {{ sale.discount }} </td>
                        <td>
                          <router-link
                            :to="{
                              name: 'sell_center_sale_edit',
                              params: { id: sale.id },
                            }"
                            class="btn btn-success btn-sm"
                            ><i class="fa fa-eye"></i
                          ></router-link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="box-footer">
                  <div class="row">
                    <div class="col-lg-6">
                      <pagination
                        :data="sales"
                        @pagination-change-page="saleList"
                        :limit="3"
                      ></pagination>
                    </div>
                    <div
                      class="col-lg-6 mt-1"
                      style="margin-top: 25px; text-align: right"
                    >
                      <p>
                        Showing <strong>{{ sales.from }}</strong> to
                        <strong>{{ sales.to }}</strong> of total
                        <strong>{{ sales.total }}</strong> entries
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
    this.saleList();
  },
  data() {
    return {
      sales: {},
      loading: true,
      item: 20,
      start_date: "",
      end_date: "",
      data_search: "",
      //date picker options ..........
      options: {
        format: "YYYY-MM-DD",
        useCurrent: true,
      },
    };
  },
  methods: {

    filterSales(page = 1) {
      //fetch data
      axios
        .get("/api/sell/center/company/sales?page=" + page, {
          //send data
          params: {
            start_date: this.start_date,
            end_date: this.end_date,
            item: this.item,
          },
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.sales = resp.data.sales;
          }
        })
    },

    saleList(page = 1) {
      axios
        .get("/api/sell/center/company/sales?page=" + page, {
          params: {
            item: this.item,
          },
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.sales = resp.data.sales;
            this.loading = false;
          } else {
            this.$toasted.show("something went to wrong", {
              type: "error",
              position: "top-center",
              duration: 5000,
            });
          }
        })
        .catch((error) => {
          this.$toasted.show("something went to wrong", {
            type: "error",
            position: "top-center",
            duration: 4000,
          });
        });
    },

  },
  watch: {
    start_date: function (value) {
      if (value.length > 1) {
        this.filterSales();
      }
    },
    end_date: function (value) {
      if (value.length > 1) {
        this.filterSales();
      }
    },
  },
};
</script>

<style scoped></style>
