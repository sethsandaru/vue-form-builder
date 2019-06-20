<template>
    <div>
        <div class="row">

            <div class="col-md-2">
                <select class="form-control" v-model="form.layout">
                    <option value="" disabled selected>Select layout</option>
                    <option v-for="(value, key) in layouts" :value="key">{{value}} layout</option>
                </select>
            </div>
            <div class="col-md-10 text-right">
                <button class="btn btn-default" @click="preview">
                    <font-awesome-icon icon="image"/>
                    Preview
                </button>

                <button class="btn btn-default" @click="addSection">Add Section</button>
            </div>
        </div>

        <div id="sectionWrapper">
            <div class="col-xs-12 mt-2 accordion sectionItem" v-for="(section, index) in form.sections" :id="section.name" :key="section.name">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-md-4">
                                <input type="text" class="form-control" placeholder="Section Label" v-model="section.label">
                            </div>
                            <div class="col-md-8 text-right">
                                <p style="margin-top: 5px;">
                                    <span class="pr-2 clickable" @click="addRow(index)"><font-awesome-icon icon="plus"/> Add Row</span>
                                    <span class="pr-2 clickable" @click="delSection(index)"><font-awesome-icon icon="times"/> Remove Section</span>
                                    <span class="pr-2 clickable" @click="configSection(index)"><font-awesome-icon icon="cog"/> Section Config</span>
                                    <span class="clickable collapsed" data-toggle="collapse" :data-target="'#' + section.name + '_body'">
                                        <i class="fa fa-fw fa-chevron-up"></i>
                                        <i class="fa fa-fw fa-chevron-down"></i>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div :id="section.name + '_body'" class="collapse">
                        <div class="card-body sectionBody">
                            <row-component :section="section"></row-component>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <section-config-modal ref="SectionConfigModal" @updateSectionInfo="updateSectionInfo"></section-config-modal>
    </div>
</template>

<script>
    import {FORM_CONSTANTS} from "sethFormBuilder/config/constants";
    import RowComponent from "./RowComponent";
    import SectionConfigModal from "./common/SectionConfigModal";
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import {Hooks} from 'sethFormBuilder/template/components/hook_lists';

    export default {
        components: {SectionConfigModal, RowComponent, FontAwesomeIcon},
        name: "section-component",
        props: {
            form: {
                type: Object
            }
        },
        data: () => ({
            layouts: FORM_CONSTANTS.SectionLayout
        }),
        methods: {
            addSection() {
                var sectionInfo = _.cloneDeep(FORM_CONSTANTS.Section);
                // set uniqueID
                sectionInfo.name = _.domUniqueID('section_');
                sectionInfo.clientKey = sectionInfo.name;

                // Before hook
                let b4Run = Hooks.Section.beforeAdd.runSequence(sectionInfo);
                if (b4Run === false) {
                    return;
                }

                this.form.sections.push(sectionInfo);

                // After hook
                Hooks.Section.afterAdd.run(sectionInfo);
            },
            delSection(secIndex) {
                // make sure no dependencies
                if (this.form.sections[secIndex].rows.length > 0) {
                    SethPhatToaster.error("Can't remove this section because it's still have row(s) inside.");
                    return;
                }

                var sectionInfo = this.form.sections[secIndex];
                let beforeRun = Hooks.Section.beforeRemove.runSequence(sectionInfo);
                if (beforeRun === false) {
                    return;
                }

                // remove section
                this.form.sections.splice(secIndex, 1);

                // final hook
                Hooks.Section.afterRemove.run(sectionInfo);
            },
            configSection(secIndex) {
                var sectionInfo = this.form.sections[secIndex];
                this.$refs.SectionConfigModal.openModal(sectionInfo, secIndex);
            },
            traverseSection() {
                let self = this;

                // prepare data
                var items = $(this.$el).find("#sectionWrapper .sectionItem");
                var finalItems = [];

                // sort
                _.each(items, (item, index) => {
                    var id = $(item).attr('id');
                    var sectionItem = _.find(self.form.sections, {name: id});
                    sectionItem.order = index;
                    finalItems.push(sectionItem);
                });

                // reset the current sections
                this.form.sections = finalItems;
            },
            addRow(secIndex) {
                var rowInfo = _.cloneDeep(FORM_CONSTANTS.Row);

                // general row_name (id)
                rowInfo.name = _.domUniqueID(this.form.sections[secIndex].name + '_row_');

                // before hook
                let b4Run = Hooks.Row.beforeAdd.runSequence(rowInfo, this.form.sections[secIndex]);
                if (b4Run === false) {
                    return;
                }

                this.form.sections[secIndex].rows.push(rowInfo);

                // after hook
                Hooks.Row.afterAdd.run(rowInfo, this.form.sections[secIndex]);
            },
            preview() {
                this.$parent.preview();
            },
            updateSectionInfo(sectionInfo, index) {
                _.deepExtend(this.form.sections[index], sectionInfo);
            }
        },
        mounted() {
            let self = this;

            $("#sectionWrapper").sortable({
                cursor: "move",
                delay: 200,
                placeholder: "ui-state-highlight",
                update: function (event, ui) {
                    self.traverseSection();
                },
                start: function(e, ui){
                    ui.placeholder.height(ui.item.height());
                    ui.placeholder.css("border", "");
                    ui.placeholder.css("background-color", "#3498db");
                }
            }).disableSelection();
        },
        updated() {
            this.form._uniqueId = Math.random();
        }
    }
</script>

<style scoped>
    .sectionBody {
        /*padding: 30px 0;*/
        border-bottom: 1px solid rgba(0,0,0,.125);
    }

    .clickable {
        cursor: pointer;
    }

    .accordion .collapsed .fa-chevron-up,
    .accordion .fa-chevron-down {
        display: none;
    }

    .accordion .collapsed .fa-chevron-down,
    .accordion .fa-chevron-up {
        display: inline-block;
    }
    .ui-state-highlight {
        height: 2.5em;
        line-height: 1.2em;
        margin-top: .5em;
    }
</style>
