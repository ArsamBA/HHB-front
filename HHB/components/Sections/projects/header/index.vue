<template>
   <div class="project-header-wrapper">
      <div class="project-header-section-logo">
         <img src="@/static/images/logo/Logo.png" />
      </div>
      <div class="project-header-section-controllers">
         <div class="header-home-button">
            <nuxt-link to="/" class="nav-link">
               <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_30_69)"><path d="M17.7422 1.45966C17.264 1.02924 16.6434 0.791077 16 0.791077C15.3566 0.791077 14.736 1.02924 14.2578 1.45966L0.375 13.9545V27.4961C0.375 28.6012 0.813987 29.661 1.59539 30.4424C2.37679 31.2238 3.4366 31.6628 4.54167 31.6628H27.4583C28.5634 31.6628 29.6232 31.2238 30.4046 30.4424C31.186 29.661 31.625 28.6012 31.625 27.4961V13.9545L17.7422 1.45966ZM19.9062 29.0547H12.0938V22.5104C12.0938 21.4744 12.5053 20.4809 13.2379 19.7483C13.9704 19.0157 14.964 18.6042 16 18.6042C17.036 18.6042 18.0296 19.0157 18.7621 19.7483C19.4947 20.4809 19.9062 21.4744 19.9062 22.5104V29.0547ZM29.0208 27.4922C29.0208 27.9066 28.8562 28.304 28.5632 28.5971C28.2702 28.8901 27.8727 29.0547 27.4583 29.0547H22.5104V22.5104C22.5104 20.7838 21.8245 19.1278 20.6036 17.9069C19.3826 16.6859 17.7267 16 16 16C14.2733 16 12.6174 16.6859 11.3964 17.9069C10.1755 19.1278 9.48958 20.7838 9.48958 22.5104V29.0547H4.54167C4.12727 29.0547 3.72984 28.8901 3.43681 28.5971C3.14379 28.304 2.97917 27.9066 2.97917 27.4922V15.1133L16 3.39456L29.0208 15.1133V27.4922Z" fill="#116294"/></g><defs><clipPath id="clip0_30_69"><rect width="31.25" height="31.25" fill="white" transform="translate(0.375 0.375)"/></clipPath></defs>
               </svg>
            </nuxt-link>
         </div>
         <div class="project-header-language-toggle">
            <ModulesLanguageToggleSwitch/>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   methods: {
      handleScroll () {
         let windowWidth = window.matchMedia('(min-width: 992px)')
         if (windowWidth) {
            let navbar = document.querySelector('.project-header-wrapper')
            if(window.scrollY > 0){
               navbar.style.marginTop = '0px'
               navbar.style.position = 'sticky'
               navbar.style.top = '0px'
               navbar.style.transition = "all 1s"
            } else {
               navbar.style.marginTop = '-100px'
               navbar.style.position = 'relative'
               navbar.style.top = 'unset'
               navbar.style.transition = "all 1s"
               
            }  
         }
      }
   },
   created () {
      if (process.client) { 
         window.addEventListener('scroll', this.handleScroll);
      }
   },
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';
.project-header-wrapper {
   background: #fff;
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding: 10px 20px;
   border-bottom: 1px solid $primary;
   @include mq (lg) {
      padding: 10px 50px;   
      margin-top: -100px;
      position: relative;   
      z-index: 999999;       
   }
}

.project-header-section-logo {
   width: 20%;
   img {
      width: 100%;
   }

   @include mq (lg) {
      width: 10%;               
   }

   @include mq (xxl) {
      width: 5%;               
   }
}

.project-header-section-controllers {
   display: flex;
   flex-direction: column;
   align-items: center;
   flex-basis: 15%;

   @include mq (lg) {
      flex-direction: row;
      justify-content: space-between; 
   }

   @include mq (xl) {

      flex-basis: 10%;
   }

   .header-home-button {
      margin-top: 5px;
   }

   .project-header-language-toggle {
      display: flex;
   }
}

</style>