<template>
    <textarea
            :id="control.uniqueId"
            type="text"
            :class="controlFieldClass"
            :value="value"
            :rows="control.rows"
            @input="updateValue($event.target.value)"
    ></textarea>
</template>

<script>
    import {CONTROL_FIELD_EXTEND_MIXIN} from "@/mixins/control-field-extend-mixin";

    /**
     * TextControl doesn't need to setValue. We can eventually assign the bind the value into the <textarea>
     * Safe safe...
     */
    export default {
        name: "TextControl",
        mixins: [CONTROL_FIELD_EXTEND_MIXIN]
    }
</script>

<style scoped>

</style>