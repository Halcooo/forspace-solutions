<template>
  <div
    class="wrapper"
    data-aos="fade-in"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1000"
  >
    >
    <div class="header-text container">
      <HeaderText></HeaderText>
    </div>
    <div
      class="demo-full-container"
      data-aos="flip-right"
      data-aos-duration="1500"
    >
      <RouterLink to="/contact"> Želim prezentaciju</RouterLink>
    </div>
  </div>
</template>
<script>
import HeaderText from "@/components/HomeView/HeaderText.vue";

export default {
  name: "HeaderHome",
  components: {
    HeaderText,
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  background: url(@/assets/images/futuristic-smart-city-with-5g-global-network-technology.jpg)
    center right no-repeat;
  background-color: #263b53;
  height: 90vh;
  top: 0px;
  background-size: cover;
}
.header-text {
  display: flex;
  position: absolute;
  color: white;
  align-items: center;
  justify-content: center;
  top: 50%;
  animation: 1s ease-out 0s 1 slideInLeft;
}
@keyframes slideInLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}
.demo-full-container {
  bottom: 30px;
  right: 30px;
  background-color: #f16822;
  padding: 7px;
  border-radius: 5px;
  right: 5%;
  bottom: 15%;
  position: absolute;
  a {
    text-decoration: none;
    color: white;
    font-size: 1.5em;
    &:hover {
      color: #25435b;
    }
  }
  &:hover {
    cursor: pointer;
    color: #25435b;
  }
}
</style>
