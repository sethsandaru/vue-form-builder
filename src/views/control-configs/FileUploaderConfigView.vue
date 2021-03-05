<template>
    <div>
        <div :class="styles.FORM.FORM_GROUP">

        </div>
        <div :class="styles.FORM.FORM_GROUP">

        </div>
    </div>
</template>

<script>
    import {CONTROL_SPECIAL_CONFIG_MIXIN} from "@/mixins/control-special-config-mixin";

    export default {
        name: "FileUploaderConfigView",
        mixins: [CONTROL_SPECIAL_CONFIG_MIXIN]
    }
</script>