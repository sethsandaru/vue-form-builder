<template>
    <div id="app">
        <h1 class="text-center mt-2">Vue-Form-Builder @ v2.0.0 - Development-Preview</h1>
        <p class="text-center">Presented by <strong>Seth (Sandaru) Phat</strong></p>

        <div class="col-md-12">
            <button class="btn btn-info mr-2" @click="getData">Get JSON Form-Data (Console)</button>
            <button class="btn btn-info mr-2" @click="setData">Set JSON Form-Data (Basic Configuration)</button>
            <button class="btn btn-info mr-2" @click="createBlank">Create Blank Form</button>
            <button class="btn btn-info mr-2" @click="isShowDevNote = !isShowDevNote">Show Development Note</button>
        </div>

        <div class="container-fluid" v-show="isShowDevNote">
            <hr>

            <h4>@v2.0.0 Development Notes</h4>

            <ul>
                <li>Basic Form Structural ✅</li>
                <li>Form Configuration ✅</li>
                <li>
                    Section:
                    <ul>
                        <li>Configuration ✅</li>
                        <li>Sort (Up/Down) ✅</li>
                        <li>Create/Delete ✅</li>
                        <li>
                            Types:
                            <ul>
                                <li>Normal ✅</li>
                                <li>Toggle-able ✅</li>
                                <li>Table 👨‍💻</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    Row:
                    <ul>
                        <li>Sort (Up/Down) 👨‍💻</li>
                        <li>Create ✅ / Delete ✅</li>
                    </ul>
                </li>
                <li>
                    Controls:
                    <ul>
                        <li>Create ✅</li>
                        <li>Remove ✅</li>
                        <li>Sort/Reposition ✅</li>
                        <li>Configuration 👨‍💻</li>
                        <li>
                            Types:
                            <ul>
                                <li>Input ✅</li>
                                <li>Text ✅</li>
                                <li>Empty Block ✅</li>
                                <li>...</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
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
            formData: null,
            isShowDevNote: false
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
