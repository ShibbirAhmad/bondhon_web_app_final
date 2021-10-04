<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link
            :to="{ name: 'sell_center_product_add' }"
            class="btn btn-primary"
          >
            <i class="fa fa-plus"></i>
          </router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"> <i class="fa fa-dashboard"></i>Dashboard </a>
          </li>
          <li class="active">Product Table</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-11 col-md-11 ">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <div class="row">
                    <div class="col-lg-2">
                      <select
                        class="form-control"
                        v-model="item"
                        @change="productList()"
                      >
                        <option value="30">30</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="150">150</option>
                        <option value="200">200</option>
                      </select>
                    </div>
                    <div class="col-lg-4 text-center"> <h4> Products Table</h4></div>
                    <div class="col-lg-4">
                      <input
                        class="form-control"
                        placeholder="search with product code or name "
                        v-model="search"
                        @keyup="productSearch()"
                      />
                    </div>
                    <div class="col-lg-2">
                      <select
                        class="form-control"
                        v-model="status"
                        @change="productList"
                      >
                        <option value="all">All</option>
                        <option value="1">Approved</option>
                        <option value="2">Pending</option>
                        <option value="3">Deny</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="box-body">
                  <table class="table table-striped text-center table-hover table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Purchase Price</th>
                        <th scope="col">Sale price</th>
                        <th scope="col">Stock</th>
                        <th scope="col">status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>

                      <tr
                        v-for="(product, index) in products.data"
                        v-else
                        :key="index"
                      >
                        <td scope="row">{{ index + 1 }}</td>
                        <td>{{ product.name }}-{{ product.code }}</td>
                           <td>
                          <img
                            :src="product.image ? basePath+product.image :basePath+ 'images/no_image.jpg'"
                             width="50px" height="50px"
                            alt="product image"
                          />
                        </td>
                        <td>&#2547;{{ product.price }}</td>
                        <td>
                          <span class="badge badge-warning">{{
                             product.discount
                          }}</span>
                        </td>
                        <td>&#2547;{{ purchasePrice(product.purchase_items) }}</td>
                        <td>&#2547;{{ product.sale_price }}</td>

                        <td>
                          <span
                            v-if="product.stock <= 5"
                            class="badge badge-danger"
                            >{{ product.stock }}</span
                          >
                          <span v-else class="badge badge-success">{{
                            product.stock
                          }}</span>
                        </td>
                        <td>
                          <span
                            class="badge badge-success"
                            v-if="product.status == 1"
                            >Approved</span
                          >
                          <span
                            class="badge badge-primary"
                            v-else-if="product.status == 0"
                            >Pending</span
                          >
                          <span class="badge badge-warning" v-else>Deny</span>
                        </td>
                        <td>
                            <router-link
                              :to="{
                                name: 'sell_center_product_edit',
                                params: { id: product.id },
                              }"
                              class="btn btn-sm btn-success "
                              > <i class="fa fa-edit"> </i></router-link>
                                                       <a
                            class="btn btn-warning btn-sm"
                            title="De-active"
                            @click="deActive(product.id)"
                            v-if="product.status == 1"
                            ><i class="fa fa-ban"></i
                          ></a>
                          <a
                            class="btn btn-primary btn-sm"
                            title="active"
                            @click="active(product.id)"
                            v-else
                            ><i class="fa fa-check"></i
                          ></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="box-footer">
                  <div class="row">
                    <div class="col-lg-6">
                      <pagination
                        :data="products"
                        @pagination-change-page="productList"
                        :limit="3"
                      ></pagination>
                    </div>
                    <div
                      class="col-lg-6 mt-1"
                      style="margin-top: 25px; text-align: right"
                    >
                      <p>
                        Showing
                        <strong>{{ products.from }}</strong> to
                        <strong>{{ products.to }}</strong> of total
                        <strong>{{ products.total }}</strong> entries
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
import navbar from "../Navbar";
import { jsPDF } from "jspdf";

export default {
  created() {
    this.productList();
    setTimeout(() => {
      this.loading = false;
    }, 500);

    //this.interval = setInterval(() => this.productList(), 3000 );
  },
  data() {
    return {
      products: {},
      loading: true,
      basePath: this.$store.state.image_base_link ,
      search: "",
      item: "30",
      status: "all",
    };
  },
  methods: {
    productList(page = 1) {
      this.$Progress.start();
      axios
        .get("/api/sellcenter/products?page=" + page, {
          params: {
            status: this.status,
            item: this.item,
          },
        })
        .then((resp) => {
          // console.log(resp);

          this.products = resp.data.products;
          this.$Progress.finish();
        })
        .catch((error) => {
          console.log(error);
          this.$Progress.finish();
        });
    },

    productSearch() {
      if (this.search.length > 3) {
        this.$Progress.start();
        this.loading = true;
        axios
          .get("/api/sellcenter/search/product/"+this.search)
          .then((resp) => {
           // console.log(resp);
            if (resp.data.status == "SUCCESS") {
              this.products = resp.data.products;
              this.loading = false;
              this.$Progress.finish();
            }
          })

      } else {
        this.productList();
      }
    },

   purchasePrice(items){

      if (items) {
        let price = 0.0 ;
        let purchase_times = 0 ;
        items.forEach(item => {
            price += parseFloat(item.price) ;
            purchase_times += 1 ;
        });
        let  average_price = price / purchase_times ;
        return average_price  ;
        }
   },

    deActive(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You wan't de-active this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.value) {
          axios
            .get("/api/active/deactive/sellcenter/product/"+id)
            .then((resp) => {
              if (resp.data.status == "SUCCESS") {
                this.productList();
                this.$toasted.show(resp.data.message, {
                  position: "top-center",
                  type: "success",
                  duration: 4000,
                });
              } else {
                this.$toasted.show("something went to wrong", {
                  position: "top-center",
                  type: "error",
                  duration: 4000,
                });
              }
            })
            .catch((error) => {
              this.$toasted.show("something went to wrong", {
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
    active(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You wan't active this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.value) {
          axios
            .get("/api/active/deactive/sellcenter/product/"+id)
            .then((resp) => {
              if (resp.data.status == "SUCCESS") {
                this.productList();
                this.$toasted.show(resp.data.message, {
                  position: "top-center",
                  type: "success",
                  duration: 4000,
                });
              } else {
                this.$toasted.show("something went to wrong", {
                  position: "top-center",
                  type: "error",
                  duration: 4000,
                });
              }
            })
            .catch((error) => {
              this.$toasted.show("something went to wrong", {
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


  },
  components: {
    navbar,
  },
};
</script>

<style scoped>
.dropbtn {
  width: 100% !important;
  margin-bottom: 5px !important;
}
.dropbtn-active {
  display: block !important;
}
.dropdown-action {
  display: none;
  width: 90px;
  position: absolute;
}

.table-image{
  width:70px ;
  height: 70px;
}

</style>
