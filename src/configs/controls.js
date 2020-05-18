/**
 * Supported Controls in Vue-Form-Builder
 * @author Phat Tran
 */

const CONTROLS = {
    input: {
        name: "Input Field",
        description: "Simple field which let user input their own text, single line.",
        icon: 'edit-pencil.svg', // I only use SVG, please respect and follow the rule

        // config data for the input field - it will be merge with the CONTROL_DEFAULT_DATA
        configData: {

        },
    },
    number: {},
    text: {},
    richText: {},
    date: {},
    dateRange: {},
    fileUpload: {},
    dropDown: {},
    checkbox: {},
    radio: {},
    label: {},
};

const LABEL_DIRECTION = {
    top: 'top', // top view (label \n input)
    left: 'left' // left view (label - input)
};

const CONTROL_DEFAULT_DATA = {
    // default configuration
    'uniqueId': '',
    'type': '', // control type...
    'label': '',
    'subLabel': '',
    'isShowDefaultLabel': false,
    'labelDirection': LABEL_DIRECTION.top, // top-left
    'sortOrder': 0,
    'containerClass': '',

    'isRequired': false, // check required
    'defaultValue': '',

    // data of the other should we here...
};

export {
    CONTROLS,
    LABEL_DIRECTION,
    CONTROL_DEFAULT_DATA
}