<template>
    <div>
        <div :class="styles.FORM.FORM_GROUP">
            <label>Button Type (Type Attribute)</label>
            <select type="text"
                    :class="styles.FORM.FORM_CONTROL"
                    v-model="control.buttonType"
            >
                <option v-for="item in buttonTypeList" :value="item" v-text="item"></option>
            </select>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Button Class (Type Attribute)</label>
            <select type="text"
                    :class="styles.FORM.FORM_CONTROL"
                    v-model="control.buttonClass"
            >
                <option v-for="(className, name) in buttonClasses"
                        :value="className">
                    {{name}} ({{className}})
                </option>
            </select>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Run validation before emitting?
                <input type="checkbox" v-model="control.isRunValidation">
            </label>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Emitting Code</label>
            <input type="text"
                   :class="styles.FORM.FORM_CONTROL"
                   v-model="control.emitEventCode">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Emitting Value</label>
            <input type="text"
                   :class="styles.FORM.FORM_CONTROL"
                   v-model="control.emitEventData">
        </div>
    </div>
</template>

<script>
    import {CONTROL_SPECIAL_CONFIG_MIXIN} from "@/mixins/control-special-config-mixin";

    export default {
        name: "ButtonConfigView",
        mixins: [CONTROL_SPECIAL_CONFIG_MIXIN],

        computed: {
            buttonTypeList() {
                return ['button', 'submit', 'clear']
            },
            buttonClasses() {
                return this.styles.BUTTON
            }
        }
    }
</script>