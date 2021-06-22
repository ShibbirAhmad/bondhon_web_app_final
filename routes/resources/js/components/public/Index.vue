<template>
  <div class="wrapper-wide">
    <frontend-header></frontend-header>
    <div id="container">
      <div class="container">
        <div class="row">
          <!--Middle Part Start-->
          <div id="content" class="col-xs-12">
            <div class="row">
              <div class="col-lg-3">
                <ul class="side-nav">
                  <li v-for="(category, index) in category" :key="index">
                    <img :src="base_url + category.icon_image"
                      v-if="category.icon_image"
                      class="category_icon_image"
                    />
                    
                    <router-link
                      :to="{
                        name: 'PublcaCategory',
                        params: { slug: category.slug },
                      }"
                      class="nav-main-item"
                    >
                      {{ category.name }}</router-link
                    >
                    <i
                      class="fa fa-plus show-sub"
                      v-if="category.sub_category.length > 0"
                    ></i>
                    <ul
                      class="left-sub-menu"
                      v-if="category.sub_category.length > 0"
                    >
                      <li
                        v-for="(sub_category, i) in category.sub_category"
                        :key="i"
                      >
                        <router-link
                          :to="{
                            name: 'PublicSubCategory',
                            params: { slug: sub_category.slug },
                          }"
                          class="nav-main-item"
                          >{{ sub_category.name }}</router-link
                        >

                        <ul
                          class="last-sider-bar"
                          v-if="sub_category.sub_sub_category.length > 0"
                        >
                          <li
                            v-for="(sub_sub_category,
                            x) in sub_category.sub_sub_category"
                            :key="x"
                          >
                            <router-link
                              :to="{
                                name: 'PublicSubSUbCategory',
                                params: { slug: sub_sub_category.slug },
                              }"
                              class="nav-main-item"
                              >{{ sub_sub_category.name }}</router-link
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="col-sm-9">
                <carousel
                  v-if="sliders"
                  :items="1"
                  :nav="false"
                  :autoplay="true"
                  :autoplayTimeout="2000"
                >
                  <a v-for="slider in sliders" :href="slider.url">
                    <v-lazy-image
                    :src="base_url + slider.image"
                    :src-placeholder="base_url+'images/static/d2.jpg'"
                  />
                    <!-- <img :src="base_url + slider.image"/> -->
                  </a>
                </carousel>
              </div>
              <!-- <div class="col-sm-4 pull-right flip">
                <div class="marketshop-banner">
                  <div class="row" v-if="silder_banners">
                    <div
                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                      v-for="(banner,index) in silder_banners"
                      :key="index"
                    >
                      <a :href="banner.url">
                        <img
                          title="sample-banner1"
                          alt="sample-banner1"
                           :src="base_url+banner.image"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div> -->
            </div>

            <h3 class="subtitle">Top Selling products</h3>
            <div
              class="product_carousel"
              v-if="Object.keys(best_selling_produtcs).length"
            >
              <carousel
                v-if="Object.keys(best_selling_produtcs).length"
                :items="5"
                :nav="false"
                :autoplay="true"
                :autoplayTimeout="4000"
                :responsive="{ 0: { items: 1 }, 600: { items: 5 } }"
              >
                <div
                  class="product-thumb clearfix"
                  v-for="best_slllers_product in best_selling_produtcs"
                  :key="best_slllers_product.id"
                >
                  <div class="image">
                    <router-link
                      :to="{
                        name: 'single',
                        params: { slug: best_slllers_product.slug },
                      }"
                    >
                      <!-- <img
                        v-if="best_slllers_product.product_image.length>0"
                        :src="
                          base_url +
                          best_slllers_product.product_image[0].product_image
                        "
                        :alt="best_slllers_product.name"
                        :title="best_slllers_product.name"
                        class="img-responsive"
                      /> -->
                       <v-lazy-image
                         v-if="best_slllers_product.product_image.length>0"
                        :src=" base_url + best_slllers_product.product_image[0].product_image"
                        :alt="best_slllers_product.name"
                        :title="best_slllers_product.name"
                        class="img-responsive"
                        :src-placeholder="base_url+'images/static/d1.jpg'"
                  />
                    </router-link>
                  </div>
                  <div class="caption">
                    <h4>
                      <router-link
                        :to="{
                          name: 'single',
                          params: { slug: best_slllers_product.slug },
                        }"
                        >{{ best_slllers_product.name }}</router-link
                      >
                    </h4>
                    <p class="price">
                      <span class="price-new">{{
                        best_slllers_product.price
                      }}</span>
                      <span
                        class="price-old"
                        v-if="best_slllers_product.discount"
                        >{{ best_slllers_product.sale_price }}</span
                      >
                      <!-- <span class="saving">-26%</span> -->
                    </p>
                  </div>
                </div>
              </carousel>
            </div>

            <div v-if="isScroll > 0">
              <div
                class="marketshop-banner"
                v-if="Object.keys(getOffers).length"
              >
                <div class="row">
                  <div
                    class="col-lg-2 col-md-2 col-sm-6 col-xs-6"
                    v-for="offer in getOffers"
                    :key="offer.id"
                  >
                    <a :href="offer.url" target="_blank">
                      <!-- <img
                        title="offer"
                        alt="offer"
                        :src="base_url + offer.image"
                      /> -->
                        <v-lazy-image
                        title="offer"
                        alt="offer"
                        :src="base_url + offer.image"
                        :src-placeholder="base_url+'images/static/d2.jpg'"
                  />

                      
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="product_carousel flash_sale"
                v-if="Object.keys(flash_sale_products).length"
              >
                <h3>Flash Sale</h3>
                <carousel
                  v-if="Object.keys(flash_sale_products).length"
                  :nav="false"
                  :autoplay="true"
                  :autoplayTimeout="4000"
                  :responsive="{ 0: { items: 1 }, 600: { items: 7 } }"
                >
                  <div
                    class="product-thumb clearfix"
                    v-for="flash_sale_product in flash_sale_products"
                    :key="flash_sale_product.id"
                  >
                    <div class="image">
                      <router-link
                        :to="{
                          name: 'single',
                          params: { slug: flash_sale_product.slug },
                        }"
                      >
                        <!-- <img
                        v-if="flash_sale_product.product_image.length>0"
                          :src="
                            base_url +
                            flash_sale_product.product_image[0].product_image
                          "
                          :alt="flash_sale_product.name"
                          :title="flash_sale_product.name"
                          class="img-responsive"
                        /> -->

                          <v-lazy-image
                         v-if="flash_sale_product.product_image.length>0"
                          :src=" base_url + flash_sale_product.product_image[0].product_image"
                          :alt="flash_sale_product.name"
                          :title="flash_sale_product.name"
                          class="img-responsive"
                        :src-placeholder="base_url+'images/static/d2.jpg'"
                  />

                      </router-link>
                    </div>
                    <div class="caption">
                      <h4>
                        <router-link
                          :to="{
                            name: 'single',
                            params: { slug: flash_sale_product.slug },
                          }"
                          >{{ flash_sale_product.name }}</router-link
                        >
                      </h4>
                      <p class="price">
                        <span class="price-new">{{
                          flash_sale_product.price
                        }}</span>
                        <span
                          class="price-old"
                          v-if="flash_sale_product.discount"
                          >{{ flash_sale_product.sale_price }}</span
                        >
                        <!-- <span class="saving">-26%</span> -->
                      </p>
                    </div>
                  </div>
                </carousel>
              </div>
              <div
                class="product"
                v-for="(category, index) in category_products"
                :key="index"
                v-if="category.product.length > 0"
              >
                <div class="product-body">
                  <div class="row">
                    <div class="col-lg-2 col-sm-2 col-md-3">
                      <div class="product-side-category">
                        <ul class="list-group">
                          <router-link
                            :to="{
                              name: 'PublcaCategory',
                              params: { slug: category.slug },
                            }"
                            class="list-group-item active"
                            >{{ category.name }}</router-link
                          >

                          <li
                            v-if="category.sub_category.length > 0"
                            v-for="(subCategory, key) in category.sub_category"
                            :key="key"
                            class="list-group-item"
                          >
                            <router-link
                              :to="{
                                name: 'PublicSubCategory',
                                params: { slug: subCategory.slug },
                              }"
                              class="nav-router"
                              >{{ subCategory.name }}</router-link
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-10">
                      <div class="product-content">
                        <div class="row">
                          <div
                            class="col-lg-3"
                            v-for="(product, i) in category.product"
                            :key="i"
                            v-if="i < 8"
                            style="margin-right: -10px"
                          >
                            <div class="product-thumb">
                              <div class="image">
                                <router-link
                                  :to="{
                                    name: 'single',
                                    params: { slug: product.slug },
                                  }"
                                >
                                  <!-- <img
                                  v-if="product.product_image.length>0"
                                    :src="
                                      base_url +
                                      product.product_image[0].product_image
                                    "
                                    :alt="product.name"
                                    :title="product.name"
                                    class="img-responsive"
                                  /> -->

                                  <v-lazy-image
                                 v-if="product.product_image.length>0"
                                    :src="base_url + product.product_image[0].product_image"
                                    :alt="product.name"
                                    :title="product.name"
                                    class="img-responsive"
                                    :src-placeholder="base_url+'images/static/d2.jpg'" />
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
                                    <span class="price-new">{{
                                      product.price
                                    }}</span>
                                    <span
                                      class="price-old"
                                      v-if="product.discount"
                                      >{{ product.sale_price }}</span
                                    >
                                    <!-- <span class="saving">-26%</span> -->
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <infinite-loading @infinite="productsList">
                <div slot="no-more"></div>
              </infinite-loading>
            </div>
          </div>
          <!--Middle Part End-->
        </div>
      </div>
    </div>
    <frontend-footer></frontend-footer>
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import carousel from "vue-owl-carousel";


