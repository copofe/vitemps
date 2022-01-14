import { RouteLocationNormalized, RouteLocationRaw } from 'vue-router';
import { useUserStore } from '@/store';

export function auth(to: RouteLocationNormalized): void | RouteLocationRaw {
  const { token } = useUserStore();
  if (!token && to.meta.auth !== 'optional') {
    return {
      path: '/login',
      query: { redirect: encodeURIComponent(to.fullPath) },
    };
  }
  return undefined;
}
export function permission(): void {
  return undefined;
}
