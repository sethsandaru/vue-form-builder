<template>
    <div class="controlItem form-group" :class="control.className">
        <text-control v-if="control.type === 'text'" :control="control" :label-position="labelPosition"></text-control>
        <checkbox-control v-if="control.type === 'checkbox'" :control="control" :label-position="labelPosition"></checkbox-control>
        <date-picker-control v-if="control.type === 'datepicker'" :control="control" :label-position="labelPosition"></date-picker-control>
        <time-picker-control v-if="control.type === 'timepicker'" :control="control" :label-position="labelPosition"></time-picker-control>
        <number-control v-if="control.type === 'number'" :control="control" :label-position="labelPosition"></number-control>
        <select-control v-if="control.type === 'select'" :control="control" :label-position="labelPosition"></select-control>
    </div>
</template>

<script>
    import {Hooks} from 'sethFormBuilder/gui/components/hook_lists';
    import TextControl from "./controls/TextControl";
    import CheckboxControl from "./controls/CheckboxControl";
    import DatePickerControl from "./controls/DatePickerControl";
    import TimePickerControl from "./controls/TimePickerControl";
    import NumberControl from "./controls/NumberControl";
    import SelectControl from "./controls/SelectControl";

    export default {
        name: "ControlComponent",
        components: {SelectControl, NumberControl, TimePickerControl, DatePickerControl, CheckboxControl, TextControl},
        props: ['control', 'labelPosition'],
        created() {
            Hooks.Control.beforeRegister.run(this.control);
        },
        mounted() {
            Hooks.Control.afterRegister.run(this.control);
        }
    }
</script>

<style scoped>

</style>
