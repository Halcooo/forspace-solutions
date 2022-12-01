<template>
  <div class="widget-container mt-5">
    <div class="widget-box">
      <div class="widget-frame"></div>
      <div class="widget-pic"></div>
    </div>
    <div class="text">
      <small class="">{{ $t("widget_heading") }}</small>
      <h1 class="mb-5 text-secondary">{{ $t("widget_company") }}</h1>
      <p class="mb-5 text-secondary">
        {{ $t("widget_text") }}
      </p>

      <small>{{ $t("widget_small_text") }}</small>
      <p>{{ $t("widget_phone_number") }}</p>

      <div class="d-flex gap-2 mt-5">
        <div class="w-100 bg-light text-center p-3">
          <font-awesome-icon icon="fa-solid fa-rocket " />
          <small> 30+ </small>
          <p>{{ $t("widget_icon_one_p") }}</p>
        </div>
        <div class="w-100 bg-light text-center p-3">
          <font-awesome-icon icon="fa-solid fa-gem " />
          <small> 10+ </small>
          <p>{{ $t("widget_icon_two_p") }}</p>
        </div>
        <div class="w-100 bg-light text-center p-3">
          <font-awesome-icon icon="fa-solid fa-check" />
          <small> 199+ </small>
          <p>{{ $t("widget_icon_three_p") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Widget",
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
      border: 23px solid rgba(8, 40, 67, 0.8);
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
    h1 {
      font-size: 50px;
      letter-spacing: 0.1rem;
      color: rgb(37, 37, 37);
    }
    p {
      font-size: 20px;
    }
  }
}

@media screen and (max-width: 567px) {
  .widget-container {
    width: 100%;
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
        width: 74%;
        height: 300px;
      }
    }
  }
}
</style>
