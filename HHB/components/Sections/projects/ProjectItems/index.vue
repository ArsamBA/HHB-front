<template>
  <div class="projects-section-wrapper">
      <div class="project-content-wrapper" v-for="(project, index) in projectData" :key="index">
         <div class="project-image-wrapper">
            <img :src="`/_nuxt/static/images/slider/${project.image_url}`" :alt="project.imageAlt" loading="lazy"/>  
            <div class="project-content-on-hover" @mouseover="contentOnHover" v-show="!contentOnHover">
               <ul>
                  <li>اسم پروژه:<span style="font-weight: bold; margin: 0px 10px;"> {{ project.name }} </span></li>
                  <li>موقعیت:<span style="font-weight: bold; margin: 0px 10px;"> {{ project.location }} </span></li>
                  <li>کاربری:<span style="font-weight: bold; margin: 0px 10px;"> {{ project.user }} </span></li>
                  <li>وضعیت:<span style="font-weight: bold; margin: 0px 10px;"> {{ project.status }} </span></li>
                  <li>سال ساخت:<span style="font-weight: bold; margin: 0px 10px;"> {{ project.constructionYear }} </span></li>
               </ul>
            </div>
         </div>
         <p>{{ project.name }}</p>
      </div>
   </div>
</template>

<!-- <script setup>
import { useProject } from '~/src/stores/singleProject';
const projectData = useProject()
console.log(projectData, 'arsam')
</script> -->

