/**
 * Section Sort Mixins
 * @desc Where I handle the sorting (push up/down) for the Section
 * @used SectionNavigationBar
 * @author Phat Tran
 */
import {EVENT_CONSTANTS} from "@/configs/events";

const SECTION_SORT_MIXINS = {
    methods: {
        /**
         * Push-up Section
         * @desc Send Fire Event to Parent to handle the Push-Up of Current Section
         * @listener FormBuilder
         */
        pushUp() {
            this.$formEvent.$emit(EVENT_CONSTANTS.BUILDER.SECTION.PUSH, this.section, 0)
        },

        /**
         * Push-down Section
         * @desc Send Fire Event to Parent to handle the Push-Down of Current Section
         * @listener FormBuilder
         */
        pushDown() {
            this.$formEvent.$emit(EVENT_CONSTANTS.BUILDER.SECTION.PUSH, this.section, 1)
        }
    }
}


export {
    SECTION_SORT_MIXINS
}