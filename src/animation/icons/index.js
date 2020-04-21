import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faBold,
    faItalic,
    faStrikethrough,
    faUnderline,
    faParagraph,
    faQuoteLeft,
    faUndo,
    faRedo
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faBold,
    faItalic,
    faStrikethrough,
    faUnderline,
    faParagraph,
    faQuoteLeft,
    faUndo,
    faRedo
);

Vue.component('font-awesome-icon', FontAwesomeIcon);