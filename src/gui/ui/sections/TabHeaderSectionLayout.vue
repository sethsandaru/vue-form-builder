<template>
    <ul class="nav nav-tabs" role="tablist">
        <li v-for="(section, index) in sections" class="nav-item">
            <a data-toggle="tab"
               class="nav-link"
               :class="{'active': index === 0}"
               :href="'#' + section.name + '_gui_body'">
                {{section.label}}
            </a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "TabHeaderSectionLayout",
        props: ['sections']
    }
</script>

<style scoped>

</style>
