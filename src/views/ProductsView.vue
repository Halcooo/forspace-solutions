<template lang="">
  <div class="wrapper">
    <div>
      <h1>Proizvodi</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil eum
        assumenda reiciendis, autem necessitatibus eos veniam iure, soluta
        voluptate iste id sunt dolorum illum eligendi odit et mollitia ratione
        fuga?
      </p>
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
      rgba(8, 40, 67, 0.6),
      rgba(8, 40, 67, 0.6),
      rgba(8, 40, 67, 0.6)
    ),
    url("@/assets/images/product_item_2.jpg") no-repeat center center/cover;
  // background-color: rgb(182, 182, 169);
  color: white;
  height: 50vh;
  display: flex;

  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 70px;
    color: white;
  }
}

.content {
  width: 100%;
  background-color: rgb(247, 247, 247);
  height: 80px;
  // background-color: rgb(231, 231, 231);
  margin-bottom: 5%;
}
.items {
  width: 70%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 0px 40px;
  border-radius: 5px;
  a {
    padding: 20px 45px;

    color: gray;
  }

  .router-link-active {
    background-color: rgb(172, 172, 172);
    color: white;
    // border-radius: 50px;
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
      // border-bottom: 1px solid #25435b;
      border-radius: 50px;
      // background-color: rgb(238, 238, 238);
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
