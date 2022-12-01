<template lang="">
  <div class="container purchase">
    <div class="purchase-img">
      <h1>{{ $t("products_sales_header") }}</h1>
      <p>
        {{ $t("products_sales_text") }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheSales",
};
</script>
<style lang="scss" scoped>
.purchase-img {
  width: 100%;
  height: 500px;
  margin-bottom: 5%;
  padding: 20px;
  background: linear-gradient(
      to right,
      rgba(8, 67, 59, 0.8),
      rgba(8, 67, 59, 0.8),
      rgba(8, 67, 59, 0.8)
    ),
    url("@/assets/images/purchase-2.jpg") no-repeat center center/cover;

  h1 {
    font-size: 60px;
    color: white;
    margin-bottom: 4%;
  }
  p {
    color: white;
    font-size: 25px;
  }
  @media screen and (max-width: 567px) {
    height: 100%;
  }
}
</style>
