<template>
    <div style="display: inline">
        <button :class="styles.BUTTON.DEFAULT">
            <span v-html="$form.getIcon('addOutline', '32px', '32px', '#000')"></span>
            Add Tab
        </button>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    // @ts-ignore
    import {STYLE_INJECTION_MIXIN} from '@/mixins/style-injection-mixin'

    export default Vue.extend({
        name: "TabSectionPreButtons",
        mixins: [STYLE_INJECTION_MIXIN],
        props: {
            section: {
                type: Object,
                required: true
            }
        }
    })
</script>