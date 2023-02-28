<template lang="">
  <div class="wrapper">
    <div>
      <h2>Proizvodi</h2>
    </div>
  </div>
  <div class="content">
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
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
.wrapper {
  background: linear-gradient(
      to right,
      rgba(2, 21, 37, 0.8),
      rgba(8, 40, 67, 0.776),
      rgba(50, 138, 210, 0.6)
    ),
    url("@/assets/images/product_item_2.jpg") no-repeat center center/cover;
  color: white;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2 {
    color: white;
  }
}
.content {
  width: 100%;
  background-color: rgb(247, 247, 247);
  height: 80px;
  margin-bottom: 5%;
  background: linear-gradient(
      to right,
      rgb(2, 21, 37),
      rgba(8, 40, 67, 0.776),
      rgba(50, 138, 210, 0.806)
    );
}
.items {
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px 40px;
  border-radius: 5px;
  a {
    padding: 10px 15px;
    color:white;
  }

  .router-link-active {
    background-color: rgba(191, 189, 189, 0.666);
    color: white;
  }
}
@media only screen and (max-width: 567px) {
  .content {
    height: 100%;
  }
  .items {
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    width: 100%;
    padding: 10px;
    a {
      text-align: center;
      padding: 10px;
    }
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
