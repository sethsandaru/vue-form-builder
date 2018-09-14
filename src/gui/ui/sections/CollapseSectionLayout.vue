<template>
    <div class="col-md-12 mb-2">
        <div class="collapseFormItem">
            <div class="title">
                <div class="row">
                    <div class="col-md-8">
                        {{section.label}}
                    </div>
                    <div class="col-md-4 text-right">
                        <p>
                            <span class="clickable" data-toggle="collapse" :data-target="'#' + section.name + '_gui_body'">
                                <i class="fa fa-fw fa-chevron-up"></i>
                                <i class="fa fa-fw fa-chevron-down"></i>
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div :id="section.name + '_gui_body'" class="collapseBody collapse show">
                <row-component :section="section" :key="section.name"></row-component>
            </div>
        </div>
    </div>
</template>

<script>
    import RowComponent from "sethFormBuilder/gui/ui/RowComponent";
    export default {
        name: "CollapseSectionLayout",
        components: {RowComponent},
        props: ['section']
    }
</script>

<style scoped>
    .clickable {
        cursor: pointer;
    }

    .collapseFormItem .title {
        font-weight: bold;
        border-bottom: 1px solid #000;
    }

    .collapseFormItem .collapsed .fa-chevron-up,
    .collapseFormItem .fa-chevron-down {
        display: none;
    }

    .collapseFormItem .collapsed .fa-chevron-down,
    .collapseFormItem .fa-chevron-up {
        display: inline-block;
    }
</style>
