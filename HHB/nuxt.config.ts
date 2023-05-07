// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   css: [
      //adding the global scss file to nuxt
      '@/assets/scss/global.scss',
      'vuetify/lib/styles/main.sass'
    ],
    modules: [
      // ...
      '@pinia/nuxt',
      [
        '@nuxtjs/i18n',
        {
          vueI18n: './i18n.config.ts'
        }

      ]
    ],
    imports: {
      autoImport: false
    },
    build: {
      transpile: ['vuetify'],
    },
    vite: {
      define: {
        'process.env.DEBUG': false,
      },
    },
    app: {
      head: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
        // htmlAttrs: {
        //   lang: 'en'
        // }
      }
    }
})
