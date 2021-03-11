<template>
    <div class="form-configuration-block pbottom-10">
        <button
            :class="styles.BUTTON.PRIMARY"
            @click="open"
            :disabled="!permissions.canEditFormConfigurations"
        >
            <span v-html="$form.getIcon('cog')"></span>
            <span>Form Configurations</span>
        </button>
    </div>
</template>

<script>
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";
    import {EVENT_CONSTANTS} from "@/configs/events";
    import SidebarRenderer from "@/libraries/sidebar-renderer.class";
    import SidebarFormConfiguration from "@/views/builder/sidebar-config-views/SidebarFormConfiguration";

    const RUNNER_ID = 'FormConfiguration'

    export default {
        name: "FormConfiguration",
        components: {SidebarFormConfiguration},
        mixins: [STYLE_INJECTION_MIXIN],
        props: {
            value: Object,
            permissions: Object
        },
        model: {
            event: 'change',
            props: 'value'
        },
        methods: {
            /**
             * Open Configuration Sidebar
             * @desc Fire an Event to GlobalSidebar
             */
            open() {
                this.$formEvent.$emit(EVENT_CONSTANTS.BUILDER.SIDEBAR.OPEN, RUNNER_ID)
            },

            /**
             * Emit an Event to Render Sidebar Body
             * @desc Fire an Event to GlobalSidebar
             */
            renderSidebar() {
                this.$formEvent.$emit(EVENT_CONSTANTS.BUILDER.SIDEBAR.INJECT, new SidebarRenderer(
                    RUNNER_ID,
                    SidebarFormConfiguration,
                    this.value
                ));
            },

            /**
             * Handle Saving the Form Configuration
             * @param {string} runnerId
             * @param {Object} data
             */
            saveConfiguration(runnerId, data) {
                // does it out of scope? if it does, stop
                if (runnerId !== RUNNER_ID) {
                    return
                }

                let newValue = Object.assign({}, this.value, data)
                this.$emit('change', newValue) // run this to update v-model
            },

            /**
             * After sidebar is opened - we will render the GlobalSidebar's body
             * @param runnerId
             */
            afterOpenedSidebar(runnerId) {
                // does it out of scope? if it does, stop
                if (runnerId !== RUNNER_ID) {
                    return
                }

                // render sidebar if its from FormConfiguration
                this.renderSidebar()
            },
        },

        created() {
            // listen to GlobalSidebar Event...
            this.$formEvent.$on(EVENT_CONSTANTS.BUILDER.SIDEBAR.SAVE, this.saveConfiguration);
            this.$formEvent.$on(EVENT_CONSTANTS.BUILDER.SIDEBAR.SAVE_AND_CLOSE, this.saveConfiguration);
            this.$formEvent.$on(EVENT_CONSTANTS.BUILDER.SIDEBAR.OPENED, this.renderSidebar)
        }
    }
</script>
