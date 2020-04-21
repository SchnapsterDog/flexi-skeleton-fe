import Vue from 'vue';
import App from './App.vue';
import '@schnapsterdog/flexi-vue';

import router from './router';
import store from './store';
import './mixins';
import './animation/icons';
import './animation/spinners';
import './directives';

Vue.config.productionTip = false;
// ignore ion icons components
Vue.config.ignoredElements = [/^ion-/];

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
