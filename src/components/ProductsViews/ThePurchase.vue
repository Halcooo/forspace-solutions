<template lang="">
  <div class="container purchase mt-5">
    <h1 class="text-secondary">{{ $t("products_purchase_header") }}</h1>
    <p>
      {{ $t("products_purchase_text") }}
    </p>
    <img src="@/assets/images/nabava_animacija.gif" alt="" />
  </div>
</template>
<script>
export default {
  name: "ThePurchase",
};
</script>
<style lang="scss" scoped>
.purchase {
  // background: url("@/assets/images/gradient-bg.png") no-repeat center
  //   center/cover;
  display: flex;
  flex-direction: column;
  padding: 30px;
  // background-color: azure;
  border-radius: 2px;
  margin-bottom: 2rem;
  h1 {
    color: white;
  }
}
</style>
