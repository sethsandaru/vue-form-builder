/**
 * Base extendation for the Row-View - Form-Builder
 */
import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";
import draggable from 'vuedraggable'
import AddControlToRowControl from "@/views/builder/add-controls/AddControlToRowControl";
import ControlView from "@/views/builder/ControlView";

const ROW_VIEW_MIXIN = {
    components: {
        draggable,
        AddControlToRowControl,
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
        }
    },

    computed: {
        /**
         * Property that will be used to drag - for Control Only
         */
        dragControlHandle() {
            return ".option-control.drag-item"
        },

        /**
         * Base group of drag/drop
         * We can share this for each section/row
         */
        dragGroup() {
            return "v-form-builder-control"
        },

        /**
         * Classes for draggable
         * @returns {(string|string)[]}
         */
        draggableClasses() {
            return [
                this.styles.ROW,
                'control-list-container',
                (
                    this.hasControl ?
                    '' :
                    'empty'
                )
            ]
        },

        /**
         * Pick up the controls detail of this rows
         * @returns {Array<{}>}
         */
        rowControls() {
            return this.row.controls.map(controlId => {
                return this.controls[controlId]
            });
        },

        /**
         * Check if we had controls
         * @returns {boolean}
         */
        hasControls() {
            return this.rowControls.length > 0
        }
    },

}
export {
    ROW_VIEW_MIXIN
}