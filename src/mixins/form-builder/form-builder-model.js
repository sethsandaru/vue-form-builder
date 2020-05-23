/**
 * [Note] Do not use this mixin for other purpose. This is where I move all the code of FormBuilder to keep easy to:
 *  - Structuring
 *  - Refactoring
 *  - ...
 *  This file will be handle the v-model of the FormBuilder.
 *  @author Phat Tran <phattranminh96@gmail.com>
 */
const EMIT_EVENT = "change";

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
            handler(newFormData) {
                if (newFormData) {
                    return
                }
                this.mapping(newFormData)
            }
        }
    },
};

export {
    FORM_BUILDER_MODEL
}