import { defineStore } from 'pinia'

export const useModalStore = defineStore('modals', {
  state: () => ({ shown: false }),
  getters: {
    get: (state) => {
      return state.shown
    },
    opposite: (state) => {
      return state.shown === 'de' ? 'gb' : 'de'
    },
  },
  actions: {
    change() {
      this.language = this.opposite
    },
  },
})
