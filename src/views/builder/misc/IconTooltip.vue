<template>
    <span class="v-tooltip">
        <span v-html="$form.getIcon(icon, iconSize, iconSize, iconColor)"></span>
        <span class="tooltiptext" v-html="text"></span>
    </span>
</template>

<script>
    export default {
        name: "IconTooltip",
        props: {
            text: String,
            icon: String,
            iconSize: {
                type: String,
                default: '16px'
            },
            iconColor: {
                type: String,
                default: '#000'
            }
        }
    }
</script>

<style scoped>

</style>