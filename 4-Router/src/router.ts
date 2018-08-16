import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

const NotFound = () => import('./views/NotFound.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '*',
      name: '404',
      component: NotFound,
    },
  ],
});
