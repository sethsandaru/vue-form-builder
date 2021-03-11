<template>
    <div class="section-container" :class="{'active': isDoingConfiguration}">
        <SectionNavigationBar
            :section="section"
            :permissions="permissions"

            @active="setActive"
        />

        <component
            :is="sectionViewComponent"
            :section="section"
            :rows="rows"
            :controls="controls"
            :key="section.uniqueId"
            :permissions="permissions"
        />
    </div>
</template>

<script>
    import {SECTION_TYPES} from "@/configs/section";
    import SectionNavigationBar from "@/views/builder/SectionNavigationBar";

    export default {
        name: "SectionContainer",
        components: {SectionNavigationBar},
        props: {
            section: Object,
            rows: Object,
            controls: Object,
            permissions: Object
        },
        data: () => ({
            isDoingConfiguration: false
        }),
        methods: {
            /**
             * Set Active in order to show the holder of current editing section
             * @param val
             */
            setActive(val = true) {
                this.isDoingConfiguration = val
            }
        },

        computed: {
            sectionViewComponent() {
                return SECTION_TYPES[this.section.type].builderView
            }
        },
    }
</script>

<style scoped>
</style>