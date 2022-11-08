<template lang="">
  <div class="wrapper">
    <div class="container items">
      <router-link to="/products/purchase">Nabava</router-link>
      <router-link to="/products/sales">Prodaja</router-link>
      <router-link to="/products/production">Proizvodnja</router-link>
      <router-link to="/products/warehouse">Skladište</router-link>
      <router-link to="/products/dms">DMS</router-link>
      <router-link to="/products/finance">Finansije & računovodstvo</router-link>
      <router-link to="/products/human-resources">HR & plaće</router-link>
    </div>
  </div>
  <div class="content">
	<router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.wrapper {
  background-image: url("@/assets/images/productscover.jpg");
  height: 70vh;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  padding-top: 200px;
}
.items{
	display:flex;
	flex-direction: column;
}
</style>
