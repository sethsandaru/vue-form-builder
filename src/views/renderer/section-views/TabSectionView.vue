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
            </ul>

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

<script lang="ts">
    // @ts-ignore
    import {SECTION_VIEW_MIXINS} from "@/mixins/section-view-mixins";
    // @ts-ignore
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";
    // @ts-ignore
    import TabContentRowView from "@/views/renderer/row-views/TabContentRowView";

    export default {
        name: "TableSectionView",
        components: {TabContentRowView},
        mixins: [SECTION_VIEW_MIXINS, STYLE_INJECTION_MIXIN],
        methods: {
            getRadioID(uniqueId : string): string {
                return 'tab-radio-'.concat(uniqueId)
            },

            getTabHeaderID(uniqueId: string): string {
                return 'tab-header-'.concat(uniqueId)
            },

            /**
             * [UI-Update]
             */
            defaultSelectTab() {
                // @ts-ignore (don't know why but need to ignore to use nextTick)
                this.$nextTick(() => {
                    // @ts-ignore
                    const radioDom = document.getElementById(this.getRadioID(this.section.rows[0]))
                    // @ts-ignore
                    radioDom.checked = true
                })
            }
        },

        mounted() {
            // @ts-ignore
            this.defaultSelectTab()
        }
    }
</script>