<template>
    <div class="sidebar-form-configuration">

        <h5>Add Control to your Section</h5>


        <div :class="[styles.LIST_GROUP.CONTAINER]">

            <a href="javascript:void(0)"
               :class="styles.LIST_GROUP.SINGLE_ITEM"
               v-for="(controlInfo, controlKey) in controlTypes"
               v-show="!controlInfo.isHidden"
               @click="selectedControl(controlKey)">

                <p class="type-headline" v-text="controlInfo.name"></p>
                <p class="type-desc" v-text="controlInfo.description"></p>

            </a>

        </div>

    </div>
</template>

<script>
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";
    import {CONTROLS, createControlData} from "@/configs/controls";
    import {SIDEBAR_BODY_MIXIN} from "@/mixins/sidebar-body-mixin";

    export default {
        name: "SidebarControlSelectList",
        mixins: [STYLE_INJECTION_MIXIN, SIDEBAR_BODY_MIXIN],
        computed: {
            controlTypes: () => CONTROLS
        },

        data:() => ({
            dataKey: "newControlData",
            newControlData: null
        }),

        methods: {
            /**
             * Selected a control => we will generate a new control data then emit it to the section
             * @param controlKey
             */
            selectedControl(controlKey) {
                if (!CONTROLS[controlKey]) {
                    alert(`Control ${controlKey} doesn't exists in Vue-Form-Builder`)
                    return
                }

                // create
                this.newControlData = createControlData(controlKey)
                this.save(true)
            }
        }
    }
</script>

<style scoped>

</style>