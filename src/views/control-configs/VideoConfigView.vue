<template>
    <div>
        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Link Video
            </label>
            <input type="text" :class="styles.FORM.FORM_CONTROL"
                   v-model="control.videoID"/>
        </div>
    </div>
</template>

<script>
    /**
     * @property {ListItem[]} listControlData
     */
    import {CONTROL_SPECIAL_CONFIG_MIXIN} from "@/mixins/control-special-config-mixin";

    export default {
        name: "VideoConfigView",
        mixins: [CONTROL_SPECIAL_CONFIG_MIXIN],
    }
</script>
