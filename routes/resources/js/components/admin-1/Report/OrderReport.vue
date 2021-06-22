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
          <li class="active">All Order</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-11">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <div class="row" style="margin-bottom: 3px">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-3 orders-heading">
                      <h3 class="box-title">ORDER REPORT</h3>
                    </div>
                    <div class="col-lg-5">
                        <div class="row">
                          <div class="col-lg-5">
                            <date-picker
                              autocomplete="off"
                              v-model="start_date"
                              placeholder="start-date"
                              :config="options"
                            ></date-picker>
                          </div>
                          <div class="col-lg-5" style="margin-left: -20px">
                            <date-picker
                              autocomplete="off"
                              v-model="end_date"
                              placeholder="end-date"
                              :config="options"
                            ></date-picker>
                          </div>
                          <div class="col-lg-2">
                              <button class="btn btn-primary" @click="refresh">
                            <i class="fa fa-refresh"></i>
                          </button>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="box-body">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Total Order</th>
                        <th scope="col">Pending</th>

                        <th scope="col">Approved</th>
                        <th scope="col">Delivered</th>
                        <th scope="col">Shipment</th>
                        <th scope="col">Cancel</th>
                        <th scope="col">Returned</th>
                        <th scope="col">Customer_create</th>
                        <th scope="col">Admin_create</th>
                        <th scope="col">Reseller_create</th>
                   
                      </tr>
                    </thead>
                      <tbody>
                        <tr >
                          <td><h3>{{orders.all}}</h3></td>
                          <td><h3>{{orders.pending}}</h3></td>
                          <td><h3>{{orders.approved}}</h3></td>
                          <td><h3>{{orders.delivered}}</h3></td>
                          <td><h3>{{orders.shipment}}</h3></td>
                          <td><h3>{{orders.cancel}}</h3></td>
                          <td><h3>{{orders.retrun}}</h3></td>
                           <td><h3>{{orders.customer_order}}</h3></td>
                          <td><h3>{{orders.admin_order}}</h3></td>
                          <td><h3>{{orders.reseller_order}}</h3></td>
                         
                          
                        </tr>
                      </tbody>
                  </table>
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
import Index from "../Index";
import { Form } from "vform";

export default {
  components: { Index },

  created() {
    this.filter();
  },
  data() {
    return {
    
      loading: true,
      start_date: "",
      end_date: "",
      orders:'',

      //date picker options ..........
      options: {
        format: "YYYY-MM-DD",
        useCurrent: false,
      },
    };
  },
  methods: {
    filter(){
      this.$Progress.start();
      axios.get('/order/report',{
        params:{
          start_date:this.start_date,
          end_date:this.end_date
        }
      })
        .then(resp=>{
          console.log(resp);
          this.$Progress.finish();
          if(resp.data){
            this.orders=resp.data;
          }


        })
        .catch(e=>{
          console.log(e)
        })
    },
      refresh() {
      this.$Progress.start();
      this.start_date = "";
      this.end_date = "";
      this.filter();
      this.$Progress.finish();
    },
  },
  watch:{
    start_date:function(value){
        this.filter();
    },
    end_date:function(value){
       this.filter();
    }
  }
};
</script>

<style>
.orders-heading {
  text-align: center;
  text-transform: uppercase;
  border-bottom: 2px solid #000;
  margin-bottom: 10px;
}
</style>
