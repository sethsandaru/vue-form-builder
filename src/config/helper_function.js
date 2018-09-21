/**
 * Clone DEEP data
 * @param data
 * @returns {any}
 */
_.cloneDeep = function (data) {
    return JSON.parse(JSON.stringify(data));
};

/**
 * Check if we can access path from an object
 * @param o Object
 * @param s Path
 * @returns {*}
 */
_.accessStr = function (o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (_.isNull(o) || _.isUndefined(o)) {
            return;
        }
        if (k in o) {
            if (!_.has(o, k)) {
                return;
            }
            o = o[k];
        } else {
            return;
        }
    }
    return o;
};

/**
 * Generate a true UNIQUE ID (check dom too)
 * @param prefix
 * @returns {*}
 */
_.domUniqueID = function (prefix) {
    var id = prefix + _.random(0, 999999);
    if ($('#' + id).length > 0) {
        return _.domUniqueID(prefix);
    }

    return id;
};
