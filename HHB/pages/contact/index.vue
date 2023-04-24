<template>
  <div>
    <div class="contact-us-wrapper">
      <Introduction/>
      <SectionsContactContent/>
    </div>
  </div>
</template>

<script>
import { useContactUs } from '~/src/stores/contactUs';
export default {
  head() {
    return {
      title: 'arsam',
      description: this.description 
    }
  },
  setup () {
    const contactData = useContactUs()
    return contactData
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';

.contact-us-wrapper{
  width: 100%;

  @include mq (lg) {
    display: flex;
    flex-direction: row;   
    justify-content: space-between;
    position: absolute;   
    top: 0;
    bottom: 0;
  }
}
</style>