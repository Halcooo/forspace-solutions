<template lang="">
  <div class="container">
    <div class="purchase-img">
      <h2>{{ $t("products_sales_heading") }}</h2>
      <h3>{{ $t("products_sales_header") }}</h3>
      <p>
        {{ $t("products_sales_text") }}
      </p>
    </div>
    <div class="container text-center mb-4">
      <img class="img-fluid" src="@/assets/images/saless.png" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "TheSales",
};
</script>
<style lang="scss" scoped>
h2 {
  color: #25435b;
}
</style>
