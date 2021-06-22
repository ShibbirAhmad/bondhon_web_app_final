<template>
  <div>
    <admin-main></admin-main>

    <div class="content-wrapper">
      <section class="content-header">
        <h1>Order</h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i> Home</a>
          </li>
          <li class="active">Dashboard</li>
        </ol>
      </section>
      <h1 v-if="loading" style="text-align: center; font-size: 50px">
        <i class="fa fa-spinner fa-spin"></i>
      </h1>
      <section v-else class="content">
        <div class="row">
          <div class="col-lg-3 col-xs-6">
            <div class="small-box bg-green">
              <div class="inner">
                <h3 class="">{{ orders.new_order }}</h3>

                <h4>New Orders</h4>
              </div>
              <div class="icon"></div>
              <router-link :to="{ name: 'NewOrder' }" class="small-box-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></router-link>
            </div>
          </div>

          <div class="col-lg-3 col-xs-6">
            <!-- small box -->
            <div class="small-box bg-green">
              <div class="inner">
                <h3>{{ orders.pending_order }}</h3>

                <h4>Pending Order</h4>
              </div>
              <div class="icon">
                <!-- <i class="ion ion-bag"></i> -->
              </div>
              <router-link
                :to="{ name: 'PendingOrder' }"
                class="small-box-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></router-link>
            </div>
          </div>

          <div class="col-lg-3 col-xs-6">
            <!-- small box -->
            <div class="small-box bg-green">
              <div class="inner">
                <h3>{{ orders.approved_order }}</h3>
                <h4>Approved Order</h4>
              </div>
              <div class="icon">
                <!-- <i class="ion ion-bag"></i> -->
              </div>
              <router-link
                :to="{ name: 'ApprovedOrder' }"
                class="small-box-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></router-link>
            </div>
          </div>

          <div class="col-lg-3 col-xs-6">
            <div class="small-box bg-green">
              <div class="inner">
                <h3>{{ orders.shipment_order }}</h3>
                <h4>Shipment order</h4>
              </div>
              <div class="icon">
                <!-- <i class="ion ion-bag"></i> -->
              </div>
              <router-link
                :to="{ name: 'ShipmentOrder' }"
                class="small-box-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></router-link>
            </div>
          </div>
          <div class="col-lg-3 col-xs-6">
            <div class="small-box bg-green">
              <div class="inner">
                <h3>{{ orders.delivered_order }}</h3>
                <p>Delivered order</p>
              </div>
              <div class="icon">
                <!-- <i class="ion ion-bag"></i> -->
              </div>
              <router-link
                :to="{ name: 'DeliveredOrder' }"
                class="small-box-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></router-link>
            </div>
          </div>
          <div class="col-lg-3 col-xs-6">
            <div class="small-box bg-yellow">
              <div class="inner">
                <h3>{{ orders.return_order }}</h3>
                <h4>Return order</h4>
              </div>
              <div class="icon">
                <!-- <i class="ion ion-bag"></i> -->
              </div>
              <router-link
                :to="{ name: 'ReturnOrder' }"
                class="small-box-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></router-link>
            </div>
          </div>
          <div class="col-lg-3 col-xs-6">
            <div class="small-box bg-red">
              <div class="inner">
                <h3>{{ orders.cancel_order }}</h3>
                <h4>Cancel order</h4>
              </div>
              <div class="icon">
                <!-- <i class="ion ion-bag"></i> -->
              </div>
              <router-link
                :to="{ name: 'CancelOrder' }"
                class="small-box-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></router-link>
            </div>
          </div>
          <div class="col-lg-3 col-xs-6">
            <div class="small-box bg-green">
              <div class="inner">
                <h3>{{ orders.total }}</h3>
                <h4>All order</h4>
              </div>
              <div class="icon">
                <!-- <i class="ion ion-bag"></i> -->
              </div>
              <router-link :to="{ name: 'order' }" class="small-box-footer"
                >More info <i class="fa fa-arrow-circle-right"></i
              ></router-link>
            </div>
          </div>
        </div>

        <div class="row">
          <h1 style="margin-left: 15px">Accounts</h1>
          <div class="col-lg-4 col-xs-6">
            <!-- small box -->
            <div class="small-box bg-green">
              <div class="inner">
                <div class="inner">
                  <h4>{{ balance.today_credit }}</h4>

                  <p>Today Credit</p>
                </div>
                <div class="icon">
                  <div class="inner" style="margin-top: 20px">
                    <h4>{{ balance.total_credit }}</h4>

                    <p>Total Credit</p>
                  </div>
                </div>
               </div>
              <a href="#" class="small-box-footer"
                >Debit <i class="fa fa-arrow-circle-right"></i
              ></a>
            </div>
          </div>

          <div class="col-lg-4 col-xs-6">
            <!-- small box -->
            <div class="small-box bg-green">
              <div class="inner">
                <div class="inner">
                  <h4>{{ balance.today_debit }}</h4>
                   <p>Today Debit</p>
                </div>
                <div class="icon">
                  <div class="inner" style="margin-top: 20px">
                    <h4>{{ balance.total_debit }}</h4>

                    <p>Total Debit</p>
                  </div>
                </div>
            </div>
              <a href="#" class="small-box-footer"
                >Debit <i class="fa fa-arrow-circle-right"></i
              ></a>
            </div>
          </div>

          <div class="col-lg-4 col-xs-6">
            <!-- small box -->
            <div class="small-box bg-green">
              <div class="inner">
                <div class="inner">
                  <h4>{{ balance.today_credit - balance.today_debit }}</h4>

                  <p>Today</p>
                </div>
                <div class="icon">
                  <div class="inner" style="margin-top: 20px">
                    <h4>{{ balance.total_credit - balance.total_debit }}</h4>
                   <p>Total</p>
                  </div>
                </div>
              </div>
              <a href="#" class="small-box-footer"
                >Balance <i class="fa fa-arrow-circle-right"></i
              ></a>
            </div>
          </div>
        </div>
          <div class="row">
          <h1 style="margin-left: 15px">Stock</h1>

          <div class="col-lg-4 col-xs-6">
            <div class="small-box bg-green">
              <div class="inner">
                <h3 class="">{{ stock.total_quantity }}</h3>

                <h4>Total Stock Quantity</h4>
              </div>
            
            </div>
          </div>
            <div class="col-lg-4 col-xs-6">
            <div class="small-box bg-green">
              <div class="inner">
                <h3 class="">{{ stock.total_price }}</h3>

                <h4>Total Stock Amount</h4>
              </div>
            
            </div>
          </div>

        

         </div>
        
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",

  data() {
    return {
      orders: {},
      loading: true,
      balance: {},
      stock:'',
      base_url: this.$store.state.image_base_link,

    };
  },
  created() {},
  mounted() {
    this.dashboard();
  },
  methods: {
    dashboard() {
      axios
        .get("/dashboard")
        .then((resp) => {
          // console.log(resp)
          this.orders = resp.data.orders;
          this.balance = resp.data.balance;
          this.stock=resp.data.stock;
        //  console.log(resp.data.stock)
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  watch: {
    orders: function (value) {
      if (Object.keys(value).length) {
        this.loading = false;
      }
    },
  },
};
</script>

<style>
.box-gradiant {
  background: -webkit-linear-gradient(to right, #c33764, #1d2671);
  background: linear-gradient(to right, #c33764, #1d2671);
}
.small-box .icon {
  color: #fff !important;
  opacity: 0.6;
}
</style>
