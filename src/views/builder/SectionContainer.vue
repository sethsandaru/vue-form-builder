<template>
    <div class="section-container">
        <SectionConfig :section="section" />

        <component :is="sectionViewComponent"
                   :section="section"
                   :rows="rows"
                   :controls="controls"
                   :key="section.uniqueId" />

    </div>
</template>

<script>
    import {SECTION_TYPES} from "@/configs/section";
    import SectionConfig from "@/views/builder/SectionConfig";

    export default {
        name: "SectionContainer",
        components: {SectionConfig},
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