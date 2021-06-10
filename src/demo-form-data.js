// this demo contains normal form
const DEMO_FORM_DATA = {
  formConfig: {
    headline: "Create new Document",
    subHeadline:
      "Before processing your document, you need to create a new one first",
    isShowHeadline: true,
    renderFormTag: true,
    formActionURL: "",
    formMethod: "POST"
  },
  sections: {
    "section-e419de73-6847-49ca-aaea-1254af3be392": {
      uniqueId: "section-e419de73-6847-49ca-aaea-1254af3be392",
      headline: "New Section",
      headlineAdditionalClass: "",
      subHeadline: "This is the sub-headline of the new section",
      subHeadlineAdditionalClass: "",
      isShowHeadline: true,
      sortOrder: 1,
      type: "normal",
      rows: [],
      controls: [
        "control-9ed2f159-be73-40d0-9baf-902138f2f696",
        "control-4a901d19-8815-4caf-8512-5227425d19e4",
        "control-a8f85217-8be1-4cb9-a98b-7cd268da0d7b",
        "control-00116d64-0942-471f-9aca-91ec51123d4a",
        "control-f9d512d1-efb5-4d49-8a3a-59afd099df95",
        "control-0bc822d7-a9f1-403b-842e-fa7a80127ad7"
      ]
    }
  },
  rows: {},
  controls: {
    "control-9ed2f159-be73-40d0-9baf-902138f2f696": {
      uniqueId: "control-9ed2f159-be73-40d0-9baf-902138f2f696",
      type: "input",
      name: "nameFirst",
      label: "First Name",
      subLabel: "",
      isShowLabel: true,
      placeholderText: "",
      containerClass: "col-md-4 md-layout-item md-size-33",
      additionalContainerClass: "",
      additionalFieldClass: "",
      additionalLabelClass: "",
      defaultValue: "",
      validations: [
        {
          ruleType: "required",
          errorMessage: "First name is required",
          additionalValue: ""
        }
      ]
    },
    "control-4a901d19-8815-4caf-8512-5227425d19e4": {
      uniqueId: "control-4a901d19-8815-4caf-8512-5227425d19e4",
      type: "input",
      name: "nameLast",
      label: "Enabled On Match",
      subLabel: "",
      isShowLabel: true,
      placeholderText: "",
      containerClass: "col-md-4 md-layout-item md-size-33",
      additionalContainerClass: "",
      additionalFieldClass: "",
      additionalLabelClass: "",
      defaultValue: "",
      validations: [],
      isConditional: true,
      conditionalFieldName: "nameFirst",
      conditionalFieldValue: "Jesse",
      conditionalWhenNotMet: "invisible",
      conditionalWhenMet: "enabled"
    },
    "control-a8f85217-8be1-4cb9-a98b-7cd268da0d7b": {
      uniqueId: "control-a8f85217-8be1-4cb9-a98b-7cd268da0d7b",
      type: "input",
      name: "something",
      label: "Visible On Match",
      subLabel: "",
      isShowLabel: true,
      placeholderText: "",
      containerClass: "col-md-4 md-layout-item md-size-33",
      additionalContainerClass: "",
      additionalFieldClass: "",
      additionalLabelClass: "",
      defaultValue: "",
      validations: [],
      isConditional: true,
      conditionalFieldName: "nameFirst",
      conditionalFieldValue: "Jesse",
      conditionalWhenMet: "visible"
    },
    "control-00116d64-0942-471f-9aca-91ec51123d4a": {
      uniqueId: "control-00116d64-0942-471f-9aca-91ec51123d4a",
      type: "input",
      name: "",
      label: "STephan's Field",
      subLabel: "",
      isShowLabel: true,
      placeholderText: "",
      containerClass: "col-md-4 md-layout-item md-size-33",
      additionalContainerClass: "",
      additionalFieldClass: "",
      additionalLabelClass: "",
      defaultValue: "",
      validations: [],
      isConditional: true,
      conditionalFieldName: "nameFirst",
      conditionalFieldValue: "Stephan",
      conditionalWhenMet: "visible"
    },
    "control-f9d512d1-efb5-4d49-8a3a-59afd099df95": {
      uniqueId: "control-f9d512d1-efb5-4d49-8a3a-59afd099df95",
      type: "input",
      name: "somethingRandom",
      label: "Required but only if Enabled",
      subLabel: "",
      isShowLabel: true,
      placeholderText: "",
      containerClass: "col-md-4 md-layout-item md-size-33",
      additionalContainerClass: "",
      additionalFieldClass: "",
      additionalLabelClass: "",
      defaultValue: "",
      validations: [
        {
          ruleType: "required",
          errorMessage: "Something Random is required",
          additionalValue: ""
        }
      ],
      isConditional: true,
      conditionalFieldName: "nameFirst",
      conditionalFieldValue: "Jesse",
      conditionalWhenMet: "enabled"
    },
    "control-0bc822d7-a9f1-403b-842e-fa7a80127ad7": {
      uniqueId: "control-0bc822d7-a9f1-403b-842e-fa7a80127ad7",
      type: "button",
      name: "",
      label: "Submit",
      subLabel: "",
      isShowLabel: false,
      placeholderText: "",
      containerClass: "col-md-12",
      additionalContainerClass: "text-right",
      additionalFieldClass: "text-right",
      additionalLabelClass: "text-right",
      defaultValue: "",
      validations: [],
      buttonClass: "btn btn-success",
      buttonType: "submit",
      emitEventCode: "bruuh",
      emitEventData: "xnise",
      isRunValidation: true
    }
  }
};

