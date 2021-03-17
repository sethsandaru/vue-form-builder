<template>
    <div class="sidebar-form-configuration">
        <h5>Control Configuration</h5>

        <!-- Basic of the control/Same for all -->
        <ControlBasicInformation
            v-if="permissions.canUpdateControlBasicDetail"
            :control="control"
        />

        <ControlStylingInformation
            v-if="permissions.canUpdateControlStyling"
            :control="control"
        />

        <!-- Control specific configuration / Only render it if the control has specific configuration view -->
        <SidebarToggleableContainer
                v-if="specificConfigurationView && permissions.canUpdateControlSpecialConfiguration"
                headline="Control Specific Configuration"
        >
            <component
                :is="specificConfigurationView"
                :formData="formData"
                :control="control"
            />
        </SidebarToggleableContainer>

        <!-- Validation of the control / same for all -->
        <ControlValidationInformation
            v-if="!isValidationDisabled && permissions.canUpdateControlValidation"
            :control="control"
        />

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
    import ControlBasicInformation
        from "@/views/builder/sidebar-config-views/control-configuration-views/ControlBasicInformation";
    import {CONTROLS} from "@/configs/controls";
    import ControlStylingInformation
        from "@/views/builder/sidebar-config-views/control-configuration-views/ControlStylingInformation";
    import {HELPER} from "@/libraries/helper";
    import ControlValidationInformation
        from "@/views/builder/sidebar-config-views/control-configuration-views/ControlValidationInformation";

    export default {
        name: "SidebarControlConfiguration",
        components: {
            ControlValidationInformation,
            ControlStylingInformation,
            ControlBasicInformation,
            SidebarToggleableContainer
        },
        mixins: [STYLE_INJECTION_MIXIN, SIDEBAR_BODY_MIXIN],

        props: {
            permissions: Object
        },

        data:() => ({
            dataKey: "control",
            control: null
        }),

        created() {
            // clone to make sure, no references will interrupt the configuration...
            this.control = HELPER.cloneDeep(this.dataPackage)
        },

        computed: {
            /**
             * Quick'n'Short access to the control type
             */
            controlType() {
                return this.control.type
            },

            /**
             * CHeck if the control doesn't need validation
             */
            isValidationDisabled() {
                if (CONTROLS[this.controlType].disableValidation) {
                    return true
                }

                return false
            },

            /**
             * Pick-up the specific configuration View for the Control
             * Depend on the `configComponent` of CONTROLS in `src/configs/controls.js`
             * If there's none => No Specific Configuration for the field
             * @returns VueComponent
             */
            specificConfigurationView() {
                if (!CONTROLS[this.controlType].hasOwnProperty('configComponent')) {
                    return null
                }

                // NOTE: this is a hash map access , not 2d array =))
                return CONTROLS[this.controlType]['configComponent'];
            }
        },
    }
</script>