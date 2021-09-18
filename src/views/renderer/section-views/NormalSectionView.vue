<template>
    <div class="normal-section">
        <div class="headline-block" v-show="section.isShowHeadline">
            <h2 :class="section.headlineAdditionalClass" v-text="section.headline"></h2>
            <p :class="section.subHeadlineAdditionalClass" v-text="section.subHeadline"></p>
        </div>

        <div :class="containerClasses">
            <ControlView
                v-for="controlId in section.controls"
                :key="controlId"
                :control="controls[controlId]"
                :parent-id="section.uniqueId"
                :value-container="valueContainer"
                :validation-errors="validationErrors"
                :read-only="readOnly"
            />
        </div>
    </div>
</template>

<script>
    import {RENDERER_SECTION_VIEW_MIXIN} from "@/mixins/renderer-section-view-mixin";

    /**
     * @property {Object} section
     * @property {Object} rows RowId - RowData
     * @property {Object} controls ControlId - ControlData
     * @property {Array} section.rows
     * @property {Array} section.controls
     */
    export default {
        name: "NormalSectionView",
        mixins: [RENDERER_SECTION_VIEW_MIXIN],
        data: () => ({

        }),

    }
</script>
