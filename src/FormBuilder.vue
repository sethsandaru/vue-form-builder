<template>
    <div>
        <form-builder-template v-if="type === 'template'" ref="FormBuilderTemplate"></form-builder-template>
        <form-builder-gui v-if="type === 'gui'" ref="FormBuilderGui" :form="form"></form-builder-gui>
    </div>
</template>

<script>
    // load necessary
    require('config/loader');

    // import
    import FormBuilderTemplate from 'template/FormBuilderTemplate';
    import FormBuilderGui from 'gui/FormBuilderGui';

    export default {
        name: "FormBuilder",
        components: {
            FormBuilderTemplate,
            FormBuilderGui
        },
        props: ['type', 'form'],
        methods: {
            getValue() {
                if (this.type === 'template') {
                    return this.$refs.FormBuilderTemplate.getValue();
                } else {
                    return this.$refs.FormBuilderGui.getValue();
                }
            },
            setValue(values) {
                if (this.type === 'template') {
                    return this.$refs.FormBuilderTemplate.setValue(values);
                } else {
                    return this.$refs.FormBuilderGui.setValue(values);
                }
            },
            validate() {

            }
        }
    }
</script>

<style scoped>

</style>
