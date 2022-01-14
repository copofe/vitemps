import { createApp } from 'vue';
import store from './store';
import App from './App.vue';
import router from './router';
import i18n from './locale';
import './mock';

import 'uno.css';
import '@unocss/reset/tailwind.css';

createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .mount('#app');
