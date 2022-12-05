<template>
  <div class="choose">
    <div class="choose-flex">
      <div class="choose-text">
        <small>{{ $t("about_us_choose_small_heading") }}</small>
        <h1 class="text-dark">{{ $t("about_us_choose_heading") }}</h1>
        <p>{{ $t("about_us_aditional") }}</p>
        <p class="line"></p>
        <p>
          {{ $t("about_us_paragraph") }}
        </p>
        <div class="checkmarks">
          <div v-for="check in checkmarks" class="checkmark-tab">
            <p>{{ $t(check.p) }}</p>
            <p>
              <font-awesome-icon icon="fa-solid fa-check" />
            </p>
          </div>
        </div>
      </div>
      <div class="choose-widget-frame">
        <div class="widget-frame"></div>
        <div class="widget-photo"></div>
        <div class="widget-video"></div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from "../Forms/buttons/BaseButton.vue";

export default {
  name: "AboutChoose",
  components: { BaseButton },
  data() {
    return {
      routes: { route: "/", name: "read" },
      checkmarks: [
        { p: "about_check_one" },
        { p: "about_check_two" },
        { p: "about_check_three" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.choose {
  width: 100%;

  height: 60vh;
  margin-top: 10%;
  padding: 20px;
  background-color: rgb(238, 238, 238);

  .choose-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin: auto;
    height: 100%;
    gap: 5px;

    .choose-text {
      width: 70%;
      height: 100%;
      // border: 1px solid black;
      text-align: right;
      padding-top: 5%;
      padding-right: 15px;

      .line {
        width: 50px;
        height: 2px;
        background-color: cornflowerblue;
        display: inline-flex;
        justify-content: right;
      }
    }
    .choose-widget-frame {
      width: 100%;
      height: 100%;

      // border: 1px solid black;
      position: relative;

      .widget-frame {
        position: absolute;
        width: 52%;
        height: 100%;
        border: 23px solid rgba(8, 40, 67, 0.6);
        // border: 23px solid rgb(255, 97, 0);
        top: 0;
        right: 5%;
      }

      .widget-photo {
        width: 70%;
        height: 60%;
        background: linear-gradient(
            to right,
            rgba(8, 40, 67, 0.4),
            rgba(8, 40, 67, 0.4),
            rgba(8, 40, 67, 0.4)
          ),
          url("@/assets/images/widget.png") no-repeat center center/cover;
        position: absolute;
        top: 8%;
        left: 20%;
      }
      .widget-video {
        width: 70%;
        height: 50%;
        background: linear-gradient(
            to right,
            rgba(8, 40, 67, 0.4),
            rgba(8, 40, 67, 0.4),
            rgba(8, 40, 67, 0.4)
          ),
          url("@/assets/images/product_item_1.jpg") no-repeat center
            center/cover;
        position: absolute;
        top: 32%;
        left: 10%;
        iframe {
          width: 100%;
          height: 100%;
        }
      }
    }
    .checkmarks {
      margin-top: 10%;
      .checkmark-tab {
        display: flex;
        gap: 10px;
        justify-content: right;
        align-items: center;
        svg {
          color: white;
          background-color: cornflowerblue;
          border-radius: 50%;
          padding: 3px;
          font-size: 10px;
        }
      }
    }
  }
  @media screen and (max-width: 567px) {
    height: 100%;
    padding: 10px;

    .choose-flex {
      width: 100%;
      flex-direction: column;
      gap: 100px;
      .choose-widget-frame {
        width: 100%;
        height: 50vh;

        // border: 1px solid black;
        position: relative;

        .widget-frame {
          position: absolute;
          width: 52%;
          height: 400px;
          border: 23px solid rgb(55, 165, 255);
          // border: 23px solid rgb(255, 97, 0);
          top: 0;
          right: 5%;
        }
        .widget-photo {
          top: 12%;
          left: 5%;
        }
        .widget-video {
          top: 37%;
          left: 0;
          width: 80%;
        }
      }
    }
  }
}
</style>
