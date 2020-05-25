
const SIDEBAR_BODY_MIXIN = {
    props: {
        /**
         * Data Object that you will use for the Component inner Sidebar body
         * Normally, you need to create your own `data` field and emit it later.
         */
        dataPackage: Object
    },

    methods: {
        /**
         * Close the sidebar without fire any events
         */
        close() {
            this.$emit(this.emitCloseKey, false)
        }
    },

    computed: {
        /**
         * Emit to parent to close the sidebar
         * @returns {string}
         */
        emitCloseKey() {
            return 'close'
        },


    }
}

export {
    SIDEBAR_BODY_MIXIN
}