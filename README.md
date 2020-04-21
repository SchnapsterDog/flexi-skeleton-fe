# Flexi CV - Vue Js Landing Page with pure custom CSS

Vue applicaiton (Landing Page) that have the following features: A menu with at least the following items:

- About
- CV (Resume)
- Projects: Items have a submenu with at least two project pages
- Contact

## Demo

Live Demo is uploaded on my server. Check this out:

https://olivertrajceski.com

## Requirements

- App pull data from a API Data Source -- either static file (i.e. JSON Placeholder) or a API Data source (See Configration section below)
- App render the data and bind into Vue Components
- App contains various Custom Reusable Vue Components like TopCard, Navigation, Widgets, Section, Footer, ScrollLink
- App contains separate optimizied scss files. Design was made with flexbox using BEM Methodology
- App is Mobile Friendly and completely Responsive. Media Mixin File are responsible for it. It works pretty well on Chrome, Mozila, Edge, Firefox, Internet Explorer, Safari and Samsung Galaxy S5, Iphone 6-7-8-9-X, Pixel, Nexus, LG as well. 
- App use Vuex Store. Files are separated in order to have clean and readable code

## Project setup

- git clone https://github.com/SchnapsterDog/flexi-cv.git
- npm install (install app localy)
- npm run serve (compiles and hot-reloads for developmenet)
- npm run build (compiles and minified for production environment)
- npm run test (run your tests)
- npm run test:unit (test the units)
- npm run lint (lints and fixed files)

### Configuration:

Inside .env file set VUE_APP_API_CLIENT to ‘local’ in order to fetch local data from json file. (Default)

Dont modify vue.config.json file. In this place we are giving application a permission to make a real or fake api call (Fetch data from static json file stored in src/static/data/items.json)

### Application Structure

```
src
├── assets
│   ├── img
│   |   ├── ab.jpg
|   |   ├── about_grey.jpg
|   |   └── parallax.jpg
|   |
|   └──scss
|       ├── application.scss
|       └── parts
|              ├── _buttons.scss
|              ├── _colors.scss
|              ├── _font.scss
|              ├── _footer.scss
|              ├── _layout.scss
|              ├── _media-mixins.scss
|              ├── _navigation.scss
|              ├── _section.scss
|              ├── _topcard.scss
|              └── _variables.scss
|
├── components
│   └── reusable
|           ├── FlexiButton.vue
│           ├── FlexiCard.vue
│           ├── FlexiContentLine.vue
|           ├── FlexiFooter.vue
|           ├── FlexiNav.vue
│           ├── FlexiScrollLink.vue
|           ├── FlexiSection.vue
|           ├── FlexiTimeline.vue
|           ├── FlexiTopcard.vue
|           └── FlexiWidget.vue
|
├── router
|   └── index.js
|
├── services
|   ├── local
|   |   └── index.js
|   |
|   └── server
|       └── index.js
|  
├── static
|   ├── constants
|   |   └── routes.js
|   |
|   └── data
|       └── items.json
|
├── store
│   ├── actions.js
│   ├── getters.js
|   ├── helpers.js
│   ├── index.js
│   ├── mutations.js
│   └── state.js
│ 
├── views
│   └── Home.vue
|
├── App.vue
└── main.js
```

### Structure Described:

1. Assets folder contains two subfolders: img and scss. Scss folder contains separate scss files which are unify in application.scss file injected into APP.vue 
```
──assets
   ├── img
   |   ├── ab.jpg
   |   ├── about_grey.jpg
   |   └── parallax.jpg
   |
   └──scss
       ├── application.scss
       └── parts
              ├── _buttons.scss
              ├── _colors.scss
              ├── _font.scss
              ├── _footer.scss
              ├── _layout.scss
              ├── _media-mixins.scss
              ├── _navigation.scss
              ├── _section.scss
              ├── _topcard.scss
              └── _variables.scss
```

2. Components folder contains reusable custom made Vue.js components, designed to be extendable using slots or passing data to them through created props. 

```
──components
   └── reusable
           ├── FlexiButton.vue
           ├── FlexiCard.vue
           ├── FlexiContentLine.vue
           ├── FlexiFooter.vue
           ├── FlexiNav.vue
           ├── FlexiScrollLink.vue
           ├── FlexiSection.vue
           ├── FlexiTimeline.vue
           ├── FlexiTopcard.vue
           └── FlexiWidget.vue
```


3. Router folder - Responsible for APP routes. Imported in main.js file.
```
──routes
   └── index.js
```

4. Services folder contains local and server subfolders, which are responsible for the API calls. Depend on the .env setting (local or server), we can easy use fake or real API call. By defult, Application fetch data from local storage. 

```
── services
   ├── local
   │   └── index.js
   └── server
       └── index.js
```

5. Static folder contains two subfolders: constants and data. In static subfolder, there is items.json, which represents mock-up data needed for our fake API call.

```
── static
   ├── constants
   │   └── routes.js
   └── data 
       └── items.json
```

6. Store folder contains six files, that together create powerful Vuex store. Main point is index.js, where actions, muttations, getters, state are imported.

```
──store
   ├── actions.js
   ├── getters.js
   ├── helpers.js
   ├── index.js
   ├── mutations.js
   └── state.js
```

7. Views folder contains Home.vue which runs inside <router-view />

8. App.vue component is the core component, which contains the entire skeleton of the application.

```html
<div id="app">
  <router-view/>
  <flexi-footer :inputData="inputData.social" />
</div>
```

9. Main.js file is the enter point of the application. Inside we init the Vue instance, import router and vuex store, and render the entire application through App.vue component.

```js
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```
### BEM Methodology

- SCSS Files are structured using BEM Methodolgy. They could be easy override if needed. 

```css
.nav {
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 9999;

  &__container {
      ...
  }
```
### Media Mixins

- If we need to customize or optimize our app to be mobile responsive, we can simple use:

```css
@include for-mobile {
    //some code for mobie devices
}

@include for-tablet {
    //code
}
```

### Components Described @TODO

I FlexiSection 

- :inputData=“inputData“

```html
<div v-show="inputData.contentLine" class="section__line">
  <slot name="content-line">
    <flexi-content-line :text="inputData.contentLine" />
  </slot>
</div>
<div v-show="inputData.widgets" class="section__widget">
  <slot name="widgets">
    <flexi-widget v-for="(widget, key) in inputData.widgets" :key="key" :widget="widget" />
  </slot>
</div>
}
```
