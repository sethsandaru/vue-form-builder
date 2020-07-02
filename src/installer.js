import {FormIcon} from "@/libraries/icon-facade";
import FormBuilder from "@/components/FormBuilder";
import FormRenderer from "@/components/FormRenderer";
import {CONTROLS} from "@/configs/controls";
import {STYLES} from "@/configs/styles";

const VueFormBuilderInstaller = function(Vue, properties = {}) {
    if (VueFormBuilderInstaller.installed) {
        return
    }

    // DI for Form-Builder
    Vue.prototype.$form = {
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

    // For Event-Bus purpose
    Vue.prototype.$formEvent = new Vue();

    // Register Form-Components
    Vue.component('FormBuilder', FormBuilder);
    Vue.component('FormRenderer', FormRenderer);

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

export  {
    VueFormBuilderInstaller
}