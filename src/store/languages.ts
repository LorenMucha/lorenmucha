import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('languages', {
  state: () => ({ language: 'de' }),
  getters: {
    get: (state) => {
      return state.language
    },
    opposite: (state) => {
      return state.language === 'de' ? 'en' : 'de'
    },
  },
  actions: {
    change() {
      this.language = this.opposite
    },
  },
})
