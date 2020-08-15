import {SECTION_DEFAULT_DATA} from "@/configs/section";
import {CONTROL_DEFAULT_DATA, CONTROLS} from "@/configs/controls";
import {FORM_DEFAULT_DATA} from "@/configs/form";
import {HELPER} from "@/libraries/helper";
import {ROW_DEFAULT_DATA} from "@/configs/row";


/**
 * Applier is an extending-object to make sure your old form-configuration still working well with the new version
 * @author Phat Tran
 * @param {{formConfig: Object, sections: Array, rows: Object, controls: Object}|undefined} formConfigObject
 * @return {Object} Final Object that can always use with the Form-Builder/Renderer
 */
const dataApplier = function(formConfigObject) {
    let appliedObject = {
        formConfig: {},
        sections: {},
        rows: {},
        controls: {}
    };

    // base-created-form
    if (!formConfigObject) {
        appliedObject.formConfig = HELPER.cloneDeep(FORM_DEFAULT_DATA)
        return appliedObject
    }

    // Form-Config Apply
    appliedObject.formConfig = Object.assign({}, FORM_DEFAULT_DATA, formConfigObject.formConfig)

    // Section(s) Apply
    for (let [sectionId, sectionObject] of Object.entries(formConfigObject.sections)) {
        appliedObject.sections[sectionId] = baseObjectExtend(SECTION_DEFAULT_DATA, sectionObject)
    }

    // Row(s) Apply
    for (let [rowId, rowObject] of Object.entries(formConfigObject.rows)) {
        appliedObject.rows[rowId] = baseObjectExtend(ROW_DEFAULT_DATA, rowObject)
    }

    // Control(s) Apply
    for (let [controlId, controlObject] of Object.entries(formConfigObject.controls)) {
        // get type - pick up config of type - merge it with the base
        let type = controlObject.type
        let baseConfigOfType = CONTROLS[type].configData
        let baseDefaultConfig = baseObjectExtend(CONTROL_DEFAULT_DATA, baseConfigOfType)

        // add to base
        appliedObject.controls[controlId] = Object.assign(baseDefaultConfig, controlObject)
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
    const clonedData = HELPER.cloneDeep(baseObject)
    return Object.assign(clonedData, fromObject)
}

export {
    dataApplier
}