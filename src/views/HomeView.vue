<template>
  <div class="home">
    <HeaderHome></HeaderHome>
    <HomeBody></HomeBody>
  </div>
</template>

<script>
import HomeBody from "../components/HomeView/HomeBody.vue";
import HeaderHome from "../components/HomeView/HeaderHome.vue";

export default {
  name: "HomeView",
  components: {
    HomeBody,
    HeaderHome,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped></style>
