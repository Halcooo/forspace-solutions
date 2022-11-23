//@author Halid Lihovac
<template>
  <div class="cookie">
    <div class="cookie-flex">
      <a href="">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum
        dolor sit amet. Lorem ipsum dolor sit.
      </a>
    </div>
  </div>

  <NavigationBar />
  <router-view />
  <BaseScrollToTop />
  <TheFooter />
</template>
<script>
import NavigationBar from "@/components/NavigationTrack/NavigationBar.vue";
import TheFooter from "@/components/TheFooter.vue";
import Sidenav from "@/components/NavigationTrack/Sidenav.vue";
import BaseScrollToTop from "./components/BaseScrollToTop.vue";

export default {
  components: {
    NavigationBar,
    TheFooter,
    Sidenav,
    BaseScrollToTop,
  },
  data() {
    return {};
  },
  methods: {
    onHome() {
      this.$router.push({ path: "/" });
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
@import "./styles/variables.scss";
// @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
// @font-face {
// 	font-family: 'Raleway';
// 	src: local('Raleway'),
// 		url('@/assets/fonts/Raleway-Medium.ttf') format('truetype');
// }
.show {
  display: block;
  background-color: red;
}
html {
  scroll-behavior: smooth;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Oswald", sans-serif;

  color: $primary-color;
}
a {
  text-decoration: none;
}
ul {
  li {
    list-style: none;
  }
}

h1 {
  color: $primary-color;
}
@media screen and (max-width: 560px) {
}
.carousel__pagination-button::after {
  display: block;
  content: "";
  border: 1px solid white !important;
  width: 12px !important;
  height: 12px !important;
  border-radius: 50% !important;
  background-color: #ffffff00 !important;
}
.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
  background-color: white !important;
}

.cookie {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  text-align: center;
  a {
    color: rgb(255, 98, 0);
    width: 100%;
    text-decoration: underline;
  }

  @media screen and (max-width: 567px) {
    font-size: 12px;
    // padding: 0px 5px;
    height: 50px;
  }
}
</style>
