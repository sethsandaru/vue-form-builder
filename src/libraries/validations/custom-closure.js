/**
 * Run custom closure of to check
 * @param {any} fieldValue
 * @param {any} customClosureName
 * @param {Object} valuesContainer
 * @param {Object} customClosures
 * @return {boolean}
 */
export default function customClosureRule(
    fieldValue,
    customClosureName,
    valuesContainer,
    customClosures
) {
    // since there no closure registered, no need to run and it always true
    if (typeof customClosures[customClosureName] !== 'function') {
        console.error(`Custom Validation Closure ${customClosureName} does not exists. Bypassed`);
        return true
    }

    const closure = customClosures[customClosureName];

    /**
     * Custom closure can access field value & valuesContainer as well
     */
    const result = closure(fieldValue, valuesContainer);

    // because it might be null/undefined => falsy will be false
    if (!result) {
        return false
    }

    return true
}