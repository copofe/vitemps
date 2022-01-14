import { createPinia } from 'pinia';
import { subscribe } from './plugins';

import useUserStore from './modules/user';
import useAppStore from './modules/app';

const pinia = createPinia();
pinia.use(subscribe);

export default pinia;

export {
  useUserStore,
  useAppStore,
};
