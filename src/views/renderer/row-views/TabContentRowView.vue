<template>
    <section>
        <div :class="containerClasses">
            <ControlView
                v-for="controlId in row.controls"
                :key="controlId"
                :control="controls[controlId]"
                :parent-id="row.uniqueId"

                :value-container="valueContainer"
                :validation-errors="validationErrors"
                :read-only="readOnly"
            />
        </div>
    </section>
</template>

<script>
    import {RENDERER_ROW_VIEW_MIXIN} from "@/mixins/render-row-view-mixin";

    /**
     * @property {Object} section
     * @property {Object} rows RowId - RowData
     * @property {Object} controls ControlId - ControlData
     * @property {Array} section.rows
     * @property {Array} section.controls
     */
    export default {
        name: "TabContentRowView",
        mixins: [RENDERER_ROW_VIEW_MIXIN],
    }
</script>