@author Halid Lihovac
<template>
  <div class="widget-container mt-5">
    <div class="widget-box">
      <div class="widget-frame"></div>
      <div class="widget-pic"></div>
    </div>
    <div class="text">
      <small class="">Dobrodosli</small>
      <h1 class="mb-5 text-secondary">Forspace Solutions</h1>
      <p class="mb-5 text-secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        enim in laudantium accusamus iure doloremque explicabo dignissimos,
        veritatis adipisci laborum
      </p>

      <small>Call to ask any question</small>
      <p>123-456-78910</p>

      <div class="d-flex gap-2 mt-5">
        <div class="w-100 bg-light text-center p-3">
          <font-awesome-icon icon="fa-solid fa-rocket " />
          <small> 49+ </small>
          <p>Professionals</p>
        </div>
        <div class="w-100 bg-light text-center p-3">
          <font-awesome-icon icon="fa-solid fa-gem " />
          <small> 299+ </small>
          <p>Project Successful</p>
        </div>
        <div class="w-100 bg-light text-center p-3">
          <font-awesome-icon icon="fa-solid fa-check" />
          <small> 199+ </small>
          <p>Awards Wining</p>
        </div>
      </div>
    </div>
  </div>
  <div class="body text-center pt-5">
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

  <div class="cube-background">
    <div class="cube-content">
      <div class="erp-text mt-5">
        <h1 class="erp-main-text text-secondary mt-5">
          Forspace ERP & Računovodstvo +
        </h1>
        <p class="erp-secondary-text">
          Odluke zasnovane na činjenicama, a ne na pretpostavkama!
        </p>
      </div>
      <div>
        <img src="@/assets/images/kocka_.png" alt="cube" />
      </div>
    </div>
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

.widget-container {
  width: 65%;
  margin: auto;
  margin-bottom: 5%;
  height: 55vh;
  display: flex;
  justify-content: center;
  gap: 20px;
  .widget-box {
    width: 100%;
    height: 100%;
    position: relative;

    .widget-frame {
      position: absolute;
      width: 52%;
      height: 100%;
      border: 23px solid rgb(55, 165, 255);
      // border: 23px solid rgb(255, 97, 0);
      top: 0;
      left: 10%;
    }
    .widget-pic {
      position: absolute;
      top: 15%;
      left: 22%;
      width: 78%;
      height: 70%;
      background: url("@/assets/images/forspace_info.jpg") no-repeat center
        center/cover;
    }
  }
  .text {
    width: 100%;
    padding: 30px 60px;
    .d-flex {
      svg {
        display: block;
        margin: auto;
        width: 30px;
        height: 30px;
        color: gray;
      }
      small {
        font-size: 30px;
      }
      p {
        color: gray;
      }
    }

    small {
      font-size: 20px;
      color: rgb(55, 165, 255);
      margin-bottom: 4%;
    }
    h1 {
      font-size: 50px;
      letter-spacing: 0.1rem;
      color: rgb(37, 37, 37);
    }
    p {
      font-size: 20px;
    }
  }
}
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
  // background-color: rgb(230, 230, 230);
  width: 100%;
  margin: auto;

  // align-items: center;
  .cube-content {
    width: 70%;
    margin: auto;
    display: flex;
    justify-content: center;
    text-align: center;
    > div {
      width: 100%;
    }
  }
  img {
    margin-top: 5%;
    width: 400px;
    height: 400px;
    display: flex;
    margin: auto;
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
    @media screen and (max-width: 567px) {
    }
  }
}
.container {
  h1 {
    color: gray;
  }
  p {
    color: gray;
  }
}
.item {
  margin-bottom: 5vh;

  h4 {
    font-weight: bolder;
  }
}
</style>
