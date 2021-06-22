<template>
  <div class="wrapper-wide">
    <frontend-header></frontend-header>
    <div id="container">
      <div class="container">
        <div class="row">
          <div class="col-lg-6" style="margin-left:30px">
            <div class="row">
              <div class="col-lg-8">
                <input
                  class="form-control"
                  placeholder="Search Product"
                  v-model="search"
                  @keyup="searchProducts"
                />
              </div>
              <div class="col-lg-4">
                <button
                  type="button"
                  class="btn btn-success"
                  @click.prevent="searchProducts"
                >Search More</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row" style="margin-top:15px;">
          <div class="col-lg-3" v-for="product in products" v-if="products">
            <div class="product-thumb">
              <div class="image">
                <router-link :to="{ name: 'single', params: { slug: product.slug }}">
                  <img
                    :src="'/../public/storage/'+product.product_image[0].product_image"
                    :alt="product.name"
                    :title="product.name"
                    class="img-responsive"
                  />
                </router-link>
              </div>
              <div>
                <div class="caption">
                  <h4>
                    <router-link
                      :to="{ name: 'single', params: { slug: product.slug }}"
                    >{{product.name}}</router-link>
                  </h4>

                  <p class="price">
                    <span class="price-new">{{product.price}}</span>
                    <span class="price-old" v-if="product.discount">{{product.sale_price}}</span>
                    <!-- <span class="saving">-26%</span> -->
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-12 text-center" v-if="products.length < 1 ">
            <h3 class="alert alert-warning">No product Found</h3>
          </div>
        </div>
      </div>
    </div>

    <frontend-footer></frontend-footer>>
  </div>
</template>
<script>
export default {
  created() {
    this.searchProducts();
    window.scrollTo(0, 0);
  },
  data() {
    return {
      products: "",
      search: this.$route.params.search,
    };
  },

  methods: {
    searchProducts() {
      this.$Progress.start();
      axios
        .get("/_public/search/products/" + this.search)
        .then((resp) => {
          console.log(resp);
          this.products = resp.data;
          this.$Progress.finish();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>