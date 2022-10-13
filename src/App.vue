<template>
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

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  h1 {
    color: $primary-blue;
  }
}
</style>
