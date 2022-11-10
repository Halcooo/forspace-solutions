<template>
  <div class="flex_column">
    <div class="row_1">
      <div class="home_div">
        <ClosingButton @click="removeSideNav(contentId)" :btn="true" />
      </div>
      <h1>
        {{ $t("home") }}
      </h1>
    </div>
    <div class="row_2">
      <div class="row_nav" v-for="nav in navs" :key="nav">
        <div class="row_nav_icon">
          <div class="icon" :class="nav.icon"></div>

          <h1>{{ $t(nav.row_heading) }}</h1>
          <p>{{ $t(nav.row_text) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClosingButton from "@/components/Forms/buttons/ClosingButton.vue";

export default {
  name: "HomeContent",
  props: {
    navs: { type: Array },
    contentId: { type: Number },
    removeSideNav: { type: Function },
  },
  components: { ClosingButton },
};
</script>

<style lang="scss" scoped>
.flex_column {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .row_1 {
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(
        to right,
        rgba(0, 10, 153, 0),
        #1e7ebe2c,
        #003e9b2f
      ),
      url("@/assets/images/product.png") no-repeat center center/cover;

    h1 {
      color: white;
      font-size: 55px;
    }
    .home_div {
      display: none;
      position: absolute;
      justify-content: center;
      align-items: center;
      margin: auto;
      top: 2.1%;
      right: 3.7%;
      width: 20px;
      height: 20px;
      padding: 2px;
      @media screen and (max-width: 567px) {
        display: flex;
      }
    }
  }
  .row_2 {
    width: 100%;
    height: 50vh;
    display: flex;
    @media screen and (max-width: 567px) {
      flex-direction: column;
      height: 60vh;
    }
    .row_nav {
      width: 100%;
      height: 100%;
      @media screen and (max-width: 567px) {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .row_nav_icon {
        width: 100%;
        height: 100%;
        padding-top: 40%;
        text-align: center;
        transition: 0.5s;
        @media screen and (max-width: 567px) {
          height: 50vh;
          padding-top: 20%;
        }
        .icon {
          display: flex;
          justify-content: center;
          margin: auto;
        }
        h1 {
          font-size: 25px;
          margin-top: 2%;
        }
        &:hover {
          background-color: rgb(50, 74, 117);
          cursor: pointer;

          h1,
          p {
            color: #fff;
          }
        }
      }
      .icon {
        width: 100px;
        height: 100px;
      }
      .icon-companies {
        background: url("@/assets/images/companies.png") no-repeat center
          center/cover;
      }
      .icon-cloud {
        background: url("@/assets/images/cloud.png") no-repeat center
          center/cover;
      }
      .icon-config {
        background: url("@/assets/images/config.png") no-repeat center
          center/cover;
      }
      .icon-circle {
        background: url("@/assets/images/circle.png") no-repeat center
          center/cover;
      }
    }
  }
}
</style>
