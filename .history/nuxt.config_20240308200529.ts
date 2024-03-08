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
      pageTitle: 'Mucha | Software Engineering',
      siteDescription: 'Als erfahrener Softwareentwickler biete ich maßgeschneiderte Lösungen für Ihre technologischen Herausforderungen. Kontaktieren Sie mich heute, um Ihr Projekt zum Erfolg zu führen.',
      language: 'en-DE',
    },
  },
  linkChecker: {
    failOn404: true,
  },
  app: {
    baseURL: '/',
    head: {
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
    'nuxt-calendly',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    'nuxt-icon',
    '@nuxt/content',
    'nuxt-swiper',
    'nuxt-mail',
    
  ],
  extends: [
    'nuxt-seo-kit',
  ],
  mail: {
    message: {
      to: 'info@lorenmucha.de',
    },
    smtp: {
      host: 'smtp.strato.de',
      port: 465,
      auth: {
        user: 'info@lorenmucha.de',
        pass: 'Sloper88?!KieselSloper',
      },
    },
  },
  nitro: {
    prerender: {
      crawlLinks: false,
      ignore: ['/ClimbingDiary'],
    },
  },
  build: {
    transpile: ['swiper'],
  },
  css: ['@/assets/css/main.css', 'vue-final-modal/style.css'],
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
