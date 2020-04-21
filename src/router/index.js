import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import Terms from '../views/Terms.vue'
import PageNotFound from '../views/PageNotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: PrivacyPolicy
  },
  {
    path: '/terms-conditions',
    name: 'terms',
    component: Terms
  },
  { 
    path: "*", 
    component: PageNotFound
   }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
