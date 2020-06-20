<template>
    <div id="app">
        <h1 class="text-center mt-2">Vue-Form-Builder @ v2.0.0 - Development-Preview</h1>
        <p class="text-center">Presented by <strong>Seth (Sandaru) Phat</strong></p>
        <h4 class="text-center mb-3">What you <strong>BUILD</strong> is what you <strong>GOT</strong>.</h4>

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
                                <li>Table - Postponed to later version (Reason on README.md)</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    Table-Row - Postponed to later version (Reason on README.md):
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
                        <li>Configuration ✅</li>
                        <li>
                            Types:
                            <ul>
                                <li>Input ✅</li>
                                <li>Text ✅</li>
                                <li>Empty Block ✅</li>
                                <li>Text Block ✅</li>
                                <li>Checkbox List ✅</li>
                                <li>Radio-Button List ✅</li>
                                <li>Date/Date-Range Picker ✅</li>
                                <li>Label ✅</li>
                                <li>Time Picker - Postponed to later version (Reason on README.md)</li>
                                <li>File Upload - Postponed to later version (Reason on README.md)</li>
                                <li>Rich-Text Editor - Postponed to later version (Reason on README.md)</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li>Form Renderer - In Development</li>
                <li>Form Validation - In Development (Last stage)</li>

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
    import {DEMO_FORM_DATA} from "@/demo-form-data";

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
                this.formData = Object.assign({}, DEMO_FORM_DATA);
            }
        }
    }
</script>
