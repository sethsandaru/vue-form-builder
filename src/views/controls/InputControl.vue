<template>
    <input :id="control.uniqueId"
           type="text"
           :class="controlFieldClass"
           :value="value"
           @input="updateValue($event.target.value)"
    />
</template>

<script>
    import {CONTROL_FIELD_EXTEND_MIXIN} from "@/mixins/control-field-extend-mixin";

    /**
     * InputControl doesn't need to setValue. We can eventually assign the bind the value into the <input>
     * Safe safe...
     */
    export default {
        name: "InputControl",
        mixins: [CONTROL_FIELD_EXTEND_MIXIN]
    }
</script>

<style scoped>

</style>