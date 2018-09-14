<template>
    <div class="modal" id="previewModal">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Preview Your Form</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <form-builder-gui ref="FormBuilderGui" :form="form" :key="form._uniqueId"></form-builder-gui>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <!--<button type="button" class="btn btn-default" @click="getData">Get Data</button>-->
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import FormBuilderGui from 'sethFormBuilder/gui/FormBuilderGui';

    export default {
        name: "PreviewComponent",
        components: {FormBuilderGui},
        props: ['form'],
        data: () => ({
            previewModal: null
        }),
        methods: {
            openModal() {
                this.form._uniqueId = Math.random();
                this.previewModal.modal('show');
            },
            closeModal() {
                this.previewModal.modal('hide');
            },
            getData() {
                console.log(this.$refs.FormBuilderGui.getValue());
            }
        },
        mounted() {
            this.previewModal = $(this.$el);
        }
    }
</script>

<style scoped>

</style>
