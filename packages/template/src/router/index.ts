import { createRouter, createWebHistory } from 'vue-router';
import { auth, permission } from './guards';
import routes from './routes';

routes.push({
  path: '/:pathMatch(.*)*',
  redirect: () => ({ name: '404' }),
});

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

const guards = [auth, permission];
guards.forEach((guard) => {
  router.beforeEach(guard);
});

router.onError((error) => {
  throw new Error(error);
});

export default router;
