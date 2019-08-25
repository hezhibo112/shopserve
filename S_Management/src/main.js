import Vue from 'vue'
import App from './App'
import router from "./router/index"
import store from "./store/index"

import "@/utils/rem"
//elementU
import "./config/elementUi"
//css样式
import "./static/scss/common.scss"
//全局挂载公共组件
import Plugin from "./plugin/"

Vue.config.productionTip = false;

//挂载
Vue.use(Plugin)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
