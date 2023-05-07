<template>
  <div>
    <slot />
    <Nuxt />
  </div>
</template>
<script>
export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      }
    }
  },
}
</script>