<template>
    <div>
        <div class="row" v-if="labelPosition === 'left'">
            <div class="col-md-4">
                <label :class="{'bold': control.labelBold, 'italic': control.labelItalic, 'underline': control.labelUnderline}">
                    {{control.label}}
                </label>
            </div>
            <div class="col-md-8">
                <input type="text"
                       class="form-control"
                       :readonly="this.control.readonly"
                       v-if="!control.isMultiLine"
                       :name="control.fieldName"
                       v-model="control.value" />
                <textarea v-else class="form-control"
                          v-model="control.value"
                          :readonly="this.control.readonly"
                          :name="control.fieldName"></textarea>
            </div>
        </div>
        <div v-else class="form-group">
            <label :class="{'bold': control.labelBold, 'italic': control.labelItalic, 'underline': control.labelUnderline}">
                {{control.label}}
            </label>

            <input type="text"
                   class="form-control"
                   :readonly="this.control.readonly"
                   v-if="!control.isMultiLine"
                   :name="control.fieldName"
                   v-model="control.value" />
            <textarea v-else class="form-control"
                      v-model="control.value"
                      :readonly="this.control.readonly"
                      :name="control.fieldName"></textarea>
        </div>
    </div>
</template>

<script>
    import {Hooks} from 'sethFormBuilder/gui/components/hook_lists';

    export default {
        name: "TextControl",
        props: ['control', 'labelPosition'],
        mounted() {
            if (!_.isEmpty(this.control.defaultValue)) {
                this.control.value = this.control.defaultValue;
            }

            // after hook
            Hooks.Control.afterInit.run(this.control, $(this.$el).find(this.control.isMultiLine ? "textarea" : "input"));
        }
    }
</script>

<style scoped>

</style>
