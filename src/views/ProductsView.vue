<template lang="">
  <div class="wrapper">
    <div class="items">
      <router-link to="/products/purchase">{{ $t("purchase") }}</router-link>
      <router-link to="/products/sales">{{ $t("sales") }}</router-link>
      <router-link to="/products/production">{{
        $t("production")
      }}</router-link>
      <router-link to="/products/warehouse">{{ $t("warehouse") }}</router-link>
      <router-link to="/products/dms">{{ $t("dms") }}</router-link>
      <router-link to="/products/finance">{{ $t("finance") }}</router-link>
      <router-link to="/products/human-resources">{{ $t("hr") }}</router-link>
    </div>
  </div>
  <div class="content">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.wrapper {
  background: url("@/assets/images/productscover.jpg") no-repeat center/cover;
  height: 40vh;
  z-index: 0;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  vertical-align: bottom;
}
.purchase {
  background: url("@/assets/images/gradient-bg.png") no-repeat center
    center/cover;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: azure;
  border-radius: 2px;
  margin-bottom: 2rem;
  margin-top: 10vh;
}
.row {
  .col-sm {
    z-index: 0;
  }
}
a {
  color: #25435b;
  &:hover {
    color: black;
  }
}
.router-link-active {
  color: #f16822;
}
.items {
  width: 90%;
  background: url("@/assets/images/gradient-bg.png") no-repeat center
    center/cover;
  display: flex;
  padding: 30px;
  justify-content: space-between;
  background-color: azure;
  border-radius: 2px;
  transform: translate(0%, 70%);
  margin-bottom: 2rem;
  box-shadow: rgba(63, 73, 73, 0.45) 0px 5px 15px;
  box-shadow: rgba(199, 199, 199, 0.45) 0px 5px 15px;
}
@media only screen and (max-width: 600px) {
  .items {
    flex-direction: column;
    width: 100%;
    transform: translate(0px, 0px);
    background: azure;
  }
  a {
    text-align: center;
    border-bottom: 1px solid #25435b;
    padding: 2px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
