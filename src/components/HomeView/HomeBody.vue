@author Halid Lihovac
<template>
  <div class="body text-center pt-5 bg-light">
    <h1>Posao iz jednog izvora</h1>
    <p>
      Iskoristite Forspace potpuno integrisano all-in-one rješenje za
      <br />
      standardizaciju i digitalizaciju poslovnih procesa u Vašoj kompaniji.
    </p>
    <div class="items container text-center pb-5">
      <div class="row gap-2">
        <div class="col-sm item bg-light p-5">
          <img src="@/assets/images/companies.png" alt="companies" />
          <h4>Vaša kompanija pod jednim krovom</h4>
          <p>Centralno upravljanje procesima.</p>
        </div>
        <div class="item col-sm bg-light p-5">
          <img src="@/assets/images/cloud.png" alt="cloud" />
          <h4>Vaša kompanija pod jednim krovom</h4>
          <p>Centralno upravljanje procesima.</p>
        </div>
        <div class="item col-sm bg-light p-5">
          <img src="@/assets/images/config.png" alt="config" />
          <h4>Vaša kompanija pod jednim krovom</h4>
          <p>Centralno upravljanje procesima.</p>
        </div>
        <div class="item col-sm bg-light p-5">
          <img src="@/assets/images/circle.png" alt="circle" />
          <h4>Vaša kompanija pod jednim krovom</h4>
          <p>Centralno upravljanje procesima.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="cube-background pb-5">
    <!-- <svg
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
    </svg> -->
    <div class="erp-text text-center">
      <svg
        id="wave"
        style="
          transform: rotate(180deg);
          transition: 0.3s;
          position: absolute;
          top: -1;
        "
        viewBox="0 0 1440 490"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(255,255,255, 1)" offset="0%"></stop>
            <stop stop-color="rgba(255,255,255, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style="transform: translate(0, 0px); opacity: 1"
          fill="url(#sw-gradient-0)"
          d="M0,245L60,269.5C120,294,240,343,360,310.3C480,278,600,163,720,147C840,131,960,212,1080,204.2C1200,196,1320,98,1440,81.7C1560,65,1680,131,1800,196C1920,261,2040,327,2160,334.8C2280,343,2400,294,2520,294C2640,294,2760,343,2880,326.7C3000,310,3120,229,3240,220.5C3360,212,3480,278,3600,261.3C3720,245,3840,147,3960,130.7C4080,114,4200,180,4320,220.5C4440,261,4560,278,4680,236.8C4800,196,4920,98,5040,49C5160,0,5280,0,5400,73.5C5520,147,5640,294,5760,351.2C5880,408,6000,376,6120,343C6240,310,6360,278,6480,261.3C6600,245,6720,245,6840,236.8C6960,229,7080,212,7200,204.2C7320,196,7440,196,7560,171.5C7680,147,7800,98,7920,73.5C8040,49,8160,49,8280,57.2C8400,65,8520,82,8580,89.8L8640,98L8640,490L8580,490C8520,490,8400,490,8280,490C8160,490,8040,490,7920,490C7800,490,7680,490,7560,490C7440,490,7320,490,7200,490C7080,490,6960,490,6840,490C6720,490,6600,490,6480,490C6360,490,6240,490,6120,490C6000,490,5880,490,5760,490C5640,490,5520,490,5400,490C5280,490,5160,490,5040,490C4920,490,4800,490,4680,490C4560,490,4440,490,4320,490C4200,490,4080,490,3960,490C3840,490,3720,490,3600,490C3480,490,3360,490,3240,490C3120,490,3000,490,2880,490C2760,490,2640,490,2520,490C2400,490,2280,490,2160,490C2040,490,1920,490,1800,490C1680,490,1560,490,1440,490C1320,490,1200,490,1080,490C960,490,840,490,720,490C600,490,480,490,360,490C240,490,120,490,60,490L0,490Z"
        ></path>
        <defs>
          <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop>
            <stop stop-color="rgba(255,255,255, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style="transform: translate(0, 50px); opacity: 0.9"
          fill="url(#sw-gradient-1)"
          d="M0,0L60,73.5C120,147,240,294,360,359.3C480,425,600,408,720,343C840,278,960,163,1080,130.7C1200,98,1320,147,1440,171.5C1560,196,1680,196,1800,163.3C1920,131,2040,65,2160,73.5C2280,82,2400,163,2520,236.8C2640,310,2760,376,2880,392C3000,408,3120,376,3240,326.7C3360,278,3480,212,3600,204.2C3720,196,3840,245,3960,245C4080,245,4200,196,4320,212.3C4440,229,4560,310,4680,359.3C4800,408,4920,425,5040,383.8C5160,343,5280,245,5400,196C5520,147,5640,147,5760,196C5880,245,6000,343,6120,318.5C6240,294,6360,147,6480,130.7C6600,114,6720,229,6840,285.8C6960,343,7080,343,7200,351.2C7320,359,7440,376,7560,367.5C7680,359,7800,327,7920,261.3C8040,196,8160,98,8280,65.3C8400,33,8520,65,8580,81.7L8640,98L8640,490L8580,490C8520,490,8400,490,8280,490C8160,490,8040,490,7920,490C7800,490,7680,490,7560,490C7440,490,7320,490,7200,490C7080,490,6960,490,6840,490C6720,490,6600,490,6480,490C6360,490,6240,490,6120,490C6000,490,5880,490,5760,490C5640,490,5520,490,5400,490C5280,490,5160,490,5040,490C4920,490,4800,490,4680,490C4560,490,4440,490,4320,490C4200,490,4080,490,3960,490C3840,490,3720,490,3600,490C3480,490,3360,490,3240,490C3120,490,3000,490,2880,490C2760,490,2640,490,2520,490C2400,490,2280,490,2160,490C2040,490,1920,490,1800,490C1680,490,1560,490,1440,490C1320,490,1200,490,1080,490C960,490,840,490,720,490C600,490,480,490,360,490C240,490,120,490,60,490L0,490Z"
        ></path>
        <defs>
          <linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(252,252,252, 1)" offset="0%"></stop>
            <stop
              stop-color="rgba(232.552, 232.552, 232.552, 1)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          style="transform: translate(0, 100px); opacity: 0.8"
          fill="url(#sw-gradient-2)"
          d="M0,343L60,343C120,343,240,343,360,310.3C480,278,600,212,720,171.5C840,131,960,114,1080,89.8C1200,65,1320,33,1440,73.5C1560,114,1680,229,1800,245C1920,261,2040,180,2160,130.7C2280,82,2400,65,2520,106.2C2640,147,2760,245,2880,236.8C3000,229,3120,114,3240,57.2C3360,0,3480,0,3600,16.3C3720,33,3840,65,3960,122.5C4080,180,4200,261,4320,285.8C4440,310,4560,278,4680,269.5C4800,261,4920,278,5040,269.5C5160,261,5280,229,5400,253.2C5520,278,5640,359,5760,351.2C5880,343,6000,245,6120,204.2C6240,163,6360,180,6480,220.5C6600,261,6720,327,6840,359.3C6960,392,7080,392,7200,392C7320,392,7440,392,7560,367.5C7680,343,7800,294,7920,261.3C8040,229,8160,212,8280,212.3C8400,212,8520,229,8580,236.8L8640,245L8640,490L8580,490C8520,490,8400,490,8280,490C8160,490,8040,490,7920,490C7800,490,7680,490,7560,490C7440,490,7320,490,7200,490C7080,490,6960,490,6840,490C6720,490,6600,490,6480,490C6360,490,6240,490,6120,490C6000,490,5880,490,5760,490C5640,490,5520,490,5400,490C5280,490,5160,490,5040,490C4920,490,4800,490,4680,490C4560,490,4440,490,4320,490C4200,490,4080,490,3960,490C3840,490,3720,490,3600,490C3480,490,3360,490,3240,490C3120,490,3000,490,2880,490C2760,490,2640,490,2520,490C2400,490,2280,490,2160,490C2040,490,1920,490,1800,490C1680,490,1560,490,1440,490C1320,490,1200,490,1080,490C960,490,840,490,720,490C600,490,480,490,360,490C240,490,120,490,60,490L0,490Z"
        ></path>
      </svg>
      <h1 class="erp-main-text">Forspace ERP & Računovodstvo +</h1>
      <p class="erp-secondary-text">
        Odluke zasnovane na činjenicama, a ne na pretpostavkama!
      </p>
    </div>
    <img src="@/assets/images/kocka_.png" alt="cube" />
  </div>
  <!-- <div class="dir-container m-5"></div> -->
  <div class="container text-center pt-5">
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
  color: $navy;
  // margin-top: 90px;
}
.cube-background {
  background-color: $navy;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  padding: 20px;
  img {
    margin-top: 5%;
    width: 500px;
    height: 500px;
    @media screen and (max-width: 567px) {
      width: 400px;
      height: 400px;
    }
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
  // margin-top: 30px;
  // margin-left: auto;
  // margin-right: auto;
  // width: 90%;
  // padding: 20px;
}
</style>
