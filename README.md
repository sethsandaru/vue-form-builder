# vue-form-builder
[![npm version](https://badge.fury.io/js/v-form-builder.svg)](https://www.npmjs.com/package/v-form-builder)
[![GitHub license](https://img.shields.io/github/license/sethsandaru/vue-form-builder.svg?style=flat-square)](https://github.com/sethsandaru/vue-form-builder/blob/master/LICENSE) ![img](https://img.shields.io/npm/dm/v-form-builder.svg)
[![HitCount](http://hits.dwyl.io/sethsandaru/vue-form-builder.svg)](http://hits.dwyl.io/sethsandaru/vue-form-builder)
[![img](https://img.shields.io/badge/documentation-full-green.svg?longCache=true&style=flat-square)](https://github.com/sethsandaru/vue-form-builder/wiki)

A simple builder to help you generate a super form for your features/modules/sites,... Easy to use, create, upgrade, maintain,...
Why need to code the form when you can use `Vue-Form-Builder` and render it with some extra steps :D

Advantages:
- Less code in development (No more <form> <div> <input> .... </div> </form>)
- Easy to maintain, update your Form later
- Setup your Form with a super friendly UI/UX
- Extensibility (Your custom control, styling,...)
- Form Validation? I got you fam
- Included HTML5 structure, no tricks or cheats.

Give this repo a ⭐ (star) if you actually like this and might use it for your development/production :D! Thank you!

Feel free to open an issue if you reach any bugs or issues. Thanks.

[Vue Form Builder Documentation](https://phattranminh96.gitbook.io/vue-form-builder/)

## Demo
- Demo Online: [Vue Form Builder ONLINE](https://vue-form-builder.herokuapp.com/)
- Demo Project (Store and Retrieve Form): https://github.com/sethsandaru/demo-vue-form-builder

## Supported Browsers

![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | 9+ ✔ | Latest ✔ | 6.1+ ✔ |

## How to install?

### NPM / Yarn
```php
npm i v-form-builder --save
```

### Browser
- Download the Latest [Release](https://github.com/sethsandaru/vue-form-builder/releases)
```html
    <link rel="stylesheet" href="v-form-builder.min.css">

    <script src="vue.min.js"></script>
    <script src="v-form-builder.umd.min.js"></script>
```

### CDN
Coming soon (hopefully :v)

### Documentation

[Installation Documentation](https://phattranminh96.gitbook.io/vue-form-builder/getting-started/installation)

**Notes:** 
- For the best experience, please install the latest version!
- Version below **@v2.0.0** is deprecated. No maintain + fix bugs. Please use 2.0.0 or above.

## Dependencies
I carefully watch the dependencies of the Vue Form Builder, from the version **2.0.0** and above. Here is the list:

- Vue JS (obviously) - But it won't be built together with the final library bundle
- vuedraggable: From `Sortable.JS` which is very lightweight and much lighter than JQuery + JQuery UI
- deep-equal: A simple method to check the Form Configuration
- Datepicker - LitePicker (Super lightweight, ~5KB): https://wakirin.github.io/Litepicker/
- DayJS - Parse/Formatting date (2KB): https://day.js.org/en/

See more at: [package.json](./package.json) and look at the `dependencies`

My truly desire: Fewer dependencies as possible and try minimize the size as much as possible.

## How to implement for a beginner?

- [Turning Up The Form](https://phattranminh96.gitbook.io/vue-form-builder/getting-started/turning-up-the-form)
- [Form Builder](https://phattranminh96.gitbook.io/vue-form-builder/getting-started/form-builder-starter)
- [Form Renderer](https://phattranminh96.gitbook.io/vue-form-builder/getting-started/form-renderer-starter)

### Usage / Use-cases

[Some of the use-cases I mentioned](https://phattranminh96.gitbook.io/vue-form-builder/use-cases)

### APIs / Extending / Hard-core stuff

[Visit Documentation](https://phattranminh96.gitbook.io/vue-form-builder/extending/plugin-options)

## Release notes
- Version **2.0.0**:
    - New structural, new behaviour, everything is new.
    - Less and less ugly code
    - Make the process/development/configuration more simple than previous version.
    - More controls
    - More features
    - **Less dependencies**
- Version **1.4.0**:
    - Refactored, the code is more easy to view & read.
    - Able to extend a custom control.
    - Fix some minor bugs.
- Version **1.3.0**:
    - Milestone 3 released.
    - Able to validate the form.
    - Able to styling the label (bold, italic, underline).
    - Able to set control label position for Section (horizontal or vertical)
    - Fix some bugs
    - Constraints for some Hooks
    - APIs for Validate
- Version **1.2.1**:
    - Fix some minor bugs.
- Version **1.2.0**:
    - Hooks are available now for both Template & GUI.
    - More options for controls, like:
        - Select: Ajax data source (URL)
        - Date Picker: date format
        - Time Picker: time format
    - Update control: 
        - Number Control to work properly with the decimal places.
        - Time Picker: change to another time picker with a better APIs + options.
    - Fix a problem that make the Date Picker icon didn't show.
    - Stop import Bootstrap 4 CSS into the bundle.
- Version **1.1.1**:
    - First Release of Vue Form Builder
    - Able to config form & render form by config data.
    - Get/set value for both GUI & Template.

## License
MIT License

## Supporting the project
You can see my lovely `Sponsor` button above. If you want to contribute a little, send me a coffee is good enough.

Also, please show your love by giving this repository a ⭐ (star). That would lighten up my day.

Copyright &copy; 2018 by [Seth Phat](http://sethphat.com) aka Phat Tran!
