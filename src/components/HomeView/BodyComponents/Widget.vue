<template>
  <div class="widget-container mt-5">
    <div
      class="widget-box"
      data-aos="fade-down-right"
      data-aos-easing="ease-in"
      data-aos-duration="500"
    >
      <div class="widget-frame"></div>
      <div class="widget-pic"></div>
    </div>
    <div
      class="text"
      data-aos="fade-down-left"
      data-aos-easing="ease-in"
      data-aos-duration="500"
    >
      <small class="">{{ $t("widget_heading") }}</small>
      <h2 class="mb-5 text-secondary">{{ $t("widget_company") }}</h2>
      <p class="mb-5 text-secondary">
        {{ $t("widget_text") }}
      </p>

      <small>{{ $t("widget_small_text") }}</small>
      <p>{{ $t("widget_phone_number") }}</p>

      <div class="d-flex gap-2 mt-5">
        <div
          v-for="(widget, index) in widgets"
          class="w-100 bg-light text-center p-3"
        >
          <font-awesome-icon icon="fa-solid fa-rocket " v-if="index == 0" />
          <font-awesome-icon icon="fa-solid fa-gem " v-if="index == 1" />
          <font-awesome-icon icon="fa-solid fa-check " v-if="index == 2" />
          <small>
            {{ $t(widget.small) }}
          </small>
          <p>{{ $t(widget.p) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Widget",
  data() {
    return {
      widgets: [
        { small: "30", p: "widget_icon_one_p" },
        { small: "10", p: "widget_icon_two_p" },
        { small: "130", p: "widget_icon_three_p" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.widget-container {
  width: 70%;
  margin: auto;
  margin-bottom: 5%;
  height: 55vh;
  display: flex;
  justify-content: center;
  gap: 50px;

  .widget-box {
    width: 100%;
    height: 100%;
    position: relative;

    .widget-frame {
      position: absolute;
      width: 52%;
      height: 100%;
      border: 23px solid rgba(8, 40, 67, 0.87);
      // border: 23px solid rgb(255, 97, 0);
      top: 0;
      left: 7%;
    }
    .widget-pic {
      position: absolute;
      top: 15%;
      left: 22%;
      width: 78%;
      height: 70%;
      background: url("@/assets/images/forspace_info.jpg") no-repeat center
        center/cover;
    }
  }

  .text {
    width: 100%;
    padding: 30px 60px;
    text-align: right;
    @media screen and (max-width: 900px) {
      width: 95%;
      margin: auto;
      padding: 30px 0px;
      text-align: left;
    }
    .d-flex {
      svg {
        display: block;
        margin: auto;
        width: 30px;
        height: 30px;
        color: gray;
      }
      small {
        font-size: 30px;
      }
      p {
        color: gray;
      }
    }

    small {
      font-size: 20px;
      color: rgb(55, 165, 255);
      margin-bottom: 4%;
    }
    h2 {
      color: rgb(37, 37, 37);
    }
    p {
      font-size: 20px;
    }
  }
}
@media screen and (max-width: 1400px) {
  .widget-container {
    width: 100%;
  }
}
@media screen and (max-width: 900px) {
  .widget-container {
    width: 90%;
    flex-direction: column;
    height: 100%;
    margin-bottom: 0%;
    .widget-box {
      height: 50vh;
      .widget-frame {
        width: 50%;
        height: 50vh;
        left: 5%;
      }
      .widget-pic {
        width: 80%;
        top: 20%;
        left: 10%;
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .iso {
    flex-direction: column;
    img {
      width: 80%;
      margin: auto;
    }
    a {
      text-align: center;
    }
  }
}
</style>
