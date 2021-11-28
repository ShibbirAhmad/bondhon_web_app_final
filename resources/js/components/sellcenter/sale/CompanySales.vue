<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'sell_center_company_sale_add' }" class="btn btn-primary"
            ><i class="fa fa-plus"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Sales</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-xl-12 col-md-12">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                  <h3 class="box-title">Sales Records </h3>

                    <div style="margin-top: 10px" class="row">
                    <div class="col-lg-10">
                      <form @submit.prevent="filterSales">
                        <div class="row">
                           <div class="col-lg-4">
                             <input type="text" @keyup="searchFilter" v-model="search" autocomplete="off" placeholder="search by invoice,phone "  class="form-control">
                           </div>
                          <div class="col-lg-4">
                            <date-picker
                              autocomplete="off"
                              v-model="start_date"
                              placeholder="start-date"
                              :config="options"
                            ></date-picker>
                          </div>
                          <div class="col-lg-4">
                            <date-picker
                              autocomplete="off"
                              v-model="end_date"
                              placeholder="end-date"
                              :config="options"
                            ></date-picker>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div class="col-lg-2">
                      <select class="form-control" v-model="item" @change="saleList">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="40">40</option>
                      </select>
                    </div>
 

                  </div>

                </div>
                <div class="box-body">
                  <table class="table table-bordered table-hover table-striped ">
                    <thead>
                      <tr>
                        <th width="5%">#</th>
                        <th width="8%">Invoice</th>
                        <th width="15%">Customer</th>
                        <th width="16%">Address</th>
                        <th width="15%">Amount</th>
                        <th width="10%">Courier</th>
                        <th width="8%">Status</th>
                        <th width="10%">Date</th>
                        <th width="8%">Comment</th>
                        <th width="5%">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr v-for="(sale, index) in sales.data" :key="index" v-else>
                        <td scope="row">{{ index + 1 }}</td>
                        <td>{{  sale.invoice_no }}</td>
                        <td>{{  sale.company_sales[0].customer_name ? sale.company_sales[0].customer_name : 'empty' }} <br>
                          <b> {{ sale.company_sales[0].customer_phone ? sale.company_sales[0].customer_phone: 'empty'  }} </b>
                       </td>
                        <td> {{ sale.company_sales[0].customer_address ? sale.company_sales[0].customer_address : 'empty' }}</td>
                        <td>
                          <div class="amout_container">
                            <p> Total:  {{ saleAmount(sale.company_sales) }}  </p>
                            <p> Discount: {{ saleDiscount(sale.company_sales) }}  </p>
                            <p> Paid: {{ sale.company_sales[0].paid }} </p>
                            <p> Shipping: {{ sale.company_sales[0].shipping_cost }} </p>
                            <p> Due: {{ (saleAmount(sale.company_sales) + parseInt(sale.company_sales[0].shipping_cost) ) - (parseInt(sale.company_sales[0].paid) + parseInt(saleDiscount(sale.company_sales)))   }}  </p>
                          </div>

                        </td>

                        <td>
                        
                          <div v-if="sale.company_sales[0].courier.length > 0">
                              <p>{{ sale.company_sales[0].courier }} </p>  
                              <p> memo: <b>{{ sale.company_sales[0].memo_no?sale.company_sales[0].memo_no : 'empty' }}</b> </p>  
                          </div>
                          <div v-else>
                            Empty
                          </div>
                        </td>
                        <td>  <p>   {{ sale.company_sales[0].status }} </p> 
                              <a  style="width:70px;" v-if="sale.company_sales[0].print_status==1"
                              class="btn btn-xs btn-success">printed</a>
                        </td>
                         <td>
                          {{ sale.company_sales[0].created_at  }}
                        </td>
                        <td>
                          {{ sale.company_sales[0].commment ? sale.company_sales[0].commment : '' }}
                        </td>

                        <td>
                          <div class="action_container">
                               <router-link style="width:70px;"
                                  :to="{
                                    name: 'sell_center_company_sale_view',
                                    params: { invoice_no: sale.invoice_no },
                                  }"
                                  class="btn btn-primary btn-sm"
                                  ><i class="fa fa-eye"></i
                                >view</router-link>
                              
                              <a v-if="sale.company_sales[0].status == 'Order Placed'" @click="showShipmentModal(sale.invoice_no,sale.company_sales[0].courier)" class="btn btn-sm btn-info">shipment</a>
                              <a v-if="sale.company_sales[0].status != 'delivered' && sale.company_sales[0].status == 'shipment' "  @click="showDeliveryModal(sale.invoice_no,(saleAmount(sale.company_sales) + sale.company_sales[0].shipping_cost ) - (parseInt(sale.company_sales[0].paid) + saleDiscount(sale.company_sales)))" class="btn btn-sm btn-success">delivered</a>
                          
                
                          </div>

                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="box-footer">
                  <div class="row">
                    <div class="col-lg-6">
                      <pagination
                        :data="sales"
                        @pagination-change-page="saleList"
                        :limit="3"
                      ></pagination>
                    </div>
                    <div
                      class="col-lg-6 mt-1"
                      style="margin-top: 25px; text-align: right"
                    >
                      <p>
                        Showing <strong>{{ sales.from }}</strong> to
                        <strong>{{ sales.to }}</strong> of total
                        <strong>{{ sales.total }}</strong> entries
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

     <!-- start memo_no store modal  -->
         <modal name="shipment" :width="350" :height="300">
           <form @submit.prevent="shipmentOrder">
              <div class="card" style="padding: 20px">
          
              <div class="card-body">

               <div class="form-group">
                  <label for="courier">Select  Coureir</label>
                  <select required class="form-control" v-model="shipment_form.courier">
                      <option  v-for="(courier,index) in couriers" :value="courier.name" :key="index">{{courier.name}}</option>
                    </select>
                </div>

                  <div class="form-group">
                  <label>Memon Number</label>
                  <input
                    type="text"
                    required
                    name="memo_no"
                    v-model="shipment_form.memo_no"
                    class="form-control"
                    :class="{ 'is-invalid': shipment_form.errors.has('memo_no') }"
                    placeholder="xxxxxxxxx"
                  />
                  <has-error :form="shipment_form" field="memo_no"></has-error>
                </div>

                <br>
                <div class="form-group text-center">
                  <button  type="submit"
                    class="btn btn-success ">
                    Submit
                  </button>
                </div>
                <br>
              </div>
            </div>
           </form>
          </modal>
     <!-- end memo_no store modal  -->

   <!-- start payment store modal  -->
         <modal name="delivery" :width="350" :height="270">
           <form @submit.prevent="deliveryOrder">
              <div class="card" style="padding: 20px">
              <div class="card-body">
                <div class="form-group">
                  <label>Amount</label>
                  <input
                    type="number"
                    name="amount"
                    v-model="delivery_form.amount"
                    :class="{ 'is-invalid': delivery_form.errors.has('amount') }"
                    class="form-control"
                    readonly
                    required
                  />
                  <has-error :form="delivery_form" field="amount" > </has-error>
                </div>

                <div class="form-group">
                  <label for="cash_in">Paid By</label>
                  <select required class="form-control" v-model="delivery_form.cash_in">
                      <option  v-for="(balance,index) in balance" :value="balance" :key="index">{{balance}}</option>
                    </select>
                </div>

                <br>
                <div class="form-group text-center">
                  <button  type="submit"
                    class="btn btn-success ">
                    Submit
                  </button>
                </div>
                <br>
              </div>
            </div>
           </form>
          </modal>
   <!-- end payment store modal  -->

  </div>
