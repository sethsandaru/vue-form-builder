<template>
    <youtube :video-id="control.videoID"></youtube>
</template>

<script>
    import {CONTROL_FIELD_EXTEND_MIXIN} from "@/mixins/control-field-extend-mixin";

    /**
     * VideoControl
     * <label for='...'>...</label>
     */
    export default {
        name: "VideoControl",
        mixins: [CONTROL_FIELD_EXTEND_MIXIN]
    }
</script>
