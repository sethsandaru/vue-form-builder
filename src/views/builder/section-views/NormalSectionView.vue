<template>
    <div class="normal-section">
        <div class="headline-block p5" v-show="section.isShowHeadline">
            <h2 :class="section.headlineAdditionalClass" v-text="section.headline"></h2>
            <p :class="section.subHeadlineAdditionalClass" v-text="section.subHeadline"></p>
        </div>

        <!--- SHOW CONTROLS --->
        <div :class="styles.ROW">

        </div>

        <!-- Add More Control -->
        <AddControlControl />
    </div>
</template>

<script>
    import {SECTION_VIEW_MIXINS} from "@/mixins/section-view-mixins";
    import AddControlControl from "@/views/builder/AddControlControl";
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";

    /**
     * @property {Object} section
     * @property {Object} rows RowId - RowData
     * @property {Array} section.rows
     */
    export default {
        name: "NormalSectionView",
        components: {AddControlControl},
        mixins: [SECTION_VIEW_MIXINS, STYLE_INJECTION_MIXIN],
    }
</script>
