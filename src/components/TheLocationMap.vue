<template lang="">
  <div
    class="map d-flex justify-content-center align-items-center"
    v-if="this.$store.getters.getMapState"
  >
    <div>
      <div style="text-align: center" class="mb-5"></div>
      <iframe
        width="1080"
        height="480"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=ForspaceSolutions&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="yes"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
    <div
      style="position: absolute; top: 3%; right: 3%; width: 40px; height: 40px"
    >
      <ClosingButton @click="showMap" />
    </div>
  </div>
</template>
<script>
import ClosingButton from "./Forms/buttons/ClosingButton.vue";
export default {
  name: "TheLocationMap",
  components: { ClosingButton },
  props: { showMap: { type: Function } },
};
</script>
<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100vh;
  margin: auto;
  padding: 40px 0px;
  background-color: rgba(0, 0, 0, 0.7);

  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
}
.d-flex {
  margin: 0;
  padding: 0;
}
iframe {
  border-radius: 10px;

  @media screen and (max-width: 567px) {
    width: 450px;
    height: 400px;
  }
}
</style>
