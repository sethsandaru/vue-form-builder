import {VueFormBuilderInstaller} from "@/installer";
import FormBuilder from "@/components/FormBuilder";
import FormRenderer from "@/components/FormRenderer";
import BaseControlSkeleton from "@/skeletons/controls/BaseControlSkeleton";
import BaseControlConfigSkeleton from "@/skeletons/controls/BaseControlConfigSkeleton";

import '@/assets/v-form-builder.css'

// Create module definition for Vue.use()
const VueFormBuilderPlugin = {
    install: VueFormBuilderInstaller
};

// For Browser-Vue's purpose
// Export the VueFormBuilderPlugin to let developers register it later.
// I won't automatically register it, therefore you would have a big chance to
// - Configure the Internal Configuration of the Form
// - Extendable (Registering more controls, Styling Classes,...)
// - ...
if (typeof window !== 'undefined') {
    window.VueFormBuilderPlugin = VueFormBuilderPlugin
} else if (typeof global !== 'undefined') {
    global.VueFormBuilderPlugin = VueFormBuilderPlugin
}

export {
    VueFormBuilderPlugin,

    // Main Component for Node
    FormBuilder,
    FormRenderer,

    // For Vue.extend
    BaseControlSkeleton,
    BaseControlConfigSkeleton
}