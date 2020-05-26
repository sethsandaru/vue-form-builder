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
                   @save="save"
                   @close="close"
        />
    </div>
</template>

<script>
    import {EVENT_CONSTANTS} from "@/configs/events";

    export default {
        name: "GlobalSidebar",
        data: () => ({
            component: null,
            dynamicData: {},
            runnerId: null
        }),
        methods: {
            /**
             * Open the Right Sidebar
             */
            open() {
                this.$el.style.width = "300px"
                document.getElementsByTagName("body")[0].style.marginRight = "300px";
            },

            /**
             * Save - Emitting data to the listener but do not close the sidebar
             * @hook Emit Data to the Listener
             */
            save(specialData = {}) {
                this.$formEvent.$emit(
                    EVENT_CONSTANTS.BUILDER.SIDEBAR.AFTER_CLOSED,
                    this.runnerId,
                    Object.assign({}, this.dynamicData, specialData)
                )
            },

            /**
             * Close the right sidebar
             * @hook After Closed - Fire an Event to notify (maybe someone will listen :v )
             */
            close(emitData = false, specialData = {}) {
                this.$el.style.width = 0
                document.getElementsByTagName("body")[0].style.marginRight = 0

                // fire event after closed (if emit == true)
                if (emitData) {
                    this.save(specialData)
                }

                // remove renderer
                this.component = null
                this.dynamicData = {}
                this.runnerId = null
            },

            /**
             * This method will help us inject our Component into the Sidebar Body
             * @param {SidebarRenderer} rendererInfo - data that will be assigned for the Component
             */
            updateBody(rendererInfo) {
                this.dynamicData = Object.assign({}, this.dynamicData, rendererInfo.data)
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
