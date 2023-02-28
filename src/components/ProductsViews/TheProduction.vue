<template lang="">
  <div class="container">
    <div class="purchase-img mb-4">
      <h2 class="mb-4">{{ $t("products_production_header_one") }}</h2>
      <h3 class="mb-4">{{ $t("products_production_header_two") }}</h3>
      <p class="spacing">{{ $t("products_production_text") }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheProduction",
};
</script>
<style lang="scss" scoped>
 h2{
  color: #25435b;
 }
 .spacing{
  margin-bottom:200px;
 }
</style>
