<template>
    <div>
        <label>
            <input type="checkbox" name="isChecked" v-model="control.isChecked"> Auto Checked?
        </label>
    </div>
</template>

<script>
    export default {
        name: "CheckboxConfigComponent",
        props: {
            control: {
                type: Object
            },
        },
    }
</script>

<style scoped>

</style>
