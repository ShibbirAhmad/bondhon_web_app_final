<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'resellerAdd' }" class="btn btn-primary"
            ><i class="fa fa-plus"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Reseller</li>
        </ol>
      </section>

      <section class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-10">
              <div class="box box-primary">
                <div class="box-header with-border"></div>
                <div class="box-body">
                  <table class="table text-center">
                    <thead>
                      <tr>
                        <th scope="col">Serial</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Image</th>
                        <th scope="col">phone</th>
                        <th scope="col">Bkash Number</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>

                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr
                        v-for="(reseller, index) in resellerList.data"
                        :key="index"
                      >
                        <td>{{ index }}</td>
                        <td>
                          <a
                            :href="'/admin/to/reseller/' + reseller.id"
                            target="_blank"
                            >{{ reseller.name }}</a
                          >
                        </td>
                        <td>{{ reseller.username }}</td>
                        <td>{{ reseller.company_name }}</td>
                        <td>{{ reseller.email }}</td>
                        <td>
                          <img
                            v-if="reseller.image"
                            :src="'/../public/storage/' + reseller.image"
                            class="reseller-image"
                            alt="reseller Image"
                          />
                          <img
                            v-else
                            :src="'/../public/storage/images/noimage.png'"
                            class="img-circle small-image"
                            alt="admin Image"
                          />
                        </td>
                        <td>{{ reseller.phone }}</td>
                        <td>{{ reseller.bkash_number }}</td>
                        <td>{{ reseller.address }}</td>
                        <td>
                          <span class="badge" v-if="reseller.status == 1"
                            >Active</span
                          >
                          <span class="badge text-bold" v-else>De-Active</span>
                        </td>
                        <td>
                          <router-link
                            :to="{
                              name: 'resellerEdit',
                              params: { id: reseller.id },
                            }"
                            class="btn btn-sm btn-success"
                          >
                            <i class="fa fa-edit"></i>
                          </router-link>
                          <a
                            class="btn btn-warning"
                            title="De-active"
                            @click="deActive(reseller.id, index)"
                            v-if="reseller.status == 1"
                            ><i class="fa fa-ban"></i
                          ></a>
                          <a
                            class="btn btn-primary"
                            title="active"
                            @click="active(reseller.id, index)"
                            v-else
                            ><i class="fa fa-check"></i
                          ></a>
                        </td>
                      </tr>
                    </tbody>
                    <pagination
                      :data="resellerList"
                      @pagination-change-page="getResellerList"
                    ></pagination>
                  </table>
                </div>
                <div class="box-footer"></div>
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
  mounted() {
    console.log("mounted reseller");
    setTimeout(() => {
      this.loading = false;
    }, 500);
    this.getResellerList();
  },

  data() {
    return {
      resellerList: {},
      loading: true,
    };
  },

  methods: {
    getResellerList(page = 1) {
      axios.get("/admin/reseller?page=" + page).then((resp) => {
        console.log(resp);
        if (resp.data.success == "OK") {
          this.resellerList = resp.data.resellers;
        }
      });
    },

    remove(reseller) {
      if (confirm("Are you sure to remove")) {
        axios
          .delete("/reseller/" + reseller.id)
          .then((resp) => {
            if (resp.data.success == "OK") {
              alert(resp.data.message);
              this.getResellerList();
            } else {
              alert(resp.data.message);
            }
          })
          .catch();
      }
    },
    deActive(reseller_id, index) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't de-active this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.value) {
          axios
            .get("/deactive/reseller/" + reseller_id)
            .then((resp) => {
              console.log(resp);
              if (resp.data.status == "SUCCESS") {
                this.resellerList.data[index].status = 0;
                this.$toasted.show(resp.data.message, {
                  position: "top-center",
                  type: "success",
                  duration: 4000,
                });
              } else {
                this.$toasted.show("some thing want to wrong", {
                  position: "top-center",
                  type: "error",
                  duration: 4000,
                });
              }
            })
            .catch((error) => {
              console.log(error);
              this.$toasted.show("some thing want to wrong", {
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
    active(reseller_id, index) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't active this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.value) {
          axios
            .get("/active/reseller/" + reseller_id)
            .then((resp) => {
              if (resp.data.status == "SUCCESS") {
                this.resellerList.data[index].status = 1;

                this.$toasted.show(resp.data.message, {
                  position: "top-center",
                  type: "success",
                  duration: 4000,
                });
              } else {
                this.$toasted.show("some thing want to wrong", {
                  position: "top-center",
                  type: "error",
                  duration: 4000,
                });
              }
            })
            .catch((error) => {
              this.$toasted.show("some thing want to wrong", {
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
.dropbtn {
  width: 100% !important;
  margin-bottom: 5px !important;
}
.dropbtn-active {
  display: block !important;
}
.dropdown-action {
  display: none;
  width: 90px;
  position: absolute;
}
</style>
