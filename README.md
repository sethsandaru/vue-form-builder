# vue-form-builder
A simple form-builder with drag & drop to help you deal your own form. Less code in development and your site will be more generic, configurable.

Advantages:
- Less code in development
- Wide range of APIs
- Easily to maintain, update later
- Easily to config your form (drag & drop, control settings)
- ...

## Technologies/Libraries using
- Javascript
- VueJS
- Webpack
- JQuery
- Bootstrap 4
- ...

## Form Builder Structure
- Template: is where you can config/create/edit your own form.
![template_config](https://i.imgur.com/Z0jP3sl.gif)

- GUI: is where the form will be built by your configuration.
![gui_config](https://i.imgur.com/0GbXcec.gif)

For more knowledge please visit this Repo's wiki, thanks :D!

### Available Controls
- Text input
- Number input
- Date picker
- Time picker
- Select option (Select 2)
- Checkbox

### Available layouts
- Collapse
- Tab

### Form types
- Static form
- Dynamic form: help you to a form can be clone-able to multiple lines from your section template.

## How to install?
Run this command to install:
```php
npm i v-form-builder --save
```

NPMJS: [https://www.npmjs.com/package/v-form-builder](https://www.npmjs.com/package/v-form-builder)

Note: the latest version (**1.1.1**) is the only stable version right now. Please don't install the old version. Thank you!

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
        control_1: "",
        control_2: "",
        ...
    },
    ...
}
```

### APIs
To access APIs, you need to set the ref:
```php
//set ref
<form-builder ref="FormBuilder">

// access
this.$refs.FormBuilder.method();
```

#### Avalable API methods
1. `this.$refs.FormBuilder.getValue()`:
    - For Form Builder Template: Get configuration form data.
    - For Form GUI: Get form values in all sections.
2. `this.$refs.FormBuilder.setValues(object value)`
    - For Form Builder Template: Set configuration form data.
    - For Form Builder GUI: Set values into your built form.
3. (Will develop soon in milestone 3) `this.$refs.FormBuilder.validate`: Validate GUI form only.

## Development milestones
1. First release - **Released**
    - Able to config form (Template)
    - Render form by config data (GUI)
    - Get/set value from GUI
2. Hook will be available for several events. More options for some controls (like select with ajax data source, date format,...)
3. Able to validate the form (required mostly). More APIs to deal with the form.
4. Server-side library demo (Laravel).

Copyright &copy; 2018 by [Seth Phat](http://sethphat.com) aka Phat Tran Minh
