/**
 * Supported Section & Section Contants in Vue-Form-Builder
 * @author Phat Tran
 */
import {HELPER} from "@/libraries/helper";

import NormalSectionView from "@/views/builder/section-views/NormalSectionView";
import TableSectionView from "@/views/builder/section-views/TableSectionView";
import ToggleableSectionView from "@/views/builder/section-views/ToggleableSectionView";


const SECTION_TYPES = {
    normal: {
        name: "Normal Block",
        description: "Normal block with a headline",
        value: 'normal',

        builderView: NormalSectionView
    },

    toggleable: {
        name: "Toggleable Block",
        description: "Section block with toggle (display/hide) feature",
        value: 'toggleable',

        builderView: ToggleableSectionView
    },

    table: {
        name: "Table Block",
        description: "Section block built from a table with 2 column",
        value: 'table',

        builderView: TableSectionView
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
    rows: [], // array of rowId
};

/**
 * Create new Section
 * @param type
 */
function createNewSection(type) {
    if (!SECTION_TYPES[type]) {
        throw new TypeError(`Section Type: ${type} doesn't exists in Vue-Form-Builder`);
    }

    // create new section data base on the default data
    let newSectionData = HELPER.cloneDeep(SECTION_DEFAULT_DATA)
    newSectionData.type = type
    newSectionData.uniqueId = "section-" + HELPER.getUUIDv4()

    return newSectionData;
}

export {
    SECTION_TYPES,
    SECTION_DEFAULT_DATA,
    createNewSection
}