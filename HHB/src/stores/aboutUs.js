import {ref} from "vue"
import { defineStore } from 'pinia'

export const useAboutUs = defineStore('aboutData', {
   state: () => ({
         title: "sldfk",
         description: "as,jdask",
         content: "<strong>گــــــروه ساختمــــانی H.H.B</strong> تحت مدیریت مهندس حجتی و مهندس بهزادپـور از سال 1386 فعالیت خود را در زمینه ساخت ساختمان های مسکونی، اداری  تجاری و ویلاسازی در تهران و حومه تهران تحت قالــــــب قراردادهـــــــای مدیریت پیمــــــــــــــان و پیمانکـــــــــــــاری آغـــــــــــــــــاز نمود. گروه ساختمانی HHB از سال 1391 اقدام به سرمایه گذاری طراحی و اجرای ساختمان های مسکونی در منطقه 2 تهران نمود و طی سالهای اخیر موفق به ساخت بالغ بر 100 واحـــــــد مسکونـــــــی شـــــــــده اســـــت. این گروه بواسطه همکاری با مهندسین مجرب در حوزه ساختمان در صدد ارتقاء سطح کیفی فضای مسکونی و فراهم ساختن محیطی مناسب سکونت به لحاظ معماری، آسایش و امنیت با بهره گیری از متد های روز صنعت ساختمان می باشد."
    }),


   // async function getAboutData(){

   //    console.log("I'll do the api call later ..");
   // }

})