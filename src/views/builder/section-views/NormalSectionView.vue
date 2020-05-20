<template>
    <div class="normal-section">
        <div class="p5" v-show="section.isShowHeadline">
            <h2 :class="section.headlineAdditionalClass" v-text="section.headline"></h2>
            <p :class="section.subHeadlineAdditionalClass" v-text="section.subHeadline"></p>
        </div>

        <!-- Rows -->
        

        <!-- Add More Row? -->
        <AddRowControl @addRowNotify="addRow" />
    </div>
</template>

<script>
    import {SECTION_VIEW_MIXINS} from "@/mixins/section-view-mixins";

    /**
     * @property {Object} section
     * @property {Object} rows RowId - RowData
     * @property {Array} section.rows
     */
    export default {
        name: "NormalSectionView",
        mixins: [SECTION_VIEW_MIXINS],
        methods: {

        },
    }
</script>

<style scoped>
    .p5 {
        padding-top: 5px;
        padding-bottom: 5px;
    }

    .normal-section {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .normal-section:hover {
        border: 2px solid #3498db;
    }
</style>