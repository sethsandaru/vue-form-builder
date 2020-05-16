import {SECTION_DEFAULT_DATA} from "@/configs/section";


/**
 * Applier is an extending-object to make sure your old form-configuration still working well with the new version
 * @author Phat Tran
 * @param {{formConfig: Object, sections: Array, controls: Object}} formConfigObject
 * @return {Object} Final Object that can always use with the Form-Builder/Renderer
 */
const APPLIER = function(formConfigObject) {
    let appliedObject = {
        formConfig: {},
        sections: [],
        controls: {}
    };

    // Form-Config Apply
    appliedObject.formConfig = Object.assign({}, formConfigObject.formConfig)

    // Section Apply
    formConfigObject.sections.forEach(sectionObject => {
        appliedObject.sections.push(
            extendSection(sectionObject)
        );
    });

    return appliedObject
}

/**
 * Object Extendation...
 * @param sectionObj
 * @returns {any}
 */
function extendSection(sectionObj) {
    const sectionData = cloneDeep(SECTION_DEFAULT_DATA)
    return Object.assign(sectionData, sectionObj)
}

function cloneDeep(obj) {
    return JSON.parse(JSON.stringify(obj));
}

export {
    APPLIER
}