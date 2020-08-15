/**
 * Base extendation for the Row-View - Form-Builder
 */
import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";

const ROW_VIEW_MIXIN = {
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
    },


}
export {
    ROW_VIEW_MIXIN
}