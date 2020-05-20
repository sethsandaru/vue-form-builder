/**
 * Row Constants in Vue-Form-Builder
 * @author Phat Tran
 */

import {HELPER} from "@/libraries/helper";


const ROW_TYPES = {
    normal: 'normal', // Normal Row in Div (div.row)
    tableRow: 'tableRow', // Table row (tr)
};

const ROW_DEFAULT_DATA = {
    uniqueId: '',
    additionalClass: '',
    type: ROW_TYPES.normal,
    sortOrder: 0,
    controls: [], // ids of control
};

/**
 * Create new Row Object
 * @param type
 */
function createNewRow(type) {
    if (!ROW_TYPES[type]) {
        throw new TypeError(`Row Type: ${type} doesn't exists in Vue-Form-Builder`);
    }

    // create new section data base on the default data
    let newRowObject = HELPER.cloneDeep(ROW_DEFAULT_DATA)
    newRowObject.type = type
    newRowObject.uniqueId = "row-" + HELPER.getUUIDv4()

    return newRowObject
}


export  {
    ROW_TYPES,
    ROW_DEFAULT_DATA,
    createNewRow
}
