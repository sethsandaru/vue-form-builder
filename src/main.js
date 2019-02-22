import FormBuilder from './FormBuilder';

module.exports = {
    install: function (Vue, options) {
        Vue.component('form-builder', FormBuilder);
    }
};
