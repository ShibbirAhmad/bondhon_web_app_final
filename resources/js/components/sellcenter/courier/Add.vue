<template>
    <div>
        <navbar ></navbar>
        <div class="content-wrapper">
            <section class="content-header">
                <h1>
                    <router-link :to="{name:'sell_center_courier'}" class="btn btn-primary"><i class="fa fa-arrow-left"></i></router-link>
                </h1>
                <ol class="breadcrumb">
                    <li><a href="#"><i class="fa fa-dashboard"></i>Dashboard</a></li>
                    <li class="active">Courier</li>
                </ol>
            </section>
            <section class="content">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-lg-offset-2">
                        <div class="box box-primary">
                            <div class="box-header with-border">
                                <h3 class="box-title">Add Courier</h3>
                            </div>
                            <div class="box-body">
                              
                                <form @submit.prevent="add" @keydown="form.onKeydown($event)"
                                      enctype="multipart/form-data">

                                    <div class="alert-danger alert" v-if="error">
                                        {{error}}
                                    </div>
                                    <div class="form-group">
                                        <label>Name</label>
                                        <input v-model="form.name" type="text" name="name"
                                               class="form-control" :class="{ 'is-invalid': form.errors.has('name') }"
                                               autofocus autocomplete="off" placeholder="Ex:sundarban">
                                        <has-error :form="form" field="name"></has-error>

                                    </div>
                              
                                    <div class="form-group text-center">
                                         <button :disabled="form.busy" type="submit" class="btn btn-primary"><i
                                        class="fa fa-spin fa-spinner" v-if="form.busy"></i>Submit
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
    import navbar from "../Navbar.vue"
    import {Form, HasError, AlertError} from 'vform'
    Vue.component(HasError.name, HasError)
    export default {
        components:{
            navbar
        },
        data() {
            return {
                form: new Form({
                    name: "",
                }),
                loading: true,
                error: ''
            }
        },
        methods: {
            add() {
                this.form.post('/api/sellcenter/courier/store', {
                    transformRequest: [function (data, headers) {
                        return objectToFormData(data)
                    }],
                })
                    .then((resp) => {
                        //   console.log(resp)
                        if (resp.data.status == 'SUCCESS') {
                            this.$router.push({name: 'sell_center_courier'});
                            this.$toasted.show(resp.data.message, {
                                type: "success",
                                position: 'top-center',
                                duration: 4000
                            });
                        } else {
                            this.error = 'something  went  to wrong';
                        }
                    })
                  
            },
        },
    }
</script>

<style scoped>
    .mb-2 {
        margin-bottom: 5px !important;
    }
</style>