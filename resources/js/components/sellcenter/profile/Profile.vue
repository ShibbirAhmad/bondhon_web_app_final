<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>sell center</a>
          </li>
          <li class="active">Profile</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title">Your Information</h3>
              </div>
              <div class="box-body">
                <h1 v-if="loading"><i class="fa fa-spinner fa-spin"></i></h1>
                <form >

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Name</label>

                        <input
                          type="text"
                          :value="sellcenter.name"
                           readonly
                          class="form-control"   
                        />

                      </div>
                    </div>

                      <div class="col-md-6">
                      <div class="form-group">
                        <label for="phone">Phone</label>
                        <input
                          type="text"
                          class="form-control"
                           :value="sellcenter.phone"
                           readonly
                        />
                      </div>
                    </div>
                
                  </div>
                      <div class="form-group">
                        <label for="phone">Licience</label>
                        <input
                          type="text"
                          class="form-control"
                           :value="sellcenter.licience"
                           readonly
                        />
                      </div>

                  <div class="form-group">
                    <label for="address">Address</label>
                    <textarea
                      class="form-control"
                      readonly
                      rows="3"
                    >  {{ sellcenter.address }} </textarea>

                  </div>
                  <div class="form-group text-center">
                    <img
                      :src="this.base_url + sellcenter.logo"
                      class="image-responsive"
                      style="width:100px; height:100px;border-radius:50%;"
                    />
              
                  </div>

                  <br/>
                  <div class="text-center">
                    <router-link
                      class="btn btn-primary"
                      :to="{ name: 'sell_center_dashboard' }"
                      >Go Back</router-link
                    >
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>

import navbar from "../Navbar";
export default {
  created() {
    this.$store.dispatch('sellcenter');
    setTimeout(() => {
      this.loading = false;
    }, 500);
  },
  data() {
    return {
      base_url: this.$store.state.image_base_link,
      loading: true,
    };
  },
  computed: {
    sellcenter(){
      return  this.$store.getters.sellcenter ;
    }
  },
  components: {
    navbar,
  },
};
</script>

<style scoped>
.mb-2 {
  margin-bottom: 5px !important;
}
</style>
