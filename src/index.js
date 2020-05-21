// Declare install function executed by Vue.use()
import FormBuilder from "./components/FormBuilder";
import FormRenderer from "./components/FormRenderer";

export function install(Vue) {
    if (install.installed) return;
    install.installed = true;

    // DI for Form-Builder
    Vue.prototype.$formEvent = new Vue();

    // Register Form-Components
    Vue.component('FormBuilder', FormBuilder);
    Vue.component('FormRenderer', FormRenderer);
}

// Create module definition for Vue.use()
const plugin = {
    install
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

export {
    plugin
}