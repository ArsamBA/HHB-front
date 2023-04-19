<template>
   <div>
      <div class="homepage-wrapper">
         <Introduction/>
         <div class="hero-slider-wrapper">
             <Carousel wrapperClasses="slider" :optionsArray="optionsArray">
                 <CarouselSlide>
                  <div class="hero-slider">
                    <img src="@/static/images/slider/Slider-test1.jpg" alt="hhb-slider" loading="lazy" galleryimg="no"/>
                    <img src="@/static/images/slider/Slider-test2.jpg" alt="hhb-slider" loading="lazy" galleryimg="no"/>
                    <img src="@/static/images/slider/Slider-test3.jpg" alt="hhb-slider" loading="lazy" galleryimg="no"/>
                    <img src="@/static/images/slider/Slider-test4.jpg" alt="hhb-slider" loading="lazy" galleryimg="no"/>     
                  </div>
                 </CarouselSlide>
             </Carousel>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
       components:{
         Introduction: () => import('@/components/introduction/index.vue'),
         Carousel: () => import('@/components/modules/carousel/Carousel.vue'),
         CarouselSlide: () => import('@/components/modules/carousel/CarouselSlide.vue'),

       },
       data() {
           return {
               optionsArray: [
                   {
                       breakpoint: -1,
                       itemsPerSlide: 1,
                       itemsMargin: 0,
                       loop: true,
                       itemsPerStep: 1,
                       arrows: false,
                       dots: true,
                       autoplay: true,
                       autoplayDuration: 8000,
                   },
                   {
                       breakpoint: 1440,
                       itemsPerSlide: 1,
                       itemsMargin: 0,
                       loop: true,
                       itemsPerStep: 1,
                       arrows: false,
                       dots: true,
                       autoplay: true,
                       autoplayDuration: 8000,
                   },
                   {
                       breakpoint: 992,
                       itemsPerSlide: 1,
                       itemsMargin: 0,
                       loop: true,
                       itemsPerStep: 1,
                       arrows: false,
                       dots: true,
                       autoplay: true,
                       autoplayDuration: 8000,
                   },
                   {
                       breakpoint: 768,
                       itemsPerSlide: 1,
                       itemsMargin: 0,
                       loop: true,
                       itemsPerStep: 1,
                       arrows: false,
                       dots: true,
                       autoplay: true,
                       autoplayDuration: 8000,
                   },
                   {
                       breakpoint: 576,
                       itemsPerSlide: 1,
                       itemsMargin: 0,
                       loop: true,
                       itemsPerStep: 1,
                       arrows: false,
                       dots: true,
                       autoplay: true,
                       autoplayDuration: 8000,
                   }
               ],
           }
       },
   }
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';

.hero-slider-wrapper {
  width: 100%;
}

.hero-slider {
 position: relative;
 display: flex;
 align-items: center;
 
 img {
   height: 650px;
   object-fit: cover;

   @include mq (md) {
     height: 650px;                
   }

   @include mq (lg) {
     height: 83vh;                
   }

   @include mq (xxl) {
     height: 90vh;                
   }
 }

 .hero-slider-card-wrapper{
   position: absolute;
   width: 100%;
   padding: 0px 20px;

   @include mq (sm) {
     padding: 40px;
   }
 }

 .hero-slider-card{
   background-color: rgba(217, 217, 217, 0.6);
   width: 100%;
   display: flex;
   padding: 30px 20px;
   flex-direction: column;
   justify-content: center;
   text-align: center;
   border-radius: 5px;

   @include mq (sm) {
     width: 300px;
     padding: 35px;
   }
   
   @include mq (md) {
     width: 350px;
     padding: 30px;
   }

   @include mq (lg) {
     width: 415px;
     padding: 40px;
   }

   @include mq (xxl) {
     width: 450px;
     padding: 45px;
   }

   h1{
     font-size: 24px;

     @include mq (md) {
         font-size: 32px;
     }
 
     @include mq (xl) {
         font-size: 40px;
     }
   }


   p {
     margin: 15px 0;
     font-size: 14px;

     @include mq (md) {
         margin: 20px 0;
         font-size: 16px;
     }

     @include mq (lg) {
         font-size: 18px;
         margin: 30px 0;
     }
   }
 }
}

.slider{
   .carousel-dots-wrapper {
       bottom: 14% !important;
       left: 1%;
       direction: ltr;

   }

   .carousel-dot {
       background-color: $secondary !important;

       &.active {
           background-color: $primary !important;
       }
   }

}
</style>