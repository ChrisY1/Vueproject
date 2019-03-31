import Vue from 'vue'

import App from './App.vue'
import $ from 'jquery'


// import Axios from 'axios';
// import router from './router'

// Vue.use(Axios)
Vue.config.productionTip = false

//配置全局资源
import './assets/css/wenku.css'
// import './assets/js/main'

//引入自定义插件
import loading from './components/loading'
Vue.use(loading)

//路由的引入
import router from './plugins/router.config'

//引入vuex插件
import store from './store'

//配置全局
import config from './config/config'
window.baseurl = config.baseUrl.localhost

import  './plugins/axios'

new Vue({
  render: h => h(App),
  
  router,
  store
}).$mount('#app')

//cli3相对路径指向assets开发目录