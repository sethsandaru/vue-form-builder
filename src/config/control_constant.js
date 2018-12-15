// icon
import {faEdit} from '@fortawesome/free-solid-svg-icons/faEdit';
import {faCalculator} from '@fortawesome/free-solid-svg-icons/faCalculator';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons/faCalendarAlt';
import {faClock} from '@fortawesome/free-solid-svg-icons/faClock';
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck';
import {faDatabase} from '@fortawesome/free-solid-svg-icons/faDatabase';

// GUI Control
import GUICheckboxControl from 'sethFormBuilder/gui/ui/controls/CheckboxControl';
import GUIDatePickerControl from 'sethFormBuilder/gui/ui/controls/DatePickerControl';
import GUINumberControl from 'sethFormBuilder/gui/ui/controls/NumberControl';
import GUISelectControl from 'sethFormBuilder/gui/ui/controls/SelectControl';
import GUITextControl from 'sethFormBuilder/gui/ui/controls/TextControl';
import GUITimePickerControl from 'sethFormBuilder/gui/ui/controls/TimePickerControl';

// TEMPLATE Control
import TEMPLATETextControl from 'sethFormBuilder/template/ui/common/controls/TextControl';
import TEMPLATENumberControl from 'sethFormBuilder/template/ui/common/controls/NumberControl';
import TEMPLATECheckboxControl from 'sethFormBuilder/template/ui/common/controls/CheckboxControl';
import TEMPLATEDatePickerControl from 'sethFormBuilder/template/ui/common/controls/DatePickerControl';
import TEMPLATETimePickerControl from 'sethFormBuilder/template/ui/common/controls/TimePickerControl';
import TEMPLATESelectControl from 'sethFormBuilder/template/ui/common/controls/SelectControl';

// Template Control
// special key for control:
// other_properties: {
//     x: "zzz",
//     c: "xxx",
//     ...
// },
// validation_func: function() {
//  // validation function here
// }
//
const CONTROL_TYPES = {
    text: {
        label:"Text Input",
        icon: faEdit,
        source: {
            gui: GUITextControl,
            template: TEMPLATETextControl
        }
    },
    number: {
        label:"Number Input",
        icon: faCalculator,
        source: {
            gui: GUINumberControl,
            template: TEMPLATENumberControl
        }
    },
    datepicker: {
        label: "Date Picker",
        icon: faCalendarAlt,
        source: {
            gui: GUIDatePickerControl,
            template: TEMPLATEDatePickerControl
        }
    },
    timepicker: {
        label:"Time Picker",
        icon: faClock,
        source: {
            gui: GUITimePickerControl,
            template: TEMPLATETimePickerControl
        }
    },
    select: {
        label: "Select Option",
        icon: faDatabase,
        source: {
            gui: GUISelectControl,
            template: TEMPLATESelectControl
        }
    },
    checkbox: {
        label:"Checkbox",
        icon: faCheck,
        source: {
            gui: GUICheckboxControl,
            template: TEMPLATECheckboxControl
        }
    }
};

export {
    CONTROL_TYPES
}
