<template>
    <div class="controlItem form-group" :class="control.className">
        <component :is="controlInstance" :control="control" :label-position="labelPosition"></component>
    </div>
</template>

<script>
    import {Hooks} from 'sethFormBuilder/gui/components/hook_lists';
    import {CONTROL_TYPES} from "sethFormBuilder/config/control_constant";

    export default {
        name: "ControlComponent",
        props: ['control', 'labelPosition'],
        data: () => ({
            controlInstance: null,
        }),
        created() {
            if (!CONTROL_TYPES[this.control.type]) {
                console.error(`Control type ${this.control.type} doesn't exist to render.`);
                return;
            }

            Hooks.Control.beforeRegister.run(this.control);

            // set control
            this.controlInstance = CONTROL_TYPES[this.control.type].source.gui;
        },
        mounted() {
            Hooks.Control.afterRegister.run(this.control);
        }
    }
</script>

<style scoped>

</style>
