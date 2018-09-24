# vue-form-builder
[![npm version](https://badge.fury.io/js/v-form-builder.svg)](https://www.npmjs.com/package/v-form-builder)
[![GitHub license](https://img.shields.io/github/license/sethsandaru/vue-form-builder.svg?style=flat-square)](https://github.com/sethsandaru/vue-form-builder/blob/master/LICENSE)
[![HitCount](http://hits.dwyl.io/sethsandaru/vue-form-builder.svg)](http://hits.dwyl.io/sethsandaru/vue-form-builder)
[![img](https://img.shields.io/badge/documentation-full-green.svg?longCache=true&style=flat-square)](https://github.com/sethsandaru/vue-form-builder/wiki)

A simple form-builder with drag & drop to help you deal your own form. Less code in development and your site will be more generic, configurable.

Advantages:
- Less code in development
- Wide range of APIs
- Easily to maintain, update later
- Easily to config your form (drag & drop, control settings)
- ...

Fully documentation in this Repo's Library. Check it out!

## Technologies/Libraries using
- Javascript
- VueJS
- Webpack
- JQuery
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

### Stable version
- 1.2.0: Second milestone released.
- 1.1.1: First milestone released.

Note: Please don't install the old version below **v1.1.1**. Thank you!

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

Note: you should have your own Bootstrap 4 stylesheet imported inside your project in order to use the Form Builder normally.

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
The data would look like this:
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
The data would look like this:
```javascript
{
    section_key: {
        control_name_1: "",
        control_name_2: "",
        ...
    },
    ...
}
```

### APIs
Please visit this Repo's Wiki.

## Release notes
- Version **1.1.1**:
    - First Release of Vue Form Builder
    - Able to config form & render form by config data.
    - Get/set value for both GUI & Template.
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

## Development milestones
1. First release - **Released**
    - Able to config form (Template)
    - Render form by config data (GUI)
    - Get/set value from GUI
2. Hook will be available for several events. More options for some controls (like select with ajax data source, date format,...) - **Released**
3. Able to validate the form (required mostly), able to style the label (bold, italic, underline and location (top, left)).
4. Support formula to calculate inside the form.
5. Server-side library demo (Laravel).

Copyright &copy; 2018 by [Seth Phat](http://sethphat.com) aka Phat Tran Minh
