<template lang="">
  <img
    @click="onHome"
    class="logo"
    alt="Forspace Solutions"
    src="@/assets/svg/logo.svg"
  />

  <nav>
    <router-link to="/">{{ $t("home") }}</router-link>
    <router-link to="/news">{{ $t("news") }}</router-link>
    <router-link to="/about">{{ $t("about") }}</router-link>
    <router-link to="/products">{{ $t("products") }}</router-link>
    <router-link to="/services">{{ $t("services") }}</router-link>
    <router-link to="/forspace-preview">{{ $t("preview") }}</router-link>
    <router-link to="/contact">{{ $t("contact") }}</router-link>
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
  display: flex;
  vertical-align: middle;

  a {
    font-weight: bold;
    color: rgb(202, 202, 202);
    font-size: 1.5em;
    text-decoration: none;
    margin-right: 12px;
    &:hover {
      text-decoration: underline;
    }

    &.router-link-exact-active {
      color: #f16822;
    }
  }
}
.logo {
  justify-self: flex-end;
}
</style>
