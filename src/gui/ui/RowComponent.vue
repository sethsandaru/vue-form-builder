<template>
    <div class="mt-2">
        <div class="col-md-12 rowItem" v-if="section.isDynamic">
            <div class="tools">
                <p>
                    <span class="add clickable" @click="addDynamicObj"><i class="fas fa-plus-circle"></i></span>
                </p>
            </div>

            <div class="rowDynamicItem" v-for="(data, index) in section.instances" :key="index" :class="'rowDynamic_' + index">
                <div class="tools">
                    <p>
                        <span class="remove clickable" @click="removeDynamicObj(index)"><i class="fas fa-times-circle"></i></span>
                    </p>
                </div>

                <div class="row" v-for="row in data">
                    <control-component v-for="control in row.controls"
                                       :key="control.name + index"
                                       :control="control"
                                       :label-position="section.labelPosition">
                    </control-component>
                </div>
            </div>
        </div>

        <div class="row rowItem" v-if="!section.isDynamic" v-for="row in section.rows">
            <control-component v-for="control in row.controls"
                               :key="control.name"
                               :control="control"
                               :label-position="section.labelPosition">
            </control-component>
        </div>
    </div>
</template>

<script>
    import {FormHandler} from "sethFormBuilder/gui/handler/form_handler";
    import ControlComponent from "./ControlComponent";
    import {Hooks} from 'sethFormBuilder/gui/components/hook_lists';

    export default {
        name: "RowComponent",
        components: {ControlComponent},
        props: ['section'],
        data: () => ({
            dynamicTemplate: null,
            // dynamicData: [],
        }),
        methods: {
            addDynamicObj() {
                if (this.section.maxInstance > 0 && this.section.instances.length === this.section.maxInstance) {
                    SethPhatToaster.error("Maximum instances reached, can't create more.");
                    return;
                }

                // b4hook
                let b4Run = Hooks.DynamicSection.beforeAddInstance.runSequence(this.section);
                if (b4Run === false) {
                    return;
                }

                this.section.instances.push(_.cloneDeep(this.dynamicTemplate));

                // after hook
                Hooks.DynamicSection.afterAddInstance.run(_.last(this.section.instances),this.section);
            },
            removeDynamicObj(index) {
                if (this.section.minInstance === this.section.instances.length) {
                    SethPhatToaster.error("Minimum instances reached, can't remove more.");
                    return;
                }

                // b4hook
                let b4Run = Hooks.DynamicSection.beforeRemoveInstance.runSequence(this.section);
                if (b4Run === false) {
                    return;
                }

                this.section.instances.splice(index, 1);

                // after hook
                Hooks.DynamicSection.afterRemoveInstance.run(_.last(this.section.instances),this.section);
            },
            generateDynamic() {
                if (this.section.isDynamic) {
                    this.section.instances = [];

                    // generate dynamic template
                    this.dynamicTemplate = _.cloneDeep(this.section.rows);
                    Hooks.DynamicSection.beforeInitClone.run(this.dynamicTemplate, this.section);

                    // populate min instance
                    if (this.section.minInstance > 0) {
                        for (var i = 0; i < this.section.minInstance; i++) {
                            this.addDynamicObj();
                        }
                    }
                }
            }
        },
        mounted() {
            this.generateDynamic();
        }
    }
</script>

<style scoped>
    .add {
        color: green;
    }

    .remove {
        color: red;
    }

    .rowItem, .rowDynamicItem {
        position: relative;
    }

    .rowDynamicItem {
        border-bottom: #ccc 1px solid;
    }

    .rowDynamicItem > .row {
        padding-top: 25px;
    }

    .tools {
        position: absolute;
        top: 0;
        right: 12px;
        z-index: 1000;
    }

    .clickable {
        cursor: pointer;
    }
</style>
