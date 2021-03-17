<template>
    <div class="normal-section">
        <div class="headline-block p5" v-show="section.isShowHeadline">
            <h2 :class="section.headlineAdditionalClass" v-text="section.headline"></h2>
            <p :class="section.subHeadlineAdditionalClass" v-text="section.subHeadline"></p>
        </div>

        <!--- SHOW CONTROLS WITH SORTABLE --->
        <draggable
                :class="draggableClasses"
                ghost-class="ghost"
                :handle="dragControlHandle"
                :list="section.controls"
                :group="dragGroup"
                :disabled="!permissions.canReOrderingControl"
        >

            <ControlView v-for="controlId in section.controls"
                         :key="controlId"
                         :control="controls[controlId]"
                         :parent-id="section.uniqueId"
                         :permissions="permissions"
            />

            <p v-if="!hasControl">
                Droppable Zone / Controls will be showed here...
            </p>
        </draggable>

        <!-- Add Control -->
        <AddControlControl
            v-if="permissions.canAddControl"
            :section="section"
        />
    </div>
</template>

<script>
    import {SECTION_VIEW_MIXINS} from "@/mixins/section-view-mixins";

    /**
     * @property {Object} section
     * @property {Object} rows RowId - RowData
     * @property {Object} controls ControlId - ControlData
     * @property {Array} section.rows
     * @property {Array} section.controls
     */
    export default {
        name: "NormalSectionView",
        mixins: [SECTION_VIEW_MIXINS],
        data: () => ({

        }),

    }
</script>
