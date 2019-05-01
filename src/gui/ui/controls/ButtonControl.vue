<template>
    <div>
        <div class="form-group">
            <button class="btn" :class="control.btnClass" :onclick="control.btnAction">
                {{control.label}}
            </button>
        </div>
    </div>
</template>

<script>
    import {Hooks} from 'sethFormBuilder/gui/components/hook_lists';

    export default {
        name: "ButtonControl",
        props: ['control'],
        mounted() {


            // after hook
            Hooks.Control.afterInit.run(this.control, $(this.$el).find("button"));
        }
    }
</script>

<style scoped>

</style>
