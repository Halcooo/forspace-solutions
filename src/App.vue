<template>
  <div class="nav-wrapper">
    <img class="logo" alt="Forspace Solutions" src="@/assets/svg/logo.svg" />
    <nav>
      <router-link to="/">{{ $t("home") }}</router-link> |
      <router-link to="/news">{{ $t("news") }}</router-link> |
      <router-link to="/about">{{ $t("about") }}</router-link> |
      <router-link to="/products">{{ $t("products") }}</router-link> |
      <router-link to="/services">{{ $t("services") }}</router-link> |
      <router-link to="/forspace-preview">{{ $t("preview") }}</router-link> |
      <router-link to="/contact">{{ $t("contact") }}</router-link> |
      <router-link to="/promo">{{ $t("promo") }}</router-link>
    </nav>
  </div>
  <router-view />
</template>
<style lang="scss">
@import "./styles/variables.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary-blue;
}
.logo {
  width: 15%;
}
.nav-wrapper {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 2px -2px gray;
}
nav {
  padding: 50px;

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
  h1 {
    color: $primary-blue;
  }
}
</style>
