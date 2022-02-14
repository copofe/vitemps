import { createApp } from 'vue';
import store from './store';
import App from './App.vue';
import router from './router';
import i18n from './locale';
import config from './config';

import 'uno.css';
import '@unocss/reset/tailwind.css';

const { PROD } = import.meta.env;

if (!PROD && config.mock) {
  import('./mock');
}

async function bootstrap() {
  createApp(App)
    .use(store)
    .use(router)
    .use(i18n)
    .mount('#app');
}

bootstrap();
