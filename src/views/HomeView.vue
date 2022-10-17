<template>
  <div class="home">
    <div>
      <router-link to="/"> </router-link>
    </div>
    <HeaderHome></HeaderHome>
  </div>
</template>

<script>
import HeaderHome from "@/components/HomeView/HeaderHome.vue";

export default {
  name: "HomeView",
  components: {
    HeaderHome,
  },
};
</script>
