<template>
    <div class="row">
        <div class="col-md-4">
            <label :for="control.name + '_gui_control'">{{control.label}}</label>
        </div>
        <div class="col-md-8">
            <select2-control v-if="!control.isMultiple"
                             v-model="control.value"
                             :disabled="this.control.readonly"
                             :options="control.dataOptions">
            </select2-control>
            <select2-multiple-control v-else
                                      v-model="control.value"
                                      :disabled="this.control.readonly"
                                      :options="control.dataOptions">
            </select2-multiple-control>
        </div>
    </div>
</template>

<script>
    import Select2Control from "third_party_controls/Select2Control";
    import Select2MultipleControl from "third_party_controls/Select2MultipleControl";
    export default {
        name: "SelectControl",
        components: {Select2MultipleControl, Select2Control},
        props:['control'],
        mounted() {
            if (!_.isEmpty(this.control.defaultValue)) {
                if (this.control.isMultiple) {
                    this.control.value = [this.control.defaultValue];
                } else {
                    this.control.value = this.control.defaultValue;
                }
            }
        }
    }
</script>

<style scoped>

</style>
