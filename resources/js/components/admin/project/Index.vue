<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'project_add' }" class="btn btn-primary">
            <i class="fa fa-plus"></i>
          </router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"> <i class="fa fa-dashboard"></i>Dashboard </a>
          </li>
          <li class="active">Projects</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-11 col-md-11 col-sm-11">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <div class="row">
                    <div class="col-lg-2">
                      <select
                        class="form-control"
                        v-model="item"
                        @change="projectList()"
                      >
                        <option value="30">30</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="150">150</option>
                        <option value="200">200</option>
                      </select>
                    </div>
                    <div class="col-lg-5 text-center"> <h4> Project List </h4> </div>
                    <div class="col-lg-5">
                      <input
                        class="form-control"
                        placeholder="search with project code || project name "
                        v-model="search"

                      />
                    </div>

                  </div>
                </div>
                <div class="box-body">
                    <h1 v-if="loading" style="text-align: center; font-size: 50px">
                  <i class="fa fa-spinner fa-spin"></i>
                </h1>
                  <table v-else class="table table-striped table-bordered table-hover" id="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">project_place</th>
                        <th scope="col">project_type</th>
                        <th scope="col">Total Cost</th>
                        <th scope="col">manager_name</th>
                        <th scope="col">manager_address</th>
                        <th scope="col">status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr v-for="(project, index) in projects.data" :key="index" v-else>
                        <td scope="row">{{ index + 1 }}</td>
                        <td> <router-link style="color:blue" :to="{name:'project_details',params:{id:project.id}}"> {{ project.name }} </router-link> </td>
                        <td>{{ project.place }}</td>
                        <td>{{ project.project_type }}</td>
                        <td> <span class="badge badge-success"> &#2547; {{ costTotal(project.costs) }}</span> </td>
                        <td>{{ project.manager_name }}</td>
                        <td>{{ project.present_address }}</td>
                        <td>
                             <span v-if="project.status==0" class="bade bage-warning">de-active</span>
                             <span  v-else  class="bade bage-success">active</span>
                        </td>
                        <td>

                        <a class="btn btn-sm btn-warning" title="De-active" @click="deActiveProject(project.id)"
                            v-if="project.status==1"><i class="fa fa-ban"></i></a>
                        <a class="btn btn-sm btn-primary" title="active" @click="activeProject(project.id)"
                            v-else><i
                            class="fa fa-check"></i></a>

                            <router-link
                              :to="{
                                name: 'project_edit',
                                params: { id: project.id },
                              }"
                              class="btn btn-success btn-sm "
                              >Edit</router-link
                            >

                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="box-footer">
                  <div class="row">
                    <div class="col-lg-6">
                      <pagination
                        :data="projects"
                        @pagination-change-page="projectList"
                        :limit="3"
                      ></pagination>
                    </div>
                    <div
                      class="col-lg-6 mt-1"
                      style="margin-top: 25px; text-align: right"
                    >
                      <p>
                        Showing
                        <strong>{{ projects.from }}</strong> to
                        <strong>{{ projects.to }}</strong> of total
                        <strong>{{ projects.total }}</strong> entries
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
import { Form, HasError, AlertError } from "vform";


export default {
  created() {
    this.projectList();

  },
  data() {
    return {
      projects: {},
      loading: true,
      search: "",
      item: "10",
      base_url:this.$store.state.image_base_link,
    };
  },
  methods: {

     costTotal(data){
      let amount = 0 ;
      data.forEach(element => {
          amount += parseInt(element.amount) ;
      });
      return amount ;
    },

    projectList(page = 1) {
      axios
        .get("/api/list/project?page="+ page, {
          params: {
            item: this.item,
          },
        })
        .then((resp) => {
          this.projects = resp.data.projects;
          this.loading=false;
        })

    },

   activeProject($prject_id){
     axios.get('/api/active/project/'+$prject_id)
     .then(resp =>{
         if (resp.data.status=='SUCCESS') {
           this.projectList();
           this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
         }
     })
   },

    deActiveProject($prject_id){
    axios.get('/api/de-active/project/'+$prject_id)
      .then(resp =>{
          if (resp.data.status=='SUCCESS') {
            this.projectList();
            this.$toasted.show(resp.data.message, {
                type: "success",
                position: "top-center",
                duration: 4000,
              });
          }
      })
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
</style>