export default {
  name: "welcome",
  data() {
    return {
      loading: true,
      category_products: [],
      page: 1,
      offers: [],
      isScroll: 0,

      // silder_banners: [],
     base_url: this.$store.state.image_base_link,

    };
  },
  methods: {
    //method initial for for get product list
    productsList($state) {
      axios.get("/_public/products/?page=" + this.page).then((resp) => {
        if (resp.data.data.length) {
          this.page += 1;
          this.category_products.push(...resp.data.data);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
    handleScrol() {
      this.isScroll = 1;
    },
  },
  components: {
    Loading,
    carousel,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScrol);

    //for get category from vuex
    this.$store.dispatch("category");

    //for get sliders from vuex
    this.$store.dispatch("sliders");

    this.$store.dispatch("offer_banner");

    this.$store.dispatch("flash_sale_products");

    //this.productsList($state);
  },
  computed: {
    category() {
      return this.$store.getters.categories;
    },
    sliders() {
      return this.$store.getters.sliders;
    },
    getOffers() {
      return this.$store.getters.offer_banner;
    },
    best_selling_produtcs() {
      return this.$store.getters.best_selling_produtcs;
    },

    flash_sale_products() {
      return this.$store.getters.flash_sale_products;
    },
  },
};

//show sub  menu in mobile menu
document.addEventListener("DOMContentLoaded", () => {
  //set a time our function. this function call after 2 sec on domloaded
  setTimeout(() => {
    //find the click element
    let sub_menu = document.getElementsByClassName("show-sub");

    for (let i = 0; i < sub_menu.length; i++) {
      //set a click event
      sub_menu[i].addEventListener("click", function () {
        let show_sub_menu = sub_menu[i].parentElement.querySelector(
          ".left-sub-menu"
        );
        //set active class
        show_sub_menu.classList.toggle("nav-active");
        sub_menu[i].classList.toggle("fa-minus");
      });
    }
  }, 2000);
});
</script>
<style scoped>
.nav-active {
  display: block !important;
}
</style>


