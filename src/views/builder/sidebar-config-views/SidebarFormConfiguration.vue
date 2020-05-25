<template>
    <div class="sidebar-form-configuration">
        <h5>Main Form Configuration</h5>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Form Headline</label>
            <input type="text"
                   :class="styles.FORM.FORM_CONTROL"
                   v-model="formConfiguration.headline">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Form Sub-Headline</label>
            <input type="text"
                   :class="styles.FORM.FORM_CONTROL"
                   v-model="formConfiguration.subHeadline">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Show Form Headline?
                <input type="checkbox" v-model="formConfiguration.isShowHeadline">
            </label>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Wrapper &#x3C;form&#x3E; outside of the Form?
                <input type="checkbox" v-model="formConfiguration.renderFormTag">
            </label>
        </div>

        <div v-show="formConfiguration.renderFormTag">

            <div :class="styles.FORM.FORM_GROUP">
                <label>Form-TAG Action URL</label>
                <input type="text"
                       :class="styles.FORM.FORM_CONTROL"
                       v-model="formConfiguration.formActionURL">
            </div>

            <div :class="styles.FORM.FORM_GROUP">
                <label>Form-TAG Method</label>
                <input type="text"
                       :class="styles.FORM.FORM_CONTROL"
                       v-model="formConfiguration.formMethod">
            </div>

        </div>

        <div class="buttons">
            <button :class="styles.BUTTON.SECONDARY" @click="close">
                Cancel
            </button>
            <button :class="styles.BUTTON.PRIMARY" @click="save">
                Save
            </button>
        </div>
    </div>
</template>

<script>
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";
    import {SIDEBAR_BODY_MIXIN} from "@/mixins/sidebar-body-mixin";
    import {FORM_DEFAULT_DATA} from "@/configs/form";

    /**
     * @property {FORM_DEFAULT_DATA} formConfiguration
     */
    export default {
        name: "SidebarFormConfiguration",
        mixins: [STYLE_INJECTION_MIXIN, SIDEBAR_BODY_MIXIN],
        data: () => ({
            formConfiguration: Object.assign({}, FORM_DEFAULT_DATA),
        }),

        methods: {
            /**
             * Save the configuration (Actually I will close the sidebar and emit event =)) )
             */
            save() {
                this.$emit(this.emitCloseKey, true, this.formConfiguration)
            },
        },

        created() {
            // retrieve the data from `GlobalSidebar` passed in
            this.formConfiguration = Object.assign({}, this.formConfiguration, this.dataPackage)
        }
    }
</script>

<style scoped>

</style>