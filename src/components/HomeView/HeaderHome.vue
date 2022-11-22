@author Halid Lihovac
<template>
  <div class="landing-page" style="position: relative; z-index: 1">
    <!-- <svg
      id="wave"
      style="
        transform: rotate(180deg);
        transition: 0.3s;
        position: absolute;
        z-index: -1;
        top: 0;
      "
      viewBox="0 0 1440 490"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop stop-color="rgba(94.388, 129.865, 255, 1)" offset="0%"></stop>
          <stop
            stop-color="rgba(26.204, 77.034, 225.722, 1)"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <path
        style="transform: translate(0, 0px); opacity: 1"
        fill="url(#sw-gradient-0)"
        d="M0,0L120,65.3C240,131,480,261,720,261.3C960,261,1200,131,1440,89.8C1680,49,1920,98,2160,122.5C2400,147,2640,147,2880,122.5C3120,98,3360,49,3600,89.8C3840,131,4080,261,4320,334.8C4560,408,4800,425,5040,400.2C5280,376,5520,310,5760,302.2C6000,294,6240,343,6480,318.5C6720,294,6960,196,7200,138.8C7440,82,7680,65,7920,89.8C8160,114,8400,180,8640,179.7C8880,180,9120,114,9360,114.3C9600,114,9840,180,10080,228.7C10320,278,10560,310,10800,326.7C11040,343,11280,343,11520,359.3C11760,376,12000,408,12240,367.5C12480,327,12720,212,12960,196C13200,180,13440,261,13680,294C13920,327,14160,310,14400,326.7C14640,343,14880,392,15120,416.5C15360,441,15600,441,15840,400.2C16080,359,16320,278,16560,212.3C16800,147,17040,98,17160,73.5L17280,49L17280,490L17160,490C17040,490,16800,490,16560,490C16320,490,16080,490,15840,490C15600,490,15360,490,15120,490C14880,490,14640,490,14400,490C14160,490,13920,490,13680,490C13440,490,13200,490,12960,490C12720,490,12480,490,12240,490C12000,490,11760,490,11520,490C11280,490,11040,490,10800,490C10560,490,10320,490,10080,490C9840,490,9600,490,9360,490C9120,490,8880,490,8640,490C8400,490,8160,490,7920,490C7680,490,7440,490,7200,490C6960,490,6720,490,6480,490C6240,490,6000,490,5760,490C5520,490,5280,490,5040,490C4800,490,4560,490,4320,490C4080,490,3840,490,3600,490C3360,490,3120,490,2880,490C2640,490,2400,490,2160,490C1920,490,1680,490,1440,490C1200,490,960,490,720,490C480,490,240,490,120,490L0,490Z"
      ></path>
      <defs>
        <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
          <stop stop-color="rgba(0, 66.885, 146.034, 1)" offset="0%"></stop>
          <stop stop-color="rgba(7.089, 0, 141.481, 1)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        style="transform: translate(0, 50px); opacity: 0.9"
        fill="url(#sw-gradient-1)"
        d="M0,147L120,122.5C240,98,480,49,720,65.3C960,82,1200,163,1440,236.8C1680,310,1920,376,2160,400.2C2400,425,2640,408,2880,375.7C3120,343,3360,294,3600,253.2C3840,212,4080,180,4320,179.7C4560,180,4800,212,5040,245C5280,278,5520,310,5760,269.5C6000,229,6240,114,6480,98C6720,82,6960,163,7200,196C7440,229,7680,212,7920,179.7C8160,147,8400,98,8640,73.5C8880,49,9120,49,9360,40.8C9600,33,9840,16,10080,40.8C10320,65,10560,131,10800,204.2C11040,278,11280,359,11520,326.7C11760,294,12000,147,12240,73.5C12480,0,12720,0,12960,0C13200,0,13440,0,13680,32.7C13920,65,14160,131,14400,147C14640,163,14880,131,15120,155.2C15360,180,15600,261,15840,277.7C16080,294,16320,245,16560,261.3C16800,278,17040,359,17160,400.2L17280,441L17280,490L17160,490C17040,490,16800,490,16560,490C16320,490,16080,490,15840,490C15600,490,15360,490,15120,490C14880,490,14640,490,14400,490C14160,490,13920,490,13680,490C13440,490,13200,490,12960,490C12720,490,12480,490,12240,490C12000,490,11760,490,11520,490C11280,490,11040,490,10800,490C10560,490,10320,490,10080,490C9840,490,9600,490,9360,490C9120,490,8880,490,8640,490C8400,490,8160,490,7920,490C7680,490,7440,490,7200,490C6960,490,6720,490,6480,490C6240,490,6000,490,5760,490C5520,490,5280,490,5040,490C4800,490,4560,490,4320,490C4080,490,3840,490,3600,490C3360,490,3120,490,2880,490C2640,490,2400,490,2160,490C1920,490,1680,490,1440,490C1200,490,960,490,720,490C480,490,240,490,120,490L0,490Z"
      ></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      style="position: absolute; z-index: -1; bottom: 0; left: 0"
    >
      <path
        fill="rgb( 255,255,255)"
        fill-opacity="1"
        d="M0,192L120,197.3C240,203,480,213,720,197.3C960,181,1200,139,1320,117.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      ></path>
    </svg> -->
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
  <div class="nav"></div>
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
  height: 50vh;
  // border-bottom: 5px solid gray;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.212),
      rgba(0, 0, 0, 0.24),
      rgba(0, 0, 0, 0.137)
    ),
    url("@/assets/images/productscover.jpg") no-repeat center center/cover;
  // background-color: rgba(26, 66, 177, 0.699);
  // background: linear-gradient(
  //     to top,
  //     rgba(0, 0, 0, 0.212),
  //     rgba(0, 0, 0, 0.24),
  //     rgba(0, 0, 0, 0.137)
  //   ),
  //   url("@/assets/images/footer2.png") no-repeat bottom center/cover;
  // ,
  // url("@/assets/images/forspace_info_2.jpg") no-repeat center center/cover;

  // border-bottom: 6px solid $lightgreen;
  animation: backgroundFade 0.5s ease-in;
  .background {
    width: 700px;
    height: 500px;
    margin-top: 0%;
    border-radius: 2px;
  }
  .div {
    display: flex;
    justify-content: left;
    width: 70%;
    align-items: center;
    gap: 200px;
    height: 100%;
    margin: auto;
    // text-align: center;
    padding-top: 5%;
    padding-left: 2%;
    h1 {
      font-size: 60px;
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
        #4f96ffe6,
        rgba(81, 185, 255, 0.9),
        hwb(216 69% 0% / 0.9)
      ),
      url("@/assets/images/about.jpg") no-repeat bottom center/cover;

    // background: linear-gradient(
    //     to top,
    //     rgba(0, 0, 0, 0.253),
    //     rgba(0, 0, 0, 0.247),
    //     rgba(0, 0, 0, 0.247)
    //   ),
    //   url("@/assets/images/forspace_info_2.jpg") no-repeat center center/cover;
  }
}

.nav {
  height: 60px;
  background-color: rgb(231, 231, 231);
}
</style>
