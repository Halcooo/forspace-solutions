<template>
  <div class="about-nav">
    <div class="about-heading">
      <div style="display: flex; justify-content: center; align-items: center">
        <div>
          <div
            style="display: flex; justify-content: center; align-items: center"
          >
            <div style="position: relative">
              <h1>{{ $t("about_us_heading") }}</h1>
              <p
                style="
                  width: 100%;
                  padding: 2px;
                  border-radius: 50px;
                  background-color: rgb(0, 156, 161);
                  position: absolute;
                  bottom: 0;
                  z-index: -1;
                  transform: translate(0px, 2px) rotate(-2deg);
                "
              ></p>
            </div>
          </div>
          <small>
            {{ $t("about_us_additional_paragraph") }}
          </small>
        </div>
      </div>
    </div>
    <div class="about-flex-grid">
      <div class="flex-first">
        <div class="div-1">
          <h1>{{ $t("about_us_news_heading") }}</h1>
        </div>
        <div class="div-2">
          <p>
            {{ $t("about_us_news_link_one") }}
          </p>
        </div>
        <div class="div-3">
          <p>{{ $t("about_us_news_link_heading_two") }}</p>
          <p>
            {{ $t("about_us_news_link_two") }}
          </p>
        </div>
        <div class="div-4">
          <p>
            {{ $t("about_us_news_link_heading_three") }}
          </p>
        </div>

        <div class="overlay"></div>
      </div>
      <div class="flex-second">
        <div class="card-1">
          <h3>Lorem, ipsum dolor.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="card-2">
          <h3>Lorem, ipsum dolor.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="card-3">
          <h3>Lorem, ipsum dolor.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="card-4">
          <h3>Lorem, ipsum dolor.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutUs",
};
</script>
<style lang="scss" scoped>
@import "../../styles/variables.scss";

.about-nav {
  width: 100%;
  padding-top: 8%;

  p {
    color: white;
  }
  h3 {
    color: white;
  }
  .about-heading {
    // text-align: center;
  }
  .about-flex-grid {
    width: 60%;
    margin: auto;
    height: 70vh;
    display: flex;
    margin-top: 2%;
    margin-bottom: 5%;
    border-radius: 5px;
    .flex-first {
      width: 45%;
      height: 100%;
      background: $navy;
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
        border-bottom: 2px solid white;
      }

      .overlay {
        width: 80%;
        margin: auto;
        background-color: rgba(255, 255, 255, 0.568);
        height: 20%;
      }
      h1,
      p {
        color: white;
      }
    }
    .flex-second {
      width: 60%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      .card-1,
      .card-2,
      .card-3,
      .card-4 {
        width: 100%;
        height: 100%;

        &:hover {
          opacity: 0.8;
          cursor: pointer;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .card-1 {
        background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.397),
            rgba(0, 0, 0, 0.199),
            rgba(0, 0, 0, 0.404)
          ),
          url("@/assets/images/erp-sistemi.png") no-repeat center center/cover;
      }
      .card-2 {
        background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.397),
            rgba(0, 0, 0, 0.199),
            rgba(0, 0, 0, 0.404)
          ),
          url("@/assets/images/sistemi-placanja.jpg") no-repeat center
            center/cover;
      }
      .card-3 {
        background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.397),
            rgba(0, 0, 0, 0.199),
            rgba(0, 0, 0, 0.404)
          ),
          url("@/assets/images/forspace_info.jpg") no-repeat center center/cover;
      }
      .card-4 {
        background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.397),
            rgba(0, 0, 0, 0.199),
            rgba(0, 0, 0, 0.404)
          ),
          url("@/assets/images/forspace_info_2.jpg") no-repeat center
            center/cover;
      }
    }
  }
}
</style>
