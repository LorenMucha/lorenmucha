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
  <nav class="fixed top-0 z-50 w-full">
    <div class="mx-auto max-w-6xl px-6">
      <div class="surface mt-4 rounded-[28px] border border-white/80 px-6 py-3">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="flex items-center gap-3">
            <span class="font-display text-lg font-semibold text-ink-900">Loren Mucha</span>
            <span class="hidden text-sm font-semibold text-ink-500 md:inline">{{ $t('nav.tagline') }}</span>
          </NuxtLink>
          <div class="hidden items-center gap-6 md:flex">
            <NuxtLink to="/#work" class="text-sm font-semibold text-ink-600 hover:text-ink-900">{{ $t('nav.portfolio') }}</NuxtLink>
            <NuxtLink to="/#expertise" class="text-sm font-semibold text-ink-600 hover:text-ink-900">{{ $t('nav.skills') }}</NuxtLink>
            <NuxtLink to="/#contact" class="text-sm font-semibold text-ink-600 hover:text-ink-900">{{ $t('nav.contact') }}</NuxtLink>
            <a
              :href="cv" target="_blank" class="btn-ghost"
              @click="open_cv"
            >
              <Icon size="1.2rem" name="academicons:cv-square" />
              CV
            </a>
            <a
              :href="linkedIn" target="_blank" class="text-ink-500 hover:text-ink-900"
            >
              <Icon size="1.5rem" name="skill-icons:linkedin" />
            </a>
            <a
              :href="github" target="_blank" class="text-ink-500 hover:text-ink-900"
            >
              <Icon size="1.4rem" name="mdi:github" />
            </a>
            <a
              :href="freelancerMap" target="_blank" class="hidden lg:flex items-center"
            >
              <img :src="freelanceMapLogo" alt="Freelancer Map Logo" class="h-5 w-20 object-contain">
            </a>
            <NuxtLink to="/#contact" class="btn-primary">
              {{ $t('nav.request') }}
              <Icon name="material-symbols:arrow-forward" />
            </NuxtLink>
          </div>
          <button class="md:hidden" aria-label="Menü öffnen" @click="show_mobile_menu">
            <Icon size="1.6rem" name="material-symbols:menu-rounded" class="text-ink-700" />
          </button>
        </div>
      </div>
      <div v-if="isActive" class="md:hidden">
        <div class="surface mt-3 rounded-3xl p-5">
          <div class="flex flex-col gap-4">
            <NuxtLink to="/#work" class="text-sm font-semibold text-ink-600" @click="show_mobile_menu">{{ $t('nav.portfolio') }}</NuxtLink>
            <NuxtLink to="/#expertise" class="text-sm font-semibold text-ink-600" @click="show_mobile_menu">{{ $t('nav.skills') }}</NuxtLink>
            <NuxtLink to="/#contact" class="text-sm font-semibold text-ink-600" @click="show_mobile_menu">{{ $t('nav.contact') }}</NuxtLink>
            <div class="flex flex-wrap items-center gap-3">
              <a
                :href="cv" target="_blank" class="btn-ghost"
                @click="open_cv"
              >
                <Icon size="1.2rem" name="academicons:cv-square" />
                CV
              </a>
              <a :href="linkedIn" target="_blank" class="btn-ghost">
                <Icon size="1.2rem" name="skill-icons:linkedin" />
                LinkedIn
              </a>
              <a :href="github" target="_blank" class="btn-ghost">
                <Icon size="1.2rem" name="mdi:github" />
                GitHub
              </a>
              <a :href="freelancerMap" target="_blank" class="btn-ghost">
                Freelancer Map
              </a>
            </div>
            <NuxtLink to="/#contact" class="btn-primary" @click="show_mobile_menu">
              {{ $t('nav.request') }}
              <Icon name="material-symbols:arrow-forward" />
            </NuxtLink>
            <NuxtLink to="/Impressum" class="text-xs font-semibold text-ink-500">Impressum</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
