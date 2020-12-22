<template>
    <div class="tab-section">
        <div class="headline-block p5" v-show="section.isShowHeadline">
            <h2 :class="section.headlineAdditionalClass" v-text="section.headline"></h2>
            <p :class="section.subHeadlineAdditionalClass" v-text="section.subHeadline"></p>
        </div>

        <div class="tab-wrapper">

        </div>
    </div>
</template>

<script lang="ts">
    // @ts-ignore
    import {SECTION_VIEW_MIXINS} from "@/mixins/section-view-mixins";
    // @ts-ignore
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";

    export default {
        name: "TableSectionView",
        components: {

        },
        mixins: [SECTION_VIEW_MIXINS, STYLE_INJECTION_MIXIN],
        methods: {
        }
    }
</script>

<style scoped>

</style>