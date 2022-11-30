<template lang="">
  <div class="container purchase">
    <div class="col-12">
      <h1 class="text-secondary">{{ $t("products_hr_heading") }}</h1>

      <p>
        {{ $t("products_hr_text") }}
      </p>
    </div>
    <div class="col-12">
      <div v-for="(r, index) in resources" :key="r">
        <div class="d-flex gap-3 align-items-center bg-light m-2">
          <img src="@/assets/images/check.png" alt="" />
          <div v-if="index == 2" class="mt-3 mb-3">
            <div>
              <h4>{{ $t(r.heading_1) }}</h4>
            </div>
          </div>
          <div v-else class="mt-3 mb-3">
            <div>
              <h4>{{ $t(r.heading_1) }}</h4>
              <h4>{{ $t(r.heading_2) }}</h4>
              <h4>{{ $t(r.heading_3) }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheHumanRescources",
  data() {
    return {
      resources: [
        {
          heading_1: "hr_heading_1_1",
          heading_2: "hr_heading_1_2",
          heading_3: "hr_heading_1_3",
        },
        {
          heading_1: "hr_heading_2_1",
          heading_2: "hr_heading_2_2",
          heading_3: "hr_heading_2_3",
        },
        { heading_1: "hr_heading_3_1" },
        {
          heading_1: "hr_heading_4_1",
          heading_2: "hr_heading_4_2",
          heading_3: "hr_heading_4_3",
        },
        {
          heading_1: "hr_heading_5_1",
          heading_2: "hr_heading_5_2",
          heading_3: "hr_heading_5_3",
        },
        {
          heading_1: "hr_heading_6_1",
          heading_2: "hr_heading_6_2",
          heading_3: "hr_heading_6_3",
        },
        {
          heading_1: "hr_heading_7_1",
          heading_2: "hr_heading_7_2",
          heading_3: "hr_heading_7_3",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
h1 {
  color: white;
}
</style>
