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
        <router-link to="/" class="termin">{{
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
  height: 35vh;
  background-color: #26498a;
  padding: 10px;
  margin: 15% 0% 5% 0%;

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
      padding-left: 5%;
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
}
</style>
