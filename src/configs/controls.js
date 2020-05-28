/**
 * Supported Controls in Vue-Form-Builder
 * @author Phat Tran
 */
import {STYLES} from "@/configs/styles";
import {HELPER} from "@/libraries/helper";

const CONTROLS = {
    input: {
        name: "Input Field",
        description: "Input text single line",
        icon: 'editPencil', // Follow ICON in `icon-facade.js` to see how it works.

        // config data for the input field - it will be merge with the CONTROL_DEFAULT_DATA
        configData: {
            validateEmail: false,
        },
    },

    number: {
        name: "Number Input Field",
        description: "Input text single line - Number Only",
    },

    text: {
        name: "Text Field",
        description: "Multiple line text field",
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
    },

    button: {
        name: "Button",
        description: "Simple button for your own purpose",
    }
};

const LABEL_DIRECTION = {
    top: 'top', // top view (label \n input)
    left: 'left' // left view (label - input)
};

const CONTROL_DEFAULT_DATA = {
    // default configuration
    'uniqueId': '', // :id
    'type': '', // control type...
    'name': '', // :name

    'label': '',
    'subLabel': '',
    'isShowDefaultLabel': false,
    'labelDirection': LABEL_DIRECTION.top, // top-left

    'containerClass': STYLES.COLUMNS.COL4,
    'additionalContainerClass': '',

    'isRequired': false, // check required
    'defaultValue': '',

    // data of the other should we here...
};

/**
 * Create new control data
 * @param controlKey
 * @returns {CONTROL_DEFAULT_DATA}
 */
function createControlData(controlKey) {
    const newData = Object.assign({}, CONTROL_DEFAULT_DATA, CONTROLS[controlKey].configData || {})

    newData.type = controlKey
    newData.uniqueId = "control-" + HELPER.getUUIDv4()

    return newData
}

export {
    CONTROLS,
    LABEL_DIRECTION,
    CONTROL_DEFAULT_DATA,
    createControlData
}