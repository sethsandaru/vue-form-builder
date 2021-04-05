# vue-form-builder
[![npm version](https://badge.fury.io/js/v-form-builder.svg)](https://www.npmjs.com/package/v-form-builder)
[![GitHub license](https://img.shields.io/github/license/sethsandaru/vue-form-builder.svg?style=flat-square)](https://github.com/sethsandaru/vue-form-builder/blob/master/LICENSE) ![img](https://img.shields.io/npm/dm/v-form-builder.svg)
[![img](https://img.shields.io/badge/documentation-full-green.svg?longCache=true&style=flat-square)](https://phattranminh96.gitbook.io/vue-form-builder/)

A simple builder to help you generate a super form for your features/modules/sites,... Easy to use, create, upgrade, maintain,...
Why need to code the form when you can use `Vue-Form-Builder` and render it with some extra steps :D

Advantages:
- Less code in development (No need to do `<form> <div> <input> .... </div> </form>` this by your own)
- Easy to maintain, update your Form in the future.
- Setup your Form with a super friendly UI/UX.
- Extensibility (Your custom control, styling,...)
- Form Validation? I got you fam.
- Included HTML5 structure, no tricks or cheats.
- **NO MORE JQUERY INCLUDED**

Give this repo a ⭐ (star) if you actually like this and might use it for your project :D! Thank you!

Feel free to open an issue if you reach any bugs or issues. Thanks.

[Vue Form Builder Documentation](https://phattranminh96.gitbook.io/vue-form-builder/)

## Demo
- Demo Online: [Vue Form Builder ONLINE](https://vue-form-builder.herokuapp.com/)
- Demo Form (Real Life Example): 
    - [Vue Form Builder Real Life Example](http://vue-form-builder.sethphat.com/)
    - Repo: https://github.com/sethsandaru/demo-vue-form-builder

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

#### jsDelivr

Latest version (@2.1.0)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sethsandaru/vue-form-builder/dist/v-form-builder.min.css"> 
<script src="https://cdn.jsdelivr.net/gh/sethsandaru/vue-form-builder/dist/v-form-builder.umd.min.js"></script>
```

## Installation Note
- For the best experience, please install the latest version!
- Version below **@v2.0.0** has been deprecated. No maintain & fix bugs. Please use 2.0.0 or above.

## Documentation

[Main Documentation of Vue-Form-Builder](https://phattranminh96.gitbook.io/vue-form-builder/)

## How to implement for a beginner?

- [Turning Up The Form](https://phattranminh96.gitbook.io/vue-form-builder/getting-started/turning-up-the-form)
- [Form Builder](https://phattranminh96.gitbook.io/vue-form-builder/getting-started/form-builder-starter)
- [Form Renderer](https://phattranminh96.gitbook.io/vue-form-builder/getting-started/form-renderer-starter)

### Usage / Use-cases

[Some of the use-cases I mentioned](https://phattranminh96.gitbook.io/vue-form-builder/use-cases)

### APIs / Extending / Hard-core stuff

[Visit Documentation](https://phattranminh96.gitbook.io/vue-form-builder/extending/plugin-options)

## Dependencies
I carefully watch the dependencies of the Vue Form Builder, from the version **2.0.0** and above. Here is the list:

- Vue JS (obviously) - But it won't be built together with the final library bundle
- vuedraggable: From `Sortable.JS` which is very lightweight and much lighter than JQuery + JQuery UI
- deep-equal: A simple method to check the Form Configuration
- Datepicker - LitePicker (Super lightweight, ~5KB): https://wakirin.github.io/Litepicker/
- DayJS - Parse/Formatting date (2KB): https://day.js.org/en/

See more at: [package.json](./package.json) and look at the `dependencies`

My truly desire: Fewer dependencies as possible and try minimize the size as much as possible.

## Release notes

### 2.1.0 
- Added Tab Section
- Added Basic Role-based Configuration
- Added `regex` Validation
- Fixed bugs
- Security updated

### 2.0.1
- Added CSS Classes that worked for Material Design (Thanks to @abhimanusharma)
- Fixed bugs
- Security updated

### 2.0.0
- New structural, new behaviour, everything is new.
- Less and less ugly code
- Make the process/development/configuration more simple than previous version.
- **Less dependencies / JQuery totally removed**
    
## License
MIT License

## Developing the Vue Form Builder
For hard-core developers, of course, you can clone this repository and then getting started with these steps:

- `npm install` - obviously
- `npm run serve` - this will run the `main.ts` which is the main web page to see the Vue Form Builder

Then you will know what you can take a look next: configs, components, views,...

## Custom Form Builder

I'm always available for Custom Build based on your needs for the Vue Form Builder. You can contact me via:

- Email: [phattranminh96@gmail.com](mailto:phattranminh96@gmail.com)
- LinkedIn (On my main profile page)

## Supporting the project
You can see the lovely `Sponsor` button on the top. If you want to contribute a little, send me a coffee is good enough.

Also, please show your love by giving this repository a ⭐ (star). That would lighten up my day.

Copyright &copy; 2018 by [Seth Phat](http://sethphat.com) aka Phat Tran!
