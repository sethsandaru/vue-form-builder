
export default class Validation {
    rules = null
    valueContainer = null
    errors = null

    /**
     * Create a new Validation handler
     * @param {Object} valueContainer
     * @param {Object} controls
     */
    constructor(valueContainer, controls) {
        this.valueContainer = valueContainer
        this.setRules(controls)
    }

    /**
     * Set validation rules from the controls
     * @param {{validations: ValidationRule[]}} controls
     */
    setRules(controls) {
        let rules = {}

        // traversal all control and pick the validations info
        Object.entries(controls).forEach(controlItem => {
            let controlName = controlItem.name || controlItem.uniqueId

            // no name => this field didn't have value
            if (!this.valueContainer[controlName]) {
                return;
            }

            rules[controlName] = controlItem.validations
        })

        this.rules = rules
    }

    /**
     * Start a validation check
     * @return {Boolean}
     */
    run() {
        this.errors = {}
        let controlKeys = Object.entries(controls)

        for (const key of controlKeys) {
            // pickup basic data
            const controlValue = this.valueContainer[key]
            const controlRules = this.rules[key] || []

            // no rule no run
            if (!controlRules.length) {
                continue;
            }

            // start the validation process
            for (const validationRule of controlRules) {
                
            }
        }


        return true
    }
}