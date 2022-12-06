<template lang="">
  <div class="row">
    <div class="col-12">
      <div class="paydesk">
        <div class="paydesk white-text-main">
          <div class="paydesk-header text-center">
            <h1>{{ $t("products_paydesk_header_1") }}</h1>
            <h4>{{ $t("products_paydesk_header_2") }}</h4>

            <p>
              {{ $t("products_paydesk_header_text") }}
            </p>
          </div>
          <div class="d-flex justify-content-center paydesk-items pt-5">
            <div class="col-6">
              <div
                class="d-flex align-items-center"
                v-for="pay in paydesk_1"
                :key="pay"
              >
                <h1 class="text-secondary">{{ pay.num }}</h1>
                <p class="segeo-semi-bold">
                  {{ $t(pay.text) }}
                </p>
              </div>
            </div>
            <div class="col-6">
              <div
                class="d-flex align-items-center"
                v-for="pay in paydesk_2"
                :key="pay"
              >
                <h1 class="text-secondary">{{ pay.num }}</h1>
                <p class="segeo-semi-bold">
                  {{ $t(pay.text) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheFinancePaydesk",
  data() {
    return {
      paydesk_1: [
        {
          num: "01",
          text: "products_paydesk_01_text",
        },
        {
          num: "02",
          text: "products_paydesk_02_text",
        },
        { num: "03", text: "products_paydesk_03_text" },
      ],
      paydesk_2: [
        {
          num: "04",
          text: "products_paydesk_04_text",
        },
        {
          num: "05",
          text: "products_paydesk_05_text",
        },
        {
          num: "06",
          text: "products_paydesk_06_text",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.paydesk-items {
  
  @media screen and (max-width: 567px) {
    flex-direction: column;
    justify-content: center;
    .col-6 {
      width: 90%;
      margin: auto;
      .d-flex {
        gap: 20px;
      }
    }
  }
}
</style>
