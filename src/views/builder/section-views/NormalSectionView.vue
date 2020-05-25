<template>
    <div class="normal-section">
        <div class="headline-block p5" v-show="section.isShowHeadline">
            <h2 :class="section.headlineAdditionalClass" v-text="section.headline"></h2>
            <p :class="section.subHeadlineAdditionalClass" v-text="section.subHeadline"></p>
        </div>

        <!-- Rows -->
        <NormalRowView v-for="(rowObject) in sortedRows"
                       :key="rowObject.uniqueId"
                       :row="rowObject"/>

        <!-- Add More Row? -->
        <AddRowControl @addRowNotify="addRow" />
    </div>
</template>

<script>
    import {SECTION_VIEW_MIXINS} from "@/mixins/section-view-mixins";
    import NormalRowView from "@/views/builder/row-views/NormalRowView";

    /**
     * @property {Object} section
     * @property {Object} rows RowId - RowData
     * @property {Array} section.rows
     */
    export default {
        name: "NormalSectionView",
        components: {NormalRowView},
        mixins: [SECTION_VIEW_MIXINS],
        methods: {

        },
    }
</script>
