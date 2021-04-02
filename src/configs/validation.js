/**
 * Validation Rules of Vue-Form-Builder
 * - desc: Validation Rule Info
 * - needValue - boolean: Need additional value from user or not? True is yes
 * - errorMessage: default error message, can be edit by the users
 * -
 */

const VALIDATION_RULES = {
    required: {
        desc: "Field must have value (at least length must be 1)",
        needValue: false,
        errorMessage: "This field is required",
    },

    min: {
        desc: "Minimum length of the value. For number field, it will be the value (not length)",

        needValue: true,
        valueInfo: "Number",

        errorMessage: "Minimum value for this field is :min",
    },

    max: {
        desc: "Maximum length of the value. For number field, it will be the value (not length)",

        needValue: true,
        valueInfo: "Number",

        errorMessage: "Maximum value for this field is :max",
    },

    isEmail: {
        desc: "Validate email address",
        needValue: false,
        errorMessage: "Wrong email address format",
    },

    regex: {
        desc: "Validation the field by using your own Regex Rule",

        needValue: true,
        valueInfo: "Regex String|Flag - Eg: [0-9]+|g",

        errorMessage: "This field value doesn't match with the rule",
    },

    sameAs: {
        desc: "Check if the field has same value with another field",

        needValue: true,
        valueInfo: "The field name you want to check with",

        errorMessage: "This field value doesn't as same as :sameAs",
    },

    customClosure: {
        desc: "Invoke your own method to check your field",

        needValue: true,
        valueInfo: "Your method name",

        errorMessage: "Custom validation failed.",
    }
}

/**
 * Add Validation Rule for the Control Validation
 * @param ruleType
 * @returns {{errorMessage: (string), type: (string)}}
 */
class ValidationRule {
    /**
     * Needed properties
     */
    ruleType = ""
    errorMessage = ""
    additionalValue = ""

    constructor(ruleType, customErrorMessage) {
        this.ruleType = ruleType

        if (ruleType) {
            this.errorMessage = customErrorMessage || VALIDATION_RULES[ruleType].errorMessage || ""
        }
    }
}

export
{
    VALIDATION_RULES,
    ValidationRule
}