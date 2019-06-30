import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import "@/assets/iconfont/iconfont.js"


Vue.prototype.axios = axios;
Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
