/**
 * Base extendation for the Row-View - Form-Builder
 */
import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";
import ControlView from "@/views/renderer/ControlView";

const RENDERER_ROW_VIEW_MIXIN = {
    components: {
        ControlView
    },
    mixins: [STYLE_INJECTION_MIXIN],

    props: {
        /**
         * Section that belong to the current row
         */
        section: {
            type: Object,
            required: true
        },

        /**
         * Current row data
         */
        row: {
            type: Object,
            required: true
        },

        /**
         * Controls of Form
         */
        controls: {
            type: Object,
            required: true,
        },

        valueContainer: Object,
        validationErrors: Object,
        readOnly: Boolean,
    },

    computed: {

        /**
         * Check if we had controls
         * @returns {boolean}
         */
        hasControls() {
            return this.row.controls.length > 0
        },

        /**
         * Classes for draggable
         * @returns {(string|string)[]}
         */
        containerClasses() {
            return [
                this.styles.ROW,
                'control-list-container',
                (
                    this.hasControls
                        ? ''
                        : 'empty'
                )
            ]
        },
    },
}
export {
    RENDERER_ROW_VIEW_MIXIN
}