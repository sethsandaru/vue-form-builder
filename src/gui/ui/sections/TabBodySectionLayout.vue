<template>
    <div :id="section.name + '_gui_body'" class="tab-pane fade" :class="{'show active': isFirst}">
        <row-component :section="section"></row-component>
    </div>
</template>

<script>
    import RowComponent from "gui/ui/RowComponent";
    export default {
        name: "TabBodySectionLayout",
        components: {RowComponent},
        props: ['section', 'isFirst']
    }
</script>

<style scoped>

</style>
