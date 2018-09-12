import { faEdit, faCalculator, faCalendarAlt, faClock, faCheck, faDatabase } from '@fortawesome/free-solid-svg-icons'

var FORM_CONSTANTS = {};

FORM_CONSTANTS.SectionLayout = {
  collapse: "Collapse",
  tab: "Tab",
  // inner: "Inner Parent",
};

FORM_CONSTANTS.Section = {
    layout: "",
    name: "",
    label: "",
    clientKey: "",
    order: 0,
    rows: [],

    // for dynamic
    isDynamic: false,
    minInstance: 1,
    maxInstance: 0, //0 for unlimited
    instances: [], // for save data in GUI to easily to retrieve @@
};

FORM_CONSTANTS.Row = {
    name: "",
    label: "",
    order: 0,
    controls: [],
};

FORM_CONSTANTS.Control = {
    type: "",
    name: "",
    fieldName: "",
    label: "",
    order: 0,
    defaultValue: "",
    value: "",
    className: 'col-md-4',
    readonly: false,

    // attr for text
    isMultiLine: false,

    // attr for number
    isInteger: false,
    decimalPlace: 0,

    // attr for datePicker
    isTodayValue: false,
    dateFormat: "", // enhancement later

    // attr for timePicker
    isNowTimeValue: false,
    timeFormat: "", // enhancement later

    // attr for select
    isMultiple: false,
    dataOptions: [],

    // attr for checkbox
    isChecked: false
};

FORM_CONSTANTS.Type = {
    text: {
        label:"Text Input",
        icon: faEdit
    },
    number: {
        label:"Number Input",
        icon: faCalculator
    },
    datepicker: {
        label: "Date Picker",
        icon: faCalendarAlt
    },
    timepicker: {
        label:"Time Picker",
        icon: faClock
    },
    select: {
        label: "Select Option",
        icon: faDatabase
    },
    checkbox: {
        label:"Checkbox",
        icon: faCheck
    },
};

FORM_CONSTANTS.WidthOptions = {
    "col-md-1": "Width 1 parts",
    "col-md-2": "Width 2 parts",
    "col-md-3": "Width 3 parts",
    "col-md-4": "Width 4 parts",
    "col-md-5": "Width 5 parts",
    "col-md-6": "Width 6 parts",
    "col-md-7": "Width 7 parts",
    "col-md-8": "Width 8 parts",
    "col-md-9": "Width 9 parts",
    "col-md-10": "Width 10 parts",
    "col-md-11": "Width 11 parts",
    "col-md-12": "Width 12 parts",
};

FORM_CONSTANTS.OptionDefault = {
    id: "",
    text: ""
};

export {
  FORM_CONSTANTS
}
