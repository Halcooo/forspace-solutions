<template>
  <Carousel :autoplay="3000" :wrap-around="true" :items-to-show="1">
    <Slide v-for="slide in images" :key="slide">
      <div class="carousel__item">
        <div class="item">
          <img :src="slide.url" alt="logo" />
          <small>
            {{ $t(slide.name) }}
          </small>
        </div>
      </div>
    </Slide>
    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>
<script>
import { Carousel, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
export default {
  name: "BaseSlider",
  components: { Carousel, Slide, Pagination },
  props: { images: { type: Array } },
};
</script>
<style lang="scss" scoped>
.carousel__item {
  width: 90%;
  color: white;
  text-align: left;
  border-radius: 8px;
  padding: 0;
  margin: auto;

  small {
    font-style: italic;
  }
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    cursor: pointer;
  }
  img {
    width: 100px;
    height: 100px;
  }
}

@media only screen and (max-width: 600px) {
  .carousel__item {
    img {
      max-width: 100px;
    }
  }
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
