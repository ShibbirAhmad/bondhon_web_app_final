<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'project' }" class="btn btn-primary">
            <i class="fa fa-arrow-left"></i>
          </router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"> <i class="fa fa-dashboard"></i>Dashboard </a>
          </li>
          <li class="active">add project</li>
        </ol>
      </section>
      <section class="content">
        <h1 v-if="loading" style="text-align: center; font-size: 50px">
          <i class="fa fa-spinner fa-spin"></i>
        </h1>

        <form
          v-else
          @submit.prevent="updateProject"
          @keydown="form.onKeydown($event)"
          enctype="multipart/form-data"
        >
          <div
            class="alert alert-danger alert-dismissible"
            v-if="error"
            role="alert"
          >
            {{ error }}
            <span
              aria-hidden="true"
              class="close"
              data-dismiss="alert"
              style="color: #fff"
              aria-label="Close"
              >&times;</span
            >
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="box box-primary height">
                <div class="box-header with-border">
                  <h3 class="box-title">Basic Information</h3>
                </div>
                <div class="box-body">
                  <div class="form-group">
                    <label>
                      Project Name
                      <b class="text-danger">*</b>
                    </label>
                    <input
                      v-model="form.name"
                      type="text"
                      name="name"
                      class="form-control"
                      :class="{
                        'is-invalid': form.errors.has('name'),
                      }"
                      autofocus
                      placeholder="Ex:agro firm"
                      
                    />
                    <has-error :form="form" field="name"></has-error>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>
                          Project Type
                          <b class="text-danger">*</b>
                        </label>
                        <select
                          class="form-control"
                          
                          name="project_type"
                          v-model="form.project_type"
                          :class="{
                            'is-invalid': form.errors.has('project_type'),
                          }"
                        >
                          <option value="select project type">
                            select project type
                          </option>
                          <option value="implemented project">
                            Implemented Project
                          </option>
                          <option value="planned project">
                            Planned Project
                          </option>
                        </select>
                        <has-error
                          :form="form"
                          field="project_type"
                        ></has-error>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>
                          Project Place
                          <b class="text-danger">*</b>
                        </label>
                        <input
                          v-model="form.place"
                          type="text"
                          name="place"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('place'),
                          }"
                          
                          placeholder="Ex:Dhaka"
                        />
                        <has-error :form="form" field="place"></has-error>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>
                          proposed budget
                          <b class="text-danger">*</b>
                        </label>
                        <input
                          v-model="form.proposed_budget"
                          type="number"
                          name="proposed_budget"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('proposed_budget'),
                          }"
                          
                          placeholder="000000"
                        />
                        <has-error
                          :form="form"
                          field="proposed_budget"
                        ></has-error>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label> Total Cost   <b class="text-danger">*</b> </label>
                        <input
                          v-model="form.total_cost"
                          type="number"
                          name="total_cost"
                          disabled
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('total_cost'),
                          }"
                          placeholder="00000"
                        />
                        <has-error :form="form" field="total_cost"></has-error>
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label> video url </label>
                    <input
                      v-model="form.emabaded_url"
                      type="text"
                      name="emabaded_url"
                      class="form-control"
                      :class="{
                        'is-invalid': form.errors.has('emabaded_url'),
                      }"
                      placeholder="Ex: embaded url of youtube video"
                    />
                    <has-error :form="form" field="emabaded_url"></has-error>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="box box-primary height">
                <div class="box-header with-border text-center">
                  <h3 class="box-title">Project Manager Information</h3>
                </div>

                <div class="box-body">
                  <div class="form-group">
                    <label>
                      Select
                      <b class="text-danger">*</b>
                    </label>
                    <select
                      class="form-control"
                      
                      v-model="manager_select"
                      @change="displayMemeberInfo(manager_select)"
                    >
                      <option value="select project manager" disabled>
                        select project manager
                      </option>
                      <option value="new">New Person</option>
                      <option
                        v-for="(admin, index) in admins.data"
                        :key="index"
                        :value="admin"
                      >
                        {{ admin.name }}
                      </option>
                    </select>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>
                          Name
                          <b class="text-danger">*</b>
                        </label>
                        <input
                          v-model="form.manager_name"
                          type="text"
                          name="manager_name"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('manager_name'),
                          }"
                          autofocus
                          placeholder="Ex:agro firm"
                          
                        />
                        <has-error
                          :form="form"
                          field="manager_name"
                        ></has-error>
                      </div>
                    </div>
                    <div class="col-md-6">
                       <div class="form-group">
                        <label>Phone<b class="text-danger">*</b></label>
                        <input
                          v-model="form.manager_phone"
                          type="text"
                          name="manager_phone"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('manager_phone') }"
                          autofocus
                          
                          maxlength="11"

                          placeholder="01xxxxxxxxx"
                        />
                        <has-error :form="form" field="manager_phone"></has-error>
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
                        <label>Manager photo  <b class="text-danger">*</b> </label>
                        <input
                          @change="uploadManagerProfile"
                          class="form-control"
                          type="file"
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group text-center">
                       <img id="manager_profile"
                          :src="basePath+form.manager_image"
                          class="member_profile"
                        />
                          </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
               <div class="box box-primary">


                <div class="box-header with-border text-center">
                  <h3 class="box-title">Aggreement Details</h3>
                </div>
                <div class="box-body">


                  <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                        <label>aggreement photo  <b class="text-danger">*</b> </label>
                        <input
                          @change="uploadAggreement"
                          class="form-control"
                          type="file"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 text-center">
                          <div class="form-group">
                            <a :href="basePath+form.agreement_image" download class="btn btn_download btn-success "> <i  class="fa fa-lg fa-download"> </i> </a>
                          </div>
                    </div>
                  </div>

                <div class="form-group">
                    <label >aggreement details </label>
                    <textarea  name="aggreement_details"
                    class="form-control"
                    :class="{
                      'is-invalid': form.errors.has('aggreement_details'),
                    }"
                    v-model="form.aggreement_details" rows="4"></textarea>
                  <has-error
                    :form="form"
                    field="aggreement_details"
                  ></has-error>
                </div>

                <div class="form-group">
                  <label>Comments</label>
                  <textarea
                    v-model="form.comments"
                    name="comments"
                    class="form-control"
                    rows="2"
                  ></textarea>
                </div>

                </div>


              </div>
            </div>
            <div class="col-lg-6">
 <div class="box box-primary">
                <div class="box-header with-border text-center">
                  <h3 class="box-title">Manager Family Information</h3>
                </div>
                <div class="box-body">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          >Father/Husband Name <b class="text-danger">*</b>
                        </label>
                        <input
                          v-model="form.father_name"
                          type="text"
                          name="father_name"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('father_name'),
                          }"
                          autofocus
                          placeholder="father_name"
                        />
                        <has-error :form="form" field="father_name"></has-error>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          >Mother/Wife Name <b class="text-danger">*</b>
                        </label>
                        <input
                          v-model="form.mother_name"
                          type="text"
                          name="mother_name"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('mother_name'),
                          }"
                          autofocus
                          placeholder="mother_name"
                        />
                        <has-error :form="form" field="mother_name"></has-error>
                      </div>
                    </div>
                  </div>



                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          >Father/Husband Phone<b class="text-danger"
                            >*</b
                          ></label
                        >
                        <input
                          v-model="form.father_phone"
                          type="number"
                          name="father_phone"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('father_phone'),
                          }"
                          autofocus
                          
                          maxlength="11"
                          placeholder="01xxxxxxxxx"
                        />
                        <has-error
                          :form="form"
                          field="father_phone"
                        ></has-error>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          >Mother/Wife Phone<b class="text-danger">*</b></label
                        >
                        <input
                          v-model="form.mother_phone"
                          type="number"
                          name="mother_phone"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('mother_phone'),
                          }"
                          autofocus
                          
                          maxlength="11"
                          placeholder="01xxxxxxxxx"
                        />
                        <has-error
                          :form="form"
                          field="mother_phone"
                        ></has-error>
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
                            'is-invalid': form.errors.has(
                              'parent_present_address'
                            ),
                          }"
                          autofocus
                          
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
                            'is-invalid': form.errors.has(
                              'parent_permanent_address'
                            ),
                          }"
                          autofocus
                          
                          placeholder="parent_permanent_address"
                        />
                        <has-error
                          :form="form"
                          field="parent_permanent_address"
                        ></has-error>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="row">
            <div class="col-lg-6">
               <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">
                    Image Gallery
                    <small>
                      <b>
                        <i>(Every image can not be bigger than 1200*1200 px)</i>
                      </b>
                    </small>
                  </h3>
                </div>
                <div class="box-body">
                  <div
                    class="uploader"
                    @dragenter="onDragEnter"
                    @dragleave="onDragLeave"
                    @dragover.prevent
                    @drop="drop"
                    :class="{ draging: isDraging }"
                  >
                    <div class="upload-control" v-show="form.files.length">
                      <label for="file" class="label">Select a file</label>
                    </div>
                    <div v-show="!form.files.length">
                      <i class="fa fa-cloud-upload"></i>
                      <p>Drag your file here</p>
                      <div>or</div>
                      <div class="file-input">
                        <label for="file" class="label">select a file</label>
                        <input
                          type="file"
                          name="image"
                          id="file"
                          @change="uploadImage"
                          multiple
                        />
                      </div>
                    </div>
                    <div class="images-preview" v-show="form.files.length">
                      <div
                        class="img-wrapper"
                        v-for="(image, index) in form.files"
                        :key="index"
                      >
                        <img :src="image" :alt="`Image Uplaoder ${index}`" />
                        <div class="cancel" @click="cancel(index)">
                          <span>X</span>
                             <span>
                            <i class="fa fa-trash" @click="DeleteProjectImage(index)"></i>
                          </span>
                        </div>
                      </div>
                    </div>

                    <has-error :form="form" field="image"></has-error>
                  </div>
                </div>
              </div>
               </div>
            <div class="col-lg-6">
               <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">
                    Project Description
                    <b class="text-danger">*</b>
                  </h3>
                </div>
                <div class="box-body">
                  <ckeditor
                    :editor="editor"
                    name="description"
                    :class="{
                      'is-invalid': form.errors.has('description'),
                    }"
                    v-model="form.description"
                    :config="editorConfig"
                  ></ckeditor>
                  <has-error :form="form" field="description"></has-error>
                </div>
              </div>
               </div>

                <div class="col-lg-12 col-md-12">
               <div class="box box-primary">
                <div class="box-header with-border text-center">
                  <h3 class="box-title">
                     Manager and Parents Nid
                    <b class="text-danger">*</b>
                  </h3>
                </div>
                <div class="box-body">

                 <div class="row">
                   <div class="col-md-6">
                       <br>
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
                            @change="uploadManagerNidImage"
                          name="nid"
                         />
                        <has-error :form="form" field="nid"></has-error>
                      </div>
                      </div>
                   <div class="col-md-6 text-center">
                       <img class="nid_image" :src="basePath+ form.nid " alt="image">
                        <a :href="basePath+form.nid" download > <i class="fa fa-download download_icon"></i> </a>
                      </div>
                 </div>


                 <div class="row">
                   <div class="col-md-6">
                     <br>
                       <div class="form-group">
                        <label
                          >Father/Husband NID<b class="text-danger"
                            >*</b
                          ></label >
                         <input
                          class="form-control"
                          
                          :class="{ 'is-invalid': form.errors.has('father_nid') }"
                          type="file"
                            @change="uploadFatherNidImage"
                          name="father_nid"
                         />
                        <has-error :form="form" field="father_nid"></has-error>
                      </div>
                      </div>
                   <div class="col-md-6 text-center">

                      <img class="nid_image" :src="basePath+ form.father_nid " alt="image">
                        <a :href="basePath+form.father_nid" download > <i class="fa fa-download download_icon"></i> </a>

                      </div>
                 </div>

                 <div class="row">
                   <div class="col-md-6">
                     <br>
                      <div class="form-group">
                        <label
                          >Mother/Wife NID<b class="text-danger"
                            >*</b
                          ></label
                        >
                        <input
                          class="form-control"
                          
                          :class="{ 'is-invalid': form.errors.has('mother_nid') }"
                          type="file"
                            @change="uploadMotherNidImage"
                          name="mother_nid"
                         />
                        <has-error :form="form" field="mother_nid"></has-error>
                      </div>

                      </div>
                   <div class="col-md-6 text-center">
                          <img class="nid_image" :src="basePath+ form.mother_nid " alt="image">
                        <a :href="basePath+form.mother_nid" download > <i class="fa fa-download download_icon"></i> </a>

                      </div>
                 </div>


                </div>
              </div>
               </div>
          </div>

          <div class="form-group text-center">
            <button class="btn btn-primary">Save</button>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Form, HasError, AlertError } from "vform";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
