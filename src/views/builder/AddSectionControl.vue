<template>
    <div class="add-section-container" :class="cssClasses.COLUMNS.COL12" @click="showOption">
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
    .add-section-container {
        margin-top: 30px;
        border: 3px rgba(0,0,0, .4) dotted;
        padding: 40px;
        user-select: none;
        font-size: 18px;
        position: relative;
        text-align: center;
    }

    .add-section-container:hover {
        border-color: aqua;
        cursor: pointer;
    }

    .type-desc {
        font-size: 14px;
    }

    .type-headline {
        font-weight: bold;
    }

</style>