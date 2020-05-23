<template>
    <div class="section-container">
        <SectionNavigationBar :section="section" />

        <component :is="sectionViewComponent"
                   :section="section"
                   :rows="rows"
                   :controls="controls"
                   :key="section.uniqueId" />

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