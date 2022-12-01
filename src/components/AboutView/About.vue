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

      <router-link to="/erp-all-in-one">
        <div class="div-2">
          <p>
            {{ $t("about_us_news_link_one") }}
          </p>
        </div>
      </router-link>
      <router-link to="/why-companies-need-dms">
        <div class="div-3">
          <p>{{ $t("about_us_news_link_heading_two") }}</p>
          <p>
            {{ $t("about_us_news_link_two") }}
          </p>
        </div>
      </router-link>

      <router-link to="/why-web-based">
        <div class="div-4">
          <p>
            {{ $t("about_us_news_link_heading_three") }}
          </p>
        </div>
      </router-link>

      <div class="overlay"></div>
    </div>
    <div class="flex-second">
      <router-link to="/what-type-of-entrepreneur-are-you">
        <div class="card-1">
          <div>
            <h1>{{ $t("about_us_news_right_flex_one_heading") }}</h1>
            <h3>{{ $t("about_us_news_right_flex_one") }}</h3>
            <p>{{ $t("about_us_news_right_flex_one_text") }}</p>
          </div>
        </div>
      </router-link>
      <router-link to="/signs-your-business-needs-advanced-software-solution">
        <div class="card-2">
          <div>
            <h1>{{ $t("about_us_news_right_flex_two_heading") }}</h1>

            <h3>{{ $t("about_us_news_right_flex_two") }}</h3>
            <p>{{ $t("about_us_news_right_flex_two_text") }}</p>
          </div>
        </div>
      </router-link>
      <router-link to="/how-erp-can-help-small-business-to-grow">
        <div class="card-3">
          <div>
            <h1>{{ $t("about_us_news_right_flex_three_heading") }}</h1>

            <h3>{{ $t("about_us_news_right_flex_three") }}</h3>
            <p>{{ $t("about_us_news_right_flex_three_text") }}</p>
          </div>
        </div>
      </router-link>
      <router-link to="/how-digital-transformation-helps-accounting">
        <div class="card-4">
          <div>
            <h1>{{ $t("about_us_news_right_flex_four_heading") }}</h1>

            <h3>{{ $t("about_us_news_right_flex_four") }}</h3>
            <p>{{ $t("about_us_news_right_flex_four_text") }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutUs",
  about: false,
  mounted() {},
};
</script>
<style lang="scss" scoped>
@import "../../styles/variables.scss";

.about-nav {
  width: 100%;
  height: 50vh;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
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
  height: 60vh;
  display: flex;
  // gap: 10px;
  margin-top: 2%;
  margin-bottom: 5%;
  border-radius: 5px;

  .flex-first {
    width: 45%;
    height: 100%;
    // background: rgb(188, 66, 66);
    padding: 10px;

    .div-1,
    .div-2,
    .div-3,
    .div-4 {
      width: 80%;
      margin: auto;
      margin-bottom: 5%;
      padding: 15px 0px;
    }

    .div-1,
    .div-2,
    .div-3 {
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
      align-items: center;
      text-align: left;
      padding-left: 5%;
      position: relative;
      div {
        position: absolute;
        top: 80.5%;
      }

      &:hover {
        div {
          top: 30%;
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
      width: 90%;
      margin: auto;
      margin-top: 5%;
    }
    .flex-second {
      width: 90%;
      margin: auto;
      .card-1,
      .card-2,
      .card-3,
      .card-4 {
        height: 200px;
      }
    }
  }
}
</style>
