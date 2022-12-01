<template lang="">
  <div class="container purchase">
    <h1 class="text-secondary">{{ $t("products_warehouse_heading") }}</h1>
    <h4>{{ $t("products_warehouse_heading_two") }}</h4>
    <p>
      {{ $t("products_warehouse_text_one") }}
    </p>
    <p>
      <b>{{ $t("products_warehouse_bold") }}</b>
    </p>

    <p>
      {{ $t("products_warehouse_text_two") }}
    </p>
    <p>
      {{ $t("products_warehouse_text_three") }}
    </p>
    <p>
      {{ $t("products_warehouse_text_four") }}
    </p>
    <p>
      {{ $t("products_warehouse_text_five") }}
    </p>
    <p>
      {{ $t("products_warehouse_text_six") }}
    </p>
    <p>
      {{ $t("products_warehouse_text_seven") }}
    </p>
  </div>
</template>
<script>
export default {
  name: "TheWarehouse",
};
</script>
<style lang="scss" scooped>
h1 {
  color: white;
}
</style>
