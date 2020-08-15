<template>
    <div :class="[control.containerClass, 'control-view-wrapper', control.additionalContainerClass]">
        <div class="control-view">
            <!-- render the label -->
            <ControlLabel v-show="control.isShowLabel" :control="control" />

            <!-- render the exact field -->
            <component :is="controlComponent"
                       :control="control"
                       :value-container="valueContainer"
                       v-model="valueContainer[controlName]"
                       :class="validationErrorClasses"
            />

            <!-- validation error -->
            <template v-if="hasValidationError">
                <div v-for="(mess, i) in validationErrorMessages"
                     :key="i"
                     v-text="mess"
                     :class="styles.FORM.ERROR_MESSAGE"
                ></div>
            </template>
        </div>
    </div>
</template>

<script>
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";
    import ControlLabel from "@/views/builder/control-views/ControlLabel";
    import {CONTROLS} from "@/configs/controls";

    export default {
        name: "ControlView",
        components: {ControlLabel},
        mixins: [STYLE_INJECTION_MIXIN],
        props: {
            control: {
                type: Object,
                required: true
            },
            parentId: {
                type: String,
                required: true,
            },
            valueContainer: {
                type: Object,
                required: true
            },
            validationErrors: {
                type: Object,
                default: () => ({}) // empty object
            }
        },

        computed: {
            /**
             * This accessor will get the component object to let us inject the right control
             */
            controlComponent() {
                // validate input
                if (!CONTROLS[this.control.type] || !CONTROLS[this.control.type].fieldComponent) {
                    throw new TypeError(`Control Type Mapping failed => Can't be rendered. Reason: Your control type ${this.control.type} doesn't have 'fieldComponent' property`)
                }

                return CONTROLS[this.control.type].fieldComponent
            },

            /**
             * Generate Control Base Name
             * @returns {string}
             */
            controlName() {
                return this.control.name || this.control.uniqueId
            },

            /**
             * Check if current control has validation error(s)
             * @returns {boolean}
             */
            hasValidationError() {
                return !!this.validationErrors[this.controlName]
            },

            /**
             * Short-Path access to the Validation Error MEssages List
             * @returns {String[]}
             */
            validationErrorMessages() {
                return this.validationErrors[this.controlName]
            },

            validationErrorClasses() {
                const classes = {};
                classes[this.styles.FORM.ERROR_OUTLINE] = this.hasValidationError
                return classes
            },
        },

    }
</script>