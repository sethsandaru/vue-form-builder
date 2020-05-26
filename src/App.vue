<template>
    <div id="app">
        <h1 class="text-center mt-2">Vue-Form-Builder @ v2.0.0 - Development-Preview</h1>
        <p class="text-center">Presented by <strong>Seth (Sandaru) Phat</strong></p>

        <div class="col-md-12">
            <button class="btn btn-info mr-2" @click="getData">Get JSON Form-Data (Console)</button>
            <button class="btn btn-info mr-2" @click="setData">Set JSON Form-Data (Basic Configuration)</button>
            <button class="btn btn-info mr-2" @click="createBlank">Create Blank Form</button>
        </div>

        <hr>

        <FormBuilder v-model="formData"></FormBuilder>
    </div>
</template>

<script>
    /**
     * NOTE - This file only exists for development purpose.
     */
    import FormBuilder from "@/components/FormBuilder";

    export default {
        components: {
            FormBuilder
        },
        data: () => ({
            formData: null
        }),
        methods: {
            getData() {
                console.log(JSON.stringify(this.formData))
            },

            createBlank() {
                this.formData = Object.assign({})
            },

            setData() {
                this.formData = Object.assign({},{"formConfig":{"headline":"Hello World","subHeadline":"Basic Form Configuration For You","isShowHeadline":true,"renderFormTag":false,"formActionURL":"","formMethod":"POST"},"sections":{},"rows":{},"controls":{}});
            }
        }
    }
</script>
