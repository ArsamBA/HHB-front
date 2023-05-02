<template>
  <div class="hero-slider-wrapper">
      <!-- <div class="hero-section-wrapper"  @mouseenter="buttonActive()" @mouseleave="buttonDisable()">
      <div class="hero-section-wrapper">
         <div class="hero-section" id="hero-slider">
               <div class="hero-image">
                  <a>
                     <img src="@/static/images/slider/Slider-test2.jpg" alt="hhb-slider"/>
                  </a>
                  <a>
                     <img src="@/static/images/slider/Slider-test3.jpg" alt="hhb-slider"/>
                  </a>
                  <a>
                     <img src="@/static/images/slider/Slider-test1.jpg" alt="hhb-slider"/>
                  </a>
                  <a>
                     <img src="@/static/images/slider/Slider-test2.jpg" alt="hhb-slider"/> 
                  </a>
                  <a>
                     <img src="@/static/images/slider/Slider-test4.jpg" alt="hhb-slider"/> 
                  </a>
                  <a>
                     <img src="@/static/images/slider/Slider-test3.jpg" alt="hhb-slider"/> 
                  </a>
                  <a>
                     <img src="@/static/images/slider/Slider-test1.jpg" alt="hhb-slider"/> 
                  </a>
               </div>
         </div>
         <div @click="sliderOnScrollLeft">
            <button class="left-control-hero">
               <svg fill="#424750" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                  <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
               </svg>
            </button>
         </div>
         <div @click="sliderOnScrollRight">
            <button class="right-control-hero">
               <svg fill="#424750" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                  <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
               </svg>
            </button>
         </div>
      </div> -->
   </div>
</template>

<script>
export default {
   // mounted() {        
   //    this.sliderOnScrollLeft()
   //    setInterval(() => this.sliderOnScrollLeft(), 3000)             
   // },
   // sliderOnScrollLeft() {
   //       this.count++;
   //       let tl = gsap.timeline({});
   //       if(this.count > 6){
   //          tl.to(".hero-image", {x: 0 , duration:1}); 
   //          this.count = 0;   
   //       } else {
   //          tl.to(".hero-image", {x: '+=100%' , duration:1});    
   //       }
   // },  
   // sliderOnScrollRight() {
   //       this.count--;
   //       let tl = gsap.timeline({});
   //       if(this.count < 0){
   //          tl.to(".hero-image", {x: '+=600%' , duration:1}); // in this line, on the x section put (the number of slide * 100)
   //          this.count = 6;   
   //       } else {
   //          tl.to(".hero-image", {x: '-=100%' , duration:1});    
   //       }        
   // },
   // buttonActive(){
   //    document.querySelector('.right-control-hero').style.display = 'initial',
   //    document.querySelector('.left-control-hero').style.display = 'initial'
   // },
   // buttonDisable(){
   //    document.querySelector('.right-control-hero').style.display = 'none',
   //    document.querySelector('.left-control-hero').style.display = 'none'
   // }
   data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
   }
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';
.hero-slider-wrapper {
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   
   @include mq (lg) {
      width: 100%;
      left: 0;    
   }
}
.hero-section{
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: row;
   overflow-x: hidden;
   overflow-y: hidden;

}

.hero-section::-webkit-scrollbar{
   display:none;
}

.hero-image{
   img{
      width: 100%;
      height: 100vh;
      object-fit: cover;
   }
}

.slider-button{
   display: none;
}

.slider-dots{
   position: absolute;
   right: 3px;
   bottom: 15px;
   span{
      background-color: rgb(132, 131, 131);
      width: 5px;
      height: 5px;
      border-radius: 50%;
      display: inline-block;
      margin-right: 10px;
   }
}

@media only screen and (max-width: 992px){

   .hero-section{
      border-radius: 0px;
   }

   .slider-dots{
      display: none;
   }
}

.right-control-hero{
   width: 40px;
   height: 40px;
   background-color: #fff;
   border-radius: 50%;
   cursor: pointer;
   position: absolute;
   right: 2%;
   bottom: 10%;
   display: flex;
   justify-content: center;
   align-items: center;
   border: 1px solid #e0e0e2;
   outline: none;
   z-index: 2222;
   display: none;
}

@media only screen and (max-width: 992px){
   .right-control-hero{
      display: none;
   }
}
@media only screen and (max-width: 768px){
   .right-control-hero{
      display: none;
   }
}
@media only screen and (max-width: 576px){
   .right-control-hero{
      display: none;
   }
}
@media only screen and (max-width: 360px){
   .right-control-hero{
      display: none;
   }
}

.left-control-hero{
   width: 40px;
   height: 40px;
   background-color: #fff;
   border-radius: 50%;
   cursor: pointer;
   position: absolute;
   right: 5%;
   bottom: 10%;
   display: flex;
   justify-content: center;
   align-items: center;
   border: 1px solid #e0e0e2;
   outline: none;
   z-index: 2222;
   display: none;
}

@media only screen and (max-width: 992px){
   .left-control-hero{
      display: none;
   }
}
@media only screen and (max-width: 768px){
   .left-control-hero{
      display: none;
   }
}
@media only screen and (max-width: 576px){
   .left-control-hero{
      display: none;
   }
}
@media only screen and (max-width: 360px){
   .left-control-hero{
      display: none;
   }
}
</style>