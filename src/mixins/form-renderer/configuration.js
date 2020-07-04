
/**
 * Form-Renderer Configuration Handler
 */
const deepEqual = require('deep-equal') // TO CHECK THE DEEPEST VALUES OF THE FORM...

const CONFIGURATION = {
    props: {
        formConfiguration: {
            type: Object,
            required: true,
        }
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
        }
    },

    created() {
        this.mapping(this.formConfiguration)
    },

};

export {
    CONFIGURATION
}