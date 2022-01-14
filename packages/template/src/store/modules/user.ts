import { defineStore } from 'pinia';
import scopeStorage from '@/utils/storage';

export default defineStore('user', {
  state: (): UserInfo => ({
    id: undefined,
    token: scopeStorage.token || '',
  }),
  getters: {
    isLoggedIn: (state): boolean => !!state.id,
  },
});
