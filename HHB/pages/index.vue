<template>
   <div>
      <Introduction/>
   </div>
</template>

<script>
export default {
   components: {
      Introduction: () => import('@/components/introduction/index.vue')
   }
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';

</style>