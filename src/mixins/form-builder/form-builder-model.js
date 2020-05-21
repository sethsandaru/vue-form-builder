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
        formData: {
            deep: true, // deep watcher - because we have a long-tree object
            handler(newFormData) {
                this.$emit(EMIT_EVENT, newFormData)
            },
        }
    },
};

export {
    FORM_BUILDER_MODEL
}