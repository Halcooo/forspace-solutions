<template lang="">
  <div class="wrapper">
    <div class="wrapper-div">
      <h1>{{ $t("contact") }}</h1>
    </div>
  </div>
  <ContactForm />
</template>
<script>
import ContactForm from "@/components/ContactView/ContactForm.vue";
import AboutMap from "@/components/AboutView/AboutMap.vue";
export default {
  components: {
    ContactForm,
    AboutMap,
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  background: linear-gradient(
      to right,
      rgba(8, 40, 67, 0.6),
      rgba(8, 40, 67, 0.6),
      rgba(8, 40, 67, 0.6)
    ),
    url("@/assets/images/office.jpg") no-repeat center center/cover;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper-div {
    text-align: center;
  }
  h1 {
    color: white;
    font-size: 70px;
  }
}
</style>
