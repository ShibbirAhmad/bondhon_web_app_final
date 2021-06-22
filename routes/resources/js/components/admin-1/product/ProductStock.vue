<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{name:'productAdd'}" class="btn btn-primary">
            <i class="fa fa-plus"></i>
          </router-link>
          <strong>Product Stock</strong>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#">
              <i class="fa fa-dashboard"></i>Dashboard
            </a>
          </li>
          <li class="active">Product Stock</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-11">
              <div class="box box-primary">
                  <div class="box-header with-border">
                    <div class="row">
                      <div class="col-lg-1">
                      <select class="form-control" v-model="item" @change="itemPerPage()">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="30">50</option>
                        <option value="30">100</option>
                      </select>
                    </div>
                    <div class="col-lg-7"></div>
                    <div class="col-lg-4">
                      <input
                        class="form-control"
                        placeholder="search with product code || product name "
                        v-model="search"
                        @keyup="productSearch()"
                      />
                    </div>
                  </div>
                </div>
                <div class="box-body">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product</th>
                        <th scope="col">Stock</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr v-for="(product,index) in products.data">
                        <td scope="row">{{index+1}}</td>
                        <td><h4>{{product.name + '-' + product.product_code}}</h4></td>
                        <td>
                          <span
                            v-if="product.stock <= 2"
                            class="badge badge-danger"
                          >{{product.stock}}</span>
                          <span v-else class="badge badge-success">
                              {{product.stock}}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="box-footer">
                  <div class="row">
                    <div class="col-lg-6">
                      <pagination :data="products" @pagination-change-page="getPagination"></pagination>
                    </div>
                    <div class="col-lg-6 mt-1" style="margin-top: 25px;text-align:right;">
                      <p>
                        Showing
                        <strong>{{products.from}}</strong> to
                        <strong>{{products.to}}</strong> of total
                        <strong>{{products.total}}</strong> entries
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
import { Form, HasError, AlertError } from "vform";

export default {
  created() {
    setTimeout(() => {
      this.productList();
    }, 500);

    //this.interval = setInterval(() => this.productList(), 3000 );
  },
  data() {
    return {
      products: {},
      loading: true,
      basePath: "storage/",
      search: "",
      item: "10",
    };
  },
  methods: {
    productList() {
      console.log("resp");
      axios
        .get("/list/product",{
          params:{
            status:"all"
          }
        })
        .then((resp) => {
            console.log(resp)
        
            this.products = resp.data.products;
            this.loading = false;
         
        })
        .catch((error) => {
          console.log(error);
        });
    },
    approved(product) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't active this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.value) {
          axios
            .get("/approved/product/" + product.id)
            .then((resp) => {
              //  console.log(resp)
              if (resp.data.status == "SUCCESS") {
                this.productList();
                this.$toasted.show(resp.data.message, {
                  position: "top-center",
                  type: "success",
                  duration: 4000,
                });
              } else {
                this.$toasted.show("some thing want to wrong", {
                  position: "top-center",
                  type: "error",
                  duration: 4000,
                });
              }
            })
            .catch((error) => {
              // console.log(error)
              this.$toasted.show("some thing want to wrong", {
                position: "top-center",
                type: "error",
                duration: 4000,
              });
            });
        } else {
          this.$toasted.show("OK ! no action here", {
            position: "top-center",
            type: "info",
            duration: 3000,
          });
        }
      });
    },
    pending(product) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't pending this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.value) {
          axios
            .get("/pending/product/" + product.id)
            .then((resp) => {
              if (resp.data.status == "SUCCESS") {
                this.productList();
                this.$toasted.show(resp.data.message, {
                  position: "top-center",
                  type: "success",
                  duration: 4000,
                });
              } else {
                this.$toasted.show("some thing want to wrong", {
                  position: "top-center",
                  type: "error",
                  duration: 4000,
                });
              }
            })
            .catch((error) => {
              this.$toasted.show("some thing want to wrong", {
                position: "top-center",
                type: "error",
                duration: 4000,
              });
            });
        } else {
          this.$toasted.show("Ok ! no action here", {
            position: "top-center",
            type: "info",
            duration: 3000,
          });
        }
      });
    },
    deny(product) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't deny this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.value) {
          axios
            .get("/deny/product/" + product.id)
            .then((resp) => {
              if (resp.data.status == "SUCCESS") {
                this.productList();
                this.$toasted.show(resp.data.message, {
                  position: "top-center",
                  type: "success",
                  duration: 4000,
                });
              } else {
                this.$toasted.show("some thing want to wrong", {
                  position: "top-center",
                  type: "error",
                  duration: 4000,
                });
              }
            })
            .catch((error) => {
              this.$toasted.show("some thing want to wrong", {
                position: "top-center",
                type: "error",
                duration: 4000,
              });
            });
        } else {
          this.$toasted.show("Ok ! no action here", {
            position: "top-center",
            type: "info",
            duration: 3000,
          });
        }
      });
    },
    stockUpdate(product) {
      let stock = prompt("How many stock you want to update ?");
      console.log(stock);
      axios
        .post("/stock/update/product/" + product.id, {
          stock: stock,
        })
        .then((resp) => {
          if (resp.data.status == "SUCCESS") {
            this.productList();
            this.$toasted.show(resp.data.message, {
              position: "top-center",
              type: "success",
              duration: 4000,
            });
          } else {
            this.$toasted.show("some thing want to wrong", {
              position: "top-center",
              type: "error",
              duration: 4000,
            });
          }
        })
        .catch((error) => {
          this.$toasted.show("ok ! no action here", {
            position: "top-right",
            type: "info",
            duration: 4000,
          });
        });
    },
    getPagination(page = 1) {
      this.loading = true;
      this.$Progress.start();

      axios
        .get("/list/product?page=" + page)
        .then((response) => {
          this.$Progress.finish();
          this.loading = false;
          this.products = response.data.products;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    itemPerPage() {
      this.loading = true;
      this.$Progress.start();
      axios
        .get("list/product", {
          params: {
            item: this.item,
          },
        })
        .then((resp) => {
          this.$Progress.finish();
          this.loading = false;
          if (resp.data.status == "SUCCESS") {
            this.products = resp.data.products;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    productSearch() {
      if (this.search.length > 1) {
        this.$Progress.start();
        this.loading = true;
        axios
          .get("/search/product/" + this.search)
          .then((resp) => {
            console.log(resp);
            if (resp.data.status == "SUCCESS") {
              this.products = resp.data.products;
              this.loading = false;
              this.$Progress.finish();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.productList();
      }
    },
  },

  computed: {},
};
</script>

<style scoped>
</style>
