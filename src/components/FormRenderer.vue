<template>
    <div :class="[styles.CONTAINER.FLUID, 'form-padding', 'vue-form-renderer']">

        <!-- form headline -->
        <div class="form-headline-container" v-show="formData.formConfig.isShowHeadline">
            <h1 v-text="formData.formConfig.headline"></h1>
            <p v-text="formData.formConfig.subHeadline"></p>
        </div>

        <!-- sections of the form -->
        <SectionContainer v-for="(sectionData) in sortedSections"
                          :section="sectionData"
                          :rows="formData.rows"
                          :controls="formData.controls"
                          :key="sectionData.uniqueId"
                          :value-container="valueContainer"
                          :validation-errors="validationErrors"
        />

    </div>
</template>

<script>
    import FormRendererBusiness from "@/mixins/form-renderer-mixins";
    import SectionContainer from "@/views/renderer/SectionContainer";

    export default {
        name: "FormRenderer",
        components: {SectionContainer},
        mixins: FormRendererBusiness,
        data: () => ({
            formData: null
        }),

    }
</script>

<style scoped>

</style>