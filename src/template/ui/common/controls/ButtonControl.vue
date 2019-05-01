<template>
    <div class="controlItemWrapper" :class="control.className" :data-control-name="control.name">
        <div class="controlItem" :id="control.name">
            <button class="btn" :class="control.btnClass">
                {{control.label}}
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ButtonControl",
        props: ['control'],
    }
</script>

<style scoped>

</style>
