@author Halid Lihovac
<template>
  <div class="body container">
    <h1>Posao iz jednog izvora</h1>
    <p>
      Iskoristite Forspace potpuno integrisano all-in-one rješenje za
      <br />
      standardizaciju i digitalizaciju poslovnih procesa u Vašoj kompaniji.
    </p>
    <div class="items container">
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
    <div class="erp-text">
      <h1 class="erp-main-text">Forspace ERP & Računovodstvo +</h1>
      <p class="erp-secondary-text">
        Odluke zasnovane na činjenicama, a ne na pretpostavkama!
      </p>
    </div>
    <img src="@/assets/images/kocka_.png" alt="cube" />
  </div>
  <div class="dir-container">></div>
  <div class="container">
    <h1>Kompanije koje su već optimizirale svoje procese sa Forspace</h1>

    <BaseSlider :images="images" />

    <p>
      Sve naše klijente ponosno ističemo i gradimo partnerske odnose na
      obostrano zadovoljstvo. Ukoliko neki od naših klijenata nisu još uvijek
      dodani na listu, ne znači da ih manje cijenimo ili da su nam manje važni.
    </p>
    <br />
  </div>
</template>
<script>
import BaseSlider from "../Sliders/BaseSlider.vue";
export default {
  name: "HomeBody",
  components: {
    BaseSlider,
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
  margin-top: 70px;
}
.erp-main-text {
  color: white;
  margin-top: 90px;
}
.cube-background {
  // background-image: url('@/assets/images/kocka-blank_sjena.png');
  background-color: #ccc;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.item {
  margin-bottom: 5vh;
  margin-top: 4vh;
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
