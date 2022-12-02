<template lang="">
  <div class="purchase">
    <!-- <img src="@/assets/images/nabava_animacija.gif" alt="" /> -->
    <div class="purchase-img">
      <h1 class="text-light">{{ $t("products_purchase_header") }}</h1>
      <p class="text-light">
        {{ $t("products_purchase_text") }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ThePurchase",
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
    background: linear-gradient(
        to right,
        rgba(8, 40, 67, 0.7),
        rgba(8, 40, 67, 0.7),
        rgba(8, 40, 67, 0.7)
      ),
      url("@/assets/images/purchase.jpg") no-repeat center center/cover;

    h1 {
      font-size: 60px;
      color: white;
      margin-bottom: 4%;
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
