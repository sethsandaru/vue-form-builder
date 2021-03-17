<template>
    <div class="sidebar">
        <span class="close"
              @click="close"
              v-html="$form.getIcon('close', '24px', '24px', '#000')">
        </span>

        <!--- For dynamic purpose --->
        <component v-if="component"

                   :is="component"
                   :dataPackage="dynamicData"
                   :formData="formData"
                   :permissions="permissions"

                   @save="save"
                   @saveAndClose="saveAndClose"
                   @close="close"
        />
    </div>
</template>

<script>
    import {EVENT_CONSTANTS} from "@/configs/events";
    import {ALERT_DIALOG} from "@/libraries/alert-dialog";

    const SIDEBAR_WIDTH_SIZE = "300px"

    export default {
        name: "GlobalSidebar",
        props: {
            formData: {
                type: Object,
                default() {
                    return {}
                }
            },
            permissions: Object
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
                this.$el.style.width = SIDEBAR_WIDTH_SIZE
                document.getElementsByTagName("body")[0].style.marginRight = SIDEBAR_WIDTH_SIZE

                // turn on flag and notify watcher that sidebar is opened
                // `runnerId` will be sent back in order to make sure other components will touch yours
                this.$formEvent.$emit(EVENT_CONSTANTS.BUILDER.SIDEBAR.OPENED, runnerId)
                this.isOpen = true
            },

            /**
             * Save - Emitting data to the listener but do not close the sidebar
             * @hook Emit Data to the Listener
             */
            save(specialData = {}) {
                this.$formEvent.$emit(
                    EVENT_CONSTANTS.BUILDER.SIDEBAR.SAVE,
                    this.runnerId,
                    Object.assign({}, specialData)
                )
            },

            /**
             * Save event with close the right sidebar
             */
            saveAndClose(specialData = {}) {
                this.$formEvent.$emit(
                    EVENT_CONSTANTS.BUILDER.SIDEBAR.SAVE_AND_CLOSE,
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
                this.$el.style.width = 0
                document.getElementsByTagName("body")[0].style.marginRight = 0

                // fire event after closed (if emit == true)
                this.$formEvent.$emit(
                    EVENT_CONSTANTS.BUILDER.SIDEBAR.AFTER_CLOSED,
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
            this.$formEvent.$on(EVENT_CONSTANTS.BUILDER.SIDEBAR.INJECT, this.updateBody)

            // listen to open
            this.$formEvent.$on(EVENT_CONSTANTS.BUILDER.SIDEBAR.OPEN, this.open)
        }
    }
</script>
