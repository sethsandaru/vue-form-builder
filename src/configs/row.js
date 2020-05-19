/**
 * Row Contants in Vue-Form-Builder
 * @author Phat Tran
 */


const ROW_TYPES = {
    normal: 'normal', // Normal Row in Div (div.row)
    tableRow: 'tableRow', // Table row (tr)
};

const ROW_DEFAULT_DATA = {
    uniqueId: '',
    type: ROW_TYPES.normal,
    sortOrder: 0,
    controls: [], // ids of control
};

export  {
    ROW_TYPES,
    ROW_DEFAULT_DATA
}
