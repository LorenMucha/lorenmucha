import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  srcDir: 'src',
  ssr: false,
  routeRules: {
    '/ClimbingDiary': { index: false },
    '/gb/ClimbingDiary': { index: false },
  },
  app: {
    baseURL: '/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    // pinia plugin - https://pinia.esm.dev
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    'nuxt-icon',
    '@nuxt/content',
    'nuxt-swiper',
    'nuxt-simple-sitemap',
  ],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', 'sitemap.xml'],
      ignore: ['/ClimbingDiary'],
    },
  },
  build: {
    transpile: ['swiper'],
  },
  css: ['@/assets/css/main.css'],
  // localization - i18n config
  i18n: {
    locales: [
      {
        code: 'gb',
        file: 'en-GB.json',
      },
      {
        code: 'de',
        file: 'de-DE.json',
      },
    ],
    defaultLocale: 'de',
    lazy: true,
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
    vueI18n: {
      legacy: false,
      locale: 'de',
      fallbackLocale: 'de',
      availableLocales: ['gb', 'de'],
    },
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        types: ['@pinia/nuxt', './type.d.ts'],
      },
    },
  },
  vite: {
    logLevel: 'info',
    plugins: [
      svgLoader({
        defaultImport: 'url',
      }),
    ],
  },
})
