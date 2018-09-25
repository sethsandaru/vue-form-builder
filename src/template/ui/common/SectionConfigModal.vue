<template>
    <div>
        <div class="modal" id="sectionConfigModal">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Section Configuration</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body" v-if="section !== null">
                        <div class="form-group">
                            <label>Section Client Key</label>
                            <input type="text" class="form-control" v-model="section.clientKey">
                        </div>
                        <div class="form-group">
                            <label>Label Position</label>
                            <select class="form-control" v-model="section.labelPosition">
                                <option value="left">Horizontal</option>
                                <option value="top">Vertical</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label><input type="checkbox" v-model="section.isDynamic"> Is Dynamic Form?</label>
                        </div>

                        <div class="row" v-if="section.isDynamic">
                            <div class="col-md-6">
                                <label>Min instance</label>
                                <input type="number"
                                       min="0"
                                       class="form-control"
                                       data-toggle='tooltip'
                                       title="Minimum instance for dynamic section"
                                       v-model="section.minInstance">
                            </div>
                            <div class="col-md-6">
                                <label>Max instance</label>
                                <input type="number"
                                       min="0"
                                       class="form-control"
                                       data-toggle='tooltip'
                                       title="Maximum instance for dynamic section. 0 for unlimited."
                                       v-model="section.maxInstance">
                            </div>
                        </div>
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" @click="save">Save</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const SECTION_ID = "#sectionConfigModal";

    export default {
        name: "SectionConfigModal",
        props:['updateSectionInfo'],
        data: () => ({
            index: null,
            section: null
        }),
        methods: {
            openModal(sectionInfo, index) {
                this.section = _.cloneDeep(sectionInfo);
                this.index = _.clone(index);
                $(SECTION_ID).modal('show');
            },
            closeModal() {
                $(SECTION_ID).modal('hide');
            },
            save() {
                if (_.isEmpty(this.section.clientKey)) {
                    this.section.clientKey = this.section.name;
                }
                // format data
                this.section.minInstance = parseInt(this.section.minInstance);
                this.section.maxInstance = parseInt(this.section.maxInstance);

                this.$emit('updateSectionInfo', this.section, this.index);
                this.closeModal();
            },
        },
        mounted() {
            $("[data-toggle='tooltip']").tooltip();
        }
    }
</script>

<style scoped>

</style>
