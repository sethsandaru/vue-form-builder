<template>
    <a v-if="control.isDownload" :id="control.uniqueId"
       :href="control.href"
       :class="control.additionalFieldClass"
       download>
        {{ control.text }}
    </a>
    <a v-else-if="!control.isDownload" :id="control.uniqueId"
       :href="control.href"
       :class="control.additionalFieldClass">
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
