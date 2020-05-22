<template>
    <div class="section-config">
        <div class="buttons">
            <button class="btn btn-success" v-html="$form.getIcon('arrowUp')"></button>
            <button class="btn btn-danger" v-html="$form.getIcon('arrowDown')"></button>
            <button class="btn btn-info">
                <span v-html="$form.getIcon('cog')"></span>
                <span>Configuration</span>
            </button>
        </div>
    </div>
</template>

<script>

    export default {
        name: "SectionConfig"
    }
</script>

<style scoped>

</style>