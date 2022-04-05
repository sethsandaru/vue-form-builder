<template>
    <div :class="control.additionalFieldClass" v-html="control.text">
    </div>
</template>

<script>
    import {CONTROL_FIELD_EXTEND_MIXIN} from "@/mixins/control-field-extend-mixin";

    /**
     * As you can see, it's surely an empty block =))
     */
    export default {
        name: "TextHTMLControl",
        mixins: [CONTROL_FIELD_EXTEND_MIXIN]
    }
</script>
