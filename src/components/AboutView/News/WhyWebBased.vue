<template>
  <div class="header">
    <div>
      <h1>{{ $t("about_us_news_link_heading_three") }}</h1>
    </div>
  </div>
  <div class="content-news">
    <div v-for="chip in chips" class="chip">
      {{ chip.chip }}
    </div>

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
        <span> Nazad</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ErpAllInOne",
  data() {
    return {
      chips: [{ chip: "#cloud-based" }, { chip: "#erp" }],

      content: [
        { p: "why_web_based_p1", h: "why_web_based_h1" },
        { p: "why_web_based_p2", h: "why_web_based_h2" },
        { p: "why_web_based_p3", h: "why_web_based_h3" },
        { p: "why_web_based_p4", h: "why_web_based_h4" },
        { p: "why_web_based_p5", h: "why_web_based_h5" },
        { p: "why_web_based_p6" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped></style>
