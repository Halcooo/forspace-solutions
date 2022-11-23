<template>
  <router-link to="route">
    {{ name }}
  </router-link>
</template>
<script>
export default {
  name: "NavLink",
  props: ["route", "name"],
};
</script>
<style lang="scss" scoped></style>
