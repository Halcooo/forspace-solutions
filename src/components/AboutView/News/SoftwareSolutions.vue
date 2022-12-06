<template>
  <div class="header">
    <div>
      <h1>{{ $t("about_us_news_right_flex_two") }}</h1>
    </div>
  </div>
  <div class="content-news">
    <div v-for="ch in chips" class="chip">
      {{ ch.chip }}
    </div>

    <div v-for="c in content" :key="c">
      <div>
        <p>
          {{ $t(c.p) }}
        </p>
      </div>
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
