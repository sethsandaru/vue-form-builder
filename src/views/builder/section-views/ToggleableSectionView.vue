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
        <transition name="slide">
            <div v-show="isVisible">

                <!--- SHOW CONTROLS --->
                <div :class="styles.ROW">

                </div>

                <!-- Add More Control? -->
                <AddControlControl :section="section" />
            </div>
        </transition>

    </div>
</template>

<script>
    import {SECTION_VIEW_MIXINS} from "@/mixins/section-view-mixins";
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";
    import AddControlControl from "@/views/builder/AddControlControl";

    export default {
        name: "ToggleableSectionView",
        components: {AddControlControl},
        mixins: [SECTION_VIEW_MIXINS, STYLE_INJECTION_MIXIN],
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