<template lang="">
  <div class="container purchase">
    <div class="purchase-img">
      <h1>{{ $t("products_sales_heading") }}</h1>
      <h3>{{ $t("products_sales_header") }}</h3>
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
.purchase {
  width: 70%;
  margin: auto;
  .purchase-img {
    width: 100%;
    height: 500px;
    margin-bottom: 5%;
    padding: 20px;
    color: white;
    background: linear-gradient(
        to right,
        rgba(8, 67, 59, 0.7),
        rgba(8, 67, 59, 0.7),
        rgba(8, 67, 59, 0.7)
      ),
      url("@/assets/images/purchase-2.jpg") no-repeat center center/cover;

    h1 {
      font-size: 60px;

      margin-bottom: 2%;
    }
    h3 {
      margin-bottom: 2%;
    }
    p {
      font-size: 25px;
    }
    @media screen and (max-width: 567px) {
      height: 100%;
    }
  }
}
</style>
