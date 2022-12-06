<template>
  <div class="header">
    <div>
      <h1>{{ $t("about_us_next_overlay_right_heading") }}</h1>
    </div>
  </div>
  <div class="content-news">
    <div v-for="chip in chips" class="chip">
      {{ chip.chip }}
    </div>

    <div v-for="(c, index) in content" :key="c">
      <div v-if="index == 0" v-for="x in c">
        <p>
          {{ $t(x.p) }}
        </p>
      </div>
      <div v-if="index == 1" v-for="(x, index) in c">
        <div v-if="index == 4">
          <p>
            {{ $t(x.p) }}
          </p>
        </div>
        <div v-else>
          <p>
            {{ $t(x.p) }}
          </p>
          <h3>{{ $t(x.h) }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WhatsAnApi",
  data() {
    return {
      chips: [{ chip: "#api" }, { chip: "#web-services" }],

      content: [
        [
          { p: "what_is_api_p1" },
          { p: "what_is_api_p2" },
          { p: "what_is_api_p3" },
          { p: "what_is_api_p4" },
          { p: "what_is_api_p5" },
          { p: "what_is_api_p6" },
          { p: "what_is_api_p7" },
          { p: "what_is_api_p8" },
        ],
        [
          { p: "what_is_api_p9", h: "what_is_api_h1" },
          { p: "what_is_api_p10", h: "what_is_api_h2" },
          { p: "what_is_api_p11", h: "what_is_api_h3" },
          { p: "what_is_api_p12", h: "what_is_api_h4" },
          { p: "what_is_api_p13" },
        ],
      ],
    };
  },
};
</script>
<style lang="scss" scoped></style>
