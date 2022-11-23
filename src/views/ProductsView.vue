<template lang="">
  <div class="wrapper">
    <h1>Products</h1>
    <small
      >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil eum
      assumenda reiciendis, autem necessitatibus eos veniam iure, soluta
      voluptate iste id sunt dolorum illum eligendi odit et mollitia ratione
      fuga?</small
    >
    <div class="content">
      <!-- <div class="items">
      <router-link to="/products/purchase">{{ $t("purchase") }}</router-link>
      <router-link to="/products/sales">{{ $t("sales") }}</router-link>
      <router-link to="/products/production">{{
        $t("production")
      }}</router-link>
      <router-link to="/products/warehouse">{{ $t("warehouse") }}</router-link>
      <router-link to="/products/dms">{{ $t("dms") }}</router-link>
      <router-link to="/products/finance">{{ $t("finance") }}</router-link>
      <router-link to="/products/human-resources">{{ $t("hr") }}</router-link>
    </div> -->
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
.wrapper {
  background-color: rgb(59, 73, 112);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-top: 7%;
    font-size: 40px;
    color: white;
  }
}
.purchase {
  // background: url("@/assets/images/gradient-bg.png") no-repeat center
  //   center/cover;

  padding: 30px;

  border-radius: 2px;
  margin-bottom: 2rem;
  margin-top: 10vh;
}
.row {
  .col-sm {
    z-index: 0;
  }
}

.items {
  width: 70%;
  margin: auto;
  margin-top: 0%;

  display: flex;
  padding: 20px 30px;
  justify-content: space-between;
  margin-bottom: 2rem;

  border-radius: 5px;
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
