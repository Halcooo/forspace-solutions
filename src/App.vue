//@author Halid Lihovac
<template>
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
import TheSocialIcons from "./components/TheSocialIcons.vue";

export default {
  components: {
    NavigationBar,
    TheFooter,
    Sidenav,
    BaseScrollToTop,
    TheSocialIcons,
  },
  data() {
    return {};
  },
  methods: {
    onHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
<style lang="scss">
@import "./styles/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
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
  font-family: "Poppins", sans-serif;
  overflow-x: hidden !important;
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
  .logo{
      transform:scale(.8)
    }
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
    height: 50px;
  }
}

.nav-contact {
  background-color: rgb(70, 70, 70);
  color: white;
  .track {
    width: 70%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      display: flex;
      justify-content: right;
      align-items: center;
      margin: 0;
      padding: 10px 25px;

      gap: 50px;
    }
    a {
      margin: 0;
      padding: 0;
    }
    svg {
      font-size: 20px;
      margin: 0;
      padding: 0;

      &:hover {
        opacity: 1;
        color: white;
      }
    }

    @media screen and (max-width: 567px) {
      width: 100%;
      display: none;
      ul {
        padding: 5px 10px;
        gap: 30px;
      }
    }
  }
}
.purchase {
  min-height: 50vh;
}
.purchase-img {
  @media screen and (max-width: 567px) {
    height: 100%;
  }
}
.header {
  background-color: #21d4fd;
  background: linear-gradient(19deg, #21d5fdb0 0%, #2137ff9d 100%),
    url("@/assets/images/image-1.png") no-repeat center center/cover;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 567px) {
    background: linear-gradient(19deg, #21d5fdb0 0%, #2137ff9d 100%),
      url("@/assets/images/image-1.png") no-repeat center center/cover;
  }
  div {
    width: 70%;
    padding-left: 2%;
    margin: auto;
    padding-top: 7%;
  }
  h1 {
    font-size: 60px;
  }
}
.content-news {
  width: 70%;
  margin: auto;
  padding-top: 2%;
  padding-left: 2%;
  min-height: 50vh;

  h3 {
    margin-top: 2%;
    margin-bottom: 2%;
    font-size: 25px;
    color: rgb(0, 55, 77);
  }
}
@media screen and (max-width: 567px) {
  .header {
    div {
      width: 95%;
    }
    h1 {
      font-size: 45px;
    }
  }
  .content-news {
    width: 95%;
  }
}
.chip {
  padding: 5px 20px;
  margin-right: 5px;
  background-color: rgb(224, 224, 224);
  display: inline-block;
  border-radius: 50px;
  color: #333;
  margin-bottom: 5%;
  cursor: pointer;
}
</style>
