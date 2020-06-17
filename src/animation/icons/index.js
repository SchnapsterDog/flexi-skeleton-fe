/*
    If you want to use font-awesome icons:
    1. Import the certain FA Icon 
    2. Add the FA Icon into FA Library
    
    Than easy use them into components like:

    <font-awesome-icon icon="bold" size="2x" />

    Properties description:

    - icon => name of the icon (see more at https://github.com/FortAwesome/vue-fontawesome)
    - size => size of the icon (xl, 1x, 5x ...)
    ...
*/

import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
    faSpinner
    // here you can import font awesome component
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faSpinner
    // add FA icons into library
);

// global register
Vue.component('font-awesome-icon', FontAwesomeIcon);