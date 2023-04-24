<template>
   <div class="responsive-navbar-wrapper">
      <div class="header-burger-menu-icon" @click="navbarOpen" v-if="burgerMenu">
         <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.1304 14H5.86955C5.38931 14 5 14.4477 5 15C5 15.5523 5.38931 16 5.86955 16H24.1304C24.6107 16 25 15.5523 25 15C25 14.4477 24.6107 14 24.1304 14Z" fill="black"/><path d="M1.30433 7.1739H28.6956C29.416 7.1739 29.9999 6.58994 29.9999 5.86957C29.9999 5.14921 29.416 4.56525 28.6956 4.56525H1.30433C0.58396 4.56525 0 5.14921 0 5.86957C0 6.58994 0.58396 7.1739 1.30433 7.1739Z" fill="black"/><path d="M28.6956 22.826H1.30433C0.58396 22.826 0 23.4101 0 24.1304C0 24.8508 0.58396 25.4348 1.30433 25.4348H28.6956C29.416 25.4348 29.9999 24.8508 29.9999 24.1304C30 23.4101 29.416 22.826 28.6956 22.826Z" fill="black"/>
         </svg>
      </div>
      <div class="burger-menu-navbar" v-if="navbar">
         <MiscNavbar/>
         <div class="close-navbar" @click="navbarClose">
            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M16,8a1,1,0,0,0-1.414,0L12,10.586,9.414,8A1,1,0,0,0,8,9.414L10.586,12,8,14.586A1,1,0,0,0,9.414,16L12,13.414,14.586,16A1,1,0,0,0,16,14.586L13.414,12,16,9.414A1,1,0,0,0,16,8Z"/><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"/></svg>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         burgerMenu: true,
         navbar: false
      }
   },
   methods: {
      navbarOpen(){
         this.navbar = true
         this.burgerMenu = false
         document.body.style.overflow = "hidden"
      },
      navbarClose(){
         this.navbar = false
         this.burgerMenu = true
         document.body.style.overflow = "unset"
      }
   },
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';
.responsive-navbar-wrapper {
   z-index: 99999999999999;
}

.header-burger-menu-icon {
   display: flex;
   align-items: center;
   justify-content: left;
   margin-left: 10px;

   @include mq (lg) {
      display: none;
   }
}

.burger-menu-navbar{
   width: 100%;
   height: 100%;
   background: #fff;
   position: absolute;
   top: 0;
   right: 0;

   @include mq (lg) {
      display: none;
   }
}

.close-navbar{
   width: 100%;
   display: flex;
   justify-content: center;
   margin-top: 70px;

   svg {
      width: 30px;
      height: 30px;
      fill: red;
   }
}
</style>