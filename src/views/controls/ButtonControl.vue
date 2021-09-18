<template>
    <button :id="control.uniqueId"
            :class="buttonClasses"
            :name="control.name"
            :type="control.buttonType || 'button'"
            :disabled="isValidationRunning"

            @click="clickedHandle"
    >
        <svg v-show="isValidationRunning" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: inline-block; padding-right: 10px;" width="30px" height="30px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" fill="none" stroke="#93dbe9" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
              <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
            </circle>
        </svg>

        {{buttonText}}
    </button>
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
        data: () => ({
            isValidationRunning: false,
        }),
        methods: {
            /**
             * What should we do if user clicked?
             *  - Validation
             *  - Emit
             */
            clickedHandle() {
                if (!!this.valueContainer) {
                    return console.log("CLICKED SUBMIT BUTTON", this.control.uniqueId)
                }

                if (this.control.isRunValidation) {
                    this.isValidationRunning = true
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
                this.isValidationRunning = false

                // can be submit after validation
                this.submit()
            },

            /**
             * [VALIDATION-FAILED-EMIT] Garbage collecting...
             */
            processFailedValidation() {
                this.isValidationRunning = false
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
            },

            buttonText() {
                if (this.isValidationRunning) {
                    return "Validating..."
                }

                return this.control.label
            },
        },

        created() {
            this.$formEvent.$on(EVENT_CONSTANTS.RENDERER.VALIDATION_OK, this.continueProcessAfterValidationOk)
            this.$formEvent.$on(EVENT_CONSTANTS.RENDERER.VALIDATION_FAILED, this.processFailedValidation)
        },
    }
</script>