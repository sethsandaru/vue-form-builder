/**
 * [Note] Do not use this mixin for other purpose. This is where I move all the code of FormBuilder to keep easy to:
 *  - Structuring
 *  - Refactoring
 *  - ...
 *  This file will be handled all the Event (mostly listening) from the children to update the big `formData`
 *  @author Phat Tran <phattranminh96@gmail.com>
 */
import {EVENT_CONSTANTS} from "@/configs/events";
import {HELPER} from "@/libraries/helper";


const FORM_BUILDER_EVENT_HANDLER = {
    methods: {
        /**
         * Do mapping for section after row added
         * @param sectionId
         * @param rowId
         */
        sectionAndRowMapping(sectionId, rowId) {
            // push it into the section Rows...
            // I can ensure that sectionId is exists to be retrieved
            this.formData.sections[sectionId].rows.push(rowId)
        },

        /**
         * Push-up section (SORT)
         * @param sectionObj
         * @param {Number} type
         *  - 0 => Up
         *  - 1 => Down
         */
        sectionPushedUp(sectionObj, type = 0) {
            if (
                // sort == 0 and push up => stop
                (sectionObj.sortOrder <= 1 && type === 0)
                ||
                // sort == total_sections and push down => stop
                (sectionObj.sortOrder === this.sortedSections.length && type === 1)
            ) {
                return
            }

            // old sort order to exchange with the upper section
            let postSortOrder = sectionObj.sortOrder;

            // pick section from sort order - Sort Order is unique
            let preSectionOrder = (type === 0) ? (postSortOrder - 1) : (postSortOrder + 1)
            let preSection = HELPER.find(this.formData.sections, "sortOrder", preSectionOrder)

            // swap now
            this.$set(this.formData.sections[sectionObj.uniqueId], 'sortOrder', preSectionOrder)
            this.$set(this.formData.sections[preSection.uniqueId], 'sortOrder', postSortOrder)

            // Sort Again After Swapped Order
            this.doSortSection()
        },

        /**
         * Delete a section
         * @param sectionId
         */
        sectionDelete(sectionId) {
            // validate input
            if (!this.formData.sections[sectionId]) {
                return
            }

            // need to delete all the related control & row
            let sectionObj = this.formData.sections[sectionId];
            sectionObj.rows.forEach(rowId => {

                // delete inner control of the rows
                let rowItem = this.formData.rows[rowId]
                rowItem.controls.forEach(controlId => {
                    // delete control by ID :D
                    this.$delete(this.formData.controls, controlId)
                });

                // delete this rows.
                this.$delete(this.formData.rows, rowItem.uniqueId)
            })

            // delete ($delete to reactive)
            this.$delete(this.formData.sections, sectionId)

            // Sort Again After Deleted
            this.doSortSection()

            // re-index sortOrder
            // thankfully this still keep reference... :D
            let index = 1;
            for (let sectionObj of this.sortedSections) {
                sectionObj.sortOrder = index++;
            }
        },

        /**
         * Update data for section
         * @param sectionObj
         */
        sectionUpdate(sectionObj) {
            let sectionId = sectionObj.uniqueId

            // validate input
            if (!this.formData.sections.hasOwnProperty(sectionId)) {
                return
            }

            // update by using the extend . best way
            this.formData.sections[sectionId] = Object.assign(this.formData.sections[sectionId], sectionObj)
        },

        /**
         * Added new row
         * @param rowObject
         */
        rowNewAdded(rowObject) {
            // $set => reactive
            this.$set(this.formData.rows, rowObject.uniqueId, rowObject)
        },

        /**
         * Delete a specific row in the section
         * @param {string} rowId rowId that need to be delete
         * @param {string} sectionId row's current sectionId
         */
        rowDelete(rowId, sectionId) {
            // first, delete row in section
            const indexInSection = HELPER.findIndex(this.formData.sections[sectionId].rows, undefined, rowId)
            this.formData.sections[sectionId].rows.splice(indexInSection, 1)

            // second, remove row in the big rows
            this.$delete(this.formData.rows, rowId)

            // lastly, final init to which-ever components listen to the event after deleted
            this.$formEvent.$emit(EVENT_CONSTANTS.BUILDER.ROW.DELETED, rowId, sectionId)
        },


        /**
         * Added new control to a section
         * @param {string} parentId
         * @param {Object} controlObj
         */
        controlNewAdded(parentId, controlObj) {
            // add into big list
            this.$set(this.formData.controls, controlObj.uniqueId, controlObj)

            // get type of the parent (section / row)
            const type = this.formData.sections.hasOwnProperty(parentId)
                ? 'section'
                : 'row';
            const controlUniqueId = controlObj.uniqueId

            // add controlID to section / row
            if (type === 'section') {
                this.formData.sections[parentId].controls.push(controlUniqueId)
            } else {
                this.formData.rows[parentId].controls.push(controlUniqueId)
            }
        },

        /**
         * Delete a control from section/row
         * @param {string} parentId - Might be SectionId, might be RowId
         * @param {string} controlId - LOL
         * @afterHandled Emit an event to notify the deletion is complete
         */
        controlDeletion(parentId, controlId) {
            const type = this.formData.sections.hasOwnProperty(parentId)
                ? 'section'
                : 'row';

            // FIRST: We delete the relationship in section/row
            if (type === 'section') {
                // find index and delete in section-controls
                let indexInSection = HELPER.findIndex(this.formData.sections[parentId].controls, undefined, controlId)
                this.formData.sections[parentId].controls.splice(indexInSection, 1)
            } else {
                // find index and delete in row-controls
                let indexInRow = HELPER.findIndex(this.formData.rows[parentId].controls, undefined, controlId)
                this.formData.rows[parentId].controls.splice(indexInRow, 1)
            }

            // SECOND: We delete the control object in `controls`
            this.$delete(this.formData.controls, controlId)

            // LAST: Emit DELETED (might be some component will register this??)
            this.$formEvent.$emit(EVENT_CONSTANTS.BUILDER.CONTROL.DELETED, parentId, controlId)
        },

        /**
         * Update a control
         * @param {String} controlId
         * @param {Object} controlData
         */
        controlUpdated(controlId, controlData) {
            // validate input
            if (!this.formData.controls.hasOwnProperty(controlId)) {
                return
            }

            // update by using the extend . best way
            this.formData.controls[controlId] = Object.assign(this.formData.controls[controlId], controlData)
        }
    },

    created() {
        // section events
        this.$formEvent.$on(EVENT_CONSTANTS.BUILDER.SECTION.ADDED_ROW, this.sectionAndRowMapping)
        this.$formEvent.$on(EVENT_CONSTANTS.BUILDER.SECTION.PUSH, this.sectionPushedUp)
        this.$formEvent.$on(EVENT_CONSTANTS.BUILDER.SECTION.DELETE, this.sectionDelete)
        this.$formEvent.$on(EVENT_CONSTANTS.BUILDER.SECTION.UPDATE, this.sectionUpdate)

        // row events
        this.$formEvent.$on(EVENT_CONSTANTS.BUILDER.ROW.CREATE, this.rowNewAdded)
        this.$formEvent.$on(EVENT_CONSTANTS.BUILDER.ROW.DELETE, this.rowDelete)

        // control events
        this.$formEvent.$on(EVENT_CONSTANTS.BUILDER.CONTROL.CREATE, this.controlNewAdded)
        this.$formEvent.$on(EVENT_CONSTANTS.BUILDER.CONTROL.DELETE, this.controlDeletion)
        this.$formEvent.$on(EVENT_CONSTANTS.BUILDER.CONTROL.UPDATE, this.controlUpdated)
    }
}

export {
    FORM_BUILDER_EVENT_HANDLER
}