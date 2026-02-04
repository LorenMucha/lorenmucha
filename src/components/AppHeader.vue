<script>
import CV_DE from 'public/files/CV_DE.pdf'
import CV_EN from 'public/files/CV_EN.pdf'
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
    languageLabel() {
      return this.languages.get === 'de' ? 'Auf Englisch wechseln' : 'Switch to German'
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
          </NuxtLink>
          <div class="hidden items-center gap-4 md:flex">
            <NuxtLink to="/#work" class="text-sm font-semibold text-ink-600 hover:text-ink-900">{{ $t('nav.portfolio') }}</NuxtLink>
            <NuxtLink to="/#expertise" class="text-sm font-semibold text-ink-600 hover:text-ink-900">{{ $t('nav.skills') }}</NuxtLink>
            <NuxtLink to="/#contact" class="text-sm font-semibold text-ink-600 hover:text-ink-900">{{ $t('nav.contact') }}</NuxtLink>
            <a
              :href="cv" target="_blank" rel="noopener noreferrer" class="btn-ghost px-3"
              :aria-label="$t('cv')" :title="$t('cv')"
              @click="open_cv"
            >
              <Icon size="1.25rem" name="mdi:file-document-outline" />
            </a>
            <a
              :href="linkedIn" target="_blank" rel="noopener noreferrer" class="btn-ghost px-3"
              aria-label="LinkedIn" title="LinkedIn"
            >
              <Icon size="1.25rem" name="mdi:linkedin" />
            </a>
            <a
              :href="github" target="_blank" rel="noopener noreferrer" class="btn-ghost px-3"
              aria-label="GitHub" title="GitHub"
            >
              <Icon size="1.25rem" name="mdi:github" />
            </a>
            <a
              :href="freelancerMap" target="_blank" rel="noopener noreferrer" class="btn-ghost px-3"
              aria-label="FreelancerMap" title="FreelancerMap"
            >
              <Icon size="1.25rem" name="mdi:briefcase-outline" />
            </a>
            <button
              type="button" class="btn-ghost px-3"
              :aria-label="languageLabel" :title="languageLabel"
              @click="switch_language"
            >
              <span :class="[flag, 'text-lg rounded-sm shadow-sm']" aria-hidden="true" />
            </button>
          </div>
          <button class="md:hidden" aria-label="Menü öffnen" @click="show_mobile_menu">
            <Icon size="1.5rem" name="mdi:menu" class="text-ink-700" />
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
                :href="cv" target="_blank" rel="noopener noreferrer" class="btn-ghost px-3"
                :aria-label="$t('cv')" :title="$t('cv')"
                @click="open_cv"
              >
                <Icon size="1.25rem" name="mdi:file-document-outline" />
              </a>
              <a
                :href="linkedIn" target="_blank" rel="noopener noreferrer" class="btn-ghost px-3"
                aria-label="LinkedIn" title="LinkedIn"
              >
                <Icon size="1.25rem" name="mdi:linkedin" />
              </a>
              <a
                :href="github" target="_blank" rel="noopener noreferrer" class="btn-ghost px-3"
                aria-label="GitHub" title="GitHub"
              >
                <Icon size="1.25rem" name="mdi:github" />
              </a>
              <a
                :href="freelancerMap" target="_blank" rel="noopener noreferrer" class="btn-ghost px-3"
                aria-label="FreelancerMap" title="FreelancerMap"
              >
                <Icon size="1.25rem" name="mdi:briefcase-outline" />
              </a>
              <button
                type="button" class="btn-ghost px-3"
                :aria-label="languageLabel" :title="languageLabel"
                @click="switch_language"
              >
                <span :class="[flag, 'text-lg rounded-sm shadow-sm']" aria-hidden="true" />
              </button>
            </div>
            <NuxtLink to="/Impressum" class="text-xs font-semibold text-ink-500">Impressum</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
