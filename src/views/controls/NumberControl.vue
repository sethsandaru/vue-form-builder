<template>
    <input :id="control.uniqueId"
           type="number"
           :class="controlFieldClass"
           :value="number"
           :name="control.name"
           :placeholder="control.placeholderText"
           @input="convertToNumber($event.target.value)"
    />
</template>

<script>
    import {CONTROL_FIELD_EXTEND_MIXIN} from "@/mixins/control-field-extend-mixin";

    /**
     * Number Control
     * Later
     * @focusin="previewMode = number"
     * @focusout="updatedPreview"
     */
    export default {
        name: "NumberControl",
        mixins: [CONTROL_FIELD_EXTEND_MIXIN],

        data: () => ({
            number: 0,
            stopDefaultValueAssign: true,

            previewMode: "0"
        }),

        methods: {
            /**
             * Convert to Number before Emit V-Model
             * @param value
             */
            convertToNumber(value) {
                let convertedVal = this.isRealNumber ? parseFloat(value) : parseInt(value, 10)

                // emit now
                this.updateValue(convertedVal)

                // re-assign val
                //this.updatedPreview()
                this.number = convertedVal
            },

            /**
             * Updated Preview Mode (Mask preview, eg: 1,123,456.00) for Number
             * TODO: Available only v2.1
             */
            updatedPreview() {

            },

            /**
             * Specific set value for the Number Control from the v-model
             */
            setValue(val) {
                this.convertToNumber(val)
            }
        },

        computed: {
            /**
             * Check if the num control is using int or float/double
             * @returns {boolean}
             */
            isRealNumber() {
                return this.control.isReal
            },
        },

        created() {
            // set default value (if exists)
            if (this.control.defaultValue) {
                this.convertToNumber(this.control.defaultValue)
            }
        },
    }
</script>

<style scoped>

</style>