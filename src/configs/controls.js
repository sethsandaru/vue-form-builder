/**
 * Supported Controls in Vue-Form-Builder
 * @author Phat Tran
 */
import {STYLES} from "@/configs/styles";
import {HELPER} from "@/libraries/helper";
import {DATE_PICKER_RETURN_TYPES, RADIO_CHECKBOX_POSITION, RADIO_CHECKBOX_STYLE} from "@/configs/control-config-enum";

// Control-GUI-Component
import InputControl from "@/views/controls/InputControl"
import TextControl from "@/views/controls/TextControl"
import ButtonControl from "@/views/controls/ButtonControl"
import EmptyBlockControl from "@/views/controls/EmptyBlockControl";
import TextBlockControl from "@/views/controls/TextBlockControl";
import LabelControl from "@/views/controls/LabelControl";
import RadioCheckboxControl from "@/views/controls/RadioCheckboxControl";
import DatePickerControl from "@/views/controls/DatePickerControl";

// Control-Config-Component
import TextBlockConfigView from "@/views/control-configs/TextBlockConfigView";
import ButtonConfigView from "@/views/control-configs/ButtonConfigView";
import LabelConfigView from "@/views/control-configs/LabelConfigView";
import RadioCheckboxConfigView from "@/views/control-configs/RadioCheckboxConfigView";
import NumberControl from "@/views/controls/NumberControl";
import NumberConfigView from "@/views/control-configs/NumberConfigView";

const CONTROLS = {
    input: {
        name: "Input Field",
        description: "Input text single line",
        icon: 'editPencil', // Follow ICON in `icon-facade.js` to see how it works.

        // component mapping
        fieldComponent: InputControl
    },

    number: {
        name: "Number Input Field",
        description: "Input text single line - Number Only",

        configData: {
            isReal: false, // integer or real (float/double)
            decimalPlace: 1, // [For Real] 0.xxx?? (x = num of places)
        },

        fieldComponent: NumberControl,
        configComponent: NumberConfigView
    },

    text: {
        name: "Text Field",
        description: "Multiple line text field",

        // config data for the input field - it will be merge with the CONTROL_DEFAULT_DATA
        configData: {
            rows: 3, // numeric
        },

        // component mapping
        fieldComponent: TextControl,
    },

    richText: {
        name: "Rich-Text Field",
        description: "Multiple line text field - Rich Editor (WYSIWYG)",
    },

    date: {
        name: "Date Picker",
        description: "Simple date picker field",

        configData: {
            format: "DD/MM/YYYY",
            firstDay: 1, // 0 Sunday, 1 Monday,...
            numberOfMonths: 1, // Number of Month(s) will be shown
            numberOfColumns: 1, // Number of Column(s) will be shown
            minDate: null, // min day (less => can't select)
            maxDate: null,// max day (more => can't select),

            returnType: DATE_PICKER_RETURN_TYPES.format.val, // specific return type
        },

        fieldComponent: DatePickerControl
    },

    dateRange: {
        name: "Date Range Picker",
        description: "Pick 2 dates in a range",
    },

    fileUpload: {
        name: "File Upload",
        description: "Upload single file through API",
    },

    dropDown: {
        name: "Dropdown",
        description: "Dropdown select from a list",
    },

    checkbox: {
        name: "Checkbox List",
        description: "Checkbox list items (Multiple Select)",

        configData: {
            displayMode: RADIO_CHECKBOX_STYLE.line.val, // line by line / next to each others / 2 items per line
            position: RADIO_CHECKBOX_POSITION.left.val, // POSITION

            /**
             * @var {ListItem[]} items
             */
            items: [], // list-item
        },

        fieldComponent: RadioCheckboxControl,
        configComponent: RadioCheckboxConfigView
    },

    radio: {
        name: "Radio List",
        description: "Radio-Button list items (Single Select)",

        configData: {
            displayMode: RADIO_CHECKBOX_STYLE.line.val, // line by line / next to each others / 2 items per line
            position: RADIO_CHECKBOX_POSITION.left.val, // POSITION
            /**
             * @var {ListItem[]} items
             */
            items: [], // list-item
        },

        fieldComponent: RadioCheckboxControl,
        configComponent: RadioCheckboxConfigView
    },

    label: {
        name: "Label",
        description: "Simple label text show up in your Form",

        configData: {
            forAttribute: null, // `for` for any control? (except the Label)

            // Override here in order to not show the Label
            isShowLabel: false
        },

        // no need validation
        disableValidation: true,
        fieldComponent: LabelControl,
        configComponent: LabelConfigView
    },

    // STATUS: OK
    button: {
        name: "Button",
        description: "Simple button for your own purpose",
        disableValidation: true,

        configData: {
            buttonClass: STYLES.BUTTON.PRIMARY,
            buttonType: "button", // submit/reset/button/...

            emitEventCode: "", // like: "BtnClicked/clicked/change"
            emitEventData: "", // special data to emit to let you know which button is clicked

            // if this is true => validation will be run before the real invoke method
            isRunValidation: false,

            // Override here in order to not show the Label
            isShowLabel: false,
        },

        fieldComponent: ButtonControl,
        configComponent: ButtonConfigView
    },

    // STATUS: OK
    emptyBlock: {
        name: "Empty Block",
        description: "Empty block to design your section/row.",
        disableValidation: true,

        fieldComponent: EmptyBlockControl,

        configData: {
            // Override here in order to not show the Label
            isShowLabel: false,
        }
    },

    // STATUS: OK
    textBlock: {
        name: "Text Block",
        description: "Block with text only (without any controls)",
        disableValidation: true,

        fieldComponent: TextBlockControl,
        configComponent: TextBlockConfigView,

        configData: {
            text: ""
        }
    }
};

const CONTROL_DEFAULT_DATA = {
    // default configuration
    'uniqueId': '', // :id
    'type': '', // control type...
    'name': '', // :name

    'label': '',
    'subLabel': '',
    'isShowLabel': true,

    'placeholderText': '',

    'containerClass': STYLES.COLUMNS.COL4,
    'additionalContainerClass': '',

    'additionalFieldClass': '',
    'additionalLabelClass': '',

    'defaultValue': '',

    /**
     * Validation that applied to the control
     * @var {ValidationRule[]} validations
     */
    'validations': [],

    // data of the other should we here...
};

/**
 * Create new control data
 * @param controlKey
 * @returns {CONTROL_DEFAULT_DATA}
 */
function createControlData(controlKey) {
    const newData = Object.assign({}, CONTROL_DEFAULT_DATA, CONTROLS[controlKey].configData || {})

    // set default data
    newData.label = CONTROLS[controlKey].name
    newData.type = controlKey

    // unique ID is a must - I used UUIDv4 => 99% Unique
    newData.uniqueId = "control-" + HELPER.getUUIDv4()

    return newData
}

export {
    CONTROLS,
    CONTROL_DEFAULT_DATA,
    createControlData
}