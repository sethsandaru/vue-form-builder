<template>
    <div class="row mt-2">
        <div class="col-md-12">
            <label>
                <input type="checkbox" name="isTodayValue" v-model="control.isTodayValue"> Auto-input Current Day?
            </label>
        </div>

        <div class="col-md-12">
            <div class="form-group">
                <label>Date Format</label>
                <select2-control :options="dateFormatOptions" v-model="control.dateFormat"></select2-control>
            </div>
        </div>
    </div>
</template>

<script>
    import Select2Control from "sethFormBuilder/third_party_controls/Select2Control";
    import {CONTROL_CONSTANTS} from "sethFormBuilder/config/constants";

    export default {
        name: "DatePickerConfigComponent",
        components: {Select2Control},
        props: {
            control: {
                type: Object
            },
        },
        data: () => ({
            dateFormatOptions: [],
        }),
        created() {
            this.dateFormatOptions = _.map(CONTROL_CONSTANTS.DateFormat, (value, key) => {
                return key;
            });
        },
    }
</script>

<style scoped>

</style>
