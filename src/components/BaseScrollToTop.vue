@author Halid Lihovac
<template>
  <div class="arrow-wrap" v-if="show" @click="handleScroll">
    <font-awesome-icon icon="fa-solid fa-arrow-up" />
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
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  border-radius: 50%;
  background-color: white;
  color: #25435b;
  width: 35px;
  height: 35px;
  border: 2px solid #25435b;
  transition: 1s ease-in-out;
  &:hover {
    border: 2px solid #25435b;
    color: #25435b;
    transform: scale(1.1);
  }
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
