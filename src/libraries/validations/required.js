/**
 * Require check for validation
 * @param {any} fieldValue
 * @return {boolean}
 */
export default function requiredRule(fieldValue) {
    // for checkboxes / multiple dropdown
    if (Array.isArray(fieldValue)) {
        return fieldValue.length > 0
    }

    // for text/number/any...
    if (fieldValue === "") {
        return false
    }

    return true
}