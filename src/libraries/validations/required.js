/**
 * Require check for validation
 * @param {any} fieldValue
 * @return {boolean}
 */
export default function requiredRule(fieldValue) {
    // for checkboxes / multiple dropdown
    if (Array.isArray(fieldValue) && !fieldValue.length) {
        return false
    }

    // for text/number/any...
    if (fieldValue === "") {
        return false
    }

    return true
}