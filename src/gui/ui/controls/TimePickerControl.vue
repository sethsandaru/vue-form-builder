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
                    <ControlTimePicker v-model="control.value" :readonly="control.readonly" :options="options" />

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
                <ControlTimePicker v-model="control.value" :readonly="control.readonly" :options="options" />

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
    import ControlTimePicker from 'sethFormBuilder/third_party_controls/TimePickerControl';

    export default {
        name: "TimePickerControl",
        components: {FontAwesomeIcon, ControlTimePicker},
        props:['control', 'labelPosition'],
        data: () => ({
            icon: null,
            options: {
                zindex:1111,
            }
        }),
        created() {
            this.icon = CONTROL_TYPES[this.control.type].icon;

            // setup data
            this.options.timeFormat = this.control.timeFormat;

            if (!_.isEmpty(this.control.defaultValue)) {
                this.control.value = this.control.defaultValue;
            }

            if (this.control.isNowTimeValue) {
                this.control.value = moment().format(CONTROL_CONSTANTS.TimeFormat[this.control.timeFormat]);
            }

        },
        mounted() {
            Hooks.Control.afterInit.run(this.control);
        }
    }
</script>

<style scoped>

</style>
