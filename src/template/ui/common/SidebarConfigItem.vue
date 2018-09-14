<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>ID</label>
                    <input type="text" readonly class="form-control" :value="control.name">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label>Control type</label>
                    <input type="text" readonly class="form-control" :value="typeFirstUpper">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="control.fieldName"
                           data-toggle="tooltip" title="Field Name must be UNIQUE in Section!">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label>Width</label>
                    <select class="form-control" v-model="control.className">
                        <option v-for="(label, value) in widthOptions" :value="value">{{label}}</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="row mt-2">
            <div class="col-md-12">
                <label>
                    <input type="checkbox" name="isReadonly" v-model="control.readonly"> Readonly?
                </label>

                <!-- for text -->
                <label v-if="control.type === 'text'">
                    <input type="checkbox" name="isMultiLine" v-model="control.isMultiLine"> Multi-line?
                </label>

                <!-- for number -->
                <label v-if="control.type === 'number'">
                    <input type="checkbox" name="isInteger" v-model="control.isInteger"> Integer Only
                </label>

                <!-- for datepicker -->
                <label v-if="control.type === 'datepicker'">
                    <input type="checkbox" name="isTodayValue" v-model="control.isTodayValue"> Get Current Day?
                </label>

                <!-- for timepicker -->
                <label v-if="control.type === 'timepicker'">
                    <input type="checkbox" name="isNowTimeValue" v-model="control.isNowTimeValue"> Get Current Time?
                </label>

                <!-- for checkbox -->
                <label v-if="control.type === 'checkbox'">
                    <input type="checkbox" name="isChecked" v-model="control.isChecked"> Checked?
                </label>

                <!-- for select -->
                <label v-if="control.type === 'select'">
                    <input type="checkbox" name="isMultiple" v-model="control.isMultiple"> Multiple Select
                </label>
            </div>
        </div>

        <!-- Decimal places for number -->
        <div class="row mt-2" v-if="control.type === 'number'">
            <div class="col-md-12">
                <div class="form-group">
                    <label>Decimal places</label>
                    <input type="number" min="0" max="5" class="form-control" v-model="control.decimalPlace" :disabled="control.isInteger">
                </div>
            </div>
        </div>

        <!-- data options for select -->
        <div class="row mt-2" v-if="control.type === 'select'">
            <div class="col-md-12">
                <label>Data Source</label>
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th class="text-center" width="10%">
                                <font-awesome-icon icon="plus" class="clickable" @click="addOption"></font-awesome-icon>
                            </th>
                            <th width="40%">Value</th>
                            <th>Text</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(option, index) in control.dataOptions">
                            <td class="text-center">
                                <font-awesome-icon icon="times" class="clickable" @click="removeOption(index)"></font-awesome-icon>
                            </td>
                            <td>
                                <input type="text" class="form-control" v-model="option.id">
                            </td>
                            <td>
                                <input type="text" class="form-control" v-model="option.text">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="row mt-2" v-if="control.type !== 'checkbox'">
            <div class="col-md-12">
                <div class="form-group">
                    <label>Default value</label>
                    <input type="text" class="form-control" v-model="control.defaultValue">
                </div>
            </div>
        </div>

        <div class="row mt-2">
            <div class="col-md-12">
                <div class="form-group">
                    <label>Control label</label>
                    <input type="text" class="form-control" v-model="control.label">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {FORM_CONSTANTS} from "sethFormBuilder/config/constants";

    export default {
        name: "sidebar-config-item",
        props: {
            control: {
                type: Object
            }
        },
        data: () => ({
            widthOptions: FORM_CONSTANTS.WidthOptions
        }),
        methods: {
            addOption() {
                this.control.dataOptions.push(_.clone(FORM_CONSTANTS.OptionDefault));
            },
            removeOption(index) {
                this.control.dataOptions.splice(index, 1);
            }
        },
        mounted() {
            // add default options
            if (this.control.type === 'select' && this.control.dataOptions.length <= 0) {
                this.addOption();
            }
            $('[data-toggle="tooltip"]').tooltip(); // trigger tooltip
        },
        computed: {
            typeFirstUpper() {
                return this.control.type.charAt(0).toUpperCase() + this.control.type.slice(1);
            }
        }
    }
</script>

<style scoped>
    .clickable {
        cursor: pointer;
    }
</style>
