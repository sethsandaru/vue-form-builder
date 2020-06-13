<template>
    <div>
        <div :class="styles.FORM.FORM_GROUP">
            <label>For-Attribute to Control?</label>
            <select :class="styles.FORM.FORM_CONTROL"
                    @input="selectedFor"
            >
                <option>None</option>
                <option v-for="item in listControlData"
                        :value="item"
                        v-text="item">
                </option>
            </select>
        </div>
    </div>
</template>

<script>
    import {CONTROL_SPECIAL_CONFIG_MIXIN} from "@/mixins/control-special-config-mixin";

    const LABEL_SELECTED_CLASS = 'label-selected'

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
                document.getElementById(controlId).parentNode.classList.add(LABEL_SELECTED_CLASS)
            },

            /**
             * Simply loop through all the controls and remove the `bordered` class
             * Vanilla JS rules
             */
            clearAllMapped() {
                this.listControlData.forEach(id => {
                    document.getElementById(id).parentNode.classList.remove(LABEL_SELECTED_CLASS)
                })
            }
        },

        created() {
            // prepare control list and remove the current
            let pureIds = Object.keys(this.formData.controls)
            for (let controlId of pureIds) {
                // Current Label => NO ID should be added
                if (controlId === this.control.uniqueId) {
                    continue
                }

                // Label Control => NO ID should be added
                if (this.formData.controls[controlId].type === 'label') {
                    continue
                }

                this.listControlData.push(controlId)
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