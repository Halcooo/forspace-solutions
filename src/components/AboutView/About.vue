<template>
  <div class="about-nav d-flex justify-content-center align-items-center">
    <div class="about-heading text-center">
      <div>
        <h2 class="text-light mt-5">{{ $t("about_us_heading") }}</h2>
      </div>
    </div>
  </div>
  <div class="about-flex-grid">
    <div class="flex-second">
      <router-link v-for="card in grid_2" :to="card.src">
        <div :class="card.class">
          <div>
            <h2>{{ $t(card.h1) }}</h2>
            <h4>{{ $t(card.h4) }}</h4>
            <p class="mobile">{{ $t(card.p) }}</p>
          </div>
        </div>
      </router-link>
    </div>
    <div class="flex-first">
      <div class="div-1">
        <h2 class="news-title">{{ $t("about_us_news_heading") }}</h2>
      </div>
      <div v-for="(card, index) in grid_1">
        <router-link  :to="card.src">
          <div class="div-3">
            <p>{{ $t(card.p) }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutUs",
  data() {
    return {
      grid_1: [
        {
          src: "/why-companies-need-dms",
          p: "about_us_news_link_heading_two",
        },
        {
          src: "/why-web-based",
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
.news-title {
  color: gray;
}

.about-nav {
  width: 100%;
  height: 20vh;
  background:linear-gradient(19deg,#00063adb  0%,  #0fbce763 100%),
    url("@/assets/images/purchase-cover-image.png") no-repeat center
      center/cover;

  position: relative;
  p {
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
  width: 93%;
  margin: auto;
  display: flex;
  min-height: 56vh;
  margin-top: 2%;
  margin-bottom: 5%;
  border-radius: 5px;

  .flex-first {
    width: 45%;
    height: 100%;
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
    gap: 5px;
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
        h2 {
          font-size: 30px;
        }
        top: 83.5%;

        h2 {
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
  @media screen and (max-width: 1050px) {
    .about-flex-grid {
      flex-direction: column;
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
          h2 {
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
@media screen and (max-width: 1000px) {
  .about-flex-grid {
    flex-direction: column;
  }
  .flex-second {
    min-height: 56vh;
    width: 100% !important;
    margin-bottom: 2%;
  }
  .flex-first {
    width: 100% !important;
  }
}
</style>
