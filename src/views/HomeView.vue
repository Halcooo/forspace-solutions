<template>
  <div class="home">
    <HeaderHome></HeaderHome>
    <HomeBody></HomeBody> 
  </div>
</template>

<script>
import HomeBody from "../components/HomeView/HomeBody.vue";
import HeaderHome from "../components/HomeView/HeaderHome.vue";
import BaseSlider from "@/components/BaseSlider.vue";

export default {
  name: "HomeView",
  components: {
    BaseSlider,
    HomeBody,
    HeaderHome,
  },
  data(){
    return{
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
