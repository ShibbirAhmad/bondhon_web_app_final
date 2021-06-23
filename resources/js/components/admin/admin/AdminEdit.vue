<template>
    <div>
        <admin-main></admin-main>
        <div class="content-wrapper">
            <section class="content-header">
                <h1>
                    <router-link :to="{name:'admin'}" class="btn btn-primary"><i class="fa fa-arrow-left"></i></router-link>
                </h1>
                <ol class="breadcrumb">
                    <li><a href="#"><i class="fa fa-dashboard"></i>Dashboard</a></li>
                    <li class="active">admin</li>
                </ol>
            </section>
            <section class="content">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-lg-offset-2">
                        <div class="box box-primary">
                            <div class="box-header with-border text-center">
                                <h3 class="box-title">Edit Admin</h3>
                            </div>
                            <div class="box-body">
                                <h1 v-if="loading"><i class="fa fa-spinner fa-spin"></i></h1>
                                <form v-else @submit.prevent="update" @keydown="form.onKeydown($event)"
                                      enctype="multipart/form-data">

                                    <div class="alert-danger alert" v-if="error">
                                        {{error}}
                                    </div>
                                    <div class="form-group">
                                        <label>Name</label>
                                        <input v-model="form.name" type="text" name="name"
                                               class="form-control" :class="{ 'is-invalid': form.errors.has('name') }"
                                               autofocus autocomplete="off" placeholder="name">
                                        <has-error :form="form" field="name"></has-error>

                                    </div>
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input v-model="form.email" type="email" name="email"
                                               class="form-control" :class="{ 'is-invalid': form.errors.has('email') }"
                                               autofocus autocomplete="off" placeholder="email">
                                        <has-error :form="form" field="email"></has-error>

                                    </div>
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
                                    <div class="form-group">
                                        <label>Admin Image</label>
                                        <input class="form-control" :class="{ 'is-invalid': form.errors.has('image') }"
                                               type="file" @change="uploadImage" name="image">
                                        <has-error :form="form" field="image"></has-error>
                                    </div>
                                   <div class="form-group text-center">
                                         <button :disabled="form.busy" type="submit" class="btn btn-primary"><i
                                        class="fa fa-spin fa-spinner" v-if="form.busy"></i>Save
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
    import Vue from 'vue'
    import {Form, HasError} from 'vform'
    Vue.component(HasError.name, HasError)

    export default {
        name: "Add",
        created() {

            console.log(this.$route.params.adminId)
            this.adminId = this.$route.params.adminId;
            this.getAdmin();
            setTimeout(() => {
                this.loading = false
            }, 500)
        },
        data() {
            return {
                form: new Form({
                    name: "",
                    email: '',
                    image: "",
                    phone: '',

                }),
                loading: true,
                error: '',


            }
        },

        methods: {

            getAdmin() {
                axios.get('/api/edit/admin/' + this.$route.params.adminId)
                    .then((resp) => {
                        console.log(resp)
                        if (resp.data.status == 'SUCCESS') {
                            this.form.name = resp.data.admin.name;
                            this.form.email = resp.data.admin.email;
                            this.form.phone = resp.data.admin.phone;
                            this.form.image = resp.data.admin.image;
                        } else {

                            this.$toasted.show('some thing want to wrong', {
                                type: "error",
                                position: "top-center",
                                duration: 5000
                            });
                        }

                    })
                    .catch((error) => {
                        console.log(error)
                        this.$toasted.show('some thing want to wrong', {
                            type: "error",
                            position: "top-center",
                            duration: 5000
                        });
                    })
            },
            update() {

                this.form.post('/api/update/site/admin/'+this.$route.params.adminId, {
                    transformRequest: [function (data, headers) {
                        return objectToFormData(data)
                    }],

                })
                    .then((resp) => {
                        console.log(resp)
                        if (resp.data.status == 'SUCCESS') {
                            this.$router.push({name: 'admin'});
                            this.$toasted.show(resp.data.message, {
                                type: "success",
                                position: 'top-center',
                                duration: 4000
                            });
                        } else {
                            this.error = 'some thing want to wrong';
                        }

                    })
                    .catch((error) => {
                        console.log(error)
                        this.error = 'some thing want to wrong';
                    })
            },
            uploadImage(e) {
                const file = e.target.files[0]
                this.form.image = file


            },
           },
        computed: {}
    }
</script>

<style scoped>
    .mb-2 {
        margin-bottom: 5px !important;
    }
</style>
