import {MODEL} from "@/mixins/form-renderer/model";
import {CONFIGURATION} from "@/mixins/form-renderer/configuration";
import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";
import {FORM_BUILDER_METHODS} from "@/mixins/form-builder/form-builder-methods";


export default [
    CONFIGURATION,
    MODEL,
    STYLE_INJECTION_MIXIN,
    FORM_BUILDER_METHODS
]