<template>
  <div class="about-nav d-flex justify-content-center align-items-center">
    <div class="about-heading text-center">
      <div>
        <h1 class="text-light">{{ $t("about_us_heading") }}</h1>

        <p class="text-light">
          {{ $t("about_us_additional_paragraph") }}
        </p>
      </div>
    </div>
  </div>
  <div class="about-flex-grid">
    <div class="flex-first">
      <div class="div-1">
        <h1>{{ $t("about_us_news_heading") }}</h1>
      </div>

      <div v-for="(card, index) in grid_1">
        <router-link v-if="index == 1" :to="card.src">
          <div :class="card.class">
            <p>{{ $t(card.p) }}</p>
            <p>
              {{ $t(card.p2) }}
            </p>
          </div>
        </router-link>
        <router-link v-else :to="card.src">
          <div :class="card.class">
            <p>{{ $t(card.p) }}</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="flex-second">
      <router-link v-for="card in grid_2" :to="card.src">
        <div :class="card.class">
          <div>
            <h1>{{ $t(card.h1) }}</h1>
            <h4>{{ $t(card.h4) }}</h4>

            <p class="mobile">{{ $t(card.p) }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutUs",
  data() {
    return {
      grid_1: [
        { src: "/erp-all-in-one", class: "div-2", p: "about_us_news_link_one" },
        {
          src: "/why-companies-need-dms",
          class: "div-3",

          p: "about_us_news_link_heading_two",
          p2: "about_us_news_link_one",
        },
        {
          src: "/why-web-based",
          class: "div-4",
          p: "about_us_news_link_heading_three",
        },
      ],
      grid_2: [
        {
          src: "/what-type-of-entrepreneur-are-you",
          h1: "about_us_news_right_flex_one_heading",
          h4: "about_us_news_right_flex_one",
          p: "about_us_news_right_flex_one_text",
          class: "card-1",
        },
        {
          src: "/signs-your-business-needs-advanced-software-solution",
          h1: "about_us_news_right_flex_two_heading",
          h4: "about_us_news_right_flex_two",
          p: "about_us_news_right_flex_two_text",
          class: "card-2",
        },
        {
          src: "/how-erp-can-help-small-business-to-grow",
          h1: "about_us_news_right_flex_three_heading",
          h4: "about_us_news_right_flex_three",
          p: "about_us_news_right_flex_three_text",
          class: "card-3",
        },
        {
          src: "/how-digital-transformation-helps-accounting",
          h1: "about_us_news_right_flex_four_heading",
          h4: "about_us_news_right_flex_four",
          p: "about_us_news_right_flex_four_text",
          class: "card-4",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/variables.scss";

.about-nav {
  width: 100%;
  height: 50vh;
  background: linear-gradient(
      to right,
      rgba(8, 40, 67, 0.6),
      rgba(8, 40, 67, 0.6),
      rgba(8, 40, 67, 0.6)
    ),
    url("@/assets/images/purchase-cover-image.png") no-repeat center
      center/cover;

  position: relative;
  p {
    color: white;
  }
  h1 {
    font-size: 70px;
    color: white;
  }

  .circle {
    width: 300px;
    height: 300px;
    position: absolute;
    top: 5%;
    left: 5%;
    border-radius: 50%;
    border: 15px solid gray;
  }
  .square {
    width: 300px;
    height: 300px;
    position: absolute;
    bottom: 10%;
    right: 10%;
    border-radius: 0%;
    border: 15px solid gray;
  }
}
.about-flex-grid {
  width: 70%;
  margin: auto;
  height: 56vh;
  display: flex;
  // gap: 10px;
  margin-top: 2%;
  margin-bottom: 5%;
  border-radius: 5px;

  .flex-first {
    width: 45%;
    height: 100%;
    // background: rgb(188, 66, 66);
    // padding: 10px;
    .div-1,
    .div-2,
    .div-3,
    .div-4 {
      width: 80%;
      margin: auto;
      margin-bottom: 4%;

      padding: 15px 0px;
    }

    .div-1,
    .div-2,
    .div-3,
    .div-4 {
      border-bottom: 2px solid rgba(16, 99, 114, 0.6);
    }
    .div-2,
    .div-3,
    .div-4 {
      &:hover {
        opacity: 0.8;
        color: gray;
      }
    }
    .overlay {
      width: 80%;
      margin: auto;
      background-color: rgba(192, 192, 192, 0.877);
      height: 17%;
    }
    h1,
    p {
      color: gray;
    }
  }

  .flex-second {
    width: 60%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    // gap: 10px;
    .card-1,
    .card-2,
    .card-3,
    .card-4 {
      width: 100%;
      height: 100%;
      color: white;
      overflow: hidden;
      &:hover {
        opacity: 0.8;
        cursor: pointer;
      }
      display: flex;
      flex-direction: column;
      justify-content: center;

      text-align: left;
      padding-left: 2%;
      position: relative;
      div {
        position: absolute;
        transition: 1s;
        h1 {
          font-size: 30px;
        }
        top: 83.5%;

        h1 {
          font-size: 30px;
        }
        top: 83.5%;
      }

      &:hover {
        div {
          top: 10%;
          transition: top 1s;
        }
      }
    }

    .card-1 {
      background: linear-gradient(
          to right,
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6)
        ),
        url("@/assets/images/erp-sistemi.png") no-repeat center center/cover;
    }
    .card-2 {
      background: linear-gradient(
          to right,
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6)
        ),
        url("@/assets/images/sistemi-placanja.jpg") no-repeat center
          center/cover;
    }
    .card-3 {
      background: linear-gradient(
          to right,
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6)
        ),
        url("@/assets/images/forspace_info.jpg") no-repeat center center/cover;
    }
    .card-4 {
      background: linear-gradient(
          to right,
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6)
        ),
        url("@/assets/images/forspace_info_2.jpg") no-repeat center center/cover;
    }
  }
  @media screen and (max-width: 567px) {
    flex-direction: column;
    width: 100%;
    height: 100%;

    .flex-first {
      width: 100%;
      margin: auto;
      margin-top: 5%;

      .div-1,
      .div-2,
      .div-3,
      .div-4 {
        width: 90%;
      }
    }
    .flex-second {
      width: 90%;
      margin: auto;
      .card-1,
      .card-2,
      .card-3,
      .card-4 {
        height: 200px;

        div {
          width: 100%;
          top: 75%;
          h1 {
            width: 100%;
            font-size: 25px;
            margin-bottom: 10%;
          }
          h4 {
            font-size: 20px;
          }
          .mobile {
            display: none;
          }
        }
      }
    }
  }
}
</style>
