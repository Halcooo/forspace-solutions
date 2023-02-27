<template>
  <router-link :to="to" class="read-more">
    {{ $t(name) }}
  </router-link>
</template>

<script>
export default {
  name: "BaseButton",
  props: ["to", "name"],
};
</script>

<style lang="scss" scoped>
.read-more {
  position: relative;
  transition: all 0.5s;
  padding: 12px 40px;
  color: white;
  border: 1px solid white;
}
.read-more::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.3s;
}
.read-more:hover::before {
  opacity: 0;
  transform: scale(0.5, 0.5);
}
.read-more::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.5);
  transform: scale(1.2, 1.2);
}
.read-more:hover::after {
  opacity: 1;
  transform: scale(1, 1);
}
</style>
