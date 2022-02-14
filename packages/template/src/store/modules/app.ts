import { defineStore } from 'pinia';
import proxyStorage from '::/utils/proxy-storage';

interface SystemState {
  locale: string;
}

export default defineStore('system', {
  state: (): SystemState => ({
    locale: proxyStorage.locale || 'zh-CN',
  }),
});
