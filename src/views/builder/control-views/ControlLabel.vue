<template>
    <div class="control-label-container">
        <label
            v-text="control.label"
            :for="control.uniqueId"
            :class="[control.additionalLabelClass, readOnly ? 'bold' : '']"
        />
        <br v-if="control.subLabel" />
        <small
            v-if="control.subLabel"
            v-text="control.subLabel"
        />
    </div>
</template>

<script>
    export default {
        name: "ControlLabel",
        props: {
            control: {
                type: Object,
                required: true
            },
            readOnly: {
                type: Boolean,
                default: false,
            }
        }
    }
</script>

<style scoped>
label.bold {
  font-weight: 600;
}
</style>
