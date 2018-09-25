<template>
    <div>
        <div class="row" v-if="labelPosition === 'left'">
            <div class="col-md-4">
                <label :class="{'bold': control.labelBold, 'italic': control.labelItalic, 'underline': control.labelUnderline}">
                    {{control.label}}
                </label>
            </div>
            <div class="col-md-8">
                <select2-control v-if="!control.isMultiple"
                                 v-model="control.value"
                                 :disabled="this.control.readonly"
                                 :options="dataSource">
                </select2-control>
                <select2-multiple-control v-else
                                          v-model="control.value"
                                          :disabled="this.control.readonly"
                                          :options="dataSource">
                </select2-multiple-control>
            </div>
        </div>
        <div class="form-group" v-else>
            <label :class="{'bold': control.labelBold, 'italic': control.labelItalic, 'underline': control.labelUnderline}">
                {{control.label}}
            </label>
            <select2-control v-if="!control.isMultiple"
                             v-model="control.value"
                             :disabled="this.control.readonly"
                             :options="dataSource">
            </select2-control>
            <select2-multiple-control v-else
                                      v-model="control.value"
                                      :disabled="this.control.readonly"
                                      :options="dataSource">
            </select2-multiple-control>
        </div>
    </div>
</template>

<script>
    import {Hooks} from 'sethFormBuilder/gui/components/hook_lists';
    import Select2Control from "sethFormBuilder/third_party_controls/Select2Control";
    import Select2MultipleControl from "sethFormBuilder/third_party_controls/Select2MultipleControl";
    export default {
        name: "SelectControl",
        components: {Select2MultipleControl, Select2Control},
        props:['control', 'labelPosition'],
        data: () => ({
            dataSource: [],
        }),
        created() {
            // request for ajax source
            if (this.control.isAjax) {
                let self = this;
                $.getJSON(this.control.ajaxDataUrl)
                    .done(data => {
                        if (_.isArray(data)) {
                            self.dataSource = data;
                        } else {
                            SethPhatToaster.error(`Control data error: ${this.control.label}.`);
                            console.error(`Data for select control of ${this.control.label} is wrong format!`);
                        }
                    })
                    .fail(err => {
                        SethPhatToaster.error(`Failed to load data for control: ${this.control.label}.`);
                        console.error("Request for Select Data Source Failed: ", err);
                    });
            } else {
                this.dataSource = this.control.dataOptions;
            }
        },
        mounted() {
            if (!_.isEmpty(this.control.defaultValue)) {
                if (this.control.isMultiple) {
                    this.control.value = [this.control.defaultValue];
                } else {
                    this.control.value = this.control.defaultValue;
                }
            }

            // after hook
            Hooks.Control.afterInit.run(this.control, $(this.$el).find("select.form-control"));
        }
    }
</script>

<style scoped>

</style>
