/**
 * V-Model of Form-Renderer
 */
import {CONTROLS} from "@/configs/controls";

const EMIT_EVENT = "change";

const MODEL = {
    props: {
        value: Object,
    },
    model: {
        event: EMIT_EVENT,
        props: "value"
    },
    data: () => ({
        valueContainer: null
    }),
    watch: {
        value: {
            deep: true,
            handler(val) {
                if (typeof val !== 'object') {
                    return
                }

                // set value for fields
                Object.assign(this.valueContainer, val)
            }
        },

        valueContainer: {
            deep: true,
            handler(val) {
                if (!val) return;

                this.$emit(EMIT_EVENT, this.valueContainer)
            },
        }
    },
    methods: {
        /**
         * Create Value Container to Store the Data
         */
        createValueContainer() {
            let containerObj = {}
            const controlIds = Object.keys(this.formData.controls)

            controlIds.forEach(controlId => {
                const controlItem = this.formData.controls[controlId]

                // if disableValue is provided, we don't need to solve more for the control
                if (
                    typeof CONTROLS[controlItem.type].disableValue === 'boolean' &&
                    CONTROLS[controlItem.type].disableValue
                ) {
                    return
                }

                // get the key-name value
                let name = controlItem.name;
                if (!name) {
                    // fall-back to id if no name
                    name = controlId;
                }

                // add new empty field value
                containerObj[name] = ""

                // if the control has default factory creation closure, run it
                if (typeof CONTROLS[controlItem.type].rendererDefaultData === 'function') {
                    containerObj[name] = CONTROLS[controlItem.type].rendererDefaultData(controlItem)
                }
            });

            // emit to the parent for the value detail
            if (this.value) {
                this.$emit(EMIT_EVENT, containerObj)
            }

            // set to the real handler
            this.valueContainer = containerObj
        }
    },

    created() {
        this.createValueContainer()
    },
}

export {
    MODEL
}