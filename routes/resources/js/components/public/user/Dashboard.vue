<template>
  <div class="wrapper-wide">
    <frontend-header></frontend-header>

    <div id="container">
      <div class="container">
        <div style="min-height:400px;" class="row">

           <sidebar></sidebar> 

          <div class="col-md-10 col-sm-10">
  
             <h4 class="heading">
                Welcome {{ user.name ? user.name : "Dear Customer" }}
              </h4>
              
                <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <td>#</td>
                    <td >Invoice_no</td>
                    <td >Amount</td>
                    <td >Status</td>
                    <td >Date</td>
                    <td> Action </td>
                  </tr>
                </thead>
                <tbody class="table-responsive ">
                  <h1 v-if="loading">
                    <i class="fa fa-spin fa-spinner"></i>
                  </h1>
                  <tr
                    v-else
                    v-for="(order, index) in order_lists.data"
                    :key="index"
                  >
                    <td>{{ index + 1 }}</td>
                    <td > {{ order.invoice_no }}</td>
                    <td class="text-left">
                      {{
                        parseInt(order.total) -
                        (parseInt(order.discount) + parseInt(order.paid)) +
                       parseInt( order.shipping_cost)
                      }}
                    </td>
                    <td >
                      <span class="badge" v-if="order.status == 1">New</span>
                      <span class="badge" v-if="order.status == 2"
                        >Pending</span
                      >

                      <span class="badge badge-success" v-if="order.status == 3"
                        >Approved</span
                      >
                      <span class="badge badge-success" v-if="order.status == 4"
                        >Shipment</span
                      >
                      <span class="badge badge-warning" v-if="order.status == 5"
                        >Delivered</span
                      >
                      <span class="badge badge-danger" v-if="order.status == 6"
                        >Cancel</span
                      >
                      <span class="badge badge-danger" v-if="order.status == 7"
                        >Return</span
                      >
                    </td>
                    <td >{{ orderDate(order.created_at) }}</td>

                    <td >
                      <router-link  :to="{ name : 'order_details', params:{ id: order.id }}"  class="btn btn-info"  >
                        <i class="fa fa-eye"></i>
                      </router-link>
                    </td>
                  </tr>
                </tbody>
              </table>

          </div>

        </div>
      </div>
      <frontend-footer></frontend-footer>
    </div>
  </div>
</template>

<script>
import sidebar from "./Sidebar.vue"
export default {

  props: ["categories"],
    
  created() {
   this.getOrderList();
   this.$store.dispatch("user");
  },

  data() {
     return {
      order_lists: {},
      loading: true,
    };
  },

  methods: {
        getOrderList(page = 1) {
      axios
        .get("/_public/customer/order/list?page=" + page)
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.order_lists = resp.data.orders;
            this.loading = false;
          }
        })
    },

    orderDate(created_at){
      
         var d = new Date(created_at) ;
         var month =d.getMonth() ;
         var day =  d.getDate();
         var year = d.getFullYear();
         let f_date = `${day.toString().length == 2 ? day : '0'+day }-${month.toString().length == 2 ? month : '0'+month }-${year}` ;
         return f_date ;
    }
  },
  computed:{
    user(){
      return this.$store.getters.user ;
    }
  },
   components:{
     sidebar
  }
};
</script>


<style>


 .user_profile_icon{

    width: 80px; height: 80px
 }


@media screen  and ( max-width:650) {
   
    .user_profile_icon {

        width: 50px; height: 50px;
    }


}
   

</style>