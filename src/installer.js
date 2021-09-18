import {FormIcon} from "@/libraries/icon-facade";
import FormBuilder from "@/components/FormBuilder";
import FormRenderer from "@/components/FormRenderer";
import {CONTROLS} from "@/configs/controls";
import {STYLES} from "@/configs/styles";
import {VALIDATION_RULES} from "@/configs/validation";
import {IRegisterProperties} from "@/interfaces/register-properties.interface.ts";

const VueFormBuilderInstaller = function(
    Vue,
    properties = {}
) {
    if (VueFormBuilderInstaller.installed) {
        return
    }

    /**
     *
     * @type {IRegisterProperties}
     */
    const defaultProperties  = {
        globalInjection : true,
        validationErrorShowAlert: true,
        validationErrorAlertText: "Your form got error(s), please fix it and submit again"
    };

    Object.assign(properties, defaultProperties);

    // DI for Form-Builder
    const formDI = {
        getIcon: FormIcon.getSVG, // a method to get icon from IconFacade
    };

    // control extend?
    if (properties.hasOwnProperty('controls')) {
        extendingControls(properties.controls)
    }

    // style override?
    if (properties.hasOwnProperty('styles')) {
        Object.assign(STYLES, properties.styles)
    }

    // validation extend?
    if (properties.hasOwnProperty('validations')) {
        extendingValidations(properties.validations)
    }

    // validation closures
    if (properties.hasOwnProperty('validationClosures')) {
        formDI.validationClosures = properties.validationClosures
    }

    // show alert or not?
    formDI.validationErrorShowAlert = properties.validationErrorShowAlert || true
    formDI.validationErrorAlertText = properties.validationErrorAlertText

    // disable control?
    if (properties.disableControls && properties.disableControls.length) {
        disableControls(properties.disableControls)
    }

    // For Event-Bus purpose
    Vue.prototype.$formEvent = new Vue()
    Vue.prototype.$form = formDI

    // Register Form-Components
    if (!properties.hasOwnProperty('globalInjection') || properties.globalInjection) {
        Vue.component('FormBuilder', FormBuilder);
        Vue.component('FormRenderer', FormRenderer);
    }

    // Mark as registered
    VueFormBuilderInstaller.installed = true;
}

/**
 * Extending Control from the users
 * @param {Object} moreControlObject
 */
const extendingControls = function(moreControlObject) {
    // validation if it does conflict or not
    const allKeys = Object.keys(moreControlObject)
    for (let iKey = 0; iKey < allKeys.length; iKey++) {
        let key = allKeys[iKey]

        // duplicated => error
        if (CONTROLS.hasOwnProperty(key)) {
            throw new TypeError(`Extend-Control-Error: Your '${key}' control is duplicated with our build-in Controls. Please change to another key name instead.`);
        }
    }

    // eligible to extend now
    Object.assign(CONTROLS, moreControlObject)
}

/**
 * Extending Validation
 * @param {Object} validationObj
 */
const extendingValidations = function (validationObj) {
    // validation if it does conflict or not
    const allKeys = Object.keys(validationObj)
    for (let iKey = 0; iKey < allKeys.length; iKey++) {
        let key = allKeys[iKey]

        // duplicated => error
        if (VALIDATION_RULES.hasOwnProperty(key)) {
            throw new TypeError(`Extend-Validation-Error: Your '${key}' validation is duplicated with our build-in Validation. Please change to another key name instead.`);
        }
    }

    // eligible to extend now
    Object.assign(VALIDATION_RULES, validationObj)
}

/**
 * Disable a list of controls by key
 * @param {String[]} controlKeys
 */
const disableControls = function(controlKeys) {
    controlKeys.forEach(
        controlKey => CONTROLS[controlKey].isHidden = true
    );
}

export  {
    VueFormBuilderInstaller
}