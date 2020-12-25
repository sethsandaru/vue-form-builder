<template>
    <div class="tab-section">
        <div class="headline-block p5" v-show="section.isShowHeadline">
            <h2 :class="section.headlineAdditionalClass" v-text="section.headline"></h2>
            <p :class="section.subHeadlineAdditionalClass" v-text="section.subHeadline"></p>
        </div>

        <div class="tabs">

            <input type="radio"
                   v-for="rowId in section.rows"
                   :key="getRadioID(rowId)"
                   :id="getRadioID(rowId)"
                   name="tab-control"
            >

            <ul>
                <li
                    v-for="rowId in section.rows"
                    :key="getTabHeaderID(rowId)"
                    :id="getTabHeaderID(rowId)"
                >
                    <label :for="getRadioID(rowId)" role="button">
                        <span
                            v-if="rows[rowId].extendData.tabIcon"
                            v-html="rows[rowId].extendData.tabIcon"
                        ></span>
                        <br>
                        <span v-text="rows[rowId].extendData.tabName"></span>
                    </label>
                </li>

                <li @click="addNewTab">
                    <label class="add-row" role="button">
                        <span v-html="$form.getIcon('addOutline', '32px', '32px', '#000')"></span>
                        <br>
                        <span>
                            Add Tab
                        </span>
                    </label>
                </li>
            </ul>

<!--            <div class="slider" v-show="hasTabs > 0">-->
<!--                <div class="indicator"></div>-->
<!--            </div>-->

            <div class="content">
                <TabContentRowView
                    v-for="rowId in section.rows"
                    :key="rowId"
                    :row="rows[rowId]"
                    :section="section"
                    :controls="controls"
                />
            </div>
        </div>

    </div>
</template>

<script >
    // @ts-ignore
    import {SECTION_VIEW_MIXINS} from "@/mixins/section-view-mixins";
    // @ts-ignore
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";
    // @ts-ignore
    import {ALERT_DIALOG} from "@/libraries/alert-dialog";

    import TabContentRowView from "@/views/builder/row-views/TabContentRowView.vue";
    import {TabRow} from "@/interfaces/tab-row.interface";
    import mixins from 'vue-typed-mixins'

    export default {
        name: "TableSectionView",
        mixins:[SECTION_VIEW_MIXINS, STYLE_INJECTION_MIXIN],
        components: {
            TabContentRowView
        },

        computed: {
            hasTabs() {
                // @ts-ignore
                return this.section.rows.length > 0
            }
        },

        methods: {
            getRadioID(uniqueId) {
                return 'tab-radio-'.concat(uniqueId)
            },

            getTabHeaderID(uniqueId) {
                return 'tab-header-'.concat(uniqueId)
            },

            /**
             * [ACTION] Add a new tab action
             * Buss: simply add a new row with extendData
             */
            addNewTab() {
                const tabName = prompt("Give it a name for your new tab")
                if (!tabName) {
                    return ALERT_DIALOG.show("Tab Name can't be empty.");
                }

                const tabDetail = {
                    tabName,
                    defaultChecked: (
                        //@ts-ignore
                        this.section.rows.length == 0
                    )
                }

                // @ts-ignore
                this.addRow(null, tabDetail);

                // @ts-ignore - check if this is the first tab in our section??
                if (this.section.rows.length == 1) {
                    // yes it is, so after rendered new tab, we should select it.
                    this.defaultSelectTab()
                }
            },

            defaultSelectTab() {
                this.$nextTick(() => {
                    // @ts-ignore
                    const radioDom = document.getElementById(this.getRadioID(this.section.rows[0]))
                    // @ts-ignore
                    radioDom.checked = true
                })
            }
        }
    }
</script>