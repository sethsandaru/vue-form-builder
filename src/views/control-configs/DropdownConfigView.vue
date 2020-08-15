<template>
    <div>
        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Multiple Selection?
                <input type="checkbox" v-model="control.multiple">
            </label>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Option-Data-List Mode</label>
            <select :class="styles.FORM.FORM_CONTROL"
                    v-model="control.dataMode">

                <option v-for="item in listDataModes"
                        :key="item.val"
                        :value="item.val"
                        v-text="item.description">
                </option>

            </select>
        </div>

        <div v-show="this.control.dataMode === listDataModes.api.val">
            <div :class="styles.FORM.FORM_GROUP">
                <label>
                    Rest-API URL
                    <icon-tooltip icon="informationOutline"
                                  text="Your API-Endpoint URL - GET Method. It must return an Array. Read more on Documentation" />
                </label>

                <input type="text"
                       placeholder="https://your-domain/rest-api/get-list/..."
                       :class="styles.FORM.FORM_CONTROL"
                       v-model="control.apiURL">
            </div>

            <div :class="styles.FORM.FORM_GROUP">
                <label>
                    Value Key of your Object
                    <icon-tooltip icon="informationOutline"
                                  text="[{'value': '',...}] => value" />
                </label>

                <input type="text"
                       :class="styles.FORM.FORM_CONTROL"
                       v-model="control.apiValueKey">
            </div>

            <div :class="styles.FORM.FORM_GROUP">
                <label>
                    Text Key of your Object
                    <icon-tooltip icon="informationOutline"
                                  text="[{'text': '',...}] => text" />
                </label>

                <input type="text"
                       :class="styles.FORM.FORM_CONTROL"
                       v-model="control.apiTextKey">
            </div>
        </div>


        <div :class="styles.FORM.FORM_GROUP"
             v-show="this.control.dataMode === listDataModes.list.val">

            <label>
                List Options
                <span class="pointer"
                      @click="addListItem"
                      v-html="$form.getIcon('addOutline', '16px', '16px', 'green')">
                </span>
            </label>

            <!-- Im using div instead of table. Table too small :( -->
            <div :class="['list-selection']" v-for="(listItem, iItem) in control.items" :key="iItem">

                <div class="tool-block">
                    <span class="pointer"
                          @click="removeListItem(iItem)"
                          v-html="$form.getIcon('close', '16px', '16px', 'red')">
                    </span>
                </div>

                <div :class="styles.FORM.FORM_GROUP">
                    <label>Item Value</label>
                    <input type="text" :class="styles.FORM.FORM_CONTROL"
                           placeholder="Radio-Value"
                           v-model="listItem.value">
                </div>

                <div :class="styles.FORM.FORM_GROUP">
                    <label>Label Text</label>
                    <input type="text" :class="styles.FORM.FORM_CONTROL"
                           placeholder="Label text"
                           v-model="listItem.text">
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import {CONTROL_SPECIAL_CONFIG_MIXIN} from "@/mixins/control-special-config-mixin";
    import {DROPDOWN_DATA_MODES} from "@/configs/control-config-enum";
    import ListItem from "@/libraries/list-item.class";

    export default {
        name: "DropdownConfigView",
        mixins: [CONTROL_SPECIAL_CONFIG_MIXIN],

        methods: {
            /**
             * Add new List-Item for the Current Radio/Checkbox
             */
            addListItem() {
                this.control.items.push(
                    new ListItem('', '')
                )
            },

            /**
             * Remove list-Item by Index of the Array
             */
            removeListItem(index) {
                this.control.items.splice(index, 1)
            }
        },

        computed: {
            /**
             * Dropdown Data Modes List
             */
            listDataModes: () => DROPDOWN_DATA_MODES,
        }
    }
</script>