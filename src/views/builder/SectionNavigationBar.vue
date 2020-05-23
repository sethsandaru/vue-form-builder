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

            <button :class="styles.BUTTON.INFO">
                <span v-html="$form.getIcon('cog')"></span>
                <span>Configuration</span>
            </button>

            <button :class="styles.BUTTON.DANGER" @click="deleteSection">
                <span>Remove Section</span>
            </button>
        </div>
    </div>
</template>

<script>
    import {SECTION_SORT_MIXINS} from "@/mixins/section-sort-mixins";
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";
    import {EVENT_CONSTANTS} from "@/configs/events";

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
            }
        }
    }
</script>

<style scoped>

</style>