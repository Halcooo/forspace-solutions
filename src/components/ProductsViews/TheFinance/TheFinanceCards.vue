<template lang="">
  <div class="container">
    <div class="fixed-assets">
      <div class="container wrap">
        <div v-for="image in images" class="d-flex img-wrap">
          <img :src="image.url" alt="image" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheFinanceCards",
  data() {
    return {
      eng: false,
      bh: false,
    };
  },
  computed: {
    images() {
      if (this.$i18n.locale == "bs") {
        return [
          { id: 1, url: require("@/assets/images/card-1-bh.png") },
          { id: 2, url: require("@/assets/images/card-2-bh.png") },
          { id: 3, url: require("@/assets/images/card-3-bh.png") },
          { id: 4, url: require("@/assets/images/card-4-bh.png") },
          { id: 5, url: require("@/assets/images/card-5-bh.png") },
          { id: 6, url: require("@/assets/images/card-6-bh.png") },
        ];
      } else {
        return [
          { id: 1, url: require("@/assets/images/card-1.png") },
          { id: 2, url: require("@/assets/images/card-2.png") },
          { id: 3, url: require("@/assets/images/card-3.png") },
          { id: 4, url: require("@/assets/images/card-4.png") },
          { id: 5, url: require("@/assets/images/card-5.png") },
          { id: 6, url: require("@/assets/images/card-6.png") },
        ];
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.img-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
}

.wrap {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}
img {
  max-width: 400px;
}
</style>
