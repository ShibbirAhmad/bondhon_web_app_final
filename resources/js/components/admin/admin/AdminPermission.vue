<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <a @click="goBack" class="btn btn-primary"
            ><i class="fa fa-arrow-left"></i
          ></a>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Permissons</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header with-border">
                <h3 class="box-title">Assign Permissions</h3>
              </div>
              <div class="box-body">
                <h1 v-if="loading"><i class="fa fa-spinner fa-spin"></i></h1>
                <form
                  v-else
                  @submit.prevent="update"
                  @keydown="form.onKeydown($event)"
                  enctype="multipart/form-data"
                >
                  <div class="alert-danger alert" v-if="error">
                    {{ error }}
                  </div>
                  <div class="form-group">
                    <label>Admin Name</label>
                    <input
                      type="text"
                      :value="admin_name"
                      readonly
                      class="form-control"
                    />
                  </div>

                  <h4 class="text-center mb-5"><strong>PERMISSIONS LIST </strong></h4>
                  <div
                    class="row permission_list"
                    v-for="(permission, index) in permissons"
                    :key="index"
                  >
                    <div class="col-lg-5">
                      <ul class="permisson_group_name">
                        <label :for="index" >
                          <input
                            type="checkbox"
                            @click="permissionGroup"
                            :id="index"
                            v-if="permission.length > 1"
                          />
                          {{ index }}
                        </label>
                      </ul>
                    </div>
                    <div class="col-lg-7">
                      <div v-for="item in permission" :key="item.id">
                        <label :for="'permission_' + item.id">
                          <input
                            :id="'permission_' + item.id"
                            :class="index"
                            v-model="form.permissons_id"
                            :value="item.id"
                            type="checkbox"
                          />
                          {{ item.name }}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group text-center">
                     <button
                      :disabled="form.busy"
                      type="submit"
                      class="btn btn-primary btn-block"
                      
                  >
                    <i class="fa fa-spin fa-spinner" v-if="form.busy"></i>Update
                  </button>
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
import Vue from "vue";
import { Form, HasError, AlertError } from "vform";

Vue.component(HasError.name, HasError);
export default {
  name: "Add",
  created() {
    this.getPermissonList();
     this.$can('manage order');
  },
  data() {
    return {
      form: new Form({
        permissons_id: [],
      }),
      admin_name: "",
      role: "",
      permissons: "",
      loading: true,
      error: "",
    };
  },

  methods: {
    getPermissonList() {
      axios
        .get("/api/get/admin/permission/list/" + this.$route.params.id)
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "OK") {
            this.admin_name = resp.data.admin_name[0].name;
            this.permissons = resp.data.permissions;
            if (resp.data.admin_has_permissions_id.length) {
                this.form.permissons_id.push(...resp.data.admin_has_permissions_id)
            }
            this.loading = false;
          }
        });
    },

    goBack(){
      window.history.back();
    },

    update() {
      this.form
        .post("/api/assign/admin/permissions/" + this.$route.params.id, {
          ternsformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "OK") {
            this.$toasted.show(resp.data.message, {
              type: "success",
              duration: 4000,
              position: "top-center",
            });
            this.$router.push({ name: "admin" });
          }
        });
    },
    permissionGroup(e) {
      let permission = document.getElementsByClassName(e.target.id);
      for (let i = 0; i < permission.length; i++) {
        let permission_id = permission[i].value;
        if (permission[i].checked) {
          permission[i].checked = false;
          let permission_index = this.form.permissons_id.indexOf(permission_id);
          this.form.permissons_id.splice(permission_index, 1);
        } else {
          permission[i].checked = true;
          this.form.permissons_id.push(permission_id);
        }
      }
    },
  },
};
</script>

<style scoped>
.mb-2 {
  margin-bottom: 5px !important;
}
.row.permission_list {
  margin-bottom: 10px;
  border-bottom: 1px solid #ddd;
}
.permisson_group_name {
    border-right: 1px solid #000;
    line-height: 90px;
}
</style>
