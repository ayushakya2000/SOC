import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')

Vue.use(Vuetify, {
    iconfont: 'fa' // 'md' || 'mdi' || 'fa' || 'fa4'
})