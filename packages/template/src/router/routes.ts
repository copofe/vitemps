import { RouteRecordRaw } from 'vue-router';
import modules from '@/modules';

const pages: RouteRecordRaw[] = [];
modules.forEach((module) => {
  pages.push(...module.routes);
});

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'LayoutAdmin',
    redirect: '/dashboard',
    component: () => import('@/layouts/admin.vue'),
    children: pages,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login.vue'),
    meta: {
      auth: 'none',
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/pages/404.vue'),
    meta: {
      auth: 'optional',
    },
  },
];

export default routes;
