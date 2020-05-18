import {SECTION_DEFAULT_DATA} from "@/configs/section";
import {CONTROL_DEFAULT_DATA, CONTROLS} from "@/configs/controls";
import {FORM_DEFAULT_DATA} from "@/configs/form";


/**
 * Applier is an extending-object to make sure your old form-configuration still working well with the new version
 * @author Phat Tran
 * @param {{formConfig: Object, sections: Array, controls: Object}} formConfigObject
 * @return {Object} Final Object that can always use with the Form-Builder/Renderer
 */
const dataApplier = function(formConfigObject) {
    let appliedObject = {
        formConfig: {},
        sections: [],
        controls: {}
    };

    // Form-Config Apply
    appliedObject.formConfig = Object.assign(FORM_DEFAULT_DATA, formConfigObject.formConfig)

    // Section Apply
    formConfigObject.sections.forEach(sectionObject => {
        appliedObject.sections.push(
            baseObjectExtend(SECTION_DEFAULT_DATA, sectionObject)
        );
    });

    // Control Apply
    for (let [controlId, controlObject] of Object.entries(formConfigObject.controls)) {
        // get type - pick up config of type - merge it with the base
        let type = controlObject.type
        let baseConfigOfType = CONTROLS[type].configData
        let baseDefaultConfig = baseObjectExtend(CONTROL_DEFAULT_DATA, baseConfigOfType)

        appliedObject.controls.push(
            Object.assign(baseDefaultConfig, controlObject)
        );
    }

    return appliedObject
}

/**
 * From A Base Object - We Clone and Extending from a different Object
 * @param {Object} baseObject
 * @param {Object} fromObject
 * @returns {Object}
 */
function baseObjectExtend(baseObject, fromObject) {
    const clonedData = cloneDeep(baseObject)
    return Object.assign(clonedData, fromObject)
}

/**
 * Deep-Clone an Object
 * @param obj
 * @returns {any}
 */
function cloneDeep(obj) {
    return JSON.parse(JSON.stringify(obj));
}

export {
    dataApplier
}