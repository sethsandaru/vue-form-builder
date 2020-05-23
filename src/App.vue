<template>
    <div id="app">
        <h1 class="text-center mt-2">Vue-Form-Builder @ v2.0.0 - Development-Preview</h1>
        <p class="text-center">Presented by <strong>Seth (Sandaru) Phat</strong></p>

        <div class="col-md-12">
            <button class="btn btn-info" @click="getData">Get JSON FormConfiguration (Console)</button>
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
            }
        }
    }
</script>
