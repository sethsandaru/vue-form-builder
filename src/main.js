/**
 * NOTE - This file only exists for development purpose.
 */


import Vue from 'vue'
import App from './App.vue'
import {plugin} from "@/index";

Vue.config.productionTip = false

Vue.use(plugin)

new Vue({
  render: h => h(App)
}).$mount('#app')
