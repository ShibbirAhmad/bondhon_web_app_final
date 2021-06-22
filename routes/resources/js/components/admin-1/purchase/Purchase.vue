<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'addPurchase' }" class="btn btn-primary"
            ><i class="fa fa-plus"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Purchase</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-lg-offset-1">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <div class="row">
                    <div class="col-lg-6">
                      <h3 class="box-title">Purchase table</h3>
                    </div>
                    <div class="col-lg-4"></div>
                    <div class="col-lg-2">
                      <select
                        class="form-control"
                        v-model="item"
                        @change="itemPerPage"
                      >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="box-body">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Invoice_no</th>
                        <th scope="col">Merchant</th>
                        <th scope="col">Purchase_date</th>
                        <th scope="col">Total_amount</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr v-for="(purchase, index) in purchases.data" v-else>
                        <td scope="row">{{ index + 1 }}</td>
                        <td>{{ purchase.invoice_no }}</td>
                        <td>{{ purchase.merchant.company_name }}</td>
                        <td>{{ purchase.purchase_date }}</td>
                        <td>
                          {{ purchase.total }}
                        </td>
                        <td>
                          <router-link
                            :to="{
                              name: 'purchaseView',
                              params: { id: purchase.id },
                            }"
                            class="btn btn-primary btn-sm"
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
                        :data="purchases"
                        @pagination-change-page="getPagination"
                      ></pagination>
                    </div>
                    <div
                      class="col-lg-6 mt-1"
                      style="margin-top: 25px; text-align: right"
                    >
                      <p>
                        Showing <strong>{{ purchases.from }}</strong> to
                        <strong>{{ purchases.to }}</strong> of total
                        <strong>{{ purchases.total }}</strong> entries
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
import Index from "../Index";

export default {
  components: { Index },

  created() {
    setTimeout(() => {
      this.purchaseList();
    }, 500);
  },
  data() {
    return {
      purchases: {},
      loading: true,
      item: "10",
    };
  },
  methods: {
    purchaseList() {
      axios
        .get("/list/purchase")
        .then((resp) => {
          console.log(resp);
          //  console.log(resp.data.admins.data)
          if (resp.data.status == "SUCCESS") {
            this.purchases = resp.data.purchases;
            this.loading = false;
          } else {
            this.$toasted.show("some thing want to wrong", {
              type: "error",
              position: "top-center",
              duration: 5000,
            });
          }
        })
        .catch((error) => {
          this.$toasted.show("some thing want to wrong", {
            type: "error",
            position: "top-center",
            duration: 4000,
          });
        });
    },
    itemPerPage() {
      this.loading = true;
      this.$Progress.start();
      axios
        .get("/list/purchase", {
          params: {
            item: this.item,
          },
        })
        .then((resp) => {
          console.log(resp);
          //  console.log(resp.data.admins.data)
          if (resp.data.status == "SUCCESS") {
            this.purchases = resp.data.purchases;
            this.loading = false;
            this.$Progress.finish();
          } else {
            this.$toasted.show("some thing want to wrong", {
              type: "error",
              position: "top-center",
              duration: 5000,
            });
          }
        })
        .catch((error) => {
          this.$toasted.show("some thing want to wrong", {
            type: "error",
            position: "top-center",
            duration: 4000,
          });
        });
    },
    getPagination(page = 1) {
      this.loading = true;
      this.$Progress.start();

      axios
        .get("/list/purchase?page=" + page)
        .then((response) => {
          this.$Progress.finish();
          this.loading = false;
          this.purchases = response.data.purchases;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
</style>
