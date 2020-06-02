/**
 * Supported Controls in Vue-Form-Builder
 * @author Phat Tran
 */
import {STYLES} from "@/configs/styles";
import {HELPER} from "@/libraries/helper";
import InputControl from "@/views/controls/InputControl"
import TextControl from "@/views/controls/TextControl"
import ButtonControl from "@/views/controls/ButtonControl"
import EmptyBlockControl from "@/views/controls/EmptyBlockControl";
import TextBlockControl from "@/views/controls/TextBlockControl";

const CONTROLS = {
    input: {
        name: "Input Field",
        description: "Input text single line",
        icon: 'editPencil', // Follow ICON in `icon-facade.js` to see how it works.

        // config data for the input field - it will be merge with the CONTROL_DEFAULT_DATA
        configData: {
            validateEmail: false,
        },

        // component mapping
        fieldComponent: InputControl,
    },

    number: {
        name: "Number Input Field",
        description: "Input text single line - Number Only",
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
        name: "Checkbox",
        description: "Checkbox list items (Multiple Select)",
    },

    radio: {
        name: "Radio",
        description: "Radio-Button list items (Single Select)",
    },

    label: {
        name: "Label",
        description: "Simple label text for your purpose",

        configData: {
            forAttribute: "", // `for` for any control?
        },
    },

    button: {
        name: "Button",
        description: "Simple button for your own purpose",

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

        fieldComponent: ButtonControl
    },

    emptyBlock: {
        name: "Empty Block",
        description: "Empty block to design your section/row.",
        fieldComponent: EmptyBlockControl,

        configData: {
            // Override here in order to not show the Label
            isShowLabel: false,
        }
    },

    textBlock: {
        name: "Text Block",
        description: "Block with text only (without any controls)",
        fieldComponent: TextBlockControl,

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

    'containerClass': STYLES.COLUMNS.COL4,
    'additionalContainerClass': '',

    'additionalFieldClass': '',
    'additionalLabelClass': '',

    'defaultValue': '',

    /**
     * Validation that applied to the control
     * @var Validation[] validations
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