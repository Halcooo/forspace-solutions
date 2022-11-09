<template lang="">
  <div class="wrapper">
    <div class="container items">
      <router-link to="/products/purchase">Nabava</router-link>
      <router-link to="/products/sales">Prodaja</router-link>
      <router-link to="/products/production">Proizvodnja</router-link>
      <router-link to="/products/warehouse">Skladište</router-link>
      <router-link to="/products/dms">DMS</router-link>
      <router-link to="/products/finance"
        >Finansije & računovodstvo</router-link
      >
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
		background: url('@/assets/images/productscover.jpg') no-repeat center
			center/cover;
		height: 100vh;
		z-index: 0;
		background-attachment: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.row {
		.col-sm {
			z-index: 0;
		}
	}
</style>
