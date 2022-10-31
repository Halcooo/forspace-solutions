<template lang="">
  <div class="wrapper">
    <h1>{{ $t("contact") }}</h1>
  </div>
  <ContactForm></ContactForm>
</template>
<script>
import ContactForm from '@/components/forms/ContactForm.vue';
export default {
  components:{
    ContactForm
  }
};
</script>
<style lang="scss">
.wrapper {
  background-image: url(@/assets/images/contact.jpg);
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 200px;
}
</style>
