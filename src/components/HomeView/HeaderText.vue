<template>
  <div class="main-text-wrapper">
    <div class="main-text">Mi ne radimo za Vas.</div>
    <div class="secondary-text">Mi radimo sa Vama!</div>
  </div>
</template>
<script>
export default {
  name: "HeaderText",
};
</script>
<style lang="scss" scoped>
.main-text-wrapper {
  display: flex;
  flex-direction: column;
  div {
    font-size: 2em;
    padding: 15px;
  }
  .main-text {
    background-color: #f16822;
    width: 400px;
  }
  .secondary-text {
    background-color: #162250;
  }
}
</style>