</template>

<script>
import Vue from "vue";
import { Form, HasError, AlertError } from "vform";
import navbar from "../Navbar.vue"
export default {
 components:{
   navbar,
   HasError
 },
  created() {
    this.saleList();
    this.courierList();
  },
  data() {
    return {
      sales: {},
      loading: true,
      item: 20,
      start_date: "",
      end_date: "",
      search: "",
      couriers: "",
      //date picker options ..........
      options: {
        format: "YYYY-MM-DD",
        useCurrent: true,
      },
       shipment_form: new Form({
        invoice_no: "",
        courier: "",
        memo_no: "",
      }),
      delivery_form: new Form({
        invoice_no: "",
        cash_in: "Cash",
        amount: "",
      }),
      balance:[
       "Cash",
       "Bkash",
       "Nagad",
       "Bank"
      ],
      max_delivery_amount:0,
    };
  },
  methods: {



    shipmentOrder(){
        this.shipment_form.post('/api/sell/center/sale/shipment', {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then(resp=>{
          if (resp.data.status=='OK') {
              this.saleList();
              this.shipment_form.invoice_no='',
              this.shipment_form.courier='',
              this.shipment_form.memo_no='',
              this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
             this.$modal.hide('shipment');
          }else{
            this.$toasted.show('shimpent failed', {
              type: "error",
              position: "top-center",
              duration: 4000,
            });
          }
        })
    },



    deliveryOrder(){
         

         if (this.delivery_form.amount >  this.max_delivery_amount) {
            alert("Due amount can't be more than actual due amount, this order max due amount is: BDT "+this.max_delivery_amount);
              this.max_delivery_amount=0;
              this.delivery_form.invoice_no='';
              this.delivery_form.amount='';
              this.delivery_form.cash_in='Cash';
              this.$modal.hide("delivery");
            return;
         }
       
        this.delivery_form.post('/api/sell/center/sale/delivery', {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        }) 
        .then(resp=>{
          if (resp.data.status=='OK') {
              this.saleList();
              this.delivery_form.invoice_no='';
              this.delivery_form.amount='';
              this.delivery_form.cash_in='Cash';
              this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
            this.$modal.hide('delivery');
          }else{
            this.$toasted.show('delivered failed', {
              type: "error",
              position: "top-center",
              duration: 4000,
            });
          }
        })
    },
    
     showDeliveryModal(invoice_no,amount) {
      this.delivery_form.invoice_no = invoice_no ;
      this.delivery_form.amount = amount ;
      this.max_delivery_amount = amount ;
      this.$modal.show("delivery");
    },

     showShipmentModal(invoice_no,courier) {
      this.shipment_form.invoice_no = invoice_no ;
      this.shipment_form.courier = courier ;
      this.$modal.show("shipment");
    },

    courierList() {
      axios
        .get("/api/sellcenter/courier/list")
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.couriers = resp.data.couriers.data;
          }
        })

    },

    saleAmount(sales){
       let amount=0 ;
       sales.forEach(sale => {
          amount += parseInt(sale.amount) ;
       });
       return amount ;
    },


    saleDiscount(sales){
       let amount=0 ;
       sales.forEach(sale => {
          amount += parseFloat(sale.discount) ;
       });
       return amount.toFixed(0) ;
    },

   searchFilter(){
      if (this.search.length > 3) {
         this.filterSales();
      }else{
        this.saleList();
      }
   },
    
  filterSales(page = 1) {
      //fetch data
      axios
        .get("/api/filter/sell/center/company/sales?page=" + page, {
          //send data
          params: {
            start_date: this.start_date,
            end_date: this.end_date,
            search: this.search,
            item: this.item,
          },
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.sales = resp.data.sales;
          }
        })
    },

    saleList(page = 1) {
      axios
        .get("/api/sell/center/company/sales?page=" + page, {
          params: {
            item: this.item,
          },
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.sales = resp.data.sales;
            this.loading = false;
          } else {
            this.$toasted.show("something went to wrong", {
              type: "error",
              position: "top-center",
              duration: 5000,
            });
          }
        })
        .catch((error) => {
          this.$toasted.show("something went to wrong", {
            type: "error",
            position: "top-center",
            duration: 4000,
          });
        });
    },

  },
  watch: {
    start_date: function (value) {
      if (value.length > 1) {
        this.filterSales();
      }
    },
    end_date: function (value) {
      if (value.length > 1) {
        this.filterSales();
      }
    },
  },
};
</script>

<style scoped>

 .action_container>a{
   margin:2px 0px;
 }
 .amout_container>p{
   text-align: left;
 }
</style>