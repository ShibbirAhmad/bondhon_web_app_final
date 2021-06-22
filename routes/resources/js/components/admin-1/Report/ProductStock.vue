<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'addOrder' }" class="btn btn-primary">
            <i class="fa fa-plus"></i>
          </router-link>
          <router-link :to="{ name: 'NewOrder' }" class="btn btn-sm btn-success"
            >New</router-link
          >
          <router-link
            :to="{ name: 'PendingOrder' }"
            class="btn btn-sm btn-success"
            >Pending</router-link
          >
          <router-link
            :to="{ name: 'ApprovedOrder' }"
            class="btn btn-sm btn-success"
            >Approved</router-link
          >
          <router-link
            :to="{ name: 'ShipmentOrder' }"
            class="btn btn-sm btn-success"
            >Shipment</router-link
          >
          <router-link
            :to="{ name: 'DeliveredOrder' }"
            class="btn btn-sm btn-success"
            >Delivered</router-link
          >
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"> <i class="fa fa-dashboard"></i>Dashboard </a>
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
                      <select
                        class="form-control"
                        v-model="item"
                        @change="productList()"
                      >
                        <option value="20">20</option>
                        <option value="40">40</option>
                        <option value="80">80</option>
                        <option value="150">150</option>
                        <option value="200">200</option>
                        <option value="500">500</option>

                      </select>
                    </div>
                    <div class="col-lg-3"></div>
                     <div class="col-lg-4 orders-heading">
                      <h3 class="box-title">REPORT:STOCK</h3>
                    </div>
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
                        <th>Total quantity</th>
                        <th>Avarage purchase price</th>
                       <th>Total purchase Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr v-for="(product, index) in products"  :key="index">
                        <td scope="row">{{ 1}}</td>
                        <td>
                          <h4>
                            {{ product.product.name + "-" + product.product.product_code }}
                          </h4>
                        </td>
                        <td>
                          <span
                            v-if="product.product.stock <= 2"
                            class="badge badge-danger"
                            >{{ product.product.stock }}</span
                          >
                          <span v-else class="badge badge-success">
                            {{ product.product.stock }}</span
                          >
                        </td>
                        <td >
                     {{ product.total_qantity }}

                        </td>
                        <td >
                     <small>{{ product.total/product.total_qantity}}</small>
                        </td>
                        
                        <td>
                          {{product.total}}

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
      item: 20,
    };
  },
  methods: {
    productList() {
      console.log("resp");
      axios
        .get("/product/stock",{
          params:{
            item:this.item,
          }
        })
        .then((resp) => {
         
          this.products = resp.data;
          this.loading = false;

         
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  computed: {},
};
</script>

<style scoped>
</style>
