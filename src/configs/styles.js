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
        FLUID: "container-fluid md-layout",
        NORMAL: "container"
    },

    ROW: "row md-layout",

    COLUMNS: {
        COL1: "col-md-1 md-layout-item md-size-5",
        COL2: "col-md-2 md-layout-item md-size-10",
        COL3: "col-md-3 md-layout-item md-size-25",
        COL4: "col-md-4 md-layout-item md-size-33",
        COL5: "col-md-5 md-layout-item md-size-40",
        COL6: "col-md-6 md-layout-item md-size-50",
        COL7: "col-md-7 md-layout-item md-size-60",
        COL8: "col-md-8 md-layout-item md-size-66",
        COL9: "col-md-9 md-layout-item md-size-75",
        COL10: "col-md-10 md-layout-item md-size-90",
        COL11: "col-md-11 md-layout-item md-size-95",
        COL12: "col-md-12 md-layout-item md-size-100",
    },

    /**
     * List Group Classes - Used in AddSectionVueControl
     */
    LIST_GROUP: {
        CONTAINER: "list-group md-list", // div.list-group
        SINGLE_ITEM: "list-group-item list-group-item-action md-list-item md-list-item-action", //a[href=...].list-group-item.list-group-item-action
    },

    /**
     * Button Classes
     */
    BUTTON: {
        PRIMARY: "btn btn-primary md-button md-raised md-primary md-theme-default",
        SECONDARY: "btn btn-secondary md-button md-raised md-secondary md-theme-default",
        DEFAULT: "btn btn-default md-button md-raised md-default md-theme-default",
        SUCCESS: "btn btn-success md-button md-raised md-success md-theme-default",
        DANGER: "btn btn-danger md-button md-raised md-accent md-theme-default",
        WARNING: "btn btn-warning md-button md-raised md-warning md-theme-default",
        INFO: "btn btn-info md-button md-raised md-info md-theme-default",
    },

    /**
     * Form Classes
     */
    FORM: {
        FORM_GROUP: "form-group",
        INPUT_GROUP: "input-group",
        FORM_CONTROL: "form-control md-field",
        ERROR_OUTLINE: "is-invalid md-error",
        ERROR_MESSAGE: "invalid-feedback"
    },

    /**
     * Table Classes
     */
    TABLE: {
        TABLE_CLASS: "table md-table",
        TR_CLASS: "md-table-row",
        TD_CLASS: "md-table-cell"
    },

};

export {
    STYLES
}