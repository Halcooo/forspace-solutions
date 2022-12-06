<template lang="">
  <div class="container purchase">
    <h1 class="text-secondary">{{ $t("products_dms_heading_one") }}</h1>
    <h3>{{ $t("products_dms_heading_two") }}</h3>
    <p>
      {{ $t("products_dms_text_one") }}
    </p>
    <p>
      {{ $t("products_dms_text_two") }}
    </p>

    <div class="col-12">
      <div v-for="product in products" :key="product" class="d-flex">
        <div><img src="@/assets/images/check.png" alt="check" /></div>
        <div>
          <h3>{{ $t(product.text) }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheDms",
  data() {
    return {
      products: [
        { text: "products_row_one" },
        { text: "products_row_two" },
        { text: "products_row_three" },
        { text: "products_row_four" },
        { text: "products_row_five" },
        { text: "products_row_six" },
        { text: "products_row_seven" },
        { text: "products_row_eight" },
        { text: "products_row_nine" },
      ],
    };
  },
};
</script>
<style lang="scss" scooped>
img {
  margin-right: 8px;
}
</style>
