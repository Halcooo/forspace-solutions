@author Halid Lihovac
<template>
  <Widget />
  <CompanyIcons />
  <Cube />
  <Recension />
  <HomeSlider />
</template>
<script>
import Widget from "./BodyComponents/Widget.vue";
import CompanyIcons from "./BodyComponents/CompanyIcons.vue";
import Cube from "./BodyComponents/Cube.vue";
import Recension from "./BodyComponents/Recension.vue";
import HomeSlider from "./BodyComponents/HomeSlider.vue";

export default {
  name: "HomeBody",
  components: {
    Widget,
    CompanyIcons,
    Cube,
    Recension,
    HomeSlider,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/variables.scss";
</style>
