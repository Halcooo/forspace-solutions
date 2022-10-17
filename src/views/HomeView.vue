<template>
  <div class="home">
    <div>
      <router-link to="/"> </router-link>
    </div>
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
};
</script>
