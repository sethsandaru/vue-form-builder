<template>
    <button :id="control.uniqueId"
            :class="[control.buttonClass, control.additionalFieldClass]"
            v-text="control.label"
            :onclick="(isOnclickMode ? control.onclickCode : false)"
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
                // prefer to trigger the onclick first
                if (this.isOnclickMode() || this.control.onclickCode) {
                    return
                }

                // emit to the specific emitEventCode
                this.$emit(this.control.emitEventCode, this.control.emitEventData);
            }
        },

        computed: {
            /**
             * Check the current onclick mode
             * @returns {boolean}
             */
            isOnclickMode() {
                return this.control.bindingType === 1;
            }
        }
    }
</script>

<style scoped>

</style>