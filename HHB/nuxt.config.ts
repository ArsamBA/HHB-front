// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   css: [
      //adding the global scss file to nuxt
      '@/assets/scss/global.scss',
    ],
    modules: [
      // ...
      '@pinia/nuxt',
    ],
    imports: {
      autoImport: false
    }
})
