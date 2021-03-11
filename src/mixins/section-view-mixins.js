import AddRowControl from "@/views/builder/add-controls/AddRowControl";
import {createNewRow} from "@/configs/row";
import {SECTION_TYPES} from "@/configs/section";
import {EVENT_CONSTANTS} from "@/configs/events";
import draggable from 'vuedraggable'
import AddControlControl from "@/views/builder/add-controls/AddControlControl";
import ControlView from "@/views/builder/ControlView";
import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";

const SECTION_VIEW_MIXINS = {
    components: {
        AddRowControl, // Add Row
        draggable,  // For Sorting Row/Control
        AddControlControl, // Add Control
        ControlView // Show Control
    },

    mixins: [STYLE_INJECTION_MIXIN],

    props: {
        section: Object,
        rows: Object,
        controls: Object,
        permissions: Object
    },

    data: () => ({

    }),

    methods: {
        /**
         * Add a new rows for the section
         * @desc Typically, we create a new Row Object, push it into the global `Rows` Object.
         * And then assign the ID into the current section.rows
         * This method will be invoked whenever `AddRowControl` is emitted any value.
         * @emitKey addRowNotify
         */
        addRow($event = null, extendData = null) {
            // get rowType of Section
            const rowType = SECTION_TYPES[this.section.type].rowType;

            // Create new Row Object - BUSS: New Object
            const newRowObject = createNewRow(rowType, extendData);

            // Parent-Handle: Add Row | Push ID into Section.rows
            this.$formEvent.$emit(EVENT_CONSTANTS.BUILDER.ROW.CREATE, newRowObject)
            this.$formEvent.$emit(EVENT_CONSTANTS.BUILDER.SECTION.ADDED_ROW, this.section.uniqueId, newRowObject.uniqueId)
        },

        /**
         * Delete a row in the section
         * @desc Emit the rowId to the root-parent to handle the delete process
         * @param {Object} rowObject
         * @param {Object} sectionObj
         */
        deleteRow(rowObject, sectionObj) {
            this.$formEvent.$emit(
                EVENT_CONSTANTS.BUILDER.ROW.DELETE,
                rowObject.uniqueId,
                sectionObj.uniqueId
            )
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
         * Base group of drag/drop
         * We can share this for each section/row
         */
        rowDragGroup() {
            return "v-form-builder-control-row-section".concat(this.section.uniqueId)
        },

        /**
         * Accessor helper to check if the current section has control(s) or not
         */
        hasControl() {
            return this.section.controls.length > 0
        },

        /**
         * Classes for draggable
         * @returns {(string|string)[]}
         */
        draggableClasses() {
            return [
                this.styles.ROW,
                'control-list-container',
                this.hasControl ? '' : 'empty'
            ]
        },
    },
};

export {
    SECTION_VIEW_MIXINS
}