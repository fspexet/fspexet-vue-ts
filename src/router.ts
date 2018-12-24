import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main,
      children: [
        {
          path: 'biljetter',
          component: () => import('@/components/HelloWorld.vue'),
        },
      ],
    },
  ],
});
