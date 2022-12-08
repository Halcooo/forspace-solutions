<template>
  <div class="w-100 text-center bg-light">
    <!-- <h1>Kompanije koje su već optimizirale svoje procese sa Forspace</h1> -->
    <div class="container">
      <BaseSlider :images="images" />
    </div>
    <!-- <p class="mt-5 pt-5">
      Sve naše klijente ponosno ističemo i gradimo partnerske odnose na
      obostrano zadovoljstvo. Ukoliko neki od naših klijenata nisu još uvijek
      dodani na listu, ne znači da ih manje cijenimo ili da su nam manje važni.
    </p> -->
  </div>
</template>
<script>
import BaseSlider from "@/components/Sliders/BaseSlider.vue";
export default {
  name: "HomeSlider",
  components: { BaseSlider },
  data() {
    return {
      images: [
        { id: 1, url: require("@/assets/images/asa-group-logo.png") },
        { id: 2, url: require("@/assets/images/prevent-logo.png") },
        { id: 3, url: require("@/assets/images/interior-logo-2.png") },
        { id: 4, url: require("@/assets/images/salona-logo.png") },
        { id: 5, url: require("@/assets/images/dresscode-logo.png") },
        { id: 6, url: require("@/assets/images/tkt-logo.png") },
        { id: 7, url: require("@/assets/images/Savent.png") },
        // { id: 9, url: require("@/assets/images/Maxuz.png") },
        // { id: 10, url: require("@/assets/images/Itrade.png") },
        // { id: 11, url: require("@/assets/images/Gradiz.jpg") },
        // { id: 12, url: require("@/assets/images/Putovaobih.png") },
        // { id: 13, url: require("@/assets/images/ApDigital.jpg") },
      ],
    };
  },
};
</script>
<style lang="scss" scoped></style>
