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

export  {
    RADIO_CHECKBOX_POSITION,
    RADIO_CHECKBOX_STYLE,
    DATE_PICKER_RETURN_TYPES
}