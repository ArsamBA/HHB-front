<template>
   <div class="language-switcher">
      <!-- <nuxt-link :to="switchLocalePath('en')" class="nav-link nav-link-language">EN</nuxt-link>
      <nuxt-link :to="switchLocalePath('fa')" class="nav-link nav-link-language">FA</nuxt-link> -->
   </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';
.language-switcher {
   display: flex;
   border: 1px solid $secondary;
   border-radius: 5px;
   padding: 5px 8px;
   transition: 0.3s all linear;

   @include mq(lg) {
      display: flex;
      flex-direction: column;
      align-items: center;

      .nav-link-language {
         display: block;
         transition: 0.3s all linear;
         margin: 0;
         opacity: 0;
         font-size: 0;
         order: 2;

         &.nuxt-link-active {
            opacity: 1;
            font-size: 18px;
            order: 1;
         }
      }

      &:hover {
            height: auto;

            .nav-link-language {
               margin-top: 0;
               opacity: 1;
               font-size: 18px;
            }   
      }
   }
}
</style>