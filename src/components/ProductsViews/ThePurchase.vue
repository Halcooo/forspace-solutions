<template lang="">
  <div class="container">
    <div class="purchase-img">
      <h2 class="">{{ $t("products_purchase_header") }}</h2>
      <p class="">
        {{ $t("products_purchase_text") }}
      </p>
    </div>
    <div class="contianer text-center mb-4">
      <img class="img-fluid" src="@/assets/images/nabava_animacija.gif" alt="animation" />
    </div>
  </div>
</template>
<script>
export default {
  name: "ThePurchase",
};
</script>
<style lang="scss" scoped>
h2{
  color: #25435b;
}</style>
