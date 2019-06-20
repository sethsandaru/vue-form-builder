# vue-form-builder
[![npm version](https://badge.fury.io/js/v-form-builder.svg)](https://www.npmjs.com/package/v-form-builder)
[![GitHub license](https://img.shields.io/github/license/sethsandaru/vue-form-builder.svg?style=flat-square)](https://github.com/sethsandaru/vue-form-builder/blob/master/LICENSE) ![img](https://img.shields.io/npm/dm/v-form-builder.svg)
[![HitCount](http://hits.dwyl.io/sethsandaru/vue-form-builder.svg)](http://hits.dwyl.io/sethsandaru/vue-form-builder)
[![img](https://img.shields.io/badge/documentation-full-green.svg?longCache=true&style=flat-square)](https://github.com/sethsandaru/vue-form-builder/wiki)

A simple form-builder with drag & drop to help you deal your own form. Less code in development and your site will be more generic, configurable.

Advantages:
- Less code in development
- Wide range of APIs
- Easily to maintain, update later
- Easily to config your form (drag & drop, control settings)
- Extensibility (Extend-able): Help you to import your own Control
- Validation & Custom Control Validation Supported.
- ...

Fully documentation in this Repo's Wiki. Check it out!

Give this repo a ⭐ (star) if you actually like this and will use it for your development/production :D! Thank you!

The library is built & ready for production but if you meet any bugs or issues, feel free to open!

Demo Online: http://vue-form-builder.sethphat.com    
Demo Project: https://github.com/sethsandaru/demo-vue-form-builder

## Current version
Current latest version of the Vue Form Builder: **1.4.1-rc1**.

Updated/Features:
- Update dependencies that got security problem.
- Placeholder for Sortable (drag n' drop section, row, control to order)
- Update some CSS, JS

## Technologies/Libraries using
- Javascript
- VueJS 2.x
- Webpack
- JQuery/JQuery UI
- Bootstrap 4
- ...

**Note**: From the version **1.2.0** to above, I don't import bootstrap 4 stylesheet into the bundle, you should include your own bootstrap 4 stylesheet in order
to get both of GUI & Template working normally.

## Form Builder Structure
- Template: is where you can config/create/edit your own form.
![template_config](https://i.imgur.com/Z0jP3sl.gif)

- GUI: is where the form will be built by your configuration.
![gui_config](https://i.imgur.com/0GbXcec.gif)

For more information please visit this Repo's wiki, thanks :D!

## How to install?
Run this command to install:
```php
npm i v-form-builder --save
```

NPMJS: [https://www.npmjs.com/package/v-form-builder](https://www.npmjs.com/package/v-form-builder)

**Notes:** 
- For the best experience, please install the latest version!
- Please don't install the old version below **v1.1.1**. Thank you!

## How to implement?

### Import into your project
1/ Import as global component
```javascript
import FormBuilder from 'v-form-builder';
Vue.component('FormBuilder', FormBuilder);
```

2/ Import as single component
```javascript
import FormBuilder from 'v-form-builder';

export default {
    components: {FormBuilder}
    ...
}
```

**Note:** you should have your own Bootstrap 4 stylesheet imported inside your project in order to use the Form Builder normally.

### Usage
```php
<template>
    <div>
        // form builder template
        <form-builder type="template"></form-builder>
        
        // form builder gui
        <form-builder type="gui" :form="yourConfigFormObject"></form-builder>
    </div>
</template>
```
Binding options:
- type (String):
    - Form Config (Template): **template**
    - Form GUI: **gui**
- form (Object) - for Form GUI Only, where you passing the configuration data and the Form Builder will build the form by your configuration data.

#### V-Model for Form Builder Template
You can use v-model in Form Builder Template, it'll return to you the form configuration data that you're configurated (object) and also render the old configuration and let you edit/update that configuration.
```php
<template>
    <div>
        <form-builder type="template" v-model="formData"></form-builder>
    </div>
</template>
```
The form config data would look like this:
```javascript
{
    sections: [...],
    layout: "...",
    _uniqueId: "..."
}
```

Ideally, you need to convert that Object to JSON string and then save it in your database :D

#### V-Model for Form Builder GUI
You can use V-Model to get/set values from your built form.
```php
<template>
    <div>
        <form-builder type="gui" :form="formData" v-model="formValues"></form-builder>
    </div>
</template>
```
The form values data would look like this:
```javascript
{
    section_key: {
        control_name_1: "data",
        control_name_2: 123,
        ...
    },
    ...
}
```

### APIs
Please visit this Repo's Wiki.

## Release notes
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

## Supporting the project
If you really like this project & want to contribute a little for the development. You can buy me a coffee. Thank you very much for your supporting <3.

<a href="https://www.buymeacoffee.com/xKOM9NB8p" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

Copyright &copy; 2018 by [Seth Phat](http://sethphat.com) aka Phat Tran Minh!
