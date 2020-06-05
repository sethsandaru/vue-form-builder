<template>
    <button :id="control.uniqueId"
            :class="buttonClasses"
            :name="control.name"
            v-text="control.label"
            @click="clickedHandle"
    ></button>
</template>

<script>
    import {CONTROL_FIELD_EXTEND_MIXIN} from "@/mixins/control-field-extend-mixin";

    /**
     * Button Control
     * Usage:
     *  - label => button name
     *  - buttonType
     *  - buttonClass
     *  - additionalFieldClass
     */
    export default {
        name: "ButtonControl",
        mixins: [CONTROL_FIELD_EXTEND_MIXIN],
        methods: {
            clickedHandle() {
                if (this.control.isRunValidation) {
                    // run validation here
                    // TODO: Validation
                }

                // emit to the specific emitEventCode
                this.$emit(this.control.emitEventCode, this.control.emitEventData);
            }
        },

        computed: {
            buttonClasses() {
                return [
                    this.control.buttonClass,
                    this.control.additionalFieldClass
                ]
            }
        }
    }
</script>