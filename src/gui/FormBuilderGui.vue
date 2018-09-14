<template>
    <div class="col-md-12">
        <section-component :form="form"></section-component>
    </div>
</template>

<script>
    import {FormHandler} from "./handler/form_handler";
    import SectionComponent from "./ui/SectionComponent";
    import { dom } from '@fortawesome/fontawesome-svg-core'

    dom.watch();
    export default {
        name: "FormBuilderGui",
        components: {SectionComponent},
        props: {
            form: {
                type: Object
            },
        },
        methods: {
            getValue() {
                return FormHandler.getValue(this.form);
            },
            setValue(values) {
                if (!_.isObject(values))
                {
                    console.error("Invalid values for Form GUI!");
                    return;
                }

                FormHandler.setValue(this.form, values);
            }
        },
        created() {
            // this.form = JSON.parse(localStorage.getItem('BUILD_FORM'));
        }
    }
</script>

<style scoped>

</style>
