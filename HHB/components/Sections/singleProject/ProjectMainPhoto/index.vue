<template>
   <div class="projects-main-photo-wrapper">
      <div class="projects-main-photo">
         <img :src="`/_nuxt/static/images/slider/${singleProjectData.image_url}`" :alt="singleProjectData.imageAlt" loading="lazy"/>  
      </div>
      <div class="tap-to-down-button" @click="goDown">
         <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M16.361,18h-3.361V1c0-.552-.447-1-1-1s-1,.448-1,1V18h-3.361c-.695,0-1.044,.852-.552,1.35l4.361,4.418c.305,.309,.799,.309,1.104,0l4.361-4.418c.492-.498,.143-1.35-.552-1.35Z"/></svg>
      </div>
   </div>  
</template>

<script>
import { useSingleProject } from '~/src/stores/singleProject';
export default {
   setup () {
      const singleProjectData = useSingleProject()
      return singleProjectData
   },
   methods:{
      goDown() {
         const tabs = document.querySelector(".product-details-wrapper");
         tabs.scrollIntoView();
      }
   },
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';
.projects-main-photo-wrapper {
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;

   @include mq (lg) {
      width: 100%;
      left: 0;    
   }

   .projects-main-photo {
      width: inherit;
      height: inherit;

      img {
         height: 100%;
         object-fit: cover;
      }
   }

   .tap-to-down-button{
      position: absolute;
      bottom: 20px;
      cursor: pointer;
      animation: arrow 1.5s infinite;
      
      @keyframes arrow {
         0%   {bottom: 0px;}
         50%  {bottom: 20px;}
         100% {bottom: 0px;}
      }

      svg {
         width: 50px;
         height: 50px;
         fill: aliceblue;
      }

      &:hover {
         svg {
            fill: $secondary;
         }
      }

   }
}

</style>