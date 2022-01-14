import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: 'dashboard',
    name: 'Dashboard',
    component: () => import('./Index.vue'),
  },
];

const locale: Locale = {
  en: {
    'menu.dashboard': 'Dashboard',
  },
  zh: {
    'menu.dashboard': '仪表盘',
  },
};

export default {
  routes,
  locale,
};
