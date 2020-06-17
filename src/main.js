import Vue from 'vue';
import App from './App.vue';

// import custom components from flexi-vue framework
import '@schnapsterdog/flexi-vue';

// import router
import router from './router';

// import vueX
import store from './store';

// If we need to use some common stuff through the app, feel free to create files into mixins folder
import './mixins';

// import Font Awesome Icon. Description/Usage given into the file
import './animation/icons';

// Modernistic/Minimalist Epic Spinners. Description/usage given into the file
import './animation/spinners';

// LowerCase, V-tooltip and custom directives. If u want to create new global directive, give it a shot into the file
import './directives';

// Great Animation on Scroll Library. For usage, see into App.vue 
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
