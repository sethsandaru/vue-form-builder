<template>
    <div>
        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Link Text
            </label>
            <input type="text" :class="styles.FORM.FORM_CONTROL"
                   v-model="control.text"/>
        </div>
        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Link Href (Hypertext Reference)
            </label>
            <input type="text"
                   :class="styles.FORM.FORM_CONTROL"
                   v-model="control.href"/>
        </div>
        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Is Center Link?
                <input type="checkbox"
                       @change="addCenter(control.isCenter, control.uniqueId)"
                       v-model="control.isCenter">
            </label>
        </div>
        <div :class="styles.FORM.FORM_GROUP">
            <label>Link Type (Type Attribute)</label>
            <select type="text"
                    :class="styles.FORM.FORM_CONTROL"
                    v-model="control.target">
                <option v-for="item in buttonTypeList"
                        :key="item"
                        :value="item"
                        v-text="item">
                </option>
            </select>
        </div>
    </div>
</template>

<script>
    /**
     * @property {ListItem[]} listControlData
     */
    import {CONTROL_SPECIAL_CONFIG_MIXIN} from "@/mixins/control-special-config-mixin";

    export default {
        name: "LinkConfigView",
        mixins: [CONTROL_SPECIAL_CONFIG_MIXIN],

        computed: {
            buttonTypeList() {
                return ['_blank', '_parent', '_self', '_top']
            }
        },
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
