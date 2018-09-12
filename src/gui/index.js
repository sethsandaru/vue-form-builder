import Vue from 'vue'
import FormBuilderGui from './FormBuilderGui.vue'
const FormBuilderGuiComponent = {};
FormBuilderGuiComponent.install = function (Vue, options) {
    Vue.component('FormBuilderGui', FormBuilderGui)
};

export default FormBuilderGuiComponent;
