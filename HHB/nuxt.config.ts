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
})
