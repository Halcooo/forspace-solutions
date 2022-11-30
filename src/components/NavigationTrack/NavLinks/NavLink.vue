<template>
  <router-link to="route">
    {{ $t(name) }}
  </router-link>
</template>
<script>
export default {
  name: "NavLink",
  props: ["route", "name"],
};
</script>
<style lang="scss" scoped></style>
