<template>
   <div>
      <div class="hhb-introduction">
         <div class="introduction-header-section-wrapper">
            <nuxt-link to="/" class="header-section-logo">
               <img src="@/static/images/logo/Logo.png" />
            </nuxt-link>
            <div class="header-section-controllers">
               
               <MiscBurgerMenu/>

               <div class="header-language-toggle">
                  <ModulesLanguageToggleSwitch/>
               </div>
            </div>
         </div>
         
         <div class="introduction-title">
            <h1>گروه ساختمانی HHB </h1>
         </div>

         <div class="introduction-navbar-section-wrapper">
            <MiscNavbar/>
         </div>

         <div class="introduction-description">
            <p>ساخت ساختمان های مسکونی، اداری تجاری و ویلاسازی در تهران و حومه تهران</p>
         </div>

         <a class="introduction-social-media" href="https://instagram.com/hhb.bld?igshid=ZjE2NGZiNDQ=" target="_blank">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M17.5 3.15292C22.1725 3.15292 22.7267 3.17042 24.5715 3.255C26.479 3.3425 28.4433 3.77708 29.8331 5.16687C31.236 6.56979 31.6575 8.51521 31.745 10.4285C31.8296 12.2733 31.8471 12.8275 31.8471 17.5C31.8471 22.1725 31.8296 22.7267 31.745 24.5715C31.659 26.4688 31.2142 28.4521 29.8331 29.8331C28.4302 31.236 26.4863 31.6575 24.5715 31.745C22.7267 31.8296 22.1725 31.8471 17.5 31.8471C12.8275 31.8471 12.2733 31.8296 10.4285 31.745C8.54583 31.659 6.53625 31.204 5.16687 29.8331C3.77125 28.4375 3.3425 26.4731 3.255 24.5715C3.17042 22.7267 3.15292 22.1725 3.15292 17.5C3.15292 12.8275 3.17042 12.2733 3.255 10.4285C3.34104 8.53854 3.79021 6.54354 5.16687 5.16687C6.56687 3.76688 8.51958 3.3425 10.4285 3.255C12.2733 3.17042 12.8275 3.15292 17.5 3.15292ZM17.5 0C12.7473 0 12.1508 0.0204167 10.2842 0.105C7.57896 0.228958 4.89271 0.981458 2.93708 2.93708C0.974167 4.9 0.228958 7.58042 0.105 10.2842C0.0204167 12.1508 0 12.7473 0 17.5C0 22.2527 0.0204167 22.8492 0.105 24.7158C0.228958 27.4181 0.984375 30.1117 2.93708 32.0629C4.89854 34.0244 7.58333 34.771 10.2842 34.895C12.1508 34.9796 12.7473 35 17.5 35C22.2527 35 22.8492 34.9796 24.7158 34.895C27.4196 34.771 30.1088 34.0171 32.0629 32.0629C34.0273 30.0985 34.771 27.4196 34.895 24.7158C34.9796 22.8492 35 22.2527 35 17.5C35 12.7473 34.9796 12.1508 34.895 10.2842C34.771 7.57896 34.0171 4.89125 32.0629 2.93708C30.1044 0.978542 27.4123 0.2275 24.7158 0.105C22.8492 0.0204167 22.2527 0 17.5 0Z" fill="white"/><path d="M17.4999 8.51373C12.5372 8.51373 8.51367 12.5373 8.51367 17.5C8.51367 22.4627 12.5372 26.4862 17.4999 26.4862C22.4626 26.4862 26.4862 22.4627 26.4862 17.5C26.4862 12.5373 22.4626 8.51373 17.4999 8.51373ZM17.4999 23.3333C14.2785 23.3333 11.6666 20.7214 11.6666 17.5C11.6666 14.2785 14.2785 11.6666 17.4999 11.6666C20.7214 11.6666 23.3333 14.2785 23.3333 17.5C23.3333 20.7214 20.7214 23.3333 17.4999 23.3333Z" fill="white"/><path d="M26.8421 10.2579C28.0019 10.2579 28.9421 9.3177 28.9421 8.1579C28.9421 6.9981 28.0019 6.0579 26.8421 6.0579C25.6823 6.0579 24.7421 6.9981 24.7421 8.1579C24.7421 9.3177 25.6823 10.2579 26.8421 10.2579Z" fill="white"/>
            </svg>
         </a>
      </div>
   </div>
</template>

<script>
export default {
   components:{

   }
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';

.hhb-introduction {
   padding: 30px;
   display: flex;
   flex-direction: column;
   align-items: center;
   
   @include mq (lg) {
      padding: 20px 30px;
      right: 0;  
   }


}

.introduction-header-section-wrapper {
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
}

.header-section-logo {
   flex-basis: 20%;
   img {
      width: 100%;
   }
}

.header-section-controllers {
   flex-basis: 20%;

}

.introduction-title {
   margin: 30px;
   padding: 10px 60px;
   width: 100%;
   border-radius: 50px;
   background-color: $primary;
   text-align: center;
   
   @include mq (lg) {
      padding: 10px 10px;
      margin: 50px 0px 20px;
   }

   @include mq (xxl) {
      margin-top: 80px;
   }

   h1{
      color: #fff !important; 
      font-size: 24px;

      @include mq (sm) {
         font-size: 28px;
      }

      @include mq (md) {
         font-size: 32px;
      }

      @include mq (lg) {
         font-size: 28px;
      }
   }
}

.introduction-navbar-section-wrapper{
   display: none;
   width: 100%;
   @include mq (lg) {
      display: initial;
   }
}


.introduction-description {
   p {
      text-align: center;
      color: $primary;
   }
}

.introduction-social-media {
   margin-top: 30px;
   width: 55px;
   height: 55px;
   border-radius: 50%;
   background-color: $primary;
   display: flex;
   align-items: center;
   justify-content: center;

   @include mq (md) {
      margin-top: 20px;
   }

   @include mq (xl) {
      margin-top: 60px;
   }

}
</style>
