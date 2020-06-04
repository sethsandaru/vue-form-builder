import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";


const CONTROL_SPECIAL_CONFIG_MIXIN = {
    mixins: [STYLE_INJECTION_MIXIN],

    props: {
        control: {
            type: Object,
            required: true
        }
    },

}

export{
    CONTROL_SPECIAL_CONFIG_MIXIN
}