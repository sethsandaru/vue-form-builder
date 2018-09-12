# vue-form-builder
A simple form-builder with drag & drop to help you deal your own form. Less code in development and your site will be more generic, configurable.

Advantages:
- Less code in development
- Wide range of APIs
- Easily to maintain, update later
- ...

## Technologies/Libraries using
- Javascript
- VueJS
- Webpack
- JQuery 
- Bootstrap 4
- ...

## How to install?
Run this:
```php
npm i v-form-builder --save
```
## How to implement?
Import as global component
```javascript
Vue.use('form-builder-gui');
Vue.use('form-builder-template');
```

Import in any component
```php
update later...
```

## Structure
- Template: is where you can config/create/edit your own form.
- GUI: is where the form will be built by your configuration.

## Available Controls
- Text input
- Number input
- Date picker
- Time picker
- Select option (Select 2)
- Checkbox

## Development milestones
1. First release - **On-going**
    - Able to config form (Template)
    - Render form by config data (GUI)
    - Get/set value from GUI
2. Hook will be available for several events. More options for some controls (like select with ajax data source, date format,...)
3. Able to validate the form (required mostly). More APIs to deal with the form.
4. Server-side library demo (Laravel).

Copyright &copy; 2018 by [Seth Phat](http://sethphat.com) aka Phat Tran Minh
