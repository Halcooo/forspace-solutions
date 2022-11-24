<template lang="">
  <div class="wrapper">
    <div class="wrapper-div">
      <h1>{{ $t("contact") }}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
        aspernatur eligendi ipsam et blanditiis voluptate nostrum inventore
        cupiditate dolor saepe labore officia fuga exercitationem reiciendis,
        voluptatem quis voluptatibus odit mollitia?
      </p>
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
      rgba(0, 0, 0, 0.227),
      rgba(0, 0, 0, 0.392),
      rgba(0, 0, 0, 0.507)
    ),
    url("@/assets/images/contact.jpg") no-repeat center center/cover;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper-div {
    text-align: center;
  }
  h1 {
    // text-align: center;
    color: white;
    font-size: 50px;
  }
}
</style>
