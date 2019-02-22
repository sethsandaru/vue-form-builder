<template>
    <div class="controlItemWrapper" :class="control.className" @dblclick="openConfig" :data-control-name="control.name">
        <div class="controlItem row" :id="control.name" v-if="labelPosition === 'left'">
            <div class="col-md-4">
                <label :class="{'bold': control.labelBold, 'italic': control.labelItalic, 'underline': control.labelUnderline}">
                    {{control.label}}
                </label>
            </div>
            <div class="col-md-8 input-group">
                <!-- demo for text, number, date & time picker -->
                <input type="text" class="form-control"
                       :readonly="control.readonly"
                       :name="control.fieldName"
                       :value="demo_value"
                       v-if="control.type != 'checkbox' && control.type != 'select'">

                <!-- demo for select -->
                <select class="form-control" v-if="control.type == 'select'" :name="control.fieldName">
                    <option disabled selected>Options</option>
                    <option v-for="option in control.dataOptions">{{option.text}}</option>
                </select>

                <!-- demo for checkbox -->
                <div class="text-center w-100" v-if="control.type == 'checkbox'">
                    <input type="checkbox" :name="control.fieldName" :checked="control.isChecked">
                </div>

                <div class="input-group-append" v-if="control.type != 'text' && control.type != 'select' && control.type != 'checkbox'">
                    <span class="input-group-text">
                        <font-awesome-icon :icon="controlTypes[control.type].icon"></font-awesome-icon>
                    </span>
                </div>
            </div>
        </div>
        <div class="controlItem row" :id="control.name" v-else>
            <div class="form-group col-md-12">
                <label :class="{'bold': control.labelBold, 'italic': control.labelItalic, 'underline': control.labelUnderline}">
                    {{control.label}}
                </label>
                <div class="input-group">
                    <!-- demo for text, number, date & time picker -->
                    <input type="text" class="form-control"
                           :readonly="control.readonly"
                           :name="control.fieldName"
                           :value="demo_value"
                           v-if="control.type != 'checkbox' && control.type != 'select'">

                    <!-- demo for select -->
                    <select class="form-control" v-if="control.type == 'select'" :name="control.fieldName">
                        <option disabled selected>Options</option>
                        <option v-for="option in control.dataOptions">{{option.text}}</option>
                    </select>

                    <!-- demo for checkbox -->
                    <div class="text-center w-100" v-if="control.type == 'checkbox'">
                        <input type="checkbox" :name="control.fieldName" :checked="control.isChecked">
                    </div>

                    <div class="input-group-append" v-if="control.type != 'text' && control.type != 'select' && control.type != 'checkbox'">
                        <span class="input-group-text">
                            <font-awesome-icon :icon="controlTypes[control.type].icon"></font-awesome-icon>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {FORM_CONSTANTS, CONTROL_CONSTANTS} from "sethFormBuilder/config/constants";
    import {eventBus, EventHandlerConstant} from 'sethFormBuilder/template/handler/event_handler';
    import {ControlHandler} from 'sethFormBuilder/template/handler/control_handler';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    export default {
        name: "control-item",
        components: {FontAwesomeIcon},
        props: {
            control: {
                type: Object
            },
            labelPosition: null
        },
        data: () => ({
            controlTypes: FORM_CONSTANTS.Type,
            $control: null,
        }),
        methods: {
            openConfig() {
                ControlHandler.clearSelect();
                ControlHandler.setSelect(this.control.name);
                eventBus.$emit(EventHandlerConstant.ACTIVATE_EDITOR_SIDEBAR, _.cloneDeep(this.control));
            },
            updating() {

            },
        },
        created() {
            let self = this;
            eventBus.$on(EventHandlerConstant.ON_APPLY_EDITOR_SIDEBAR, control => {
                var oldControl = _.find(this.$parent.row.controls, {name: control.name});
                if (oldControl === undefined || oldControl.name !== this.control.name) {
                    return;
                }

                // check if existed name in this section
                if (control.fieldName !== oldControl.fieldName && ControlHandler.isControlNameExisted(this.$parent.row.name, control.fieldName)) {
                    SethPhatToaster.error("This field Name is already existed in the current section.");
                    return;
                }

                var controlInfo = _.cloneDeep(control);
                _.each(controlInfo, (value, key) => {
                    self.control[key] = value;
                });

                // update gui for specific control
                switch (controlInfo.type) {
                    case "datepicker":
                        this.$control.datepicker("option", "dateFormat", controlInfo.dateFormat);
                        break;
                    case "timepicker":
                        this.$control.data('TimePicker').options.timeFormat = controlInfo.timeFormat;
                        break;
                }

                // make sure that after re-render, this control still selected in order to update later...
                this.$nextTick(() => {
                    ControlHandler.setSelect(this.control.name);
                });
            });
        },
        mounted() {
            let self = this;
            this.$control = $(this.$el).find("input");

            // init special??
            if (this.control.type === 'datepicker') {
                this.$control.datepicker({
                    dateFormat: this.control.dateFormat,
                    beforeShow:function(input) {
                        // read only can't choose
                        if (self.control.readonly) {
                            return false;
                        }
                    }
                });
            } else if (this.control.type === 'timepicker') {
                this.$control.timepicker({
                    timeFormat: this.control.timeFormat
                });
            }
        },
        computed: {
            demo_value() {
                // default value existed
                if (!_.isEmpty(this.control.defaultValue)) {
                    return this.control.defaultValue;
                }

                // solving default value
                switch (this.control.type) {
                    case 'text':
                        return "Text here";
                    case 'datepicker':
                        if (this.control.isTodayValue) {
                            return moment().format(CONTROL_CONSTANTS.DateFormat[this.control.dateFormat]);
                        }
                        break;
                    case 'timepicker':
                        if (this.control.isNowTimeValue) {
                            return moment().format(CONTROL_CONSTANTS.TimeFormat[this.control.timeFormat]);
                        }
                        break;
                    case 'number':
                        if (this.control.isInteger) {
                            return 0;
                        } else {
                            let decimal = parseInt(this.control.decimalPlace);
                            let x = 0;
                            return x.toFixed(decimal);
                        }
                }
            }
        },
        beforeDestroy() {
            switch (this.control.type) {
                case "datepicker":
                    this.$control.datepicker('destroy');
                    break;
                case "timepicker":
                    this.$control.timepicker('destroy');
                    break;
            }
        }
    }
</script>

<style scoped>

    .controlItemWrapper {
        border: 1px solid silver;
        padding:0;
    }

    .controlItem {
        margin: 0;
        padding: 10px;
        padding-left: 0;
        background-color: #FFF;
    }

    .onSelect {
        /*margin: 0;*/
        border: 1px solid aqua;
    }
</style>
