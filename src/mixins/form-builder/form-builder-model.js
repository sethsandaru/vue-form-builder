/**
 * [Note] Do not use this mixin for other purpose. This is where I move all the code of FormBuilder to keep easy to:
 *  - Structuring
 *  - Refactoring
 *  - ...
 *  This file will be handle the v-model of the FormBuilder.
 *  @author Phat Tran <phattranminh96@gmail.com>
 */
const EMIT_EVENT = "change";
const deepEqual = require('deep-equal') // TO CHECK THE DEEPEST VALUES OF THE FORM...

const FORM_BUILDER_MODEL = {
    props: {
        value: Object,
    },
    model: {
        event: EMIT_EVENT,
        props: "value"
    },

    watch: {
        /**
         * For Update New Configuration After User Changed the Form
         */
        formData: {
            deep: true, // deep watcher - because we have a long-tree object
            handler(newFormData) {
                this.$emit(EMIT_EVENT, newFormData)
            }
        },

        /**
         * For Update the New Configuration After User Applied new DATA into v-model
         */
        value: {
            deep:true,
            handler(newFormData, oldFormData) {
                // because this is in the initialize => no data at first
                if (typeof oldFormData === 'undefined') {
                    return
                }

                // we have to create a new formConfig for the "unexpected value" like: {}, null, undefined
                // only available for null and empty object data
                if (!newFormData || !Object.keys(newFormData).length) {
                    return this.mapping()
                }

                // this time object have data, we have to make sure everything
                if (deepEqual(newFormData, oldFormData)) {
                    return
                }

                // okay this time object is fully new and we need to do mapping again
                return this.mapping(newFormData)
            }
        }
    },
};

export {
    FORM_BUILDER_MODEL
}