<template>
  <div class="wrapper-wide">
    <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage"></loading>

    <frontend-header :categories="categories"></frontend-header>

    <div id="container">
      <div class="container">
        <!-- Breadcrumb End-->
        <div class="row" v-if="cart.total>0">
          <!--Middle Part Start-->
          <div id="content">
            <div class="row">
              <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                <div class="custom-box">
                  <h2 class="title">Checkout</h2>
                  <form @submit.prevent="chekout">
                    <div class="form-grop">
                      <label class="control-label" for="input-email">Name</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        autocomplete="off"
                        maxlength="11"
                        :class="{ 'is-invalid': form.errors.has('name') }"
                        v-model="form.name"
                        autofocus
                      />
                      <has-error :form="form" field="name"></has-error>
                    </div>
                    <br />
                    <div class="form-grop">
                      <label class="control-label" for="input-email">Mobile_no</label>
                      <input
                        type="text"
                        name="mobile_no"
                        placeholder="01xxx-xxxxx"
                        class="form-control"
                        autocomplete="off"
                        maxlength="11"
                        :class="{ 'is-invalid': form.errors.has('mobile_no') }"
                        v-model="form.mobile_no"
                        
                      />
                      <has-error :form="form" field="mobile_no"></has-error>
                    </div>
                    <br />
                    <div class="form-group">
                      <label class="control-label" for="input-password">Address</label>
                      <textarea
                        name="address"
                        placeholder="Address"
                        class="form-control"
                        :class="{ 'is-invalid': form.errors.has('address') }"
                        v-model="form.address"
                        @keyup="validation"
                      ></textarea>
                      <has-error :form="form" field="address"></has-error>

                      <br />
                      <div class="form-group">
                        <label class="control-label" for="input-email">City</label>
                        <select
                          name="city"
                         :class="{ 'is-invalid': form.errors.has('city') }"
                          class="form-control"
                          v-model="form.city"
                          @change="selectCity"
                        >
                          <option value="" selected disabled>Select City</option>
                          <option
                            value
                            v-for="(city,index) in cities"
                            :key="index"
                            :value="city.id"
                          >{{city.name}}</option>
                        </select>
                        <has-error :form="form" field="city"></has-error>
                      </div>

                       <div class="form-group">
                    <label>Sub City</label>
                    <select @change="validation" class="form-control" name="sub_city"  :class="{ 'is-invalid': form.errors.has('sub_city') }" v-model="form.sub_city">
                      <option disabled value="">select sub city</option>
                      <option v-if="sub_cities.length > 0 " v-for="sub_city in sub_cities" :key="sub_city.id" :value="sub_city.id">{{sub_city.name}}</option>
                    </select>
                                        <has-error :form="form" field="sub_city"></has-error>

                  </div>
                      <br />
                    </div>
                    <button
                
                      class="btn btn-block btn-primary"
                      type="submit"
                      :disabled="form.busy || disabled"
                    >
                      <i class="fa fa-spinner fa-spin" v-if="form.busy"></i>PLACE ORDER
                    </button>
                  </form>
                </div>
              </div>
              <div class="col-lg-5 col-md-5 col-xs-12 col-sm-12">
                <div class="custom-box">
                  <div class="cart-total">
                    <table>
                      <tbody>
                        <tr>
                          <td>Total</td>
                          <td colspan="4"></td>
                          <td>
                            :
                            <span v-if="form.shipping_cost">&#2547 {{form.total}}</span>
                            <span v-else>.....</span>
                          </td>
                        </tr>
                        <br />
                        <tr>
                          <td>Shipping cost</td>
                          <td colspan="4"></td>
                          <td>
                            :
                            <span v-if="form.shipping_cost">&#2547 {{ form.shipping_cost }}</span>
                            <span v-else>.....</span>
                          </td>
                        </tr>
                        <br />
                        <tr>
                          <td>Total</td>
                          <td colspan="4"></td>
                          <td>
                            :
                            <span
                              v-if="form.shipping_cost"
                            >&#2547 {{parseInt(form.total.replace(',',''))+parseInt(form.shipping_cost)}}</span>
                            <span v-else>.....</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" v-else>
          <div class="empty-cart">
            <h4 class="text-uppercase">your cart is empty</h4>
            <img style="    margin-bottom: 50px;
    margin-top: 50px;" src="https://mohasagor.com/public/storage//images/static/cartEmpty.jpg">
            <br/>
            <a href="/" style="    background: #ff4d03;
    color: #fff;
    padding: 12px 15px;
    border-radius: 5px;"> Home Page</a>
          </div>
        </div>
      </div>
    </div>
    <frontend-footer></frontend-footer>
  </div>
