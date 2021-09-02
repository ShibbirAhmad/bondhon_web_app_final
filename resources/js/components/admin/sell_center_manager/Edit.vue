<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link
            :to="{ name: 'sell_center_manager' }"
            class="btn btn-primary"
            ><i class="fa fa-arrow-left"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Manager</a>
          </li>
          <li class="active">Edit</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-8 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title">Edit Selll Center Manager</h3>
              </div>
              <div class="box-body">
                <form
                  @submit.prevent="updateManager"
                  @keydown="form.onKeydown($event)"
                  enctype="multipart/form-data"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="">Selll Center</label>
                        <select
                          v-model="form.sell_center_id"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('sell_center_id'),
                          }"
                          name="sell_center_id"
                        >
                          <option disabled>select sell center</option>
                          <option
                            v-for="(sellcenter, s_idx) in sellcenters"
                            :value="sellcenter.id"
                            :key="s_idx"
                          >
                            {{ sellcenter.name }}
                          </option>
                        </select>
                        <has-error :form="form" field="sell_center_id">
                        </has-error>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Name</label>
                        <input
                          v-model="form.name"
                          type="text"
                          name="name"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('name') }"
                          autofocus
                          autocomplete="off"
                          placeholder="name"
                        />

                        <has-error :form="form" field="name"></has-error>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Email</label>
                        <input
                          v-model="form.email"
                          type="email"
                          name="email"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('email') }"
                          autofocus
                          autocomplete="off"
                          placeholder="email"
                        />
                        <has-error :form="form" field="email"></has-error>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="phone">Phone</label>
                        <input
                          type="text"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('phone') }"
                          autocomplete="off"
                          autofocus
                          v-model="form.phone"
                          name="phone"
                        />
                        <has-error :form="form" field="phone"> </has-error>
                      </div>
                    </div>
                  </div>

                

                  <div class="form-group">

                    <div class="row">
                      <div class="col-md-6">
                        <label for="address">Address</label>
                        <input
                          type="text"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('address') }"
                          autocomplete="off"
                          autofocus
                          v-model="form.address"
                          name="address"
                        />
                        <has-error :form="form" field="address"> </has-error>
                      </div>

                       <div class="col-md-6">
                         <div class="form-group">
                          <label for="nid">NID/Birth Registration No.</label>
                          <input
                            type="number"
                            class="form-control"
                            :class="{ 'is-invalid': form.errors.has('nid') }"
                            v-model="form.nid"
                            name="nid"
                          />
                          <has-error :form="form" field="nid"> </has-error>
                        </div>
                      </div>


                    </div>

                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <br>
                      <div class="form-group">
                        <label>Image</label>
                        <input
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('image') }"
                          type="file"
                          @change="uploadImage"
                          name="image"
                        />
                        <has-error :form="form" field="image"></has-error>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group text-center">
                        <img id="m_profile"
                          :src="basePath+form.image"
                          class="manager_profile"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="form-group text-center">
                    <button
                      :disabled="form.busy"
                      type="submit"
                      class="btn btn-primary"
                    >
                      <i class="fa fa-spin fa-spinner" v-if="form.busy"></i
                      >Save
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
import datePicker from "vue-bootstrap-datetimepicker";

Vue.component(HasError.name, HasError);

export default {
  created() {
    this.getShowroms();
    this.getManager();
  },
  data() {
    return {
      form: new Form({
        sell_center_id: "select sellcenter",
        name: "",
        email: "",
        nid: "",
        phone: "",
        address: "",
        image: "",
      }),
      loading: true,
      sellcenters: "",
      basePath:this.$store.state.image_base_link,
    };
  },

  methods: {
    getManager() {
      axios
        .get("/api/sellcenter/manager/edit/item/" + this.$route.params.id)
        .then((resp) => {
          console.log(resp);
          this.form.sell_center_id = resp.data.manager.sell_center_id;
          this.form.name = resp.data.manager.name;
          this.form.email = resp.data.manager.email;
          this.form.phone = resp.data.manager.phone;
          this.form.address = resp.data.manager.address;
          this.form.nid = resp.data.manager.nid;
          this.form.image = resp.data.manager.image;
          this.loading = false;
        });
    },
    getShowroms() {
      axios.get("/api/sellcenter/list").then((resp) => {
        if (resp.data.status == "SUCCESS") {
          this.sellcenters = resp.data.sellcenters;
        }
      });
    },
    updateManager() {
      this.form
        .post("/api/sellcenter/manager/update/"+this.$route.params.id, {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.success == "OK") {
            this.$router.push({ name: "sell_center_manager" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              sellcenter: "top-center",
              duration: 4000,
            });
          }
        });
    },

    uploadImage(e) {
      const file = e.target.files[0];
      this.form.image = file;
      ///let image file size check
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (evt) => {
        let img = new Image();
        img.onload = () => {
          console.log(img.width + "-" + img.height);
        };
        img.src = evt.target.result;
        document.getElementById('m_profile').src = evt.target.result;
      };
    },
  },
};
</script>

<style scoped>
.mb-2 {
  margin-bottom: 5px !important;
}

.manager_profile{
   width:100px;
   height: 100px;
   border-radius: 50%;
   border:1px solid #ddd;
}

</style>
