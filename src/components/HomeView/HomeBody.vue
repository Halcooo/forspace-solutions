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
  <div class="body bg-light text-center pt-5">
    <div class="items container text-center pb-5">
      <div class="square">
        <h1>Brza i jednostavna rjesenja</h1>
      </div>
      <div class="square-2"></div>
      <div class="items-container">
        <div
          class="item bg-light p-5"
          style="
            border-bottom: 1px solid gainsboro;
            border-right: 1px solid gainsboro;
          "
        >
          <img src="@/assets/images/companies.png" alt="companies" />
          <h4>Vaša kompanija pod jednim krovom</h4>
          <p>Centralno upravljanje procesima.</p>
        </div>
        <div
          class="item bg-light p-5"
          style="border-bottom: 1px solid gainsboro"
        >
          <img src="@/assets/images/cloud.png" alt="cloud" />
          <h4>Vaša kompanija pod jednim krovom</h4>
          <p>Centralno upravljanje procesima.</p>
        </div>
        <div
          class="item bg-light p-5"
          style="border-right: 1px solid gainsboro"
        >
          <img src="@/assets/images/config.png" alt="config" />
          <h4>Vaša kompanija pod jednim krovom</h4>
          <p>Centralno upravljanje procesima.</p>
        </div>
        <div class="item bg-light p-5">
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
        <h1 class="erp-main-text text-secondary mt-2">
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
  <div class="testimonial">
    <div class="testimonial-top">
      <div class="testimonial-top-item-one">
        <div class="testimonial-box">
          <div class="quote-div">
            <!-- <font-awesome-icon icon="fa-solid fa-quote-left" /> -->
          </div>
          <div class="testimonial-square"></div>
          <Testimonial :images="test" />
        </div>
      </div>
      <div class="testimonial-top-item-two">
        <h1 class="text-secondary">Sta nasi klijenti kazu o nama</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
          quaerat labore non recusandae, veritatis et tempora ex neque mollitia
          laboriosam magnam explicabo voluptatum nobis sequi sed asperiores
          assumenda maxime accusamus!
        </p>
      </div>
    </div>
    <div class="testimonial-bottom">
      <div class="bottom-flex">
        <div>
          <h1 class="text-light">
            Da li imate nekih pitanja ? Kontaktirajte nas.
          </h1>
        </div>
        <div class="button-group">
          <div>
            <BaseButton :to="routes_1.route_1" :name="routes_1.name_1" />
            <BaseButton :to="routes_2.route_2" :name="routes_2.name_2" />
          </div>
        </div>
      </div>
    </div>
  </div>
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
  <TheLocationMap></TheLocationMap>