</template>
<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { Form, HasError } from "vform";

export default {
  props: ["categories"],
  created() {
     window.scrollTo(0, 0);

    this.user();
    this.getCity();
    this.getCartContent();

    setTimeout(() => {
      this.isLoading = false;
      this.validation();
    }, 1500);
  },
  data() {
    return {
      form: new Form({
        mobile_no: "",
        name: "",
        address: "",
        city: "",
        total: "",
        cart: "",
        shipping_cost: "",
        sub_city:""
      }),
      isLoading: true,
      fullPage: true,
      cities: "",
      cart: {
        total: 0,
      },
      disabled: true,
      sub_cities:""
    };
  },
  methods: {
    chekout() {
      this.form
        .post("/_public/checkout")
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            localStorage.setItem("user_token", resp.data.token);
            this.$store.dispatch("user");
            this.$router.push({ name: "welcome" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 2000,
            });
          } else {
            this.$toasted.show("some thing want to wrong", {
              type: "error",
              position: "top-center",
              duration: 2000,
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.$toasted.show("some thing want to wrong", {
            type: "error",
            position: "top-center",
            duration: 2000,
          });
        });
    },

    getCity() {
      axios
        .get("/_public/others")
        .then((resp) => {
          this.cities = resp.data.cities;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    selectCity() {
      for (let i = 0; i < this.cities.length; i++) {
        if (this.cities[i].id == this.form.city) {
          this.form.shipping_cost = this.cities[i].delivery_charge;
        }
      }
     this.subCity();
      this.validation();
    },
    user(context) {
      axios.get("/_public/userToCheck").then((resp) => {
        if (resp.data.status == "AUTHORIZED") {
          this.form.mobile_no = resp.data.user.mobile_no;
          this.form.name = resp.data.user.name;
          this.form.address = resp.data.user.address;
        } else {
          localStorage.removeItem("user_token");
          this.$route.push({ name: "welocme" });
          this.$toasted.show("sorry! you are unautorized", {
            type: "error",
            position: "top-center",
            duration: 2000,
          });
        }
      });
    },

    getCartContent(context) {
      axios.get("/_public/cartToContent").then((resp) => {
        // console.log(resp.data)
        this.cart.total = resp.data.cart_total;
        this.form.total = resp.data.cart_total;
      });
    },
    validation() {
      if (this.form.address.length < 3) {
        this.disabled = true;
        return;
      }
      if (this.form.city.length <= 0) {
        this.disabled = true;
        return;
      }
      if (this.form.total.length <= 0) {
        this.disabled = true;
        return;
      }
      if (this.form.city <= 0) {
        this.disabled = true;
        return;
      }

      if(!this.form.sub_city){
        this.disabled=true;
        return;
      }

      this.disabled = false;
    },
    subCity(){
    if(this.form.city){
       this.isLoading=true;
         axios.get('/city/wise/sub/city/'+this.form.city)
        .then(resp=>{

         if(resp.data.length){
                if( this.sub_cities.length > 0){
                  this.sub_cities="";
                }
                if(this.form.sub_city){
                  this.form.sub_city="";
                }
                this.sub_cities=resp.data;

              }else{
                this.form.sub_city="";
                this.sub_cities="";
                alert('No Sub City Under Selected Under City');
              }
            this.isLoading=false
            this.validation()
         
          console.log(resp)
        })
        .catch(e=>{
          console.log(e);
          this.isLoading=false;
        })
     }
    }
  },
  components: {
    Loading,
  },
  mounted() {
    setTimeout(() => {
      this.selectCity();
    }, 1000);
  },
};
</script>

<style>
.empty-cart {
  width: 50%;
  background: #fff;
  text-align: center;
  margin-left: 25%;
  padding: 50px 50px;
  box-shadow: 3px 3px 3px #ddd;
}
</style>