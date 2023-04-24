<template>
   <div class="language-switcher-button">
      <div class="language-switcher">
         <!-- <nuxt-link :to="switchLocalePath('en')" class="nav-link nav-link-language">EN</nuxt-link>
         <span class="separate-line"></span>
         <nuxt-link :to="switchLocalePath('fa')" class="nav-link nav-link-language">FA</nuxt-link> -->
         <nuxt-link class="nav-link nav-link-language">EN</nuxt-link>
         <span class="separate-line"></span>
         <nuxt-link class="nav-link nav-link-language">FA</nuxt-link>
      </div>
   </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';
.language-switcher-button{
   width: 70px;
   height: 30px;
   border: 2px solid $secondary;
   padding: 5px;
   
   .language-switcher{
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      color: $secondary;
      font-weight: bold;
   }

}

.separate-line{
   width: 2px;
   height: 29px;
   border-left: 2px solid $secondary;
   position: absolute;
   bottom: 2px;
   right: 50%;
}
</style>