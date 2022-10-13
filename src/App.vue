<template>
  <div class="nav-wrapper">
    <img class="logo" alt="Forspace Solutions" src="@/assets/svg/logo.svg" />
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/news">News</router-link> |
      <router-link to="/about">About us</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/services">Services</router-link> |
      <router-link to="/forspace-preview">Preview</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/promo">Promo</router-link>
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
