<template lang="">
  <div class="wrapper">
    <h1>{{ $t("contact") }}</h1>
  </div>
  <ContactForm></ContactForm>
</template>
<script>
import ContactForm from "@/components/Forms/ContactForm.vue";
export default {
  components: {
    ContactForm,
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.227),
      rgba(0, 0, 0, 0.392),
      rgba(0, 0, 0, 0.507)
    ),
    url("@/assets/images/contact.jpg") no-repeat center center/cover;
  height: 45vh;

  padding-top: 200px;
  h1 {
    text-align: center;
    color: white;
    font-size: 50px;
  }
}
</style>
