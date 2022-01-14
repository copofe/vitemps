import { RouteRecordRaw } from 'vue-router';
import modules from '@/modules';

const children: RouteRecordRaw[] = [];
modules.forEach((module) => {
  children.push(...module.routes);
});

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'LayoutAdmin',
    redirect: '/dashboard',
    component: () => import('@/layouts/Admin.vue'),
    children,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue'),
    meta: {
      auth: 'optional',
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
