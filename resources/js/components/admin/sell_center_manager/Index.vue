<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'sell_center_manager_add' }" class="btn btn-primary"
            ><i class="fa fa-plus"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">sellcenter manager</li>
        </ol>
      </section>

      <section class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-11 col-md-11">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                  <div class="box-title">Sell Center Managers</div>
                </div>

                <div class="box-body">
                  <table class="table table-striped table-bordered text-center">
                    <thead>
                      <tr>
                        <th scope="col">Serial</th>
                        <th scope="col">Sell Center</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">NID/Birth Reg. NO.</th>
                        <th scope="col">Address</th>
                        <th scope="col">Image</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr v-else
                        v-for="(manager, index) in managerList.data"
                        :key="index"
                      >
                        <td>{{ index + 1 }}</td>
                        <td> {{ sellcenterManager(manager.sell_center_id) }} </td>
                        <td>{{ manager.name }} </td>
                        <td>{{ manager.email }}</td>
                        <td>{{ manager.phone }}</td>
                        <td>{{ manager.nid ? manager.nid :'none'  }}</td>
                        <td>{{ manager.address }}</td>
                        <td>
                          <img
                            :src="
                              manager.image
                                ? basePath+manager.image
                                :basePath+'images/no_image.jpg'
                            "
                            class="manager_profile"
                          />
                        </td>
                        <td>
                          <router-link
                            :to="{
                              name: 'sell_center_manager_edit',
                              params: { id: manager.id },
                            }"
                            class="btn btn-sm btn-success"
                          >
                            <i class="fa fa-edit"></i>
                          </router-link>
                          <a class="btn btn-sm btn-danger">
                            <i
                              @click="trash_manager(manager.id)"
                              class="fa fa-trash"
                            ></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="row">
                    <div class="col-md-6">
                      <pagination
                        :data="managerList"
                        @pagination-change-page="getManagerList"
                      >
                        <span slot="prev-nav">&lt; Previous</span>
                        <span slot="next-nav">Next &gt;</span>
                      </pagination>
                    </div>
                    <div
                      class="col-md-6"
                      style="margin-top: 25px; text-align: right"
                    >
                      <p>
                        showing <strong>{{ managerList.from }} </strong> to
                        <strong>{{ managerList.from }} </strong> of total
                        entities {{ managerList.total }}
                      </p>
                    </div>
                  </div>
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
    console.log("mounted manager");
    this.getManagerList();
    this.getShowroms();
  },

  data() {
    return {
      managerList: {},
      loading: true,
      item: 10,
      basePath:this.$store.state.image_base_link,
      sellcenters:"",
    };
  },

  methods: {
     getShowroms() {
      axios.get("/api/list/of/sellcenter").then((resp) => {
        if (resp.data.status == "SUCCESS") {
          this.sellcenters = resp.data.sellcenters;
        }
      });
    },
    getManagerList(page = 1) {
      axios
        .get("/api/manager/list/sellcenter?page=" + page, {
          params: { item: this.item },
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.success == "OK") {
            this.managerList = resp.data.managers;
            this.loading=false;
          }
        })

    },
    
    trash_manager(manager_id) {
      if (confirm("Are you sure to remove")) {
        axios
          .get("/api/sellcenter/manager/delete/"+manager_id)
          .then((resp) => {
            console.log(resp);
            if (resp.data.status == "OK") {
              alert(resp.data.message);
              this.getManagerList();
            }
          })
      }
    },

    sellcenterManager($sell_center_id){
         let name='';
         this.sellcenters.forEach(element => {
             if (element.id==$sell_center_id) {
                 name = element.name ;
             }
         });
         return name ;
    }

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
.manager_profile{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
