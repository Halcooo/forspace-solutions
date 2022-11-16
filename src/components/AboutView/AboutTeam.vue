<template>
  <div class="recension">
    <h1 style="text-align: center">{{ $t("about_us_team") }}</h1>
    <div class="recension_background">
      <p
        style="
          position: absolute;
          bottom: 2%;
          left: 10%;
          color: rgba(255, 255, 255, 0.6);
          font-size: 40px;
        "
      >
        Life at Forspace
      </p>
      <div class="recension_overlay">
        <h6>{{ $t("about_us_clients") }}</h6>
        <AboutSlider :images="images" />
      </div>
    </div>
  </div>
</template>
<script>
import AboutSlider from "@/components/Sliders/AboutSlider.vue";
export default {
  name: "AboutTeam",
  components: { AboutSlider },
  data() {
    return {
      images: [
        {
          id: 1,
          url: require("@/assets/images/asa-group-logo.png"),
          name: "about_us_client_one",
        },
        {
          id: 2,
          url: require("@/assets/images/prevent-logo.png"),
          name: "about_us_client_two",
        },
        {
          id: 3,
          url: require("@/assets/images/interior-logo-2.png"),
          name: "about_us_client_three",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.recension {
  width: 100%;
  padding-top: 6%;
  .recension_background {
    width: 55%;
    margin: 5% auto;
    height: 400px;
    position: relative;
    background: url("@/assets/images/product_item_2.jpg") no-repeat center
      center/cover;
    .recension_overlay {
      background-color: rgb(48, 48, 48);
      width: 450px;
      height: 170px;
      transform: translate(125%, 180%);
      padding: 10px 5px;
    }
  }

  h6 {
    text-align: center;
    color: white;
  }
}
</style>
