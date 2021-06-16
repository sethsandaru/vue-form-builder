<template>
  <SidebarToggleableContainer headline="Basic Detail">
    <div :class="styles.FORM.FORM_GROUP">
      <label>Unique ID</label>
      <input
        type="text"
        :class="styles.FORM.FORM_CONTROL"
        :value="control.uniqueId"
        readonly
      />
    </div>

    <div :class="styles.FORM.FORM_GROUP">
      <label>Name (Must be unique)</label>
      <input
        type="text"
        :class="styles.FORM.FORM_CONTROL"
        v-model="control.name"
        :readonly="fieldMappingSet"
      />
    </div>

    <div :class="styles.FORM.FORM_GROUP">
      <label>Field Mapping</label>
      <select
        class="form-control"
        @change="handleFieldMappingSelection"
        v-model="selectedFieldMapping"
      >
        <option value=""></option>
        <optgroup
          v-for="(group, index) in fieldMappings"
          :key="index"
          :label="group.groupName"
        >
          <option
            :value="field"
            v-for="(field, fieldIndex) in group.fields"
            :key="fieldIndex"
            >{{ field.name }}</option
          >
        </optgroup>
      </select>
    </div>

    <div :class="styles.FORM.FORM_GROUP">
      <label>Label</label>
      <input
        type="text"
        :class="styles.FORM.FORM_CONTROL"
        v-model="control.label"
      />
    </div>

    <div :class="styles.FORM.FORM_GROUP">
      <label>Sub-label</label>
      <input
        type="text"
        :class="styles.FORM.FORM_CONTROL"
        v-model="control.subLabel"
      />
    </div>

    <div :class="styles.FORM.FORM_GROUP">
      <label>
        Show Label?
        <input type="checkbox" v-model="control.isShowLabel" />
      </label>
    </div>

    <div :class="styles.FORM.FORM_GROUP">
      <label>Field Placeholder (Optional)</label>
      <input
        type="text"
        :class="styles.FORM.FORM_CONTROL"
        v-model="control.placeholderText"
      />
    </div>

    <div :class="styles.FORM.FORM_GROUP">
      <label>Default Value (Optional)</label>
      <input
        type="text"
        :class="styles.FORM.FORM_CONTROL"
        v-model="control.defaultValue"
      />
    </div>
    <div>
      <label for=""
        >Conditional?
        <input type="checkbox" v-model="control.isConditional" />
      </label>
    </div>
    <div v-if="control.isConditional">
      <div :class="styles.FORM.FORM_GROUP">
        <label>Conditional Field</label>
        <input
          type="text"
          :class="styles.FORM.FORM_CONTROL"
          v-model="control.conditionalFieldName"
        />
      </div>
      <div class="control">
        <label class="radio">
          <input
            type="radio"
            v-model="control.conditionalFieldEquality"
            value="equals"
          />
          Equals
        </label>
        <label class="radio">
          <input
            type="radio"
            v-model="control.conditionalFieldEquality"
            value="notEqual"
          />
          Does Not Equal
        </label>
      </div>

      <div :class="styles.FORM.FORM_GROUP">
        <label>Conditional Field Value</label>
        <input
          type="text"
          :class="styles.FORM.FORM_CONTROL"
          v-model="control.conditionalFieldValue"
        />
      </div>
      <div class="form-group">
        <label for="">When Condition Is Met Input Is</label>
        <select class="form-control" v-model="control.conditionalWhenMet">
          <option value="visible">Visible</option>
          <option value="enabled">Enabled</option>
        </select>
      </div>
      <!--
      <div class="form-group">
        <label for="">Default State</label>
        <select class="form-control" v-model="control.conditionalWhenNotMet">
          <option value="visible">Visible When Condition Not Met</option>
          <option value="invisible">Invisible When Condition Not Met</option>
          <option value="enabled">Enabled When Condtion Not Met</option>
          <option value="disabled">Disabled When Condtion Not Met</option>
        </select>
      </div>
      <div class="form-group">
        <label for="">Conditional State</label>
        <select class="form-control" v-model="control.conditionalWhenMet">
          <option value="visible">Visible When Condition Met</option>
          <option value="invisible">Invisible When Condition Met</option>
          <option value="enabled">Enabled When Condtion Met</option>
          <option value="disabled">Disabled When Condtion Met</option>
        </select>
      </div>
      -->
    </div>
  </SidebarToggleableContainer>
</template>

<script>
import SidebarToggleableContainer from "@/views/container-views/SidebarToggleableContainer";
import { STYLE_INJECTION_MIXIN } from "@/mixins/style-injection-mixin";
import axios from "axios";

export default {
  name: "ControlBasicInformation",
  mixins: [STYLE_INJECTION_MIXIN],
  components: { SidebarToggleableContainer },
  props: {
    control: Object
  },
  data() {
    return {
      fieldMappings: [],
      selectedFieldMapping: null,
      fieldMappingSet: false
    };
  },
  methods: {
    handleFieldMappingSelection() {
      if (this.selectedFieldMapping) {
        this.fieldMappingSet = true;
        this.control.name = this.selectedFieldMapping.field;
        this.control.label = this.selectedFieldMapping.header;
        return;
      }

      this.fieldMappingSet = false;
      this.control.name = "";
      return;
    }
  },
  mounted() {
    let form = this.$form;
    if (form.fieldMatchingApi) {
      axios.get(form.fieldMatchingApi).then((response) => {
        if (response.status === 200 && response.data.length > 0) {
          this.fieldMappings = response.data;
        }
      });
    }
  }
};
</script>

<style scoped></style>
