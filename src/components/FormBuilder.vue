<template>
    <div :class="containerClass">
        <!-- top configuration -->

        <!-- sections info -->

        <!-- below all -->
        <AddSectionControl @addSectionNotify="addSection" />


        <p class="copyright" v-text="copyrightText"></p>
    </div>
</template>

<script>
    import {STYLES} from "@/configs/styles";
    import AddSectionControl from "@/views/builder/AddSectionControl";
    import {MAIN_CONSTANTS} from "@/configs";

    export default {
        name: "FormBuilder",
        components: {AddSectionControl},
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
                controls: [],
            },
        }),
        methods: {
            /**
             * Push new Section Item into the Big Data
             */
            addSection() {

            },
        },

        created() {
            if (this.value) {
                // TODO: merge the old value into the current structure
                //
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