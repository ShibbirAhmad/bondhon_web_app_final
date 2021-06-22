<template>
  <div class="wrapper-wide">
    <frontend-header :categories="categories"></frontend-header>

    <div id="container">
      <div class="container">
        <!-- Breadcrumb End-->
        <div class="row">
          <div class="col-lg-1"></div>
          <div id="content" class="col-sm-12 col-lg-10">
            <h1 class="title">Order History</h1>
            <div class="table-responsive" style="overflow-x: hidden;">
              <table class="table table-bordered table-hover" >
                <thead>
                  <tr>
                    <td>#</td>
                    <td class="text-center">Invoice_no</td>
                    <td class="text-center">Total_amount</td>
                    <td class="text-center">Status</td>
                    <td class="text-center">Order_date</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                     <h1 v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                  <tr v-else v-for="(order,index) in order_lists.data" :key="index">
                    <td>{{index+1}}</td>
                    <td class="text-center">#{{ order.invoice_no }}</td>
                    <td
                      class="text-left"
                    >{{order.total-(order.discount+order.paid)+order.shipping_cost}}</td>
                    <td class="text-center">
                      <span class="badge" v-if="order.status==1">New</span>
                      <span class="badge" v-if="order.status==2">Pending</span>

                      <span class="badge badge-success" v-if="order.status==3">Approved</span>
                      <span class="badge badge-success" v-if="order.status==4">Shipment</span>
                      <span class="badge badge-warning" v-if="order.status==5">Delivered</span>
                      <span class="badge badge-danger" v-if="order.status==6">Cancel</span>
                      <span class="badge badge-danger" v-if="order.status==7">Return</span>
                    </td>
                    <td class="text-center">{{order.created_at}}</td>

                    <td class="text-center">
                      <a
                        class="btn btn-info"
                        title
                        data-toggle="tooltip"
                        href="order-information.html"
                        data-original-title="View"
                      >
                        <i class="fa fa-eye"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
               <div class="row">
                    <div class="col-lg-6">
                      <pagination :data="order_lists" @pagination-change-page="getOrderList"></pagination>
                    </div>
                    <div class="col-lg-6 mt-1" style="margin-top: 25px;text-align:right;">
                      <p>
                        Showing
                        <strong>{{order_lists.from}}</strong> to
                        <strong>{{order_lists.to}}</strong> of total
                        <strong>{{order_lists.total}}</strong> entries
                      </p>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <frontend-footer></frontend-footer>
  </div>
</template>
<script>
export default {
  props: ["categories"],

  created() {
    setTimeout(() => {
      this.getOrderList();
    }, 500);
  },

  data() {
    return {
      order_lists: {},
      loading: true,
    };
  },

  methods: {
    getOrderList(page=1) {
      this.loading=true;  
      axios
        .get("/_public/customer/order/list?page="+page)
        .then((resp) => {
          if (resp.data.status == "SUCCESS") {
            this.order_lists = resp.data.orders;
            this.loading=false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      console.log();
      vm.pre_route = from.name;
    });
  },
};
</script>