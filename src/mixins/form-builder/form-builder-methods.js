/**
 * [Note] Do not use this mixin for other purpose. This is where I move all the code of FormBuilder to keep easy to:
 *  - Structuring
 *  - Refactoring
 *  - ...
 *  This file will keep 90% methods of Form-Builder
 *  @author Phat Tran <phattranminh96@gmail.com>
 */

import {createNewSection, SECTION_DEFAULT_DATA} from "@/configs/section";
import {dataApplier} from "@/libraries/applier";

const FORM_BUILDER_METHODS = {
    data:() => ({
        sortedSections: [],
    }),

    methods: {
        /**
         * Do Mapping Before Rendering/Showing Up
         */
        mapping(value) {
            this.formData = Object.assign({}, this.formData, dataApplier(value))
            this.doSortSection()
        },

        /**
         * Create Default Form-Config-Data on a new section...
         */
        createDefaultData() {
            this.formData = Object.assign({}, dataApplier(this.formData));
        },

        /**
         * Create a new Blank Section into the Big `sections`
         */
        addSection(sectionType) {
            let newSortOrder = Object.keys(this.formData.sections).length + 1;
            let sectionObject = createNewSection(sectionType, newSortOrder)

            // we have to push it from $set otherwise it will not reactive (LOL)
            this.$set(this.formData.sections, sectionObject.uniqueId, sectionObject)
            this.doSortSection()
        },

        /**
         * Sort Section and Cache it...
         */
        doSortSection() {
            this.sortedSections = [];

            for (let [sectionId, sectionObject] of Object.entries(this.formData.sections)) {
                this.sortedSections.push(sectionObject)
            }

            this.sortedSections.sort((a, b) => {
                return a.sortOrder - b.sortOrder;
            })
        }
    },
}

export {
    FORM_BUILDER_METHODS
}