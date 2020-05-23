<template>
    <div class="form-configuration-block pbottom-10">
        <button :class="styles.BUTTON.PRIMARY" @click="open">
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

    export default {
        name: "FormConfiguration",
        components: {SidebarFormConfiguration},
        mixins: [STYLE_INJECTION_MIXIN],
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
                this.renderSidebar()
                this.$formEvent.$emit(EVENT_CONSTANTS.BUILDER.SIDEBAR.OPEN, true)
            },

            /**
             * Emit an Event to Render Sidebar Body
             * @desc Fire an Event to GlobalSidebar
             */
            renderSidebar() {
                this.$formEvent.$emit(EVENT_CONSTANTS.BUILDER.SIDEBAR.INJECT, new SidebarRenderer(
                    'FormConfiguration',
                    SidebarFormConfiguration,
                    this.value
                ));
            }
        }
    }
</script>
