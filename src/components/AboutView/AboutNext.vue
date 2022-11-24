<template>
  <div class="the_next">
    <div class="the_next_heading">
      <h1 class="text-secondary mb-4">{{ $t("about_us_next_heading") }}</h1>
      <Line />
      <h3 class="text-secondary mt-2">
        {{ $t("about_us_next_additional_paragraph") }}
      </h3>
      <!-- <small>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
					consequatur veniam amet voluptatum totam beatae.
				</small> -->
    </div>

    <div class="the_next_content">
      <div
        class="item_one text-light d-flex justify-content-center align-items-center text-center"
      >
        <div>
          <h3>{{ $t("about_us_next_overlay_left_heading") }}</h3>
          <p>
            {{ $t("about_us_next_overlay_left_paragraph") }}
          </p>
          <div class="read-more d-flex justify-content-center">
            <router-link
              to="/"
              class="border pt-2 ps-5 px-5 pb-2 text-light mt-5"
              >Saznaj Vise</router-link
            >
          </div>
        </div>
        <!-- <div class="overlay">
          <h3>{{ $t("about_us_next_overlay_left_heading") }}</h3>
          <p>
            {{ $t("about_us_next_overlay_left_paragraph") }}
          </p>
          <div class="read-more">
            <router-link to="/">Saznaj Vise</router-link>
          </div>
        </div> -->
      </div>
      <div
        class="item_two text-light d-flex justify-content-center align-items-center text-center"
      >
        <div>
          <h3>{{ $t("about_us_next_overlay_right_heading") }}</h3>
          <p>
            {{ $t("about_us_next_overlay_right_paragraph") }}
          </p>
          <div class="read-more d-flex justify-content-center">
            <router-link
              to="/"
              class="border pt-2 ps-5 px-5 pb-2 text-light mt-5"
              >Saznaj Vise</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Line from "@/particles/Line.vue";
export default {
  name: "AboutUsNext",
  components: { Line },
};
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
.the_next {
  width: 100%;

  .the_next_heading {
    text-align: center;
  }

  .the_next_content {
    width: 70%;
    margin: 5% auto;

    height: 370px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .item_one {
      width: 100%;
      height: 100%;

      background: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.452),
          rgba(0, 0, 0, 0.397),
          rgba(0, 0, 0, 0.445)
        ),
        url("@/assets/images/product_item_1.jpg") no-repeat center center/cover;
      position: relative;
    }
    .item_two {
      width: 100%;
      height: 100%;
      background: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.452),
          rgba(0, 0, 0, 0.397),
          rgba(0, 0, 0, 0.445)
        ),
        url("@/assets/images/product_item_2.jpg") no-repeat center center/cover;
      position: relative;
    }

    .overlay {
      position: absolute;
      bottom: 0;
      width: 90%;
      margin: auto;
      height: 18vh;
      background-color: rgb(51, 51, 51);
      transform: translate(6%, 50%);
      padding: 20px;
      h3,
      p {
        color: white;
      }
      .read-more {
        padding: 10px 20px;
        background-color: rgb(255, 255, 255);
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }
  @media screen and (max-width: 567px) {
    height: 100%;

    .the_next_content {
      width: 90%;
      flex-direction: column;
      height: 550px;
      .overlay {
        height: 23vh;
      }
    }
    .item_one,
    .item_two {
      width: 90%;
    }
  }
}
</style>
