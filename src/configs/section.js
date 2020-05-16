/**
 * Supported Section & Section Contants in Vue-Form-Builder
 * @author Phat Tran
 */


const SECTION_TYPES = {
    normal: {
        name: "Normal Block",
        description: "Normal block with a headline",
        value: 'normal'
    },

    toggleable: {
        name: "Toggleable Block",
        description: "Section block with toggle (display/hide) feature",
        value: 'toggleable'
    },

    table: {
        name: "Table Block",
        description: "Section block built from a table with 2 column",
        value: 'table'
    },


};

/**
 * DEFAULT DATA in order to create/reread from the configuration
 */
const SECTION_DEFAULT_DATA = {
    uniqueId: '',
    headline: '',
    subHeadline: '',
    type: '',
};

export {
    SECTION_TYPES,
    SECTION_DEFAULT_DATA
}