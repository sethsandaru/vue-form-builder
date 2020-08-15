<template>
    <SidebarToggleableContainer headline="Validation">

        <label>
            Validation Rules
            <span class="pointer"
                  title="Click this to add a new rule"
                  @click="addNewRule"
                  v-html="$form.getIcon('addOutline', '16px', '16px', 'green')">
            </span>
        </label>

        <div class="list-selection"
             v-for="(addedRule, ruleIndex) in control.validations"
             :key="addedRule.ruleType">

            <div class="tool-block">
                <span class="pointer"
                      title="Click this to remove this rule"
                      @click="removeRule(ruleIndex)"
                      v-html="$form.getIcon('close', '16px', '16px', 'red')">
                </span>
            </div>

            <div :class="[styles.FORM.FORM_GROUP]">
                <label>Validation Rule</label>
                <select :class="styles.FORM.FORM_CONTROL"
                        @change="updateDefaultErrorMessage(addedRule)"
                        v-model="addedRule.ruleType">

                    <option selected disabled>Choose a Rule</option>

                    <option v-for="(ruleName, ruleIndex) in getRuleList(addedRule.ruleType)"
                            :key="ruleIndex"
                            :value="ruleName"
                            v-text="ruleName">
                    </option>

                </select>

                <small v-show="getRuleInfo(addedRule.ruleType, 'desc')"
                       v-text="getRuleInfo(addedRule.ruleType, 'desc')">
                </small>
            </div>

            <div :class="styles.FORM.FORM_GROUP"
                 v-show="getRuleInfo(addedRule.ruleType, 'needValue')">

                <label>Rule Value</label>
                <input type="text"
                       :class="styles.FORM.FORM_CONTROL"
                       :placeholder="getRuleInfo(addedRule.ruleType, 'valueInfo')"
                       v-model="addedRule.additionalValue">

            </div>

            <div :class="styles.FORM.FORM_GROUP">

                <label>Default Error Message</label>
                <input type="text"
                       :class="styles.FORM.FORM_CONTROL"
                       v-model="addedRule.errorMessage">

            </div>
        </div>

    </SidebarToggleableContainer>
</template>

<script>
    import SidebarToggleableContainer from "@/views/container-views/SidebarToggleableContainer";
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";
    import {VALIDATION_RULES, ValidationRule} from "@/configs/validation";

    export default {
        name: "ControlValidationInformation",
        mixins: [STYLE_INJECTION_MIXIN],
        components: {SidebarToggleableContainer},
        props: {
            control: Object
        },

        methods: {
            /**
             * Get the rule info based on the validation rule
             * @param ruleName
             * @param ruleKey
             * @returns {boolean}
             */
            getRuleInfo(ruleName, ruleKey) {
                if (!ruleName) {
                    return false
                }

                return VALIDATION_RULES[ruleName][ruleKey]
            },

            /**
             * [ON-INPUT] Every-Time the rule-select is selected, we need to update the default error message.
             */
            updateDefaultErrorMessage(addedRule) {
                addedRule.errorMessage = this.getRuleInfo(addedRule.ruleType, 'errorMessage')
            },

            /**
             * [CLICK] Add a new rule into validation array
             */
            addNewRule() {
                this.control.validations.push(new ValidationRule());
            },

            /**
             * [CLICK] Remove a rule
             */
            removeRule(index) {
                this.control.validations.splice(index, 1)
            },

            /**
             * Get all the available rules without the current one
             * @return {String[]}
             */
            getRuleList(currentRule) {
                const allUsedRules = this.control.validations
                    .map(rule => rule.ruleType)
                    .filter(ruleName => ruleName !== currentRule)
                const allRules = Object.keys(VALIDATION_RULES)

                return allRules.filter(rule => !allUsedRules.includes(rule))
            },
        },

        computed: {
            /**
             * Get all Rule List
             * @returns {string[]}
             */
            ruleList: () => Object.keys(VALIDATION_RULES)
        }
    }
</script>