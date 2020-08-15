<template>
    <tr :class="['table-row-block', styles.TABLE.TR_CLASS]">
        <td>
            <AddControlControl :section="this.section" />
        </td>
        <td>
            <AddControlControl :section="this.section" />
        </td>
    </tr>
</template>

<script>
    import {ROW_VIEW_MIXIN} from "@/mixins/row-view-mixin";
    import AddControlControl from "@/views/builder/add-controls/AddControlControl";

    export default {
        name: "TableRowView",
        components: {AddControlControl},
        mixins: [ROW_VIEW_MIXIN]
    }


</script>

<style scoped>

</style>