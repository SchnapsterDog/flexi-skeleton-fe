import Vue from 'vue';
import App from './App.vue';
import '@schnapsterdog/flexi-vue';

import router from './router';
import store from './store';
import './mixins';
import './animation/icons';
import './animation/spinners';
import './directives';

import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;
// ignore ion icons components
Vue.config.ignoredElements = [/^ion-/];

new Vue({
  router,
  store,
  created() {
    AOS.init({
      once: false,
      disable: function () {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
      }
    });
  },
  render: h => h(App)
}).$mount('#app')
