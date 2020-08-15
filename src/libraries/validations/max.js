/**
 * Check max value for a field
 * - Text => max length
 * - Number => max value
 * - Checkboxes => max selected items
 * @param {any} fieldValue
 * @param {number} constraintValue
 * @return {boolean}
 */
export default function maxRule(fieldValue, constraintValue) {
    const minVal = parseInt(constraintValue)

    // let's check - first is array
    if (Array.isArray(fieldValue)) {
        return fieldValue.length <= minVal
    }

    // second, number
    if (typeof fieldValue === 'number') {
        return fieldValue <= minVal
    }

    // lastly, string
    return fieldValue.length <= minVal
}