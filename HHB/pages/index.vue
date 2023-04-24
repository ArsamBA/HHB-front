<template>
   <div>
      <div class="homepage-wrapper">
        <Introduction/>
        <SectionsHomepageSlider/>
      </div>
   </div>
</template>

<script>
export default {
   head() {
      return {
         title: this.title,
         description: this.description 
      }
   }
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';
.homepage-wrapper {
    width: 100%;

    @include mq (lg) {
        display: flex;
        flex-direction: row;   
        justify-content: space-between;
        position: absolute;   
        top: 0;
        bottom: 0;
    }
}
</style>