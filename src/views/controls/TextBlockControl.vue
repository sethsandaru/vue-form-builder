<template>
    <div :class="control.additionalFieldClass" v-text="control.text">
    </div>
</template>

<script>
    import {CONTROL_FIELD_EXTEND_MIXIN} from "@/mixins/control-field-extend-mixin";

    /**
     * As you can see, it's surely an empty block =))
     */
    export default {
        name: "TextBlockControl",
        mixins: [CONTROL_FIELD_EXTEND_MIXIN]

    }
</script>