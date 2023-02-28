<template>
  <div class="header">
    <div>
      <h2>{{ $t("about_us_news_right_flex_four") }}</h2>
    </div>
  </div>
  <div class="content-news">
    <div v-for="(c, index) in content" :key="c">
      <div v-if="index == 3">
        <p>
          {{ $t(c.p) }}
        </p>
      </div>
      <div v-else>
        <p>{{ $t(c.p) }}</p>
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
  name: "DigitalTransformation",
  data() {
    return {
      chips: [{ chip: "#erp" }, { chip: "#digitalna-transformacija" }],
      content: [
        { p: "digital_trans_p1", h: "digital_trans_h1" },
        { p: "digital_trans_p2", h: "digital_trans_h2" },
        { p: "digital_trans_p3", h: "digital_trans_h3" },
        { p: "digital_trans_p4" },
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
