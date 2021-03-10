<template>
    <VueUploadComponent
        :id="control.uniqueId"
        :class="controlClasses"
        v-model="files"

        :multiple="control.isMultiple"
        :accept="control.accept"
        :extensions="control.extensions"
        :size="control.maxSize"
        :maximum="maximumFilesCanBeUploaded"

        :headers="configuredHeaders"
        :data="configuredPostData"
    >
        <button
            :class="control.buttonClasses"
            v-text="control.buttonLabel"
        ></button>
    </VueUploadComponent>
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

        data: () => ({
            files: null,
        }),

        methods: {

        },

        computed: {
            controlClasses() {
                return this.control.additionalFieldClass
            },

            /**
             * Get the maximum files for multiple uploader
             * @returns {number}
             */
            maximumFilesCanBeUploaded() {
                if (this.control.isMultiple) {
                    return this.control.maximumFiles
                }

                return 1
            },

            configuredHeaders() {
                if (!this.control.headers.length) {
                    return {}
                }

                const headerItems = {}
                this.control.headers.forEach(keyValueItem => {
                    headerItems[keyValueItem.key] = keyValueItem.value
                })

                return headerItems
            },

            configuredPostData() {
                if (!this.control.postData.length) {
                    return {}
                }

                const postItems = {}
                this.control.postData.forEach(keyValueItem => {
                    postItems[keyValueItem.key] = keyValueItem.value
                })

                return postItems
            }
        },
    }
</script>