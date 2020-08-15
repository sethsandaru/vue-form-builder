

const HELPER = {};

/**
 * Deep-Clone an Object
 * @param obj
 * @returns {any}
 */
HELPER.cloneDeep = function(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Get UUIDv4
 * @returns {String}
 */
HELPER.getUUIDv4 = function() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

/**
 * Find inside object/array by a specific rule
 * @param {Array|Object} collection
 * @param {string} ruleKey
 * @param {string} value
 * @returns {any|undefined} first item that matched the rule or undefined
 * @complexity O(n) for normal cases, best case will be O(1) or O(logn)
 */
HELPER.find = function(collection, ruleKey, value) {

    // Only array has `length` property
    if (collection.length) {
        // array
        return collection.find(item => item[ruleKey] == value)
    }

    // object traversal
    let keys = Object.keys(collection)
    for (const objKey of keys) {
        let data = collection[objKey]
        if (data && data[ruleKey] == value) {
            return data;
        }
    }

    return undefined
}

/**
 * Find array by a specific rule and return the index
 * @param {Array} array
 * @param {string} ruleKey - If it's undefined, we check the item only
 * @param {string} value
 * @returns {number} first item that matched the rule or -1
 * @complexity O(n) for normal cases, best case will be O(1) or O(logn)
 */
HELPER.findIndex = function (array, ruleKey, value) {
    return array.findIndex(item => {
        if (!ruleKey)
            return item == value

        return item[ruleKey] == value
    })
}

export {
    HELPER
}