<template>
  <div class="wrapper-wide">
    <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage"></loading>
    <frontend-header></frontend-header>
    <div id="container">
      <div class="container">
         <div class="row">
            <div class="col-lg-5">
                <div>
              <div class="row product-info">
                <div class="col-lg-6 col-md-6 product-image-viewer" style="margin-bottom:20px;"  >
                  <ProductImage :images="product_images"></ProductImage>
                  <!-- <ProductZoomer :base-images="product_images" :base-zoomer-options="zoomerOptions" v-if="Object.keys(product_images).length" /> -->
                  </div>
              
              </div>
             </div>
            </div>
            <div class="col-lg-4">
               <ul class="list-unstyled description">
                  <li>
                 <h2 class="title" itemprop="name">{{ product.name }}</h2>

                  </li>
                    <li>
                      <h4>
                        <b>Product Code:</b>
                        <span itemprop="mpn">{{ product.product_code }}</span>
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <b>Availability:</b>
                        <span class="instock" v-if="product.stock > 0"> <strong>({{product.stock }})</strong></span>
                        <span class="outstcok" v-else>Stock Out</span>
                      </h4>
                    </li>
                  </ul>
                  <ul class="price-box">
                    <li class="price">
                     <h3>
                     
                        <span class="price-old" v-if="product.discount">&#2547 {{product.sale_price}}</span>
                      <span class="price-new">&#2547 {{product.price}}</span>
                     </h3>
                    </li>
                  
                  </ul>
                  <div id="product">
                    <div class="row">
                      <div class="col-lg-6" v-if="product.product_variant.length>0 && product.product_attribute">
                          <div>
                      <!-- <h3 class="subtitle">Available Options</h3> -->
                      <div class="form-group required">
                        <h4 class="control-label">
                          <b>{{ product.product_attribute.attribute.name }}</b>
                        </h4>
                        <select
                          class="form-control"
                          v-model="variant_index"
                          @change="SelectVaraint"
                          name="option[200]"
                        >
                          <option value disabled>--- Please Select ---</option>
                          <option
                            value
                            v-for="(variant,v) in product.product_variant"
                            :key="v"
                            :value="v"
                          >{{variant.variant.name}}</option>
                        </select>
                      </div>
                    </div>
                      </div>
                       <div class="col-lg-6">
                        <div class>
                          <h4 class="control-label" for="input-quantity">
                            <b>Quantity</b>
                          </h4>
                          <input
                            type="number"
                            name="quantity"
                            v-model="cart.quantity"
                            size="2"
                            value="1"
                            class="form-control"
                            @change="validation"
                            @keyup="validation"
                          />

                          <div class="clear"></div>
                        </div>
                      </div>
                    </div>  
                    
                    <div class="row">
                     

                      <div class="col-lg-6">
                        <button
                          @click.prevent="CartToAdd"
                          type="button"
                          id="button-cart"
                          class="btn btn-primary btn-lg btn-block"
                          style="margin-top:38px;"
                         
                         
                        >Add to Cart</button>
                      </div>

                         <div class="col-lg-6">
                        <!-- <button
                          @click.prevent="buyNow"
                          type="button"
                         
                          class="btn btn-primary btn-lg btn-block"
                          style="margin-top:38px;background:#000;"
                         
                         
                        >Buy Now</button> -->
                      </div>
                    </div>
                    
                  </div>
            </div>
         </div>
        <div class="row related_products">
          <h3 class="sub-title">Related Products</h3>
          <div class="col-lg-3" v-for="related_product in related_products">
            <div class="product-thumb">
              <div class="image">
                <router-link :to="{ name: 'single', params: { slug: related_product.slug }}">
                  <!-- <img
                    :src="'/../public//storage/'+related_product.product_image[0].product_image"
                    :alt="related_product.name"
                    :title="related_product.name"
                    class="img-responsive"
                  /> -->
                    <v-lazy-image
                        :src="base_url+related_product.product_image[0].product_image"
                        :alt="related_product.name"
                        :title="related_product.name"
                        class="img-responsive"
                        :src-placeholder="base_url+'images/static/d3.jpg'"
                  />
                </router-link>
              </div>
              <div>
                <div class="caption">
                  <h4>
                    <router-link
                      :to="{ name: 'single', params: { slug: related_product.slug }}"
                    >{{product.name}}</router-link>
                  </h4>

                  <p class="price">
                    <span class="price-new">{{related_product.price}}</span>
                    <span
                      class="price-old"
                      v-if="related_product.discount"
                    >{{related_product.sale_price}}</span>
                    <!-- <span class="saving">-26%</span> -->
                  </p>
                </div>
              </div>
            </div>
          </div>
          <infinite-loading @infinite="getRelatedProducts">
            <div slot="no-more"></div>
          </infinite-loading>
        </div>
      </div>
    </div>
    <frontend-footer></frontend-footer>>
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import ProductImage from "./ProductImageView.vue";

