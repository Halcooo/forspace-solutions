@author Halid Lihovac
<template>
  <Carousel :wrap-around="true" :items-to-show="1" v-model="currentSlide">
    <Slide v-for="slide in images" :key="slide.id">
      <div class="carousel__item">
        <div class="overlay">
          <div>
            <h1>{{ $t(slide.name) }}</h1>
            <p>{{ $t(slide.text) }}</p>
          </div>
        </div>

        <img
          @mousedown="pressedMouse = true"
          @mouseup="pressedMouse = false"
          :class="{ grabbed: pressedMouse }"
          :src="slide.url"
          alt="logo"
          :id="slide.id"
        />
      </div>
    </Slide>
    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { Carousel, Pagination, Slide, Navigation } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default {
  props: ["images"],
  name: "ServicesSlider",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      routes: { route: "/products/sales", name: "mobile" },
      pressedMouse: false,
      currentSlide: 0,
    };
  },
  watch: {
    currentSlide: function (val) {
      this.setCurrentSlide(val);
    },
  },
  methods: {
    setCurrentSlide(id) {
      this.$store.commit("setCurrentSlide", id);
    },
  },
  mounted() {
    this.setCurrentSlide(this.currentSlide);
  },
};
</script>
<style lang="scss" scoped>
h1 {
  // padding: 7px;
  font-size: 60px;
  color: white;
  margin-bottom: 5%;
  // background-color: rgba(255, 253, 253, 0.8);
  // border-radius: 5px;
  // box-shadow: rgba(255, 253, 253, 1) 0px 40px 100px 4px;
}
.carousel__pagination {
  position: absolute;
  bottom: 5%;
  width: 100%;
  border-radius: 50%;

  li {
    background-color: white !important;
    button {
      border-radius: 50%;
    }
  }
}
//
.grabbed {
  cursor: grabbing !important;
}
.carousel__item {
  height: 50vh;
  width: 100%;
  color: white;
  // font-size: 20px;
  border-radius: 8px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .overlay {
    position: absolute;
    width: 100%;

    height: 100%;
    background-color: rgba(8, 40, 67, 0.6);
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      p {
        font-size: 30px;
      }
    }
  }
  img {
    width: 100% !important;
    height: 100%;
    cursor: grab;
  }
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
