<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <ol class="breadcrumb">
          <li>
            <a href="#"> <i class="fa fa-dashboard"></i>Dashboard </a>
          </li>
          <li class="active">setting</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header text-center with-border">
                <h3 class="box-title">Agreement || Policy </h3>
              </div>
              <div class="box-body">
                <div class="alert-danger alert" v-if="error">{{ error }}</div>

                <form
                  @submit.prevent="updateAggreement"
                  @keydown="form.onKeydown($event)"
                  enctype="multipart/form-data"
                >
                 <div class="row">


               <div class="col-lg-12 col-md-12 col-xs-12">

                      <div class="form-group">
                        <label for="invoice">Agreement Policy </label>
                        <ckeditor
                          :editor="editor"
                          name="policy"
                          :class="{
                            'is-invalid': form.errors.has('policy'),
                          }"
                          v-model="form.policy"
                          :config="editorConfig"
                        ></ckeditor>
                        <has-error
                          :form="form"
                          field="policy"
                        ></has-error>
                      </div>

                      <div class="form-group text-center">
                        <button
                          :disabled="form.busy"
                          type="submit"
                          class="btn btn-primary"
                        >
                          <i class="fa fa-spin fa-spinner" v-if="form.busy"></i
                          >Submit
                        </button>
                      </div>
                 </div>

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
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

Vue.component(HasError.name, HasError);
export default {
  name: "subCategory",
  created() {
    this.getAggreement();
  },
  data() {
    return {
      form: new Form({
        id:"",
        policy:"",
      }),
      editor: ClassicEditor,
      editorConfig: {},
      error: "",
      loading: true,
    };
  },

  methods: {
    getAggreement() {
      axios.get("/api/get/aggreement/info")
      .then((resp) => {
        console.log(resp);
        if (resp.data.status == "OK") {
          this.form.id = resp.data.setting.id;
          this.form.policy = resp.data.setting.policy;
          this.loading=false;
        }
      });
    },

    updateAggreement() {
      this.form
        .post("/api/edit/aggreement/info/"+this.form.id, {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
            this.getAggreement();
          } else {
            this.error = "some thing went to wrong";
          }
        })

    },
  },
};
</script>
