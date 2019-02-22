import underscoreDeepExtend from 'underscore-deep-extend';
import moment from 'moment';
import {FontAwesomeRegister} from "sethFormBuilder/config/font-awesome-register";

// load jquery
if (!window.$) {
    let $ = require('jquery');
    window.$ = $;
    window.jQuery = $;
}

// load jquery ui
import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';

// load timepicker
require('sethFormBuilder/assets/js/jquery.timepicker.min');
require('sethFormBuilder/assets/css/jquery.timepicker.min.css');
require('sethFormBuilder/assets/css/v-form.css');

// load bootstrap
require('popper.js');
require('bootstrap');
// import 'bootstrap/dist/css/bootstrap.min.css';
// require('scriptjs');

// load font-awesome
FontAwesomeRegister.register();

// load underscore
window._ = require('underscore'); // override
require('sethFormBuilder/config/helper_function');
_.mixin({deepExtend: underscoreDeepExtend(_)});

// // load moment
if (!window.moment) {
    window.moment = moment;
}

// toaster
require('sethFormBuilder/assets/js/jquery.noty.packaged');

// validateJS
require('sethFormBuilder/assets/js/validate.min.js');
