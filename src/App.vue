<template>
  <div class="nav-wrapper">
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
  margin-bottom: 15px;
}
h1 {
  color: $primary-color
  ;
}
</style>
