/**
 * Field Mappings
 * @author Jesse Marple
 */

const FIELD_MAPPINGS = [
  {
    groupName: "Common",
    groupKey: "common",
    fields: [
      {
        name: "TestId",
        header: "TestId",
        field: "objectID",
        group: "common",
        enabled: true
      },
      {
        name: "Patient Id (15)",
        header: "PatientId",
        field: "uid15",
        group: "common",
        enabled: false
      },
      {
        name: "Patient Uid (Long)",
        header: "PatientUID",
        field: "employeeUid",
        group: "common",
        enabled: false
      },
      {
        name: "Lab Id",
        header: "labReferenceId",
        field: "labReferenceId",
        group: "common",
        enabled: true
      },
      {
        name: "Status",
        header: "Status",
        field: "employeeStatus",
        group: "common",
        enabled: true
      },
      {
        name: "Created",
        header: "Created",
        field: "createdAt",
        group: "common",
        enabled: true
      },
      {
        name: "Result",
        header: "Result",
        field: "resultValue",
        group: "common",
        enabled: false
      },
      {
        name: "Collection Date",
        header: "collectionDate",
        field: "collectionDate",
        group: "common",
        enabled: true
      }
    ]
  },
  {
    groupName: "Contact",
    groupKey: "contact",
    fields: [
      {
        name: "Full Name",
        header: "Full Name",
        field: "employeeName",
        group: "contact",
        enabled: false
      },
      {
        name: "First Name",
        header: "First Name",
        field: "employeeFirstName",
        group: "contact",
        enabled: false
      },
      {
        name: "Middle Name",
        header: "Middle Name",
        field: "employeeMiddleName",
        group: "contact",
        enabled: true
      },
      {
        name: "Last Name",
        header: "Last Name",
        field: "employeeLastName",
        group: "contact",
        enabled: false
      },
      {
        name: "Address Line 1",
        header: "Address Line 1",
        field: "employeeAddress",
        group: "contact",
        enabled: false
      },
      {
        name: "Address Line 2",
        header: "Address Line 2",
        field: "employeeAddress2",
        group: "contact",
        enabled: false
      },
      {
        name: "City",
        header: "City",
        field: "employeeCity",
        group: "contact",
        enabled: false
      },
      {
        name: "State",
        header: "State",
        field: "employeeState",
        group: "contact",
        enabled: false
      },
      {
        name: "Zip",
        header: "Zip",
        field: "employeeZip",
        group: "contact",
        enabled: false
      },
      {
        name: "County",
        header: "County",
        field: "employeeCounty",
        group: "contact",
        enabled: false
      },
      {
        name: "Email",
        header: "Email",
        field: "employeeEmail",
        group: "contact",
        enabled: false
      },
      {
        name: "Phone",
        header: "Phone",
        field: "employeePhone",
        group: "contact",
        enabled: false
      },
      {
        name: "DOB",
        header: "DOB",
        field: "employeeDob",
        group: "contact",
        enabled: true
      },
      {
        name: "Sex",
        header: "Sex/Gender",
        field: "employeeGender",
        group: "contact",
        enabled: true
      }
    ]
  },
  // Details
  {
    groupName: "Product",
    groupKey: "product",
    fields: [
      {
        name: "Id",
        header: "Product Id",
        field: "product.productId",
        group: "product",
        enabled: true
      },
      {
        name: "Name",
        header: "Product Name",
        field: "product.name",
        group: "product",
        enabled: true
      },
      {
        name: "Maker/Lab",
        header: "Product Maker",
        name: "Product Maker",
        field: "product.maker",
        group: "product",
        enabled: false
      },
      {
        name: "Type",
        header: "Product Type",
        field: "product.type",
        group: "product",
        enabled: false
      },
      {
        name: "Sample Source",
        header: "Sample Source",
        field: "product.sampleSource",
        group: "product",
        enabled: false
      },
      {
        name: "Sample Type",
        header: "Sample Type",
        field: "product.sampleType",
        group: "product",
        enabled: false
      },
      {
        name: "NPI Number",
        header: "NPI Number",
        field: "product.npiNumber",
        group: "product",
        enabled: false
      },
      {
        name: "NPI Physician",
        header: "NPI Physician",
        field: "product.npiPhysician",
        group: "product",
        enabled: false
      },
      {
        name: "NPI Physician First Name",
        header: "NPI Physician First Name",
        field: "product.npiPhysicianFirstName",
        group: "product",
        enabled: false
      },
      {
        name: "NPI Physician Last Name",
        header: "NPI Physician Last Name",
        field: "product.npiPhysicianLastName",
        group: "product",
        enabled: false
      },
      {
        name: "DeliveryKey",
        header: "DeliveryKey",
        field: "product.deliveryKey",
        group: "product",
        enabled: false
      },
      {
        name: "DeliveryAgent",
        header: "DeliveryAgent",
        field: "product.deliveryAgent",
        group: "product",
        enabled: false
      }
    ]
  },
  // Product Fields.
  {
    groupName: "Survey",
    groupKey: "survey",
    fields: [
      {
        name: "Covid19CareResident",
        header: "Survey Covid19CareResident",
        field: "survey.covid19CareResident",
        group: "survey",
        enabled: false
      },
      {
        name: "Covid19FirstTest",
        header: "Survey Covid19FirstTest",
        field: "survey.covid19FirstTest",
        group: "survey",
        enabled: false
      },
      {
        name: "Covid19Healthworker",
        header: "Survey Covid19Healthworker",
        field: "survey.covid19Healthworker",
        group: "survey",
        enabled: false
      },
      {
        name: "Covid19Hospitalized",
        header: "Survey Covid19Hospitalized",
        field: "survey.covid19Hospitalized",
        group: "survey",
        enabled: false
      },
      {
        name: "Covid19ICU",
        header: "Survey Covid19ICU",
        field: "survey.covid19ICU",
        group: "survey",
        enabled: false
      },
      {
        name: "Covid19Pregnant",
        header: "Survey Covid19Pregnant",
        field: "survey.covid19Pregnant",
        group: "survey",
        enabled: false
      },
      {
        name: "Covid19Symptomatic",
        header: "Survey Covid19Symptomatic",
        field: "survey.covid19Symptomatic",
        group: "survey",
        enabled: false
      },

      {
        name: "Ethnicity",
        header: "Survey Ethnicity",
        field: "survey.ethnicity",
        group: "survey",
        enabled: false
      },
      {
        name: "Patient Language",
        header: "Survey Patient Language",
        field: "survey.patientLanguage",
        group: "survey",
        enabled: false
      },
      {
        name: "Race",
        header: "Survey Race",
        field: "survey.race",
        group: "survey",
        enabled: false
      },
      {
        name: "TravelAbroad",
        header: "Survey TravelAbroad",
        field: "survey.travelAbroad",
        group: "survey",
        enabled: false
      },
      {
        name: "ContactWithConfirm",
        header: "Survey ContactWithConfirm",
        field: "survey.contactWithConfirm",
        group: "survey",
        enabled: false
      },

      {
        name: "Physician Workflow",
        header: "Physician Workflow",
        field: "physicianWorkflowMethod",
        group: "workflow",
        enabled: false
      },
      {
        name: "Collection Method",
        header: "Collection Method",
        field: "collectionMethod",
        group: "workflow",
        enabled: false
      },
      {
        name: "Consent Method",
        header: "Consent Method",
        field: "consentMethod",
        group: "workflow",
        enabled: false
      }
    ]
  }
  // Survey Fields
];

export { FIELD_MAPPINGS };
