<template>
    <div class="row">
        <div class="col-md-4">
            <label :for="control.name + '_gui_control'">{{control.label}}</label>
        </div>
        <div class="col-md-8 text-center">
            <input type="checkbox"
                   :readonly="this.control.readonly"
                   :name="control.fieldName"
                   v-model="control.value" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "CheckboxControl",
        props: ['control'],
        mounted() {
            if (this.control.isChecked) {
                this.control.value = true;
            }
        }
    }
</script>

<style scoped>

</style>
