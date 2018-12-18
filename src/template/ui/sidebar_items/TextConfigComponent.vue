<template>
    <div>
        <label>
            <input type="checkbox" name="isMultiLine" v-model="control.isMultiLine"> Multi-line?
        </label>
    </div>
</template>

<script>
    export default {
        name: "TextConfigComponent",
        props: {
            control: {
                type: Object
            },
        },
    }
</script>

<style scoped>

</style>