export default {
  created() {
    this.validation();
    window.scrollTo(0, 0);
    this.productImage();

 //   console.log(this.$route.params.slug);
    setTimeout(() => {
      this.validation();
    }, 200);
  },
  data() {
    return {
      isLoading: true,
      fullPage: true,
      disabled: true,
      variant_index: "",
      cart: {
        product_id: "",
        variant_id: "",
        attrribute_id: "",
        quantity: 1,
      },
     base_url: this.$store.state.image_base_link,


      related_products: [],
      page: 1,

    };
  },
  methods: {
    productImage() {
      axios.get("/_public/product/" + this.$route.params.slug)
      .then((resp) => {
          this.cart.product_id = resp.data.product.id;
          this.images.normal_size.push(...resp.data.product_images);
          this.images.thumbs.push(...resp.data.product_images);
        
      });
    },
    CartToAdd() {
      axios
        .get("/_public/addToCart", {
          params: {
            product_id: this.cart.product_id,
            attribute_id: this.cart.attrribute_id,
            variant_id: this.cart.variant_id,
            quantity: this.cart.quantity,
          },
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.$toasted.show(resp.data.message, {
              position: "bottom-center",
              type: "success",
              duration: 2000,
            });
            this.$store.dispatch("getCartContent");
          } else if (resp.data.status == "error") {
            this.$toasted.show(resp.data.message, {
              position: "bottom-center",
              type: "error",
              duration: 20000,
            });
          }
        })
        .then((error) => {
         // console.log(error);
        });
    },
    validation() {
      if (this.cart.quantity < 1) {
        this.cart.quantity = 1;
        alert("Quantity at least 1");
        return;
      }
      if (this.product.product_attribute) {
        if (this.cart.attrribute_id < 1) {
          this.disabled = true;
        } else {
          this.disabled = false;
        }
      } else {
        this.disabled = false;
      }
    },
    SelectVaraint() {
      let index = this.variant_index;
      let variant_id = this.product.product_variant[index].variant_id;
      let attribute_id = this.product.product_variant[index].variant
        .attribute_id;
      this.cart.attrribute_id = attribute_id;
      this.cart.variant_id = variant_id;
      this.validation();
    },

    getRelatedProducts($state) {
      axios
        .get("/_public/related/products/?page=" + this.page, {
          params: {
            product_slug: this.$route.params.slug,
          },
        })
        .then((resp) => {
          if (resp.data.data.length) {
            this.page += 1;
            this.related_products.push(...resp.data.data);
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mounted() {
    this.getRelatedProducts();

    this.$store.dispatch('single_product',this.$route.params.slug);
        this.$store.dispatch("product_images", this.$route.params.slug);

  },

  computed:{
    
    product(){
    return this.$store.getters.single_product;
    },
    product_images() {
      return this.$store.getters.product_images;
    },

  },
  components: {
    Loading,
    ProductImage
  },
 watch: {
    product_images: function (value) {
      if (Object.keys(value).length > 0) {
        this.isLoading = false;
      }
    },
  },
};
</script>


