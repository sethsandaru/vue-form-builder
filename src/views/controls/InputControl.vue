<template>
    <input :id="control.uniqueId"
           :type="control.typeAttribute"
           :class="controlFieldClass"
           :value="value"
           :name="control.name || control.uniqueId"
           :placeholder="control.placeholderText"
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
        mixins: [CONTROL_FIELD_EXTEND_MIXIN],
    }
</script>