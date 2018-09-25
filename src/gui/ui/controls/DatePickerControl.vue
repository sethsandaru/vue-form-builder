<template>
    <div>
        <div class="row datePickerControl" v-if="labelPosition === 'left'">
            <div class="col-md-4">
                <label :class="{'bold': control.labelBold, 'italic': control.labelItalic, 'underline': control.labelUnderline}">
                    {{control.label}}
                </label>
            </div>
            <div class="col-md-8">
                <div class="input-group">
                    <input type="text"
                           class="form-control"
                           :name="control.fieldName"
                           :readonly="this.control.readonly"
                           v-model="control.value" />

                    <div class="input-group-append">
                    <span class="input-group-text">
                        <font-awesome-icon :icon="controlTypes[control.type].icon"></font-awesome-icon>
                    </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-group" v-else>
            <label :class="{'bold': control.labelBold, 'italic': control.labelItalic, 'underline': control.labelUnderline}">
                {{control.label}}
            </label>

            <div class="input-group">
                <input type="text"
                       class="form-control"
                       :name="control.fieldName"
                       :readonly="this.control.readonly"
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
    import {FORM_CONSTANTS,CONTROL_CONSTANTS} from "sethFormBuilder/config/constants";
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import {Hooks} from 'sethFormBuilder/gui/components/hook_lists';

    export default {
        name: "DatePickerControl",
        components: {FontAwesomeIcon},
        props:['control', 'labelPosition'],
        data: () => ({
            controlTypes: FORM_CONSTANTS.Type,
            datePicker: null,
        }),
        mounted() {
            let self = this;
            let $selector = $(this.$el).find("input");
            $selector.datepicker({
                dateFormat: this.control.dateFormat,
                beforeShow:function(input) {
                    // read only can't choose
                    if (self.control.readonly) {
                        return false;
                    }

                    // styling the error style
                    var $selector = $(input);

                    // only increase z-index if this control is in a modal
                    if ($selector.parents(".modal").length <= 0) {
                        return;
                    }

                    $selector.css({
                        "position": "relative",
                        "z-index": 99999
                    });
                }
            });

            // if this control already have value, set it
            if (!_.isEmpty(this.control.value)) {
                $selector.val(this.control.value);
                return; // stop
            }
            // today value or not
            if (this.control.isTodayValue) {
                $selector.val(moment().format(CONTROL_CONSTANTS.DateFormat[this.control.dateFormat]));
            }
            if (!_.isEmpty(this.control.defaultValue)) {
                $selector.val(this.control.defaultValue);
            }

            this.datePicker = $selector;

            // after hook
            Hooks.Control.afterInit.run(this.control, $selector);
        },
        beforeDestroy() {
            this.datePicker.datepicker('destroy');
        }
    }
</script>

<style scoped>
</style>
