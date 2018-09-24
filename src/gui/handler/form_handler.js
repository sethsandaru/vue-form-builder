var FormHandler = {};

function flattenControlInRows(rows) {
    var controls = [];
    _.each(rows, row => {
        _.each(row.controls, control => {
            controls.push(control);
        });
    });

    return controls;
}

FormHandler.dynamicTemplate = function(rows) {
    var controls = flattenControlInRows(rows);
    var controlData = {};

    _.each(controls, control => {
        controlData[control.fieldName] = !_.isEmpty(control.defaultValue) ? control.defaultValue : "";
    });

    return controlData;
};

function getControlValue(control, selectorOutside) {
    switch (control.type) {
        case 'datepicker':
        case 'timepicker':
            return $(`${selectorOutside} input[name='${control.fieldName}']`).val();
        case 'number': {
            if (_.isEmpty(control.value) || _.isNaN(control.value)) {
                return 0;
            }
        }
        default:
            return control.value;
    }
}

FormHandler.getValue = function (form) {
    var formData = {};

    // solving for static
    _.each(form.sections, sectionInfo => {
        if (sectionInfo.isDynamic) {
            return;
        }

        var controlData = {};

        // flatten rows
        var controls = flattenControlInRows(sectionInfo.rows);

        // retrieve value in control
        _.each(controls, control => {
            // special get value
            controlData[control.fieldName] = getControlValue(control, `#${sectionInfo.name}_gui_body`);
        });

        // set data
        formData[sectionInfo.clientKey] = controlData;
    });

    // solving for dynamic
    _.each(form.sections, sectionInfo => {
        if (!sectionInfo.isDynamic) {
            return;
        }

        var sectionData = [];
        _.each(sectionInfo.instances, (instance, insIndex) => {
            var controlData = {};

            // flatten rows
            var controls = flattenControlInRows(instance);

            // retrieve value in control
            _.each(controls, control => {
                controlData[control.fieldName] = getControlValue(control, `#${sectionInfo.name}_gui_body .rowDynamic_${insIndex}`);
            });

            // populate data
            sectionData.push(controlData);
        });

        formData[sectionInfo.clientKey] = sectionData;
    });

    return formData;
};

function setControlValue(control, value, selectorOutside, firstInit = true) {
    if (firstInit) {
        control.value = value;
        return;
    }

    switch (control.type) {
        case 'datepicker':
        case 'timepicker':
            $(`${selectorOutside} input[name='${control.fieldName}']`).val(value);
            break;
        default:
            control.value = value;
    }
}

FormHandler.setValue = function(form, values) {
    // though the values - static form first
    _.each(values, (formData, key) => {
        var sectionInfo = _.find(form.sections, {clientKey: key});
        if (sectionInfo === undefined || sectionInfo.isDynamic) {
            return;
        }

        // flatten rows
        var controls = flattenControlInRows(sectionInfo.rows);
        _.each(controls, controlInfo => {
            if (formData[controlInfo.fieldName]) {
                setControlValue(controlInfo, formData[controlInfo.fieldName], `#${sectionInfo.name}_gui_body`, false);
            }
        });
    });

    // for the dynamic form
    _.each(values, (formData, key) => {
        var sectionInfo = _.find(form.sections, {clientKey: key});
        if (sectionInfo === undefined || !sectionInfo.isDynamic || !_.isArray(formData)) {
            return;
        }

        sectionInfo.instances = [];
        var insIndex = 0;
        _.each(formData, instanceData => {
            var template = _.cloneDeep(sectionInfo.rows);

            // push into a new instance
            sectionInfo.instances.push(template);

            // populate data into it
            var controls = flattenControlInRows(template);

            // push data to control
            _.each(controls, controlInfo => {
                if (instanceData[controlInfo.fieldName]) {
                    setControlValue(controlInfo, instanceData[controlInfo.fieldName], `#${sectionInfo.name}_gui_body .rowDynamic_${insIndex++}`);
                }
            });
        });
    });
};

FormHandler.validate = function (form) {
    var formData =  FormHandler.getValue(form);

    // TODO: Validate control in here (not develop yet) :D

    return true;
};

export {
    FormHandler
}
