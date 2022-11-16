@author Halid Lihovac
<template>
  <div class="body container text-center">
    <h1>Posao iz jednog izvora</h1>
    <p>
      Iskoristite Forspace potpuno integrisano all-in-one rješenje za
      <br />
      standardizaciju i digitalizaciju poslovnih procesa u Vašoj kompaniji.
    </p>
    <div class="items container text-center m-5">
      <div class="row">
        <div class="col-sm item">
          <img src="@/assets/images/companies.png" alt="companies" />
          <h4>Vaša kompanija pod jednim krovom</h4>
          <p>Centralno upravljanje procesima.</p>
        </div>
        <div class="item col-sm">
          <img src="@/assets/images/cloud.png" alt="cloud" />
          <h4>Vaša kompanija pod jednim krovom</h4>
          <p>Centralno upravljanje procesima.</p>
        </div>
        <div class="item col-sm">
          <img src="@/assets/images/config.png" alt="config" />
          <h4>Vaša kompanija pod jednim krovom</h4>
          <p>Centralno upravljanje procesima.</p>
        </div>
        <div class="item col-sm">
          <img src="@/assets/images/circle.png" alt="circle" />
          <h4>Vaša kompanija pod jednim krovom</h4>
          <p>Centralno upravljanje procesima.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="cube-background">
    <svg
      id="wave"
      class="svg2"
      style="transform: rotate(0deg); transition: 0.3s"
      viewBox="0 0 1440 270"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop>
          <stop
            stop-color="rgba(239.383, 239.383, 239.383, 1)"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <path
        style="transform: translate(0, 0px); opacity: 1"
        fill="url(#sw-gradient-0)"
        d="M0,54L80,81C160,108,320,162,480,166.5C640,171,800,126,960,99C1120,72,1280,63,1440,85.5C1600,108,1760,162,1920,171C2080,180,2240,144,2400,135C2560,126,2720,144,2880,162C3040,180,3200,198,3360,207C3520,216,3680,216,3840,207C4000,198,4160,180,4320,153C4480,126,4640,90,4800,76.5C4960,63,5120,72,5280,63C5440,54,5600,27,5760,13.5C5920,0,6080,0,6240,40.5C6400,81,6560,162,6720,184.5C6880,207,7040,171,7200,144C7360,117,7520,99,7680,117C7840,135,8000,189,8160,202.5C8320,216,8480,189,8640,148.5C8800,108,8960,54,9120,58.5C9280,63,9440,126,9600,162C9760,198,9920,207,10080,189C10240,171,10400,126,10560,117C10720,108,10880,135,11040,121.5C11200,108,11360,54,11440,27L11520,0L11520,270L11440,270C11360,270,11200,270,11040,270C10880,270,10720,270,10560,270C10400,270,10240,270,10080,270C9920,270,9760,270,9600,270C9440,270,9280,270,9120,270C8960,270,8800,270,8640,270C8480,270,8320,270,8160,270C8000,270,7840,270,7680,270C7520,270,7360,270,7200,270C7040,270,6880,270,6720,270C6560,270,6400,270,6240,270C6080,270,5920,270,5760,270C5600,270,5440,270,5280,270C5120,270,4960,270,4800,270C4640,270,4480,270,4320,270C4160,270,4000,270,3840,270C3680,270,3520,270,3360,270C3200,270,3040,270,2880,270C2720,270,2560,270,2400,270C2240,270,2080,270,1920,270C1760,270,1600,270,1440,270C1280,270,1120,270,960,270C800,270,640,270,480,270C320,270,160,270,80,270L0,270Z"
      ></path>
    </svg>
    <div class="erp-text text-center mt-5">
      <h1 class="erp-main-text mt-5">Forspace ERP & Računovodstvo +</h1>
      <p class="erp-secondary-text">
        Odluke zasnovane na činjenicama, a ne na pretpostavkama!
      </p>
    </div>
    <img src="@/assets/images/kocka_.png" alt="cube" />
  </div>
  <!-- <div class="dir-container m-5"></div> -->
  <div class="container text-center mt-5 mb-5">
    <h1>Kompanije koje su već optimizirale svoje procese sa Forspace</h1>

    <BaseSlider :images="images" />

    <p class="mt-5 pt-5">
      Sve naše klijente ponosno ističemo i gradimo partnerske odnose na
      obostrano zadovoljstvo. Ukoliko neki od naših klijenata nisu još uvijek
      dodani na listu, ne znači da ih manje cijenimo ili da su nam manje važni.
    </p>
    <br />
  </div>
  <TheLocationMap></TheLocationMap>
</template>
<script>
import BaseSlider from "../Sliders/BaseSlider.vue";
import TheLocationMap from "@/components/TheLocationMap.vue";
export default {
  name: "HomeBody",
  components: {
    BaseSlider,
    TheLocationMap,
  },
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
        { id: 9, url: require("@/assets/images/Maxuz.png") },
        { id: 10, url: require("@/assets/images/Itrade.png") },
        { id: 11, url: require("@/assets/images/Gradiz.jpg") },
        { id: 12, url: require("@/assets/images/Putovaobih.png") },
        { id: 13, url: require("@/assets/images/ApDigital.jpg") },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/variables.scss";
.conatiner-sm {
  p {
    margin-bottom: 15vh;
  }
}
.last-item {
  margin: auto;
  width: 60%;
  p {
    margin-bottom: 5vh;
  }
}
.ap-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 20vw;
  margin-bottom: 5vh;
}
.companies {
  box-sizing: border-box;
  padding-top: 4vw;
  margin: auto;
  max-width: 70vw;
  margin-bottom: 5vh;
  p {
    margin-bottom: 15vh;
  }
  img {
    padding: 0;
    max-width: 15vw;
    height: auto;
    max-height: 100px;
    margin: 15px;
  }
}
.dir-secondary {
  flex-direction: column;
  vertical-align: middle;
  justify-content: center;
  color: #162250;
  margin-top: 50px;
  h1 {
    color: #162250 !important;
  }
}
.dir-container {
  font-size: larger;
  h1 {
    color: white;
  }
  color: white;
  display: flex;
  margin-top: 100px;
  width: 80%;
  margin: auto;
  padding: 20px;
}
.direktorica {
  margin-top: 40px;
  box-sizing: border-box;
  max-width: 500px;
}
img {
  margin: auto;
  @media screen and (max-width: 567px) {
    max-width: 350px;
  }
}
.erp-secondary-text {
  color: #f16822;
  font-size: 1.2em;
}
.erp-text {
  padding: 10px;
  // margin-top: 70px;
}
.erp-main-text {
  color: white;
  // margin-top: 90px;
}
.cube-background {
  // background-image: url("@/assets/images/bg-pattern-1.png");
  background-color: $navy;
  // padding: 20px;
  display: flex;
  flex-direction: column;
  height: 60vh;
  position: relative;
  z-index: 1;
  padding: 20px;
  img {
    width: 400px;
    height: 400px;
  }

  svg {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
}
.item {
  margin-bottom: 5vh;
  // margin-top: 4vh;
  h4 {
    font-weight: bolder;
  }
}
.body {
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  padding: 20px;
}
</style>
