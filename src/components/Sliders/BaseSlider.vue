@author Halid Lihovac
<template>
  <Carousel :autoplay="3000" :wrap-around="true" :items-to-show="4">
    <Slide v-for="slide in images" :key="slide">
      <div class="carousel__item">
        <img :src="slide.url" alt="logo" />
      </div>
    </Slide>
    <template #addons>
      <!-- <Pagination /> -->
    </template>
  </Carousel>
</template>

<script>
import { Carousel, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default {
  props: ["images"],
  name: "BaseSlider",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 200px;
}
.carousel__pagination-item {
  background-color: blue !important;
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  color: white;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  img {
    max-width: 200px;
  }
}

@media only screen and (max-width: 600px) {
  .carousel__item {
    img {
      max-width: 100px;
    }
  }
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
