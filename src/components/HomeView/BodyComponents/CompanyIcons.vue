<template>
  <div class="body bg-light text-center pt-5">
    <div class="items container text-center pb-5">
      <div class="items-container">
        <div class="item bg-light border p-5"  v-for="icon in icons" :key="icon" :data-aos="icon.dataAos"
        data-aos-duration="600"
        data-aos-easing="ease-in">
          <img :src="icon.src" alt="companies" />
          <h4>{{ $t(icon.h4) }}</h4>
          <p>{{ $t(icon.p) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CompanyIcons",
  data() {
    return {
      icons: [
        {
          src: require("../../../assets/images/companies.png"),
          h4: "home_icon_companies",
          p: "home_icon_companies_p",
          dataAos:"fade-down-right",

        },
        {
          src: require("../../../assets/images/cloud.png"),
          h4: "home_icon_cloud",
          p: "home_icon_cloud_p",
          dataAos:"fade-down-left",
        },
        {
          src: require("../../../assets/images/config.png"),
          h4: "home_icon_config",
          p: "home_icon_config_p",
          dataAos:"fade-up-right",
        },
        {
          src: require("../../../assets/images/circle.png"),
          h4: "home_icon_circle",
          p: "home_icon_circle_p",
          dataAos:"fade-up-left",
        },
      ],
    };
  },
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
      height: 100%;
      display: grid;
      gap:15px;
      grid-template-columns: repeat(2, 1fr);
  
    }
    .square {
      width: 370px;
      height: 350px;

      background-color: rgba(8, 40, 67, 0.8);
      position: absolute;
      z-index: -1;
      top: -3%;
      right: 2%;
      display: flex;
      justify-content: right;
      padding-right: 7%;
      align-items: center;
      text-align: right;
      h2 {
        color: white;
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
    h2 {
      color: gray;
    }
    p {
      color: gray;
    }
  }
  @media screen and (max-width: 700px) {
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
