/**
 * Form-Renderer Configuration Handler
 */
import {GLOBAL_CONFIG} from "@/configs/global";

const deepEqual = require('deep-equal') // TO CHECK THE DEEPEST VALUES OF THE FORM...

const CONFIGURATION = {
    props: {
        /**
         * The main form configuration that generated from FormBuilder
         */
        formConfiguration: {
            type: Object,
            required: true,
        },

        /**
         * Read-only mode
         * Show up text instead of input controls
         */
        readOnly: {
            type: Boolean,
            default: () => false,
        },
    },

    watch: {
        /**
         * Watching the configuration, if user change it => need to re-updated the form itself
         */
        formConfiguration: {
            deep: true,
            handler(val) {
                if (deepEqual(val, this.formData)) {
                    return
                }

                this.mapping(val)
                this.createValueContainer(val)
            }
        },
    },

    created() {
        this.mapping(this.formConfiguration)
    },

    computed: {
        /**
         * Get the <form> id
         * @returns {string}
         */
        formTagId: () => GLOBAL_CONFIG.rendererFormId
    }
};

export {
    CONFIGURATION
}