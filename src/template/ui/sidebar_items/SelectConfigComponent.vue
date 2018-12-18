<template>
    <div class="row mt-2">
        <div class="col-md-12">
            <label>
                <input type="checkbox" name="isMultiple" v-model="control.isMultiple"> Multiple Select
            </label>
        </div>

        <div class="col-md-12">
            <div class="form-group">
                <label>Data Source</label> <br />
                <label><input type="radio" name="isAjax" v-model="control.isAjax":value="false">Static Source</label>
                <label><input type="radio" name="isAjax" v-model="control.isAjax" :value="true">Ajax Source</label>
            </div>

            <table class="table table-bordered table-striped" v-if="!control.isAjax">
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
                <tr v-for="(option, index) in control.dataOptions" :class="'staticSource_' + index">
                    <td class="text-center">
                        <font-awesome-icon icon="times" class="clickable" @click="removeOption(index)"></font-awesome-icon>
                    </td>
                    <td>
                        <input type="text" class="form-control txtId" v-model="option.id">
                    </td>
                    <td>
                        <input type="text" class="form-control txtText" v-model="option.text">
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="form-group" v-else>
                <label>
                    Ajax URL
                    <a href="javascript:void(0)" @click="dataAjaxModal"><i class="fa fa-info-circle"></i></a>
                </label>
                <input type="text" class="form-control ajaxDataUrl" v-model="control.ajaxDataUrl">
            </div>
        </div>

        <select-ajax-modal ref="SelectAjaxModal"></select-ajax-modal>
    </div>
</template>

<script>
    import SelectAjaxModal from './common/SelectAjaxModal';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import {FORM_CONSTANTS} from "sethFormBuilder/config/constants";

    export default {
        name: "SelectConfigComponent",
        components: {SelectAjaxModal, FontAwesomeIcon},
        props: {
            control: {
                type: Object
            },
        },
        methods: {
            addOption() {
                this.control.dataOptions.push(_.clone(FORM_CONSTANTS.OptionDefault));
            },
            removeOption(index) {
                this.control.dataOptions.splice(index, 1);
            },
            dataAjaxModal(e) {
                this.$refs.SelectAjaxModal.openModal();
            }
        },
        mounted() {
            // add default options
            if (this.control.dataOptions.length <= 0) {
                this.addOption();
            }
        },
    }
</script>

<style scoped>

</style>
