<template>
  <AboutVue />
  <AboutNext />
  <AboutTeam />
  <AboutReserv />
  <SideIcons />
  <AboutNums />
</template>
<script>
import AboutVue from "@/components/AboutView/About.vue";
import AboutNext from "@/components/AboutView/AboutNext.vue";
import AboutReserv from "@/components/AboutView/AboutReserv.vue";
import AboutTeam from "@/components/AboutView/AboutTeam.vue";
import SideIcons from "@/components/AboutView/SideIcons.vue";
import AboutNums from "@/components/AboutView/AboutNums.vue";

export default {
  components: {
    AboutVue,
    AboutNext,
    AboutTeam,
    AboutReserv,
    SideIcons,
    AboutNums,
  },
};
</script>
<style lang="scss" scoped></style>
