import Vue from 'vue'
import Vuex from 'vuex'

import router from './router.js' // Vue router instance

Vue.use(Vuex)


const state = {

    //store admin
    admin: {},

    //store cart
    cartContent: {
        content: '',
        total: '',
        itemCount: ''
    },
    //store user

    user: {},
    //store categories
    categories: '',
    sub_categories: '',

    //store sliders
    sliders: '',

    //store offer banner
    offer_banner: {},

    //store best selling products
    best_selling_produtcs: {},

    //for falsh sale products

    flash_sale_products: {},

    //for specific product

    single_product: {},

    image_base_link: '/../public/storage/',

    product_images: {},





}
const getters = {
    admin(state) {
        return state.admin
    },
    cartContent(state) {
        return state.cartContent;
    },
    user(state) {
        return state.user;
    },
    admin(state) {
        return state.admin;
    },
    categories(state) {
        return state.categories;
    },
    sliders(state) {
        return state.sliders;
    },
    offer_banner(state) {
        return state.offer_banner;
    },
    best_selling_produtcs(state) {
        return state.best_selling_produtcs;
    },
    sub_categories(state) {
        return state.sub_categories;
    },
    flash_sale_products(state) {
        return state.flash_sale_products;
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




}
const actions = {

    //get authenticat user
    user(context) {
        axios.get('/_public/userToCheck')
            .then(resp => {
                if (resp.data.status == 'AUTHORIZED') {
                    context.commit('user', resp.data.user);
                } else {
                    localStorage.removeItem('user_token')
                }
            })
    },

    //get cart content
    getCartContent(context) {
        axios.get('/_public/cartToContent')
            .then(resp => {

                context.commit('cartContent', resp.data);
               // console.log('data')


            })
    },
    //session check
    //every time this session check, for admin session running or expired
    admin(context) {
        axios
            .get("/check/session/admin")

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

    //get category
    category(context) {
        axios.get("/_public/category")
            .then((resp) => {
                context.commit('category', resp.data.categories)
            })
            .catch((error) => {

            });
    },

    sub_categories(context, payload) {
        axios.get("/_public/sub/category/" + payload)
            .then((resp) => {

                context.commit('sub_categories', resp.data.sub_categories)
            })
            .catch((error) => {
             //   console.log('error');
            });
    },

    //get sliders 
    sliders(context) {
        axios
            .get("/_public/slider")
            .then((resp) => {
                context.commit('sliders', resp.data.sliders)
                context.commit('best_selling_produtcs', resp.data.best_seller)


            })
            .catch((error) => { });
    },


    //get offer_banner 
    offer_banner(context) {
        axios.get("/_public/offers")
            .then((resp) => {
                context.commit('offer_banner', resp.data.offers)

            })
            .catch((error) => { });
    },


    //method initial for get flash sale 
    flash_sale_products(context) {
        axios.get("/_public/flash/sale")
            .then((resp) => {
               // console.log(resp)
                context.commit('flash_sale_products', resp.data)

            })
        // .catch((error) => { });
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




}
const mutations = {
    admin(state, payload) {
        return state.admin = payload
    },
    cartContent(state, cart) {
        state.cartContent.content = cart.cart_content;
        state.cartContent.total = cart.cart_total;
        state.cartContent.itemCount = cart.item_count;
    },
    user(state, payload) {
        return state.user = payload;

    },
    category(state, payload) {
        return state.categories = payload;
    },
    sub_categories(state, payload) {
        return state.sub_categories = payload;
    },
    sliders(state, payload) {
        return state.sliders = payload;
    },
    offer_banner(state, payload) {
        return state.offer_banner = payload;
    },
    best_selling_produtcs(state, payload) {

        return state.best_selling_produtcs = payload;
    },
    flash_sale_products(state, payload) {
        return state.flash_sale_products = payload;

    },

    single_product(state, payload) {
        return state.single_product = payload;
    },

    product_images(state, payload) {
        return state.product_images = payload;
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
