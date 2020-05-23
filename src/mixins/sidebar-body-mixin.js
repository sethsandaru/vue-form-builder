
const SIDEBAR_BODY_MIXIN = {
    props: {
        /**
         * Data Object that you will use for the Component inner Sidebar body
         * Normally, you need to create your own `data` field and emit it later.
         */
        dataPackage: Object
    },

    methods: {
        close() {
            this.$emit('close')
        }
    }
}

export {
    SIDEBAR_BODY_MIXIN
}