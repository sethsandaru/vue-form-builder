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
  </SidebarToggleableContainer>
</template>

<script>
import SidebarToggleableContainer from "@/views/container-views/SidebarToggleableContainer";
import { STYLE_INJECTION_MIXIN } from "@/mixins/style-injection-mixin";
// import { FIELD_MAPPINGS_INJECTION_MIXIN } from "@/mixins/field-mappings-injection-mixin";
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
          // let collection = [];
          // response.data.forEach((item) => {
          //   // check the item's group
          //   // do we already have a group for this item?
          //   let index = collection.findIndex((element) => {
          //     if (element.groupKey === item.group) return true;
          //   });
          //   if (index > -1) {
          //     // add the item to the group's fields
          //     collection[index].fields.push(item);
          //   } else {
          //     // if the group doesn't exists create it
          //     // add the item to the group's fields
          //     collection.push({
          //       groupName: item.group.toUpperCase(),
          //       groupKey: item.group,
          //       fields: [item]
          //     });
          //   }
          // });
          this.fieldMappings = response.data;
          // this.fieldMappings = collection;
        }
      });
    }
  }
};
</script>

<style scoped></style>
