import { defineStore } from 'pinia'

export const useModalStore = defineStore('modals', {
  state: () => ({ shown: false }),
  getters: {
    get: (state) => {
      return state.s
    },
    opposite: (state) => {
      return state.language === 'de' ? 'gb' : 'de'
    },
  },
  actions: {
    change() {
      this.language = this.opposite
    },
  },
})
