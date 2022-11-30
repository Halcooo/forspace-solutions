<template>
  <div class="cube-background">
    <div class="cube-content">
      <div class="erp-text mt-5">
        <h1 class="erp-main-text text-secondary mt-2">
          {{ $t("home_forspace_erp_accounting") }}
        </h1>
        <p class="erp-secondary-text">
          {{ $t("home_forspace_erp_accounting_text") }}
        </p>
      </div>
      <div>
        <img src="@/assets/images/kocka_.png" alt="cube" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cube",
};
</script>
<style lang="scss" scoped>
.cube-background {
  // background-color: rgb(248, 248, 248);
  width: 100%;
  margin: auto;
  padding: 50px 0px;
  margin-bottom: 10%;

  // align-items: center;
  .cube-content {
    width: 70%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    > div {
      width: 100%;
    }
  }
  img {
    margin-top: 5%;
    width: 400px;
    height: 400px;
    display: flex;
    margin: auto;
  }

  svg {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
  @media screen and (max-width: 567px) {
    padding: 10px;
    .cube-content {
      width: 90%;
      flex-direction: column;
    }
  }
}
</style>
