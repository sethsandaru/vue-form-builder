<template>
    <div class="row" style="margin: 0 20px;">
        <div class="col-md-9">
            <section-component :form="form" ref="SectionComponent"></section-component>

            <div id="sectionWrapper">
            </div>
        </div>
        <div class="col-md-3">
            <sidebar-component></sidebar-component>
        </div>

        <preview-component ref="PreviewComponent" :form="form"></preview-component>
    </div>
</template>

<script>
    import SectionComponent from "./ui/SectionComponent";
    import { dom } from '@fortawesome/fontawesome-svg-core'
    import SidebarComponent from "./ui/SidebarComponent";
    import PreviewComponent from "./ui/PreviewComponent";
    dom.watch();

    export default {
        name: "form-builder-template",
        components: {
            PreviewComponent,
            SidebarComponent,
            SectionComponent
        },
        props: ['value'],
        watch: {
            form(val) {
                this.value = val;
            }
        },
        data: () => ({
            form: {
                sections: [],
                layout: "",
                _uniqueId: Math.random()
            }
        }),
        methods: {
            getValue() {
                return this.form;
            },
            setValue(val) {
                this.form = val;
            },
            preview() {
                this.$refs.PreviewComponent.openModal();
            }
        },

    }
</script>

<style scoped>

</style>
