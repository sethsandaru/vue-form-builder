/**
 * NOTE - This file only exists for development purpose.
 * It will help me to run and test the form
 */


import Vue from 'vue'
import App from './App.vue'
// @ts-ignore
import {VueFormBuilderPlugin} from "@/index";
import {IRegisterProperties} from "@/interfaces/register-properties.interface";

Vue.config.productionTip = false

const configOptions : IRegisterProperties = {
  disableControls: [], // ['input', 'number']
  globalInjection: true,
  validationErrorShowAlert: true,
  validationErrorAlertText: "Please check the error messages and solve it."
};

Vue.use(VueFormBuilderPlugin, configOptions)

new Vue({
  render: h => h(App)
}).$mount('#app')
