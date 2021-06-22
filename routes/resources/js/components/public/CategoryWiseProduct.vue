<template>
  <div class="wrapper-wide">
    <frontend-header></frontend-header>
    <div id="container">
      <div class="container">
        <!-- Breadcrumb Start-->
        <ul class="breadcrumb">
          <li
            v-for="category in category"
            v-if="category.slug == $route.params.slug"
          >
            <router-link
              :to="{ name: 'PublcaCategory', params: { slug: category.slug } }"
            >
              <i class="fa fa-home"></i>
              /
              {{ category.name }}
            </router-link>
          </li>
        </ul>

        <!-- Breadcrumb End-->
        <div class="row">
          <!--Left Part Start -->
          <aside id="column-left" class="col-sm-3 hidden-xs">
            <h3 class="subtitle">Other's Categories</h3>
            <div class="box-category">
              <ul id="cat_accordion">
                <li
                  v-for="category in category"
                  v-if="category.slug != $route.params.slug"
                >
                  <router-link
                    :to="{
                      name: 'PublcaCategory',
                      params: { slug: category.slug },
                    }"
                    >{{ category.name }}</router-link
                  >
                </li>
              </ul>
            </div>
            <!-- <div class="prce-file">
              <div class="row">
                <div class="col-lg-2">
                  <input
                    type="text"
                    style="width:90px;"
                    class="form-control"
                    placeholder="min_price"
                    v-model="price_filter.min_price"
                  />
                </div>
                <div class="col-lg-2"></div>

                <div class="col-lg-2">
                  <input
                    type="text"
                    style="width:80px;"
                    class="form-control"
                    placeholder="max_price"
                    v-model="price_filter.max_price"
                  />
                </div>
                <div class="col-lg-2"></div>
                <div class="col-lg-4">
                  <button class="btn btn-sm btn-success" @click="priceFilter">Filter</button>
                </div>
              </div>
            </div>-->
          </aside>
          <!--Left Part End -->
          <!--Middle Part Start-->
          <div id="content" class="col-sm-9">
            <h1 class="title">{{ category_name }}</h1>

            <div class="product-filter" style="display: none">
              <div class="row">
                <div class="col-md-4 col-sm-5">
                  <div class="btn-group">
                    <button
                      type="button"
                      id="list-view"
                      class="btn btn-default"
                      data-toggle="tooltip"
                      title="List"
                    >
                      <i class="fa fa-th-list"></i>
                    </button>
                    <button
                      type="button"
                      id="grid-view"
                      class="btn btn-default"
                      data-toggle="tooltip"
                      title="Grid"
                    >
                      <i class="fa fa-th"></i>
                    </button>
                  </div>
                  <a href="compare.html" id="compare-total"
                    >Product Compare (0)</a
                  >
                </div>
                <div class="col-sm-2 text-right">
                  <label class="control-label" for="input-sort">Sort By:</label>
                </div>
                <div class="col-md-3 col-sm-2 text-right">
                  <select id="input-sort" class="form-control col-sm-3">
                    <option value selected="selected">Default</option>
                    <option value>Name (A - Z)</option>
                    <option value>Name (Z - A)</option>
                    <option value>Price (Low &gt; High)</option>
                    <option value>Price (High &gt; Low)</option>
                    <option value>Rating (Highest)</option>
                    <option value>Rating (Lowest)</option>
                    <option value>Model (A - Z)</option>
                    <option value>Model (Z - A)</option>
                  </select>
                </div>
                <div class="col-sm-1 text-right">
                  <label class="control-label" for="input-limit">Show:</label>
                </div>
                <div class="col-sm-2 text-right">
                  <select id="input-limit" class="form-control">
                    <option value selected="selected">20</option>
                    <option value>25</option>
                    <option value>50</option>
                    <option value>75</option>
                    <option value>100</option>
                  </select>
                </div>
              </div>
            </div>
            <br />
            <div class="row products-category">
              <div
                class="product-layout product-grid col-lg-3 col-xs-12"
                v-for="product in products"
              >
                <div class="product-thumb">
                  <div class="image">
                    <router-link
                      :to="{ name: 'single', params: { slug: product.slug } }"
                    >
                      <!-- <img
                      v-if="product.product_image.length > 0"
                        :src="base_url + product.product_image[0].product_image"
                        :alt="product.name"
                        :title="product.name"
                        class="img-responsive"
                      /> -->

                        <v-lazy-image
                         v-if="product.product_image.length > 0"
                        :src="base_url + product.product_image[0].product_image"
                        :alt="product.name"
                        :title="product.name"
                        class="img-responsive"
                        :src-placeholder="base_url+'images/static/d2.jpg'"
                  />
                    </router-link>
                  </div>
                  <div>
                    <div class="caption">
                      <h4>
                        <router-link
                          :to="{
                            name: 'single',
                            params: { slug: product.slug },
                          }"
                          >{{ product.name }}</router-link
                        >
                      </h4>

                      <p class="price">
                        <span class="price-new">{{ product.price }}</span>
                        <span class="price-old" v-if="product.discount">{{
                          product.sale_price
                        }}</span>
                        <br>
                        <small >Product Code: {{product.product_code}}</small>

                        <!-- <span class="saving">-26%</span> -->
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <infinite-loading @infinite="categoryWiseProduct">
                <div slot="no-more"></div>
              </infinite-loading>
            </div>
          </div>
          <!--Middle Part End -->
        </div>
      </div>
    </div>

    <frontend-footer></frontend-footer>>
  </div>
</template>
<script>
export default {
  created() {
    window.scrollTo(0, 0);
   
    this.$Progress.start();
    setTimeout(() => {
      this.$Progress.finish();
    }, 500);
  },
  data() {
    return {
      products: [],
      category_name: "",
      page: 1,
      price_page: 1,

      price_filter: {
        min_price: "",
        max_price: "",
      },
     base_url: this.$store.state.image_base_link,
    };
  },
  methods: {
    categoryWiseProduct($state) {
      axios
        .get("/_public/category/wise/product/?page=" + this.page, {
          params: {
            slug: this.$route.params.slug,
          },
        })
        .then((resp) => {
          if (resp.data.data.length) {
           
            this.page += 1;
            this.products.push(...resp.data.data);
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    priceFilter($state) {
      axios
        .get(
          "/_public/category/wise/product/price/filter?page=" + this.price_page,
          {
            params: {
              category_id: this.$route.params.id,
              min_price: this.price_filter.min_price,
              max_price: this.price_filter.max_price,
            },
          }
        )
        .then((resp) => {
          console.log(resp);
          this.isLoading = false;
          if (this.price_page == 1) {
            this.products = [];
          }
          console.log(resp);
          if (resp.data.data) {
            console.log(resp);
            this.price_page += 1;
            this.products.push(...resp.data.data);
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
        });
    },

   
  },

  computed: {
    category() {
      return this.$store.getters.categories;
    },
  },

  mounted() {
    //for get category from vuex
    this.$store.dispatch("category");
  },
};
</script>