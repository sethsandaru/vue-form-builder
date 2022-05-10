<template>
    <youtube :video-id="getURLfromYoutube"></youtube>
</template>

<script>
    import VueYouTubeEmbed from 'vue-youtube-embed'
    import {CONTROL_FIELD_EXTEND_MIXIN} from "@/mixins/control-field-extend-mixin";

    /**
     * VideoControl
     * <label for='...'>...</label>
     */
    export default {
        name: "VideoControl",
        mixins: [CONTROL_FIELD_EXTEND_MIXIN],
        components: {
            VueYouTubeEmbed
        },
        computed : {
            getURLfromYoutube() {
                return this.$youtube.getIdFromURL(this.control.videoID);
            }
        }
    }
</script>
