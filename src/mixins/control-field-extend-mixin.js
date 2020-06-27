/**
 * Base Setup for any `controls` of Control in Vue-Form-Builder
 * @example InputControl - use the mixin. I'll keep our code extendable as possible
 */
import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";

const EMIT_EVENT = "change";

const CONTROL_FIELD_EXTEND_MIXIN = {
    mixins: [STYLE_INJECTION_MIXIN],

    props: {
        // control configuration
        control: {
            type: Object,
            required: true
        },

        // v-model value
        value: null, // any types
    },

    // global data-field - available to override
    data: () =>({
        stopDefaultValueAssign: false
    }),

    /**
     * For V-Model Purpose
     * Basically, we will emit the 'change' to the parent to keep the update...
     */
    model: {
        event: EMIT_EVENT,
        props: "value"
    },

    watch: {
        /**
         * Watch if there is new data being assigned
         * @param val
         */
        value(val) {
            this.setValue(val)
        }
    },

    methods: {
        /**
         * Run this to emit the value to the parent
         * @param val
         */
        updateValue(val) {
            this.$emit(EMIT_EVENT, val)
        },

        /**
         * Need-To-Override Method - Set Value.
         * Set value from parent to the current field/control
         */
        setValue(val) {return val} // NEED TO OVERRIDE
    },

    computed: {
        /**
         * Class for Field (input)
         * @returns {(string)[]}
         */
        controlFieldClass() {
            return [
                this.styles.FORM.FORM_CONTROL,
                this.control.additionalFieldClass
            ]
        },

        /**
         * Control Name
         * @returns {*|string|string}
         */
        controlName() {
            return this.control.name || this.control.uniqueId
        }
    },

    /**
     * Global post-mounted processing
     */
    mounted() {
        // default set value
        if (
            this.stopDefaultValueAssign === false &&
            !this.value &&
            this.control.defaultValue
        ) {
            this.updateValue(this.control.defaultValue)
        }
    },
}

export {
    CONTROL_FIELD_EXTEND_MIXIN
}