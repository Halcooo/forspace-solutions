<template>
  <AboutVue />
  <AboutNext />
  <AboutChoose />
  <AboutTeam />
  <AboutReserv />
  <SideIcons />
  <AboutNums />
  <AboutMap />
</template>
<script>
import AboutVue from "@/components/AboutView/About.vue";
import AboutNext from "@/components/AboutView/AboutNext.vue";
import AboutReserv from "@/components/AboutView/AboutReserv.vue";
import AboutTeam from "@/components/AboutView/AboutTeam.vue";
import SideIcons from "@/components/AboutView/SideIcons.vue";
import AboutNums from "@/components/AboutView/AboutNums.vue";
import AboutMap from "@/components/AboutView/AboutMap.vue";
import AboutChoose from "@/components/AboutView/AboutChoose.vue";
export default {
  components: {
    AboutVue,
    AboutNext,
    AboutChoose,
    AboutTeam,
    AboutReserv,
    SideIcons,
    AboutNums,
    AboutMap,
  },
};
</script>
<style lang="scss" scoped></style>
