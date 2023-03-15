<script>
import { useLanguageStore } from '~/store/languages'

export default {
  name: 'AppHeader',
  setup() {
    const languages = useLanguageStore()
    return { languages }
  },
  data() {
    return {
      isActive: false,
      menuItems: ['expertise', 'contact'],
    }
  },
  computed: {
    flag() {
      return `fi fi-${this.languages.opposite}`
    },
  },
  methods: {
    show_mobile_menu() {
      this.isActive = !this.isActive
    },
    switch_language() {
      this.languages.change()
      this.$i18n.setLocale(this.languages.get)
    },
  },
}
</script>

<template>
  <nav class="bg-white shadow-lg fixed w-screen top-0 z-10">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <div>
            <!-- Website Logo -->
            <a class="flex items-center py-4 px-2">
              <span class="font-semibold md:text-lg text-gray-800 font-bold">Loren Mucha</span>
            </a>
          </div>
          <!-- Primary Navbar items -->
          <div v-for="(item, index) in menuItems" :key="index" class="hidden md:flex items-center space-x-1">
            <a
              :href="`#${item}`"
              class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
            >{{
              $t(`header.${item}`)
            }}</a>
          </div>
        </div>
        <div class="hidden md:flex items-center">
          <button @click="switch_language" @scroll.prevent><span :class="flag" /></button>
        </div> <!-- mobile button goes here -->
        <div class="md:hidden flex items-center">
          <button class="mobile-menu-button focus:outline-none">
            <i class="bx bx-menu text-3xl mt-1" />
          </button>
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button class="outline-none mobile-menu-button" @click="show_mobile_menu">
            <svg
              class=" w-6 h-6 text-gray-500 hover:text-blue-500 " x-show="!showMenu" fill="none"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div :class="[isActive ? 'active' : 'hidden']" class="mobile-menu">
      <ul>
        <li v-for="(item, index) in menuItems" :key="index">
          <a :href="`#${item}`" class="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">
            {{ $t(`header.${item}`) }}
          </a>
        </li>
        <li>
          <a class="block text-sm px-2 py-4" @click="switch_language" @scroll.prevent><span :class="flag" /></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

