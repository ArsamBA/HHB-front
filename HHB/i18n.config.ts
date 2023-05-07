export default defineI18nConfig(nuxt => ({
  vueI18nLoader: true,
  /* module options */
  baseUrl: 'localhost:3000',
  
  // locales: [ 'en', 'fa' ],
  locales: [ 
    { code: 'en', iso: 'en', file: 'en.js', dir: 'ltr' },
    { code: 'fa', iso: 'fa', file: 'fa.js', dir: 'rtl' },
  ],
  defaultLocale: 'fa',
  langDir: "i18n/",
  lazy: 'true',
  detectBrowserLanguage: false,
  strategy: "prefix_except_default",
  vueI18n: {
    fallbackLocale: "fa",
    fallbackRoot: true,
    silentFallbackWarn: true
  }
}))