<template>
    <div :class="containerClass">
        <!-- top configuration -->

        <!-- sections info -->
        <SectionContainer v-for="(sectionData) in sortedSections"
                          :section="sectionData"
                          :rows="formData.rows"
                          :controls="formData.controls"
                          :key="sectionData.uniqueId" />

        <!-- below all -->
        <AddSectionControl @addSectionNotify="addSection" />


        <p class="copyright" v-text="copyrightText"></p>
    </div>
</template>

<script>
    import {STYLES} from "@/configs/styles";
    import AddSectionControl from "@/views/builder/AddSectionControl";
    import {MAIN_CONSTANTS} from "@/configs";
    import SectionContainer from "@/views/builder/SectionContainer";
    import FormBuilderBusiness from "@/mixins/form-builder-mixins";

    export default {
        name: "FormBuilder",
        components: {SectionContainer, AddSectionControl},
        mixins: FormBuilderBusiness,
        props: {
            value: Object,
        },
        model: {
            event: "change",
            props: "value"
        },
        data: () => ({
            formData: {
                formConfig: {},
                sections: {},
                rows: {},
                controls: {},
            },
        }),

        methods: {

        },

        created() {
            if (this.value && typeof this.value === 'object') {
                this.mapping(this.value)
                this.doSortSection()
            }
        },

        computed: {
            /**
             *  Main Container Class for the Form.
             */
            containerClass() {
                return STYLES.CONTAINER.FLUID
            },

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
</style>