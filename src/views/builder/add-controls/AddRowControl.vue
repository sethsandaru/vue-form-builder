<template>
    <div class="add-row-outer">
        <div class="add-row-container" :class="styles.COLUMNS.COL12" @click="addNew">
            <span v-html="$form.getIcon('addOutline', '32px', '32px', '#000')"></span>
            <span>Add Row</span>
        </div>
    </div>
</template>

<script>
    import {STYLES} from "@/configs/styles";
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";

    export default {
        name: "AddRowControl",
        mixins: [STYLE_INJECTION_MIXIN],
        data: () => ({
            show: false
        }),
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
</style>