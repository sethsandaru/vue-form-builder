<template>
    <div class="tab-section">
        <div class="headline-block p5" v-show="section.isShowHeadline">
            <h2 :class="section.headlineAdditionalClass" v-text="section.headline"></h2>
            <p :class="section.subHeadlineAdditionalClass" v-text="section.subHeadline"></p>
        </div>

        <div class="tabs">

            <input type="radio"
                   v-for="rowObj in sectionRows"
                   :key="'tab-radio' + rowObj.uniqueId"
                   :id="'tab-radio' + rowObj.uniqueId"
                   name="tab-control"
                   :checked="rowObj.defaultChecked"
            >

            <ul>
                <li
                    v-for="rowObj in sectionRows"
                    :key="'tab-header' + rowObj.uniqueId"
                    :id="'tab-header' + rowObj.uniqueId"
                >
                    <label :for="'tab-radio' + rowObj.uniqueId" role="button">
                        <span
                            v-if="rowObj.extendData.tabIcon"
                            v-html="rowObj.extendData.tabIcon"
                        ></span>
                        <br>
                        <span v-text="rowObj.extendData.tabName"></span>
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

            <div class="slider" v-show="rows.length > 0">
                <div class="indicator"></div>
            </div>

            <div class="content">
                <TabContentRowView
                    v-for="rowObj in sectionRows"
                    :key="rowObj.uniqueId"
                    :row="rowObj"
                    :section="section"
                    :controls="controls"
                />
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    // @ts-ignore
    import {SECTION_VIEW_MIXINS} from "@/mixins/section-view-mixins";
    // @ts-ignore
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";
    // @ts-ignore
    import {ALERT_DIALOG} from "@/libraries/alert-dialog";

    import TabContentRowView from "@/views/builder/row-views/TabContentRowView.vue";
    import {TabRow} from "@/interfaces/tab-row.interface";
    import mixins from 'vue-typed-mixins'

    export default mixins(SECTION_VIEW_MIXINS, STYLE_INJECTION_MIXIN).extend({
        name: "TableSectionView",
        components: {
            TabContentRowView
        },
        methods: {
            /**
             * [ACTION] Add a new tab action
             */
            addNewTab() : void {
                const tabName = prompt("Give it a name for your new tab")
                if (!tabName) {
                    return ALERT_DIALOG.show("Tab Name can't be empty.");
                }

                const tabDetail : TabRow = {
                    tabName,
                    defaultChecked: (
                        //@ts-ignore
                        this.rows.length == 0
                    )
                }

                // @ts-ignore
                this.addRow(null, tabDetail);
            }
        }
    })
</script>