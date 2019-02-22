<template>
    <div class="row mt-2">
        <div class="col-md-12">
            <label>
                <input type="checkbox" name="isNowTimeValue" v-model="control.isNowTimeValue"> Auto-input Current Time?
            </label>
        </div>

        <div class="col-md-12">
            <div class="form-group">
                <label>Time Format</label>
                <select2-control :options="timeFormatOptions" v-model="control.timeFormat"></select2-control>
            </div>
        </div>
    </div>
</template>

<script>
    import Select2Control from "sethFormBuilder/third_party_controls/Select2Control";
    import {CONTROL_CONSTANTS} from "sethFormBuilder/config/constants";

    export default {
        name: "TimePickerConfigComponent",
        components: {Select2Control},
        props: {
            control: {
                type: Object
            },
        },
        data: () => ({
            timeFormatOptions: [],
        }),
        created() {
            this.timeFormatOptions = _.map(CONTROL_CONSTANTS.TimeFormat, (value, key) => {
                return key;
            });
        },
    }
</script>

<style scoped>

</style>
