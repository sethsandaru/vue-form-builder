<template>
    <div class="section-config">
        <div class="buttons">
            <button :class="styles.BUTTON.PRIMARY"
                    title="Push Up"
                    @click="pushUp"
                    v-html="$form.getIcon('arrowUp')"></button>

            <button :class="styles.BUTTON.SECONDARY"
                    title="Push Down"
                    @click="pushDown"
                    v-html="$form.getIcon('arrowDown')"></button>

            <button :class="styles.BUTTON.INFO" @click="openConfiguration">
                <span v-html="$form.getIcon('cog')"></span>
                <span>Configuration</span>
            </button>

            <button :class="styles.BUTTON.DANGER" @click="deleteSection">
                <span v-html="$form.getIcon('trash')"></span>
                <span>Delete</span>
            </button>
        </div>
    </div>
</template>

<script>
    import {SECTION_SORT_MIXINS} from "@/mixins/section-sort-mixins";
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";
    import {EVENT_CONSTANTS} from "@/configs/events";
    import SidebarRenderer from "@/libraries/sidebar-renderer.class";
    import SidebarSectionConfiguration from "@/views/builder/sidebar-config-views/SidebarSectionConfiguration";

    export default {
        name: "SectionNavigationBar",
        mixins: [SECTION_SORT_MIXINS, STYLE_INJECTION_MIXIN],
        props: {
            section: {
                type: Object,
                required: true,
            }
        },
        methods: {
            /**
             * Submit to delete a Section
             */
            deleteSection() {
                if (this.section.rows.length > 0) {
                    if (!confirm("This section contains row(s). Are you sure? Everything is gone and can't be recovered after deleted.")) {
                        return
                    }
                }

                // submit to delete
                this.$formEvent.$emit(EVENT_CONSTANTS.BUILDER.SECTION.DELETE, this.section.uniqueId)
            },

            /**
             * Tell the sidebar to open so we can configure our Section =))
             */
            openConfiguration() {
                this.$formEvent.$emit(EVENT_CONSTANTS.BUILDER.SIDEBAR.OPEN, this.section.uniqueId)
            },

            /**
             * We need this special event to know when the sidebar is opened
             * Therefore, we will render the sidebar and turn on the border (current editing section)
             */
            configurationOpened(runnerId) {
                if (this.section.uniqueId !== runnerId) {
                    return
                }

                // render sidebar and turn on the border
                this.renderSidebar()
                this.$emit('active', true) // call to parent to let it know this section is currently editing..
            },

            /**
             * Emitting the configuration to render the Section-Config-Sidebar
             */
            renderSidebar() {
                this.$formEvent.$emit(EVENT_CONSTANTS.BUILDER.SIDEBAR.INJECT, new SidebarRenderer(
                    this.section.uniqueId,
                    SidebarSectionConfiguration,
                    this.section
                ));
            },

            /**
             * Handle Saving the Form Configuration
             * @param {string} runnerId
             * @param {Object} data
             */
            saveConfiguration(runnerId, data) {
                // does it out of scope? if it does, stop
                if (runnerId !== this.section.uniqueId) {
                    return
                }

                let newValue = Object.assign({}, this.section, data)
                this.$formEvent.$emit(EVENT_CONSTANTS.BUILDER.SECTION.UPDATE, newValue)
            },

            /**
             * Save and close
             * @param runnerId
             * @param data
             */
            saveAndClose(runnerId, data) {
                // does it out of scope? if it does, stop
                if (runnerId !== this.section.uniqueId) {
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
            this.$formEvent.$on(EVENT_CONSTANTS.BUILDER.SIDEBAR.SAVE, this.saveConfiguration)
            this.$formEvent.$on(EVENT_CONSTANTS.BUILDER.SIDEBAR.SAVE_AND_CLOSE, this.saveAndClose)
            this.$formEvent.$on(EVENT_CONSTANTS.BUILDER.SIDEBAR.AFTER_CLOSED, this.removeActive)
            this.$formEvent.$on(EVENT_CONSTANTS.BUILDER.SIDEBAR.OPENED, this.configurationOpened)
        }
    }
</script>