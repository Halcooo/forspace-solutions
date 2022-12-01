<template>
  <div class="reserve">
    <div class="reserve-content">
      <div class="res-termin">
        <h1>{{ $t("about_us_reserve_heading") }}</h1>
        <p>
          {{ $t("about_us_reserve_p") }}
        </p>
      </div>
      <div>
        <router-link to="/contact" class="termin">{{
          $t("about_us_reserve_heading")
        }}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.reserve {
  height: 45vh;
  background-color: #ccc;
  padding: 10px;

  .reserve-content {
    width: 60%;
    height: 100%;

    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 70px;
      color: white;
    }
    p {
      color: white;
    }
    > div {
      width: 100%;
    }
    .res-termin {
      padding-left: 0%;
    }
    .termin {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 70px;
      border-radius: 50px;
      margin-left: auto;
      margin-right: 10%;
      font-size: 30px;
      color: #26498a;
      background-color: white;
    }
  }
  @media screen and (max-width: 567px) {
    height: 100%;
    // padding: 30px;
    .reserve-content {
      width: 90%;
      flex-direction: column;
      text-align: center;
      h1 {
        font-size: 50px;
        margin-bottom: 15%;
      }
      .termin {
        margin: auto;
        margin-top: 5%;

        margin-bottom: 5%;
      }
    }
  }
}
</style>
