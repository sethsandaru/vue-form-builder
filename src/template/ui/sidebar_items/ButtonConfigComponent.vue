<template>
    <div class="row mt-2">
        <div class="col-md-12">
            <div class="form-group">
                <label>Onclick JS function</label>
                <input type="text" class="form-control" v-model="control.btnAction">
            </div>
        </div>

        <div class="col-md-12">
            <div class="form-group">
                <label>Button Classes (without btn)</label>
                <input type="text" class="form-control" v-model="control.btnClass">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ButtonConfigComponent",
        props: {
            control: {
                type: Object
            },
        },
    }
</script>

<style scoped>

</style>
