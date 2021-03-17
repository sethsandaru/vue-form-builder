<template>
    <section>
        <div class="pl-15">
            <button :class="styles.BUTTON.INFO" class="mr-15" @click="openTabSetting">
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
            :disabled="!permissions.canReOrderingControl"
        >

            <ControlView
                v-for="controlId in row.controls"
                :key="controlId"
                :control="controls[controlId]"
                :parent-id="row.uniqueId"
                :permissions="permissions"
            />

            <p v-if="!hasControls">
                Droppable Zone / Controls will be showed here...
            </p>
        </draggable>

        <!-- Add Control -->
        <AddControlToRowControl
            v-if="permissions.canAddControl"
            :row="row"
        />
    </section>
</template>

<script lang="ts">
    import Vue from 'vue';

    // @ts-ignore
    import {ROW_VIEW_MIXIN} from "@/mixins/row-view-mixin";
    // @ts-ignore
    import {EVENT_CONSTANTS} from "@/configs/events";
    import ModalRenderer from "@/libraries/modal-renderer.class.ts";

    // @ts-ignore
    import TabRowConfigurationView from "@/views/builder/modal-config-views/TabRowConfigurationView";

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

            /**
             * [CLICK] Click to open the tab settings
             */
            openTabSetting() {
                // @ts-ignore
                this.$formEvent.$emit(EVENT_CONSTANTS.BUILDER.MODAL.OPEN, this.row.uniqueId);
            },

            /**
             * We need this special event to know when the sidebar is opened
             * Therefore, we will render the sidebar and turn on the border (current editing section)
             */
            configurationOpened(runnerId : string) {
                // @ts-ignore
                if (this.row.uniqueId !== runnerId) {
                    return
                }

                // render sidebar and turn on the border
                this.renderModal()
            },

            /**
             * Emitting the configuration to render the Section-Config-Modal
             */
            renderModal() {
                // @ts-ignore
                const uniqueId : string = this.row.uniqueId;
                // @ts-ignore
                const rowObj : object = this.row;

                const modalRendererInstance = new ModalRenderer(
                    uniqueId,
                    TabRowConfigurationView,
                    rowObj
                )

                // @ts-ignore
                this.$formEvent.$emit(EVENT_CONSTANTS.BUILDER.MODAL.INJECT, modalRendererInstance, "Tab Configuration");
            },

            /**
             * Handle Saving the Form Configuration
             * @param {string} runnerId
             * @param {Object} data
             */
            saveConfiguration(runnerId : string, data : any) {
                // does it out of scope? if it does, stop
                // @ts-ignore
                if (runnerId !== this.row.uniqueId) {
                    return
                }

                // @ts-ignore
                let newValue = Object.assign({}, this.row, data)
                // @ts-ignore
                this.$formEvent.$emit(EVENT_CONSTANTS.BUILDER.SECTION.UPDATE, newValue)
            },

            /**
             * Save and close
             * @param runnerId
             * @param data
             */
            saveAndClose(runnerId : string, data : any) {
                // does it out of scope? if it does, stop
                // @ts-ignore
                if (runnerId !== this.row.uniqueId) {
                    return
                }

                this.saveConfiguration(runnerId, data)
            },

            /**
             * After Sidebar closed => Remove the Active Class
             */
            removeActive() {
                this.$emit('active', false) // call to parent to let it know this section is finished edit
            }
        },

        created() {
            // listen to after-closed from GlobalSidebar
            // @ts-ignore
            this.$formEvent.$on(EVENT_CONSTANTS.BUILDER.MODAL.SAVE, this.saveConfiguration)
            // @ts-ignore
            this.$formEvent.$on(EVENT_CONSTANTS.BUILDER.MODAL.SAVE_AND_CLOSE, this.saveAndClose)
            // @ts-ignore
            this.$formEvent.$on(EVENT_CONSTANTS.BUILDER.MODAL.AFTER_CLOSED, this.removeActive)
            // @ts-ignore
            this.$formEvent.$on(EVENT_CONSTANTS.BUILDER.MODAL.OPENED, this.configurationOpened)
        },
    })
</script>