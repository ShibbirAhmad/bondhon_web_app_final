<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'add_employee_sell_center' }" class="btn btn-primary"
            ><i class="fa fa-plus"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">member</li>
        </ol>
      </section>

      <section class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-10">
              <div class="box box-primary">
                <div class="box-header with-border"></div>

                <div class="box-body">
                  <div style="margin-bottom: 20px" class="row">
            
                    <div class="col-md-5"></div>
                    <div class="col-md-7">
                      <input
                        type="text"
                        v-model="search_data"
                        class="form-control"
                        placeholder="search employee name,phone  "
                        @keyup="searchMember"
                      />
                    </div>
                  </div>
                  <table class="table table-hover table-striped table-bordered text-center">
                    <thead>
                      <tr>
                        <th scope="col">Serial</th>
                        <th scope="col">Name</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr
                        v-for="(member, index) in memberList"
                        :key="index"
                      >
                        <td>{{ index + 1 }}</td>
                        <td>
                          <router-link
                            style="font-size:16px;color:blue"
                            :to="{
                              name: 'sell_center_employee_salary',
                              params: { id: member.id },
                            }"
                          >
                            {{ member.name }}
                          </router-link>
                        </td>
                        <td>{{ member.designation }}</td>
                        <td>{{ member.phone }}</td>
   
                        <td>
                          <router-link
                            :to="{
                              name: 'edit_employee_sell_center',
                              params: { id: member.id },
                            }"
                            class="btn btn-sm btn-success"
                          >
                            <i class="fa fa-edit"></i>
                          </router-link>

                          <a class="btn btn-sm btn-danger">
                            <i
                              @click="trash_member(member.id, index)"
                              class="fa fa-trash"
                            ></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
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
import navbar from "../Navbar.vue";
export default {
    components:{
    navbar
  },
  mounted() {

    setTimeout(() => {
      this.loading = false;
    }, 500);
    this.getmemberList();
    
  },

  data() {
    return {
      memberList: {},
      loading: true,
      item: 10,
      basePath:this.$store.state.image_base_link,
      search_data: "",
    };
  },

  methods: {
    searchMember() {
      if (this.search_data.length > 2) {
        axios
          .get("/api/api/sellcenter/employee/search/" + this.search_data)
          .then((resp) => {
            this.memberList = resp.data.employees;
          });
      } else {
        this.getmemberList();
      }
    },

    getmemberList() {
      axios
        .get("/api/sellcenter/employee/list")
        .then((resp) => {
          if (resp.data.success == "OK") {
            this.memberList = resp.data.employees;
          }
        })
       
    },

    trash_member(member_id, index) {
      if (confirm("Are you sure to remove")) {
        axios
          .get("/team/members/trash/" + member_id)
          .then((resp) => {
            console.log(resp);
            if (resp.data.success == "OK") {
              alert(resp.data.message);
              this.memberList.data.splice(index, 1);
            }
          })
          
      }
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
