<template>
  <div class="cover row">
    <div class="navigation">
      <nav>
        <router-link to="/purchase">Nabava</router-link>
        <router-link to="/sales">Prodaja</router-link>
        <router-link to="/production">Proizvodnja</router-link>
        <router-link to="/warehouse">Skladište</router-link>
        <router-link to="/dms">DMS</router-link>
        <router-link to="/finance">Finansije & računovodstvo</router-link>
        <router-link to="/human-resources">HR & plaće</router-link>
      </nav>
    </div>
  </div>
  <router-view></router-view>
</template>
<script>
export default {
  methods: {
    display(param) {
      this.$router.push(param);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/variables.scss";

.cover {
  background-image: url("@/assets/images/purchase-cover-image.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 50vh;
  z-index: 1;
}
nav {
  background-color: rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 25px;
  display: flex;
  vertical-align: middle;
  justify-content: center;
  align-items: flex-end;
  max-height: fit-content;
  a {
    font-weight: lighter;
    color: white;
    font-size: 1.35em;
    text-decoration: none;
    margin-right: 17px;
    &:hover {
      text-decoration: underline;
    }

    &.router-link-exact-active {
      color: $secondary-color;
    }
  }
}
.navigation {
  display: flex;
  vertical-align: bottom;
  justify-content: center;
}
</style>
