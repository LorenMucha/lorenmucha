import { defineStore } from 'pinia'

export const useModalStore = defineStore('languages', {
  state: () => ({ language: 'de' }),
  getters: {
    get: (state) => {
      return state.language
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
