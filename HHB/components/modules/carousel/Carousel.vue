<template>
  <div :class="['carousel', wrapperClasses ? wrapperClasses : '']" ref="carousel">
    <div class="slider-wrapper">
      <div class="inner" ref="inner">
        <slot></slot>
      </div>
    </div>
    <div class="carousel-nav" v-if="allowArrow">
      <button class="prev" @click="movePrev()">prev</button>
      <button class="next" @click="moveNext()">next</button>
    </div>
    <div class="carousel-dots-wrapper" ref="dotsWrapper" v-if="allowDots">
      <button v-for='index in this.numberOfDots' :key='index' :class="[ 'carousel-dot', `step-${index}` ]" :step="index" @click='goToStep(index)'></button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Carousel",
    props: {
      wrapperClasses: String,
      optionsArray: Array,
    },
    
    data() {
      return {
        carouselCreated: false,
        windowWidth: 0,
        optionsObject: {},
        innerWidth: 0,
        slideWidth: 0,
        stepSize: 0,
        currentStep: 0,
        innerPosition: 0,
        numberOfDots: 0,
        allowArrow: false,
        allowDots: false,
      }
    },

    methods: {
      calculateInnerPosition( decrease ) {
        if ( decrease ) {
          if ( this.optionsObject.loop && this.innerPosition <= 0 ) {
            this.innerPosition = this.innerWidth - ( this.stepSize * this.optionsObject.itemsPerSlide );  
          } else if ( this.innerPosition > 0 ){
            this.innerPosition -= this.stepSize;
          }
        } else {
          if ( this.optionsObject.loop && this.innerPosition >= ( this.innerWidth - ( this.stepSize * this.optionsObject.itemsPerSlide ) ) ) {
            this.innerPosition = 0;  
          } else if ( this.innerPosition < ( this.innerWidth - ( this.stepSize * this.optionsObject.itemsPerSlide ) ) ) {
            this.innerPosition += this.stepSize;
          }
        }
      },

      findOptionsFromArray ( windowWidth , optionsArray ) {
        let chosenOption;
        let validBreakpointsArray = []
        let choseonBreakpoint;
        for( let i = 0; i < optionsArray.length; i++ ){
          validBreakpointsArray.push( optionsArray[i].breakpoint )
        }
        if ( windowWidth >= 1440 ) {
          choseonBreakpoint = validBreakpointsArray.includes( -1 ) ? -1 : Math.max( ...validBreakpointsArray );
        }
        else {
          if ( validBreakpointsArray.some(breakpoint => breakpoint > windowWidth ) ) {
            choseonBreakpoint = Math.min( ...validBreakpointsArray.filter( breakpoint => breakpoint > windowWidth ) )
          } else {
            choseonBreakpoint = Math.max( ...validBreakpointsArray )
          }
        }
        chosenOption = optionsArray.filter( options => options.breakpoint === choseonBreakpoint );
        return chosenOption[0];
      },

      moveNext() {
        this.calculateInnerPosition( false );
        this.$refs.inner.style.cssText = `transform: translateX(${ this.innerPosition }px)`;
        this.findandActivateCurrentStep()
      },

      movePrev() {
        this.calculateInnerPosition( true );
        this.$refs.inner.style.cssText = `transform: translateX(${ this.innerPosition }px)`;
        this.findandActivateCurrentStep()
      },

      goToStep( step ) {
        this.innerPosition = this.stepSize * ( step - 1 );
        this.$refs.inner.style.cssText = `transform: translateX(${ this.innerPosition }px)`;
        this.findandActivateCurrentStep()  
      },

      findandActivateCurrentStep() {
        if (this.optionsObject.dots) {
          this.currentStep = this.innerPosition / this.stepSize + 1;
          const dotButtons = document.querySelectorAll( `.carousel.${ this.wrapperClasses } .carousel-dot` );
          dotButtons.forEach(dot => dot.classList.remove( "active" ))
          document.querySelector( `.carousel.${ this.wrapperClasses } .carousel-dot[step="${ this.currentStep }"]` ).classList.add( "active" );
        }
      }
    },

    mounted() {
      // get windows width
      this.windowWidth = window.innerWidth;

      // find carousel Options for window size 
      this.optionsObject = this.findOptionsFromArray( this.windowWidth, this.optionsArray )

      // variables
      const carouselSelector = this.$refs.carousel;
      const carouselStyles = window.getComputedStyle( carouselSelector );
      const innerSelector = this.$refs.inner;
      const dotsWrapper = this.$refs.dotsWrapper
      const slidesSelector = document.querySelectorAll( `.carousel.${ this.wrapperClasses } .slides` );
      const carouselWidth = carouselSelector.clientWidth - parseFloat( carouselStyles.paddingLeft ) - parseFloat( carouselStyles.paddingRight );

      // calculated variables
      this.slideWidth = ( carouselWidth / this.optionsObject.itemsPerSlide );
      const itemsWidth = this.slideWidth - ( this.optionsObject.itemsMargin * 2 );
      this.stepSize = this.slideWidth * this.optionsObject.itemsPerStep;
      this.numberOfDots = Math.ceil( ( slidesSelector.length - this.optionsObject.itemsPerSlide ) / this.optionsObject.itemsPerStep) + 1;

      // define that arrows are allowed or not
      this.numberOfDots > 1 && this.optionsObject.arrows ? this.allowArrow = true : this.allowArrow = false
      // define that dots are allowed or not
      this.numberOfDots > 1 && this.optionsObject.dots ? this.allowDots = true : this.allowDots = false
      // add width and margin for slides
      for (let i = 0; i < slidesSelector.length; i++) {
        slidesSelector[i].style.cssText = `margin-left:${ this.optionsObject.itemsMargin }px;margin-right:${ this.optionsObject.itemsMargin }px;width:${ itemsWidth }px !important;`;
      }
      // set variables after adding slides width and margins
      this.innerWidth = innerSelector.offsetWidth;


      // autoplay
      if (this.optionsObject.autoplay) {
        setInterval( 
          this.moveNext
          , this.optionsObject.autoplayDuration);
          console.log("🚀 ~ file: Carousel.vue ~ line 146 ~ mounted ~ this.optionsObject.autoplayDuration", this.optionsObject.autoplayDuration)
      }

      // console.log( this.wrapperClasses, 'is dots allowed?', this.allowDots )
      // console.log( this.wrapperClasses, 'is arrow allowed?', this.allowArrow )
      // console.log( this.wrapperClasses, 'numberOfDots', this.numberOfDots );
      // console.log( this.wrapperClasses, 'optionsObject', this.optionsObject )
      // console.log( this.wrapperClasses, 'carouselWidth', carouselWidth )
      // console.log( this.wrapperClasses, "inner width =" + this.innerWidth );
      // console.log( this.wrapperClasses, 'item width', itemsWidth );
      // console.log( this.wrapperClasses, 'window width', this.windowWidth );
      // console.log( this.wrapperClasses, 'number of slides', slidesSelector.length )

      // lazyload
      this.carouselCreated = true;
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/helpers/variables';

  .carousel {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 3rem;

    &.product-gallery-carousel {
      padding-bottom: 3rem;

      @include mq(lg) {
        padding-bottom: 0;
      }
    }
  }
  .slider-wrapper {
    width: 100%;
    overflow: hidden;
  }

  .inner {
    display: inline-flex;
    align-items: baseline;
    // min-width: 100%;
    transition: 0.3s all ease;

    .product-gallery-carousel & {
      align-items: center;
    }
  }

  .carousel-nav {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 105%;
    &:lang(fa){
      direction: ltr;
    }

    .product-gallery-carousel & {
      @include mq(md){

        @include mq-max(lg) {
          width: 30%;
          bottom: 10px;
        }
      }
    }

    button {
      background-color: unset;
      background-size: contain;
      background-repeat: no-repeat;
      width: 30px;
      height: 30px;
      border: none;
      font-size: 0;
      cursor: pointer;
      @include mq(md) {
        width: 35px;
        height: 35px;
      }
      @include mq(lg){
        width: 40px;
        height: 40px;
      }
      &.next {
        @include icon("chevron-right");
      }
      &.prev {
        @include icon("chevron-left");
      }
    }
  }
  .carousel-dots-wrapper {
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .carousel-dot {
    padding: 0;
    width: 7px;
    height: 7px;
    border-radius: 15px;
    background-color: $gray-300;
    border: none;
    margin: 3px;
    cursor: pointer;
    transition: 0.2s all linear;

    &.active {
      background-color: $secondary;
      width: 20px;
    }
  }
</style>