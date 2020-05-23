<template>
    <div class="sidebar-form-configuration">
        <h5>Main Form Configuration</h5>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Form Headline</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Form Sub-Headline</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Show Form Headline?
                <input type="checkbox">
            </label>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Wrapper &#x3C;form&#x3E; outside of the Form?
                <input type="checkbox">
            </label>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Form-TAG Action URL</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Form-TAG Method</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL">
        </div>

    </div>
</template>

<script>
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";
    import {SIDEBAR_BODY_MIXIN} from "@/mixins/sidebar-body-mixin";

    export default {
        name: "SidebarFormConfiguration",
        mixins: [STYLE_INJECTION_MIXIN, SIDEBAR_BODY_MIXIN],
    }
</script>

<style scoped>

</style>