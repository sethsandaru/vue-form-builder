import {VueFormBuilderInstaller} from "@/installer";

// Create module definition for Vue.use()
const VueFormBuilderPlugin = {
    install: VueFormBuilderInstaller
};

// Export the VueFormBuilderPlugin to let developers register it later.
// we don't automatically register it, therefore we have a big chance to
// - Configure the Internal Value of the Form
// - Extendable (Registering more controls, Styling Classes,...)
// - ...
if (typeof window !== 'undefined') {
    window.VueFormBuilderPlugin = VueFormBuilderPlugin
} else if (typeof global !== 'undefined') {
    global.VueFormBuilderPlugin = VueFormBuilderPlugin
}

export {
    VueFormBuilderPlugin
}