<template>
    <div class="section-container">

        <component :is="sectionViewComponent"
                   :section="section"
                   :rows="rows"
                   :controls="controls"
                   :key="section.uniqueId" />

    </div>
</template>

<script>
    import {SECTION_TYPES} from "@/configs/section";

    export default {
        name: "SectionContainer",
        props: {
            section: Object,
            rows: Object,
            controls: Object,
        },

        computed: {
            sectionViewComponent() {
                return SECTION_TYPES[this.section.type].builderView
            }
        }
    }
</script>

<style scoped>
    .section-container {

    }
</style>