<template>
    <VueUploadComponent
            :id="control.uniqueId"
            :class="controlClasses"
    ></VueUploadComponent>
</template>

<script>
    import {CONTROL_FIELD_EXTEND_MIXIN} from "@/mixins/control-field-extend-mixin";
    import VueUploadComponent from "vue-upload-component";

    /**
     * File Uploader Control
     * Usage:
     */
    export default {
        name: "FileUploaderControl",
        components: {
            VueUploadComponent
        },
        mixins: [CONTROL_FIELD_EXTEND_MIXIN],
        methods: {

        },

        computed: {
            controlClasses() {
                return this.control.additionalFieldClass
            }
        },
    }
</script>