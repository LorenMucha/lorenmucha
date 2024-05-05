<script>
import CV_DE from 'public/files/CV_DE.pdf'
import CV_EN from 'public/files/CV_EN.pdf'
import freelancer from 'public/images/freelancermap.png'
import { useLanguageStore } from '~/store/languages'

export default {
  name: 'AppHeader',
  setup() {
    const languages = useLanguageStore()
    return { languages }
  },
  data() {
    return {
      freelanceMapLogo: freelancer,
      isActive: false,
      cv: CV_DE,
      linkedIn: process.env.LINKEDIN,
      github: process.env.GITHUB,
      freelancerMap: process.env.FREELANCERMAP,
    }
  },
  computed: {
    flag() {
      return `fi fi-${this.languages.opposite}`
    },
  },
  methods: {
    open_cv() {
      const currentLang = this.$i18n.locale
      this.cv = currentLang === 'de' ? CV_DE : CV_EN
    },
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
  <nav class="bg-white shadow-lg fixed w-screen top-0 z-10 px-10">
    <div class="">
      <div class="flex justify-between">
        <div class="inline-flex justify-center md:p-4 mb-1 mt-1 md:mt-0 md:mb-0">
          <NuxtLink to="/">
            <!-- Website Logo -->
            <a>
              <span class="font-semibold md:text-lg text-blue-700">Mucha</span>
            </a>
            <Icon name="uil:square" class="flex items-center rotate-45 text-gray-500 mr-1 ml-1 md:mr-2 md:ml-2 mt-1" />
            <span class="md:text-lg text-gray-500 font-semibold">Software Engineering</span>
          </NuxtLink>
        </div>
        <div class="flex">
          <!-- Primary Navbar items -->
          <div class="hidden md:flex items-center">
            <div class="hidden md:flex items-center">
              <a
                :href="linkedIn" target="_blank"
                class="py-2 px-2 text-gray-500 font-semibold hover:animate-pulse transition duration-300"
              ><Icon size="1.5rem" name="skill-icons:linkedin" /></a>
            </div>
            <div class="hidden md:flex items-center">
              <a
                :href="github" target="_blank"
                class="px-2 py-2 text-gray-500 font-semibold hover:animate-pulse transition duration-300"
              >
                <Icon size="1.5rem" name="mdi:github" />
              </a>
            </div>
            <a
              :href="cv"
              target="_blank" class="py-2 px-2 text-gray-500 font-semibold hover:animate-pulse transition duration-300"
              @click="open_cv"
            >
              <Icon size="1.5rem" name="academicons:cv-square" />
            </a>
          </div>
          <div class="hidden md:flex items-center">
            <a :href="freelancerMap" target="_blank" class="pr-2 hover:animate-pulse transition duration-300">
              <img :src="freelanceMapLogo" alt="Freelancer Map Logo" class="object-cover object-center h-6 w-20">
            </a>
          </div>
          <div class="hidden md:flex items-center text-sm text-gray-500 font-semibold">
            <NuxtLink to="/Impressum" class="pr-2">
              Impressum
            </NuxtLink>
          </div>
          <!--  <div class="hidden md:flex items-center">
            <button @click="switch_language" @scroll.prevent>
              <span :class="flag" />
            </button>
          </div>
        </div> -->
          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button class="mobile-menu-button focus:outline-none">
              <i class="bx bx-menu text-3xl mt-1" />
            </button>
          </div>
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
      <div :class="[isActive ? 'active' : 'hidden']" class="mobile-menu">
        <hr class="m-2"/>
        <ul class="space-y-2">
          <li>
            <!-- <a class="block text-sm px-2 py-4" @click="switch_language" @scroll.prevent><span :class="flag" /></a> -->
            <a
              :href="linkedIn" target="_blank"
              class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
            ><Icon size="1.5rem" name="skill-icons:linkedin" /></a>
          </li>
          <li>
            <a
              :href="github" target="_blank"
              class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
            >
              <Icon size="1.5rem" name="mdi:github" />
            </a>
          </li>
          <li>
            <a
              :href="cv"
              target="_blank" class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              @click="open_cv"
            >
              <Icon size="1.5rem" name="academicons:cv-square" />
            </a>
          </li>
          <li class="ml-1">
            <a :href="freelancerMap" target="_blank" >
              <img :src="freelanceMapLogo" alt="Freelancer Map Logo" class="object-cover object-left h-6 w-20">
            </a>
          </li>
          <li class="pb-2">
            <NuxtLink to="/Impressum" class="py-4 px-2">
              Impressum
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
