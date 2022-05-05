<template>
    <a :id="control.uniqueId"
       :href="control.href"
       :class="control.additionalFieldClass"
       :target="control.target"
       download>
        {{ control.text }}
    </a>
</template>

<script>
    import {CONTROL_FIELD_EXTEND_MIXIN} from "@/mixins/control-field-extend-mixin";

    /**
     * LabelControl
     * <label for='...'>...</label>
     */
    export default {
        name: "LabelControl",
        mixins: [CONTROL_FIELD_EXTEND_MIXIN]
    }
</script>
