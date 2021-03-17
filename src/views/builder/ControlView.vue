<template>
    <div :class="[control.containerClass, 'control-view-wrapper', control.additionalContainerClass]">

        <div class="control-view" :class="{'active': isActive}">
            <!-- render the label -->
            <ControlLabel v-show="control.isShowLabel" :control="control" />

            <!-- render the exact field -->
            <component :is="controlComponent"
                       :control="control"
            />

        </div>

        <!-- render the right option to config/drag/... -->
        <ControlOption
            @delete="deleteControl"
            @config="openConfiguration"
            :permissions="permissions"
        />
    </div>
</template>

<script>
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";
    import ControlLabel from "@/views/builder/control-views/ControlLabel";
    import {CONTROLS} from "@/configs/controls";
    import ControlOption from "@/views/builder/control-views/ControlOption";
    import {EVENT_CONSTANTS} from "@/configs/events";
    import SidebarRenderer from "@/libraries/sidebar-renderer.class";
    import SidebarControlConfiguration from "@/views/builder/sidebar-config-views/SidebarControlConfiguration";

    export default {
        name: "ControlView",
        components: {ControlOption, ControlLabel},
        mixins: [STYLE_INJECTION_MIXIN],
        props: {
            control: {
                type: Object,
                required: true
            },
            parentId: {
                type: String,
                required: true,
            },
            permissions: Object
        },

        data: () => ({
            isActive: false
        }),

        methods: {
            /**
             * [Emit-from-children] ControlOption will emit this if user want to delete the current control
             */
            deleteControl() {
                // EMIT to FormBuilder to let it delete the control for us
                this.$formEvent.$emit(
                    EVENT_CONSTANTS.BUILDER.CONTROL.DELETE,
                    this.parentId,
                    this.control.uniqueId
                )
            },

            /**
             * [Emit-from-children] ControlOption will emit this when user clicked "Cog" button
             * We're opening the sidebar configuration....
             */
            openConfiguration() {
                // If the current one active => no trigger...
                if (this.isActive) {
                    return
                }

                this.$formEvent.$emit(EVENT_CONSTANTS.BUILDER.SIDEBAR.OPEN, this.control.uniqueId)
            },

            /**
             * [Emit-from-GlobalSidebar]
             */
            openedConfiguration(runnerId) {
                if (runnerId !== this.control.uniqueId) {
                    return
                }

                // eligible to render sidebar
                this.isActive = true
                this.renderSidebar()
            },

            /**
             * Push an Event to GlobalSidebar to Render the Body :D
             */
            renderSidebar() {
                this.$formEvent.$emit(EVENT_CONSTANTS.BUILDER.SIDEBAR.INJECT, new SidebarRenderer(
                    this.control.uniqueId,
                    SidebarControlConfiguration,
                    this.control
                ));
            },

            /**
             * Received closed notification from sidebar
             */
            closedConfiguration() {
                this.isActive = false
            },

            /**
             * Save Control Configuration Data
             * @param {String} runnerId - Control ID
             * @param {Object} controlData - Control Object (After edited in the sidebar)
             */
            saveConfiguration(runnerId, controlData) {
                this.$formEvent.$emit(EVENT_CONSTANTS.BUILDER.CONTROL.UPDATE, runnerId, controlData)
            }
        },

        computed: {
            /**
             * This accessor will get the component object to let us inject the right control
             */
            controlComponent() {
                // validate input
                if (!CONTROLS[this.control.type] || !CONTROLS[this.control.type].fieldComponent) {
                    throw new TypeError(`Control Type Mapping failed => Can't be rendered. Reason: Your control type ${this.control.type} doesn't have 'fieldComponent' property`)
                }

                return CONTROLS[this.control.type].fieldComponent
            }
        },

        created() {
            // listen to GlobalSidebar
            this.$formEvent.$on(EVENT_CONSTANTS.BUILDER.SIDEBAR.SAVE, this.saveConfiguration)
            this.$formEvent.$on(EVENT_CONSTANTS.BUILDER.SIDEBAR.SAVE_AND_CLOSE, this.saveConfiguration)
            this.$formEvent.$on(EVENT_CONSTANTS.BUILDER.SIDEBAR.AFTER_CLOSED, this.closedConfiguration)
            this.$formEvent.$on(EVENT_CONSTANTS.BUILDER.SIDEBAR.OPENED, this.openedConfiguration)
        },
    }
</script>