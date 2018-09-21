<template>
    <div class="row">
        <div class="col-md-4">
            <label :for="control.name + '_gui_control'">{{control.label}}</label>
        </div>
        <div class="col-md-8">
            <div class="input-group">
                <input type="text"
                       class="form-control"
                       :readonly="control.readonly"
                       :name="control.fieldName"
                       v-model="control.value" />

                <div class="input-group-append">
                    <span class="input-group-text">
                        <font-awesome-icon :icon="controlTypes[control.type].icon"></font-awesome-icon>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {FORM_CONSTANTS} from "sethFormBuilder/config/constants";
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import {Hooks} from 'sethFormBuilder/gui/components/hook_lists';

    export default {
        name: "TimePickerControl",
        components: {FontAwesomeIcon},
        props:['control'],
        data: () => ({
            controlTypes: FORM_CONSTANTS.Type
        }),
        mounted() {
            var $selector = $(this.$el).find("input");
            $selector.timepicker({
                timeFormat: this.control.timeFormat
            });

            if (this.control.isNowTimeValue) {
                this.control.value = moment().format('H:m');
            }
            if (!_.isEmpty(this.control.defaultValue)) {
                this.control.value = this.control.defaultValue;
            }

            // after hook
            Hooks.Control.afterInit.run(this.control, $selector);
        }
    }
</script>

<style scoped>

</style>
