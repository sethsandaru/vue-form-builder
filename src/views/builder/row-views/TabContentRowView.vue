<template>
    <section>
        <div class="pl-15">
            <button :class="styles.BUTTON.INFO" class="mr-15">
                Tab Settings
            </button>
            <button :class="styles.BUTTON.DANGER" @click="deleteRow">
                Delete Tab
            </button>
        </div>

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

<script lang="ts">
    import Vue from 'vue';

    // @ts-ignore
    import {ROW_VIEW_MIXIN} from "@/mixins/row-view-mixin";

    /**
     * @property {Object} section
     * @property {Object} rows RowId - RowData
     * @property {Object} controls ControlId - ControlData
     * @property {Array} section.rows
     * @property {Array} section.controls
     */
    export default Vue.extend({
        name: "TabContentRowView",
        mixins: [ROW_VIEW_MIXIN],
        methods: {
            /**
             * [CLICK] Click to remove the tab (row)
             * @see SECTION_VIEW_MIXINS.deleteRow
             */
            deleteRow() {
                if (!confirm('Do you really want to remove this tab?')) {
                    return
                }

                // @ts-ignore
                this.$emit('delete-row', this.row, this.section)
            },
        },
    })
</script>