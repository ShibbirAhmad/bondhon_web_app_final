<template>
  <div id="header">
    <nav id="top" class="htop">
      <div class="container">
        <div class="row">
          <span class="visible-sm visible-xs">
            <i class="fa fa-align-justify" @click="menuShow"></i>
          </span>
          <div class="pull-left  left-top">
            <div class="links">
              <ul>
                <li class="mobile">
                  <a >                  <i class="fa fa-phone" style="color:#fff;"></i>+88 01715-900066
</a>
                </li>
                <li class="email">
                  <a href="#" >
                    <i class="fa fa-envelope"></i>madinafashion2017@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="top-links" class="nav pull-right flip">
            <div id="language" class="btn-group" v-if="Object.keys(user).length">
              <button class="btn-link dropdown-toggle" data-toggle="dropdown">
                <span style="color:#fff">
                  {{ user.name }}
                  <i class="fa fa-caret-down"></i>
                </span>
              </button>
              <ul class="dropdown-menu"  v-if="Object.keys(user).length">
                <li>
                  <button class="btn btn-link btn-block language-select" type="button" >
                    <router-link :to="{name:'UserProfile'}" style="color:#000 !important;">Profile</router-link>
                  </button>
                </li>
                <li>
                  <button class="btn btn-link btn-block language-select" type="button">
                    <router-link :to="{name:'OrderHistory'}"  style="color:#000 !important;">Order History</router-link>
                  </button>
                </li>
                <li>
                  <button
                    @click.prevent="Logout"
                    class="btn btn-link btn-block language-select"
                    type="button"
                    name="GB"
                  >Logout</button>
                </li>
              </ul>
            </div>
            <ul v-if="Object.keys(user).length<=0" >
              <li>
                <router-link :to="{name:'UserLogin'}">Login</router-link>
              </li>
              <li>
                <router-link :to="{name:'UserRegister'}">Register</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <header class="header-row">
      <div class="container">
        <div class="table-container">
          <!-- Logo Start -->
          <div class="col-table-cell col-lg-3 col-md-3 col-sm-12 col-xs-12 inner">
            <div id="logo">
              <a href="index.html">
                <router-link to="/">
                  <img
                    class="img-responsive"
                    :src="'https://madinafashion.com.bd/public/frontend/image/logo.png'"
                    title="madinafashion"
                    alt="madinafashion"
                  />
                </router-link>
              </a>
            </div>
          </div>
          <!-- Logo End -->
          <!-- Search Start-->
          <div
            class="col-table-cell col-lg-6 col-md-6 col-md-push-0 col-sm-6 col-sm-push-6 col-xs-12"
          >
            <div id="search" class="input-group">
              <form @submit.prevent="subMitAutoComppleteForm">
                <input
                  id="filter_name"
                  type="text"
                  name="search"
                  value
                  placeholder="Search"
                  class="form-control input-lg"
                  @keyup="autocomplteSearch"
                  v-model="search"
                  autocomplete="off"
                />
                <button type="button" class="button-search">
                  <i class="fa fa-search"></i>
                </button>
              </form>
              <div class="search-content" v-if="search_products.length >= 1">
                <ul class="list-group">
                  <li
                    class="list-group-item"
                    v-for="(product,index) in search_products"
                    :key="index"
                  >
                    <router-link
                      :to="{ name: 'single', params: { slug: product.slug }}"
                      class="search-router-link"
                    >{{product.name + '-' + product.product_code}}</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Search End-->
          <!-- Mini Cart Start-->
          <div
            class="col-table-cell col-lg-3 col-md-3 col-md-pull-0 col-sm-6 col-sm-pull-6 col-xs-12 inner"
          >
            <div id="cart">
              <button type="button" @click="changeDisplay" class="heading dropdown-toggle">
                <span id="cart-total">
                  <b>
                  {{cart.itemCount}}item
                  <strong v-if="cart.itemCount > 1">'s</strong>
                  -{{cart.total}}
                  </b>
                </span>
              </button>
              <ul class="dropdown-menu" :style="{display:display}">
                <li v-if="cart.itemCount >0" style="max-height:250px;overflow-x:hidden">
                  <table class="table">
                    <tbody>
                      <tr v-for="cartContent in cart.content">
                        <td class="text-center">
                          <a href="product.html">
                            <img
                              class="img-thumbnail"
                              title="Xitefun Causal Wear Fancy Shoes"
                              alt="Xitefun Causal Wear Fancy Shoes"
                              :src="base_url+ cartContent.options.image[0].product_image"
                            />
                          </a>
                        </td>
                        <td class="text-left">
                          <a href="product.html">{{ cartContent.name }}</a>
                        </td>
                        <td class="text-center">
                          <strong class="quantityUpdat" @click="increamentQuantity(cartContent)">+</strong>
                          {{ cartContent.qty }}
                          <strong
                            class="quantityUpdat"
                            @click="decreamentQuantity(cartContent)"
                          >-</strong>
                        </td>
                        <td class="text-right">
                          <strong>&#2547</strong>
                          {{cartContent.price}}
                        </td>
                        <td class="text-center">
                          <button
                            class="btn btn-danger btn-xs remove"
                            title="Remove"
                            @click="cartRemove(cartContent)"
                            type="button"
                          >
                            <i class="fa fa-times"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li v-else>
                  <div class="cart-empy">
                    <img src="/public/images/cartEmpty.jpg" />
                    <p>Your Cart Is Empty</p>
                  </div>
                </li>
                <li>
                  <div v-if="cart.itemCount > 0">
                    <table class="table table-bordered">
                      <tbody>
                        <tr>
                          <td class="text-right">
                            <h4>
                              <strong>Total</strong>
                            </h4>
                          </td>
                          <td class="text-right">
                            <h4>
                              <strong>&#2547</strong>
                              {{cart.total}}
                            </h4>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p class="checkout">
                      <a href="#" class="btn btn-danger" @click="changeDisplay">
                       X
                      </a>&nbsp;&nbsp;&nbsp;
                      <router-link :to="{name:'Chekout'}" class="btn btn-primary">
                        <i class="fa fa-share"></i>
                        Checkout
                      </router-link>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- Mini Cart End-->
        </div>
      </div>
    </header>

    <!-- <header class="main-menu">
      <nav class="menu">
        <div class="menu-icons">
          <i class="fa fa-bars" @click="menuShow"></i>
          <i class="fa fa-window-close"></i>
        </div>
        <ul class="nav-list">
          <li v-for="(category,index) in categories" :key="index">
            <router-link
              :to="{name:'PublcaCategory', params: { slug: category.slug }}"
              class="nav-item"
            >{{ category.name }}</router-link>
            <ul class="sub-menu" v-if="category.sub_category.length > 0">
              <li v-for="sub_category in category.sub_category">
                <router-link
                  :to="{name:'PublicSubCategory',params: { slug: sub_category.slug }}"
                  class="nav-router"
                >{{sub_category.name}}</router-link>

                <ul class="sub-menu" v-if="sub_category.sub_sub_category.length > 0">
                  <li v-for="sub_sub_category in sub_category.sub_sub_category">
                    <router-link
                      :to="{name:'PublicSubSUbCategory',params: { slug: sub_sub_category.slug }}"
                      class="nav-router"
                    >{{sub_sub_category.name}}</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header> -->
  </div>
