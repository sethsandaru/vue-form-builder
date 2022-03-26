<template>
    <div>
        <div :class="styles.FORM.FORM_GROUP">
            <label>Text for Text-Block</label>
<!--            <textarea type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.text" rows="6"></textarea>-->
            <vue-editor id="description" :class="{ 'is-invalid': form.errors.has('description') }"
                        useCustomImageHandler @image-added="handleImageAdded"
                        v-model="control.text"></vue-editor>
        </div>
    </div>
</template>

<script>
    import {CONTROL_SPECIAL_CONFIG_MIXIN} from "@/mixins/control-special-config-mixin";

    export default {
        name: "TextHTMLConfigView",
        mixins: [CONTROL_SPECIAL_CONFIG_MIXIN],
        methods : {
            handleImageAdded: function(file, Editor, cursorLocation, resetUploader) {
                const formData = new FormData();
                formData.append("file", file);
                axios.post('/api/timage', formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization': 'Bearer ' + window.localStorage.getItem('auth.token')
                        }
                    })
                    .then(result => {
                        let url = result.data;
                        Editor.insertEmbed(cursorLocation, "image", url);
                        resetUploader();
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
        }
    }
</script>
