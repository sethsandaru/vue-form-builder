<template>
    <div class="section-container">

        <component :is="sectionViewComponent"
                   :section="section"
                   :rows="rows"
                   :controls="controls"
                   :key="section.uniqueId"
                   :value-container="valueContainer"
                   :validation-errors="validationErrors"
        />

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
            valueContainer: Object,
            validationErrors: Object,
        },

        computed: {
            sectionViewComponent() {
                return SECTION_TYPES[this.section.type].rendererView
            }
        },
    }
</script>

<style scoped>
</style>