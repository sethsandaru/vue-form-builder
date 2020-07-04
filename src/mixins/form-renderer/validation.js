import Validation from "@/libraries/validation";
import {EVENT_CONSTANTS} from "@/configs/events";

const VALIDATION_MIXIN = {
    data: () => ({
        validationErrors: {}
    }),

    methods: {
        /**
         * Run the validation process
         */
        runValidation() {
            const result = this.$form.Validation.run()
            if (result.errors()) {
                this.validationErrors = Object.assign({}, result.errorBuckets)
                return
            }

            // ok emit to all listener if they want to know the validation is ok or not
            this.$emit(EVENT_CONSTANTS.RENDERER.VALIDATION_OK, true)
        }
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
        this.$on(EVENT_CONSTANTS.RENDERER.RUN_VALIDATION, this.runValidation);
    }
}

export {VALIDATION_MIXIN}