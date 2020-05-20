<template>
    <div class="add-control-container" :class="cssClasses.COLUMNS.COL12" @click="addNew">
        <span>+ Add Row</span>
    </div>
</template>

<script>
    import {STYLES} from "@/configs/styles";

    export default {
        name: "AddRowControl",
        data: () => ({
            show: false
        }),
        computed: {
            cssClasses: () => STYLES
        },
        methods:{
            /**
             * Add a new row by notify the parent...
             */
            addNew() {
                this.$emit('addRowNotify', true)
            }
        }
    }
</script>

<style scoped>
    .add-control-container {
        padding: 30px;
    }
</style>