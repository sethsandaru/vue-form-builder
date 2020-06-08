<template>
    <div>
        <div v-if="displayMode === 'line' || displayMode === 'next'"
             class="radio-checkbox"
             :class="{
                'line': displayMode === 'line',
                'next': displayMode === 'next',
             }">
            <label v-for="listItem in control.items">
                <!--- For structural, line/next is same --->
                <input :type="control.type"
                       :class="control.additionalFieldClass"
                       :name="inputName"
                       :value="listItem.value"
                       @input="updateValue(listItem.value)"
                >

                {{listItem.text}}

                <!--- Line By Line will need this <br> --->
                <br v-if="displayMode === 'line'" />
            </label>
        </div>
        <div v-else>
            <!--- Double/Size --->
            <div :class="styles.ROW">
                <div :class="styles.COLUMNS.COL6"
                     v-for="listItem in control.items">

                    <label>
                        <!--- Input things are same, hmm - TODO: DRY ?? --->
                        <input :type="control.type"
                               :class="control.additionalFieldClass"
                               :name="inputName"
                               :value="listItem.value"
                               @input="updateValue(listItem.value)"
                        >

                        {{listItem.text}}
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {CONTROL_FIELD_EXTEND_MIXIN} from "@/mixins/control-field-extend-mixin";
    import {RADIO_CHECKBOX_STYLE} from "@/configs/control-config-enum";

    /**
     * Radio/Checkbox List Control
     * Probably, we can use them together. Because the only main difference is input[type=radio|checkbox]
     * @property {ListItem[]} control.items
     */
    export default {
        name: "RadioCheckboxControl",
        mixins: [CONTROL_FIELD_EXTEND_MIXIN],

        computed: {
            /**
             * Check if the current instance control is radio??
             * @returns {boolean}
             */
            isRadio() {
                return this.control.type === 'radio'
            },

            /**
             * Quick Access to The Control.DisplayMode
             * @returns {string}
             */
            displayMode() {
                return this.control.displayMode
            },

            /**
             * Generate the :name for the input[type=checkbox|radio]
             * @returns {string|string}
             */
            inputName() {
                // For input[name] of Radio, they need to be the same.
                // If Control Name is Empty => Use ID instead (otherwise, control will break =)) )
                if (this.isRadio) {
                    return this.control.name || this.control.uniqueId
                }

                // For Checkbox, name will always be Array Mode (name[])
                return (this.control.name || this.control.uniqueId) + "[]"
            }
        }
    }
</script>