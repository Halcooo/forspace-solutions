@author Halid Lihovac
<template lang="">
  <div class="arrow-wrap">
    <font-awesome-icon
      v-if="show"
      data-aos="fade"
      @click="handleScroll"
      icon="fa-solid fa-arrow-up"
    />
  </div>
</template>
<script>
export default {
  name: "BaseScrollToTop",
  data() {
    return {
      scrollPosition: 500,
      show: false,
    };
  },
  created() {
    window.onscroll = this.followScroll;
  },
  methods: {

    followScroll() {
      let currentScrollPosition = window.scrollY;
      if (currentScrollPosition > this.scrollPosition) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    handleScroll() {
      scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>
<style lang="scss" scoped>
.arrow-wrap {
  border-radius: 50%;
  background-color: white;
  width: 30px;
}
div {
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 20;
  &:hover {
    cursor: pointer;
  }
}
</style>
