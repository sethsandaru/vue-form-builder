<template>
    <div>
        <div :class="styles.FORM.FORM_GROUP">
            <label>Data Return Type</label>
            <select :class="styles.FORM.FORM_CONTROL"
                    v-model="control.returnType">

                <option v-for="item in listReturnTypes"
                        :key="item.val"
                        :value="item.val"
                        v-text="item.description">
                </option>

            </select>
        </div>

        <!--- Only show this configuration if return Type is Format --->
        <div :class="styles.FORM.FORM_GROUP" v-show="control.returnType === listReturnTypes.format.val">
            <label>Date Format</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.format" />
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Start Date of the Week</label>
            <select :class="styles.FORM.FORM_CONTROL"
                    v-model="control.firstDay">

                <option v-for="item in listStartDates"
                        :key="item.val"
                        :value="item.val"
                        v-text="item.description">
                </option>

            </select>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Minimum Date
                <IconTooltip icon="informationOutline" text="Follow this format: YYYY-MM-DD. Empty for none." />
            </label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.minDate" />
            <small>Minimum Date can be selected in the Calendar</small>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Maximum Date
                <IconTooltip icon="informationOutline" text="Follow this format: YYYY-MM-DD. Empty for none." />
            </label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.maxDate"  />
            <small>Maximum Date can be selected in the Calendar</small>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Enable Date-Range?

                <!--- Because singleModel == true => single date picker --->
                <input type="checkbox"
                       name="enableDateRange"
                       v-model="control.singleMode"
                       :true-value="false"
                       :false-value="true">
            </label>
        </div>

        <!--- Only show this configuration if date-range --->
        <div :class="styles.FORM.FORM_GROUP" v-show="!control.singleMode">
            <label>Minimum Day in Range (0 for none)</label>
            <input type="number" step="1" :class="styles.FORM.FORM_CONTROL" v-model.number="control.minDays" />
        </div>

        <div :class="styles.FORM.FORM_GROUP" v-show="!control.singleMode">
            <label>Maximum Day in Range (0 for none)</label>
            <input type="number" step="1" :class="styles.FORM.FORM_CONTROL" v-model.number="control.maxDays" />
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Number of Months</label>
            <input type="number" step="1" :class="styles.FORM.FORM_CONTROL" v-model.number="control.numberOfMonths" />
            <small>Number of Months will be shown up</small>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Number of Columns</label>
            <input type="number" step="1" :class="styles.FORM.FORM_CONTROL" v-model.number="control.numberOfColumns" />
            <small>Number of Columns will be shown up</small>
        </div>
    </div>
</template>

<script>
    import {CONTROL_SPECIAL_CONFIG_MIXIN} from "@/mixins/control-special-config-mixin";
    import {DATE_PICKER_RETURN_TYPES, DATE_PICKER_START_DATES} from "@/configs/control-config-enum";

    export default {
        name: "DatePickerConfigView",
        mixins: [CONTROL_SPECIAL_CONFIG_MIXIN],


        computed: {
            /**
             * Return types of DatePicker
             */
            listReturnTypes: () => DATE_PICKER_RETURN_TYPES,

            /**
             * Start dates of the Week
             */
            listStartDates:() => DATE_PICKER_START_DATES,
        }
    }
</script>