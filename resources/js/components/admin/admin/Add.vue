<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'admin' }" class="btn btn-primary"
            ><i class="fa fa-arrow-left"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Memeber</li>
        </ol>
      </section>
      <section class="content">
        <div class="row ">

               <h1 v-if="loading"><i class="fa fa-spinner fa-spin"></i></h1>
                <form
                  v-else
                  @submit.prevent="add"
                  @keydown="form.onKeydown($event)"
                  enctype="multipart/form-data"
                >
                  <div class="alert-danger alert" v-if="error">
                    {{ error }}
                  </div>

          <div class="col-lg-10 col-lg-offset-1">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title">Personal Information</h3>
              </div>
              <div class="box-body">

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Name <b class="text-danger">*</b> </label>
                        <input
                          v-model="form.name"
                          type="text"
                          name="name"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('name') }"
                          autofocus

                          placeholder="name"
                        />
                        <has-error :form="form" field="name"></has-error>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Email<b class="text-danger">*</b></label>
                        <input
                          v-model="form.email"
                          type="email"
                          name="email"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('email') }"
                          autofocus
                          placeholder="email"
                        />
                        <has-error :form="form" field="email"></has-error>
                      </div>
                    </div>
                  </div>

                  <div class="row">

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Phone<b class="text-danger">*</b></label>
                        <input
                          v-model="form.phone"
                          type="text"
                          name="phone"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('phone') }"
                          autofocus
                          required
                          maxlength="11"

                          placeholder="01xxxxxxxxx"
                        />
                        <has-error :form="form" field="phone"></has-error>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          >NID/Birth Registration NO<b class="text-danger"
                            >*</b
                          ></label
                        >
                        <input
                        class="form-control"
                        :class="{ 'is-invalid': form.errors.has('nid') }"
                        type="file"
                        @change="uploadNidImage"
                        name="nid"
                      />
                        <has-error :form="form" field="nid"></has-error>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>
                          Present Address <b class="text-danger">*</b>
                        </label>
                        <input
                          v-model="form.permanent_address"
                          type="text"
                          name="present_address"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('present_address'),
                          }"
                          autofocus
                          required
                          placeholder="present_address"
                        />
                        <has-error
                          :form="form"
                          field="present_address"
                        ></has-error>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>
                          Permanent Address <b class="text-danger">*</b>
                        </label>
                        <input
                          v-model="form.present_address"
                          type="text"
                          name="permanent_address"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('permanent_address'),
                          }"
                          autofocus
                          required
                          placeholder="permanent_address"
                        />
                        <has-error
                          :form="form"
                          field="permanent_address"
                        ></has-error>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                     <div class="form-group">
                    <label>Password</label>
                    <input
                      v-model="form.password"
                      type="password"
                      name="password"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('password') }"
                      autofocus

                      placeholder="password"
                    />
                    <has-error :form="form" field="password"></has-error>
                  </div>
                    </div>
                  <div class="col-md-6">

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

                  </div>



              </div>
            </div>
          </div>

            <div class="col-lg-10 col-lg-offset-1">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title">Family Information</h3>
              </div>
              <div class="box-body">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Father/Husband Name <b class="text-danger">*</b> </label>
                        <input
                          v-model="form.father_name"
                          type="text"
                          name="father_name"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('father_name') }"
                          autofocus

                          placeholder="father_name"
                        />
                        <has-error :form="form" field="father_name"></has-error>
                      </div>
                    </div>
                    <div class="col-md-6">
                     <div class="form-group">
                        <label
                          >Father/Husband NID<b class="text-danger"
                            >*</b
                          ></label
                        >
                         <input
                          class="form-control"
                          required
                          :class="{ 'is-invalid': form.errors.has('father_nid') }"
                          type="file"
                            @change="uploadFatherNidImage"
                          name="father_nid"
                         />
                        <has-error :form="form" field="father_nid"></has-error>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                     <div class="form-group">
                        <label>Mother/Wife Name <b class="text-danger">*</b> </label>
                        <input
                          v-model="form.mother_name"
                          type="text"
                          name="mother_name"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('mother_name') }"
                          autofocus

                          placeholder="mother_name"
                        />
                        <has-error :form="form" field="mother_name"></has-error>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          >Mother/Wife NID<b class="text-danger"
                            >*</b
                          ></label
                        >
                        <input
                          class="form-control"
                          required
                          :class="{ 'is-invalid': form.errors.has('mother_nid') }"
                          type="file"
                            @change="uploadMotherNidImage"
                          name="mother_nid"
                         />
                        <has-error :form="form" field="mother_nid"></has-error>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                        <label>Father/Husband Phone<b class="text-danger">*</b></label>
                        <input
                          v-model="form.father_phone"
                          type="text"
                          name="father_phone"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('father_phone') }"
                          autofocus
                          required
                          maxlength="11"

                          placeholder="01xxxxxxxxx"
                        />
                        <has-error :form="form" field="father_phone"></has-error>
                      </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group">
                        <label>Mother/Wife Phone<b class="text-danger">*</b></label>
                        <input
                          v-model="form.mother_phone"
                          type="text"
                          name="mother_phone"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('mother_phone') }"
                          autofocus
                          required
                          maxlength="11"
                          placeholder="01xxxxxxxxx"
                        />
                        <has-error :form="form" field="mother_phone"></has-error>
                      </div>
                      </div>

                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>
                          Present Address <b class="text-danger">*</b>
                        </label>
                        <input
                          v-model="form.parent_present_address"
                          type="text"
                          name="parent_present_address"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('parent_present_address'),
                          }"
                          autofocus
                          required
                          placeholder="parent_present_address"
                        />
                        <has-error
                          :form="form"
                          field="parent_present_address"
                        ></has-error>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>
                          Permanent Address <b class="text-danger">*</b>
                        </label>
                        <input
                          v-model="form.parent_permanent_address"
                          type="text"
                          name="parent_permanent_address"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('parent_permanent_address'),
                          }"
                          autofocus
                          required
                          placeholder="parent_permanent_address"
                        />
                        <has-error
                          :form="form"
                          field="parent_permanent_address"
                        ></has-error>
                      </div>
                    </div>
                  </div>

                <div class="row">
                    <div class="col-md-6">
                     <div class="form-group">
                    <label>Father/Husband Photo</label>
                    <input
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('father_image') }"
                      type="file"
                      @change="uploadFatherImage"
                      name="father_image"
                    />
                    <has-error :form="form" field="father_image"></has-error>
                  </div>
                    </div>

                    <div class="col-md-6">
                     <div class="form-group">
                    <label>Mother/Wife Photo</label>
                    <input
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('mother_image') }"
                      type="file"
                      @change="uploadMotherImage"
                      name="mother_image"
                    />
                    <has-error :form="form" field="mother_image"></has-error>
                  </div>
                    </div>

                </div>


              </div>
            </div>
          </div>


          <div class="col-lg-10 col-lg-offset-1">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title"> Nominee Information</h3>
              </div>
              <div class="box-body">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label> Name <b class="text-danger">*</b> </label>
                        <input
                          v-model="form.nominee_name"
                          type="text"
                          name="nominee_name"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('nominee_name') }"
                          autofocus

                          placeholder="nominee_name"
                        />
                        <has-error :form="form" field="nominee_name"></has-error>
                      </div>
                    </div>
                    <div class="col-md-6">
                     <div class="form-group">
                        <label
                          >NID/Birth Registration NO<b class="text-danger"
                            >*</b
                          ></label
                        >
                         <input
                          class="form-control"
                          required
                          :class="{ 'is-invalid': form.errors.has('nominee_nid') }"
                          type="file"
                            @change="uploadNomineeNidImage"
                          name="nominee_nid"
                         />
                        <has-error :form="form" field="nominee_nid"></has-error>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                   <div class="col-md-6">
                      <div class="form-group">
                        <label>Email<b class="text-danger">*</b></label>
                        <input
                          v-model="form.nominee_email"
                          type="email"
                          name="nominee_email"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('nominee_email') }"
                          autofocus

                          placeholder="nominee_email"
                        />
                        <has-error :form="form" field="nominee_email"></has-error>
                      </div>
                    </div>
                     <div class="col-md-6">
                      <div class="form-group">
                        <label>Phone<b class="text-danger">*</b></label>
                        <input
                          v-model="form.nominee_phone"
                          type="text"
                          name="nominee_phone"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('nominee_phone') }"
                          autofocus
                          required
                          maxlength="11"

                          placeholder="01xxxxxxxxx"
                        />
                        <has-error :form="form" field="nominee_phone"></has-error>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>
                          Present Address <b class="text-danger">*</b>
                        </label>
                        <input
                          v-model="form.nominee_present_address"
                          type="text"
                          name="nominee_present_address"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('nominee_present_address'),
                          }"
                          autofocus
                          required
                          placeholder="nominee_present_address"
                        />
                        <has-error
                          :form="form"
                          field="nominee_present_address"
                        ></has-error>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>
                          Permanent Address <b class="text-danger">*</b>
                        </label>
                        <input
                          v-model="form.nominee_permanent_address"
                          type="text"
                          name="nominee_permanent_address"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('nominee_permanent_address'),
                          }"
                          autofocus
                          required
                          placeholder="nominee_permanent_address"
                        />
                        <has-error
                          :form="form"
                          field="nominee_permanent_address"
                        ></has-error>
                      </div>
                    </div>
                  </div>

                <div class="row">
                    <div class="col-md-6">
                     <div class="form-group">
                    <label>Photo<b class="text-danger">*</b></label>
                    <input
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('nominee_image') }"
                      type="file"
                      @change="uploadNomineeImage"
                      name="nominee_image"
                    />
                    <has-error :form="form" field="nominee_image"></has-error>
                  </div>
                    </div>

                    <div class="col-md-6">
                     <div class="form-group">

                      </div>
                    </div>

                </div>


              </div>
            </div>
          </div>



            <div class="col-lg-10 col-lg-offset-1">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title">Nominee Family Information</h3>
              </div>
              <div class="box-body">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Father/Husband Name <b class="text-danger">*</b> </label>
                        <input
                          v-model="form.nominee_father_name"
                          type="text"
                          name="nominee_father_name"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('nominee_father_name') }"
                          autofocus

                          placeholder="nominee_father_name"
                        />
                        <has-error :form="form" field="nominee_father_name"></has-error>
                      </div>
                    </div>
                    <div class="col-md-6">
                     <div class="form-group">
                        <label
                          > Father/Husband NID <b class="text-danger"
                            >*</b
                          ></label
                        >
                       <input
                        class="form-control"
                        required
                        :class="{ 'is-invalid': form.errors.has('nominee_father_nid') }"
                        type="file"
                          @change="uploadNomineeFatherNidImage"
                        name="nominee_father_nid"
                      />
                        <has-error :form="form" field="nominee_father_nid"></has-error>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                     <div class="form-group">
                        <label>Mother/Wife Name <b class="text-danger">*</b> </label>
                        <input
                          v-model="form.nominee_mother_name"
                          type="text"
                          name="nominee_mother_name"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('nominee_mother_name') }"
                          autofocus

                          placeholder="nominee_mother_name"
                        />
                        <has-error :form="form" field="nominee_mother_name"></has-error>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          >Mother/Wife NID<b class="text-danger"
                            >*</b
                          ></label
                        >
                        <input
                        class="form-control"
                        required
                        :class="{ 'is-invalid': form.errors.has('nominee_mother_nid') }"
                        type="file"
                         @change="uploadNomineeMotherNidImage"
                         name="nominee_mother_nid"
                      />
                        <has-error :form="form" field="nominee_mother_nid"></has-error>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                        <label>Father/Husband Phone<b class="text-danger">*</b></label>
                        <input
                          v-model="form.nominee_father_phone"
                          type="text"
                          name="nominee_father_phone"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('nominee_father_phone') }"
                          autofocus
                          required
                          maxlength="11"

                          placeholder="01xxxxxxxxx"
                        />
                        <has-error :form="form" field="nominee_father_phone"></has-error>
                      </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group">
                        <label>Mother/Wife Phone<b class="text-danger">*</b></label>
                        <input
                          v-model="form.nominee_mother_phone"
                          type="text"
                          name="nominee_mother_phone"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('nominee_mother_phone') }"
                          autofocus
                          required
                          maxlength="11"

                          placeholder="01xxxxxxxxx"
                        />
                        <has-error :form="form" field="nominee_mother_phone"></has-error>
                      </div>
                      </div>

                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>
                          Present Address <b class="text-danger">*</b>
                        </label>
                        <input
                          v-model="form.nominee_parent_present_address"
                          type="text"
                          name="nominee_parent_present_address"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('nominee_parent_present_address'),
                          }"
                          autofocus
                          required
                          placeholder="nominee_parent_present_address"
                        />
                        <has-error
                          :form="form"
                          field="parent_present_address"
                        ></has-error>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>
                          Permanent Address <b class="text-danger">*</b>
                        </label>
                        <input
                          v-model="form.nominee_parent_permanent_address"
                          type="text"
                          name="nominee_parent_permanent_address"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('nominee_parent_permanent_address'),
                          }"
                          autofocus
                          required
                          placeholder="nominee_parent_permanent_address"
                        />
                        <has-error
                          :form="form"
                          field="nominee_parent_permanent_address"
                        ></has-error>
                      </div>
                    </div>
                  </div>

                <div class="row">
                    <div class="col-md-6">
                     <div class="form-group">
                    <label>Father/Husband Photo</label>
                    <input
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('nominee_father_image') }"
                      type="file"
                      @change="uploadNomineeFatherImage"
                      name="nominee_father_image"
                    />
                    <has-error :form="form" field="nominee_father_image"></has-error>
                  </div>
                    </div>

                    <div class="col-md-6">
                     <div class="form-group">
                    <label>Mother/Wife Photo</label>
                    <input
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('nominee_mother_image') }"
                      type="file"
                      @change="uploadNomineeMotherImage"
                      name="nominee_mother_image"
                    />
                    <has-error :form="form" field="nominee_mother_image"></has-error>
                  </div>
                    </div>

                </div>


              </div>
            </div>
          </div>



          <div class="col-lg-10 col-lg-offset-1">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title"> Aggreement Information</h3>
              </div>
              <div class="box-body">

                   <div class="form-group aggreement_container">
                          <p v-html="aggreement_details"  >
                         </p>
                     </div>



                <div class="row">

                  <div class="col-md-6">
                    <br>
                     <div class="form-group">
                       <label for="agree_with_aggreement">
                        <input type="checkbox"
                        v-model="form.agree_with_aggreement"
                        required
                        value="true"
                         name="agree_with_aggreement" >  Aggree With Tersm & Condition
                          </label>
                      </div>
                    </div>

                    <div class="col-md-6">
                     <div class="form-group">
                    <label> Aggrement Photo </label>
                    <input
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('aggreement_image') }"
                      type="file"
                      required
                      @change="uploadAggrementImage"
                      name="aggreement_image"
                    />
                    <has-error :form="form" field="aggreement_image"></has-error>
                  </div>
                    </div>

                </div>


              </div>
            </div>
          </div>

               <div class="col-lg-10 form-group text-center">
                  <button
                    :disabled="form.busy"
                    type="submit"
                    class="btn btn-primary"
                  >
                    <i class="fa fa-spin fa-spinner" v-if="form.busy"></i>Submit
                  </button>
               </div>
                </form>
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
  created() {
    setTimeout(() => {
      this.getAggreement() ;
      this.loading = false;
    }, 500);
  },
  data() {
    return {
      form: new Form({
        name: "",
        email: "",
        phone: "",
        nid: "",
        present_address: "",
        permanent_address: "",
        password: "",
        image: "",
        father_image: "",
        mother_image: "",
        father_name:"",
        mother_name:"",
        father_phone:"",
        mother_phone:"",
        parent_present_address:"",
        parent_permanent_address:"",
        father_nid:"",
        mother_nid:"",
        nominee_name:"",
        nominee_email:"",
        nominee_phone:"",
        nominee_nid:"",
        nominee_image:"",
        nominee_present_address:"",
        nominee_permanent_address:"",
        nominee_father_name:"",
        nominee_mother_name:"",
        nominee_father_phone:"",
        nominee_mother_phone:"",
        nominee_parent_present_address:"",
        nominee_parent_permanent_address:"",
        nominee_father_nid:"",
        nominee_mother_nid:"",
        nominee_mother_image: "",
        nominee_father_image:"",
        agree_with_aggreement:"",
        aggreement_image:"",
      }),
      aggreement_details:"",
      loading: true,
      error: "",
    };
  },

  methods: {
    getAggreement() {
      axios.get("/api/get/aggreement/info")
      .then((resp) => {
          this.aggreement_details = resp.data.setting.policy;
      });
    },
    add() {
      console.log("add");
      this.form
        .post("/api/add/admin", {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
          onUploadProgress: (e) => {
            // Do whatever you want with the progress event
            console.log(e);
          },
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.$router.push({ name: "admin" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-right",
              duration: 4000,
            });
          } else {
            this.error = "some thing want to wrong";
          }
        })
        .catch((error) => {
          console.log(error);
          this.error = "some thing want to wrong";
        });
    },

    uploadImage(e) {
      const file = e.target.files[0];
      this.form.image = file;
    },


     uploadFatherImage(e) {
      const file = e.target.files[0];
      this.form.father_image = file;
    },


     uploadMotherImage(e) {
      const file = e.target.files[0];
      this.form.mother_image = file;
    },

      uploadFatherNidImage(e) {
      const file = e.target.files[0];
      this.form.father_nid = file;
    },

    uploadNidImage(e) {
      const file = e.target.files[0];
      this.form.nid = file;
    },


   uploadMotherNidImage(e) {
      const file = e.target.files[0];
      this.form.mother_nid = file;
    },


    uploadNomineeNidImage(e) {
      const file = e.target.files[0];
      this.form.nominee_nid = file;
    },

    uploadNomineeFatherNidImage(e) {
      const file = e.target.files[0];
      this.form.nominee_father_nid = file;
    },


    uploadNomineeMotherNidImage(e) {
      const file = e.target.files[0];
      this.form.nominee_mother_nid = file;
    },
    

    uploadNomineeImage(e) {
      const file = e.target.files[0];
      this.form.nominee_image = file;
    },



    uploadNomineeFatherImage(e) {
      const file = e.target.files[0];
      this.form.nominee_father_image = file;
    },


     uploadNomineeMotherImage(e) {
      const file = e.target.files[0];
      this.form.nominee_mother_image = file;
    },

    uploadAggrementImage(e) {
      const file = e.target.files[0];
      this.form.aggreement_image = file;
    },
    read(image) {
      let reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.form.image = e.target.result;
      };
    },
  },
  computed: {},
};
</script>

<style scoped>


.aggreement_container {
   height: 400px;
   overflow-y: scroll;
}

.mb-2 {
  margin-bottom: 5px !important;
}
.aggreement_style{
  overflow-y: scroll;
}
</style>
