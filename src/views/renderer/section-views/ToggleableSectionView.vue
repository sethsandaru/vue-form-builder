<template>
    <div class="toggleable-section">
        <div class="headline-block">
            <h2 :class="section.headlineAdditionalClass">
                <!-- chevron icon to show/hide -->
                <span class="toggle-item"
                  v-html="isVisible ? iconClose : iconOpen"
                  @click="isVisible = !isVisible">
                </span>

                <!-- headline -->
                <span v-text="section.headline"
                      v-show="section.isShowHeadline">
                </span>

                <!-- subheadline -->
                <small :class="[section.subHeadlineAdditionalClass, 'toggleable-sub-headline']"
                       v-text="section.subHeadline"
                       v-show="section.isShowHeadline">
                </small>
            </h2>
        </div>

        <!-- Rows - BLock it for animation -->
        <transition name="slide">
            <div v-show="isVisible" :class="containerClasses">
                <ControlView
                    v-for="controlId in section.controls"
                    :key="controlId"
                    :control="controls[controlId]"
                    :parent-id="section.uniqueId"
                    :value-container="valueContainer"
                    :validation-errors="validationErrors"
                    :read-only="readOnly"
                />
            </div>
        </transition>

    </div>
</template>

<script>
    import {RENDERER_SECTION_VIEW_MIXIN} from "@/mixins/renderer-section-view-mixin";
    import {TOGGLEABLE_MIXIN} from "@/mixins/toggleable-mixin";

    export default {
        name: "ToggleableSectionView",
        mixins: [RENDERER_SECTION_VIEW_MIXIN, TOGGLEABLE_MIXIN],
    }
</script>