</template>
<script>
import BaseSlider from "../Sliders/BaseSlider.vue";
import TheLocationMap from "@/components/TheLocationMap.vue";
import Testimonial from "@/components/Sliders/Testimonial.vue";
import BaseButton from "../Forms/buttons/BaseButton.vue";
export default {
  name: "HomeBody",
  components: {
    BaseSlider,
    TheLocationMap,
    Testimonial,
    BaseButton,
  },
  data() {
    return {
      routes_1: { route_1: "/contact", name_1: "faq" },
      routes_2: { route_2: "/contact", name_2: "faq-2" },

      test: [
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
      images: [
        { id: 1, url: require("@/assets/images/asa-group-logo.png") },
        { id: 2, url: require("@/assets/images/prevent-logo.png") },
        { id: 3, url: require("@/assets/images/interior-logo-2.png") },
        { id: 4, url: require("@/assets/images/salona-logo.png") },
        { id: 5, url: require("@/assets/images/dresscode-logo.png") },
        { id: 6, url: require("@/assets/images/tkt-logo.png") },
        { id: 7, url: require("@/assets/images/Savent.png") },
        // { id: 9, url: require("@/assets/images/Maxuz.png") },
        { id: 10, url: require("@/assets/images/Itrade.png") },
        { id: 11, url: require("@/assets/images/Gradiz.jpg") },
        // { id: 12, url: require("@/assets/images/Putovaobih.png") },
        // { id: 13, url: require("@/assets/images/ApDigital.jpg") },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/variables.scss";

.widget-container {
  width: 70%;
  margin: auto;
  margin-bottom: 5%;
  height: 55vh;
  display: flex;
  justify-content: center;
  gap: 50px;

  .widget-box {
    width: 100%;
    height: 100%;
    position: relative;

    .widget-frame {
      position: absolute;
      width: 52%;
      height: 100%;
      border: 23px solid rgba(45, 138, 161, 0.8);
      // border: 23px solid rgb(255, 97, 0);
      top: 0;
      left: 7%;
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
  // background-color: rgb(248, 248, 248);
  width: 100%;
  margin: auto;
  padding: 50px 0px;
  margin-bottom: 10%;

  // align-items: center;
  .cube-content {
    width: 70%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
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
  }

  svg {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
  @media screen and (max-width: 567px) {
    padding: 10px;
    .cube-content {
      width: 90%;
      flex-direction: column;
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
.items {
  position: relative;
  z-index: 1;
  padding: 50px 0px;

  .items-container {
    width: 75%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    // gap: 10px;
    // margin-left: 2%;
    // margin-right: auto;
  }
  .square {
    width: 370px;
    height: 350px;

    background-color: rgba(45, 138, 161, 0.8);
    position: absolute;
    z-index: -1;
    top: -3%;
    right: 2%;
    display: flex;
    justify-content: right;
    padding-right: 1%;
    align-items: center;
    text-align: right;
    h1 {
      color: white;
      width: 70%;
      font-size: 60px;
    }
  }
  .square-2 {
    width: 200px;
    height: 200px;
    background-color: rgb(190, 190, 190);
    position: absolute;
    z-index: -2;
    top: 40%;
    right: 10%;
  }
}

.body {
  margin-top: 7%;
  margin-bottom: 5%;
  // background-color: rgb(241, 241, 241);
}

.testimonial {
  .testimonial-top {
    display: flex;
    width: 70%;
    margin: auto;
    .testimonial-top-item-one {
      width: 100%;
      position: relative;

      .testimonial-box {
        width: 600px;
        height: 600px;
        position: absolute;
        background-color: cornflowerblue;
        padding-top: 15%;
        top: 0%;
        left: 50%;
        transform: translate(-50%, 0%);

        .testimonial-square {
          width: 70px;
          height: 70px;
          position: absolute;
          top: 0;
          right: 0;
          background-color: white;
          transform: rotate(45deg) translate(70%, 0%);
        }
      }
    }
    .testimonial-top-item-two {
      width: 100%;
      padding-left: 5%;
      h1 {
        font-size: 60px;
      }
    }
  }
  .testimonial-bottom {
    width: 100%;
    height: 70vh;
    margin-bottom: 5%;
    background: linear-gradient(
        to right,
        rgb(0, 0, 0, 0.5),
        rgb(0, 0, 0, 0.5),
        rgb(0, 0, 0, 0.5)
      ),
      url("@/assets/images/dms-header.jpg") no-repeat center center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .bottom-flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 70%;
      > div {
        width: 100%;
      }
      h1 {
        margin-top: 45%;
        margin-left: 5%;
        width: 100%;
        font-size: 60px;
      }

      .button-group {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 15%;
        padding-left: 15%;
      }
    }
  }
}

@media screen and (max-width: 567px) {
  .body {
    width: 95%;
    margin: auto;
  }

  .cube-background {
    img {
      width: 400px;
      height: 400px;
    }
  }

  .widget-container {
    width: 100%;
    flex-direction: column;
    height: 100%;
    margin-bottom: 0%;
    .widget-box {
      height: 50vh;
      .widget-frame {
        width: 50%;
        height: 50vh;
        left: 5%;
      }
      .widget-pic {
        width: 74%;
        height: 300px;
      }
    }
  }
  .items {
    .items-container {
      grid-template-columns: repeat(1, 1fr);
      margin: 0;
      width: 100%;
      margin-left: 0%;
    }
    .square {
      position: relative;
      width: 100%;
      height: 100%;
      margin: auto;
      padding: 10px 5px;
      top: 0;
      right: 0;
    }
    .square-2 {
      display: none;
    }
  }

  .testimonial {
    .testimonial-top {
      display: flex;
      flex-direction: column-reverse;
      width: 95%;
      height: 100%;
      margin: auto;
      .testimonial-top-item-one {
        position: relative;
        margin-top: 12%;
        .testimonial-box {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 20px;
          margin-bottom: 5%;
          .testimonial-square {
            // top: -20%;
            top: 0;
            left: 0;
            transform: rotate(45deg) translate(40%, -110%);
          }
        }
      }
      .testimonial-top-item-two {
        position: relative;
        width: 100%;
        padding-left: 5%;
        h1 {
          font-size: 60px;
        }
      }
    }

    .testimonial-bottom {
      width: 95%;
      margin: auto;
      height: 100%;
      padding: 10px;

      .bottom-flex {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        > div {
          width: 100%;
        }
        h1 {
          width: 100%;
          font-size: 60px;
        }

        .button-group {
          transform: translate(-6%, 0);
        }
      }
    }
  }
}

.item {
  display: block;
  width: 100%;
  margin: auto;
}
</style>
