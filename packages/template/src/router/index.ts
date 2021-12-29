import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'LayoutDefault',
    component: () => import(/* webpackChunkName: "layout-default" */ '@/layouts/Default.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import(/* webpackChunkName: "index" */ '@/pages/Index.vue'),
      },
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})