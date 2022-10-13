<template>
  <div class="nav-wrapper">
    <img
      @click="onHome"
      class="logo"
      alt="Forspace Solutions"
      src="@/assets/svg/logo.svg"
    />

    <NavigationBar></NavigationBar>
  </div>
  <router-view />
</template>
<script>
import NavigationBar from "@/components/NavigationBar.vue";
export default {
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

body {
  padding: 0px;
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary-blue;
}
.logo {
  width: 15%;
  &:hover {
    cursor: pointer;
  }
}
.nav-wrapper {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
}
h1 {
  color: $primary-blue;
}
</style>
