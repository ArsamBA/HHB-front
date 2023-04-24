<template>
  <div class="projects-section-wrapper">
      <div class="project-content-wrapper" v-for="project in singleProjectData" :key="project.index">
         <div class="project-image">
            <img :src="`/_nuxt/static/images/slider/${singleProjectData.mainImage.image}`" :alt="singleProjectData.tabContent.specifications.name" loading="lazy"/>  
         </div>
         <p>{{ singleProjectData.tabContent.specifications.name }}</p>
      </div>
   </div>
</template>

<script>
import { useSingleProject } from '~/src/stores/singleProject';
export default {
   head() {
      return {
         title: this.title,
         description: this.description 
      }
   },
   setup () {
      const singleProjectData = useSingleProject()
      return singleProjectData
   },
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';
.projects-section-wrapper{
   margin-top: 30px;
   padding: 10px;
   display: flex;
   flex-direction: column;
   row-gap: 30px;
   @include mq (xl) {
      padding: 50px;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;               
   }

   .project-content-wrapper {
      background-color: $primary;
      padding: 20px 20px 10px;
      border-radius: 50px;
      flex-basis: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      
      .project-image{
         background: #fff;
         border-radius: 50px;
      }

      &:hover {
         img {
            opacity: 0.3;
            transition: all 0.5s;
         }
      }

      img {
         border-radius: 50px;
      }

      p {
         margin-top: 10px;
         color: #fff;               
      }

      @include mq (xl) {
         flex-basis: 32%;
      }
   }
}

</style>