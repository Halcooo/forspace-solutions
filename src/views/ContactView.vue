<template lang="">
  <div class="wrapper">
    <div class="wrapper-div">
      <h1>{{ $t("contact") }}</h1>
      <p
        style="
          width: 100%;
          margin: auto;
          padding: 2.5px;
          background-color: rgb(0, 156, 161);
          border-radius: 50px;
          transform: translate(0px, -20px) rotate(-2deg);
          position: absolute;
          z-index: -1;
        "
      ></p>
    </div>
  </div>
  <ContactForm />
  <AboutMap />
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
      rgba(172, 172, 172, 0.227),
      rgba(161, 161, 161, 0.392),
      rgba(121, 121, 121, 0.507)
    ),
    url("@/assets/images/contact.jpg") no-repeat center center/cover;
  height: 45vh;

  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper-div {
    position: relative;
    z-index: 1;
  }
  h1 {
    // text-align: center;
    color: white;
    font-size: 50px;
  }
}
</style>
