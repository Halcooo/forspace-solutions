@author Halid Lihovac
<template>
  <Carousel :wrap-around="true" :items-to-show="1">
    <Slide v-for="slide in images" :key="slide.id">
      <div class="carousel__item">
        <img @mousemove="setCurrentSlide(slide.id)" :src="slide.url" alt="logo" :id="slide.id"/>
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
  props: ["images"],
  name: "ServicesSlider",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data(){
  return {
    currentSlide:1,
  }},
  methods:{
    setCurrentSlide(id){
        this.$store.commit('setCurrentSlide', id)
    }
  }
};
</script>
<style lang="scss" scoped>

.carousel__pagination {
  z-index: 21;
  position: absolute;
  bottom: 10%;
  width: 100%;
  border-radius: 50%;
  li {
    button {
      border-radius: 50%;
    }
  }
}
.wrapper {
  height: 100vh;
}
.carousel__item {
  height: 100vh;
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
    background-size: contain;
    object-fit: cover;
   width: 100%;
    height: 100vh;
  }
}




.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
