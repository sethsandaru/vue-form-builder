<template>
    <input type="text"
           class="form-control"
           :name="name"
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
            name: null,
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
            console.log('$(this.$el): ', $(this.$el));
            console.log('this.options: ', this.options);
            console.log({
                ...this.options,
                change: function (time) {
                    console.log('this.options: ', this.options);
                    self.$emit('change', time.format(this.options.timeFormat));
                }.bind(this),
            });
            this.timepicker = $(this.$el)
                .timepicker({
                    ...this.options,
                    change: function (time) {
                        console.log('time: ', time);
                        console.log('time typeof: ', typeof time);
                        console.log('time date: ', moment(time));
                        console.log('time date: ', moment(time).format(this.options.timeFormat));
                        self.$emit('change', time.format(this.options.timeFormat));
                    }.bind(this),
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
