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
    import {FORM_CONSTANTS} from "config/constants";
    import RowComponent from "./RowComponent";
    import SectionConfigModal from "./common/SectionConfigModal";

    export default {
        components: {SectionConfigModal, RowComponent},
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
                sectionInfo.name = _.uniqueId('section_');
                sectionInfo.clientKey = sectionInfo.name;

                this.form.sections.push(sectionInfo);
            },
            delSection(secIndex) {
                // make sure no dependencies
                if (this.form.sections[secIndex].rows.length > 0) {
                    this.$toaster.error("Can't remove this section because this section still have rows inside.");
                    return;
                }

                this.form.sections.splice(secIndex, 1);
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
                rowInfo.name = _.uniqueId(this.form.sections[secIndex].name + '_row_');

                this.form.sections[secIndex].rows.push(rowInfo);
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
                update: function (event, ui) {
                    self.traverseSection();
                }
            });
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

</style>
