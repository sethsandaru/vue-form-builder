<template>
    <div>
        <form-builder-template v-if="type === 'template'" ref="FormBuilderTemplate" :form="form"></form-builder-template>
        <form-builder-gui v-else-if="type === 'gui'" ref="FormBuilderGui" :form="form"></form-builder-gui>
        <div v-else>
            <p>Type not found, did you enter correct type <b>(template, gui)</b>?</p>
        </div>
    </div>
</template>

<script>
    // load necessary
    import underscoreDeepExtend from 'underscore-deep-extend';
    import moment from 'moment';
    import {FontAwesomeRegister} from "sethFormBuilder/config/font-awesome-register";
    import {SethPhatToaster} from "./config/toaster";
    import {Hooks as GUI_Hooks} from './gui/components/hook_lists';
    import {Hooks as Template_Hooks} from './template/components/hook_lists';
    import {FormHandler} from "sethFormBuilder/gui/handler/form_handler";

    // load jquery
    if (!window.$) {
        let $ = require('jquery');
        window.$ = $;
        window.jQuery = $;
    }

    // load jquery ui
    import 'webpack-jquery-ui';
    import 'webpack-jquery-ui/css';

    // load timepicker
    require('sethFormBuilder/assets/js/jquery.timepicker.min');
    require('sethFormBuilder/assets/css/jquery.timepicker.min.css');
    require('sethFormBuilder/assets/css/v-form.css');

    // load bootstrap
    require('popper.js');
    require('bootstrap');
    // import 'bootstrap/dist/css/bootstrap.min.css';

    // load font-awesome
    FontAwesomeRegister.register();

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
    require('sethFormBuilder/assets/js/jquery.noty.packaged');
    window.SethPhatToaster = SethPhatToaster;

    // import
    import FormBuilderTemplate from './template/FormBuilderTemplate';
    import FormBuilderGui from './gui/FormBuilderGui';

    // special hook
    import {ValidateSettingHandler} from "sethFormBuilder/template/handler/validate_setting_handler";

    export default {
        name: "FormBuilder",
        components: {
            FormBuilderTemplate,
            FormBuilderGui
        },
        model: {
            prop: 'value',
            event: 'change'
        },
        props: {
            type: {
                type: String,
                default: "template"
            },
            form: {
                type: Object,
                default:() => ({
                    sections: [],
                    layout: "",
                    _uniqueId: Math.random()
                })
            },
            value: null,
            options: {
                type: Object,
                default: () => ({})
            }
        },
        watch: {
            form: {
                handler(val) {
                    if (this.type === 'template') {
                        this.$emit('change', val);
                    } else {
                        this.debounceGetFormGUIValue();
                    }
                },
                deep: true
            },
            value(val) {
                this.setValue(val);
            }
        },
        methods: {
            getValue() {
                if (this.type === 'template') {
                    return this.$refs.FormBuilderTemplate.getValue();
                } else {
                    return this.$refs.FormBuilderGui.getValue();
                }
            },
            setValue(values) {
                if (_.isEmpty(values)) {
                    return;
                }

                // set values for specific type
                if (this.type === 'template') {
                    _.deepExtend(this.form, FormHandler.recorrectStructure(values));
                    // this.$refs.FormBuilderTemplate.setValue(values);
                } else {
                    this.$refs.FormBuilderGui.setValue(values);
                }
            },
            validate(showError = true) {
                if (this.type !== 'gui') {
                    return;
                }

                var hasError = FormHandler.validate(this.form);
                if (showError && hasError) {
                    SethPhatToaster.error("There are errors on the page. Please rectify the errors so the action can be completed.");
                }

                // true => no error | false => errors
                return !hasError;
            },
            clearError() {
                FormHandler.clearErrorField();
            }
        },
        created() {
            let self = this;
            this.debounceGetFormGUIValue = _.debounce(() => {
                self.$emit('change', self.getValue());
            }, 500);

            // Register for hook
            if (this.type === 'template') {
                if(_.has(this.options, 'hooks')) {
                    Template_Hooks.register(this.options.hooks);
                }

                // add special hooks for template
                ValidateSettingHandler.init(Template_Hooks);
            } else {
                if(_.has(this.options, 'hooks')) {
                    GUI_Hooks.register(this.options.hooks);
                }

                // Re-correct data for GUI
                _.deepExtend(this.form, FormHandler.recorrectStructure(this.form));
            }

        },
        mounted() {
            this.setValue(this.value);
        }
    }
</script>

<style scoped>
</style>
