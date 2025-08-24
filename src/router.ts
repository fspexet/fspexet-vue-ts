import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/components/Main.vue'),
      children: [
        {
          path: '',
          component: () => import('@/components/FrontPage.vue'),
        },
        {
          path: 'tickets',
          component: () => import('@/components/Tickets.vue'),
        },
        {
          path: 'menu',
          component: () => import('@/components/Menu.vue'),
        },
        {
          path: 'about-us',
          component: () => import('@/components/AboutUs.vue'),
          children: [
            {
              path: '',
              component: () => import('@/components/AboutUsDefault.vue'),
            },
            {
              path: 'groups',
              component: () => import('@/components/Groups.vue'),
            },
            {
              path: 'history',
              component: () => import('@/components/History.vue'),
            },
          ],
        },
        {
          path: 'contact',
          component: () => import('@/components/Contact.vue'),
        },
      ],
    },
  ],
});
