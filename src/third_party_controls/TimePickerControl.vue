<template>
    <input type="text"
           class="form-control"
           :disabled="readonly" />
</template>

<script>
    export default {
        name: "TimePickerControl",
        data: () => ({
            timepicker:null,
        }),
        model: {
            event: 'change',
            prop: 'value'
        },
        props: {
            readonly: {
                type: Boolean,
                default: false
            },
            options: {
                type: Object,
                default: () => {}
            },
            value: null
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
            setOption(val = []) {
                let self = this;
                _.each(this.options, (value, key) => {
                    if (key === 'change') {
                        return;
                    }

                    self.timepicker.data('TimePicker').options[key] = value;
                });
                this.setValue(this.value);
            },
            setValue(val) {
                this.timepicker.val(val);
            }
        },
        mounted() {
            let self = this;
            this.timepicker = $(this.$el)
                .timepicker({
                    ...this.options,
                    change: function (time) {
                        self.$emit('change', time.format(this.options.timeFormat));
                    },
                });

            this.setValue(this.value);
        },
        beforeDestroy() {
            // this.timepicker.timepicker('destroy');
        }
    }
</script>

<style scoped>

</style>
