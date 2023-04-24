<template>
  <div class="about-us-content-wrapper">
      <div class="about-us-card">
         <p v-html="aboutData.description"></p>
      </div>
   </div>
</template>

<script>
import { useAboutUs } from '~/src/stores/aboutUs';
export default {
  setup () {
    const aboutData = useAboutUs()
    return aboutData
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';

.about-us-content-wrapper{
  width: 100%;
  padding: 30px;
  background-color: $primary;
  display: flex;
  justify-content: center;
  align-items: center;

  @include mq (lg) {
    width: 100%;
    left: 0;    
  }

  p{
    color: #e4e4e4;
    text-align: center;
    line-height: 35px;
    @include mq (lg) {
      width: 100%;
      left: 0;    
      line-height: 35px;
      font-size: 16px;
    }

    @include mq (xl) {   
      line-height: 40px;
      font-size: 18px;
    }

    @include mq (xxl) {   
      // line-height: 50px;
    }
  }
}

.about-us-card{
  @include mq (lg) {    
    border: 1px solid $secondary;
    border-radius: 50px;
    padding: 30px 50px;
  }
  @include mq (xxl) {
    padding: 50px 80px;
  }  
}

</style>