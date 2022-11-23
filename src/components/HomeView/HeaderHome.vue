@author Halid Lihovac
<template>
  <div class="landing-page" style="position: relative; z-index: 1">
    <div class="div">
      <div>
        <div class="head-1">
          <h1>Mi ne radimo za Vas.</h1>
        </div>
        <div class="head-2">
          <h1>Mi radimo sa Vama!</h1>
        </div>
        <!-- <div class="head-3">
          <BaseButton :to="routes.route" :name="routes.name" />
        </div> -->
      </div>
    </div>
  </div>
  <div class="nav">
    <div class="middle">
      <div class="left">
        <ul>
          <li>Overview</li>
          <li>Fatures</li>
          <li>Specs</li>
          <li>Testimonials</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div class="right">
        <router-link to="">Želim prezentaciju</router-link>
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
  height: 50vh;
  @media screen and (max-width: 567px) {
    height: 70vh;
  }
  background: linear-gradient(
      to bottom,
      rgba(62, 113, 255, 0.349),
      rgba(100, 149, 255, 0.233),
      rgba(0, 0, 0, 0.308)
    ),
    url("@/assets/images/productscover.jpg") no-repeat center center/cover;

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
    }
  }
  @media screen and (max-width: 567px) {
  }
}

.nav {
  height: 80px;
  background-color: rgb(231, 231, 231);

  .middle {
    width: 75%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      width: 40%;
      height: 100%;
      padding-left: 2%;
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        li {
          padding: 20px 40px;
          border-radius: 2px;
          color: rgb(117, 117, 117);
          transition: 0.2s;
          &:hover {
            background-color: gray;
            color: white;
            cursor: pointer;
          }
        }
      }
    }
    .right {
      width: 20%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      padding-right: 1%;
      a {
        padding: 20px 40px;
        border: 1px solid gray;
        border-radius: 2px;
        color: gray;
        transition: 0.3s;
        &:hover {
          background-color: gray;
          color: white;
        }
      }
    }
  }
}
</style>
