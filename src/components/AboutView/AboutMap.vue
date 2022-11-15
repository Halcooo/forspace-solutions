<template>
  <div>
    <div class="about_map">
      <div class="inner">
        <div style="position: relative; z-index: 1">
          <h1>Pronadjite nas na karti</h1>
          <p
            style="
              width: 100%;
              background-color: orangered;
              padding: 3px;
              position: absolute;
              bottom: 0;
              z-index: -1;
              border-radius: 50px;
              transform: rotate(-0.5deg);
            "
          ></p>
        </div>
        <button type="button" class="button" @click="showMap()">
          Google Maps
        </button>
      </div>
    </div>
    <TheLocationMap :showMap="showMap" />
  </div>
</template>

<script>
import TheLocationMap from "../TheLocationMap.vue";
export default {
  components: { TheLocationMap },
  data() {
    return {};
  },
  methods: {
    showMap() {
      if (this.$store.state.map) {
        this.$store.state.map = false;
      } else {
        this.$store.state.map = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.about_map {
  width: 100%;
  //   height: 30vh;
  background-color: rgb(43, 43, 43);
  //   background: url("@/assets/images/pins.jpg") no-repeat center center/cover;
  display: flex;
  padding: 150px 50px;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;

  .inner {
    width: 50%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    color: white;
    font-size: 50px;
  }
  .button {
    background-color: transparent;
    border: 2px solid white;
    padding: 20px 60px;
    border-radius: 2px;
    color: white;
    font-size: 25px;
    &:hover {
      border: 2px solid rgb(255, 97, 0);
    }
  }
}
</style>
