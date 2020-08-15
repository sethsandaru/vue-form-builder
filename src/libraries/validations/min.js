/**
 * Check min value for a field
 * - Text => min length
 * - Number => min value
 * - Checkboxes => min selected items
 * @param {any} fieldValue
 * @param {number} constraintValue
 * @return {boolean}
 */
export default function minRule(fieldValue, constraintValue) {
    const minVal = parseInt(constraintValue)

    // let's check - first is array
    if (Array.isArray(fieldValue)) {
        return fieldValue.length >= minVal
    }

    // second, number
    // second, number
    if (typeof fieldValue === 'number') {
        return fieldValue >= minVal
    }

    // lastly, string
    return fieldValue.length >= minVal
}