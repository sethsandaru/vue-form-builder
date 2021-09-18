import Validation from "@/libraries/validation";
import {EVENT_CONSTANTS} from "@/configs/events";
import {ALERT_DIALOG} from "@/libraries/alert-dialog";

const VALIDATION_MIXIN = {
    data: () => ({
        validationErrors: {},
    }),

    methods: {
        /**
         *
         * @param {Object} errorBucket {controlName: [array of message]}
         */
        setValidationError(errorBucket) {
            this.$formEvent.$emit(EVENT_CONSTANTS.RENDERER.VALIDATION_FAILED, true)

            // use set for reactive...
            this.$set(this, 'validationErrors', errorBucket)

            if (this.$form.validationErrorShowAlert) {
                ALERT_DIALOG.show(this.$form.validationErrorAlertText)
            }
        },

        /**
         * Run the validation process
         */
        async runValidation() {
            // always clear validation before run...
            this.$set(this, 'validationErrors', {})

            // run the validation
            const result = this.$form.Validation.run()

            // field-error handling
            if (result.errors()) {
                return this.setValidationError(result.errorBuckets)
            }

            // if we turned on the server-side validation
            if (this.isEnableServerSideValidation) {
                const isServersideValidationOk = await this.requestForServerSideValidation()
                if (!isServersideValidationOk) {
                    return;
                }
            }

            // ok emit to all listener if they want to know the validation is ok or not
            this.$formEvent.$emit(EVENT_CONSTANTS.RENDERER.VALIDATION_OK, true)
        },

        /**
         * Run the server-side validation
         *
         * @returns {Promise<boolean>}
         */
        async requestForServerSideValidation() {
            const validationResult = await fetch(this.serverSideValidationEndpoint, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json'
                },
                body: this.valueContainer
            })

            // oke validation success
            if (validationResult.ok) {
                return true;
            }

            // I consider 422 is failed the validation
            if (validationResult.status === 422) {
                // the body should contains error messages
                const errorsBag = await validationResult.json()
                this.setValidationError(errorsBag)

                return false
            }
        },
    },

    /**
     * Dependencies Injection into the Form-Renderer.
     */
    created() {
        // create validation instance
        this.$form.Validation = new Validation(
            this.valueContainer,
            this.formData.controls,
            this.$form.validationClosures || {},
        )

        // listen to validation invoke
        this.$formEvent.$on(EVENT_CONSTANTS.RENDERER.RUN_VALIDATION, this.runValidation);
    },

    computed: {
        /**
         * to check if enable server side validation
         *
         * @returns {Boolean}
         */
        isEnableServerSideValidation() {
            if (!this.formConfiguration.formConfig || !this.formConfiguration.formConfig.enableServerSideValidation) {
                return false;
            }

            return this.formConfiguration.formConfig.enableServerSideValidation;
        },

        /**
         * Quick access to the endpoint
         *
         * @returns {any}
         */
        serverSideValidationEndpoint() {
            return this.formConfiguration.formConfig.serverSideValidationEndpoint
        }
    },
}

export {VALIDATION_MIXIN}