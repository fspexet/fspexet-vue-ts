import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  },
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
            {
              path: 'history/:year',
              component: () => import('@/components/ViewOldSpex.vue'),
            },
          ],
        },
        {
          path: 'contact',
          component: () => import('@/components/Contact.vue'),
        },
        {
          path: '*',
          component: () => import('@/components/404.vue'),
        }
      ],
    },
  ],
});
