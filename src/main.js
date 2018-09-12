import FormBuilderTemplate from 'template/FormBuilderTemplate';
import FormBuilderGui from 'gui/FormBuilderGui';

module.exports = {
    install: function (Vue, options) {
        Vue.component('form-builder-gui', FormBuilderGui);
        Vue.component('form-builder-template', FormBuilderTemplate);
    }
};
