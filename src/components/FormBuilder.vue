<template>
    <div :class="containerClass">
        <!-- top configuration -->

        <!-- sections info -->
        <SectionContainer v-for="(sectionData, index) in formData.sections"
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
    import {dataApplier} from "@/libraries/applier";
    import {createNewSection} from "@/configs/section";
    import SectionContainer from "@/views/builder/SectionContainer";

    export default {
        name: "FormBuilder",
        components: {SectionContainer, AddSectionControl},
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
                sections: [],
                rows: {},
                controls: {},
            },
        }),
        methods: {
            /**
             * Push new Section Item into the Big Data
             */
            addSection(sectionType) {
                this.formData.sections.push(
                    createNewSection(sectionType)
                )
            },

            /**
             * Do Mapping Before Rendering
             */
            mapping(value) {
                this.formData = Object.assign({}, this.formData, dataApplier(value));
            }
        },

        created() {
            if (this.value && typeof this.value === 'object') {
                this.mapping(this.value)
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