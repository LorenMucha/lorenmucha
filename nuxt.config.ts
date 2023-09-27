import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  srcDir: 'src',
  routeRules: {
    '/ClimbingDiary': { index: false },
    '/gb/ClimbingDiary': { index: false },
  },
  runtimeConfig: {
    public: {
      // Doku: https://github.com/harlan-zw/nuxt-seo-kit
      titleSeparator: '|',
      siteUrl: 'https://www.lorenmucha.de',
      pageTitle: 'Loren Mucha',
      siteDescription: 'Freelancer als Full Stack Entwickler in Nürnberg',
      language: 'en-DE',
    },
  },
  linkChecker: {
    failOn404: true,
  },
  app: {
    baseURL: '/',
    head: {
      title: 'Loren Mucha',
      titleTemplate: '%pageTitle',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'canonical',
          href: 'https://www.lorenmucha.de',
        },
      ],
    },
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    'nuxt-icon',
    '@nuxt/content',
    'nuxt-swiper',
  ],
  extends: [
    'nuxt-seo-kit',
  ],
  nitro: {
    prerender: {
      crawlLinks: false,
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
