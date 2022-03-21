/**
 * Supported Controls in Vue-Form-Builder
 * @author Phat Tran
 */
import {STYLES} from "@/configs/styles";
import {HELPER} from "@/libraries/helper";
import {
    DATE_PICKER_RETURN_TYPES, DATE_PICKER_START_DATES,

    RADIO_CHECKBOX_POSITION, RADIO_CHECKBOX_STYLE,

    DROPDOWN_DATA_MODES,

    // FILE_UPLOAD_MODES
} from "@/configs/control-config-enum";

// Control-GUI-Component
import ButtonControl from "@/views/controls/ButtonControl"
import EmptyBlockControl from "@/views/controls/EmptyBlockControl";
import TextBlockControl from "@/views/controls/TextBlockControl";
import LabelControl from "@/views/controls/LabelControl";

// Control-Config-Component
import TextBlockConfigView from "@/views/control-configs/TextBlockConfigView";
import ButtonConfigView from "@/views/control-configs/ButtonConfigView";
import LabelConfigView from "@/views/control-configs/LabelConfigView";

const CONTROLS = {

    label: {
        name: "Label",
        description: "Simple label text show up in your Form",
        disableValue: true,

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

    button: {
        name: "Button",
        description: "Simple button for your own purpose",
        disableValidation: true,
        disableValue: true,

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

    emptyBlock: {
        name: "Empty Block",
        description: "Empty block to design your section/row.",
        disableValidation: true,
        disableValue: true,

        fieldComponent: EmptyBlockControl,

        configData: {
            // Override here in order to not show the Label
            isShowLabel: false,
        }
    },

    textBlock: {
        name: "Text Block",
        description: "Block with text only (without any controls)",
        disableValidation: true,
        disableValue: true, // if you provide this, the control field value will not be recorded.

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

    'placeholderText': '', // :placeholder

    'containerClass': STYLES.COLUMNS.COL4,
    'additionalContainerClass': '', // :class for the <div> outer container

    'additionalFieldClass': '', // :class for <input> <select> ...
    'additionalLabelClass': '', // :class for the <label>

    'defaultValue': '',

    /**
     * Validation that applied to the control
     * @var {ValidationRule[]} validations
     */
    'validations': [],

    // data of the others - coming up later
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
