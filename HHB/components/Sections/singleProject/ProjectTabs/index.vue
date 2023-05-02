<template>
   <div class="product-details-wrapper">
         <div class="tabs-wrapper">
            <button :class="[ 'tab' , descriptionTab ? 'active' : '' ]" value="description" @click="descriptionOpenTab">توضیحات</button>
            <button :class="[ 'tab' , specificationsTab ? 'active' : '' ]" value="specifications" @click="specificationsTabOpenTab" >مشخصات</button>
            <button :class="[ 'tab' , galleryTab ? 'active' : '' ]" value="gallery" @click="galleryOpenTab" >گالری</button>
         </div>
         <div class="tab-content-wrapper">
            <div v-if="descriptionTab" class="tab-content description-tab">
               <p v-html="singleProjectData.description"></p>
            </div>

            <div v-if="specificationsTab" class="tab-content specifications-tab">
               <ul>
                  <li>اسم پروژه:<span style="font-weight: bold; margin: 0px 10px;"> {{ singleProjectData.name }} </span></li>
                  <li>موقعیت:<span style="font-weight: bold; margin: 0px 10px;"> {{ singleProjectData.location }} </span></li>
                  <li>کاربری:<span style="font-weight: bold; margin: 0px 10px;"> {{ singleProjectData.user }} </span></li>
                  <li>وضعیت:<span style="font-weight: bold; margin: 0px 10px;"> {{ singleProjectData.status }} </span></li>
                  <li>سال ساخت:<span style="font-weight: bold; margin: 0px 10px;"> {{ singleProjectData.constructionYear }} </span></li>
               </ul>
            </div>

            <div v-if="galleryTab" class="tab-content gallery-tab">
               <figure v-for="image in singleProjectData.tabContent.gallery" :key="image">
                  <img :src="`/_nuxt/static/images/slider/${image_url}`" :alt="singleProjectData.imageAlt" loading="lazy"/>
               </figure>
            </div>

         </div>
   </div>
</template>

<script>
import { useSingleProject } from '~/src/stores/singleProject';
export default ({
   setup () {
      const singleProjectData = useSingleProject()
      return singleProjectData
   },
   data() {
      return {
         descriptionTab: true,
         specificationsTab: false,
         galleryTab: false,
      }
   },
   methods: {
      descriptionOpenTab(){
         this.descriptionTab = true;
         this.specificationsTab = false;
         this.galleryTab = false;        
      },
      specificationsTabOpenTab(){
         this.specificationsTab = true;
         this.descriptionTab = false;
         this.galleryTab = false;      
      },
      galleryOpenTab(){
         this.galleryTab = true;
         this.specificationsTab = false;
         this.descriptionTab = false;        
      },
   },
})
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';
.product-details-wrapper{
   margin-top: 50px;
   @include mq(lg) {
      margin: 50px;
   }
}

.tabs-wrapper {
   display: flex;
}

.tab {
   flex-basis: 50%;
   border: 1px solid $primary;
   background-color: $white;
   padding: 0.5rem 1.5rem;
   display: flex;
   justify-content: center;
   align-items: center;
   border-top-left-radius: 12px;
   border-top-right-radius: 12px;
   font-size: 18px;
   cursor: pointer;

   @include mq(lg) {
      flex-basis: 25%;
      position: relative;
      bottom: -1px;
      padding: 1rem 2rem;
   }

   &.active {
      border-bottom: none;
   }
}
.tab-content-wrapper {
   border: 1px solid $primary;
   border-top: none;
   padding: 2rem 1rem;
   background-color: $white;
   border-bottom-left-radius: 12px;
   border-bottom-right-radius: 12px;

   @include mq(md) {
      padding: 48px;
   }
   @include mq(lg) {
      border-top: 1px solid $primary;
      border-top-left-radius: 12px;
   }
}
.tab-content {

   @include mq(md) {
      font-size: 1rem;
   }

   .description {
      font-size: 16px;
      line-height: 1.9;
      margin-bottom: 50px;

      @include mq(md) {
            font-size: 18px;
      }
   }
}
.feature-item-wrapper {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;

   .feature-item {
      flex-basis: 100%;
      list-style: none;
      margin-bottom: 20px;
      position: relative;
      padding-right: 20px;

      @include mq(md) {
            flex-basis: 48%;
      }

      &:before {
         content: '';
         position: absolute;
         display: block;
         width: 5px;
         height: 5px;
         border-radius: 50%;
         background-color: $primary;
         right: 0;
         top: 10px;
      }
   }
}

.specifications-tab{
   ul {
      list-style-type: none;

      li {
         margin-bottom: 20px;
      }
   }
}

.gallery-tab {
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-between;
   row-gap: 30px;
   column-gap: 30px;

   figure {
      flex-basis: 100%;

      @include mq(md) {
         flex-basis: 47%;
      }
      @include mq(lg) {
         flex-basis: 30%;
      }
      @include mq(xl) {
         flex-basis: 22%;
      }

      img {
         border-radius: 50px;
         cursor: zoom-in;
         
         &:hover {
            transform: scale(2);
            transition: all 0.5s;
         }
      }
   }
}
</style>