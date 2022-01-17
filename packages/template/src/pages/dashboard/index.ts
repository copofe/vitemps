import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: 'dashboard',
    name: 'Dashboard',
    component: () => import('./index.vue'),
  },
];

const locale: Locale = {
  en_US: {
    'menu.dashboard': 'Dashboard',
  },
  zh_CN: {
    'menu.dashboard': '仪表盘',
  },
};

export default {
  routes,
  locale,
};
