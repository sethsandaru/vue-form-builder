/**
 * Row Constants in Vue-Form-Builder
 * @author Phat Tran
 */

import {HELPER} from "@/libraries/helper";


const ROW_TYPES = {
    normal: 'normal', // Normal Row in Div (div.row)
    tabRow: 'tabRow', // Tab Row
    tableRow: 'tableRow', // Table row (tr)
};

const ROW_DEFAULT_DATA = {
    uniqueId: '',
    additionalClass: '',
    type: ROW_TYPES.normal,
    sortOrder: 0,
    controls: [], // ids of control
    extendData: null, // depends on the row, we would have specific configuration
};

/**
 * Create new Row Object
 * @param {string} type
 * @param {any} extendData
 */
function createNewRow(type, extendData = null) {
    if (!ROW_TYPES[type]) {
        throw new TypeError(`Row Type: ${type} doesn't exists in Vue-Form-Builder`);
    }

    // create new section data base on the default data
    let newRowObject = HELPER.cloneDeep(ROW_DEFAULT_DATA)
    newRowObject.type = type
    newRowObject.uniqueId = "row-" + HELPER.getUUIDv4()
    newRowObject.extendData = extendData

    return newRowObject
}


export  {
    ROW_TYPES,
    ROW_DEFAULT_DATA,
    createNewRow
}
