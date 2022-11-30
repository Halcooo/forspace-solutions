<template lang="">
  <div class="container purchase mt-5">
    <h1 class="text-secondary">{{ $t("products_production_header_one") }}</h1>
    <h3 class="text-dark">{{ $t("products_production_header_two") }}</h3>
    <p class="mt-4">{{ $t("products_production_text") }}</p>
  </div>
</template>
<script>
export default {
  name: "TheProduction",
};
</script>
<style lang="scss" scoped>
h1 {
  color: white;
}
</style>