</template>

<script>
export default {
  name: "main-header",
  //props: ["categories"],

  created() {
    this.$store.dispatch("getCartContent");
    this.cart = this.$store.getters.cartContent;
    setTimeout(() => {
      // this.chcekUser = true;
    }, 2000);
  },
  data() {
    return {
      renderComponent: false,
      cartContents: null,
      cartTotal: "",
      cart: "",
      display: "none",
      categories: null,
      search_products: [],
      search: "",
      base_url: this.$store.state.image_base_link,

    };
  },
  methods: {
    category() {
      axios
        .get("_public/category")
        .then((resp) => {
          //  this.categories = resp.data.categories;
          this.renderComponent = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    increamentQuantity(cartContent) {
      let quantity = parseInt(cartContent.qty) + parseInt(1);
      axios
        .get("/_public/cartToUpdate", {
          params: {
            qty: quantity,
            rowId: cartContent.rowId,
          },
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.$store.dispatch("getCartContent");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    decreamentQuantity(cartContent) {
      if (cartContent.qty == 1) {
        alert("Qauntity shoud be at least 1");
        return;
      }

      let quantity = parseInt(cartContent.qty) - parseInt(1);
      axios
        .get("/_public/cartToUpdate", {
          params: {
            qty: quantity,
            rowId: cartContent.rowId,
          },
        })
        .then((resp) => {
          if (resp.data.status == "SUCCESS") {
            this.$store.dispatch("getCartContent");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    cartRemove(cartContent) {
      if (confirm("are you sure remove this item?")) {
        axios
          .get("/_public/cartToDestroy", {
            params: {
              rowId: cartContent.rowId,
            },
          })
          .then((resp) => {
            console.log(resp);
            if (resp.data.status == "SUCCESS") {
              this.$store.dispatch("getCartContent");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    changeDisplay() {
      if (this.display == "block") {
        this.display = "none";
      } else {
        this.display = "block";
      }
    },

    Logout() {
      axios
        .get("/_public/user/logout")
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.user = null;

            localStorage.removeItem("user_token");
            this.$router.push({ name: "welocme" });
            this.$toasted.show("Logout successfully ! you are back soon .", {
              type: "success",
              position: "top-center",
              duration: 10000,
            });
          }
        })
        .catch();
    },

    autocomplteSearch() {
      if (this.search.length > 1) {
        axios
          .get("/_public/search/products/" + this.search)
          .then((resp) => {
            if (resp.data.length) {
              this.search_products = [];
              this.search_products.push(...resp.data);
            } else {
              this.search_products = [];
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.search_products = [];
      }
    },
    subMitAutoComppleteForm() {
      this.$router.push({
        name: "PublicProductSearch",
        params: { search: this.search },
      });
    },
    menuShow() {
      let menu = document.getElementsByClassName("side-nav")[0];
      //  console.log(menu);
      menu.classList.toggle("nav-active");
    },
  },

  mounted() {
    this.$store.dispatch("user");
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>


<style>
.nav-active {
  display: block !important;
}
</style>
