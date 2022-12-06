<template lang="">
  <div class="purchase">
    <div class="purchase-img">
      <h1>{{ $t("products_production_header_one") }}</h1>
      <h3>{{ $t("products_production_header_two") }}</h3>
      <p class="">{{ $t("products_production_text") }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheProduction",
};
</script>
<style lang="scss" scoped>
.purchase {
  width: 70%;
  margin: auto;
  .purchase-img {
    width: 100%;
    height: 500px;
    margin-bottom: 4%;
    padding: 20px;
    color: white;

    background: linear-gradient(
        to right,
        rgba(123, 39, 39, 0.6),
        rgba(123, 39, 39, 0.6),
        rgba(123, 39, 39, 0.6)
      ),
      url("@/assets/images/purchase.jpg") no-repeat center center/cover;

    h1 {
      font-size: 60px;

      margin-bottom: 2%;
    }
    h3 {
      font-size: 35px;
      margin-bottom: 4%;
    }
    p {
      font-size: 20px;
    }
    @media screen and (max-width: 567px) {
      height: 100%;
    }
  }
}
</style>
