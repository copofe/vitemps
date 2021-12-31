import { defineStore } from 'pinia';
import { UserInfo } from 'types';

export default defineStore('global', {
  state: (): UserInfo => ({
    id: undefined,
  }),
  getters: {
    isLoggedIn: (state): boolean => !!state.id,
  },
});
