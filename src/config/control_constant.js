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

// Template Control

const CONTROL_TYPES = {
    text: {
        label:"Text Input",
        icon: faEdit,
        source: {
            gui: GUITextControl
        }
    },
    number: {
        label:"Number Input",
        icon: faCalculator,
        source: {
            gui: GUINumberControl
        }
    },
    datepicker: {
        label: "Date Picker",
        icon: faCalendarAlt,
        source: {
            gui: GUIDatePickerControl
        }
    },
    timepicker: {
        label:"Time Picker",
        icon: faClock,
        source: {
            gui: GUITimePickerControl
        }
    },
    select: {
        label: "Select Option",
        icon: faDatabase,
        source: {
            gui: GUISelectControl
        }
    },
    checkbox: {
        label:"Checkbox",
        icon: faCheck,
        source: {
            gui: GUICheckboxControl
        }
    }
};

export {
    CONTROL_TYPES
}
