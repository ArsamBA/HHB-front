<template>
   <div>
      <div class="about-us-wrapper">
         <Introduction/>
         <div class="about-us-content-wrapper">
            <div class="about-us-card">
               <p><strong>گــــــروه ساختمــــانی H.H.B</strong> تحت مدیریت مهندس حجتی و مهندس بهزادپـور از سال 1386 فعالیت خود را در زمینه ساخت ساختمان های مسکونی، اداری  تجاری و ویلاسازی در تهران و حومه تهران تحت قالــــــب قراردادهـــــــای مدیریت پیمــــــــــــــان و پیمانکـــــــــــــاری آغـــــــــــــــــاز نمود. گروه ساختمانی HHB از سال 1391 اقدام به سرمایه گذاری طراحی و اجرای ساختمان های مسکونی در منطقه 2 تهران نمود و طی سالهای اخیر موفق به ساخت بالغ بر 100 واحـــــــد مسکونـــــــی شـــــــــده اســـــت. این گروه بواسطه همکاری با مهندسین مجرب در حوزه ساختمان در صدد ارتقاء سطح کیفی فضای مسکونی و فراهم ساختن محیطی مناسب سکونت به لحاظ معماری، آسایش و امنیت با بهره گیری از متد های روز صنعت ساختمان می باشد.</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   components: {
      Introduction: () => import('@/components/introduction/index.vue')
   }
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';

.about-us-wrapper{
  width: 100%;

  @include mq (lg) {
    display: flex;
    flex-direction: row;   
    justify-content: space-between;
  }

}

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