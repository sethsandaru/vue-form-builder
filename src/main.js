/**
 * NOTE - This file only exists for development purpose.
 */


import Vue from 'vue'
import App from './App.vue'
import {VueFormBuilderPlugin} from "@/index";

Vue.config.productionTip = false

Vue.use(VueFormBuilderPlugin)

new Vue({
  render: h => h(App)
}).$mount('#app')
