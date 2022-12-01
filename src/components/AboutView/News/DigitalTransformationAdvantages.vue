<template>
  <div class="header">
    <div>
      <h1>{{ $t("about_us_next_overlay_left_heading") }}</h1>
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
  // background-color: rgb(255, 227, 117);

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
  h1 {
    font-size: 60px;
  }
}
.content {
  min-height: 50vh;
}
</style>
