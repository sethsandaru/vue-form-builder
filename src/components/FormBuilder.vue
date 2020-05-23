<template>
    <div :class="[styles.CONTAINER.FLUID, 'form-padding', 'vue-form-builder']">
        <!-- top configuration -->
        <FormConfiguration v-model="formData.formConfig" />

        <!-- sections info -->
        <SectionContainer v-for="(sectionData) in sortedSections"
                          :section="sectionData"
                          :rows="formData.rows"
                          :controls="formData.controls"
                          :key="sectionData.uniqueId" />

        <!-- below all -->
        <AddSectionControl @addSectionNotify="addSection" />

        <!-- global stuff -->
        <GlobalSidebar />

        <p class="copyright" v-text="copyrightText"></p>
    </div>
</template>

<script>
    import {STYLES} from "@/configs/styles";
    import AddSectionControl from "@/views/builder/AddSectionControl";
    import {MAIN_CONSTANTS} from "@/configs";
    import SectionContainer from "@/views/builder/SectionContainer";
    import FormBuilderBusiness from "@/mixins/form-builder-mixins";
    import FormConfiguration from "@/views/builder/FormConfiguration";
    import GlobalSidebar from "@/views/builder/GlobalSidebar";

    export default {
        name: "FormBuilder",
        components: {GlobalSidebar, FormConfiguration, SectionContainer, AddSectionControl},
        mixins: FormBuilderBusiness,
        data: () => ({
            formData: {
                formConfig: {},
                sections: {},
                rows: {},
                controls: {},
            },
        }),

        created() {
            if (this.value && typeof this.value === 'object') {
                this.mapping(this.value)
                this.doSortSection()
            } else {
                this.createDefaultData()
            }
        },

        computed: {
            /**
             * Copyright Text
             * @returns {string}
             */
            copyrightText() {
                return MAIN_CONSTANTS.COPYRIGHT
            }
        }
    }
</script>

<style scoped>
    .copyright {
        padding-top: 50px;
        color: rgba(0,0,0,.4);
        font-size: 13px;
        text-align: center;
    }

    .form-padding {
        padding-top: 20px;
    }
</style>