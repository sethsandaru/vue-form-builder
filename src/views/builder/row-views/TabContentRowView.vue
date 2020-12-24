<template>
    <section>
        <!--- SHOW CONTROLS WITH SORTABLE --->
        <draggable
            :class="draggableClasses"
            ghost-class="ghost"
            :handle="dragControlHandle"
            :list="row.controls"
            :group="dragGroup"
        >

            <ControlView v-for="control in rowControls"
                         :key="control.uniqueId"
                         :control="control"
                         :parent-id="row.uniqueId" />

            <p v-if="!hasControls">
                Droppable Zone / Controls will be showed here...
            </p>
        </draggable>

        <!-- Add Control -->
        <AddControlToRowControl
            :row="row"
        />
    </section>
</template>

<script lang="ts">

// @ts-ignore
import {ROW_VIEW_MIXIN} from "@/mixins/row-view-mixin";

/**
 * @property {Object} section
 * @property {Object} rows RowId - RowData
 * @property {Object} controls ControlId - ControlData
 * @property {Array} section.rows
 * @property {Array} section.controls
 */
export default {
    name: "TabContentRowView",
    mixins: [ROW_VIEW_MIXIN],
}
</script>