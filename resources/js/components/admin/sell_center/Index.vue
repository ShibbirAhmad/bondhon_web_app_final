<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'sell_center_add' }" class="btn btn-primary"
            ><i class="fa fa-plus"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Sell Center</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10 col-lg-offset-1">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                    <h3 class="box-title">Sell Center table</h3>
                </div>
                <div class="box-body">
                  <table class="table table-bordered table-striped text-center">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">Place</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Licience</th>
                        <th scope="col">Logo</th>
                        <th scope="col">action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr
                        v-for="(sellcenter, index) in sellcenters"
                        :key="index"
                        v-else
                      >
                        <td scope="row">{{ index + 1 }}</td>
                        <td>{{ sellcenter.name }}</td>
                        <td>{{ sellcenter.address }}</td>
                        <td>{{ sellcenter.phone }}</td>
                        <td>{{ sellcenter.licience ? sellcenter.licience : 'None'}}</td>
                        <td>  <img :src="base_url+sellcenter.logo" alt="logo" width="50px" height="50px"> </td>
                        <td>
                          <router-link class="btn btn-sm btn-success"
                            :to="{
                              name: 'sell_center_edit',
                              params: { id: sellcenter.id },
                            }"
                          > <i class="fa fa-edit"></i> </router-link>
                         
                         <button @click="goToSellCenterDashboard(sellcenter.id)" class="btn btn-sm btn-success">Dashboard</button>

                        </td>
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
export default {
  created() {
    this.getShowroms();
  },
  data() {
    return {
      sellcenters: "",
      loading: true,
      base_url: this.$store.state.image_base_link ,
    };
  },
  methods: {
    goToSellCenterDashboard(id){
       axios.get('/api/admin/access/to/sell/center/'+id)
       .then((resp)=>{
          console.log(resp);
          if (resp.data.status=='SUCCESS') {
              localStorage.setItem('sell_center_token',resp.data.sell_center_token);
              window.open('/sell/center/dashboard');
          }
       })
    },
    getShowroms() {
      axios.get("/api/sellcenter/list")
      .then((resp) => {
        if (resp.data.status == "SUCCESS") {
          this.sellcenters = resp.data.sellcenters;
          this.loading = false;
        }
      });
    },
  },
};
</script>

<style scoped>
</style>