// this demo contains tab section
//const DEMO_FORM_DATA = {"formConfig":{"headline":"","subHeadline":"","isShowHeadline":false,"renderFormTag":false,"formActionURL":"","formMethod":"POST"},"sections":{"section-1c49c507-55dd-4074-9c7f-32527aaa30c7":{"uniqueId":"section-1c49c507-55dd-4074-9c7f-32527aaa30c7","headline":"New Section","headlineAdditionalClass":"","subHeadline":"This is the sub-headline of the new section","subHeadlineAdditionalClass":"","isShowHeadline":true,"sortOrder":1,"type":"tab","rows":["row-0bbc4210-a3dc-4739-8259-830117c23c08","row-b64a4749-5eb4-4433-af07-1b197fae4ce8"],"controls":[]}},"rows":{"row-0bbc4210-a3dc-4739-8259-830117c23c08":{"uniqueId":"row-0bbc4210-a3dc-4739-8259-830117c23c08","additionalClass":"","type":"tabRow","sortOrder":0,"controls":["control-de4d9538-e1b1-4f99-b035-01122c1759bf","control-c624fc97-0769-4a41-a30c-cffcc8871acb"],"extendData":{"tabName":"Basic","defaultChecked":true}},"row-b64a4749-5eb4-4433-af07-1b197fae4ce8":{"uniqueId":"row-b64a4749-5eb4-4433-af07-1b197fae4ce8","additionalClass":"","type":"tabRow","sortOrder":0,"controls":["control-80c05507-3f97-457d-aa0a-e5e3e6b6dca2","control-80fc15f8-7d10-4b7a-be18-43b8aaa319da"],"extendData":{"tabName":"Advanced","defaultChecked":false}}},"controls":{"control-de4d9538-e1b1-4f99-b035-01122c1759bf":{"uniqueId":"control-de4d9538-e1b1-4f99-b035-01122c1759bf","type":"input","name":"","label":"Input Field","subLabel":"","isShowLabel":true,"placeholderText":"","containerClass":"col-md-4 md-layout-item md-size-33","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[]},"control-c624fc97-0769-4a41-a30c-cffcc8871acb":{"uniqueId":"control-c624fc97-0769-4a41-a30c-cffcc8871acb","type":"number","name":"","label":"Number Input Field","subLabel":"","isShowLabel":true,"placeholderText":"","containerClass":"col-md-4 md-layout-item md-size-33","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"isReal":false,"decimalPlace":1},"control-80c05507-3f97-457d-aa0a-e5e3e6b6dca2":{"uniqueId":"control-80c05507-3f97-457d-aa0a-e5e3e6b6dca2","type":"date","name":"","label":"Date Picker","subLabel":"","isShowLabel":true,"placeholderText":"","containerClass":"col-md-4 md-layout-item md-size-33","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"format":"DD/MM/YYYY","firstDay":1,"numberOfMonths":1,"numberOfColumns":1,"minDate":null,"maxDate":null,"singleMode":true,"minDays":0,"maxDays":0,"returnType":"format"},"control-80fc15f8-7d10-4b7a-be18-43b8aaa319da":{"uniqueId":"control-80fc15f8-7d10-4b7a-be18-43b8aaa319da","type":"checkbox","name":"","label":"Checkbox List","subLabel":"","isShowLabel":true,"placeholderText":"","containerClass":"col-md-4 md-layout-item md-size-33","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"displayMode":"line","position":"left","items":[{"value":"1","text":"dsfafdsf"},{"value":"12","text":"dsafasdf"}]}}}

// this demo contains a field with regex validation
//const DEMO_FORM_DATA = {"formConfig":{"headline":"","subHeadline":"","isShowHeadline":false,"renderFormTag":false,"formActionURL":"","formMethod":"POST"},"sections":{"section-11faa0c9-564f-49cf-94e3-f4a4978b3fb6":{"uniqueId":"section-11faa0c9-564f-49cf-94e3-f4a4978b3fb6","headline":"New Section","headlineAdditionalClass":"","subHeadline":"This is the sub-headline of the new section","subHeadlineAdditionalClass":"","isShowHeadline":true,"sortOrder":1,"type":"normal","rows":[],"controls":["control-47dea3ac-b79e-4ab5-bdf2-51e2ad39916c","control-820b1477-7533-4f8c-a6d6-1fc35b6ae0e9"]}},"rows":{},"controls":{"control-820b1477-7533-4f8c-a6d6-1fc35b6ae0e9":{"uniqueId":"control-820b1477-7533-4f8c-a6d6-1fc35b6ae0e9","type":"button","name":"","label":"Validation now","subLabel":"","isShowLabel":false,"placeholderText":"","containerClass":"col-md-12 md-layout-item md-size-100","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"buttonClass":"btn btn-primary md-button md-raised md-primary md-theme-default","buttonType":"button","emitEventCode":"","emitEventData":"","isRunValidation":true},"control-47dea3ac-b79e-4ab5-bdf2-51e2ad39916c":{"uniqueId":"control-47dea3ac-b79e-4ab5-bdf2-51e2ad39916c","type":"input","name":"number","label":"Number but using Text Field","subLabel":"","isShowLabel":true,"placeholderText":"","containerClass":"col-md-4 md-layout-item md-size-33","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[{"ruleType":"required","errorMessage":"This field is required","additionalValue":""},{"ruleType":"regex","errorMessage":"Must be number only","additionalValue":"^[0-9]+$|g"}]}}}

export { DEMO_FORM_DATA };