Vue.component(HasError.name, HasError);
export default {
  created() {
    this.adminList();
    this.getProjectInfo();
  },
  data() {
    return {
      form: new Form({
        name: "",
        place: "",
        project_type: "select project type",
        proposed_budget: "",
        total_cost: "",
        emabaded_url: "",
        manager_name: "",
        manager_phone: "",
        nid: "",
        present_address: "",
        permanent_address: "",
        description: "write project description",
        comments: "write comments about this project",
        manager_image: "",
        aggreement_details: "write details here ...",
        agreement_image: "",
        father_name: "",
        mother_name: "",
        father_phone: "",
        mother_phone: "",
        father_nid: "",
        mother_nid: "",
        parent_present_address: "",
        parent_permanent_address: "",
        image: [],
        files: [],
      }),
      manager_select: "select project manager",
      loading: true,
      error: "",
      editor: ClassicEditor,
      editorConfig: {},
      isDraging: false,
      dragCount: 0,
      files: [],
      image: [],
      admins: {},
      basePath:this.$store.state.image_base_link,
    };
  },

  methods: {
    getProjectInfo(){
      axios.get('/api/get/project/'+this.$route.params.id)
      .then(resp=>{
        console.log(resp);
        this.form.name=resp.data.project.name ;
        this.form.place=resp.data.project.place ;
        this.form.project_type=resp.data.project.project_type ;
        this.form.proposed_budget=resp.data.project.proposed_budget ;
        this.form.total_cost=resp.data.project.total_cost ;
        this.form.emabaded_url=resp.data.project.emabaded_url?resp.data.project.emabaded_url:'' ;
        this.form.manager_name=resp.data.project.manager_name ;
        this.form.manager_phone=resp.data.project.manager_phone ;
        this.form.present_address=resp.data.project.present_address ;
        this.form.permanent_address=resp.data.project.permanent_address ;
        this.form.comments=resp.data.project.comments ;
        this.form.aggreement_details=resp.data.project.aggreement_details ;
        this.form.description=resp.data.project.description ;
        this.form.manager_image=resp.data.project.manager_image ;
        this.form.agreement_image=resp.data.project.agreement_image ;
        this.form.father_name = resp.data.project.father_name;
        this.form.nid = resp.data.project.nid;
        this.form.mother_name = resp.data.project.mother_name;
        this.form.father_nid = resp.data.project.father_nid;
        this.form.mother_nid = resp.data.project.mother_nid;
        this.form.father_phone = resp.data.project.father_phone;
        this.form.mother_phone = resp.data.project.mother_phone;
        this.form.parent_present_address = resp.data.project.parent_present_address;
        this.form.parent_permanent_address = resp.data.project.parent_permanent_address;

        let image = resp.data.project.project_image;
            for (let i = 0; i < image.length; i++) {
              this.form.files.push(this.basePath + image[i].image);
              this.form.image.push(this.basePath + image[i].image);
            }

      })
    },


   uploadManagerNidImage(e) {
      const file = e.target.files[0];
      this.form.nid = file;
    },

 uploadMotherNidImage(e) {
      const file = e.target.files[0];
      this.form.mother_nid = file;
    },

   uploadFatherNidImage(e) {
      const file = e.target.files[0];
      this.form.father_nid = file;
    },


    updateProject() {
      window.scrollTo(0, 0);
      this.$Progress.start();

      this.form
        .post("/api/bondhon/project/update/"+this.$route.params.id, {
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
          this.$Progress.finish();

          if (resp.data.status == "SUCCESS") {
            this.$router.push({ name: "project" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
          } else {
            this.error = "some thing want to wrong";
          }
        });
    },

    adminList() {
      axios.get("/api/list/admin").then((resp) => {
        console.log(resp);
        if (resp.data.status == "SUCCESS") {
          this.admins = resp.data.admins;
          this.loading = false;
        }
      });
    },

    displayMemeberInfo(member) {
      //   console.log(member);
      this.form.manager_name = member.name;
       this.form.present_address = member.present_address;
      this.form.permanent_address = member.permanent_address;
      this.form.father_name = member.father_name;
      this.form.mother_name = member.mother_name;
      this.form.nid = member.nid;
      this.form.father_nid = member.father_nid;
      this.form.mother_nid = member.mother_nid;
      this.form.father_phone = member.father_phone;
      this.form.mother_phone = member.mother_phone;
      this.form.parent_present_address = member.present_address;
      this.form.parent_permanent_address = member.permanent_address;
    },

      DeleteProjectImage(index) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't permanent delete this image??",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        console.log(index);
        if (result.value) {
          axios
            .get("/api/delete/project/image/"+this.$route.params.id, {
              params: {
                index: index,
              },
            })
            .then((resp) => {
              if (resp.data.status == "SUCCESS") {
                  this.$toasted.show(resp.data.message, {
                  type: "success",
                  position: "top-bottom",
                  duration: 4000,
                });
                this.form.image.splice(index, 1);
              }
            })
        } else {
          this.$toasted.show("OK ! no action here", {
            position: "top-center",
            type: "info",
            duration: 3000,
          });
        }
      });
    },

    uploadManagerProfile(e) {
      let file = e.target.files[0];
       this.form.manager_image = file;
      ///let image file size check
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (evt) => {
        let img = new Image();
        img.onload = () => {
          console.log(img.width + "-" + img.height);
        };
        img.src = evt.target.result;
        document.getElementById('manager_profile').src = evt.target.result;
      };
    },

    uploadAggreement(e) {
      this.form.agreement_image = e.target.files[0];
    },
    uploadImage(e) {
      const file = e.target.files;

      Array.from(file).forEach((file) => this.addImage(file));
    },
    onDragEnter(e) {
      e.preventDefault();
      this.dragCount++;
      this.isDraging = true;
    },
    onDragLeave(e) {
      e.preventDefault();
      this.dragCount--;
      if (this.dragCount <= 0) {
        this.isDraging = false;
      }
    },
    drop(e) {
      e.preventDefault();
      e.stopPropagation();
      this.isDraging = false;
      const files = e.dataTransfer.files;
      // console.log(files);
      Array.from(files).forEach((file) => this.addImage(file));
    },
    addImage(file) {
      console.log(file.size / 1024);
      if (!file.type.match("image.*")) {
        Swal.fire({
          type: "warning",
          text: "this is not any kind of image",
        });
        return;
      }
      if (file.size / 1024 > 1024) {
        Swal.fire({
          type: "warning",
          text:
            "File size can not be bigger then 1MB.Reference Max file size is " +
            file.size / 1024 +
            "KB",
        });
        return;
      }

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (evt) => {
        let img = new Image();
        img.onload = () => {
          if (img.width <= 1200 && img.height <= 1200) {
            this.form.image.push(file);
            this.form.files.push(evt.target.result);
            return;
          } else {
            this.disabled = true;
            alert(
              "Image maximu size 1200px*1200px.But Upload imaze size" +
                img.width +
                "*" +
                img.height +
                "px"
            );
            return;
          }
        };
        img.src = evt.target.result;
      };
    },
    cancel(index) {
      this.form.files.splice(index, 1);
      this.form.image.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline.ck-blurred {
  height: 80px !important;
}

.mb-2 {
  margin-bottom: 5px !important;
}

.height {
  height: 360px !important;
}

.uploader {
  width: 100%;
  background: #222d32;
  color: #fff;
  padding: 40px 15px;
  text-align: center;
  border-radius: 10px;
  border: 3px dashed;
  font-size: 20px;
  position: relative;
}

.draging {
  background: #fff;
  color: #222d32;
  border: 3px dashed #222d32;
}

.file-input label {
  background: #222d32;
  color: #fff;
}

i.fa.fa-cloud-upload {
  font-size: 85px;
}

#file {
  opacity: 0;
  z-index: -1;
}

.file-input {
  width: 280px;
  margin: auto;
  position: relative;
  height: 86px;
}

.images-preview {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

.img-wrapper {
  width: 110px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  height: 105px;
  justify-content: space-between;
  background: #fff;
  box-shadow: 5px 5px 20px #3e3737;
  margin-bottom: 32px;
}

img {
  max-height: 105px;
}

.files {
  font-size: 12px;
  background: #fff;
  color: red;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  padding: 3px 6px;
}

.name {
  overflow: hidden;
  height: 18px;
}

.upload-control {
  position: absolute;
  width: 100%;
  background: #fff;
  top: 0;
  left: 0;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  padding: 10px;
  padding-bottom: 4px;
  text-align: right;
}

.label {
  padding: 2px 5px;
  margin-right: 10px;
  border: 2px solid #222d32;
  border-radius: 3px;

  font-size: 15px;
  cursor: pointer;
  color: #222d32;
}

.file-input label {
  background: #fff;
  color: #222d32;
  padding: 10px 40px;
}
.cancel {
  background: #fff;

  cursor: pointer;
  color: red;
  width: 110px;
}

.member_profile{
   width:80px;
   height: 80px;
   border-radius: 50%;
   border:1px solid #ddd;
}
.btn_download{
  margin-top: 25px;
}

.nid_image {
      height: 150px;
      width: 300px;
      margin-bottom:10px;
}
.download_icon{
   cursor: pointer;
    font-size: 29px;
    position: absolute;
    margin: 4px -30px;
    color: green;
}

.ck.ck-editor {
    height: 250px !important;
}




</style>
