<template>
  <div>
    <div class="times-head" @click="showSideNav" :class="{ navy: navy }">
      <p class="times-line"></p>
      <p class="times-line middle"></p>
      <p class="times-line"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuBtn",
  props: {
    showSideNav: { type: Function },
  },
  data() {
    return {
      navy: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        this.navy = true;
      } else {
        this.navy = false;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";
.times-head {
  padding: 3px 5px;
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
  border-radius: 50%;

  .times-line {
    width: 80%;

    margin: 4px auto;

    background-color: white;
    padding: 1px 4px;
    transition: all 0.5s;
  }

  .middle {
    width: 40%;

    margin-left: auto;
    margin-right: 5px;
  }
}
.navy {
  .times-line {
    background-color: $navy;
  }
}
</style>
