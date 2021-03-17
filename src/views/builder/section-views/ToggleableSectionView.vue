<template>
    <div class="toggleable-section">
        <div class="headline-block p5">
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
            <div v-show="isVisible">

                <!--- SHOW CONTROLS / With Draggable --->
                <draggable
                    :class="draggableClasses"
                    ghost-class="ghost"
                    :handle="dragControlHandle"
                    :list="section.controls"
                    :group="dragGroup"
                    :disabled="!permissions.canReOrderingControl"
                >

                    <ControlView
                        v-for="controlId in section.controls"
                        :key="controlId"
                        :control="controls[controlId]"
                        :parent-id="section.uniqueId"
                        :permissions="permissions"
                    />

                    <p v-if="!hasControl">
                        Droppable Zone / Controls will be showed here...
                    </p>
                </draggable>

                <!-- Add More Control? -->
                <AddControlControl
                    v-if="permissions.canAddControl"
                    :section="section"
                />
            </div>
        </transition>

    </div>
</template>

<script>
    import {SECTION_VIEW_MIXINS} from "@/mixins/section-view-mixins";
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";
    import AddControlControl from "@/views/builder/add-controls/AddControlControl";
    import {TOGGLEABLE_MIXIN} from "@/mixins/toggleable-mixin";

    export default {
        name: "ToggleableSectionView",
        components: {AddControlControl},
        mixins: [SECTION_VIEW_MIXINS, STYLE_INJECTION_MIXIN, TOGGLEABLE_MIXIN],
    }
</script>