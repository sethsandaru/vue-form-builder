/**
 * Form-Icon-Facade is a lightweight library to help you retain ICON inside Form-Builder v2
 * @author Phat Tran <phattranminh96@gmail.com>
 * @license From Zondicons of Steve Schoger. Thanks very much for the beautiful/lightweight icons
 * @iconHomePage https://www.zondicons.com/
 */
import {ARROW_UP_ICON} from "@/libraries/icons/arrow-up.icon";
import {ARROW_DOWN_ICON} from "@/libraries/icons/arrow-down.icon";
import {EDIT_PENCIL_ICON} from "@/libraries/icons/edit-pencil.icon";
import {COG_ICON} from "@/libraries/icons/cog.icon";
import {ADD_OUTLINE_ICON} from "@/libraries/icons/add-outline.icon";
import {CLOSE_ICON} from "@/libraries/icons/close.icon";
import {TRASH_ICON} from "@/libraries/icons/trash.icon";
import {CHEVRON_UP_ICON} from "@/libraries/icons/chevron-up.icon";
import {CHEVRON_DOWN_ICON} from "@/libraries/icons/chevron-down.icon";
import {NAVIGATION_MORE_ICON} from "@/libraries/icons/navigation-more.icon";
import {INFORMATION_OUTLINE_ICON} from "@/libraries/icons/information-outline.icon";


const ICONS = {
    addOutline: ADD_OUTLINE_ICON,
    arrowUp: ARROW_UP_ICON,
    arrowDown: ARROW_DOWN_ICON,
    editPencil: EDIT_PENCIL_ICON,
    cog: COG_ICON,
    close: CLOSE_ICON,
    trash: TRASH_ICON,
    chevronUp: CHEVRON_UP_ICON,
    chevronDown: CHEVRON_DOWN_ICON,
    navigationMore: NAVIGATION_MORE_ICON,
    informationOutline: INFORMATION_OUTLINE_ICON
}

const FormIcon = {
    /**
     * Get SVG Icon for Form-Builder
     * @param {String} iconName
     * @param {String} width - Width with px (Eg: 16px)
     * @param {String} height - Height with px (Eg: 16px)
     * @param {String} fillColor - Hex Color String (Eg: #ffffff)
     * @returns {string} of SVG HTML TAG
     */
    getSVG(
        iconName,
        width = '16px',
        height = '16px',
        fillColor = '#ffffff'
    ) {
        if (!ICONS[iconName]) {
            throw new TypeError(`Icon Name '${iconName}' doesn't exists in Vue-Form-Builder.`);
        }

        let replacedIconWithData = ICONS[iconName]
            .replace("{0}", width)
            .replace("{1}", height)
            .replace("{2}", fillColor)

        return replacedIconWithData
    }
};

export {
    FormIcon
}