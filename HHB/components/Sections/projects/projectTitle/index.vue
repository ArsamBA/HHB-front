<template>
  <div class="projects-title-wrapper">
      <p>پروژه های <Strong>گــــــروه ساختمــــانی H.H.B </Strong></p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';
.projects-title-wrapper{
   padding: 0px 10px;
   margin-top: 50px;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   p{
      font-size: 20px;
      color: $primary;

      @include mq (sm) {
         font-size: 24px;               
      }

      @include mq (md) {
         font-size: 28px;               
      }

      @include mq (lg) {
         font-size: 32px;               
      }

      @include mq (xl) {
         font-size: 36px;               
      }

      @include mq (xxl) {
         font-size: 40px;              
      }
   }
}

</style>