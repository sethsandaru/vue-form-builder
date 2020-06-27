<template>
    <div :class="[control.containerClass, 'control-view-wrapper', control.additionalContainerClass]">
        <div class="control-view">
            <!-- render the label -->
            <ControlLabel v-show="control.isShowLabel" :control="control" />

            <!-- render the exact field -->
            <component :is="controlComponent"
                       :control="control"
                       :value-container="valueContainer"
                       v-model="valueContainer[control.name || control.uniqueId]"
            />

        </div>
    </div>
</template>

<script>
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";
    import ControlLabel from "@/views/builder/control-views/ControlLabel";
    import {CONTROLS} from "@/configs/controls";
    import ControlOption from "@/views/builder/control-views/ControlOption";

    export default {
        name: "ControlView",
        components: {ControlOption, ControlLabel},
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
            }
        },

    }
</script>