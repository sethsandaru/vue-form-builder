<template>
    <div>
        <div :class="styles.FORM.FORM_GROUP">
            <label>Number of Rows</label>
            <input type="number" step="1" :class="styles.FORM.FORM_CONTROL" v-model.number="control.rows" />
            <small>`row` HTML Attribute Configuration</small>
        </div>

    </div>
</template>

<script>
    import {CONTROL_SPECIAL_CONFIG_MIXIN} from "@/mixins/control-special-config-mixin";

    export default {
        name: "TextConfigView",
        mixins: [CONTROL_SPECIAL_CONFIG_MIXIN]
    }
</script>