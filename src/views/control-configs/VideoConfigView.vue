<template>
    <div>
        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Link Video
            </label>
            <input type="text" :class="styles.FORM.FORM_CONTROL"
                   v-model="control.videoID"/>
        </div>
        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Is Center?
                <input type="checkbox"
                       @change="addCenter(control.isCenter, control.uniqueId)"
                       v-model="control.isCenter">
            </label>
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

        methods : {
            addCenter(isCenter, uniqID) {
                let el = document.getElementById(uniqID);
                if (isCenter && undefined !== el) {
                    el.parentNode.classList.add("text-center");
                } else {
                    el.parentNode.classList.remove("text-center");
                }
            }
        }
    }
</script>
