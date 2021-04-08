import {FIELD_MAPPINGS} from "@/configs/field-mappings";

const FIELD_MAPPINGS_INJECTION_MIXIN = {
    computed: {
        fieldMappings: () => FIELD_MAPPINGS
    },
};

export {
  FIELD_MAPPINGS_INJECTION_MIXIN
}
