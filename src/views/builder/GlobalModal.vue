<template>
    <div id="vueFormBuilderSuperGreatModal" class="modal">

        <!-- Modal content -->
        <div class="modal-content">
            <span class="close"
                  @click="close"
                  v-html="$form.getIcon('close', '24px', '24px', '#000')">
            </span>

            <!--- For dynamic purpose --->
            <component
                v-if="component"
                :is="component"
                :dataPackage="dynamicData"
                :formData="formData"
                @save="save"
                @saveAndClose="saveAndClose"
                @close="close"
            />
        </div>

    </div>
</template>

<script>
    import {EVENT_CONSTANTS} from "@/configs/events";
    import {ALERT_DIALOG} from "@/libraries/alert-dialog";

    const MODAL_EVENT = EVENT_CONSTANTS.BUILDER.MODAL

    export default {
        name: "GlobalModal",
        props: {
            formData: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data: () => ({
            component: null,
            dynamicData: {},
            runnerId: null,
            isOpen: false,
        }),
        methods: {
            /**
             * Open the Right Sidebar
             */
            open(runnerId) {
                if (this.isOpen) {
                    ALERT_DIALOG.show('Please close the current active sidebar before open another')
                    return
                }

                // set size
                this.$el.style.display = "block";

                // turn on flag and notify watcher that sidebar is opened
                // `runnerId` will be sent back in order to make sure other components will touch yours
                this.$formEvent.$emit(MODAL_EVENT.OPENED, runnerId)
                this.isOpen = true
            },

            /**
             * Save - Emitting data to the listener but do not close the sidebar
             * @hook Emit Data to the Listener
             */
            save(specialData = {}) {
                this.$formEvent.$emit(
                    MODAL_EVENT.SAVE,
                    this.runnerId,
                    Object.assign({}, specialData)
                )
            },

            /**
             * Save event with close the right sidebar
             */
            saveAndClose(specialData = {}) {
                this.$formEvent.$emit(
                    MODAL_EVENT.SAVE_AND_CLOSE,
                    this.runnerId,
                    Object.assign({}, specialData)
                )

                this.close()
            },

            /**
             * Close the right sidebar
             * @hook After Closed - Fire an Event to notify (maybe someone will listen :v )
             */
            close() {
                this.$el.style.display = "none"

                // fire event after closed (if emit == true)
                this.$formEvent.$emit(
                    MODAL_EVENT.AFTER_CLOSED,
                    this.runnerId,
                    null
                )

                // remove renderer
                this.component = null
                this.dynamicData = {}
                this.runnerId = null
                this.isOpen = false
            },

            /**
             * This method will help us inject our Component into the Sidebar Body
             * @param {SidebarRenderer} rendererInfo - data that will be assigned for the Component
             */
            updateBody(rendererInfo) {
                if (this.isOpen) {
                    return
                }

                this.dynamicData = Object.assign({}, rendererInfo.data)
                this.component = rendererInfo.component
                this.runnerId = rendererInfo.runnerId
            }
        },

        created() {
            // listen to render even
            this.$formEvent.$on(MODAL_EVENT.INJECT, this.updateBody)

            // listen to open
            this.$formEvent.$on(MODAL_EVENT.OPEN, this.open)
        }
    }
</script>
