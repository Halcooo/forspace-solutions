<template>
  <div class="header">
    <div>
      <h1>{{ $t("about_us_news_link_heading_two") }}</h1>
    </div>
  </div>
  <div class="content-news">
    <div v-for="chip in chips" class="chip">
      {{ chip.chip }}
    </div>

    <div v-for="(c, index) in content" :key="c">
      <div v-if="index == 7">
        <p>
          {{ $t(c.p) }}
        </p>
        <h3 class="dms-news">{{ $t(c.h) }}</h3>
        <h3 class="dms-news">{{ $t(c.add) }} info@forspace.ba</h3>
      </div>
      <div v-else>
        <p>
          {{ $t(c.p) }}
        </p>
        <h3>{{ $t(c.h) }}</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ErpAllInOne",
  data() {
    return {
      chips: [{ chip: "#dms" }, { chip: "#skladiste" }, { chip: "#erp" }],

      content: [
        { p: "why_companies_need_dms_p1", h: "why_companies_need_dms_h1" },
        { p: "why_companies_need_dms_p2", h: "why_companies_need_dms_h2" },
        { p: "why_companies_need_dms_p3", h: "why_companies_need_dms_h3" },
        { p: "why_companies_need_dms_p4", h: "why_companies_need_dms_h4" },
        { p: "why_companies_need_dms_p5", h: "why_companies_need_dms_h5" },
        { p: "why_companies_need_dms_p6", h: "why_companies_need_dms_h6" },
        { p: "why_companies_need_dms_p7", h: "why_companies_need_dms_h7" },
        {
          p: "why_companies_need_dms_p8",
          h: "why_companies_need_dms_h8",
          add: "why_companies_need_dms_h8_additional",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.dms-news {
  font-size: 20px;
  color: rgb(0, 55, 77);
  text-align: center;
  font-weight: 600;
}
</style>
