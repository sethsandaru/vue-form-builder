import ValidationResult from "@/libraries/classes/validation-result.class";
import requiredRule from "@/libraries/validations/required";
import minRule from "@/libraries/validations/min";
import maxRule from "@/libraries/validations/max";
import isEmailRule from "@/libraries/validations/is-email";
import sameAsRule from "@/libraries/validations/same-as";
import customClosureRule from "@/libraries/validations/custom-closure";
import isRegexPassed from "@/libraries/validations/regex";

export default class Validation {
    rules = null
    valueContainer = null
    customClosures = {}

    /**
     * Validation Result. Always create a new instance every time the validation is run
     * @type {ValidationResult}
     */
    validationResult = null

    /**
     * Create a new Validation handler
     * @param {Object} valueContainer
     * @param {Object} controls
     * @param {Object} definedClosures
     */
    constructor(valueContainer, controls, definedClosures = {}) {
        this.valueContainer = valueContainer
        this.validationClosures = definedClosures
        this.setRules(controls)
    }

    /**
     * Set validation rules from the controls
     * @param {{validations: ValidationRule[]}} controls
     */
    setRules(controls) {
        const rules = {}

        // traversal all control and pick the validations info
        Object.entries(controls).forEach(controlInfo => {
            let [controlId, controlItem] = controlInfo
            let controlName = controlItem.name || controlId

            // no name => this field didn't have value
            if (!this.valueContainer.hasOwnProperty(controlName)) {
                return
            }

            rules[controlName] = controlItem.validations
        })

        this.rules = rules
    }

    /**
     * Start a validation check
     * @return {ValidationResult}
     */
    run() {
        this.validationResult = new ValidationResult()
        const controlKeys = Object.keys(this.rules)

        for (const key of controlKeys) {
            // pickup basic data
            const controlValue = this.valueContainer[key]
            const controlRules = this.rules[key] || []

            // no rule no run
            if (!controlRules.length) {
                continue;
            }

            /**
             * start the validation process by each rules added for the control
             */
            for (const validationRule of controlRules) {
                const status = this._singleRuleRun(validationRule, controlValue)
                if (!status) {
                    this.validationResult.addError(key, validationRule)
                }
            }
        }

        return this.validationResult
    }

    /**
     * Run single rule to check
     * @param {ValidationRule} validationRule
     * @param {any} fieldValue
     * @private
     */
    _singleRuleRun(validationRule, fieldValue) {
        switch (validationRule.ruleType) {

            case "required":
                return requiredRule(fieldValue)

            case "min":
                return minRule(fieldValue, validationRule.additionalValue)

            case "max":
                return maxRule(fieldValue, validationRule.additionalValue)

            case "isEmail":
                return isEmailRule(fieldValue)

            case "sameAs":
                return sameAsRule(fieldValue, validationRule.additionalValue, this.valueContainer)

            case "customClosure":
                return customClosureRule(fieldValue, validationRule.additionalValue, this.valueContainer, this.customClosures)

            case "regex":
                return isRegexPassed(fieldValue, validationRule.additionalValue)

            default:
                throw new TypeError(`This validation type ${validationRule.ruleType} is not supported.`);
        }
    }
}