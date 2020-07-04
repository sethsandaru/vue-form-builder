/**
 * Styling for Vue-Form-Builder
 * Mostly it about the Container class.
 * <note>
 * The classes can be re-placed in run-time (For other CSS framework if you want)
 * But the main ideas is following Bootstrap, hopefully yours framework is have a same structural.
 * </note>
 * @author Phat Tran
 */

const STYLES = {
    CONTAINER: {
        FLUID: "container-fluid",
        NORMAL: "container"
    },

    ROW: "row",

    COLUMNS: {
        COL1: "col-md-1",
        COL2: "col-md-2",
        COL3: "col-md-3",
        COL4: "col-md-4",
        COL5: "col-md-5",
        COL6: "col-md-6",
        COL7: "col-md-7",
        COL8: "col-md-8",
        COL9: "col-md-9",
        COL10: "col-md-10",
        COL11: "col-md-11",
        COL12: "col-md-12",
    },

    /**
     * List Group Classes - Used in AddSectionVueControl
     */
    LIST_GROUP: {
        CONTAINER: "list-group", // div.list-group
        SINGLE_ITEM: "list-group-item list-group-item-action", //a[href=...].list-group-item.list-group-item-action
    },

    /**
     * Button Classes
     */
    BUTTON: {
        PRIMARY: "btn btn-primary",
        SECONDARY: "btn btn-secondary",
        DEFAULT: "btn btn-default",
        SUCCESS: "btn btn-success",
        DANGER: "btn btn-danger",
        WARNING: "btn btn-warning",
        INFO: "btn btn-info",
    },

    /**
     * Form Classes
     */
    FORM: {
        FORM_GROUP: "form-group",
        INPUT_GROUP: "input-group",
        FORM_CONTROL: "form-control",
        ERROR_OUTLINE: "is-invalid",
        ERROR_MESSAGE: "invalid-feedback"
    },

    /**
     * Table Classes
     */
    TABLE: {
        TABLE_CLASS: "table",
        TR_CLASS: "",
        TD_CLASS: ""
    },

};

export {
    STYLES
}