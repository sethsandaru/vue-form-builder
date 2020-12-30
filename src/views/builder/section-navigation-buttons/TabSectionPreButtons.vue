<template>
    <div style="display: inline">
        <button :class="styles.BUTTON.DEFAULT" @click="addNewTab">
            <span v-html="$form.getIcon('addOutline', '32px', '32px', '#000')"></span>
            Add Tab
        </button>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    // @ts-ignore
    import {STYLE_INJECTION_MIXIN} from '@/mixins/style-injection-mixin'

    // @ts-ignore
    import {EVENT_CONSTANTS} from '@/configs/events'

    export default Vue.extend({
        name: "TabSectionPreButtons",
        mixins: [STYLE_INJECTION_MIXIN],
        props: {
            section: {
                type: Object,
                required: true
            }
        },

        methods: {
            addNewTab() : void {
                // @ts-ignore - trigger to TabSectionView
                this.$formEvent.$emit(EVENT_CONSTANTS.BUILDER.ROW.ADD_TAB, this.section.uniqueId);
            }
        }
    })
</script>