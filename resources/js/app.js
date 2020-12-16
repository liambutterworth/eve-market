import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Axios from 'axios';
import routes from 'js/routes';

Vue.use(Vuex);
Vue.use(VueRouter);

Vue.prototype.$eve = Axios.create({
    baseURL: 'https://api.evemarketer.com/ec/marketstat/json',

    headers: {
        'X-Requested-WIth': 'XMLHttpRequest',
        'Accept': 'application/json',
    },
});

export const store = new Vuex.Store({
    modules: {
    },
});

export const router = new VueRouter({
    mode: 'history',
    routes: routes,
});

export const app = new Vue({
    el: '#app',
    router: router,
    store: store,
});
