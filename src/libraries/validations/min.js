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
    if (
        !isNaN(parseInt(fieldValue)) ||
        !isNaN(parseFloat(fieldValue))
    ) {
        let numVal = 0;

        // integer or float/double
        if (fieldValue.indexOf(".") >= 0) {
            numVal = parseFloat(fieldValue)
        } else {
            numVal = parseInt(fieldValue)
        }

        return numVal >= minVal
    }

    // lastly, string
    return fieldValue.length >= minVal
}