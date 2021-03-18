<template>
    <div>
        <template v-if="control.singleMode">
            <input type="text"
                   :id="control.uniqueId"
                   :name="control.name || control.uniqueId"
                   :placeholder="control.placeholderText"
                   :class="styles.FORM.FORM_CONTROL"
                   autocomplete="off"
            />
        </template>
        <template v-else>
            <input type="text"
                   :id="control.uniqueId"
                   :placeholder="control.placeholderText"
                   :class="styles.FORM.FORM_CONTROL"
                   autocomplete="off"
            />

            <!--
            Why I need to implement this?
            Because in <form> mode, when submitting. The form need to send these together, therefore in the backend
            You will have some sort like: abc[startDate], abc[endDate] (Object/AssocArray)
            Its kinda useless for Ajax Mode :D
            -->
            <input type="hidden"
                   :name="startDateFieldName"
                   :value="hasStartDate ? value.startDate : ''"
            >
            <input type="hidden"
                   :name="endDateFieldName"
                   :value="hasEndDate ? value.endDate : ''"
            >
        </template>
    </div>
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
            currentValue: null,
        }),

        model: {
            event: 'change',
            prop: 'value'
        },

        watch: {
            control: {
                deep: true,
                handler(val) {
                    this.setOption(val);
                },
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
                if (val === null || val === undefined || val === '') {
                    this.datepicker.setDate(null)
                    return
                }

                // set for date-range
                if (typeof val === 'object' && val.startDate && val.endDate) {

                    // stop if same value
                    if (
                        this.currentValue &&
                        this.currentValue.startDate === val.startDate &&
                        this.currentValue.endDate === val.endDate
                    ) {
                        return
                    }

                    this.datepicker.setDateRange(val.startDate, val.endDate)
                    return
                }

                // set by single date
                if (typeof val === 'string' || val instanceof Date) {
                    // stop reset because of same date
                    if (this.val === this.currentValue) {
                        return
                    }

                    this.datepicker.setDate(val);
                }
            },

            /**
             * onSelect get date
             * @param {Date} startDate
             * @param {Date|null} endDate
             */
            getValue(startDate, endDate) {
                if (startDate == null) {
                    return this.updateValue(null)
                }

                // Single-mode will have a single emit
                if (this.control.singleMode) {
                    let emitValue = startDate

                    // Parse to format before emit??
                    if (this.control.returnType === DATE_PICKER_RETURN_TYPES.format.val) {
                        emitValue = dayjs(startDate).format(this.control.format)
                    }

                    // emit to parent
                    this.updateValue(emitValue)
                    this.currentValue = emitValue
                    return
                }

                // date-range will have {startDate: ... , endDate: ...}
                let emitValue = {
                    startDate,
                    endDate,
                }

                // Parse to format before emit??
                if (this.control.returnType === DATE_PICKER_RETURN_TYPES.format.val) {
                    emitValue.startDate = dayjs(startDate).format(this.control.format)
                    emitValue.endDate = dayjs(endDate).format(this.control.format)
                }

                // emit to parent
                this.updateValue(emitValue)
                this.currentValue = emitValue
            }
        },
        mounted() {
            this.datepicker = new Litepicker({
                element: document.getElementById(this.control.uniqueId),

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
                onSelect: this.getValue
            })
        },

        beforeDestroy() {
            this.datepicker.destroy()
        },

        computed: {
            startDateFieldName() {
                return (this.control.name || this.control.uniqueId) + '[startDate]'
            },
            endDateFieldName() {
                return (this.control.name || this.control.uniqueId) + '[endDate]'
            },

            hasStartDate() {
                return this.value && this.value.startDate
            },

            hasEndDate() {
                return this.value && this.value.endDate
            }
        }
    }
</script>

<style scoped>

</style>
