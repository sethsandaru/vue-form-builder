/**
 * [Note] Do not use this mixin for other purpose. This is where I move all the code of FormBuilder to keep easy to:
 *  - Structuring
 *  - Refactoring
 *  - ...
 *  This file will be handled all the Event (mostly listening) from the children to update the big `formData`
 *  @author Phat Tran <phattranminh96@gmail.com>
 */
import {EVENT_CONSTANTS} from "@/configs/events";


const FORM_BUILDER_EVENT_HANDLER = {
    methods: {
        /**
         * Do mapping for section after row added
         * @param sectionId
         * @param rowId
         */
        sectionAndRowMapping(sectionId, rowId) {
            // push it into the section Rows...
            this.formData.sections[sectionId].rows.push(rowId)
        },

        /**
         * Added new row
         * @param rowObject
         */
        rowNewAdded(rowObject) {
            this.rows[rowObject.uniqueId] = rowObject
        }
    },

    created() {
        // section events
        this.$event.$on(EVENT_CONSTANTS.BUILDER.SECTION.ADDED_ROW, this.sectionAndRowMapping)

        // row events
        this.$event.$on(EVENT_CONSTANTS.BUILDER.ROW.CREATE, this.rowNewAdded)

        // control events
    }
}

export {
    FORM_BUILDER_EVENT_HANDLER
}