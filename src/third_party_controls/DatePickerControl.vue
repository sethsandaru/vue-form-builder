<template>
    <input type="text"
           class="form-control"
           :readonly="readonly" />
</template>

<script>
    export default {
        name: "DatePickerControl",
        data: () => ({
            datepicker:null,
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
                _.each(this.options, (val, key) => {
                    self.datepicker.datepicker("option", key, val);
                });

                this.setValue(this.value);
            },
            setValue(val) {
                this.datepicker.datepicker('setDate', val);
            }
        },
        mounted() {
            let self = this;
            this.datepicker = $(this.$el)
                .datepicker({
                    ...this.options,
                    beforeShow:function(input) {
                        if (self.readonly) {
                            return;
                        }

                        // styling the error style
                        let $selector = $(input);

                        // only increase z-index if this control is in a modal
                        if ($selector.parents(".modal").length <= 0) {
                            return;
                        }

                        $selector.css({
                            "position": "relative",
                            "z-index": 99999
                        });
                    },
                    onSelect: function (dateText) {
                        self.$emit('change', dateText);
                    },
                });

            this.setValue(this.value);
        },
        beforeDestroy() {
            this.datepicker.datepicker('destroy');
        }
    }
</script>

<style scoped>

</style>
