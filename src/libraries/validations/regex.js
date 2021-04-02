/**
 * Check if the field is truly email or not
 * @param {any} fieldValue
 * @param {string} regexRule - RegexRule|Flag. Note: RegexRule without / at the beginning and the end
 * @return {boolean}
 */
export default function isRegexPassed(fieldValue, regexRule) {
    const splitRules = regexRule.split("|");

    const strRegexRule = splitRules[0]
    const strRegexFlag = splitRules[1] || "g";

    const regExp = new RegExp(strRegexRule, strRegexFlag);
    return regExp.test(fieldValue)
}