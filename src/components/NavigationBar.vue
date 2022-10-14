<template lang="">
  <nav>
    <router-link to="/">{{ $t("home") }}</router-link> |
    <router-link to="/news">{{ $t("news") }}</router-link> |
    <router-link to="/about">{{ $t("about") }}</router-link> |
    <router-link to="/products">{{ $t("products") }}</router-link> |
    <router-link to="/services">{{ $t("services") }}</router-link> |
    <router-link to="/forspace-preview">{{ $t("preview") }}</router-link> |
    <router-link to="/contact">{{ $t("contact") }}</router-link> |
    <router-link to="/promo">{{ $t("promo") }}</router-link>
    <DropBar></DropBar>
  </nav>
</template>
<script>
import DropBar from "@/components/DropBar.vue";
export default {
  name: "NavigationBar",
  components: { DropBar },
};
</script>
<style lang="scss" scoped>
nav {
  padding: 25px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
