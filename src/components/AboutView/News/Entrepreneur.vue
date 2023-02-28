<template>
  <div class="header">
    <div>
      <h2>{{ $t("about_us_news_right_flex_one") }}</h2>
    </div>
  </div>
  <div class="content-news">
    <div v-for="(c, index) in content" :key="c">
      <div v-if="index == 5">
        <p>
          {{ $t(c.p) }}
        </p>
      </div>
      <div v-else>
        <p>
          {{ $t(c.p) }}
        </p>
        <h3>{{ $t(c.h) }}</h3>
      </div>
    </div>
    <div class="mt-5 mb-5 ps-2">
      <router-link to="/about">
        <font-awesome-icon icon="fa-solid fa-chevron-left" />
        <span> {{ $t("back") }}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Entreprenuor",
  data() {
    return {
      chips: [{ chip: "#preduzetnistvo" }],

      content: [
        { p: "entrepeneur_p1", h: "entrepeneur_h1" },
        { p: "entrepeneur_p2", h: "entrepeneur_h2" },
        { p: "entrepeneur_p3", h: "entrepeneur_h3" },
        { p: "entrepeneur_p4", h: "entrepeneur_h4" },
        { p: "entrepeneur_p5", h: "entrepeneur_h5" },
        { p: "entrepeneur_p6" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
h2 {
  color: white;
}
</style>
