<template>
  <div>
    <!---
        You can use the `control` object - basically, it's main data of your custom control field
        Because I had 2 more specific config data (isChecked & switchColor)
        So I added 2 more fields below to config it.
        --->
    <div>This control has no configuration.</div>
  </div>
</template>

<script>
import { BaseControlConfigSkeleton } from "v-form-builder";

export default {
  name: "SignatureConfigView",
  extends: BaseControlConfigSkeleton
};
</script>
