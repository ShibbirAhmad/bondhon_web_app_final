<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'sell_center_courier_add' }" class="btn btn-primary"
            ><i class="fa fa-plus"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Courier</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row ">
            <div class="col-lg-10">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <div class="row">
                    <div class="col-md-6">
                      <h3 class="box-title">Courier table</h3>
                    </div>
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        v-model="search_data"
                        placeholder="search here"
                        @keyup="searchCourier"
                      />
                    </div>
                  </div>
                </div>
                <div class="box-body">
                  <table class="table table-bordered table-striped table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr v-for="(courier, index) in couriers.data">
                        <td scope="row">{{ index + 1 }}</td>
                        <td>{{ courier.name }}</td>
                        <td>
                          <span class="badge" v-if="courier.status == 1"
                            >Active</span
                          >
                          <span class="badge text-bold" v-else>De-Active</span>
                        </td>
                        <td>
                          <router-link
                            :to="{
                              name: 'sell_center_courier_edit',
                              params: { id: courier.id },
                            }"
                            class="btn btn-success btn-sm"
                            ><i class="fa fa-edit"></i
                          ></router-link>
                          <a
                            class="btn btn-sm btn-warning"
                            title="De-active"
                            @click="deActive(courier)"
                            v-if="courier.status == 1"
                            ><i class="fa fa-ban"></i
                          ></a>
                          <a
                            class="btn btn-sm btn-primary"
                            title="active"
                            @click="active(courier)"
                            v-else
                            ><i class="fa fa-check"></i
                          ></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="box-footer">
                  <div class="row">
                    <div class="col-lg-6">
                      <pagination
                        :data="couriers"
                        @pagination-change-page="courierList"
                      >
                      </pagination>
                    </div>
                    <div
                      class="col-lg-6 mt-1"
                      style="margin-top: 25px; text-align: right"
                    >
                      <p>
                        Showing <strong>{{ couriers.from }}</strong> to
                        <strong>{{ couriers.to }}</strong> of total
                        <strong>{{ couriers.total }}</strong> entries
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
  </div>
</template>

<script>
import navbar from "../Navbar.vue";
export default {
  created() {
    setTimeout(() => {
      this.courierList();
    }, 500);
    // this.getResults();
  },
  components:{
   navbar 
  },
  data() {
    return {
      couriers: {},
      loading: true,
      search_data: "",
    };
  },
  methods: {
    courierList() {
      axios
        .get("/api/sellcenter/courier/list")
        .then((resp) => {
          if (resp.data.status == "SUCCESS") {
            this.couriers = resp.data.couriers;
            this.loading = false;
          }
        })

    },
    searchCourier() {
      if (this.search_data.length >= 3) {
        axios.get("/api/search/courier/" + this.search_data).then((resp) => {
          this.couriers = resp.data.couriers;
        });
      } else {
        this.courierList();
      }
    },
    deActive(courier) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't de-active this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.value) {
          axios
            .get("/api/sell/center/courier/de-active/" + courier.id)
            .then((resp) => {
              //  console.log(resp)
              if (resp.data.status == "SUCCESS") {
                this.courierList();
                this.$toasted.show(resp.data.message, {
                  position: "top-center",
                  type: "success",
                  duration: 4000,
                });
              } else {
                this.$toasted.show("something  went  to wrong", {
                  position: "top-center",
                  type: "error",
                  duration: 4000,
                });
              }
            })
            .catch((error) => {
              // console.log(error)
              this.$toasted.show("something  went  to wrong", {
                position: "top-center",
                type: "error",
                duration: 4000,
              });
            });
        } else {
          this.$toasted.show("OK ! no action here", {
            position: "top-center",
            type: "info",
            duration: 3000,
          });
        }
      });
    },
    active(courier) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't active this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.value) {
          axios
            .get("/api/sell/center/courier/active/" + courier.id)
            .then((resp) => {
              if (resp.data.status == "SUCCESS") {
                this.courierList();
                this.$toasted.show(resp.data.message, {
                  position: "top-center",
                  type: "success",
                  duration: 4000,
                });
              } else {
                this.$toasted.show("something  went  to wrong", {
                  position: "top-center",
                  type: "error",
                  duration: 4000,
                });
              }
            })
            .catch((error) => {
              this.$toasted.show("something  went  to wrong", {
                position: "top-center",
                type: "error",
                duration: 4000,
              });
            });
        } else {
          this.$toasted.show("Ok ! no action here", {
            position: "top-center",
            type: "info",
            duration: 3000,
          });
        }
      });
    },
  },

};
</script>

<style scoped>
</style>