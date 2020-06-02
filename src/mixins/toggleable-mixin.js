/**
 * Toggleable Mixin - Same Methods/Properties would be use for Toggleable container
 *
 */

const TOGGLEABLE_MIXIN = {
    data:() => ({
        isVisible: true,
    }),

    computed: {
        iconColor: () => '#000',
        iconSize: () => '32px',

        iconClose() {
            return this.$form.getIcon('chevronUp', this.iconSize, this.iconSize, this.iconColor)
        },
        iconOpen() {
            return this.$form.getIcon('chevronDown', this.iconSize, this.iconSize, this.iconColor)
        }
    }
}

export {
    TOGGLEABLE_MIXIN
}