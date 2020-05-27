<template>
    <div class="toggleable-section">
        <div class="headline-block p5" v-show="section.isShowHeadline">
            <h2 :class="section.headlineAdditionalClass">
                <span class="toggle-item"
                      v-html="isVisible ? iconClose : iconOpen"
                      @click="isVisible = !isVisible"></span>

                {{section.headline}}

                <small :class="section.subHeadlineAdditionalClass" v-text="section.subHeadline"></small>
            </h2>
        </div>

        <!-- Rows - BLock it for animation -->
        <div v-show="isVisible">
            <transition name="slide">
                <NormalRowView v-for="(rowObject) in sortedRows"
                               :key="rowObject.uniqueId"
                               :row="rowObject"/>

                <!-- Add More Row? -->
                <AddRowControl @addRowNotify="addRow" />
            </transition>
        </div>

    </div>
</template>

<script>
    import {SECTION_VIEW_MIXINS} from "@/mixins/section-view-mixins";
    import NormalRowView from "@/views/builder/row-views/NormalRowView";

    export default {
        name: "ToggleableSectionView",
        components: {NormalRowView},
        mixins: [SECTION_VIEW_MIXINS],
        data: () => ({
            isVisible: true,
        }),
        computed: {
            iconColor: () => '#000',
            iconSize: () => '32px',

            iconClose() {
                return this.$form.getIcon('chevronUp', this.iconSize, this.iconSize, this.iconColor)
            },
            iconOpen() {
                return this.$form.getIcon('chevronDown', this.iconSize, this.iconSize, this.iconColor)
            }
        }
    }
</script>