<template>
    <div class="add-control-container" :class="cssClasses.COLUMNS.COL12" @click="showOption">
        <p>+ Add New Section</p>

        <div :class="cssClasses.LIST_GROUP.CONTAINER" v-show="show">

            <a href="javascript:void(0)"
               :class="cssClasses.LIST_GROUP.SINGLE_ITEM"
               v-for="(sectionInfo, sectionKey) in sectionTypes"
               @click="addNew(sectionKey)">

                <p class="type-headline" v-text="sectionInfo.name"></p>
                <p class="type-desc" v-text="sectionInfo.description"></p>

            </a>

        </div>
    </div>
</template>

<script>
    import {STYLES} from "@/configs/styles";
    import {SECTION_TYPES} from "@/configs/section";

    export default {
        name: "AddSectionControl",
        data: () => ({
            show: false,
            sectionTypes: SECTION_TYPES
        }),
        computed: {
            cssClasses() {
                return STYLES
            }
        },
        methods:{
            showOption() {
                this.show = !this.show;
            },
            addNew(type) {
                this.$emit('addSectionNotify', type)
            }
        }
    }
</script>

<style scoped>
    .type-desc {
        font-size: 14px;
    }

    .type-headline {
        font-weight: bold;
    }

</style>