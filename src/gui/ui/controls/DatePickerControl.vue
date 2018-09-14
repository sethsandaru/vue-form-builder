<template>
    <div class="row">
        <div class="col-md-4">
            <label>{{control.label}}</label>
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
</template>

<script>
    import {FORM_CONSTANTS} from "sethFormBuilder/config/constants";
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    export default {
        name: "DatePickerControl",
        components: {FontAwesomeIcon},
        props:['control'],
        data: () => ({
            controlTypes: FORM_CONSTANTS.Type,
            datePicker: null,
        }),
        mounted() {
            let self = this;
            let $selector = $(this.$el).find("input");
            $selector.datepicker({
                dateFormat: "dd/mm/yy",
                // fix problem...
                beforeShow:function(input) {
                    if (self.control.readonly) {
                        return false;
                    }

                    // stylin..
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
                $selector.val(moment().format('D/M/YYYY'));
            }
            if (!_.isEmpty(this.control.defaultValue)) {
                $selector.val(this.control.defaultValue);
            }

            this.datePicker = $selector;
        },
        beforeDestroy() {
            this.datePicker.datepicker('destroy');
        }
    }
</script>

<style scoped>
</style>
