<template lang="">
  <div class="col-12 mt-5">
    <div class="bank-statment orange-text-main mt-5">
      <h1 class="text-center">{{ $t("products_bank_header_1") }}</h1>
      <h4 class="text-center">{{ $t("products_bank_header_2") }}</h4>
    </div>
    <div
      class="d-flex col-12 justify-content-center align-items-center bank-statment-items orange-text-main pt-5"
    >
      <div class="col-6">
        <div
          class="d-flex align-items-center"
          v-for="bank in bank_1"
          :key="bank"
        >
          <img width="60" :src="bank.url" alt="" />
          <div class="w-100">
            <h3 class="text-uppercase segeo-bold">{{ $t(bank.heading) }}</h3>
            <p class="segeo-semi-bold">{{ $t(bank.text) }}</p>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div
          class="d-flex align-items-center"
          v-for="bank in bank_2"
          :key="bank"
        >
          <img width="60" :src="bank.url" alt="" />
          <div>
            <h3 class="text-uppercase segeo-bold">{{ $t(bank.heading) }}</h3>
            <p class="segeo-semi-bold">{{ $t(bank.text) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheFinanceBankStatement",
  data() {
    return {
      bank_1: [
        {
          url: "https://forspace.ba/wp-content/uploads/2020/09/1.png",
          heading: "products_bank_1_heading_1",
          text: "products_bank_1_text_1",
        },
        {
          url: "https://forspace.ba/wp-content/uploads/2020/09/2.png",
          heading: "products_bank_1_heading_2",
          text: "products_bank_1_text_2",
        },
        {
          url: "https://forspace.ba/wp-content/uploads/2020/09/3.png",
          heading: "products_bank_1_heading_3",
          text: "products_bank_1_text_3",
        },
      ],
      bank_2: [
        {
          url: "https://forspace.ba/wp-content/uploads/2020/09/4.png",
          heading: "products_bank_2_heading_1",
          text: "products_bank_2_text_1",
        },
        {
          url: "https://forspace.ba/wp-content/uploads/2020/09/5.png",
          heading: "products_bank_2_heading_2",
          text: "products_bank_2_text_2",
        },
        {
          url: "https://forspace.ba/wp-content/uploads/2020/09/6.png",
          heading: "products_bank_2_heading_3",
          text: "products_bank_2_text_3",
        },
      ],
    };
  },
};
</script>
<style lang="scss"></style>
