<template>
    <div>
        <admin-main></admin-main>
        <div class="content-wrapper">
            <section class="content-header">
                <h1>
                    <router-link :to="{name:'adminAdd'}" class="btn btn-primary"><i class="fa fa-plus"></i></router-link>
                </h1>
                <ol class="breadcrumb">
                    <li><a href="#"><i class="fa fa-dashboard"></i>Dashboard</a></li>
                    <li class="active">Admin</li>
                </ol>
            </section>
            <section class="content">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 col-lg-offset-1">
                            <div class="box box-primary">
                                <div class="box-header with-border">
                                    <h3 class="box-title">Admin table</h3>
                                </div>
                                <div class="box-body">
                                    <table class="table">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        <h1 class="text-center" v-if="loading"><i class="fa fa-spin fa-spinner"></i>
                                        </h1>
                                        <tr v-for="(admin,index) in admins.data">
                                            <td scope="row">{{index+1}}</td>
                                            <td>{{admin.name}}</td>
                                            <td>{{admin.email}}</td>
                                            <td>
                                                <img v-if="admin.image" :src="'../storage/'+admin.image"
                                                     class="img-circle small-image" alt="admin Image">
                                                <img v-else :src="'../storage/images/noimage.png'"
                                                     class="img-circle small-image" alt="admin Image">

                                            </td>
                                            <td>
                                                <span class="badge" v-if="admin.status==1">Active</span>
                                                <span class="badge text-bold" v-else>De-Active</span>
                                            </td>
                                            <td>

                                                <router-link :to="{ name: 'editAdmin', params: { adminId: admin.id }}"
                                                             class="btn btn-success btn-sm"><i
                                                    class="fa fa-edit"></i></router-link>
                                                <a class="btn btn-warning" title="De-active" @click="deActive(admin)"
                                                   v-if="admin.status==1"><i class="fa fa-ban"></i></a>
                                                <a class="btn btn-primary" title="active" @click="active(admin)" v-else><i
                                                    class="fa fa-check"></i></a>
                                            </td>
                                        </tr>
                                        </tbody>
                                        <!--                                        <pagination :data="admins" @pagination-change-page="getResults"></pagination>-->

                                    </table>

                                </div>
                                <div class="box-footer">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <pagination :data="admins"
                                                        @pagination-change-page="getPagination">

                                            </pagination>

                                        </div>
                                        <div class="col-lg-6 mt-1" style="margin-top: 25px;text-align:right;">
                                            <p>Showing <strong>{{admins.from}}</strong> to
                                                <strong>{{admins.to}}</strong> of total
                                                <strong>{{admins.total}}</strong> entries
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
                this.adminList();
            }, 500);
            // this.getResults();

        },
        data() {
            return {
                admins: {},
                loading: true,
                basePath: 'storage/'
            }
        },
        methods: {
            adminList() {
                axios.get('/list/admin')
                    .then((resp) => {

                        if (resp.data.status == 'SUCCESS') {
                            this.admins = resp.data.admins;
                            this.loading = false

                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            deActive(admin) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't de-active this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes!'
                }).then((result) => {
                    if (result.value) {

                        axios.get('deactive/admin/' + admin.id)
                            .then((resp) => {
                                if (resp.data.status == 'SUCCESS') {
                                    this.adminList();
                                    this.$toasted.show(resp.data.message, {
                                        position: 'top-center',
                                        type: 'success',
                                        duration: 4000
                                    });
                                } else {
                                    this.$toasted.show('some thing want to wrong', {
                                        position: 'top-center',
                                        type: 'error',
                                        duration: 4000
                                    });
                                }

                            })
                            .catch((error) => {
                                this.$toasted.show('some thing want to wrong', {
                                    position: 'top-center',
                                    type: 'error',
                                    duration: 4000
                                });
                            })


                    } else {
                        this.$toasted.show('OK ! no action here', {
                            position: 'top-center',
                            type: 'info',
                            duration: 3000
                        });
                    }
                })
            },
            active(admin) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't active this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes!'
                }).then((result) => {
                    if (result.value) {

                        axios.get('active/admin/' + admin.id)
                            .then((resp) => {
                                if (resp.data.status == 'SUCCESS') {
                                    this.adminList();
                                    this.$toasted.show(resp.data.message, {
                                        position: 'top-center',
                                        type: 'success',
                                        duration: 4000
                                    });
                                } else {
                                    this.$toasted.show('some thing want to wrong', {
                                        position: 'top-center',
                                        type: 'error',
                                        duration: 4000
                                    });
                                }

                            })
                            .catch((error) => {
                                this.$toasted.show('some thing want to wrong', {
                                    position: 'top-center',
                                    type: 'error',
                                    duration: 4000
                                });
                            })


                    } else {
                        this.$toasted.show('Ok ! no action here', {
                            position: 'top-center',
                            type: 'info',
                            duration: 3000
                        });
                    }
                })
            },
            getPagination(page = 1) {
                this.loading=true;
                axios.get('/list/admin?page=' + page)
                    .then(response => {
                        this.loading=false;
                        this.admins = response.data.admins;
                    });
            }

        },
        computed: {}
    }

</script>

<style scoped>

</style>
