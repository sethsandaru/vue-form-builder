<template>
    <button :id="control.uniqueId"
            :class="buttonClasses"
            :name="control.name"
            v-text="control.label"
            :type="control.buttonType || 'button'"
            @click="clickedHandle"
    ></button>
</template>

<script>
    import {CONTROL_FIELD_EXTEND_MIXIN} from "@/mixins/control-field-extend-mixin";
    import {EVENT_CONSTANTS} from "@/configs/events";
    import {GLOBAL_CONFIG} from "@/configs/global";

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
                    this.$formEvent.$emit(EVENT_CONSTANTS.RENDERER.RUN_VALIDATION, true)
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

            /**
             * Submitting The Form
             * Rules:
             *  - Had Event Code & Event Data => Submit By Emitting
             *  - Empty Event Code & Event Data, Had <Form>, Had type = "submit" => Submit by Form Request
             */
            submit() {
                if (this.control.emitEventCode && this.control.emitEventData) {
                    // emit to the specific emitEventCode
                    this.$formEvent.$emit(this.control.emitEventCode, this.control.emitEventData)
                    return
                }

                // triggering form-submit if exists
                // use DOM object ??
                const formDOM = document.getElementById(GLOBAL_CONFIG.rendererFormId)
                if (!formDOM || this.$el.type !== 'submit') {
                    return
                }

                formDOM.submit();
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
            this.$formEvent.$on(EVENT_CONSTANTS.RENDERER.VALIDATION_OK, this.continueProcessAfterValidationOk)
        },
    }
</script>