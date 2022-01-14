import { defineStore } from 'pinia';
import scopedStorage from '@/utils/storage';

interface SystemState {
  locale: string;
}

export default defineStore('system', {
  state: (): SystemState => ({
    locale: scopedStorage.locale || 'zh-CN',
  }),
});