<script>
export default {
   data() {
      return {
         contentOnHover: true,
         projectData:[
            {
               image_url: 'Slider-test2.jpg',
               description: 'گــــــروه ساختمــــانی H.H.B تحت مدیریت مهندس حجتی و مهندس بهزادپـور از سال 1386 فعالیت خود را در زمینه ساخت ساختمان های مسکونی، اداری  تجاری و ویلاسازی در تهران و حومه تهران تحت قالــــــب قراردادهـــــــای مدیریت پیمــــــــــــــان و پیمانکـــــــــــــاری آغـــــــــــــــــاز نمود. گروه ساختمانی HHB از سال 1391 اقدام به سرمایه گذاری طراحی و اجرای ساختمان های مسکونی در منطقه 2 تهران نمود و طی سالهای اخیر موفق به ساخت بالغ بر 100 واحـــــــد مسکونـــــــی شـــــــــده اســـــت. این گروه بواسطه همکاری با مهندسین مجرب در حوزه ساختمان در صدد ارتقاء سطح کیفی فضای مسکونی و فراهم ساختن محیطی مناسب سکونت به لحاظ معماری، آسایش و امنیت با بهره گیری از متد های روز صنعت ساختمان می باشد.',
               name: 'البرز 9',
               imageAlt: 'البرز 9',
               location: 'منطقه 2 مرزداران',
               user: 'مسکونی',
               status: 'تمام شده',
               constructionYear: '1400',
               images:[{image_url: 'Slider-test1.jpg'}],
               gallery: [
                  'Slider-test1.jpg',
                  'Slider-test3.jpg',
                  'Slider-test4.jpg',
                  'Slider-test2.jpg',
               ]
            },
            {
               image_url: 'Slider-test3.jpg',
               description: 'گــــــروه ساختمــــانی H.H.B تحت مدیریت مهندس حجتی و مهندس بهزادپـور از سال 1386 فعالیت خود را در زمینه ساخت ساختمان های مسکونی، اداری  تجاری و ویلاسازی در تهران و حومه تهران تحت قالــــــب قراردادهـــــــای مدیریت پیمــــــــــــــان و پیمانکـــــــــــــاری آغـــــــــــــــــاز نمود. گروه ساختمانی HHB از سال 1391 اقدام به سرمایه گذاری طراحی و اجرای ساختمان های مسکونی در منطقه 2 تهران نمود و طی سالهای اخیر موفق به ساخت بالغ بر 100 واحـــــــد مسکونـــــــی شـــــــــده اســـــت. این گروه بواسطه همکاری با مهندسین مجرب در حوزه ساختمان در صدد ارتقاء سطح کیفی فضای مسکونی و فراهم ساختن محیطی مناسب سکونت به لحاظ معماری، آسایش و امنیت با بهره گیری از متد های روز صنعت ساختمان می باشد.',
               name: 'البرز 5',
               imageAlt: 'البرز 9',
               location: 'منطقه 2 مرزداران',
               user: 'مسکونی',
               status: 'تمام شده',
               constructionYear: '1400',
               images:[{image_url: 'Slider-test1.jpg'}],
               gallery: [
                  'Slider-test1.jpg',
                  'Slider-test3.jpg',
                  'Slider-test4.jpg',
                  'Slider-test2.jpg',
               ]
            },
            {
               image_url: 'Slider-test1.jpg',
               description: 'گــــــروه ساختمــــانی H.H.B تحت مدیریت مهندس حجتی و مهندس بهزادپـور از سال 1386 فعالیت خود را در زمینه ساخت ساختمان های مسکونی، اداری  تجاری و ویلاسازی در تهران و حومه تهران تحت قالــــــب قراردادهـــــــای مدیریت پیمــــــــــــــان و پیمانکـــــــــــــاری آغـــــــــــــــــاز نمود. گروه ساختمانی HHB از سال 1391 اقدام به سرمایه گذاری طراحی و اجرای ساختمان های مسکونی در منطقه 2 تهران نمود و طی سالهای اخیر موفق به ساخت بالغ بر 100 واحـــــــد مسکونـــــــی شـــــــــده اســـــت. این گروه بواسطه همکاری با مهندسین مجرب در حوزه ساختمان در صدد ارتقاء سطح کیفی فضای مسکونی و فراهم ساختن محیطی مناسب سکونت به لحاظ معماری، آسایش و امنیت با بهره گیری از متد های روز صنعت ساختمان می باشد.',
               name: 'البرز 3',
               imageAlt: 'البرز 9',
               location: 'منطقه 2 مرزداران',
               user: 'مسکونی',
               status: 'تمام شده',
               constructionYear: '1400',
               images:[{image_url: 'Slider-test1.jpg'}],
               gallery: [
                  'Slider-test1.jpg',
                  'Slider-test3.jpg',
                  'Slider-test4.jpg',
                  'Slider-test2.jpg',
               ]
            },
            {
               image_url: 'Slider-test4.jpg',
               description: 'گــــــروه ساختمــــانی H.H.B تحت مدیریت مهندس حجتی و مهندس بهزادپـور از سال 1386 فعالیت خود را در زمینه ساخت ساختمان های مسکونی، اداری  تجاری و ویلاسازی در تهران و حومه تهران تحت قالــــــب قراردادهـــــــای مدیریت پیمــــــــــــــان و پیمانکـــــــــــــاری آغـــــــــــــــــاز نمود. گروه ساختمانی HHB از سال 1391 اقدام به سرمایه گذاری طراحی و اجرای ساختمان های مسکونی در منطقه 2 تهران نمود و طی سالهای اخیر موفق به ساخت بالغ بر 100 واحـــــــد مسکونـــــــی شـــــــــده اســـــت. این گروه بواسطه همکاری با مهندسین مجرب در حوزه ساختمان در صدد ارتقاء سطح کیفی فضای مسکونی و فراهم ساختن محیطی مناسب سکونت به لحاظ معماری، آسایش و امنیت با بهره گیری از متد های روز صنعت ساختمان می باشد.',
               name: 'البرز 7',
               imageAlt: 'البرز 9',
               location: 'منطقه 2 مرزداران',
               user: 'مسکونی',
               status: 'تمام شده',
               constructionYear: '1400',
               images:[{image_url: 'Slider-test1.jpg'}],
               gallery: [
                  'Slider-test1.jpg',
                  'Slider-test3.jpg',
                  'Slider-test4.jpg',
                  'Slider-test2.jpg',
               ]
            },
         ]
      }
   },
   methods:{
      projectHover(){
         this.contentOnHover = true
      }
   }
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
      
      .project-image-wrapper{
         position: relative;
         background: #fff;
         border-radius: 50px;
      }

      &:hover {
         img {
            opacity: 0.2;
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

.project-content-on-hover{
   position: absolute;
   top: 10%;
   right: 10%;
   // transition: all 0.5s;

   ul{
      list-style-type: none;
      li {
         color: $primary;
         margin-top: 20px;
      }
   }
}

</style>