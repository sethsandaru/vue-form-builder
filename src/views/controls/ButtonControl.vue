<template>
    <button :id="control.uniqueId"
            :class="buttonClasses"
            :name="control.name"
            v-text="control.label"
            @click="clickedHandle"
    ></button>
</template>

<script>
    import {CONTROL_FIELD_EXTEND_MIXIN} from "@/mixins/control-field-extend-mixin";
    import {EVENT_CONSTANTS} from "@/configs/events";

    /**
     * Button Control
     * Usage:
     *  - label => button name
     *  - buttonType
     *  - buttonClass
     *  - additionalFieldClass
     */
    export default {
        name: "ButtonControl",
        mixins: [CONTROL_FIELD_EXTEND_MIXIN],
        methods: {
            /**
             * What should we do if user clicked?
             *  - Validation
             *  - Emit
             */
            clickedHandle() {
                if (this.control.isRunValidation) {
                    this.$emit(EVENT_CONSTANTS.RENDERER.RUN_VALIDATION, true)
                } else {
                    // no need to validation => submit
                    this.submit()
                }
            },

            /**
             * [VALIDATION-OK-EMIT] Continue to process
             */
            continueProcessAfterValidationOk() {
                // can be submit after validation
                this.submit()
            },

            submit() {
                // emit to the specific emitEventCode
                this.$emit(this.control.emitEventCode, this.control.emitEventData)
            }
        },

        computed: {
            buttonClasses() {
                return [
                    this.control.buttonClass,
                    this.control.additionalFieldClass
                ]
            }
        },

        created() {
            this.$on(EVENT_CONSTANTS.RENDERER.VALIDATION_OK, this.continueProcessOkAfterValidation)
        },
    }
</script>