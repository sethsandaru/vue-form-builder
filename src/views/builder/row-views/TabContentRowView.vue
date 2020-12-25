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

            <ControlView v-for="controlId in row.controls"
                         :key="controlId"
                         :control="controls[controlId]"
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

<script>

    // @ts-ignore
    import {ROW_VIEW_MIXIN} from "@/mixins/row-view-mixin";
    import mixins from 'vue-typed-mixins'

    /**
     * @property {Object} section
     * @property {Object} rows RowId - RowData
     * @property {Object} controls ControlId - ControlData
     * @property {Array} section.rows
     * @property {Array} section.controls
     */
    export default {
        name: "TabContentRowView",
        mixins: [ROW_VIEW_MIXIN]
    }
</script>