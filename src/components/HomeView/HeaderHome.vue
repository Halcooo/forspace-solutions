@author Halid Lihovac
<template>
  <div class="landing-page">
    <div class="div">
      <div>
        <div class="head-1">
          <h1>Mi ne radimo za Vas.</h1>
        </div>
        <div class="head-2">
          <h1>Mi radimo sa Vama!</h1>
        </div>
        <div class="head-3">
          <BaseButton :to="routes.route" :name="routes.name" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from "@/components/Forms/buttons/BaseButton.vue";

export default {
  name: "HeaderHome",
  components: {
    BaseButton,
  },
  data() {
    return {
      routes: { route: "/contact", name: "presentation" },
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
@keyframes backgroundFade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.landing-page {
  width: 100%;
  height: 80vh;
  background: linear-gradient(
      to top,
      rgba(60, 138, 255, 0.9),
      rgba(31, 165, 255, 0.9),
      hwb(216 63% 0% / 0.9)
    ),
    url("@/assets/images/forspace_info_2.jpg") no-repeat center center/cover;

  border-bottom: 6px solid $lightgreen;
  animation: backgroundFade 0.5s ease-in;
  .background {
    width: 700px;
    height: 500px;
    margin-top: 0%;
    border-radius: 2px;
  }
  .div {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    gap: 200px;
    height: 100%;
    margin: auto;
    text-align: center;
    h1 {
      font-size: 80px;
      color: white;
      margin: 0;
      padding: 0;
      font-family: "Oswald", sans-serif;
    }
    .head-1,
    .head-2 {
      font-size: 80px;
    }
    .head-3 {
      margin-top: 10%;
    }
    @media screen and (max-width: 567px) {
      h1 {
        font-size: 50px;
      }
      .background {
        display: none;
      }
      .landing-page {
      }
    }
  }
  @media screen and (max-width: 567px) {
    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.253),
        rgba(0, 0, 0, 0.247),
        rgba(0, 0, 0, 0.247)
      ),
      url("@/assets/images/forspace_info_2.jpg") no-repeat center center/cover;
  }
}
</style>
