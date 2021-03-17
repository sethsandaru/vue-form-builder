<template>
    <div :class="[styles.CONTAINER.FLUID, 'form-padding', 'vue-form-builder']">
        <!-- top configuration -->
        <FormConfiguration
            :permissions="permissions"
            v-model="formData.formConfig"
        />

        <!-- form headline -->
        <div class="form-headline-container" v-show="formData.formConfig.isShowHeadline">
            <h1 v-text="formData.formConfig.headline"></h1>
            <p v-text="formData.formConfig.subHeadline"></p>
        </div>

        <!-- sections of the form -->
        <SectionContainer
            v-for="(sectionData) in sortedSections"
            :section="sectionData"
            :rows="formData.rows"
            :controls="formData.controls"
            :key="sectionData.uniqueId"
            :permissions="permissions"
        />

        <!-- below all -->
        <AddSectionControl
            v-if="permissions.canAddSection"
            @addSectionNotify="addSection"
        />

        <!-- global stuff -->
        <GlobalSidebar
            :formData="formData"
            :permissions="permissions"
        />
        <GlobalModal
            :formData="formData"
            :permissions="permissions"
        />

        <hr>

        <p class="copyright-text" v-text="copyrightText"></p>
    </div>
</template>

<script>
    import AddSectionControl from "@/views/builder/add-controls/AddSectionControl";
    import {MAIN_CONSTANTS} from "@/configs";
    import SectionContainer from "@/views/builder/SectionContainer";
    import FormBuilderBusiness from "@/mixins/form-builder-mixins";
    import FormConfiguration from "@/views/builder/FormConfiguration";
    import GlobalSidebar from "@/views/builder/GlobalSidebar";
    import GlobalModal from "@/views/builder/GlobalModal";
    import DefaultPermission from "@/configs/roles";

    export default {
        name: "FormBuilder",
        components: {
            GlobalModal,
            GlobalSidebar,
            FormConfiguration,
            SectionContainer,
            AddSectionControl
        },
        mixins: FormBuilderBusiness,

        props: {
            permissions: {
                type: Object,
                default: () => {
                    return DefaultPermission
                }
            }
        },

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
