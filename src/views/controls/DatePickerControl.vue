<template>
    <input type="text"
           :id="control.uniqueId"
           :name="control.name || control.uniqueId"
           :class="styles.FORM.FORM_CONTROL"
    />
</template>

<script>
    import {CONTROL_FIELD_EXTEND_MIXIN} from "@/mixins/control-field-extend-mixin";
    import Litepicker from 'litepicker';
    import dayjs from 'dayjs';
    import {DATE_PICKER_RETURN_TYPES} from "@/configs/control-config-enum";

    export default {
        name: "DatePickerControl",
        mixins: [CONTROL_FIELD_EXTEND_MIXIN],
        data: () => ({
            datepicker: null,
        }),

        model: {
            event: 'change',
            prop: 'value'
        },

        watch: {
            options(val) {
                this.setOption(val);
            },
            value(val) {
                this.setValue(val);
            }
        },
        methods: {
            /**
             * Re-set the DatePicker Configuration
             */
            setOption(ops = {}) {
                if (!Object.keys(ops).length) {
                    return
                }

                this.datepicker.setOptions(ops)
            },

            /**
             * Special Func to set Value
             * @param val
             */
            setValue(val) {
                this.datepicker.setDate(val);
            }
        },
        mounted() {
            this.datepicker = new Litepicker({
                element: this.$el,

                // applying the configuration (base)
                ...this.control,

                /**
                 * Post-render processing
                 */
                onRender: () => {
                    if (this.control.defaultValue) {
                        this.setValue(this.control.defaultValue);
                    }
                },

                /**
                 * On-Selected a Day
                 * @param {Date} date
                 */
                onSelect: date => {
                    if (date == null) {
                        return this.updateValue(null)
                    }

                    let emitValue = date
                    // Parse to format before emit
                    if (this.control.returnType === DATE_PICKER_RETURN_TYPES.format.val) {
                        let dateJsIns = dayjs(date)
                        emitValue = dateJsIns.format(this.control.format)
                    }

                    // emit to parent
                    this.updateValue(emitValue)
                }
            })
        },

        beforeDestroy() {
            this.datepicker.destroy()
        }
    }
</script>

<style scoped>

</style>
