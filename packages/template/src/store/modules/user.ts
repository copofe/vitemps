import { defineStore } from 'pinia'
import { UserInfo } from 'types'

export const useUserStore = defineStore('global', {
  state: (): UserInfo => ({
    id: undefined,
  }),
  getters: {
    isLoggedIn: (state): boolean => !!state.id,
  },
})
