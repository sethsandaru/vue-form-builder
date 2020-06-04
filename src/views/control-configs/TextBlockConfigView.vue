<template>
    <div>
        <div :class="styles.FORM.FORM_GROUP">
            <label>Text for Text-Block</label>
            <textarea type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.text" rows="6"></textarea>
        </div>
    </div>
</template>

<script>
    import {CONTROL_SPECIAL_CONFIG_MIXIN} from "@/mixins/control-special-config-mixin";

    export default {
        name: "TextBlockConfigView",
        mixins: [CONTROL_SPECIAL_CONFIG_MIXIN]
    }
</script>