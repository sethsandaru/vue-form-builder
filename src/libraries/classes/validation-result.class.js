import {VALIDATION_RULES} from "@/configs/validation";

export default class ValidationResult {
    hasError = false
    errorBuckets = {}

    /**
     * Check if the validation is successfully or not
     * @returns {boolean}
     */
    errors() {
        return this.hasError
    }

    /**
     * Add error and generate error message
     * @param {String} fieldName
     * @param {ValidationRule} validationRule
     */
    addError(fieldName, validationRule) {
        this.hasError = true

        if (!this.errorBuckets[fieldName]) {
            this.errorBuckets[fieldName] = [];
        }

        // generate error message and add it
        let errorMessage = validationRule.errorMessage || VALIDATION_RULES[validationRule.ruleType].errorMessage

        // if it has replaceable variable => replace it (:mix, :max, :lol)
        const replaceableVar = `:${validationRule.ruleType}`
        if (errorMessage.indexOf(replaceableVar) >= 0) {
            errorMessage = errorMessage.replace(replaceableVar, validationRule.additionalValue)
        }

        // add the error message
        this.errorBuckets[fieldName].push(errorMessage)
    }
}