<template>
    <div class="row">
        <div class="col-md-4">
            <label>{{control.label}}</label>
        </div>
        <div class="col-md-8">
            <div class="input-group">
                <input type="number"
                       class="form-control"
                       :readonly="this.control.readonly"
                       :name="control.fieldName"
                       :step="controlStep"
                       v-model="control.value" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NumberControl",
        props: ['control'],
        mounted() {
            if (!_.isEmpty(this.control.defaultValue)) {
                this.control.value = this.control.defaultValue;
            }
        },
        computed: {
            controlStep() {
                if (!this.control.isInteger) {
                    var step = 1;

                    // calculate the step by decimal place
                    if (this.control.decimalPlace > 0) {
                        step = "0.";
                        for (var i = 1; i < this.control.decimalPlace; i++) {
                            step += "0";
                        }
                        step += "1";
                    }

                    // generate
                    return parseFloat(step);
                }

                return 1;
            }
        }
    }
</script>

<style scoped>

</style>
