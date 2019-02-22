import {CONTROL_TYPES} from "sethFormBuilder/config/control_constant";

const ValidationHandler = {
    section_info: {},
};

ValidationHandler.init = function(formData) {
    _.each(formData.sections, sectionInfo => {
        // set name
        ValidationHandler.section_info[sectionInfo.name] = {
            dynamic: sectionInfo.isDynamic,
            controls: {},
        };

        var controls = {};
        // traverse rows
        _.each(sectionInfo.rows, rowInfo => {
            // traverse controls
            _.each(rowInfo.controls, controlInfo => {
                let name = sectionInfo.clientKey + "." + controlInfo.fieldName;
                // define validation info
                if (_.isFunction(CONTROL_TYPES[controlInfo.type].validation_func)) {

                    // create custom validation
                    _custom_validation_init(name, CONTROL_TYPES[controlInfo.type].validation_func);

                    // set it
                    controls[name] =  {};
                    controls[name][name] = "Option";
                } else {
                    // default is presence
                    controls[name] = {
                        presence: true
                    };
                }
            });
        });

        // set it
        ValidationHandler.section_info[sectionInfo.name].controls = controls;
    });
};

ValidationHandler.run = function(formValues) {
    // we run for each section to check

};

var _custom_validation_init = function (name, func) {
    validate.formatters[name] = func;
};

export {
    ValidationHandler
}
