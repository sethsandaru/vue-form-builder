import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";
import IconTooltip from "@/views/builder/misc/IconTooltip";


const CONTROL_SPECIAL_CONFIG_MIXIN = {
    components: {IconTooltip},
    mixins: [STYLE_INJECTION_MIXIN],

    props: {
        /**
         * Control Object Configuration
         */
        control: {
            type: Object,
            required: true
        },

        /**
         * Form-Data from the ROOT
         */
        formData: {
            type: Object,
            required: true
        }
    },

}

export{
    CONTROL_SPECIAL_CONFIG_MIXIN
}