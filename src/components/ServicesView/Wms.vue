<template>
  <div class="header">
    <div>
      <h2>{{ $t("about_us_news_link_one") }}</h2>
    </div>
  </div>
  <div class="content"></div>
</template>
<script>
export default {
  name: "ErpAllInOne",
};
</script>
<style lang="scss" scoped>
.header {
  background: url("@/assets/images/product-cover.png") no-repeat center
    center/cover;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 70%;
    padding-left: 2%;
    margin: auto;
    padding-top: 7%;
  }
}
.content {
  min-height: 50vh;
}
</style>
