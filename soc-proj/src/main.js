// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import routes from './routes.js'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify,{
    iconfont: 'fa'
})
Vue.use(VueRouter)

const route = new VueRouter({
    routes: routes,
    mode: 'history'
});
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: route,
    render: h => h(App)
})