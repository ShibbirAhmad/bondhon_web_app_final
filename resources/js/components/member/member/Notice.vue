<template>
  <div>
    <member-main></member-main>
    <div class="content-wrapper">
      <section style="margin-bottom: 20px" class="content-header">
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">notice</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10 col-md-10 ">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                  <h3 class="box-title">Notice messages </h3>
                </div>
                <div class="box-body">
                  <table class="table table-hover table-stripeed ">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Message</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr
                        v-for="(notice, index) in notices.data"
                        v-bind:key="index"
                      >
                        <td >
                         <p v-if="notice.status=='0' " style="color:#000">  {{ index + 1 }} </p>
                         <p v-else style="color:#566D7E">  {{ index + 1 }} </p>
                        </td>
                        <td >
                         <p v-if="notice.status=='0' " style="color:#000">  {{ notice.name }} </p>
                         <p v-else style="color:#566D7E">  {{ notice.name }} </p>
                        </td>

                        <td >
                          <textarea v-if="notice.status=='0' " style="color:#000" class="form-control" rows="3">
                           {{ notice.message }} </textarea>

                             <textarea v-else style="color:566D7E" class="form-control" rows="3">
                           {{ notice.message }} </textarea>
                        </td>
                        <td >


                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="box-footer">
                  <div class="row">
                    <div class="col-lg-6">
                      <pagination
                        :data="notices"
                        :limit="3"
                        @pagination-change-page="noticeList"
                      >
                      </pagination>
                    </div>
                    <div
                      class="col-lg-6 mt-1"
                      style="margin-top: 25px; text-align: right"
                    >
                      <p>
                        Showing <strong>{{ notices.from }}</strong> to
                        <strong>{{ notices.to }}</strong> of total
                        <strong>{{ notices.total }}</strong> entries
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
      this.noticeList();
      this.loading = false;
    }, 500);
  },
  data() {
    return {
      notices: {},
      loading: true,
      item: 10,
      search: "",
    };
  },
  methods: {
    noticeList(page = 1) {
      axios
        .get("/api/display/notices?page=" + page, {
          params: {
            item: this.item,
          },
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "OK") {
            this.notices = resp.data.notices;

          }
        });
    },

  },
};
</script>
