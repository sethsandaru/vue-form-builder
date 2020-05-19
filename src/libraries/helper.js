

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

export {
    HELPER
}