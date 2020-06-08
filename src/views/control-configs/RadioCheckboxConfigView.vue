<template>
    <div>
        <div :class="styles.FORM.FORM_GROUP">
            <label>Display Mode</label>
            <select :class="styles.FORM.FORM_CONTROL"
                    v-model="control.displayMode">

                <option v-for="item in listDisplayModes"
                        :value="item.val"
                        v-text="item.description">
                </option>

            </select>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Display Position</label>
            <select :class="styles.FORM.FORM_CONTROL"
                    v-model="control.position">

                <option v-for="item in listPositions"
                        :value="item.val"
                        v-text="item.description">
                </option>

            </select>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>List Selections</label>

            <table :class="styles.TABLE.TABLE_CLASS">
                <thead>
                    <tr>
                        <th class="text-center">
                           <span v-html="$form.getIcon('addOutline', '24px', '24px', 'green')"
                                 @click="addListItem">
                           </span>
                        </th>
                        <th>Value</th>
                        <th>Label</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="listItem in control.items">
                        <td class="text-center">
                            <span v-html="$form.getIcon('addOutline', '24px', '24px', 'green')"></span>
                        </td>
                        <td>
                            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="listItem.value">
                        </td>
                        <td>
                            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="listItem.text">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import {CONTROL_SPECIAL_CONFIG_MIXIN} from "@/mixins/control-special-config-mixin";
    import {RADIO_CHECKBOX_POSITION, RADIO_CHECKBOX_STYLE} from "@/configs/control-config-enum";
    import ListItem from "@/libraries/list-item.class";

    export default {
        name: "RadioCheckboxConfigView",
        mixins: [CONTROL_SPECIAL_CONFIG_MIXIN],

        methods: {
            /**
             * Add new List-Item for the Current Radio/Checkbox
             */
            addListItem() {
                this.control.items.push(
                    new ListItem('', '')
                )
            }
        },

        computed: {
            /**
             * Configuration for the displayMode
             */
            listDisplayModes: () => RADIO_CHECKBOX_STYLE,

            /**
             * Configuration for the position
             */
            listPositions: () => RADIO_CHECKBOX_POSITION
        }
    }
</script>