<template lang="">
  <div class="wrapper">
    <ServicesSlider :images="images"></ServicesSlider>
  </div>
  <div class="content">
    <div class="services-container mt-5">
      <div class="heading">
        <h3 class="mb-5 text-center text-secondary">
          {{ $t("services_container_header") }}
        </h3>
        <Line />
        <div
          class="d-flex gap-5 col-12 justify-content-center align-items-center m-auto mt-5"
        >
          <div
            v-for="icon in icons"
            :key="icon"
            class="bg-light text-center card-body w-100 p-2"
          >
            <font-awesome-icon :icon="icon.icon_text" />
            <h3>{{ $t(icon.text) }}</h3>
            <p>{{ $t(icon.p) }}</p>
          </div>
        </div>
      </div>
      <div class="grid mb-5">
        <div v-for="div in divs" :key="div" class="first" :class="div.class">
          <div class="box">
            <h3 class="text-center">{{ $t(div.text) }}</h3>
            <p class="red-line"></p>
            <p class="text-center">
              {{ $t(div.p) }}
            </p>
            <div class="flex">
              <router-link class="read-more" :to="div.to"
                >Read More</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Line from "@/particles/Line.vue";
import ServicesSlider from "@/components/Sliders/ServicesSlider.vue";

export default {
  data() {
    return {
      icons: [
        {
          text: "services_icon_1",
          p: "services-_icon_text_1",
          icon_text: "fa-solid fa-desktop",
        },
        {
          text: "services_icon_2",
          p: "services-_icon_text_2",
          icon_text: "fa-solid fa-mobile",
        },
        {
          text: "services_icon_3",
          p: "services-_icon_text_3",
          icon_text: "fa-solid fa-server",
        },
      ],
      divs: [
        {
          class: "erp",
          text: "services_grid_div1_header",
          p: "services_grid_div1_text",
          to: "/erp-all-in-one",
        },
        {
          class: "dms",
          text: "services_grid_div2_header",
          p: "services_grid_div2_text",
          to: "/products/dms",
        },
        {
          class: "wms",
          text: "services_grid_div3_header",
          p: "services_grid_div3_text",
          to: "/products/warehouse",
        },
        {
          class: "systemp",
          text: "services_grid_div4_header",
          p: "services_grid_div4_text",
          to: "/products/finance",
        },
        {
          class: "solution",
          text: "services_grid_div5_header",
          p: "services_grid_div5_text",
          to: "signs-your-business-needs-advanced-software-solution",
        },
      ],
      images: [
        {
          name: "services_slider_heading_1",
          url: require("@/assets/images/product_item_1.jpg"),
          text: "services_slider_text_1",
        },
        {
          name: "services_slider_heading_2",
          url: require("@/assets/images/product_item_2.jpg"),
          text: "services_slider_text_2",
        },
        {
          name: "services_slider_heading_3",
          url: require("@/assets/images/purchase-cover-image.png"),
          text: "services_slider_text_3",
        },
      ],
    };
  },
  components: {
    ServicesSlider,

    Line,
  },
  computed: {
    currentSlide() {
      return this.$store.getters.getCurrentSlide;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
.red-line {
  width: 100px;
  padding: 3px;
  background-color: tomato;
  margin: 5px auto 5px auto;
}

.nav-text {
  position: absolute;
  z-index: 5;
  top: 23%;
  background-color: rgba(255, 253, 253, 0.6);
  box-shadow: rgba(255, 253, 253, 0.8) 0px 40px 100px 4px;
  padding: 15px;
  max-width: 390px;
  border-radius: 15px;
}

.heading {
  .w-100 {
    color: rgb(117, 117, 117);
    svg {
      width: 60px;
      height: 60px;
      margin-top: 15%;
      margin-bottom: 5%;
      color: rgb(42, 95, 131);
      path {
        width: 50px;
        height: 50px;
      }
    }
  }
}

.services-container {
  width: 70%;
  margin: auto;
  .grid {
    width: 100%;
    margin-top: 6%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    .first {
      height: 500px;
      display: flex;
      justify-content: center;
      align-items: center;

      h3 {
        font-size: 1.6em;
        color: white;
      }
      p {
        color: white;
      }
      .flex {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      a {
        align-items: center;
        padding: 12px 40px;
        color: white;
        border: 1px solid white;
      }
    }
    .second {
      background-color: tomato;
      transition: 0.6s;
      border-radius: 7px;

      &:hover {
        cursor: pointer;
        opacity: 0.6;
        // transform: scale(0.9);
      }
    }

    .erp {
      background: linear-gradient(
          to top,
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6)
        ),
        url("@/assets/images/mockup2-1.png") no-repeat center center/cover;
    }
    .dms {
      background: linear-gradient(
          to top,
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6)
        ),
        url("@/assets/images/mockup3-1.png") no-repeat center center/cover;
    }
    .wms {
      background: linear-gradient(
          to top,
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6)
        ),
        url("@/assets/images/erp-sistemi.png") no-repeat center center/cover;
    }
    .systemp {
      background: linear-gradient(
          to top,
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6)
        ),
        url("@/assets/images/product_item_2.jpg") no-repeat center center/cover;
    }
    .solution {
      background: linear-gradient(
          to top,
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6)
        ),
        url("@/assets/images/payments.jpg") no-repeat center center/cover;
    }
  }
}
.read-more {
  position: relative;
  transition: all 0.5s;
}
.read-more::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.3s;
}
.read-more:hover::before {
  opacity: 0;
  transform: scale(0.5, 0.5);
}
.read-more::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.5);
  transform: scale(1.2, 1.2);
}
.read-more:hover::after {
  opacity: 1;
  transform: scale(1, 1);
}
@media screen and (max-width: 700px) {
  .box {
    padding: 10% 20px 10% 20px;
  }
  .heading {
    width: 75%;
    margin: auto;
  }
  .d-flex {
    flex-direction: column;
  }
  .services-container {
    width: 95%;
    .grid {
      grid-template-columns: repeat(1, 1fr);

      .first {
        height: 100%;
        padding: 15px;
      }
    }
  }
}
</style>
