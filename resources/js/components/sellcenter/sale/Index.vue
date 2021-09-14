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
                        <th scope="col">#</th>
                        <th scope="col">Invoice</th>
                        <th scope="col">Product</th>
                        <th scope="col">Unit</th>
                        <th scope="col">Price</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr v-for="(sale, index) in sales.data" :key="index" v-else>
                        <td scope="row">{{ index + 1 }}</td>
                        <td>{{ "S-" + sale.id }}</td>
                        <td>{{ sale.product.name }}</td>

                        <td>{{ sale.quantity+'-'+sale.quantity_type }}</td>
                        <td>{{ sale.price }}</td>
                        <td>{{ sale.amount }}</td>
                        <td>
                          <router-link
                            :to="{
                              name: 'sell_center_sale_edit',
                              params: { id: sale.id },
                            }"
                            class="btn btn-success btn-sm"
                            ><i class="fa fa-edit"></i
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
        .get("/api/sellcenter/sales/filter?page=" + page, {
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
        .get("/api/sellcenter/sales?page=" + page, {
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
