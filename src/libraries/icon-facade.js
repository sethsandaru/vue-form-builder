/**
 * Form-Icon-Facade is a lightweight library to help you retrieve
 * @author Phat Tran <phattranminh96@gmail.com>
 */
import {ARROW_UP_ICON} from "@/libraries/icons/arrow-up.icon";
import {ARROW_DOWN_ICON} from "@/libraries/icons/arrow-down.icon";
import {EDIT_PENCIL_ICON} from "@/libraries/icons/edit-pencil.icon";
import {COG_ICON} from "@/libraries/icons/cog.icon";


const ICONS = {
    arrowUp: ARROW_UP_ICON,
    arrowDown: ARROW_DOWN_ICON,
    editPencil: EDIT_PENCIL_ICON,
    cog: COG_ICON
}

const FormIcon = {
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