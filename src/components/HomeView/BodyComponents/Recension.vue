<template>
  <div class="testimonial">
    <div class="testimonial-top">
      <div class="testimonial-top-item-one">
        <div class="testimonial-box">
          <div class="quote-div">
            <!-- <font-awesome-icon icon="fa-solid fa-quote-left" /> -->
          </div>
          <div class="testimonial-square"></div>
          <TestimonialSlider :images="test" />
        </div>
      </div>
      <div class="testimonial-top-item-two">
        <p class="text-primary">{{ $t("recension_primary") }}</p>
        <h1 class="text-secondary">{{ $t("recension_heading") }}</h1>
        <p>{{ $t("recension_p") }}</p>
      </div>
    </div>
    <div class="testimonial-bottom">
      <div class="bottom-flex">
        <div>
          <h1 class="text-light">
            {{ $t("recension_question") }}{{ $t("recension_contact") }}
          </h1>
        </div>
        <div class="button-group">
          <div>
            <BaseButton :to="routes_1.route_1" :name="routes_1.name_1" />
            <BaseButton :to="routes_2.route_2" :name="routes_2.name_2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from "@/components/Forms/buttons/BaseButton.vue";
import TestimonialSlider from "@/components/Sliders/TestimonialSlider.vue";
export default {
  name: "Recension",
  components: { TestimonialSlider, BaseButton },
  data() {
    return {
      routes_1: { route_1: "/contact", name_1: "faq" },
      routes_2: { route_2: "/contact", name_2: "faq-2" },

      test: [
        {
          id: 1,
          url: require("@/assets/images/asa-group-logo.png"),
          name: "about_us_client_one",
        },
        {
          id: 2,
          url: require("@/assets/images/prevent-logo.png"),
          name: "about_us_client_two",
        },
        {
          id: 3,
          url: require("@/assets/images/interior-logo-2.png"),
          name: "about_us_client_three",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.testimonial {
  .testimonial-top {
    display: flex;
    width: 70%;
    margin: auto;
    .testimonial-top-item-one {
      width: 100%;
      position: relative;

      .testimonial-box {
        width: 600px;
        height: 600px;
        position: absolute;
        background: linear-gradient(
          to right,
          rgba(8, 40, 67, 0.8),
          rgba(8, 40, 67, 0.8),
          rgba(8, 40, 67, 0.8)
        );

        padding-top: 15%;
        top: 0%;
        left: 50%;
        transform: translate(-50%, 0%);

        .testimonial-square {
          width: 70px;
          height: 70px;
          position: absolute;
          top: 0;
          right: -1%;
          background-color: white;
          transform: rotate(45deg) translate(70%, 0%);
        }
      }
    }
    .testimonial-top-item-two {
      width: 100%;
      padding-left: 5%;
      text-align: right;
      h1 {
        font-size: 60px;
      }
    }
  }
  .testimonial-bottom {
    width: 100%;
    height: 60vh;
    margin-bottom: 5%;
    background: linear-gradient(
        to right,
        rgb(0, 0, 0, 0.7),
        rgb(0, 0, 0, 0.7),
        rgb(0, 0, 0, 0.7)
      ),
      url("@/assets/images/dms-header.jpg") no-repeat center center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .bottom-flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 70%;
      > div {
        width: 100%;
      }
      h1 {
        margin-top: 45%;
        margin-left: 5%;
        width: 100%;
        font-size: 60px;
        text-align: right;
      }

      .button-group {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 15%;
        padding-left: 15%;
      }
      @media screen and (max-width: 567px) {
        gap: 20px;
        h1 {
          margin-top: 10%;
          margin-left: 2%;
        }
        .button-group {
          padding-top: 5%;
        }
      }
    }
  }
}

@media screen and (max-width: 567px) {
  .testimonial {
    .testimonial-top {
      display: flex;
      flex-direction: column-reverse;
      width: 95%;
      height: 100%;
      margin: auto;
      .testimonial-top-item-one {
        position: relative;
        margin-top: 12%;
        .testimonial-box {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 20px;
          margin-bottom: 5%;
          .testimonial-square {
            // top: -20%;
            top: 0;
            left: 0;
            transform: rotate(45deg) translate(40%, -110%);
          }
        }
      }
      .testimonial-top-item-two {
        position: relative;
        width: 100%;
        padding-left: 5%;
        h1 {
          font-size: 60px;
        }
      }
    }

    .testimonial-bottom {
      width: 95%;
      margin: auto;
      height: 100%;
      padding: 10px;

      .bottom-flex {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        > div {
          width: 100%;
        }
        h1 {
          width: 100%;
          font-size: 60px;
        }

        .button-group {
          transform: translate(-6%, 0);
        }
      }
    }
  }
}
</style>
