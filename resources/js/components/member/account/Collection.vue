<template>
  <div>
    <member-main></member-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'member_dashboard' }" class="btn btn-primary"
            ><i class="fa fa-arrow-left"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Collectios</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row ">
            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 ">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                  <h3 class="box-title">Collection History</h3>
                </div>

                <div class="box-body">
                  <div class="table_container col-lg-12 col-md-12 col-xs-12">
                    <table class="table table-striped text-center table-borderd">
                    <tr>
                      <th>#</th>
                      <th>Date</th>
                      <th>Month</th>
                      <th>Comment</th>
                      <th>Amount</th>
                    </tr>
                    <tbody>
                      <tr
                        v-for="(item, index) in collections.data"
                        :key="index"
                      >
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.date }}</td>
                        <td>{{  item.month ? item.month : 'empty' }}</td>
                        <td>{{ item.comment }}</td>
                        <td>{{ item.amount }}</td>
                      </tr>
                      <tr>
                        <td colspan="4">In Total</td>
                        <td>{{ totalCollections() }}</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                </div>
                <div class="box-footer">
                  <div class="row">
                    <div class="col-sm-12">
                      <pagination
                        :data="collections"
                        @pagination-change-page="collections"
                        :limit="3"
                      >
                      </pagination>
                    </div>
                    <div class="col-sm-12">
                      <p class="item_displayer">
                        Showing
                        <strong>{{ collections.from }}</strong> to
                        <strong>{{ collections.to }}</strong> of total
                        <strong>{{ collections.total }}</strong> entries
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
export default {
  created() {
    setTimeout(() => {
      this.collectionList();
    }, 1000);

  },
  data() {
    return {
      collections: {},
      loading: true,
    };
  },
  methods: {
    collectionList(page=1) {
      axios
        .get("/api/list/member/collections?page="+page)
        .then((resp) => {
          if (resp.data.status == "OK") {
            this.collections = resp.data.collections;
            this.loading = false;
          }
        })

    },

   totalCollections(){
     if (this.collections.data) {
         let total=0 ;
         this.collections.data.forEach(element => {
            total += parseInt(element.amount) ;
            });
          return total ;
        }
   }


  },

};
</script>

<style scoped>


.box{
  min-height: 400px;
}

@media screen and (max-width:450px) {
  .row {
    margin-right: -30px !important;
    margin-left: -30px !important;
  }

  .col-xs-12 {
    width: 100% !important;
  }

  .table_container {
    overflow-x:scroll;
  }

  .item_displayer{
    margin-left:10px;
  }

}

</style>
