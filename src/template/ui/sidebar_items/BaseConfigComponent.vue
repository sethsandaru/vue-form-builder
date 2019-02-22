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
                    <input type="checkbox" name="isRequired" v-model="control.required"> Required?
                </label>

                <label>
                    <input type="checkbox" name="isReadonly" v-model="control.readonly"> Readonly?
                </label>
            </div>
        </div>
    </div>
</template>

<script>
    import {FORM_CONSTANTS} from "sethFormBuilder/config/constants";

    export default {
        name: "BaseConfigComponent",
        props: {
            control: {
                type: Object
            },
        },
        data: () => ({
            widthOptions: FORM_CONSTANTS.WidthOptions,
        }),
        mounted() {
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

</style>
