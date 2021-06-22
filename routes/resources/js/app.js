require('./bootstrap');
window.Vue = require('vue');


import router from "./router";
import store from "./store";
import VueProgressBar from 'vue-progressbar'
const objectToFormData = window.objectToFormData;
import Toasted from 'vue-toasted';
import CKEditor from '@ckeditor/ckeditor5-vue';
import VModal from 'vue-js-modal';
import datePicker from 'vue-bootstrap-datetimepicker';
Vue.use(datePicker);

import InfiniteLoading from 'vue-infinite-loading';

Vue.use(InfiniteLoading, { /* options */ });
// Vue.config.devtools = false;
// Vue.config.debug = false;
// Vue.config.silent = true;


import ProductZoomer from 'vue-product-zoomer'
Vue.use(ProductZoomer);


import { VLazyImagePlugin } from "v-lazy-image";
Vue.use(VLazyImagePlugin);

const options = {
    color: '#121341',
    failedColor: '#fff',
    thickness: '3px',
    transition: {
        speed: '0.2s',
        opacity: '1',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
}

Vue.use(Toasted);
Vue.use(CKEditor);
Vue.use(VueProgressBar, options);
Vue.use(VModal, { dynamicDefault: { draggable: true, resizable: true } })



Vue.component('frontend-header', require('./components/public/Header.vue').default);
Vue.component('frontend-footer', require('./components/public/Footer.vue').default);



Vue.component('admin-main', require('./components/admin/Main.vue').default);
Vue.component('pagination', require('laravel-vue-pagination'));


//vue permission
import Permission from "./mixins/Permission.vue";
Vue.mixin(Permission);



Vue.config.devtools = false
const app = new Vue({
    el: '#app',
    router,
    store,
    data() {
        return {
            basePath: 'storage/'

        }
    },
     watch: {
        '$route'(to, from) {
            document.title = to.meta.title
        }
    },
    // mounted () {
    //     //  [App.vue specific] When App.vue is finish loading finish the progress bar
    //     this.$Progress.finish()
    // },
    // created () {
    //     this.$Progress.start()
    //     this.$router.beforeEach((to, from, next) => {
    //         if (to.meta.progress !== undefined) {
    //             let meta = to.meta.progress
    //
    //             this.$Progress.parseMeta(meta)
    //         }
    //         this.$Progress.start()
    //         next()
    //     })
    //     this.$router.afterEach((to, from) => {
    //         this.$Progress.finish()
    //     })
    // }
});

window.addEventListener('load ', function () {

    // localStorage.clear();
})

Vue.config.devtools = true;

