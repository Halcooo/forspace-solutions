//@author Halid Lihovac
<template>
  <div class="nav-wrapper">
    <NavigationBar></NavigationBar>
  </div>
  <router-view />
</template>
<script>
import NavigationBar from "@/components/NavigationBar.vue";
import AOS from 'aos'
export default {
  mounted() {
    AOS.init()
  },
  components: {
    NavigationBar,
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
  padding: 0px;
  margin: 0px;
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
  padding-left: 25px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  width: 95%;
}
h1 {
  color: $primary-color;
}
</style>
