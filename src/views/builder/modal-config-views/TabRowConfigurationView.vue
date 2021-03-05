<template>
    <div>
        <div :class="styles.FORM.FORM_GROUP">
            <label>Tab Title/Name</label>
            <input type="text"
                   :class="styles.FORM.FORM_CONTROL"
                   v-model="rowConfiguration.extendData.tabName">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Tab Icon (HTML/Inline SVG/Image)</label>
            <textarea :class="styles.FORM.FORM_CONTROL" v-model="rowConfiguration.extendData.tabIcon"></textarea>

            <p>
                Recommendation: <a href="http://svgicons.sparkk.fr/" target="_blank">Free Inline-SVG Icons</a>
            </p>
        </div>

        <div class="buttons">
            <button :class="styles.BUTTON.PRIMARY" @click="save(true)">
                Save
            </button>
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";
    import {SIDEBAR_BODY_MIXIN} from "@/mixins/sidebar-body-mixin";
    import {ROW_DEFAULT_DATA} from "@/configs/row";

    export default Vue.extend({
        name: "TabRowConfigurationView",
        mixins: [STYLE_INJECTION_MIXIN, SIDEBAR_BODY_MIXIN],

        data: () => ({
            dataKey: "rowConfiguration",
            rowConfiguration: Object.assign({}, ROW_DEFAULT_DATA)
        }),

        methods: {

        },

        created() {
            this.rowConfiguration = Object.assign({}, this.sectionConfiguration, this.dataPackage)
        }
    })
</script>