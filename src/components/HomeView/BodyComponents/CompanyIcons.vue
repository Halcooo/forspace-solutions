<template>
  <div class="body bg-light text-center pt-5">
    <div class="items container text-center pb-5">
      <div class="square">
        <h1>{{ $t("home_icon_square") }}</h1>
      </div>
      <div class="square-2"></div>
      <div class="items-container">
        <div
          class="item bg-light p-5"
          style="
            border-bottom: 1px solid gainsboro;
            border-right: 1px solid gainsboro;
          "
        >
          <img src="@/assets/images/companies.png" alt="companies" />
          <h4>{{ $t("home_icon_companies") }}</h4>
          <p>{{ $t("home_icon_companies_p") }}</p>
        </div>
        <div
          class="item bg-light p-5"
          style="border-bottom: 1px solid gainsboro"
        >
          <img src="@/assets/images/cloud.png" alt="cloud" />
          <h4>{{ $t("home_icon_cloud") }}</h4>
          <p>{{ $t("home_icon_cloud_p") }}</p>
        </div>
        <div
          class="item bg-light p-5"
          style="border-right: 1px solid gainsboro"
        >
          <img src="@/assets/images/config.png" alt="config" />
          <h4>{{ $t("home_icon_config") }}</h4>
          <p>{{ $t("home_icon_config_p") }}</p>
        </div>
        <div class="item bg-light p-5">
          <img src="@/assets/images/circle.png" alt="circle" />
          <h4>{{ $t("home_icon_circle") }}</h4>
          <p>{{ $t("home_icon_circle_p") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CompanyIcons",
};
</script>
<style lang="scss" scoped>
.body {
  margin-top: 7%;
  margin-bottom: 5%;
  // background-color: rgb(241, 241, 241);

  .items {
    position: relative;
    z-index: 1;
    padding: 50px 0px;

    .items-container {
      width: 75%;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      // gap: 10px;
      // margin-left: 2%;
      // margin-right: auto;
    }
    .square {
      width: 370px;
      height: 350px;

      background-color: rgba(45, 138, 161, 0.8);
      position: absolute;
      z-index: -1;
      top: -3%;
      right: 2%;
      display: flex;
      justify-content: right;
      padding-right: 1%;
      align-items: center;
      text-align: right;
      h1 {
        color: white;
        width: 70%;
        font-size: 60px;
      }
    }
    .square-2 {
      width: 200px;
      height: 200px;
      background-color: rgb(190, 190, 190);
      position: absolute;
      z-index: -2;
      top: 40%;
      right: 10%;
    }
  }
  .container {
    h1 {
      color: gray;
    }
    p {
      color: gray;
    }
  }
  @media screen and (max-width: 567px) {
    .items {
      .items-container {
        grid-template-columns: repeat(1, 1fr);
        margin: 0;
        width: 100%;
        margin-left: 0%;
      }
      .square {
        position: relative;
        width: 100%;
        height: 100%;
        margin: auto;
        padding: 10px 5px;
        top: 0;
        right: 0;
      }
      .square-2 {
        display: none;
      }
    }
  }
}
</style>
