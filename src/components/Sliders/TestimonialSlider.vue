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
  name: "TestimonialSlider",
  components: { Carousel, Slide, Pagination },
  props: { images: { type: Array } },
};
</script>
<style lang="scss" scoped>
.carousel__item {
  width: 90%;
  color: white;

  //   text-align: left;
  border-radius: 8px;
  padding: 0;
  margin: auto;
  margin-top: 15%;
  small {
    font-style: italic;
  }
  .item {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  &:hover {
    cursor: pointer;
  }
  img {
    display: flex;

    margin: auto;
    width: 200px;
    height: 200px;
    @media screen and (max-width: 567px) {
      width: 400px;
    }
  }
}
.carousel__pagination {
  margin: 0;
  margin-top: 5%;
  padding: 0;
}

@media only screen and (max-width: 600px) {
  .carousel__item {
    img {
      max-width: 250px;
    }
  }
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
