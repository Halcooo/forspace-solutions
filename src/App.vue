//@author Halid Lihovac
<template>
  <div class="nav-wrapper"
  data-aos="fade-in"
    data-aos-duration="1500"
    data-aos-ease="ease">
    <NavigationBar></NavigationBar>
  </div>
  <router-view />
<TheFooter></TheFooter>
</template>
<script>
import NavigationBar from "@/components/NavigationBar.vue";
import TheFooter from "@/components/TheFooter.vue"
import AOS from 'aos'
export default {
  mounted() {
    AOS.init()
  },
  components: {
    NavigationBar,
    TheFooter,
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
@font-face {
  font-family: "Raleway";
  src: local("Raleway"),
   url('@/assets/fonts/Raleway-Medium.ttf') format("truetype");
}
body {
  background-color: rgba(248, 248, 255, 0.75);
  padding: 0px;
  margin: 0px;
  font-size: 1.3em;
}

#app {
  font-family: Raleway, Helvetica, Arial, sans-serif;

  text-align: center;
  color: $primary-color;
}
.logo {
  width: 15%;
  &:hover {
    cursor: pointer;
  }
}
.nav-wrapper {
  position:sticky;
  padding-left: 25px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
}
h1 {
  color: $primary-color;
}
</style>
