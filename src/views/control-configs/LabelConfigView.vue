<template>
    <div>
        <div :class="styles.FORM.FORM_GROUP">
            <label>For-Attribute to Control?</label>
            <select :class="styles.FORM.FORM_CONTROL"
                    @input="selectedFor"
            >
                <option>None</option>

                <option v-for="item in listControlData"
                        :key="item.value"
                        :value="item.value"
                        v-text="item.text">
                </option>

            </select>
        </div>
    </div>
</template>

<script>
    import {CONTROL_SPECIAL_CONFIG_MIXIN} from "@/mixins/control-special-config-mixin";
    import ListItem from "@/libraries/list-item.class";

    const LABEL_SELECTED_CLASS = 'label-selected'

    /**
     * @property {ListItem[]} listControlData
     */
    export default {
        name: "LabelConfigView",
        mixins: [CONTROL_SPECIAL_CONFIG_MIXIN],

        data: () => ({
            listControlData: []
        }),

        methods: {
            selectedFor($e) {
                this.clearAllMapped()

                this.control.forAttribute = $e.target.value

                // is eligible to add selected class??
                if (this.control.forAttribute) {
                    this.labelMappedAssign(this.control.forAttribute)
                }
            },

            /**
             * Find the control and add it a simple class to let the configurator know which
             * label they're assigning to which control.
             * @param controlId
             */
            labelMappedAssign(controlId) {
                const controlDOM = document.getElementById(controlId)
                if (!controlDOM || !controlDOM.parentNode) {
                    return
                }

                controlDOM.parentNode.classList.add(LABEL_SELECTED_CLASS)
            },

            /**
             * Simply loop through all the controls and remove the `bordered` class
             * Vanilla JS rules
             */
            clearAllMapped() {
                this.listControlData.forEach(controlOption => {
                    const controlDOM = document.getElementById(controlOption.value)
                    if (!controlDOM || !controlDOM.parentNode) {
                        return
                    }

                    controlDOM.parentNode.classList.remove(LABEL_SELECTED_CLASS)
                })
            }
        },

        created() {
            // prepare control list and remove the current
            let pureIds = Object.keys(this.formData.controls)
            for (const controlId of pureIds) {
                // Current Label => NO ID should be added
                if (controlId === this.control.uniqueId) {
                    continue
                }

                // Label Control => NO ID should be added
                if (this.formData.controls[controlId].type === 'label') {
                    continue
                }

                // option text generation
                const controlObj = this.formData.controls[controlId];
                let fieldName = `${controlObj.label} - #${controlObj.uniqueId}`

                // if name is exist => use it instead of uniqueID
                if (controlObj.name) {
                    fieldName = `${controlObj.label} - ${controlObj.name}`
                }

                // add it to the list
                this.listControlData.push(
                    new ListItem(controlId, fieldName)
                )
            }

            // do we need to mark the border??
            if (this.control.forAttribute) {
                this.labelMappedAssign(this.control.forAttribute)
            }
        },

        beforeDestroy() {
            this.clearAllMapped()
        }
    }
</script>