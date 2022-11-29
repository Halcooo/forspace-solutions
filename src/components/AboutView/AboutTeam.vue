<template>
  <div class="recension">
    <h1 class="text-secondary mb-4" style="text-align: center">
      {{ $t("about_us_team") }}
    </h1>
    <Line />
    <div class="recension_background">
      <div class="dots"></div>

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
import Line from "@/particles/Line.vue";
export default {
  name: "AboutTeam",
  components: { AboutSlider, Line },
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
  // height: 100vh;
  padding-top: 6%;
  position: relative;

  .recension_background {
    width: 70%;
    margin: 5% auto;
    height: 400px;
    position: relative;
    background: url("@/assets/images/product_item_2.jpg") no-repeat center
      center/cover;
    .recension_overlay {
      background-color: rgb(48, 48, 48);
      width: 500px;
      height: 200px;
      transform: translate(145%, 150%);
      padding: 10px 5px;
    }
    .dots {
      position: absolute;
      width: 200px;
      height: 200px;
      background: url("@/assets/images/dots.png") no-repeat center center/cover;
      top: -40px;
      right: -40px;
      z-index: -1;
    }
  }

  h6 {
    text-align: center;
    color: white;
  }
  @media screen and (max-width: 567px) {
    padding-top: 20%;
    margin-bottom: 5%;
    height: 100vh;

    .recension_background {
      width: 90%;
      // height: 100%;
      .recension_overlay {
        width: 95%;
        height: 180px;
        margin: auto;
        transform: translate(0%, 210%);
      }

      .dots {
        top: -40px;
        right: -20px;
      }
    }
  }
}
</style>
