<template>
    <div :class="[control.containerClass, 'control-view-wrapper', control.additionalContainerClass]">
        <div class="control-view">
            <!-- render the label, readonly should show the label -->
            <ControlLabel
                v-show="control.isShowLabel || readOnly"
                :control="control"
                :read-only="readOnly"
            />

            <!-- render the exact field -->
            <component
                v-if="!readOnly"
                v-model="valueContainer[controlName]"
                :is="controlComponent"
                :control="control"
                :value-container="valueContainer"
                :class="validationErrorClasses"
            />
            <p
                v-else
                v-text="valueContainer[controlName]"
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
            },
            readOnly: {
              type: Boolean,
              default: false,
            },
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
