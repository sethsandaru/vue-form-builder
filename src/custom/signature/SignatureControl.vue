<template>
  <div>
    <div style="margin-bottom: .45rem;">
      Enter your name for a digital signature
    </div>
    <input
      :id="control.uniqueId"
      type="text"
      :class="controlFieldClass"
      :value="value"
      :name="control.name || control.uniqueId"
      :placeholder="control.placeholderText"
      @input="updateValue($event.target.value)"
      style="font-family: cursive; "
    />
  </div>
</template>

<script>
import { BaseControlSkeleton } from "v-form-builder";

export default {
  name: "SignatureControl",
  extends: BaseControlSkeleton,
  data: () => ({}),

  mounted() {}
};
</script>
