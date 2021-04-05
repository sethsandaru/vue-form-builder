import {ALERT_DIALOG} from "@/libraries/alert-dialog";

const SIDEBAR_BODY_MIXIN = {
    props: {
        /**
         * Data Object that you will use for the Component inner Sidebar body
         * Normally, you need to create your own `data` field and emit it later.
         */
        dataPackage: Object,

        /**
         * Main Form-Data from the Parent.
         * There might be some Configuration need these data.
         */
        formData: Object
    },

    data: () => ({
        /**
         * Ideally, you have put override this key. It will be used to access your data to send it back to your component
         * @example For SidebarFormConfiguration. I created `formConfiguration` data field. And I will handle all data-changing stuff
         * only in `formConfiguration`. And that will be the data I need to send it back to the right component.
         * @required
         */
        dataKey: "",
    }),

    methods: {
        /**
         * Close the sidebar without fire any events
         */
        close() {
            this.$emit(this.emitCloseKey, false)
        },

        /**
         * Save the configuration (Actually I will close the sidebar and emit event =)) )
         */
        save(close = false) {
            let data = this[this.dataKey]

            // pre-validation?
            if (this.preSaveValidation) {
                const validationErrorMessage = this.preSaveValidation();

                // if has validation error => show error text and stop the submit process
                if (validationErrorMessage) {
                    ALERT_DIALOG.show(validationErrorMessage);
                    return;
                }
            }

            if (close) {
                this.$emit(this.emitSaveAndCloseKey, data)
            } else {
                this.$emit(this.emitSaveKey, data)
            }
        },
    },

    computed: {
        /**
         * Emit-Key to parent to close the sidebar
         * @returns {string}
         */
        emitCloseKey() {
            return 'close'
        },

        /**
         * Emit-Key to the parent to save the result
         * @returns {string}
         */
        emitSaveKey() {
            return 'save'
        },

        /**
         * Emit-Key - Save and Close
         * @returns {string}
         */
        emitSaveAndCloseKey() {
            return 'saveAndClose'
        }
    }
}

export {
    SIDEBAR_BODY_MIXIN
}