import { createApp } from 'vue'
import App from './App.vue'
import accountVue from "./components/accountVue.vue";
import productVue from "./components/productVue.vue";
import categoriesVue from "./components/categoriesVue.vue";
import aboutVue from "./components/aboutVue.vue";
import vueOther from "./components/vueOther.vue";
import vueInfo from "./components/vueInfo.vue";
import NevVue from "./components/NevVue.vue";

import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    { path: "/", redirect: "/account"},
    { name: "account", path: "/account", component: accountVue},
    { name: "product", path: "/product", component: productVue},
    { name: "categories", path: "/categories", component: categoriesVue},
    { name: "about", path: "/about", component: aboutVue},
    { name: "info", path: "/info", component: vueInfo},
    { name: "other", path: "/other", component: vueOther},
    { name: "NevVue", path: "/NevVue", component: NevVue},

]

const router = createRouter({ history: createWebHashHistory(), routes });
createApp(App)
    .use(router)
    .mount('#app')
