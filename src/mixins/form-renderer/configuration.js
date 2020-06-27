
/**
 * Form-Renderer Configuration Handler
 */

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
                return this.mapping(val)
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