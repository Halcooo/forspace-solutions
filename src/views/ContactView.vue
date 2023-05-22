<template lang="">
  <div class="wrapper">
    <div class="wrapper-div">
      <h2>{{ $t("contact") }}</h2>
    </div>
  </div>
  <div class="mt-5 mb-5" data-aos="fade" data-aos-duration="1000">
    <h3>{{ $t("find_us_on_map") }}</h3>
  </div>
  <TheLocationMap></TheLocationMap>
  <ContactForm />
</template>
<script>
import ContactForm from "@/components/ContactView/ContactForm.vue";
import AboutMap from "@/components/AboutView/AboutMap.vue";
import TheLocationMap from "@/components/TheLocationMap.vue";
export default {
  components: {
    ContactForm,
    AboutMap,
    TheLocationMap,
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
  h2 {
    color: white;
  }
}
</style>
