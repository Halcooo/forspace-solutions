<template>
  <div class="header">
    <div>
      <h2>{{ $t("about_us_news_right_flex_two") }}</h2>
    </div>
  </div>
  <div class="content-news">
    <div v-for="c in content" :key="c">
      <div>
        <p>
          {{ $t(c.p) }}
        </p>
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
  name: "SoftwareSolutions",
  data() {
    return {
      chips: [
        { chip: "#software-development" },
        { chip: "#erp" },
        { chip: "#design" },
      ],

      content: [
        { p: "software_solutions_p1" },
        { p: "software_solutions_p2" },
        { p: "software_solutions_p3" },
        { p: "software_solutions_p4" },
        { p: "software_solutions_p5" },
        { p: "software_solutions_p6" },
        { p: "software_solutions_p7" },
        { p: "software_solutions_p8" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped></style>
