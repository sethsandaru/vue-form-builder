<template>
    <div :class="[styles.COLUMNS.COL12, 'pbottom-10']">
        <button :class="styles.BUTTON.SECONDARY">
            Form Configurations
        </button>
    </div>
</template>

<script>
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";

    export default {
        name: "FormConfiguration",
        mixins: [STYLE_INJECTION_MIXIN]
    }
</script>

<style scoped>
    .pbottom-10 {
        padding-bottom: 10px;
    }
</style>