<template>
    <div>
        <div class="row" v-if="labelPosition === 'left'">
            <div class="col-md-4">
                <label :class="{'bold': control.labelBold, 'italic': control.labelItalic, 'underline': control.labelUnderline}">
                    {{control.label}}
                </label>
            </div>
            <div class="col-md-8">
                <div class="input-group">
                    <input type="text"
                           class="form-control"
                           :disabled="control.readonly"
                           :name="control.fieldName"
                           v-model="control.value" />

                    <div class="input-group-append">
                    <span class="input-group-text">
                        <font-awesome-icon :icon="icon"></font-awesome-icon>
                    </span>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="form-group">
            <label :class="{'bold': control.labelBold, 'italic': control.labelItalic, 'underline': control.labelUnderline}">
                {{control.label}}
            </label>
            <div class="input-group">
                <input type="text"
                       class="form-control"
                       :disabled="control.readonly"
                       :name="control.fieldName"
                       v-model="control.value" />

                <div class="input-group-append">
                    <span class="input-group-text">
                        <font-awesome-icon :icon="icon"></font-awesome-icon>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {CONTROL_CONSTANTS} from "sethFormBuilder/config/constants";
    import {CONTROL_TYPES} from "sethFormBuilder/config/control_constant";
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import {Hooks} from 'sethFormBuilder/gui/components/hook_lists';

    export default {
        name: "TimePickerControl",
        components: {FontAwesomeIcon},
        props:['control', 'labelPosition'],
        data: () => ({
            icon: null,
        }),
        created() {
            this.icon = CONTROL_TYPES[this.control.type].icon;
        },
        mounted() {
            var $selector = $(this.$el).find("input.form-control");
            $selector.timepicker({
                timeFormat: this.control.timeFormat,
                zindex: 1111
            });

            if (this.control.isNowTimeValue) {
                this.control.value = moment().format(CONTROL_CONSTANTS.TimeFormat[this.control.timeFormat]);
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
