<template>
    <div class="controlItem row" :class="control.className" :id="control.name" @dblclick="openConfig">
        <div class="col-md-4">
            <label>{{control.label}}</label>
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
                <input type="checkbox" :name="control.fieldName">
            </div>

            <div class="input-group-append" v-if="control.type != 'text' && control.type != 'select' && control.type != 'checkbox'">
                <span class="input-group-text">
                    <font-awesome-icon :icon="controlTypes[control.type].icon"></font-awesome-icon>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    import {FORM_CONSTANTS} from "config/constants";
    import {eventBus, EventHandlerConstant} from 'template/handler/event_handler';
    import {ControlHandler} from 'template/handler/control_handler';

    export default {
        name: "control-item",
        props: {
            control: {
                type: Object
            }
        },
        data: () => ({
            controlTypes: FORM_CONSTANTS.Type
        }),
        methods: {
            openConfig() {
                ControlHandler.clearSelect();
                ControlHandler.setSelect(this.control.name);
                eventBus.$emit(EventHandlerConstant.ACTIVATE_EDITOR_SIDEBAR, _.cloneDeep(this.control));
            }
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
                    this.$toaster.error("This field Name is already existed in the current section.");
                    return;
                }

                var controlInfo = _.cloneDeep(control);
                _.each(controlInfo, (value, key) => {
                    self.control[key] = value;
                });

                // make sure that after re-render, this control still selected in order to update later...
                this.$nextTick(() => {
                    ControlHandler.setSelect(this.control.name);
                });
            });
        },
        mounted() {
            if (this.control.type === 'datepicker') {
                $(this.$el).find("input").datepicker({
                    dateFormat: "dd/mm/yy"
                });
            } else if (this.control.type === 'timepicker') {
                $(this.$el).find("input").timepicker({
                    timeFormat: "H:i",
                    show2400: true
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
                    case 'datepicker':
                        if (this.control.isTodayValue) {
                            return moment().format('D/M/YYYY');
                        }
                        break;
                    case 'timepicker':
                        if (this.control.isNowTimeValue) {
                            return moment().format("H:m");
                        }
                        break;
                    case 'number':
                        if (this.control.isInteger) {
                            return 0;
                        } else {
                            let decimal = parseInt(this.control.decimalPlace);
                            if (decimal === 0) {
                                return 0;
                            } else {
                                let demo = "0.";
                                for(var i = 1; i <= decimal; i++) {
                                    demo += "0";
                                }
                                return demo;
                            }
                        }
                }
            }
        }
    }
</script>

<style scoped>
    .controlItem {
        margin: 0;
        padding: 10px;
        padding-left: 0;
        border: 1px solid silver;
        background-color: #FFF;
    }

    .onSelect {
        /*margin: 0;*/
        border: 1px solid aqua;
    }
</style>
