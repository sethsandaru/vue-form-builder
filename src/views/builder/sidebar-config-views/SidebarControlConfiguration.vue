<template>
    <div class="sidebar-form-configuration">
        <h5>Control Configuration</h5>

        <!-- Basic of the control/Same for all -->
        <SidebarToggleableContainer headline="Basic Detail">
            <div :class="styles.FORM.FORM_GROUP">
                <label>Unique ID</label>
                <input type="text" :class="styles.FORM.FORM_CONTROL" :value="control.uniqueId" readonly>
            </div>

            <div :class="styles.FORM.FORM_GROUP">
                <label>Name (Must be unique)</label>
                <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.name">
            </div>

            <div :class="styles.FORM.FORM_GROUP">
                <label>Label</label>
                <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.label">
            </div>

            <div :class="styles.FORM.FORM_GROUP">
                <label>Sub-label</label>
                <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.subLabel">
            </div>

            <div :class="styles.FORM.FORM_GROUP">
                <label>
                    Show Label?
                    <input type="checkbox" v-model="control.isShowLabel">
                </label>
            </div>
        </SidebarToggleableContainer>

        <!-- Validation of the control / same for all -->
        <SidebarToggleableContainer
                headline="Validation"
                :initial-open="false">
            Nè
        </SidebarToggleableContainer>

        <!-- Control specific configuration -->
        <SidebarToggleableContainer
                headline="Control Specific Configuration"
                :initial-open="false">
            Bạn
        </SidebarToggleableContainer>


        <div class="buttons">
            <button :class="styles.BUTTON.PRIMARY" @click="save(false)">
                Save
            </button>
            <button :class="styles.BUTTON.INFO" @click="save(true)">
                Save & Close
            </button>
        </div>
    </div>
</template>

<script>
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";
    import {SIDEBAR_BODY_MIXIN} from "@/mixins/sidebar-body-mixin";
    import SidebarToggleableContainer from "@/views/container-views/SidebarToggleableContainer";

    export default {
        name: "SidebarControlConfiguration",
        components: {SidebarToggleableContainer},
        mixins: [STYLE_INJECTION_MIXIN, SIDEBAR_BODY_MIXIN],
        data:() => ({
            dataKey: "control",
            control: null
        }),

        created() {
            this.control = this.dataPackage
        }
    }
</script>