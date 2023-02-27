<template>
  <div class="header">
    <div>
      <h2>{{ $t("about_us_news_link_one") }}</h2>
    </div>
  </div>
  <div class="mt-5 mb-5 ps-2">
      <router-link to="/about">
        <font-awesome-icon icon="fa-solid fa-chevron-left" />
        <span> {{ $t('back') }}</span>
      </router-link>
    </div>
</template>
<script>
export default {
  name: "ErpAllInOne",
};
</script>
<style lang="scss" scoped></style>
