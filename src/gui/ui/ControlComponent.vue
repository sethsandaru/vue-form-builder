<template>
    <div class="controlItem form-group" :class="control.className">
        <text-control v-if="control.type === 'text'" :control="control"></text-control>
        <checkbox-control v-if="control.type === 'checkbox'" :control="control"></checkbox-control>
        <date-picker-control v-if="control.type === 'datepicker'" :control="control"></date-picker-control>
        <time-picker-control v-if="control.type === 'timepicker'" :control="control"></time-picker-control>
        <number-control v-if="control.type === 'number'" :control="control"></number-control>
        <select-control v-if="control.type === 'select'" :control="control"></select-control>
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
        props: ['control'],
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
