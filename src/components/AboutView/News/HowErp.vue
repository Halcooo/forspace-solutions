<template>
  <div class="header">
    <div>
      <h2>{{ $t("about_us_news_right_flex_three") }}</h2>
    </div>
  </div>
  <div class="content-news">
    <div v-for="(c, index) in content" :key="c">
      <div v-if="index == 4">
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
  name: "HowErp",
  data() {
    return {
      chips: [{ chip: "#erp" }],

      content: [
        { p: "HowErp_p1", h: "HowErp_h1" },
        { p: "HowErp_p2", h: "HowErp_h2" },
        { p: "HowErp_p3", h: "HowErp_h3" },
        { p: "HowErp_p4", h: "HowErp_h4" },
        { p: "HowErp_p5" },
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
