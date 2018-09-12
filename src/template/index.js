import Vue from 'vue'
import FormBuilderTemplate from './FormBuilderTemplate.vue'
const FormBuilderTemplateComponent = {};
FormBuilderTemplateComponent.install = function (Vue, options) {
    Vue.component('FormBuilderTemplate', FormBuilderTemplate)
};

export default FormBuilderTemplateComponent;
