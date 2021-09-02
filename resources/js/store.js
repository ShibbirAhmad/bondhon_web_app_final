import Vue from 'vue'
import Vuex from 'vuex'

import router from './router.js' // Vue router instance

Vue.use(Vuex)


const state = {

    //store admin
    admin: {},

    //store member
    member: {},

    sellcenter: {},
    //store categories
    categories: '',


    //store sliders
    sliders: '',

    //for specific product

    single_product: {},

    image_base_link: '/../storage/',

    product_images: {},

    //general setting
    general_setting:"",

    //footer setting
    footer_setting:"",


}
const getters = {
    admin(state) {
        return state.admin
    },

    member(state) {
        return state.member
    },
    

    sellcenter(state) {
        return state.sellcenter;
    },

    categories(state) {
        return state.categories;
    },
    sliders(state) {
        return state.sliders;
    },

    single_product(state) {
        return state.single_product;
    },
    image_base_link(state) {
        return state.image_base_link;
    },
    product_images(state) {
        return state.product_images;
    },



    general_setting(state){
        return state.general_setting ;
    },

    footer_setting(state){
        return state.footer_setting ;
    },


}
const actions = {

    //get authenticat sellcenter
    sellcenter(context) {
        axios.get('/api/sellcenter/login/session/check')
            .then(resp => {
                if (resp.data.session == 'running') {
                    context.commit('sellcenter', resp.data.sellcenter);
                } else {
                    localStorage.removeItem('sell_center_token')
                }
            })
    },

    //session check
    //every time this session check, for admin session running or expired
    admin(context) {
        axios.get("/check/session/admin")
            //if session status ruuning
            .then((resp) => {
                if (resp.data.status == "RUNNING") {
                    context.commit('admin', resp.data.admin)
                }
                //if session is expired, admin redirect ot login again
                if (resp.data.status == "EXPIRED") {
                    localStorage.removeItem("admin_token");
                    router.push({ name: "adminLogin" });
                    return;
                }

            })
            //error handaling
            .catch(() => {
                router.push({ name: "adminLogin" });
            });
    },


     //checking member
     member(context) {
        axios.get("/check/session/member")
            //if session status ruuning
            .then((resp) => {
                //checking member
                if (resp.data.session == "member_running") {
                    context.commit('member', resp.data.member)
                }
                 if (resp.data.session == "member_expired") {
                    localStorage.removeItem("member_token");
                    router.push({ name: "member_login" });
                    return;
                }
            })
            //error handaling
            .catch(() => {
                router.push({ name: "member_login" });
            });
    },


    //get sliders
    sliders(context) {
        axios
            .get("/api/public/slider")
            .then((resp) => {
               // console.log(resp);
                context.commit('sliders', resp.data.sliders);
            })
    },


    //method initial for get single product from db
    single_product(context, payload) {
        axios.get("/_public/product/" + payload).then((resp) => {
           // console.log(resp);
            if (resp.data.status == "SUCCESS") {
                context.commit('single_product', resp.data.product)
            }
        });
    },

     //for get product images
     product_images(context, payload) {
        axios.get('/_public/product/images/' + payload)
            .then(resp => {
                console.log(resp.data);
                context.commit('product_images', resp.data)
            })
    },


       general_setting(context){
        axios.get("/api/public/general/setting")
        .then(resp => {
            // console.log(resp);
            context.commit('general_setting', resp.data.general_setting);
        })
    },

    footer_setting(context){
        axios.get("/api/public/footer/setting")
        .then(resp => {
            // console.log(resp);
            context.commit('footer_setting', resp.data.footer_setting) ;
        })
    },



}
const mutations = {
    admin(state, payload) {
        return state.admin = payload
    },

    member(state, payload) {
        return state.member = payload
    },

    sellcenter(state, payload) {
        return state.sellcenter = payload;

    },

    sliders(state, payload) {
        return state.sliders = payload;
    },

    single_product(state, payload) {
        return state.single_product = payload;
    },

    product_images(state, payload) {
        return state.product_images = payload;
    },



    general_setting(state,payload){
        return state.general_setting=payload ;
     },


     footer_setting(state,payload){
         return state.footer_setting=payload ;
      },




}

const store = new Vuex.Store({

    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions

})

global.store = store;

export default store
