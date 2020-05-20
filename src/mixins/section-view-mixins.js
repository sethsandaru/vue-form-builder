import AddRowControl from "@/views/builder/AddRowControl";

const SECTION_VIEW_MIXINS = {
    components: {AddRowControl},
    props: {
        section: Object,
        rows: Object,
    },

    methods: {
        /**
         * Add a new rows for the section
         * @desc Typically, we create a new Row Object, push it into the global `Rows` Object. And then assign the ID
         * into the current section.rows
         * This method will be invoked whenever `AddRowControl` is emitted any value.
         * @emitKey addRowNotify
         */
        addRow() {
            // TODO: Create new Row Object

            // TODO: Add it into row object

            // TODO: assign the ID into section.rows
        },
    },

    computed: {
        /**
         * Computing rows belong to the current section
         * @returns rows[]
         */
        sectionRows() {
            let rows = [];

            // we traverse all the section and pick it by ID
            this.section.rows.forEach(rowId => {
                if (this.rows[rowId]) {
                    rows.push(this.rows[rowId])
                }
            })

            return rows;
        }
    }
};

export {
    SECTION_VIEW_MIXINS
}