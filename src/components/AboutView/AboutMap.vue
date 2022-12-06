<template>
  <div>
    <div class="about_map">
      <div class="inner">
        <div style="position: relative; z-index: 1">
          <h1>Pronadjite nas na karti</h1>
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
      if (this.$store.getters.getMapState) {
        this.$store.commit("setMapState", false); // vuex store must be used like this with getters and mutations and separate modules!!
      } else {
        this.$store.commit("setMapState", true);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.about_map {
  width: 100%;
  // background-color: rgb(43, 43, 43);
  background: url("@/assets/images/leaf.jpg") no-repeat center center/cover;
  display: flex;
  padding: 50px 50px;
  justify-content: center;

  align-items: center;
  margin-top: 5%;

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
  .under {
    width: 100%;
    background-color: $lightgreen;
    padding: 3px;
    position: absolute;
    bottom: 0;
    z-index: -1;
    border-radius: 50px;
    transform: rotate(-0.5deg);
  }
  .button {
    background-color: transparent;
    border: 2px solid white;
    padding: 20px 60px;
    border-radius: 50px;
    color: white;
    font-size: 25px;
    &:hover {
      border: 2px solid rgb(255, 97, 0);
    }
  }
  @media screen and (max-width: 567px) {
    .inner {
      h1 {
        font-size: 40px;
      }
      width: 90%;
      flex-direction: column;
    }
    .button {
      margin-top: 5%;
    }
  }
}
</style>
