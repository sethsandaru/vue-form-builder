<template>
    <div>
        <div class="row" v-if="labelPosition === 'left'">
            <div class="col-md-4">
                <label :class="{'bold': control.labelBold, 'italic': control.labelItalic, 'underline': control.labelUnderline}">{{control.label}}</label>
            </div>
            <div class="col-md-8">
                <div class="input-group">
                    <input type="number"
                           class="form-control"
                           :readonly="this.control.readonly"
                           :name="control.fieldName"
                           :step="controlStep"
                           @change="numberChange"
                           v-model="control.value" />
                </div>
            </div>
        </div>
        <div class="form-group" v-else>
            <label :class="{'bold': control.labelBold, 'italic': control.labelItalic, 'underline': control.labelUnderline}">
                {{control.label}}
            </label>

            <div class="input-group">
                <input type="number"
                       class="form-control"
                       :readonly="this.control.readonly"
                       :name="control.fieldName"
                       :step="controlStep"
                       @change="numberChange"
                       v-model="control.value" />
            </div>
        </div>
    </div>
</template>

<script>
    import {Hooks} from 'sethFormBuilder/gui/components/hook_lists';

    export default {
        name: "NumberControl",
        props: ['control', 'labelPosition'],
        created() {
            this.control.value = 0;
        },
        mounted() {
            if (!_.isEmpty(this.control.defaultValue)) {
                this.control.value = this.control.defaultValue;
            }

            // after hook
            Hooks.Control.afterInit.run(this.control, $(this.$el).find("input"));
        },
        methods: {
            numberChange(e) {
                let val = e.target.value;

                if (this.control.isInteger === false) {
                    this.control.value = parseFloat(val).toFixed(this.control.decimalPlace);
                } else {
                    this.control.value = parseInt(val);
                }
            }
        },
        computed: {
            controlStep() {
                return 1;
            }
        }
    }
</script>

<style scoped>

</style>
