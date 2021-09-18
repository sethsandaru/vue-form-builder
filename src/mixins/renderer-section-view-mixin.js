import ControlView from "@/views/renderer/ControlView";
import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";

const RENDERER_SECTION_VIEW_MIXIN = {
    components: {
        ControlView // Show Control
    },

    mixins: [STYLE_INJECTION_MIXIN],

    props: {
        section: Object,
        rows: Object,
        controls: Object,
        valueContainer: Object,
        validationErrors: Object,
        readOnly: Boolean,
    },

    data: () => ({

    }),

    methods: {

    },

    computed: {


        /**
         * Classes for draggable
         * @returns {(string|string)[]}
         */
        containerClasses() {
            return [
                this.styles.ROW,
                'control-list-container'
            ]
        }
    },
};

export {
    RENDERER_SECTION_VIEW_MIXIN
}