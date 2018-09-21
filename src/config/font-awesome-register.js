import { library } from '@fortawesome/fontawesome-svg-core';
import {faImage} from '@fortawesome/free-solid-svg-icons/faImage'
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus'
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes'
import {faChevronUp} from '@fortawesome/free-solid-svg-icons/faChevronUp'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons/faChevronDown'
import {faCog} from '@fortawesome/free-solid-svg-icons/faCog'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons/faPlusCircle'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons/faTimesCircle'
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons/faInfoCircle'

var FontAwesomeRegister = {};

FontAwesomeRegister.register = function() {
    library.add(faImage, faPlus, faTimes, faChevronUp,faChevronDown, faCog, faPlusCircle, faTimesCircle, faInfoCircle);
};

export {
    FontAwesomeRegister
}
