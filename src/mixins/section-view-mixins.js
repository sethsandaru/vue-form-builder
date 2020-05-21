import AddRowControl from "@/views/builder/AddRowControl";
import {createNewRow} from "@/configs/row";
import {SECTION_TYPES} from "@/configs/section";
import {EVENT_CONSTANTS} from "@/configs/events";

const SECTION_VIEW_MIXINS = {
    components: {AddRowControl},
    props: {
        section: Object,
        rows: Object,
    },
    data: () => ({
        sortedRows: [],
    }),

    methods: {
        /**
         * Add a new rows for the section
         * @desc Typically, we create a new Row Object, push it into the global `Rows` Object. And then assign the ID
         * into the current section.rows
         * This method will be invoked whenever `AddRowControl` is emitted any value.
         * @emitKey addRowNotify
         */
        addRow() {
            // get rowType of Section
            let rowType = SECTION_TYPES[this.section.type].rowType;

            // Create new Row Object - BUSS: New Object
            let newRowObject = createNewRow(rowType);

            // Parent-Handle: Add Row | Push ID into Section.rows
            this.$formEvent.$emit(EVENT_CONSTANTS.BUILDER.ROW.CREATE, newRowObject)
            this.$formEvent.$emit(EVENT_CONSTANTS.BUILDER.SECTION.ADDED_ROW, this.section.uniqueId, newRowObject.uniqueId)
        },

        /**
         * Sort rows before rendering/after added/deleted/... row
         */
        doSortRows() {
            this.sortedRows = [];

            // get all rows belong to this section hehe
            this.section.rows.forEach(rowId => {
                if (this.rows[rowId]) {
                    this.sortedRows.push(this.rows[rowId])
                }
            })

            // then sort it...
            this.sortedRows.sort((a, b) => {
                return a.sortOrder - b.sortOrder;
            })
        }
    },

    created() {
        this.doSortRows()
    },
};

export {
    SECTION_VIEW_MIXINS
}