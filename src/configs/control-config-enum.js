/**
 * Constant for Radio/Checkbox Styling
 * @type {{next: string, bothSide: string, line: string}}
 */
const RADIO_CHECKBOX_STYLE = {
    line: {
        val: 'line',
        description: "Line by Line"
    },
    next: {
        val: 'next',
        description: "Next to each others"
    },
    bothSide: {
        val: "bothSide",
        description: "Stay on each sides in a row (Left - Right)",
    }
};

/**
 * Constant for Radio/Checkbox position
 * @type {{left: string, center: string, right: string}}
 */
const RADIO_CHECKBOX_POSITION = {
    left: {
        val: 'left',
        description: "Left"
    },
    center: {
        val: 'center',
        description: 'Center',
    },
    right: {
        val: 'right',
        description: 'Right'
    }
};

/**
 * Return Type for Date-Picker
 * @type {{format: {val: string, description: string}, object: {val: string, description: string}}}
 */
const DATE_PICKER_RETURN_TYPES = {
    format: {
        val: "format",
        description: "Date String from Date Format"
    },
    object: {
        val: "object",
        description: "JS-Date Object"
    }
}

/**
 * Date Picker Start Date (Sunday, Monday,...) of the Week
 */
const DATE_PICKER_START_DATES = {
    monday: {
        val: 1,
        description: "Monday"
    },
    tuesday: {
        val: 2,
        description: "Tuesday"
    },
    wednesday: {
        val: 3,
        description: "Wednesday"
    },
    thursday: {
        val: 4,
        description: "Thursday"
    },
    friday: {
        val: 5,
        description: "Friday"
    },
    saturday: {
        val: 6,
        description: "Saturday"
    },
    sunday: {
        val: 0,
        description: "Sunday"
    },
}

/**
 * DROPDOWN DATA MODE
 *  - Normal
 *  - API
 */
const DROPDOWN_DATA_MODES = {
    list: {
        val: 'list',
        description: "Normal - Pre-Config List Items"
    },
    api: {
        val: 'api',
        description: "API - List Items from your own API",
    },
}

/**
 * File Upload Modes
 */
const FILE_UPLOAD_MODES = {
    normal: {
        val: 'normal',
        description: "Keep the file there for HTTP Form Request"
    },

    preUpload: {
        val: 'preUpload',
        description: "Pre-Upload to your own API"
    },
}

export  {
    RADIO_CHECKBOX_POSITION,
    RADIO_CHECKBOX_STYLE,

    DATE_PICKER_RETURN_TYPES,
    DATE_PICKER_START_DATES,

    DROPDOWN_DATA_MODES,

    FILE_UPLOAD_MODES
}