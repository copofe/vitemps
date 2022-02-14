import { defineStore } from 'pinia';
import proxyStorage from '::/utils/proxy-storage';

export default defineStore('user', {
  state: (): UserInfo => ({
    id: undefined,
    token: proxyStorage.token || '',
  }),
  getters: {
    isLoggedIn: (state): boolean => !!state.id,
  },
});
