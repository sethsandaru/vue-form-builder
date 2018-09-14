<template>
    <div>
        <form-builder-template v-if="type === 'template'" ref="FormBuilderTemplate"></form-builder-template>
        <form-builder-gui v-if="type === 'gui'" ref="FormBuilderGui" :form="form"></form-builder-gui>
    </div>
</template>

<script>
    // load necessary
    import Vue from 'vue'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import Toaster from 'v-toaster'
    import underscoreDeepExtend from 'underscore-deep-extend';
    import moment from 'moment';
    import {FontAwesomeRegister} from "sethFormBuilder/config/font-awesome-register";

    // load jquery
    if (!window.$) {
        var $ = require('jquery');
        window.$ = $;
        window.jQuery = $;
    }

    // load jquery ui
    require('webpack-jquery-ui');
    require('webpack-jquery-ui/css');

    // load bootstrap
    require('popper.js');
    require('bootstrap');
    import 'bootstrap/dist/css/bootstrap.min.css';

    // load font-awesome
    FontAwesomeRegister.register();
    Vue.component('font-awesome-icon', FontAwesomeIcon);

    // load underscore
    if (!window._) {
        window._ = require('underscore');
    }
    require('sethFormBuilder/config/helper_function');
    _.mixin({deepExtend: underscoreDeepExtend(_)});

    // // load moment
    if (!window.moment) {
        window.moment = moment;
    }

    // toaster
    // import 'v-toaster/dist/v-toaster.css';
    // Vue.use(Toaster, {timeout: 4000});

    // import
    import FormBuilderTemplate from './template/FormBuilderTemplate';
    import FormBuilderGui from './gui/FormBuilderGui';

    export default {
        name: "FormBuilder",
        components: {
            FormBuilderTemplate,
            FormBuilderGui
        },
        props: ['type', 'form'],
        methods: {
            getValue() {
                if (this.type === 'template') {
                    return this.$refs.FormBuilderTemplate.getValue();
                } else {
                    return this.$refs.FormBuilderGui.getValue();
                }
            },
            setValue(values) {
                if (this.type === 'template') {
                    return this.$refs.FormBuilderTemplate.setValue(values);
                } else {
                    return this.$refs.FormBuilderGui.setValue(values);
                }
            },
            validate() {

            }
        }
    }
</script>

<style scoped>

</style>
