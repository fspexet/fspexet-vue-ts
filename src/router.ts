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
          path: 'tickets',
          component: () => import('@/components/Tickets.vue'),
        },
        {
          path:'about-us',
          component: () => import('@/components/AboutUs.vue'),
          children: [
              {
                path: '',
                component: () => import('@/components/AboutUsDefault.vue'),
              },
            {
                path:'groups',
                component: () => import('@/components/Groups.vue'),
             },
          ],
        },
        {
          path: 'menu',
          component: () => import('@/components/Menu.vue'),
        },
        {
          path: 'contact',
          component: () => import('@/components/Contact.vue'),
        },

      ],
    },
  ],
});
