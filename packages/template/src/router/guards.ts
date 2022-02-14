import { RouteLocationNormalized, RouteLocationRaw } from 'vue-router';
import { useUserStore } from '::/store';

function auth(to: RouteLocationNormalized): void | RouteLocationRaw {
  const { token } = useUserStore();
  if (!token && to.meta.auth === 'required') {
    return {
      path: '/login',
      query: { redirect: encodeURIComponent(to.fullPath) },
    };
  }
  return undefined;
}

function permission(): void {
  return undefined;
}

export default [auth, permission];
